var k0=Object.defineProperty;var V0=(i,e)=>{for(var t in e)k0(i,t,{get:e[t],enumerable:!0})};var Mh="170";var G0=0,af=1,W0=2;var Fp=1,X0=2,Li=3,xi=0,En=1,Qe=2,vi=0,Dr=1,on=2,lf=3,cf=4,cn=5,Os=100,q0=101,Y0=102,$0=103,Z0=104,Eh=200,gn=201,K0=202,j0=203,zo=204,$t=205,J0=206,Q0=207,eg=208,tg=209,ng=210,ig=211,sg=212,rg=213,og=214,su=0,ru=1,ou=2,zr=3,au=4,lu=5,cu=6,uu=7,wh=0,ag=1,lg=2,cs=0,Th=1,Sh=2,Ah=3,Rh=4,cg=5,Ch=6,Qo=7,uf="attached",ug="detached",Np=300,Br=301,Or=302,hu=303,du=304,zl=306,Vs=1e3,Di=1001,Bo=1002,wn=1003,Ph=1004;var Ir=1005;var Nn=1006,Io=1007;var gi=1008;var Hi=1009,Hp=1010,zp=1011,Oo=1012,Ih=1013,Gs=1014,li=1015,ui=1016,Lh=1017,Uh=1018,kr=1020,Bp=35902,Op=1021,kp=1022,Zn=1023,Vp=1024,Gp=1025,Fr=1026,Vr=1027,Dh=1028,Fh=1029,Wp=1030,Nh=1031;var Hh=1033,el=33776,tl=33777,nl=33778,il=33779,fu=35840,pu=35841,mu=35842,gu=35843,vu=36196,xu=37492,yu=37496,_u=37808,bu=37809,Mu=37810,Eu=37811,wu=37812,Tu=37813,Su=37814,Au=37815,Ru=37816,Cu=37817,Pu=37818,Iu=37819,Lu=37820,Uu=37821,sl=36492,Du=36494,Fu=36495,Xp=36283,Nu=36284,Hu=36285,zu=36286;var Gr=2300,Wr=2301,Mc=2302,hf=2400,df=2401,ff=2402,hg=2500;var qp=0,Bl=1,ea=2,dg=3200,fg=3201;var zh=0,pg=1,os="",wt="srgb",Tn="srgb-linear",Ol="linear",Rt="srgb";var dr=7680;var pf=519,mg=512,gg=513,vg=514,Yp=515,xg=516,yg=517,_g=518,bg=519,Bu=35044,Sn=35048;var mf="300 es",Fi=2e3,rl=2001,us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=1234567,Lo=Math.PI/180,Xr=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function rn(i,e,t){return Math.max(e,Math.min(t,i))}function Bh(i,e){return(i%e+e)%e}function Mg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Eg(i,e,t){return i!==e?(t-i)/(e-i):0}function Uo(i,e,t){return(1-t)*i+t*e}function wg(i,e,t,n){return Uo(i,e,1-Math.exp(-t*n))}function Tg(i,e=1){return e-Math.abs(Bh(i,e*2)-e)}function Sg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cg(i,e){return i+Math.random()*(e-i)}function Pg(i){return i*(.5-Math.random())}function Ig(i){i!==void 0&&(gf=i);let e=gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lg(i){return i*Lo}function Ug(i){return i*Xr}function Dg(i){return(i&i-1)===0&&i!==0}function Fg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ng(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Be={DEG2RAD:Lo,RAD2DEG:Xr,generateUUID:Kn,clamp:rn,euclideanModulo:Bh,mapLinear:Mg,inverseLerp:Eg,lerp:Uo,damp:wg,pingpong:Tg,smoothstep:Sg,smootherstep:Ag,randInt:Rg,randFloat:Cg,randFloatSpread:Pg,seededRandom:Ig,degToRad:Lg,radToDeg:Ug,isPowerOfTwo:Dg,ceilPowerOfTwo:Fg,floorPowerOfTwo:Ng,setQuaternionFromProperEuler:Hg,normalize:Ct,denormalize:ai},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],_=s[1],x=s[4],y=s[7],R=s[2],w=s[5],A=s[8];return r[0]=o*v+a*_+l*R,r[3]=o*g+a*x+l*w,r[6]=o*m+a*y+l*A,r[1]=c*v+u*_+h*R,r[4]=c*g+u*x+h*w,r[7]=c*m+u*y+h*A,r[2]=d*v+f*_+p*R,r[5]=d*g+f*x+p*w,r[8]=d*m+f*y+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ec.makeScale(e,t)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ec=new dt;function $p(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zg(){let i=ko("canvas");return i.style.display="block",i}var vf={};function Co(i){i in vf||(vf[i]=!0,console.warn(i))}function Bg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Og(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var vt={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Rt&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Rt&&(i.r=Nr(i.r),i.g=Nr(i.g),i.b=Nr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===os?Ol:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xf=[.64,.33,.3,.6,.15,.06],yf=[.2126,.7152,.0722],_f=[.3127,.329],bf=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mf=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[Tn]:{primaries:xf,whitePoint:_f,transfer:Ol,toXYZ:bf,fromXYZ:Mf,luminanceCoefficients:yf,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:xf,whitePoint:_f,transfer:Rt,toXYZ:bf,fromXYZ:Mf,luminanceCoefficients:yf,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}});var fr,Ou=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fr===void 0&&(fr=ko("canvas")),fr.width=e.width,fr.height=e.height;let n=fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ko("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vg=0,ol=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wc(s[o].image)):r.push(wc(s[o]))}else r=wc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gg=0,dn=class i extends us{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Di,s=Di,r=Nn,o=gi,a=Zn,l=Hi,c=i.DEFAULT_ANISOTROPY,u=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Kn(),this.name="",this.source=new ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Np;dn.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(f+1)/2,R=(m+1)/2,w=(u+d)/4,A=(h+v)/4,C=(p+g)/4;return x>y&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=A/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=C/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(h-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ku=class extends us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ol(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends ku{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},al=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vu=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==p){let g=1-a,m=l*d+c*f+u*p+h*v,_=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let R=Math.sqrt(x),w=Math.atan2(R,m*_);g=Math.sin(g*w)/R,a=Math.sin(a*w)/R}let y=a*_;if(l=l*g+d*y,c=c*g+f*y,u=u*g+p*y,h=h*g+v*y,g===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ef.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tc=new M,Ef=new bt,Zt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),ba.subVectors(this.max,xo),pr.subVectors(e.a,xo),mr.subVectors(e.b,xo),gr.subVectors(e.c,xo),es.subVectors(mr,pr),ts.subVectors(gr,mr),Us.subVectors(pr,gr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Us.z,Us.y,es.z,0,-es.x,ts.z,0,-ts.x,Us.z,0,-Us.x,-es.y,es.x,0,-ts.y,ts.x,0,-Us.y,Us.x,0];return!Sc(t,pr,mr,gr,ba)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,pr,mr,gr,ba))?!1:(Ma.crossVectors(es,ts),t=[Ma.x,Ma.y,Ma.z],Sc(t,pr,mr,gr,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new M,new M,new M,new M,new M,new M,new M,new M],si=new M,_a=new Zt,pr=new M,mr=new M,gr=new M,es=new M,ts=new M,Us=new M,xo=new M,ba=new M,Ma=new M,Ds=new M;function Sc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ds.fromArray(i,r);let a=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),u=n.dot(Ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Wg=new Zt,yo=new M,Ac=new M,In=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);let t=yo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Ac)),this.expandByPoint(yo.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new M,Rc=new M,Ea=new M,ns=new M,Cc=new M,wa=new M,Pc=new M,Ws=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rc.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(Rc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ea),a=ns.dot(this.direction),l=-ns.dot(Ea),c=ns.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Rc).addScaledVector(Ea,d),f}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,s,r){Cc.subVectors(t,e),wa.subVectors(n,e),Pc.crossVectors(Cc,wa);let o=this.direction.dot(Pc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);let l=a*this.direction.dot(wa.crossVectors(ns,wa));if(l<0)return null;let c=a*this.direction.dot(Cc.cross(ns));if(c<0||l+c>o)return null;let u=-a*ns.dot(Pc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,p,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,v,g)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,v=c*h;t[0]=d+v*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,v=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xg,e,qg)}lookAt(e,t,n){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),is.crossVectors(n,On),is.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),is.crossVectors(n,On)),is.normalize(),Ta.crossVectors(On,is),s[0]=is.x,s[4]=Ta.x,s[8]=On.x,s[1]=is.y,s[5]=Ta.y,s[9]=On.y,s[2]=is.z,s[6]=Ta.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],_=n[3],x=n[7],y=n[11],R=n[15],w=s[0],A=s[4],C=s[8],T=s[12],b=s[1],S=s[5],z=s[9],F=s[13],L=s[2],N=s[6],U=s[10],k=s[14],H=s[3],K=s[7],O=s[11],j=s[15];return r[0]=o*w+a*b+l*L+c*H,r[4]=o*A+a*S+l*N+c*K,r[8]=o*C+a*z+l*U+c*O,r[12]=o*T+a*F+l*k+c*j,r[1]=u*w+h*b+d*L+f*H,r[5]=u*A+h*S+d*N+f*K,r[9]=u*C+h*z+d*U+f*O,r[13]=u*T+h*F+d*k+f*j,r[2]=p*w+v*b+g*L+m*H,r[6]=p*A+v*S+g*N+m*K,r[10]=p*C+v*z+g*U+m*O,r[14]=p*T+v*F+g*k+m*j,r[3]=_*w+x*b+y*L+R*H,r[7]=_*A+x*S+y*N+R*K,r[11]=_*C+x*z+y*U+R*O,r[15]=_*T+x*F+y*k+R*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=h*g*c-v*d*c+v*l*f-a*g*f-h*l*m+a*d*m,x=p*d*c-u*g*c-p*l*f+o*g*f+u*l*m-o*d*m,y=u*v*c-p*h*c+p*a*f-o*v*f-u*a*m+o*h*m,R=p*h*l-u*v*l-p*a*d+o*v*d+u*a*g-o*h*g,w=t*_+n*x+s*y+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=_*A,e[1]=(v*d*r-h*g*r-v*s*f+n*g*f+h*s*m-n*d*m)*A,e[2]=(a*g*r-v*l*r+v*s*c-n*g*c-a*s*m+n*l*m)*A,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*A,e[4]=x*A,e[5]=(u*g*r-p*d*r+p*s*f-t*g*f-u*s*m+t*d*m)*A,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*A,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*A,e[8]=y*A,e[9]=(p*h*r-u*v*r-p*n*f+t*v*f+u*n*m-t*h*m)*A,e[10]=(o*v*r-p*a*r+p*n*c-t*v*c-o*n*m+t*a*m)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*A,e[12]=R*A,e[13]=(u*v*s-p*h*s+p*n*d-t*v*d-u*n*g+t*h*g)*A,e[14]=(p*a*s-o*v*s-p*n*l+t*v*l+o*n*g-t*a*g)*A,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,v=o*u,g=o*h,m=a*h,_=l*c,x=l*u,y=l*h,R=n.x,w=n.y,A=n.z;return s[0]=(1-(v+m))*R,s[1]=(f+y)*R,s[2]=(p-x)*R,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(d+m))*w,s[6]=(g+_)*w,s[7]=0,s[8]=(p+x)*A,s[9]=(g-_)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=vr.set(s[0],s[1],s[2]).length(),o=vr.set(s[4],s[5],s[6]).length(),a=vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ri.copy(this);let c=1/r,u=1/o,h=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,t.setFromRotationMatrix(ri),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Fi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,p;if(a===Fi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===rl)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Fi){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,p,v;if(a===Fi)p=(o+r)*h,v=-2*h;else if(a===rl)p=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vr=new M,ri=new we,Xg=new M(0,0,0),qg=new M(1,1,1),is=new M,Ta=new M,On=new M,wf=new we,Tf=new bt,yn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var Vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yg=0,Sf=new M,xr=new bt,Ri=new we,Sa=new M,_o=new M,$g=new M,Zg=new bt,Af=new M(1,0,0),Rf=new M(0,1,0),Cf=new M(0,0,1),Pf={type:"added"},Kg={type:"removed"},yr={type:"childadded",child:null},Ic={type:"childremoved",child:null},Gt=class i extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new M,t=new yn,n=new bt,s=new M(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new dt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Af,e)}rotateY(e){return this.rotateOnAxis(Rf,e)}rotateZ(e){return this.rotateOnAxis(Cf,e)}translateOnAxis(e,t){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Af,e)}translateY(e){return this.translateOnAxis(Rf,e)}translateZ(e){return this.translateOnAxis(Cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(_o,Sa,this.up):Ri.lookAt(Sa,_o,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(Ri),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pf),yr.child=e,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kg),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pf),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,$g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,Zg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Gt.DEFAULT_UP=new M(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new M,Ci=new M,Lc=new M,Pi=new M,_r=new M,br=new M,If=new M,Uc=new M,Dc=new M,Fc=new M,Nc=new yt,Hc=new yt,zc=new yt,as=class i{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){oi.subVectors(s,t),Ci.subVectors(n,t),Lc.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Ci),l=oi.dot(Lc),c=Ci.dot(Ci),u=Ci.dot(Lc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Nc.setScalar(0),Hc.setScalar(0),zc.setScalar(0),Nc.fromBufferAttribute(e,t),Hc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Nc,r.x),o.addScaledVector(Hc,r.y),o.addScaledVector(zc,r.z),o}static isFrontFacing(e,t,n,s){return oi.subVectors(n,t),Ci.subVectors(e,t),oi.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),oi.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;_r.subVectors(s,n),br.subVectors(r,n),Uc.subVectors(e,n);let l=_r.dot(Uc),c=br.dot(Uc);if(l<=0&&c<=0)return t.copy(n);Dc.subVectors(e,s);let u=_r.dot(Dc),h=br.dot(Dc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(_r,o);Fc.subVectors(e,r);let f=_r.dot(Fc),p=br.dot(Fc);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(br,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return If.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(If,a);let m=1/(g+v+d);return o=v*m,a=d*m,t.copy(n).addScaledVector(_r,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Bh(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bc(o,r,e+1/3),this.g=Bc(o,r,e),this.b=Bc(o,r,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=Zp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return vt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(rn(Mn.r*255,0,255))*65536+Math.round(rn(Mn.g*255,0,255))*256+Math.round(rn(Mn.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Mn.copy(this),t);let n=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=wt){vt.fromWorkingColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,s=Mn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Aa);let n=Uo(ss.h,Aa.h,t),s=Uo(ss.s,Aa.s,t),r=Uo(ss.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new oe;oe.NAMES=Zp;var jg=0,Ln=class extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Kn(),this.name="",this.blending=Dr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=$t,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==$t&&(n.blendDst=this.blendDst),this.blendEquation!==Os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Lt=class extends Ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tn=new M,Ra=new le,nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bu,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bu&&(e.usage=this.usage),e}};var ll=class extends nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var cl=class extends nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xe=class extends nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jg=0,$n=new we,Oc=new Gt,Mr=new M,kn=new Zt,bo=new Zt,hn=new M,tt=class i extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($p(e)?cl:ll)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(kn.min,bo.min),kn.expandByPoint(hn),hn.addVectors(kn.max,bo.max),kn.expandByPoint(hn)):(kn.expandByPoint(bo.min),kn.expandByPoint(bo.max))}kn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),hn.add(Mr)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new M,l[C]=new M;let c=new M,u=new M,h=new M,d=new le,f=new le,p=new le,v=new M,g=new M;function m(C,T,b){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(S),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(S),a[C].add(v),a[T].add(v),a[b].add(v),l[C].add(g),l[T].add(g),l[b].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,T=_.length;C<T;++C){let b=_[C],S=b.start,z=b.count;for(let F=S,L=S+z;F<L;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let x=new M,y=new M,R=new M,w=new M;function A(C){R.fromBufferAttribute(s,C),w.copy(R);let T=a[C];x.copy(T),x.sub(R.multiplyScalar(R.dot(T))).normalize(),y.crossVectors(w,T);let S=y.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,S)}for(let C=0,T=_.length;C<T;++C){let b=_[C],S=b.start,z=b.count;for(let F=S,L=S+z;F<L;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new M,r=new M,o=new M,a=new M,l=new M,c=new M,u=new M,h=new M;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new nt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lf=new we,Fs=new Ws,Ca=new In,Uf=new M,Pa=new M,Ia=new M,La=new M,kc=new M,Ua=new M,Df=new M,Da=new M,Re=class extends Gt{constructor(e=new tt,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(kc.fromBufferAttribute(h,e),o?Ua.addScaledVector(kc,u):Ua.addScaledVector(kc.sub(t),u))}t.add(Ua)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),!(Ca.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Ca,Uf)===null||Fs.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(Lf.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Lf),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,R=x;y<R;y+=3){let w=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);s=Fa(this,m,e,n,c,u,h,w,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let _=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);s=Fa(this,o,e,n,c,u,h,_,x,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,R=x;y<R;y+=3){let w=y,A=y+1,C=y+2;s=Fa(this,m,e,n,c,u,h,w,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){let _=g,x=g+1,y=g+2;s=Fa(this,o,e,n,c,u,h,_,x,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Qg(i,e,t,n,s,r,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===xi,a),l===null)return null;Da.copy(a),Da.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Da);return c<t.near||c>t.far?null:{distance:c,point:Da.clone(),object:i}}function Fa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Pa),i.getVertexPosition(l,Ia),i.getVertexPosition(c,La);let u=Qg(i,e,t,n,Pa,Ia,La,Df);if(u){let h=new M;as.getBarycoord(Df,Pa,Ia,La,h),s&&(u.uv=as.getInterpolatedAttribute(s,a,l,c,h,new le)),r&&(u.uv1=as.getInterpolatedAttribute(r,a,l,c,h,new le)),o&&(u.normal=as.getInterpolatedAttribute(o,a,l,c,h,new M),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new M,materialIndex:0};as.getNormal(Pa,Ia,La,d.normal),u.face=d,u.barycoord=h}return u}var Xs=class i extends tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(h,2));function p(v,g,m,_,x,y,R,w,A,C,T){let b=y/A,S=R/C,z=y/2,F=R/2,L=w/2,N=A+1,U=C+1,k=0,H=0,K=new M;for(let O=0;O<U;O++){let j=O*S-F;for(let ve=0;ve<N;ve++){let de=ve*b-z;K[v]=de*_,K[g]=j*x,K[m]=L,c.push(K.x,K.y,K.z),K[v]=0,K[g]=0,K[m]=w>0?1:-1,u.push(K.x,K.y,K.z),h.push(ve/A),h.push(1-O/C),k+=1}}for(let O=0;O<C;O++)for(let j=0;j<A;j++){let ve=d+j+N*O,de=d+j+N*(O+1),V=d+(j+1)+N*(O+1),ee=d+(j+1)+N*O;l.push(ve,de,ee),l.push(de,V,ee),H+=6}a.addGroup(f,H,T),f+=H,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Cn(i){let e={};for(let t=0;t<i.length;t++){let n=qr(i[t]);for(let s in n)e[s]=n[s]}return e}function ev(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var ys={clone:qr,merge:Cn},tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tv,this.fragmentShader=nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ul=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rs=new M,Ff=new le,Nf=new le,Vt=class extends ul{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Ff,Nf),t.subVectors(Nf,Ff)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Er=-90,wr=1,Gu=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Er,wr,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Er,wr,e,t);r.layers=this.layers,this.add(r);let o=new Vt(Er,wr,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Er,wr,e,t);a.layers=this.layers,this.add(a);let l=new Vt(Er,wr,e,t);l.layers=this.layers,this.add(l);let c=new Vt(Er,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},hl=class extends dn{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Br,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wu=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xs(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:vi});r.uniforms.tEquirect.value=t;let o=new Re(s,r),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=Nn),new Gu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Vc=new M,iv=new M,sv=new dt,Ui=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Vc.subVectors(n,t).cross(iv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sv.getNormalMatrix(e),s=this.coplanarPoint(Vc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ns=new In,Na=new M,Go=class{constructor(e=new Ui,t=new Ui,n=new Ui,s=new Ui,r=new Ui,o=new Ui){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],p=s[9],v=s[10],g=s[11],m=s[12],_=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,g-f,y-m).normalize(),n[1].setComponents(l+r,d+c,g+f,y+m).normalize(),n[2].setComponents(l+o,d+u,g+p,y+_).normalize(),n[3].setComponents(l-o,d-u,g-p,y-_).normalize(),n[4].setComponents(l-a,d-h,g-v,y-x).normalize(),t===Fi)n[5].setComponents(l+a,d+h,g+v,y+x).normalize();else if(t===rl)n[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Na.x=s.normal.x>0?e.max.x:e.min.x,Na.y=s.normal.y>0?e.max.y:e.min.y,Na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rv(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],v=h[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fn=class i extends tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){let _=m*d-o;for(let x=0;x<c;x++){let y=x*h-r;p.push(y,-_,0),v.push(0,0,1),g.push(x/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let x=_+c*m,y=_+c*(m+1),R=_+1+c*(m+1),w=_+1+c*m;f.push(x,y,w),f.push(y,R,w)}this.setIndex(f),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ov=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,av=`#ifdef USE_ALPHAHASH
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
#endif`,lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dv=`#ifdef USE_AOMAP
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
#endif`,fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pv=`#ifdef USE_BATCHING
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
#endif`,mv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yv=`#ifdef USE_IRIDESCENCE
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
#endif`,_v=`#ifdef USE_BUMPMAP
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cv=`#define PI 3.141592653589793
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
} // validated`,Pv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iv=`vec3 transformedNormal = objectNormal;
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
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yv=`#ifdef USE_GRADIENTMAP
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
}`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jv=`uniform bool receiveShadow;
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
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ix=`PhysicalMaterial material;
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
#endif`,sx=`struct PhysicalMaterial {
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
}`,rx=`
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
#endif`,ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mx=`#if defined( USE_POINTS_UV )
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
#endif`,gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bx=`#ifdef USE_MORPHTARGETS
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
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wx=`float getShadowMask() {
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
}`,Xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#ifdef USE_TRANSMISSION
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oy=`uniform sampler2D t2D;
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`#include <common>
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
}`,dy=`#if DEPTH_PACKING == 3200
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
}`,fy=`#define DISTANCE
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
}`,py=`#define DISTANCE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`uniform float scale;
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
}`,xy=`uniform vec3 diffuse;
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
}`,yy=`#include <common>
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
}`,_y=`uniform vec3 diffuse;
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
}`,by=`#define LAMBERT
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
}`,My=`#define LAMBERT
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
}`,Ey=`#define MATCAP
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
}`,wy=`#define MATCAP
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
}`,Ty=`#define NORMAL
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
}`,Sy=`#define NORMAL
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
}`,Ay=`#define PHONG
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
}`,Ry=`#define PHONG
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
}`,Cy=`#define STANDARD
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
}`,Py=`#define STANDARD
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
}`,Iy=`#define TOON
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
}`,Ly=`#define TOON
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
}`,Uy=`uniform float size;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,Ny=`uniform vec3 color;
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
}`,Hy=`uniform float rotation;
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
}`,zy=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:ov,alphahash_pars_fragment:av,alphamap_fragment:lv,alphamap_pars_fragment:cv,alphatest_fragment:uv,alphatest_pars_fragment:hv,aomap_fragment:dv,aomap_pars_fragment:fv,batching_pars_vertex:pv,batching_vertex:mv,begin_vertex:gv,beginnormal_vertex:vv,bsdfs:xv,iridescence_fragment:yv,bumpmap_pars_fragment:_v,clipping_planes_fragment:bv,clipping_planes_pars_fragment:Mv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:wv,color_fragment:Tv,color_pars_fragment:Sv,color_pars_vertex:Av,color_vertex:Rv,common:Cv,cube_uv_reflection_fragment:Pv,defaultnormal_vertex:Iv,displacementmap_pars_vertex:Lv,displacementmap_vertex:Uv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Fv,colorspace_fragment:Nv,colorspace_pars_fragment:Hv,envmap_fragment:zv,envmap_common_pars_fragment:Bv,envmap_pars_fragment:Ov,envmap_pars_vertex:kv,envmap_physical_pars_fragment:Jv,envmap_vertex:Vv,fog_vertex:Gv,fog_pars_vertex:Wv,fog_fragment:Xv,fog_pars_fragment:qv,gradientmap_pars_fragment:Yv,lightmap_pars_fragment:$v,lights_lambert_fragment:Zv,lights_lambert_pars_fragment:Kv,lights_pars_begin:jv,lights_toon_fragment:Qv,lights_toon_pars_fragment:ex,lights_phong_fragment:tx,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:sx,lights_fragment_begin:rx,lights_fragment_maps:ox,lights_fragment_end:ax,logdepthbuf_fragment:lx,logdepthbuf_pars_fragment:cx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:hx,map_fragment:dx,map_pars_fragment:fx,map_particle_fragment:px,map_particle_pars_fragment:mx,metalnessmap_fragment:gx,metalnessmap_pars_fragment:vx,morphinstance_vertex:xx,morphcolor_vertex:yx,morphnormal_vertex:_x,morphtarget_pars_vertex:bx,morphtarget_vertex:Mx,normal_fragment_begin:Ex,normal_fragment_maps:wx,normal_pars_fragment:Tx,normal_pars_vertex:Sx,normal_vertex:Ax,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Px,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Lx,opaque_fragment:Ux,packing:Dx,premultiplied_alpha_fragment:Fx,project_vertex:Nx,dithering_fragment:Hx,dithering_pars_fragment:zx,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Wx,skinbase_vertex:Xx,skinning_pars_vertex:qx,skinning_vertex:Yx,skinnormal_vertex:$x,specularmap_fragment:Zx,specularmap_pars_fragment:Kx,tonemapping_fragment:jx,tonemapping_pars_fragment:Jx,transmission_fragment:Qx,transmission_pars_fragment:ey,uv_pars_fragment:ty,uv_pars_vertex:ny,uv_vertex:iy,worldpos_vertex:sy,background_vert:ry,background_frag:oy,backgroundCube_vert:ay,backgroundCube_frag:ly,cube_vert:cy,cube_frag:uy,depth_vert:hy,depth_frag:dy,distanceRGBA_vert:fy,distanceRGBA_frag:py,equirect_vert:my,equirect_frag:gy,linedashed_vert:vy,linedashed_frag:xy,meshbasic_vert:yy,meshbasic_frag:_y,meshlambert_vert:by,meshlambert_frag:My,meshmatcap_vert:Ey,meshmatcap_frag:wy,meshnormal_vert:Ty,meshnormal_frag:Sy,meshphong_vert:Ay,meshphong_frag:Ry,meshphysical_vert:Cy,meshphysical_frag:Py,meshtoon_vert:Iy,meshtoon_frag:Ly,points_vert:Uy,points_frag:Dy,shadow_vert:Fy,shadow_frag:Ny,sprite_vert:Hy,sprite_frag:zy},He={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},mi={basic:{uniforms:Cn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Cn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new oe(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Cn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Cn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Cn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new oe(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Cn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Cn([He.points,He.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Cn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Cn([He.common,He.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Cn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Cn([He.sprite,He.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Cn([He.common,He.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Cn([He.lights,He.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};mi.physical={uniforms:Cn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Ha={r:0,b:0,g:0},Hs=new yn,By=new we;function Oy(i,e,t,n,s,r,o){let a=new oe(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function p(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1,y=p(_);y===null?m(a,l):y&&y.isColor&&(m(y,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,x){let y=p(x);y&&(y.isCubeTexture||y.mapping===zl)?(u===void 0&&(u=new Re(new Xs(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:qr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Hs.copy(x.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(By.makeRotationFromEuler(Hs)),u.material.toneMapped=vt.getTransfer(y.colorSpace)!==Rt,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Re(new fn(2,2),new We({name:"BackgroundMaterial",uniforms:qr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=vt.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,x){_.getRGB(Ha,Kp(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:v,addToRenderList:g}}function ky(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,S,z,F,L){let N=!1,U=h(F,z,S);r!==U&&(r=U,c(r.object)),N=f(b,F,z,L),N&&p(b,F,z,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(b,S,z,F),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,S,z){let F=z.wireframe===!0,L=n[b.id];L===void 0&&(L={},n[b.id]=L);let N=L[S.id];N===void 0&&(N={},L[S.id]=N);let U=N[F];return U===void 0&&(U=d(l()),N[F]=U),U}function d(b){let S=[],z=[],F=[];for(let L=0;L<t;L++)S[L]=0,z[L]=0,F[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:z,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,S,z,F){let L=r.attributes,N=S.attributes,U=0,k=z.getAttributes();for(let H in k)if(k[H].location>=0){let O=L[H],j=N[H];if(j===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),O===void 0||O.attribute!==j||j&&O.data!==j.data)return!0;U++}return r.attributesNum!==U||r.index!==F}function p(b,S,z,F){let L={},N=S.attributes,U=0,k=z.getAttributes();for(let H in k)if(k[H].location>=0){let O=N[H];O===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(O=b.instanceColor));let j={};j.attribute=O,O&&O.data&&(j.data=O.data),L[H]=j,U++}r.attributes=L,r.attributesNum=U,r.index=F}function v(){let b=r.newAttributes;for(let S=0,z=b.length;S<z;S++)b[S]=0}function g(b){m(b,0)}function m(b,S){let z=r.newAttributes,F=r.enabledAttributes,L=r.attributeDivisors;z[b]=1,F[b]===0&&(i.enableVertexAttribArray(b),F[b]=1),L[b]!==S&&(i.vertexAttribDivisor(b,S),L[b]=S)}function _(){let b=r.newAttributes,S=r.enabledAttributes;for(let z=0,F=S.length;z<F;z++)S[z]!==b[z]&&(i.disableVertexAttribArray(z),S[z]=0)}function x(b,S,z,F,L,N,U){U===!0?i.vertexAttribIPointer(b,S,z,L,N):i.vertexAttribPointer(b,S,z,F,L,N)}function y(b,S,z,F){v();let L=F.attributes,N=z.getAttributes(),U=S.defaultAttributeValues;for(let k in N){let H=N[k];if(H.location>=0){let K=L[k];if(K===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){let O=K.normalized,j=K.itemSize,ve=e.get(K);if(ve===void 0)continue;let de=ve.buffer,V=ve.type,ee=ve.bytesPerElement,pe=V===i.INT||V===i.UNSIGNED_INT||K.gpuType===Ih;if(K.isInterleavedBufferAttribute){let re=K.data,xe=re.stride,ce=K.offset;if(re.isInstancedInterleavedBuffer){for(let Se=0;Se<H.locationSize;Se++)m(H.location+Se,re.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Se=0;Se<H.locationSize;Se++)g(H.location+Se);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Se=0;Se<H.locationSize;Se++)x(H.location+Se,j/H.locationSize,V,O,xe*ee,(ce+j/H.locationSize*Se)*ee,pe)}else{if(K.isInstancedBufferAttribute){for(let re=0;re<H.locationSize;re++)m(H.location+re,K.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let re=0;re<H.locationSize;re++)g(H.location+re);i.bindBuffer(i.ARRAY_BUFFER,de);for(let re=0;re<H.locationSize;re++)x(H.location+re,j/H.locationSize,V,O,j*ee,j/H.locationSize*re*ee,pe)}}else if(U!==void 0){let O=U[k];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(H.location,O);break;case 3:i.vertexAttrib3fv(H.location,O);break;case 4:i.vertexAttrib4fv(H.location,O);break;default:i.vertexAttrib1fv(H.location,O)}}}}_()}function R(){C();for(let b in n){let S=n[b];for(let z in S){let F=S[z];for(let L in F)u(F[L].object),delete F[L];delete S[z]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let S=n[b.id];for(let z in S){let F=S[z];for(let L in F)u(F[L].object),delete F[L];delete S[z]}delete n[b.id]}function A(b){for(let S in n){let z=n[S];if(z[b.id]===void 0)continue;let F=z[b.id];for(let L in F)u(F[L].object),delete F[L];delete z[b.id]}}function C(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function Vy(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v]*d[v];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==li&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:w}}function Wy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ui,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let _=r?0:n,x=_*4,y=m.clippingState||null;l.value=y,y=u(p,d,x,f);for(let R=0;R!==x;++R)y[R]=t[R];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let v=h!==null?h.length:0,g=null;if(v!==0){if(g=l.value,p!==!0||g===null){let m=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=f;x!==v;++x,y+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Xy(i){let e=new WeakMap;function t(o,a){return a===hu?o.mapping=Br:a===du&&(o.mapping=Or),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hu||a===du)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Wu(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var yi=class extends ul{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lr=4,Hf=[.125,.215,.35,.446,.526,.582],ks=20,Gc=new yi,zf=new oe,Wc=null,Xc=0,qc=0,Yc=!1,Bs=(1+Math.sqrt(5))/2,Tr=1/Bs,Bf=[new M(-Bs,Tr,0),new M(Bs,Tr,0),new M(-Tr,0,Bs),new M(Tr,0,Bs),new M(0,Bs,-Tr),new M(0,Bs,Tr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],Yr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,qc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ui,format:Zn,colorSpace:Tn,depthBuffer:!1},s=Of(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Of(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qy(r)),this._blurMaterial=Yy(r,e,t)}return s}_compileMaterial(e){let t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,Gc)}_sceneToCubeUV(e,t,n,s){let a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(zf),u.toneMapping=cs,u.autoClear=!1;let f=new Lt({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),p=new Re(new Xs,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(zf),v=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let x=this._cubeSize;za(s,_*x,m>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(p,a),u.render(e,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Br||e.mapping===Or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;za(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bf[(s-r-1)%Bf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Re(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ks-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):ks;g>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ks}`);let m=[],_=0;for(let A=0;A<ks;++A){let C=A/v,T=Math.exp(-C*C/2);m.push(T),A===0?_+=T:A<g&&(_+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;let y=this._sizeLods[s],R=3*y*(s>x-Lr?s-x+Lr:0),w=4*(this._cubeSize-y);za(t,R,w,3*y,2*y),l.setRenderTarget(t),l.render(h,Gc)}};function qy(i){let e=[],t=[],n=[],s=i,r=i-Lr+1+Hf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Lr?l=Hf[o-i+Lr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*f),x=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,C=w>2?0:-1,T=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(T,v*p*w),x.set(d,g*p*w);let b=[w,w,w,w,w,w];y.set(b,m*p*w)}let R=new tt;R.setAttribute("position",new nt(_,v)),R.setAttribute("uv",new nt(x,g)),R.setAttribute("faceIndex",new nt(y,m)),e.push(R),s>Lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Of(i,e,t){let n=new Pn(i,e,t);return n.texture.mapping=zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yy(i,e,t){let n=new Float32Array(ks),s=new M(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function kf(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Vf(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Oh(){return`

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
	`}function $y(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===hu||l===du,u=l===Br||l===Or;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Yr(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Yr(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Co("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ky(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);for(let p in d.morphAttributes){let v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let p in f){let v=f[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,p=h.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let x=0,y=_.length;x<y;x+=3){let R=_[x+0],w=_[x+1],A=_[x+2];d.push(R,w,w,A,A,R)}}else if(p!==void 0){let _=p.array;v=p.version;for(let x=0,y=_.length/3-1;x<y;x+=3){let R=x+0,w=x+1,A=x+2;d.push(R,w,w,A,A,R)}}else return;let g=new($p(d)?cl:ll)(d,1);g.version=v;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jy(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function h(d,f,p,v){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_]*v[_];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Jy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qy(i,e,t){let n=new WeakMap,s=new yt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],x=0;f===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let y=a.attributes.position.count*x,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*R*4*h),A=new al(w,y,R,h);A.type=li,A.needsUpdate=!0;let C=x*4;for(let b=0;b<h;b++){let S=g[b],z=m[b],F=_[b],L=y*R*4*b;for(let N=0;N<S.count;N++){let U=N*C;f===!0&&(s.fromBufferAttribute(S,N),w[L+U+0]=s.x,w[L+U+1]=s.y,w[L+U+2]=s.z,w[L+U+3]=0),p===!0&&(s.fromBufferAttribute(z,N),w[L+U+4]=s.x,w[L+U+5]=s.y,w[L+U+6]=s.z,w[L+U+7]=0),v===!0&&(s.fromBufferAttribute(F,N),w[L+U+8]=s.x,w[L+U+9]=s.y,w[L+U+10]=s.z,w[L+U+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new le(y,R)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function e_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var dl=class extends dn{constructor(e,t,n,s,r,o,a,l,c,u=Fr){if(u!==Fr&&u!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fr&&(n=Gs),n===void 0&&u===Vr&&(n=kr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jp=new dn,Gf=new dl(1,1),Qp=new al,em=new Vu,tm=new hl,Wf=[],Xf=[],qf=new Float32Array(16),Yf=new Float32Array(9),$f=new Float32Array(4);function Qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wf[s];if(r===void 0&&(r=new Float32Array(s),Wf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kl(i,e){let t=Xf[e];t===void 0&&(t=new Int32Array(e),Xf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function t_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function r_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;$f.set(n),i.uniformMatrix2fv(this.addr,!1,$f),ln(t,n)}}function o_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Yf.set(n),i.uniformMatrix3fv(this.addr,!1,Yf),ln(t,n)}}function a_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;qf.set(n),i.uniformMatrix4fv(this.addr,!1,qf),ln(t,n)}}function l_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function d_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function g_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gf.compareFunction=Yp,r=Gf):r=Jp,t.setTexture2D(e||r,s)}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||em,s)}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tm,s)}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qp,s)}function __(i){switch(i){case 5126:return t_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return o_;case 35676:return a_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return u_;case 35669:case 35673:return h_;case 5125:return d_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return y_}}function b_(i,e){i.uniform1fv(this.addr,e)}function M_(i,e){let t=Qr(e,this.size,2);i.uniform2fv(this.addr,t)}function E_(i,e){let t=Qr(e,this.size,3);i.uniform3fv(this.addr,t)}function w_(i,e){let t=Qr(e,this.size,4);i.uniform4fv(this.addr,t)}function T_(i,e){let t=Qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function S_(i,e){let t=Qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function A_(i,e){let t=Qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function R_(i,e){i.uniform1iv(this.addr,e)}function C_(i,e){i.uniform2iv(this.addr,e)}function P_(i,e){i.uniform3iv(this.addr,e)}function I_(i,e){i.uniform4iv(this.addr,e)}function L_(i,e){i.uniform1uiv(this.addr,e)}function U_(i,e){i.uniform2uiv(this.addr,e)}function D_(i,e){i.uniform3uiv(this.addr,e)}function F_(i,e){i.uniform4uiv(this.addr,e)}function N_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Jp,r[o])}function H_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||em,r[o])}function z_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||tm,r[o])}function B_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qp,r[o])}function O_(i){switch(i){case 5126:return b_;case 35664:return M_;case 35665:return E_;case 35666:return w_;case 35674:return T_;case 35675:return S_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return P_;case 35669:case 35673:return I_;case 5125:return L_;case 36294:return U_;case 36295:return D_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return B_}}var Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=__(t.type)}},qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O_(t.type)}},Yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},$c=/(\w+)(\])?(\[|\.)?/g;function Zf(i,e){i.seq.push(e),i.map[e.id]=e}function k_(i,e,t){let n=i.name,s=n.length;for($c.lastIndex=0;;){let r=$c.exec(n),o=$c.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zf(t,c===void 0?new Xu(a,i,e):new qu(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Yu(a),Zf(t,h)),t=h}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);k_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Kf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var V_=37297,G_=0;function W_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var jf=new dt;function X_(i){vt._getMatrix(jf,vt.workingColorSpace,i);let e=`mat3( ${jf.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case Ol:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+W_(i.getShaderSource(e),o)}else return s}function q_(i,e){let t=X_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Y_(i,e){let t;switch(e){case Th:t="Linear";break;case Sh:t="Reinhard";break;case Ah:t="Cineon";break;case Rh:t="ACESFilmic";break;case Ch:t="AgX";break;case Qo:t="Neutral";break;case cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ba=new M;function $_(){vt.getLuminanceCoefficients(Ba);let i=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function K_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Po(i){return i!==""}function Qf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ep(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(i){return i.replace(J_,eb)}var Q_=new Map;function eb(i,e){let t=pt[e];if(t===void 0){let n=Q_.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $u(t)}var tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(i){return i.replace(tb,nb)}function nb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function np(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ib(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===X0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function sb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Br:case Or:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function ob(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wh:e="ENVMAP_BLENDING_MULTIPLY";break;case ag:e="ENVMAP_BLENDING_MIX";break;case lg:e="ENVMAP_BLENDING_ADD";break}return e}function ab(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lb(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ib(t),c=sb(t),u=rb(t),h=ob(t),d=ab(t),f=Z_(t),p=K_(r),v=s.createProgram(),g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Po).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Po).join(`
`),m.length>0&&(m+=`
`)):(g=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),m=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?pt.tonemapping_pars_fragment:"",t.toneMapping!==cs?Y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,q_("linearToOutputTexel",t.outputColorSpace),$_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=$u(o),o=Qf(o,t),o=ep(o,t),a=$u(a),a=Qf(a,t),a=ep(a,t),o=tp(o),a=tp(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=_+g+o,y=_+m+a,R=Kf(s,s.VERTEX_SHADER,x),w=Kf(s,s.FRAGMENT_SHADER,y);s.attachShader(v,R),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(S){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(R).trim(),L=s.getShaderInfoLog(w).trim(),N=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,w);else{let k=Jf(s,R,"vertex"),H=Jf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+z+`
`+k+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||L==="")&&(U=!1);U&&(S.diagnostics={runnable:N,programLog:z,vertexShader:{log:F,prefix:g},fragmentShader:{log:L,prefix:m}})}s.deleteShader(R),s.deleteShader(w),C=new Hr(s,v),T=j_(s,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,V_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=w,this}var cb=0,Zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ku(e),t.set(e,n)),n}},Ku=class{constructor(e){this.id=cb++,this.code=e,this.usedTimes=0}};function ub(i,e,t,n,s,r,o){let a=new Vo,l=new Zu,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,b,S,z,F){let L=z.fog,N=F.geometry,U=T.isMeshStandardMaterial?z.environment:null,k=(T.isMeshStandardMaterial?t:e).get(T.envMap||U),H=k&&k.mapping===zl?k.image.height:null,K=p[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let O=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=O!==void 0?O.length:0,ve=0;N.morphAttributes.position!==void 0&&(ve=1),N.morphAttributes.normal!==void 0&&(ve=2),N.morphAttributes.color!==void 0&&(ve=3);let de,V,ee,pe;if(K){let mt=mi[K];de=mt.vertexShader,V=mt.fragmentShader}else de=T.vertexShader,V=T.fragmentShader,l.update(T),ee=l.getVertexShaderID(T),pe=l.getFragmentShaderID(T);let re=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),ce=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,De=!!T.map,ie=!!T.matcap,se=!!k,D=!!T.aoMap,_e=!!T.lightMap,Q=!!T.bumpMap,ue=!!T.normalMap,me=!!T.displacementMap,Le=!!T.emissiveMap,Te=!!T.metalnessMap,I=!!T.roughnessMap,E=T.anisotropy>0,B=T.clearcoat>0,W=T.dispersion>0,X=T.iridescence>0,q=T.sheen>0,ge=T.transmission>0,be=E&&!!T.anisotropyMap,Me=B&&!!T.clearcoatMap,Ie=B&&!!T.clearcoatNormalMap,he=B&&!!T.clearcoatRoughnessMap,fe=X&&!!T.iridescenceMap,ye=X&&!!T.iridescenceThicknessMap,Ce=q&&!!T.sheenColorMap,Ae=q&&!!T.sheenRoughnessMap,Je=!!T.specularMap,je=!!T.specularColorMap,ct=!!T.specularIntensityMap,G=ge&&!!T.transmissionMap,Ee=ge&&!!T.thicknessMap,J=!!T.gradientMap,ae=!!T.alphaMap,Ne=T.alphaTest>0,ze=!!T.alphaHash,rt=!!T.extensions,It=cs;T.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(It=i.toneMapping);let en={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:de,fragmentShader:V,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:ce,instancingColor:ce&&F.instanceColor!==null,instancingMorph:ce&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Tn,alphaToCoverage:!!T.alphaToCoverage,map:De,matcap:ie,envMap:se,envMapMode:se&&k.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:_e,bumpMap:Q,normalMap:ue,displacementMap:d&&me,emissiveMap:Le,normalMapObjectSpace:ue&&T.normalMapType===pg,normalMapTangentSpace:ue&&T.normalMapType===zh,metalnessMap:Te,roughnessMap:I,anisotropy:E,anisotropyMap:be,clearcoat:B,clearcoatMap:Me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:he,dispersion:W,iridescence:X,iridescenceMap:fe,iridescenceThicknessMap:ye,sheen:q,sheenColorMap:Ce,sheenRoughnessMap:Ae,specularMap:Je,specularColorMap:je,specularIntensityMap:ct,transmission:ge,transmissionMap:G,thicknessMap:Ee,gradientMap:J,opaque:T.transparent===!1&&T.blending===Dr&&T.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ne,alphaHash:ze,combine:T.combine,mapUv:De&&v(T.map.channel),aoMapUv:D&&v(T.aoMap.channel),lightMapUv:_e&&v(T.lightMap.channel),bumpMapUv:Q&&v(T.bumpMap.channel),normalMapUv:ue&&v(T.normalMap.channel),displacementMapUv:me&&v(T.displacementMap.channel),emissiveMapUv:Le&&v(T.emissiveMap.channel),metalnessMapUv:Te&&v(T.metalnessMap.channel),roughnessMapUv:I&&v(T.roughnessMap.channel),anisotropyMapUv:be&&v(T.anisotropyMap.channel),clearcoatMapUv:Me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(T.sheenRoughnessMap.channel),specularMapUv:Je&&v(T.specularMap.channel),specularColorMapUv:je&&v(T.specularColorMap.channel),specularIntensityMapUv:ct&&v(T.specularIntensityMap.channel),transmissionMapUv:G&&v(T.transmissionMap.channel),thicknessMapUv:Ee&&v(T.thicknessMap.channel),alphaMapUv:ae&&v(T.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ue||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(De||ae),fog:!!L,useFog:T.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:De&&T.map.isVideoTexture===!0&&vt.getTransfer(T.map.colorSpace)===Rt,decodeVideoTextureEmissive:Le&&T.emissiveMap.isVideoTexture===!0&&vt.getTransfer(T.emissiveMap.colorSpace)===Rt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qe,flipSided:T.side===En,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:rt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&T.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return en.vertexUv1s=c.has(1),en.vertexUv2s=c.has(2),en.vertexUv3s=c.has(3),c.clear(),en}function m(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let S in T.defines)b.push(S),b.push(T.defines[S]);return T.isRawShaderMaterial===!1&&(_(b,T),x(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function _(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function x(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){let b=p[T.type],S;if(b){let z=mi[b];S=ys.clone(z.uniforms)}else S=T.uniforms;return S}function R(T,b){let S;for(let z=0,F=u.length;z<F;z++){let L=u[z];if(L.cacheKey===b){S=L,++S.usedTimes;break}}return S===void 0&&(S=new lb(i,b,T,r),u.push(S)),S}function w(T){if(--T.usedTimes===0){let b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:R,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:C}}function hb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function db(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ip(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,p,v,g){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:v,group:g},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function a(h,d,f,p,v,g){let m=o(h,d,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,p,v,g){let m=o(h,d,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||db),n.length>1&&n.sort(d||ip),s.length>1&&s.sort(d||ip)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function fb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new sp,i.set(n,[o])):s>=r.length?(o=new sp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new oe};break;case"SpotLight":t={position:new M,direction:new M,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new M,halfWidth:new M,halfHeight:new M};break}return i[e.id]=t,t}}}function mb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gb=0;function vb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xb(i){let e=new pb,t=mb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new M);let s=new M,r=new we,o=new we;function a(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,x=0,y=0,R=0,w=0,A=0;c.sort(vb);for(let T=0,b=c.length;T<b;T++){let S=c[T],z=S.color,F=S.intensity,L=S.distance,N=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=z.r*F,h+=z.g*F,d+=z.b*F;else if(S.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(S.sh.coefficients[U],F);A++}else if(S.isDirectionalLight){let U=e.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let k=S.shadow,H=t.get(S);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=S.shadow.matrix,_++}n.directional[f]=U,f++}else if(S.isSpotLight){let U=e.get(S);U.position.setFromMatrixPosition(S.matrixWorld),U.color.copy(z).multiplyScalar(F),U.distance=L,U.coneCos=Math.cos(S.angle),U.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),U.decay=S.decay,n.spot[v]=U;let k=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,k.updateMatrices(S),S.castShadow&&w++),n.spotLightMatrix[v]=k.matrix,S.castShadow){let H=t.get(S);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=N,y++}v++}else if(S.isRectAreaLight){let U=e.get(S);U.color.copy(z).multiplyScalar(F),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=U,g++}else if(S.isPointLight){let U=e.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),U.distance=S.distance,U.decay=S.decay,S.castShadow){let k=S.shadow,H=t.get(S);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=S.shadow.matrix,x++}n.point[p]=U,p++}else if(S.isHemisphereLight){let U=e.get(S);U.skyColor.copy(S.color).multiplyScalar(F),U.groundColor.copy(S.groundColor).multiplyScalar(F),n.hemi[m]=U,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==_||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=f,C.pointLength=p,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=R,C.numLightProbes=A,n.version=gb++)}function l(c,u){let h=0,d=0,f=0,p=0,v=0,g=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){let x=c[m];if(x.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(x.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function rp(i){let e=new xb(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new rp(i),e.set(s,[a])):r>=o.length?(a=new rp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ju=class extends Ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ju=class extends Ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
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
}`;function Mb(i,e,t){let n=new Go,s=new le,r=new le,o=new yt,a=new ju({depthPacking:fg}),l=new Ju,c={},u=t.maxTextureSize,h={[xi]:En,[En]:xi,[Qe]:Qe},d=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:_b,fragmentShader:bb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new tt;p.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Re(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp;let m=this.type;this.render=function(w,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;let T=i.getRenderTarget(),b=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),z=i.state;z.setBlending(vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=m!==Li&&this.type===Li,L=m===Li&&this.type!==Li;for(let N=0,U=w.length;N<U;N++){let k=w[N],H=k.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let K=H.getFrameExtents();if(s.multiply(K),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,H.mapSize.y=r.y)),H.map===null||F===!0||L===!0){let j=this.type!==Li?{minFilter:wn,magFilter:wn}:{};H.map!==null&&H.map.dispose(),H.map=new Pn(s.x,s.y,j),H.map.texture.name=k.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let O=H.getViewportCount();for(let j=0;j<O;j++){let ve=H.getViewport(j);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),z.viewport(o),H.updateMatrices(k,j),n=H.getFrustum(),y(A,C,H.camera,k,this.type)}H.isPointLightShadow!==!0&&this.type===Li&&_(H,C),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,b,S)};function _(w,A){let C=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,f,v,null)}function x(w,A,C,T){let b=null,S=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)b=S;else if(b=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=b.uuid,F=A.uuid,L=c[z];L===void 0&&(L={},c[z]=L);let N=L[F];N===void 0&&(N=b.clone(),L[F]=N,A.addEventListener("dispose",R)),b=N}if(b.visible=A.visible,b.wireframe=A.wireframe,T===Li?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=i.properties.get(b);z.light=C}return b}function y(w,A,C,T,b){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Li)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let F=e.update(w),L=w.material;if(Array.isArray(L)){let N=F.groups;for(let U=0,k=N.length;U<k;U++){let H=N[U],K=L[H.materialIndex];if(K&&K.visible){let O=x(w,K,T,b);w.onBeforeShadow(i,w,A,C,F,O,H),i.renderBufferDirect(C,null,F,O,w,H),w.onAfterShadow(i,w,A,C,F,O,H)}}}else if(L.visible){let N=x(w,L,T,b);w.onBeforeShadow(i,w,A,C,F,N,null),i.renderBufferDirect(C,null,F,N,w,null),w.onAfterShadow(i,w,A,C,F,N,null)}}let z=w.children;for(let F=0,L=z.length;F<L;F++)y(z[F],A,C,T,b)}function R(w){w.target.removeEventListener("dispose",R);for(let C in c){let T=c[C],b=w.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var Eb={[su]:ru,[ou]:cu,[au]:uu,[zr]:lu,[ru]:su,[cu]:ou,[uu]:au,[lu]:zr};function wb(i,e){function t(){let G=!1,Ee=new yt,J=null,ae=new yt(0,0,0,0);return{setMask:function(Ne){J!==Ne&&!G&&(i.colorMask(Ne,Ne,Ne,Ne),J=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,ze,rt,It,en){en===!0&&(Ne*=It,ze*=It,rt*=It),Ee.set(Ne,ze,rt,It),ae.equals(Ee)===!1&&(i.clearColor(Ne,ze,rt,It),ae.copy(Ee))},reset:function(){G=!1,J=null,ae.set(-1,0,0,0)}}}function n(){let G=!1,Ee=!1,J=null,ae=null,Ne=null;return{setReversed:function(ze){if(Ee!==ze){let rt=e.get("EXT_clip_control");Ee?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);let It=Ne;Ne=null,this.setClear(It)}Ee=ze},getReversed:function(){return Ee},setTest:function(ze){ze?re(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ze){J!==ze&&!G&&(i.depthMask(ze),J=ze)},setFunc:function(ze){if(Ee&&(ze=Eb[ze]),ae!==ze){switch(ze){case su:i.depthFunc(i.NEVER);break;case ru:i.depthFunc(i.ALWAYS);break;case ou:i.depthFunc(i.LESS);break;case zr:i.depthFunc(i.LEQUAL);break;case au:i.depthFunc(i.EQUAL);break;case lu:i.depthFunc(i.GEQUAL);break;case cu:i.depthFunc(i.GREATER);break;case uu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=ze}},setLocked:function(ze){G=ze},setClear:function(ze){Ne!==ze&&(Ee&&(ze=1-ze),i.clearDepth(ze),Ne=ze)},reset:function(){G=!1,J=null,ae=null,Ne=null,Ee=!1}}}function s(){let G=!1,Ee=null,J=null,ae=null,Ne=null,ze=null,rt=null,It=null,en=null;return{setTest:function(mt){G||(mt?re(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(mt){Ee!==mt&&!G&&(i.stencilMask(mt),Ee=mt)},setFunc:function(mt,An,Jt){(J!==mt||ae!==An||Ne!==Jt)&&(i.stencilFunc(mt,An,Jt),J=mt,ae=An,Ne=Jt)},setOp:function(mt,An,Jt){(ze!==mt||rt!==An||It!==Jt)&&(i.stencilOp(mt,An,Jt),ze=mt,rt=An,It=Jt)},setLocked:function(mt){G=mt},setClear:function(mt){en!==mt&&(i.clearStencil(mt),en=mt)},reset:function(){G=!1,Ee=null,J=null,ae=null,Ne=null,ze=null,rt=null,It=null,en=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,x=null,y=null,R=null,w=null,A=new oe(0,0,0),C=0,T=!1,b=null,S=null,z=null,F=null,L=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,k=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=k>=2);let K=null,O={},j=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),de=new yt().fromArray(j),V=new yt().fromArray(ve);function ee(G,Ee,J,ae){let Ne=new Uint8Array(4),ze=i.createTexture();i.bindTexture(G,ze),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<J;rt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(Ee+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return ze}let pe={};pe[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(zr),Q(!1),ue(af),re(i.CULL_FACE),D(vi);function re(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function xe(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function ce(G,Ee){return h[G]!==Ee?(i.bindFramebuffer(G,Ee),h[G]=Ee,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ee),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Se(G,Ee){let J=f,ae=!1;if(G){J=d.get(Ee),J===void 0&&(J=[],d.set(Ee,J));let Ne=G.textures;if(J.length!==Ne.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,rt=Ne.length;ze<rt;ze++)J[ze]=i.COLOR_ATTACHMENT0+ze;J.length=Ne.length,ae=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ae=!0);ae&&i.drawBuffers(J)}function De(G){return p!==G?(i.useProgram(G),p=G,!0):!1}let ie={[Os]:i.FUNC_ADD,[q0]:i.FUNC_SUBTRACT,[Y0]:i.FUNC_REVERSE_SUBTRACT};ie[$0]=i.MIN,ie[Z0]=i.MAX;let se={[Eh]:i.ZERO,[gn]:i.ONE,[K0]:i.SRC_COLOR,[zo]:i.SRC_ALPHA,[ng]:i.SRC_ALPHA_SATURATE,[eg]:i.DST_COLOR,[J0]:i.DST_ALPHA,[j0]:i.ONE_MINUS_SRC_COLOR,[$t]:i.ONE_MINUS_SRC_ALPHA,[tg]:i.ONE_MINUS_DST_COLOR,[Q0]:i.ONE_MINUS_DST_ALPHA,[ig]:i.CONSTANT_COLOR,[sg]:i.ONE_MINUS_CONSTANT_COLOR,[rg]:i.CONSTANT_ALPHA,[og]:i.ONE_MINUS_CONSTANT_ALPHA};function D(G,Ee,J,ae,Ne,ze,rt,It,en,mt){if(G===vi){v===!0&&(xe(i.BLEND),v=!1);return}if(v===!1&&(re(i.BLEND),v=!0),G!==cn){if(G!==g||mt!==T){if((m!==Os||y!==Os)&&(i.blendEquation(i.FUNC_ADD),m=Os,y=Os),mt)switch(G){case Dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case on:i.blendFunc(i.ONE,i.ONE);break;case lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case on:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,x=null,R=null,w=null,A.set(0,0,0),C=0,g=G,T=mt}return}Ne=Ne||Ee,ze=ze||J,rt=rt||ae,(Ee!==m||Ne!==y)&&(i.blendEquationSeparate(ie[Ee],ie[Ne]),m=Ee,y=Ne),(J!==_||ae!==x||ze!==R||rt!==w)&&(i.blendFuncSeparate(se[J],se[ae],se[ze],se[rt]),_=J,x=ae,R=ze,w=rt),(It.equals(A)===!1||en!==C)&&(i.blendColor(It.r,It.g,It.b,en),A.copy(It),C=en),g=G,T=!1}function _e(G,Ee){G.side===Qe?xe(i.CULL_FACE):re(i.CULL_FACE);let J=G.side===En;Ee&&(J=!J),Q(J),G.blending===Dr&&G.transparent===!1?D(vi):D(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let ae=G.stencilWrite;a.setTest(ae),ae&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Le(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function ue(G){G!==G0?(re(i.CULL_FACE),G!==S&&(G===af?i.cullFace(i.BACK):G===W0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),S=G}function me(G){G!==z&&(U&&i.lineWidth(G),z=G)}function Le(G,Ee,J){G?(re(i.POLYGON_OFFSET_FILL),(F!==Ee||L!==J)&&(i.polygonOffset(Ee,J),F=Ee,L=J)):xe(i.POLYGON_OFFSET_FILL)}function Te(G){G?re(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function I(G){G===void 0&&(G=i.TEXTURE0+N-1),K!==G&&(i.activeTexture(G),K=G)}function E(G,Ee,J){J===void 0&&(K===null?J=i.TEXTURE0+N-1:J=K);let ae=O[J];ae===void 0&&(ae={type:void 0,texture:void 0},O[J]=ae),(ae.type!==G||ae.texture!==Ee)&&(K!==J&&(i.activeTexture(J),K=J),i.bindTexture(G,Ee||pe[G]),ae.type=G,ae.texture=Ee)}function B(){let G=O[K];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(G){de.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),de.copy(G))}function Ae(G){V.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),V.copy(G))}function Je(G,Ee){let J=c.get(Ee);J===void 0&&(J=new WeakMap,c.set(Ee,J));let ae=J.get(G);ae===void 0&&(ae=i.getUniformBlockIndex(Ee,G.name),J.set(G,ae))}function je(G,Ee){let ae=c.get(Ee).get(G);l.get(Ee)!==ae&&(i.uniformBlockBinding(Ee,ae,G.__bindingPointIndex),l.set(Ee,ae))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,O={},h={},d=new WeakMap,f=[],p=null,v=!1,g=null,m=null,_=null,x=null,y=null,R=null,w=null,A=new oe(0,0,0),C=0,T=!1,b=null,S=null,z=null,F=null,L=null,de.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:xe,bindFramebuffer:ce,drawBuffers:Se,useProgram:De,setBlending:D,setMaterial:_e,setFlipSided:Q,setCullFace:ue,setLineWidth:me,setPolygonOffset:Le,setScissorTest:Te,activeTexture:I,bindTexture:E,unbindTexture:B,compressedTexImage2D:W,compressedTexImage3D:X,texImage2D:fe,texImage3D:ye,updateUBOMapping:Je,uniformBlockBinding:je,texStorage2D:Ie,texStorage3D:he,texSubImage2D:q,texSubImage3D:ge,compressedTexSubImage2D:be,compressedTexSubImage3D:Me,scissor:Ce,viewport:Ae,reset:ct}}function op(i,e,t,n){let s=Tb(n);switch(t){case Op:return i*e;case Vp:return i*e;case Gp:return i*e*2;case Dh:return i*e/s.components*s.byteLength;case Fh:return i*e/s.components*s.byteLength;case Wp:return i*e*2/s.components*s.byteLength;case Nh:return i*e*2/s.components*s.byteLength;case kp:return i*e*3/s.components*s.byteLength;case Zn:return i*e*4/s.components*s.byteLength;case Hh:return i*e*4/s.components*s.byteLength;case el:case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pu:case gu:return Math.max(i,16)*Math.max(e,8)/4;case fu:case mu:return Math.max(i,8)*Math.max(e,8)/2;case vu:case xu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Su:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Au:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ru:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sl:case Du:case Fu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xp:case Nu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hu:case zu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tb(i){switch(i){case Hi:case Hp:return{byteLength:1,components:1};case Oo:case zp:case ui:return{byteLength:2,components:1};case Lh:case Uh:return{byteLength:2,components:4};case Gs:case Ih:case li:return{byteLength:4,components:1};case Bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Sb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,E){return f?new OffscreenCanvas(I,E):ko("canvas")}function v(I,E,B){let W=1,X=Te(I);if((X.width>B||X.height>B)&&(W=B/Math.max(X.width,X.height)),W<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let q=Math.floor(W*X.width),ge=Math.floor(W*X.height);h===void 0&&(h=p(q,ge));let be=E?p(q,ge):h;return be.width=q,be.height=ge,be.getContext("2d").drawImage(I,0,0,q,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+q+"x"+ge+")."),be}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),I;return I}function g(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,E,B,W,X=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let q=E;if(E===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8)),E===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),E===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8)),E===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),E===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),E===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),E===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),E===i.RGBA){let ge=X?Ol:vt.getTransfer(W);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=ge===Rt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(I,E){let B;return I?E===null||E===Gs||E===kr?B=i.DEPTH24_STENCIL8:E===li?B=i.DEPTH32F_STENCIL8:E===Oo&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gs||E===kr?B=i.DEPTH_COMPONENT24:E===li?B=i.DEPTH_COMPONENT32F:E===Oo&&(B=i.DEPTH_COMPONENT16),B}function R(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==wn&&I.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function w(I){let E=I.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&u.delete(E)}function A(I){let E=I.target;E.removeEventListener("dispose",A),b(E)}function C(I){let E=n.get(I);if(E.__webglInit===void 0)return;let B=I.source,W=d.get(B);if(W){let X=W[E.__cacheKey];X.usedTimes--,X.usedTimes===0&&T(I),Object.keys(W).length===0&&d.delete(B)}n.remove(I)}function T(I){let E=n.get(I);i.deleteTexture(E.__webglTexture);let B=I.source,W=d.get(B);delete W[E.__cacheKey],o.memory.textures--}function b(I){let E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let X=0;X<E.__webglFramebuffer[W].length;X++)i.deleteFramebuffer(E.__webglFramebuffer[W][X]);else i.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)i.deleteFramebuffer(E.__webglFramebuffer[W]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let B=I.textures;for(let W=0,X=B.length;W<X;W++){let q=n.get(B[W]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[W])}n.remove(I)}let S=0;function z(){S=0}function F(){let I=S;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),S+=1,I}function L(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function N(I,E){let B=n.get(I);if(I.isVideoTexture&&me(I),I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){let W=I.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(B,I,E);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+E)}function U(I,E){let B=n.get(I);if(I.version>0&&B.__version!==I.version){V(B,I,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+E)}function k(I,E){let B=n.get(I);if(I.version>0&&B.__version!==I.version){V(B,I,E);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+E)}function H(I,E){let B=n.get(I);if(I.version>0&&B.__version!==I.version){ee(B,I,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+E)}let K={[Vs]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[Bo]:i.MIRRORED_REPEAT},O={[wn]:i.NEAREST,[Ph]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[Io]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},j={[mg]:i.NEVER,[bg]:i.ALWAYS,[gg]:i.LESS,[Yp]:i.LEQUAL,[vg]:i.EQUAL,[_g]:i.GEQUAL,[xg]:i.GREATER,[yg]:i.NOTEQUAL};function ve(I,E){if(E.type===li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Nn||E.magFilter===Io||E.magFilter===Ir||E.magFilter===gi||E.minFilter===Nn||E.minFilter===Io||E.minFilter===Ir||E.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,K[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,K[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,K[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,O[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,O[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,j[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==Ir&&E.minFilter!==gi||E.type===li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function de(I,E){let B=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",w));let W=E.source,X=d.get(W);X===void 0&&(X={},d.set(W,X));let q=L(E);if(q!==I.__cacheKey){X[q]===void 0&&(X[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),X[q].usedTimes++;let ge=X[I.__cacheKey];ge!==void 0&&(X[I.__cacheKey].usedTimes--,ge.usedTimes===0&&T(E)),I.__cacheKey=q,I.__webglTexture=X[q].texture}return B}function V(I,E,B){let W=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=i.TEXTURE_3D);let X=de(I,E),q=E.source;t.bindTexture(W,I.__webglTexture,i.TEXTURE0+B);let ge=n.get(q);if(q.version!==ge.__version||X===!0){t.activeTexture(i.TEXTURE0+B);let be=vt.getPrimaries(vt.workingColorSpace),Me=E.colorSpace===os?null:vt.getPrimaries(E.colorSpace),Ie=E.colorSpace===os||be===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let he=v(E.image,!1,s.maxTextureSize);he=Le(E,he);let fe=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),Ce=x(E.internalFormat,fe,ye,E.colorSpace,E.isVideoTexture);ve(W,E);let Ae,Je=E.mipmaps,je=E.isVideoTexture!==!0,ct=ge.__version===void 0||X===!0,G=q.dataReady,Ee=R(E,he);if(E.isDepthTexture)Ce=y(E.format===Vr,E.type),ct&&(je?t.texStorage2D(i.TEXTURE_2D,1,Ce,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Ce,he.width,he.height,0,fe,ye,null));else if(E.isDataTexture)if(Je.length>0){je&&ct&&t.texStorage2D(i.TEXTURE_2D,Ee,Ce,Je[0].width,Je[0].height);for(let J=0,ae=Je.length;J<ae;J++)Ae=Je[J],je?G&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ae.width,Ae.height,fe,ye,Ae.data):t.texImage2D(i.TEXTURE_2D,J,Ce,Ae.width,Ae.height,0,fe,ye,Ae.data);E.generateMipmaps=!1}else je?(ct&&t.texStorage2D(i.TEXTURE_2D,Ee,Ce,he.width,he.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,fe,ye,he.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,he.width,he.height,0,fe,ye,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){je&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ce,Je[0].width,Je[0].height,he.depth);for(let J=0,ae=Je.length;J<ae;J++)if(Ae=Je[J],E.format!==Zn)if(fe!==null)if(je){if(G)if(E.layerUpdates.size>0){let Ne=op(Ae.width,Ae.height,E.format,E.type);for(let ze of E.layerUpdates){let rt=Ae.data.subarray(ze*Ne/Ae.data.BYTES_PER_ELEMENT,(ze+1)*Ne/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ze,Ae.width,Ae.height,1,fe,rt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,he.depth,fe,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ce,Ae.width,Ae.height,he.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,he.depth,fe,ye,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Ce,Ae.width,Ae.height,he.depth,0,fe,ye,Ae.data)}else{je&&ct&&t.texStorage2D(i.TEXTURE_2D,Ee,Ce,Je[0].width,Je[0].height);for(let J=0,ae=Je.length;J<ae;J++)Ae=Je[J],E.format!==Zn?fe!==null?je?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Ae.width,Ae.height,fe,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Ce,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?G&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ae.width,Ae.height,fe,ye,Ae.data):t.texImage2D(i.TEXTURE_2D,J,Ce,Ae.width,Ae.height,0,fe,ye,Ae.data)}else if(E.isDataArrayTexture)if(je){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ce,he.width,he.height,he.depth),G)if(E.layerUpdates.size>0){let J=op(he.width,he.height,E.format,E.type);for(let ae of E.layerUpdates){let Ne=he.data.subarray(ae*J/he.data.BYTES_PER_ELEMENT,(ae+1)*J/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,he.width,he.height,1,fe,ye,Ne)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,fe,ye,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,he.width,he.height,he.depth,0,fe,ye,he.data);else if(E.isData3DTexture)je?(ct&&t.texStorage3D(i.TEXTURE_3D,Ee,Ce,he.width,he.height,he.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,fe,ye,he.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,he.width,he.height,he.depth,0,fe,ye,he.data);else if(E.isFramebufferTexture){if(ct)if(je)t.texStorage2D(i.TEXTURE_2D,Ee,Ce,he.width,he.height);else{let J=he.width,ae=he.height;for(let Ne=0;Ne<Ee;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Ce,J,ae,0,fe,ye,null),J>>=1,ae>>=1}}else if(Je.length>0){if(je&&ct){let J=Te(Je[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ce,J.width,J.height)}for(let J=0,ae=Je.length;J<ae;J++)Ae=Je[J],je?G&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,fe,ye,Ae):t.texImage2D(i.TEXTURE_2D,J,Ce,fe,ye,Ae);E.generateMipmaps=!1}else if(je){if(ct){let J=Te(he);t.texStorage2D(i.TEXTURE_2D,Ee,Ce,J.width,J.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,ye,he)}else t.texImage2D(i.TEXTURE_2D,0,Ce,fe,ye,he);g(E)&&m(W),ge.__version=q.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ee(I,E,B){if(E.image.length!==6)return;let W=de(I,E),X=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+B);let q=n.get(X);if(X.version!==q.__version||W===!0){t.activeTexture(i.TEXTURE0+B);let ge=vt.getPrimaries(vt.workingColorSpace),be=E.colorSpace===os?null:vt.getPrimaries(E.colorSpace),Me=E.colorSpace===os||ge===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let ae=0;ae<6;ae++)!Ie&&!he?fe[ae]=v(E.image[ae],!0,s.maxCubemapSize):fe[ae]=he?E.image[ae].image:E.image[ae],fe[ae]=Le(E,fe[ae]);let ye=fe[0],Ce=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type),Je=x(E.internalFormat,Ce,Ae,E.colorSpace),je=E.isVideoTexture!==!0,ct=q.__version===void 0||W===!0,G=X.dataReady,Ee=R(E,ye);ve(i.TEXTURE_CUBE_MAP,E);let J;if(Ie){je&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Je,ye.width,ye.height);for(let ae=0;ae<6;ae++){J=fe[ae].mipmaps;for(let Ne=0;Ne<J.length;Ne++){let ze=J[Ne];E.format!==Zn?Ce!==null?je?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,ze.width,ze.height,Ce,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,Je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,0,0,ze.width,ze.height,Ce,Ae,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne,Je,ze.width,ze.height,0,Ce,Ae,ze.data)}}}else{if(J=E.mipmaps,je&&ct){J.length>0&&Ee++;let ae=Te(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(he){je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,fe[ae].width,fe[ae].height,Ce,Ae,fe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,fe[ae].width,fe[ae].height,0,Ce,Ae,fe[ae].data);for(let Ne=0;Ne<J.length;Ne++){let rt=J[Ne].image[ae].image;je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,rt.width,rt.height,Ce,Ae,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,Je,rt.width,rt.height,0,Ce,Ae,rt.data)}}else{je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ce,Ae,fe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Ce,Ae,fe[ae]);for(let Ne=0;Ne<J.length;Ne++){let ze=J[Ne];je?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,0,0,Ce,Ae,ze.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ne+1,Je,Ce,Ae,ze.image[ae])}}}g(E)&&m(i.TEXTURE_CUBE_MAP),q.__version=X.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function pe(I,E,B,W,X,q){let ge=r.convert(B.format,B.colorSpace),be=r.convert(B.type),Me=x(B.internalFormat,ge,be,B.colorSpace),Ie=n.get(E),he=n.get(B);if(he.__renderTarget=E,!Ie.__hasExternalTextures){let fe=Math.max(1,E.width>>q),ye=Math.max(1,E.height>>q);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,q,Me,fe,ye,E.depth,0,ge,be,null):t.texImage2D(X,q,Me,fe,ye,0,ge,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ue(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,X,he.__webglTexture,0,Q(E)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,X,he.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(I,E,B){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){let W=E.depthTexture,X=W&&W.isDepthTexture?W.type:null,q=y(E.stencilBuffer,X),ge=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=Q(E);ue(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,q,E.width,E.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,q,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,I)}else{let W=E.textures;for(let X=0;X<W.length;X++){let q=W[X],ge=r.convert(q.format,q.colorSpace),be=r.convert(q.type),Me=x(q.internalFormat,ge,be,q.colorSpace),Ie=Q(E);B&&ue(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Me,E.width,E.height):ue(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Me,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(E.depthTexture);W.__renderTarget=E,(!W.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);let X=W.__webglTexture,q=Q(E);if(E.depthTexture.format===Fr)ue(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(E.depthTexture.format===Vr)ue(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function ce(I){let E=n.get(I),B=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let W=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),W){let X=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,W.removeEventListener("dispose",X)};W.addEventListener("dispose",X),E.__depthDisposeCallback=X}E.__boundDepthTexture=W}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");xe(E.__webglFramebuffer,I)}else if(B){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]===void 0)E.__webglDepthbuffer[W]=i.createRenderbuffer(),re(E.__webglDepthbuffer[W],I,!1);else{let X=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),re(E.__webglDepthbuffer,I,!1);else{let W=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,X)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(I,E,B){let W=n.get(I);E!==void 0&&pe(W.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ce(I)}function De(I){let E=I.texture,B=n.get(I),W=n.get(E);I.addEventListener("dispose",A);let X=I.textures,q=I.isWebGLCubeRenderTarget===!0,ge=X.length>1;if(ge||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=E.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[be]=[];for(let Me=0;Me<E.mipmaps.length;Me++)B.__webglFramebuffer[be][Me]=i.createFramebuffer()}else B.__webglFramebuffer[be]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)B.__webglFramebuffer[be]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ge)for(let be=0,Me=X.length;be<Me;be++){let Ie=n.get(X[be]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ue(I)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let be=0;be<X.length;be++){let Me=X[be];B.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[be]);let Ie=r.convert(Me.format,Me.colorSpace),he=r.convert(Me.type),fe=x(Me.internalFormat,Ie,he,Me.colorSpace,I.isXRRenderTarget===!0),ye=Q(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,fe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,B.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),re(B.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ve(i.TEXTURE_CUBE_MAP,E);for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)pe(B.__webglFramebuffer[be][Me],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Me);else pe(B.__webglFramebuffer[be],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(E)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let be=0,Me=X.length;be<Me;be++){let Ie=X[be],he=n.get(Ie);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),ve(i.TEXTURE_2D,Ie),pe(B.__webglFramebuffer,I,Ie,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),g(Ie)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,W.__webglTexture),ve(be,E),E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)pe(B.__webglFramebuffer[Me],I,E,i.COLOR_ATTACHMENT0,be,Me);else pe(B.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,be,0);g(E)&&m(be),t.unbindTexture()}I.depthBuffer&&ce(I)}function ie(I){let E=I.textures;for(let B=0,W=E.length;B<W;B++){let X=E[B];if(g(X)){let q=_(I),ge=n.get(X).__webglTexture;t.bindTexture(q,ge),m(q),t.unbindTexture()}}}let se=[],D=[];function _e(I){if(I.samples>0){if(ue(I)===!1){let E=I.textures,B=I.width,W=I.height,X=i.COLOR_BUFFER_BIT,q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(I),be=E.length>1;if(be)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Me]);let Ie=n.get(E[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,X,i.NEAREST),l===!0&&(se.length=0,D.length=0,se.push(i.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(se.push(q),D.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Me]);let Ie=n.get(E[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Q(I){return Math.min(s.maxSamples,I.samples)}function ue(I){let E=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function me(I){let E=o.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function Le(I,E){let B=I.colorSpace,W=I.format,X=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||B!==Tn&&B!==os&&(vt.getTransfer(B)===Rt?(W!==Zn||X!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function Te(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=N,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=Se,this.setupRenderTarget=De,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ue}function Ab(i,e){function t(n,s=os){let r,o=vt.getTransfer(s);if(n===Hi)return i.UNSIGNED_BYTE;if(n===Lh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hp)return i.BYTE;if(n===zp)return i.SHORT;if(n===Oo)return i.UNSIGNED_SHORT;if(n===Ih)return i.INT;if(n===Gs)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===ui)return i.HALF_FLOAT;if(n===Op)return i.ALPHA;if(n===kp)return i.RGB;if(n===Zn)return i.RGBA;if(n===Vp)return i.LUMINANCE;if(n===Gp)return i.LUMINANCE_ALPHA;if(n===Fr)return i.DEPTH_COMPONENT;if(n===Vr)return i.DEPTH_STENCIL;if(n===Dh)return i.RED;if(n===Fh)return i.RED_INTEGER;if(n===Wp)return i.RG;if(n===Nh)return i.RG_INTEGER;if(n===Hh)return i.RGBA_INTEGER;if(n===el||n===tl||n===nl||n===il)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===el)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===el)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===il)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fu||n===pu||n===mu||n===gu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vu||n===xu||n===yu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vu||n===xu)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_u||n===bu||n===Mu||n===Eu||n===wu||n===Tu||n===Su||n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Lu||n===Uu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_u)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Su)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Au)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ru)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Iu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uu)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===Du||n===Fu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Du)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xp||n===Nu||n===Hu||n===zu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qu=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ge=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rb={type:"move"},Do=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pb=`
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

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new dn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new We({vertexShader:Cb,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends us{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,v=new eh,g=t.getContextAttributes(),m=null,_=null,x=[],y=[],R=new le,w=null,A=new Vt;A.viewport=new yt;let C=new Vt;C.viewport=new yt;let T=[A,C],b=new Qu,S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ee=x[V];return ee===void 0&&(ee=new Do,x[V]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(V){let ee=x[V];return ee===void 0&&(ee=new Do,x[V]=ee),ee.getGripSpace()},this.getHand=function(V){let ee=x[V];return ee===void 0&&(ee=new Do,x[V]=ee),ee.getHandSpace()};function F(V){let ee=y.indexOf(V.inputSource);if(ee===-1)return;let pe=x[ee];pe!==void 0&&(pe.update(V.inputSource,V.frame,c||o),pe.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",N);for(let V=0;V<x.length;V++){let ee=y[V];ee!==null&&(y[V]=null,x[V].disconnect(ee))}S=null,z=null,v.reset(),e.setRenderTarget(m),f=null,d=null,h=null,s=null,_=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",L),s.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Pn(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,pe=null,re=null;g.depth&&(re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?Vr:Fr,pe=g.stencil?kr:Gs);let xe={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Pn(d.textureWidth,d.textureHeight,{format:Zn,type:Hi,depthTexture:new dl(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function N(V){for(let ee=0;ee<V.removed.length;ee++){let pe=V.removed[ee],re=y.indexOf(pe);re>=0&&(y[re]=null,x[re].disconnect(pe))}for(let ee=0;ee<V.added.length;ee++){let pe=V.added[ee],re=y.indexOf(pe);if(re===-1){for(let ce=0;ce<x.length;ce++)if(ce>=y.length){y.push(pe),re=ce;break}else if(y[ce]===null){y[ce]=pe,re=ce;break}if(re===-1)break}let xe=x[re];xe&&xe.connect(pe)}}let U=new M,k=new M;function H(V,ee,pe){U.setFromMatrixPosition(ee.matrixWorld),k.setFromMatrixPosition(pe.matrixWorld);let re=U.distanceTo(k),xe=ee.projectionMatrix.elements,ce=pe.projectionMatrix.elements,Se=xe[14]/(xe[10]-1),De=xe[14]/(xe[10]+1),ie=(xe[9]+1)/xe[5],se=(xe[9]-1)/xe[5],D=(xe[8]-1)/xe[0],_e=(ce[8]+1)/ce[0],Q=Se*D,ue=Se*_e,me=re/(-D+_e),Le=me*-D;if(ee.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Le),V.translateZ(me),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),xe[10]===-1)V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Te=Se+me,I=De+me,E=Q-Le,B=ue+(re-Le),W=ie*De/I*Te,X=se*De/I*Te;V.projectionMatrix.makePerspective(E,B,W,X,Te,I),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function K(V,ee){ee===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ee.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let ee=V.near,pe=V.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),b.near=C.near=A.near=ee,b.far=C.far=A.far=pe,(S!==b.near||z!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,z=b.far),A.layers.mask=V.layers.mask|2,C.layers.mask=V.layers.mask|4,b.layers.mask=A.layers.mask|C.layers.mask;let re=V.parent,xe=b.cameras;K(b,re);for(let ce=0;ce<xe.length;ce++)K(xe[ce],re);xe.length===2?H(b,A,C):b.projectionMatrix.copy(A.projectionMatrix),O(V,b,re)};function O(V,ee,pe){pe===null?V.matrix.copy(ee.matrixWorld):(V.matrix.copy(pe.matrixWorld),V.matrix.invert(),V.matrix.multiply(ee.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Xr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let j=null;function ve(V,ee){if(u=ee.getViewerPose(c||o),p=ee,u!==null){let pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let re=!1;pe.length!==b.cameras.length&&(b.cameras.length=0,re=!0);for(let ce=0;ce<pe.length;ce++){let Se=pe[ce],De=null;if(f!==null)De=f.getViewport(Se);else{let se=h.getViewSubImage(d,Se);De=se.viewport,ce===0&&(e.setRenderTargetTextures(_,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(_))}let ie=T[ce];ie===void 0&&(ie=new Vt,ie.layers.enable(ce),ie.viewport=new yt,T[ce]=ie),ie.matrix.fromArray(Se.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Se.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(De.x,De.y,De.width,De.height),ce===0&&(b.matrix.copy(ie.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),re===!0&&b.cameras.push(ie)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")){let ce=h.getDepthInformation(pe[0]);ce&&ce.isValid&&ce.texture&&v.init(e,ce,s.renderState)}}for(let pe=0;pe<x.length;pe++){let re=y[pe],xe=x[pe];re!==null&&xe!==void 0&&xe.update(re,ee,c||o)}j&&j(V,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let de=new jp;de.setAnimationLoop(ve),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}},zs=new yn,Ib=new we;function Lb(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Kp(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===En&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===En&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=e.get(m),x=_.envMap,y=_.envMapRotation;x&&(g.envMap.value=x,zs.copy(y),zs.x*=-1,zs.y*=-1,zs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),g.envMapRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(zs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ub(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){let y=x.program;n.uniformBlockBinding(_,y)}function c(_,x){let y=s[_.id];y===void 0&&(p(_),y=u(_),s[_.id]=y,_.addEventListener("dispose",g));let R=x.program;n.updateUBOMapping(_,R);let w=e.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function u(_){let x=h();_.__bindingPointIndex=x;let y=i.createBuffer(),R=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=s[_.id],y=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,A=y.length;w<A;w++){let C=Array.isArray(y[w])?y[w]:[y[w]];for(let T=0,b=C.length;T<b;T++){let S=C[T];if(f(S,w,T,R)===!0){let z=S.__offset,F=Array.isArray(S.value)?S.value:[S.value],L=0;for(let N=0;N<F.length;N++){let U=F[N],k=v(U);typeof U=="number"||typeof U=="boolean"?(S.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,z+L,S.__data)):U.isMatrix3?(S.__data[0]=U.elements[0],S.__data[1]=U.elements[1],S.__data[2]=U.elements[2],S.__data[3]=0,S.__data[4]=U.elements[3],S.__data[5]=U.elements[4],S.__data[6]=U.elements[5],S.__data[7]=0,S.__data[8]=U.elements[6],S.__data[9]=U.elements[7],S.__data[10]=U.elements[8],S.__data[11]=0):(U.toArray(S.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,x,y,R){let w=_.value,A=x+"_"+y;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{let C=R[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function p(_){let x=_.uniforms,y=0,R=16;for(let A=0,C=x.length;A<C;A++){let T=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,S=T.length;b<S;b++){let z=T[b],F=Array.isArray(z.value)?z.value:[z.value];for(let L=0,N=F.length;L<N;L++){let U=F[L],k=v(U),H=y%R,K=H%k.boundary,O=H+K;y+=K,O!==0&&R-O<k.storage&&(y+=R-O),z.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=k.storage}}}let w=y%R;return w>0&&(y+=R-w),_.__size=y,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){let x=_.target;x.removeEventListener("dispose",g);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var fl=class{constructor(e={}){let{canvas:t=zg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),v=new Int32Array(4),g=null,m=null,_=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=cs,this.toneMappingExposure=1;let y=this,R=!1,w=0,A=0,C=null,T=-1,b=null,S=new yt,z=new yt,F=null,L=new oe(0),N=0,U=t.width,k=t.height,H=1,K=null,O=null,j=new yt(0,0,U,k),ve=new yt(0,0,U,k),de=!1,V=new Go,ee=!1,pe=!1,re=new we,xe=new we,ce=new M,Se=new yt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function se(){return C===null?H:1}let D=n;function _e(P,Y){return t.getContext(P,Y)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mh}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ze,!1),D===null){let Y="webgl2";if(D=_e(Y,P),D===null)throw _e(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Q,ue,me,Le,Te,I,E,B,W,X,q,ge,be,Me,Ie,he,fe,ye,Ce,Ae,Je,je,ct,G;function Ee(){Q=new Zy(D),Q.init(),je=new Ab(D,Q),ue=new Gy(D,Q,e,je),me=new wb(D,Q),ue.reverseDepthBuffer&&d&&me.buffers.depth.setReversed(!0),Le=new Jy(D),Te=new hb,I=new Sb(D,Q,me,Te,ue,je,Le),E=new Xy(y),B=new $y(y),W=new rv(D),ct=new ky(D,W),X=new Ky(D,W,Le,ct),q=new e_(D,X,W,Le),Ce=new Qy(D,ue,I),he=new Wy(Te),ge=new ub(y,E,B,Q,ue,ct,he),be=new Lb(y,Te),Me=new fb,Ie=new yb(Q),ye=new Oy(y,E,B,me,q,f,l),fe=new Mb(y,q,ue),G=new Ub(D,Le,ue,me),Ae=new Vy(D,Q,Le),Je=new jy(D,Q,Le),Le.programs=ge.programs,y.capabilities=ue,y.extensions=Q,y.properties=Te,y.renderLists=Me,y.shadowMap=fe,y.state=me,y.info=Le}Ee();let J=new th(y,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(U,k,!1))},this.getSize=function(P){return P.set(U,k)},this.setSize=function(P,Y,ne=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,k=Y,t.width=Math.floor(P*H),t.height=Math.floor(Y*H),ne===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(U*H,k*H).floor()},this.setDrawingBufferSize=function(P,Y,ne){U=P,k=Y,H=ne,t.width=Math.floor(P*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,Y,ne,te){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,Y,ne,te),me.viewport(S.copy(j).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(ve)},this.setScissor=function(P,Y,ne,te){P.isVector4?ve.set(P.x,P.y,P.z,P.w):ve.set(P,Y,ne,te),me.scissor(z.copy(ve).multiplyScalar(H).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(P){me.setScissorTest(de=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){O=P},this.getClearColor=function(P){return P.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(P=!0,Y=!0,ne=!0){let te=0;if(P){let $=!1;if(C!==null){let Pe=C.texture.format;$=Pe===Hh||Pe===Nh||Pe===Fh}if($){let Pe=C.texture.type,ke=Pe===Hi||Pe===Gs||Pe===Oo||Pe===kr||Pe===Lh||Pe===Uh,qe=ye.getClearColor(),Ye=ye.getClearAlpha(),lt=qe.r,ht=qe.g,$e=qe.b;ke?(p[0]=lt,p[1]=ht,p[2]=$e,p[3]=Ye,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=lt,v[1]=ht,v[2]=$e,v[3]=Ye,D.clearBufferiv(D.COLOR,0,v))}else te|=D.COLOR_BUFFER_BIT}Y&&(te|=D.DEPTH_BUFFER_BIT),ne&&(te|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),Me.dispose(),Ie.dispose(),Te.dispose(),E.dispose(),B.dispose(),q.dispose(),ct.dispose(),G.dispose(),ge.dispose(),J.dispose(),J.removeEventListener("sessionstart",Zi),J.removeEventListener("sessionend",Ls),fi.stop()};function ae(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let P=Le.autoReset,Y=fe.enabled,ne=fe.autoUpdate,te=fe.needsUpdate,$=fe.type;Ee(),Le.autoReset=P,fe.enabled=Y,fe.autoUpdate=ne,fe.needsUpdate=te,fe.type=$}function ze(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function rt(P){let Y=P.target;Y.removeEventListener("dispose",rt),It(Y)}function It(P){en(P),Te.remove(P)}function en(P){let Y=Te.get(P).programs;Y!==void 0&&(Y.forEach(function(ne){ge.releaseProgram(ne)}),P.isShaderMaterial&&ge.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,ne,te,$,Pe){Y===null&&(Y=De);let ke=$.isMesh&&$.matrixWorld.determinant()<0,qe=ji(P,Y,ne,te,$);me.setMaterial(te,ke);let Ye=ne.index,lt=1;if(te.wireframe===!0){if(Ye=X.getWireframeAttribute(ne),Ye===void 0)return;lt=2}let ht=ne.drawRange,$e=ne.attributes.position,Et=ht.start*lt,Ht=(ht.start+ht.count)*lt;Pe!==null&&(Et=Math.max(Et,Pe.start*lt),Ht=Math.min(Ht,(Pe.start+Pe.count)*lt)),Ye!==null?(Et=Math.max(Et,0),Ht=Math.min(Ht,Ye.count)):$e!=null&&(Et=Math.max(Et,0),Ht=Math.min(Ht,$e.count));let Ot=Ht-Et;if(Ot<0||Ot===1/0)return;ct.setup($,te,qe,ne,Ye);let Fn,St=Ae;if(Ye!==null&&(Fn=W.get(Ye),St=Je,St.setIndex(Fn)),$.isMesh)te.wireframe===!0?(me.setLineWidth(te.wireframeLinewidth*se()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if($.isLine){let Ze=te.linewidth;Ze===void 0&&(Ze=1),me.setLineWidth(Ze*se()),$.isLineSegments?St.setMode(D.LINES):$.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else $.isPoints?St.setMode(D.POINTS):$.isSprite&&St.setMode(D.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)St.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))St.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ze=$._multiDrawStarts,Ti=$._multiDrawCounts,At=$._multiDrawCount,ii=Ye?W.get(Ye).bytesPerElement:1,hr=Te.get(te).currentProgram.getUniforms();for(let Bn=0;Bn<At;Bn++)hr.setValue(D,"_gl_DrawID",Bn),St.render(Ze[Bn]/ii,Ti[Bn])}else if($.isInstancedMesh)St.renderInstances(Et,Ot,$.count);else if(ne.isInstancedBufferGeometry){let Ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ti=Math.min(ne.instanceCount,Ze);St.renderInstances(Et,Ot,Ti)}else St.render(Et,Ot)};function mt(P,Y,ne){P.transparent===!0&&P.side===Qe&&P.forceSinglePass===!1?(P.side=En,P.needsUpdate=!0,Ue(P,Y,ne),P.side=xi,P.needsUpdate=!0,Ue(P,Y,ne),P.side=Qe):Ue(P,Y,ne)}this.compile=function(P,Y,ne=null){ne===null&&(ne=P),m=Ie.get(ne),m.init(Y),x.push(m),ne.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),P!==ne&&P.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();let te=new Set;return P.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Pe=$.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){let qe=Pe[ke];mt(qe,ne,$),te.add(qe)}else mt(Pe,ne,$),te.add(Pe)}),x.pop(),m=null,te},this.compileAsync=function(P,Y,ne=null){let te=this.compile(P,Y,ne);return new Promise($=>{function Pe(){if(te.forEach(function(ke){Te.get(ke).currentProgram.isReady()&&te.delete(ke)}),te.size===0){$(P);return}setTimeout(Pe,10)}Q.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let An=null;function Jt(P){An&&An(P)}function Zi(){fi.stop()}function Ls(){fi.start()}let fi=new jp;fi.setAnimationLoop(Jt),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(P){An=P,J.setAnimationLoop(P),P===null?fi.stop():fi.start()},J.addEventListener("sessionstart",Zi),J.addEventListener("sessionend",Ls),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(Y),Y=J.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,Y,C),m=Ie.get(P,x.length),m.init(Y),x.push(m),xe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V.setFromProjectionMatrix(xe),pe=this.localClippingEnabled,ee=he.init(this.clippingPlanes,pe),g=Me.get(P,_.length),g.init(),_.push(g),J.enabled===!0&&J.isPresenting===!0){let Pe=y.xr.getDepthSensingMesh();Pe!==null&&ur(Pe,Y,-1/0,y.sortObjects)}ur(P,Y,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(K,O),ie=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ie&&ye.addToRenderList(g,P),this.info.render.frame++,ee===!0&&he.beginShadows();let ne=m.state.shadowsArray;fe.render(ne,P,Y),ee===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let te=g.opaque,$=g.transmissive;if(m.setupLights(),Y.isArrayCamera){let Pe=Y.cameras;if($.length>0)for(let ke=0,qe=Pe.length;ke<qe;ke++){let Ye=Pe[ke];po(te,$,P,Ye)}ie&&ye.render(P);for(let ke=0,qe=Pe.length;ke<qe;ke++){let Ye=Pe[ke];fo(g,P,Ye,Ye.viewport)}}else $.length>0&&po(te,$,P,Y),ie&&ye.render(P),fo(g,P,Y);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(y,P,Y),ct.resetDefaultState(),T=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],ee===!0&&he.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function ur(P,Y,ne,te){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||V.intersectsSprite(P)){te&&Se.setFromMatrixPosition(P.matrixWorld).applyMatrix4(xe);let ke=q.update(P),qe=P.material;qe.visible&&g.push(P,ke,qe,ne,Se.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||V.intersectsObject(P))){let ke=q.update(P),qe=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Se.copy(P.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Se.copy(ke.boundingSphere.center)),Se.applyMatrix4(P.matrixWorld).applyMatrix4(xe)),Array.isArray(qe)){let Ye=ke.groups;for(let lt=0,ht=Ye.length;lt<ht;lt++){let $e=Ye[lt],Et=qe[$e.materialIndex];Et&&Et.visible&&g.push(P,ke,Et,ne,Se.z,$e)}}else qe.visible&&g.push(P,ke,qe,ne,Se.z,null)}}let Pe=P.children;for(let ke=0,qe=Pe.length;ke<qe;ke++)ur(Pe[ke],Y,ne,te)}function fo(P,Y,ne,te){let $=P.opaque,Pe=P.transmissive,ke=P.transparent;m.setupLightsView(ne),ee===!0&&he.setGlobalState(y.clippingPlanes,ne),te&&me.viewport(S.copy(te)),$.length>0&&Ki($,Y,ne),Pe.length>0&&Ki(Pe,Y,ne),ke.length>0&&Ki(ke,Y,ne),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function po(P,Y,ne,te){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[te.id]===void 0&&(m.state.transmissionRenderTarget[te.id]=new Pn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?ui:Hi,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));let Pe=m.state.transmissionRenderTarget[te.id],ke=te.viewport||S;Pe.setSize(ke.z,ke.w);let qe=y.getRenderTarget();y.setRenderTarget(Pe),y.getClearColor(L),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear(),ie&&ye.render(ne);let Ye=y.toneMapping;y.toneMapping=cs;let lt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),m.setupLightsView(te),ee===!0&&he.setGlobalState(y.clippingPlanes,te),Ki(P,ne,te),I.updateMultisampleRenderTarget(Pe),I.updateRenderTargetMipmap(Pe),Q.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let $e=0,Et=Y.length;$e<Et;$e++){let Ht=Y[$e],Ot=Ht.object,Fn=Ht.geometry,St=Ht.material,Ze=Ht.group;if(St.side===Qe&&Ot.layers.test(te.layers)){let Ti=St.side;St.side=En,St.needsUpdate=!0,mo(Ot,ne,te,Fn,St,Ze),St.side=Ti,St.needsUpdate=!0,ht=!0}}ht===!0&&(I.updateMultisampleRenderTarget(Pe),I.updateRenderTargetMipmap(Pe))}y.setRenderTarget(qe),y.setClearColor(L,N),lt!==void 0&&(te.viewport=lt),y.toneMapping=Ye}function Ki(P,Y,ne){let te=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Pe=P.length;$<Pe;$++){let ke=P[$],qe=ke.object,Ye=ke.geometry,lt=te===null?ke.material:te,ht=ke.group;qe.layers.test(ne.layers)&&mo(qe,Y,ne,Ye,lt,ht)}}function mo(P,Y,ne,te,$,Pe){P.onBeforeRender(y,Y,ne,te,$,Pe),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(y,Y,ne,te,P,Pe),$.transparent===!0&&$.side===Qe&&$.forceSinglePass===!1?($.side=En,$.needsUpdate=!0,y.renderBufferDirect(ne,Y,te,$,P,Pe),$.side=xi,$.needsUpdate=!0,y.renderBufferDirect(ne,Y,te,$,P,Pe),$.side=Qe):y.renderBufferDirect(ne,Y,te,$,P,Pe),P.onAfterRender(y,Y,ne,te,$,Pe)}function Ue(P,Y,ne){Y.isScene!==!0&&(Y=De);let te=Te.get(P),$=m.state.lights,Pe=m.state.shadowsArray,ke=$.state.version,qe=ge.getParameters(P,$.state,Pe,Y,ne),Ye=ge.getProgramCacheKey(qe),lt=te.programs;te.environment=P.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(P.isMeshStandardMaterial?B:E).get(P.envMap||te.environment),te.envMapRotation=te.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,lt===void 0&&(P.addEventListener("dispose",rt),lt=new Map,te.programs=lt);let ht=lt.get(Ye);if(ht!==void 0){if(te.currentProgram===ht&&te.lightsStateVersion===ke)return sn(P,qe),ht}else qe.uniforms=ge.getUniforms(P),P.onBeforeCompile(qe,y),ht=ge.acquireProgram(qe,Ye),lt.set(Ye,ht),te.uniforms=qe.uniforms;let $e=te.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&($e.clippingPlanes=he.uniform),sn(P,qe),te.needsLights=Bt(P),te.lightsStateVersion=ke,te.needsLights&&($e.ambientLightColor.value=$.state.ambient,$e.lightProbe.value=$.state.probe,$e.directionalLights.value=$.state.directional,$e.directionalLightShadows.value=$.state.directionalShadow,$e.spotLights.value=$.state.spot,$e.spotLightShadows.value=$.state.spotShadow,$e.rectAreaLights.value=$.state.rectArea,$e.ltc_1.value=$.state.rectAreaLTC1,$e.ltc_2.value=$.state.rectAreaLTC2,$e.pointLights.value=$.state.point,$e.pointLightShadows.value=$.state.pointShadow,$e.hemisphereLights.value=$.state.hemi,$e.directionalShadowMap.value=$.state.directionalShadowMap,$e.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$e.spotShadowMap.value=$.state.spotShadowMap,$e.spotLightMatrix.value=$.state.spotLightMatrix,$e.spotLightMap.value=$.state.spotLightMap,$e.pointShadowMap.value=$.state.pointShadowMap,$e.pointShadowMatrix.value=$.state.pointShadowMatrix),te.currentProgram=ht,te.uniformsList=null,ht}function it(P){if(P.uniformsList===null){let Y=P.currentProgram.getUniforms();P.uniformsList=Hr.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function sn(P,Y){let ne=Te.get(P);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function ji(P,Y,ne,te,$){Y.isScene!==!0&&(Y=De),I.resetTextureUnits();let Pe=Y.fog,ke=te.isMeshStandardMaterial?Y.environment:null,qe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Tn,Ye=(te.isMeshStandardMaterial?B:E).get(te.envMap||ke),lt=te.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ht=!!ne.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),$e=!!ne.morphAttributes.position,Et=!!ne.morphAttributes.normal,Ht=!!ne.morphAttributes.color,Ot=cs;te.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ot=y.toneMapping);let Fn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,St=Fn!==void 0?Fn.length:0,Ze=Te.get(te),Ti=m.state.lights;if(ee===!0&&(pe===!0||P!==b)){let Yn=P===b&&te.id===T;he.setState(te,P,Yn)}let At=!1;te.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ti.state.version||Ze.outputColorSpace!==qe||$.isBatchedMesh&&Ze.batching===!1||!$.isBatchedMesh&&Ze.batching===!0||$.isBatchedMesh&&Ze.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ze.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ze.instancing===!1||!$.isInstancedMesh&&Ze.instancing===!0||$.isSkinnedMesh&&Ze.skinning===!1||!$.isSkinnedMesh&&Ze.skinning===!0||$.isInstancedMesh&&Ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ze.instancingMorph===!1&&$.morphTexture!==null||Ze.envMap!==Ye||te.fog===!0&&Ze.fog!==Pe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==he.numPlanes||Ze.numIntersection!==he.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==ht||Ze.morphTargets!==$e||Ze.morphNormals!==Et||Ze.morphColors!==Ht||Ze.toneMapping!==Ot||Ze.morphTargetsCount!==St)&&(At=!0):(At=!0,Ze.__version=te.version);let ii=Ze.currentProgram;At===!0&&(ii=Ue(te,Y,$));let hr=!1,Bn=!1,go=!1,kt=ii.getUniforms(),pi=Ze.uniforms;if(me.useProgram(ii.program)&&(hr=!0,Bn=!0,go=!0),te.id!==T&&(T=te.id,Bn=!0),hr||b!==P){me.buffers.depth.getReversed()?(re.copy(P.projectionMatrix),Og(re),kg(re),kt.setValue(D,"projectionMatrix",re)):kt.setValue(D,"projectionMatrix",P.projectionMatrix),kt.setValue(D,"viewMatrix",P.matrixWorldInverse);let Ji=kt.map.cameraPosition;Ji!==void 0&&Ji.setValue(D,ce.setFromMatrixPosition(P.matrixWorld)),ue.logarithmicDepthBuffer&&kt.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&kt.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Bn=!0,go=!0)}if($.isSkinnedMesh){kt.setOptional(D,$,"bindMatrix"),kt.setOptional(D,$,"bindMatrixInverse");let Yn=$.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),kt.setValue(D,"boneTexture",Yn.boneTexture,I))}$.isBatchedMesh&&(kt.setOptional(D,$,"batchingTexture"),kt.setValue(D,"batchingTexture",$._matricesTexture,I),kt.setOptional(D,$,"batchingIdTexture"),kt.setValue(D,"batchingIdTexture",$._indirectTexture,I),kt.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&kt.setValue(D,"batchingColorTexture",$._colorsTexture,I));let vo=ne.morphAttributes;if((vo.position!==void 0||vo.normal!==void 0||vo.color!==void 0)&&Ce.update($,ne,ii),(Bn||Ze.receiveShadow!==$.receiveShadow)&&(Ze.receiveShadow=$.receiveShadow,kt.setValue(D,"receiveShadow",$.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(pi.envMap.value=Ye,pi.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&Y.environment!==null&&(pi.envMapIntensity.value=Y.environmentIntensity),Bn&&(kt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&Dn(pi,go),Pe&&te.fog===!0&&be.refreshFogUniforms(pi,Pe),be.refreshMaterialUniforms(pi,te,H,k,m.state.transmissionRenderTarget[P.id]),Hr.upload(D,it(Ze),pi,I)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Hr.upload(D,it(Ze),pi,I),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&kt.setValue(D,"center",$.center),kt.setValue(D,"modelViewMatrix",$.modelViewMatrix),kt.setValue(D,"normalMatrix",$.normalMatrix),kt.setValue(D,"modelMatrix",$.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Yn=te.uniformsGroups;for(let Ji=0,Qi=Yn.length;Ji<Qi;Ji++){let of=Yn[Ji];G.update(of,ii),G.bind(of,ii)}}return ii}function Dn(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Bt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,Y,ne){Te.get(P.texture).__webglTexture=Y,Te.get(P.depthTexture).__webglTexture=ne;let te=Te.get(P);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ne===void 0,te.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){let ne=Te.get(P);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,ne=0){C=P,w=Y,A=ne;let te=!0,$=null,Pe=!1,ke=!1;if(P){let Ye=Te.get(P);if(Ye.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(D.FRAMEBUFFER,null),te=!1;else if(Ye.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(Ye.__hasExternalTextures)I.rebindTextures(P,Te.get(P.texture).__webglTexture,Te.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let $e=P.depthTexture;if(Ye.__boundDepthTexture!==$e){if($e!==null&&Te.has($e)&&(P.width!==$e.image.width||P.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}let lt=P.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(ke=!0);let ht=Te.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ht[Y])?$=ht[Y][ne]:$=ht[Y],Pe=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?$=Te.get(P).__webglMultisampledFramebuffer:Array.isArray(ht)?$=ht[ne]:$=ht,S.copy(P.viewport),z.copy(P.scissor),F=P.scissorTest}else S.copy(j).multiplyScalar(H).floor(),z.copy(ve).multiplyScalar(H).floor(),F=de;if(me.bindFramebuffer(D.FRAMEBUFFER,$)&&te&&me.drawBuffers(P,$),me.viewport(S),me.scissor(z),me.setScissorTest(F),Pe){let Ye=Te.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ye.__webglTexture,ne)}else if(ke){let Ye=Te.get(P.texture),lt=Y||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ye.__webglTexture,ne||0,lt)}T=-1},this.readRenderTargetPixels=function(P,Y,ne,te,$,Pe,ke){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Te.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){me.bindFramebuffer(D.FRAMEBUFFER,qe);try{let Ye=P.texture,lt=Ye.format,ht=Ye.type;if(!ue.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-te&&ne>=0&&ne<=P.height-$&&D.readPixels(Y,ne,te,$,je.convert(lt),je.convert(ht),Pe)}finally{let Ye=C!==null?Te.get(C).__webglFramebuffer:null;me.bindFramebuffer(D.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(P,Y,ne,te,$,Pe,ke){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Te.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){let Ye=P.texture,lt=Ye.format,ht=Ye.type;if(!ue.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=P.width-te&&ne>=0&&ne<=P.height-$){me.bindFramebuffer(D.FRAMEBUFFER,qe);let $e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.bufferData(D.PIXEL_PACK_BUFFER,Pe.byteLength,D.STREAM_READ),D.readPixels(Y,ne,te,$,je.convert(lt),je.convert(ht),0);let Et=C!==null?Te.get(C).__webglFramebuffer:null;me.bindFramebuffer(D.FRAMEBUFFER,Et);let Ht=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Bg(D,Ht,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Pe),D.deleteBuffer($e),D.deleteSync(Ht),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Y=null,ne=0){P.isTexture!==!0&&(Co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1]);let te=Math.pow(2,-ne),$=Math.floor(P.image.width*te),Pe=Math.floor(P.image.height*te),ke=Y!==null?Y.x:0,qe=Y!==null?Y.y:0;I.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,ne,0,0,ke,qe,$,Pe),me.unbindTexture()},this.copyTextureToTexture=function(P,Y,ne=null,te=null,$=0){P.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,P=arguments[1],Y=arguments[2],$=arguments[3]||0,ne=null);let Pe,ke,qe,Ye,lt,ht,$e,Et,Ht,Ot=P.isCompressedTexture?P.mipmaps[$]:P.image;ne!==null?(Pe=ne.max.x-ne.min.x,ke=ne.max.y-ne.min.y,qe=ne.isBox3?ne.max.z-ne.min.z:1,Ye=ne.min.x,lt=ne.min.y,ht=ne.isBox3?ne.min.z:0):(Pe=Ot.width,ke=Ot.height,qe=Ot.depth||1,Ye=0,lt=0,ht=0),te!==null?($e=te.x,Et=te.y,Ht=te.z):($e=0,Et=0,Ht=0);let Fn=je.convert(Y.format),St=je.convert(Y.type),Ze;Y.isData3DTexture?(I.setTexture3D(Y,0),Ze=D.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(I.setTexture2DArray(Y,0),Ze=D.TEXTURE_2D_ARRAY):(I.setTexture2D(Y,0),Ze=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);let Ti=D.getParameter(D.UNPACK_ROW_LENGTH),At=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ii=D.getParameter(D.UNPACK_SKIP_PIXELS),hr=D.getParameter(D.UNPACK_SKIP_ROWS),Bn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ht);let go=P.isDataArrayTexture||P.isData3DTexture,kt=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let pi=Te.get(P),vo=Te.get(Y),Yn=Te.get(pi.__renderTarget),Ji=Te.get(vo.__renderTarget);me.bindFramebuffer(D.READ_FRAMEBUFFER,Yn.__webglFramebuffer),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Qi=0;Qi<qe;Qi++)go&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(P).__webglTexture,$,ht+Qi),P.isDepthTexture?(kt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(Y).__webglTexture,$,Ht+Qi),D.blitFramebuffer(Ye,lt,Pe,ke,$e,Et,Pe,ke,D.DEPTH_BUFFER_BIT,D.NEAREST)):kt?D.copyTexSubImage3D(Ze,$,$e,Et,Ht+Qi,Ye,lt,Pe,ke):D.copyTexSubImage2D(Ze,$,$e,Et,Ht+Qi,Ye,lt,Pe,ke);me.bindFramebuffer(D.READ_FRAMEBUFFER,null),me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else kt?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Ze,$,$e,Et,Ht,Pe,ke,qe,Fn,St,Ot.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D(Ze,$,$e,Et,Ht,Pe,ke,qe,Fn,Ot.data):D.texSubImage3D(Ze,$,$e,Et,Ht,Pe,ke,qe,Fn,St,Ot):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,$,$e,Et,Pe,ke,Fn,St,Ot.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,$,$e,Et,Ot.width,Ot.height,Fn,Ot.data):D.texSubImage2D(D.TEXTURE_2D,$,$e,Et,Pe,ke,Fn,St,Ot);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ti),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ii),D.pixelStorei(D.UNPACK_SKIP_ROWS,hr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bn),$===0&&Y.generateMipmaps&&D.generateMipmap(Ze),me.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,ne=null,te=null,$=0){return P.isTexture!==!0&&(Co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,te=arguments[1]||null,P=arguments[2],Y=arguments[3],$=arguments[4]||0),Co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Y,ne,te,$)},this.initRenderTarget=function(P){Te.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),me.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,me.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var Wo=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bu,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new M,qs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jn=class extends Ln{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,Mo=new M,Ar=new M,Rr=new M,Cr=new le,Eo=new le,nm=new we,Oa=new M,wo=new M,ka=new M,ap=new le,Zc=new le,lp=new le,ci=class extends Gt{constructor(e=new jn){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $r(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new qs(n,3,0,!1)),Sr.setAttribute("uv",new qs(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),nm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-Rr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Va(Oa.set(-.5,-.5,0),Rr,o,Ar,s,r),Va(wo.set(.5,-.5,0),Rr,o,Ar,s,r),Va(ka.set(.5,.5,0),Rr,o,Ar,s,r),ap.set(0,0),Zc.set(1,0),lp.set(1,1);let a=e.ray.intersectTriangle(Oa,wo,ka,!1,Mo);if(a===null&&(Va(wo.set(-.5,.5,0),Rr,o,Ar,s,r),Zc.set(0,1),a=e.ray.intersectTriangle(Oa,ka,wo,!1,Mo),a===null))return;let l=e.ray.origin.distanceTo(Mo);l<e.near||l>e.far||t.push({distance:l,point:Mo.clone(),uv:as.getInterpolation(Mo,Oa,wo,ka,ap,Zc,lp,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Va(i,e,t,n,s,r){Cr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Eo.x=r*Cr.x-s*Cr.y,Eo.y=s*Cr.x+r*Cr.y):Eo.copy(Cr),i.copy(e),i.x+=Eo.x,i.y+=Eo.y,i.applyMatrix4(nm)}var Ga=new M,cp=new M,pl=class extends Gt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,s=t.length;n<s;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ga.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(Ga);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Ga.setFromMatrixPosition(e.matrixWorld),cp.setFromMatrixPosition(this.matrixWorld);let n=Ga.distanceTo(cp)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},up=new M,hp=new yt,dp=new yt,Db=new M,fp=new we,Wa=new M,Kc=new In,pp=new we,jc=new Ws,ml=class extends Re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uf,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wa),this.boundingBox.expandByPoint(Wa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wa),this.boundingSphere.expandByPoint(Wa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kc.copy(this.boundingSphere),Kc.applyMatrix4(s),e.ray.intersectsSphere(Kc)!==!1&&(pp.copy(s).invert(),jc.copy(e.ray).applyMatrix4(pp),!(this.boundingBox!==null&&jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ug?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;hp.fromBufferAttribute(s.attributes.skinIndex,e),dp.fromBufferAttribute(s.attributes.skinWeight,e),up.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=dp.getComponent(r);if(o!==0){let a=hp.getComponent(r);fp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Db.copy(up).applyMatrix4(fp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Xo=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},gl=class extends dn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=wn,u=wn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mp=new we,Fb=new we,vl=class i{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Fb;mp.multiplyMatrices(a,t[r]),mp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new gl(t,e,e,Zn,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Xo),this.bones.push(o),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},xt=class extends nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pr=new we,gp=new we,Xa=[],vp=new Zt,Nb=new we,To=new Re,So=new In,Ut=class extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),vp.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(vp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),So.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(So)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(n),e.ray.intersectsSphere(So)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pr),gp.multiplyMatrices(n,Pr),To.matrixWorld=gp,To.raycast(e,Xa);for(let o=0,a=Xa.length;o<a;o++){let l=Xa[o];l.instanceId=r,l.object=this,t.push(l)}Xa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gl(new Float32Array(s*this.count),s,this.count,Dh,li));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qo=class extends Ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xl=new M,yl=new M,xp=new we,Ao=new Ws,qa=new In,Jc=new M,yp=new M,Zr=class extends Gt{constructor(e=new tt,t=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xl.fromBufferAttribute(t,s-1),yl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xl.distanceTo(yl);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;xp.copy(s).invert(),Ao.copy(e.ray).applyMatrix4(xp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=u.getX(v),_=u.getX(v+1),x=Ya(this,e,Ao,l,m,_);x&&t.push(x)}if(this.isLineLoop){let v=u.getX(p-1),g=u.getX(f),m=Ya(this,e,Ao,l,v,g);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=c){let m=Ya(this,e,Ao,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){let v=Ya(this,e,Ao,l,p-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ya(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(xl.fromBufferAttribute(o,s),yl.fromBufferAttribute(o,r),t.distanceSqToSegment(xl,yl,Jc,yp)>n)return;Jc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Jc);if(!(l<e.near||l>e.far))return{distance:l,point:yp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var _p=new M,bp=new M,_l=class extends Zr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_p.fromBufferAttribute(t,s),bp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_p.distanceTo(bp);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},bl=class extends Zr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ys=class extends Ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mp=new we,nh=new Ws,$a=new In,Za=new M,zi=class extends Gt{constructor(e=new tt,t=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Mp.copy(s).invert(),nh.copy(e.ray).applyMatrix4(Mp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,v=f;p<v;p++){let g=c.getX(p);Za.fromBufferAttribute(h,g),Ep(Za,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,v=f;p<v;p++)Za.fromBufferAttribute(h,p),Ep(Za,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ep(i,e,t,n,s,r,o){let a=nh.distanceSqToPoint(i);if(a<t){let l=new M;nh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Vn=class extends dn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,s=[],r=[],o=[],a=new M,l=new we;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(rn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yo=class extends Jn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ih=class extends Yo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Ka=new M,Qc=new kh,eu=new kh,tu=new kh,hs=class extends Jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new M){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ka.subVectors(s[0],s[1]).add(s[0]),c=Ka);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ka.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ka),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Qc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,v,g),eu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,v,g),tu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),eu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),tu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Qc.calc(l),eu.calc(l),tu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new M().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Hb(i,e){let t=1-i;return t*t*e}function zb(i,e){return 2*(1-i)*i*e}function Bb(i,e){return i*i*e}function Fo(i,e,t,n){return Hb(i,e)+zb(i,t)+Bb(i,n)}function Ob(i,e){let t=1-i;return t*t*t*e}function kb(i,e){let t=1-i;return 3*t*t*i*e}function Vb(i,e){return 3*(1-i)*i*i*e}function Gb(i,e){return i*i*i*e}function No(i,e,t,n,s){return Ob(i,e)+kb(i,t)+Vb(i,n)+Gb(i,s)}var Ml=class extends Jn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(No(e,s.x,r.x,o.x,a.x),No(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sh=class extends Jn{constructor(e=new M,t=new M,n=new M,s=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new M){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(No(e,s.x,r.x,o.x,a.x),No(e,s.y,r.y,o.y,a.y),No(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},El=class extends Jn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rh=class extends Jn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends Jn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fo(e,s.x,r.x,o.x),Fo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends Jn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fo(e,s.x,r.x,o.x),Fo(e,s.y,r.y,o.y),Fo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(wp(a,l.x,c.x,u.x,h.x),wp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Al=Object.freeze({__proto__:null,ArcCurve:ih,CatmullRomCurve3:hs,CubicBezierCurve:Ml,CubicBezierCurve3:sh,EllipseCurve:Yo,LineCurve:El,LineCurve3:rh,QuadraticBezierCurve:wl,QuadraticBezierCurve3:Tl,SplineCurve:Sl}),oh=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Al[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Al[s.type]().fromJSON(s))}return this}},Kr=class extends oh{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new El(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new wl(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ml(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Sl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Yo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},jr=class i extends tt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=rn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new M,d=new le,f=new M,p=new M,v=new M,g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=t;_++){let x=n+_*u*s,y=Math.sin(x),R=Math.cos(x);for(let w=0;w<=e.length-1;w++){h.x=e[w].x*y,h.y=e[w].y,h.z=e[w].x*R,o.push(h.x,h.y,h.z),d.x=_/t,d.y=w/(e.length-1),a.push(d.x,d.y);let A=l[3*w+0]*y,C=l[3*w+1],T=l[3*w+0]*R;c.push(A,C,T)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let y=x+_*e.length,R=y,w=y+e.length,A=y+e.length+1,C=y+1;r.push(R,w,C),r.push(A,C,w)}this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("uv",new Xe(a,2)),this.setAttribute("normal",new Xe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ds=class i extends tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,u=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pn=class i extends tt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,v=[],g=n/2,m=0;_(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function _(){let y=new M,R=new M,w=0,A=(t-e)/n;for(let C=0;C<=r;C++){let T=[],b=C/r,S=b*(t-e)+e;for(let z=0;z<=s;z++){let F=z/s,L=F*l+a,N=Math.sin(L),U=Math.cos(L);R.x=S*N,R.y=-b*n+g,R.z=S*U,h.push(R.x,R.y,R.z),y.set(N,A,U).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-b),T.push(p++)}v.push(T)}for(let C=0;C<s;C++)for(let T=0;T<r;T++){let b=v[T][C],S=v[T+1][C],z=v[T+1][C+1],F=v[T][C+1];(e>0||T!==0)&&(u.push(b,S,F),w+=3),(t>0||T!==r-1)&&(u.push(S,z,F),w+=3)}c.addGroup(m,w,0),m+=w}function x(y){let R=p,w=new le,A=new M,C=0,T=y===!0?e:t,b=y===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),p++;let S=p;for(let z=0;z<=s;z++){let L=z/s*l+a,N=Math.cos(L),U=Math.sin(L);A.x=T*U,A.y=g*b,A.z=T*N,h.push(A.x,A.y,A.z),d.push(0,b,0),w.x=N*.5+.5,w.y=U*.5*b+.5,f.push(w.x,w.y),p++}for(let z=0;z<s;z++){let F=R+z,L=S+z;y===!0?u.push(L,L+1,F):u.push(L+1,L,F),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ah=class i extends tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new M,y=new M,R=new M;for(let w=0;w<t.length;w+=3)f(t[w+0],x),f(t[w+1],y),f(t[w+2],R),l(x,y,R,_)}function l(_,x,y,R){let w=R+1,A=[];for(let C=0;C<=w;C++){A[C]=[];let T=_.clone().lerp(y,C/w),b=x.clone().lerp(y,C/w),S=w-C;for(let z=0;z<=S;z++)z===0&&C===w?A[C][z]=T:A[C][z]=T.clone().lerp(b,z/S)}for(let C=0;C<w;C++)for(let T=0;T<2*(w-C)-1;T++){let b=Math.floor(T/2);T%2===0?(d(A[C][b+1]),d(A[C+1][b]),d(A[C][b])):(d(A[C][b+1]),d(A[C+1][b+1]),d(A[C+1][b]))}}function c(_){let x=new M;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(_),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function u(){let _=new M;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let y=g(_)/2/Math.PI+.5,R=m(_)/Math.PI+.5;o.push(y,1-R)}p(),h()}function h(){for(let _=0;_<o.length;_+=6){let x=o[_+0],y=o[_+2],R=o[_+4],w=Math.max(x,y,R),A=Math.min(x,y,R);w>.9&&A<.1&&(x<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,x){let y=_*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function p(){let _=new M,x=new M,y=new M,R=new M,w=new le,A=new le,C=new le;for(let T=0,b=0;T<r.length;T+=9,b+=6){_.set(r[T+0],r[T+1],r[T+2]),x.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),w.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),C.set(o[b+4],o[b+5]),R.copy(_).add(x).add(y).divideScalar(3);let S=g(R);v(w,b+0,_,S),v(A,b+2,x,S),v(C,b+4,y,S)}}function v(_,x,y,R){R<0&&_.x===1&&(o[x]=_.x-1),y.x===0&&y.z===0&&(o[x]=R/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var fs=class extends Kr{constructor(e){super(e),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Kr().fromJSON(s))}return this}},Wb={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=im(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=Zb(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let p=t;p<s;p+=t)h=i[p],d=i[p+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return $o(r,o,t,a,l,f,0),o}};function im(i,e,t,n,s){let r,o;if(s===o1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Tp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Tp(r,i[r],i[r+1],o);return o&&Vl(o,o.next)&&(Ko(o),o=o.next),o}function $s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Vl(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Ko(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $o(i,e,t,n,s,r,o){if(!i)return;!o&&r&&e1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?qb(i,n,s,r):Xb(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ko(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Yb($s(i),e,t),$o(i,e,t,n,s,r,2)):o===2&&$b(i,e,t,n,s,r):$o($s(i),e,t,n,s,r,1);break}}}function Xb(i){let e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Ur(s,a,r,l,o,c,p.x,p.y)&&Xt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function qb(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Xt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=u<h?u<d?u:d:h<d?h:d,v=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,m=lh(f,p,e,t,n),_=lh(v,g,e,t,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=m&&y&&y.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&Ur(a,u,l,h,c,d,x.x,x.y)&&Xt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Ur(a,u,l,h,c,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&Ur(a,u,l,h,c,d,x.x,x.y)&&Xt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Ur(a,u,l,h,c,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Yb(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Vl(s,r)&&sm(s,n,n.next,r)&&Zo(s,r)&&Zo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ko(n),Ko(n.next),n=i=r),n=n.next}while(n!==i);return $s(n)}function $b(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&i1(o,a)){let l=rm(o,a);o=$s(o,o.next),l=$s(l,l.next),$o(o,e,t,n,s,r,0),$o(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Zb(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=im(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(n1(c));for(s.sort(Kb),r=0;r<s.length;r++)t=jb(s[r],t);return t}function Kb(i,e){return i.x-e.x}function jb(i,e){let t=Jb(i,e);if(!t)return e;let n=rm(t,i);return $s(n,n.next),$s(t,t.next)}function Jb(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ur(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Zo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Qb(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Qb(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function e1(i,e,t,n){let s=i;do s.z===0&&(s.z=lh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,t1(s)}function t1(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function lh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function n1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ur(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function i1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!s1(i,e)&&(Zo(i,e)&&Zo(e,i)&&r1(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||Vl(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Vl(i,e){return i.x===e.x&&i.y===e.y}function sm(i,e,t,n){let s=Ja(Xt(i,e,t)),r=Ja(Xt(i,e,n)),o=Ja(Xt(t,n,i)),a=Ja(Xt(t,n,e));return!!(s!==r&&o!==a||s===0&&ja(i,t,e)||r===0&&ja(i,n,e)||o===0&&ja(t,i,n)||a===0&&ja(t,e,n))}function ja(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ja(i){return i>0?1:i<0?-1:0}function s1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&sm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zo(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function r1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rm(i,e){let t=new ch(i.i,i.x,i.y),n=new ch(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Tp(i,e,t,n){let s=new ch(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ko(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ch(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function o1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ho=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Sp(e),Ap(n,e);let o=e.length;t.forEach(Sp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ap(n,t[l]);let a=Wb.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Sp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ap(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Zs=class i extends tt{constructor(e=new fs([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Xe(s,3)),this.setAttribute("uv",new Xe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:a1,x,y=!1,R,w,A,C;m&&(x=m.getSpacedPoints(u),y=!0,d=!1,R=m.computeFrenetFrames(u,!1),w=new M,A=new M,C=new M),d||(g=0,f=0,p=0,v=0);let T=a.extractPoints(c),b=T.shape,S=T.holes;if(!Ho.isClockWise(b)){b=b.reverse();for(let ie=0,se=S.length;ie<se;ie++){let D=S[ie];Ho.isClockWise(D)&&(S[ie]=D.reverse())}}let F=Ho.triangulateShape(b,S),L=b;for(let ie=0,se=S.length;ie<se;ie++){let D=S[ie];b=b.concat(D)}function N(ie,se,D){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(se,D)}let U=b.length,k=F.length;function H(ie,se,D){let _e,Q,ue,me=ie.x-se.x,Le=ie.y-se.y,Te=D.x-ie.x,I=D.y-ie.y,E=me*me+Le*Le,B=me*I-Le*Te;if(Math.abs(B)>Number.EPSILON){let W=Math.sqrt(E),X=Math.sqrt(Te*Te+I*I),q=se.x-Le/W,ge=se.y+me/W,be=D.x-I/X,Me=D.y+Te/X,Ie=((be-q)*I-(Me-ge)*Te)/(me*I-Le*Te);_e=q+me*Ie-ie.x,Q=ge+Le*Ie-ie.y;let he=_e*_e+Q*Q;if(he<=2)return new le(_e,Q);ue=Math.sqrt(he/2)}else{let W=!1;me>Number.EPSILON?Te>Number.EPSILON&&(W=!0):me<-Number.EPSILON?Te<-Number.EPSILON&&(W=!0):Math.sign(Le)===Math.sign(I)&&(W=!0),W?(_e=-Le,Q=me,ue=Math.sqrt(E)):(_e=me,Q=Le,ue=Math.sqrt(E/2))}return new le(_e/ue,Q/ue)}let K=[];for(let ie=0,se=L.length,D=se-1,_e=ie+1;ie<se;ie++,D++,_e++)D===se&&(D=0),_e===se&&(_e=0),K[ie]=H(L[ie],L[D],L[_e]);let O=[],j,ve=K.concat();for(let ie=0,se=S.length;ie<se;ie++){let D=S[ie];j=[];for(let _e=0,Q=D.length,ue=Q-1,me=_e+1;_e<Q;_e++,ue++,me++)ue===Q&&(ue=0),me===Q&&(me=0),j[_e]=H(D[_e],D[ue],D[me]);O.push(j),ve=ve.concat(j)}for(let ie=0;ie<g;ie++){let se=ie/g,D=f*Math.cos(se*Math.PI/2),_e=p*Math.sin(se*Math.PI/2)+v;for(let Q=0,ue=L.length;Q<ue;Q++){let me=N(L[Q],K[Q],_e);re(me.x,me.y,-D)}for(let Q=0,ue=S.length;Q<ue;Q++){let me=S[Q];j=O[Q];for(let Le=0,Te=me.length;Le<Te;Le++){let I=N(me[Le],j[Le],_e);re(I.x,I.y,-D)}}}let de=p+v;for(let ie=0;ie<U;ie++){let se=d?N(b[ie],ve[ie],de):b[ie];y?(A.copy(R.normals[0]).multiplyScalar(se.x),w.copy(R.binormals[0]).multiplyScalar(se.y),C.copy(x[0]).add(A).add(w),re(C.x,C.y,C.z)):re(se.x,se.y,0)}for(let ie=1;ie<=u;ie++)for(let se=0;se<U;se++){let D=d?N(b[se],ve[se],de):b[se];y?(A.copy(R.normals[ie]).multiplyScalar(D.x),w.copy(R.binormals[ie]).multiplyScalar(D.y),C.copy(x[ie]).add(A).add(w),re(C.x,C.y,C.z)):re(D.x,D.y,h/u*ie)}for(let ie=g-1;ie>=0;ie--){let se=ie/g,D=f*Math.cos(se*Math.PI/2),_e=p*Math.sin(se*Math.PI/2)+v;for(let Q=0,ue=L.length;Q<ue;Q++){let me=N(L[Q],K[Q],_e);re(me.x,me.y,h+D)}for(let Q=0,ue=S.length;Q<ue;Q++){let me=S[Q];j=O[Q];for(let Le=0,Te=me.length;Le<Te;Le++){let I=N(me[Le],j[Le],_e);y?re(I.x,I.y+x[u-1].y,x[u-1].x+D):re(I.x,I.y,h+D)}}}V(),ee();function V(){let ie=s.length/3;if(d){let se=0,D=U*se;for(let _e=0;_e<k;_e++){let Q=F[_e];xe(Q[2]+D,Q[1]+D,Q[0]+D)}se=u+g*2,D=U*se;for(let _e=0;_e<k;_e++){let Q=F[_e];xe(Q[0]+D,Q[1]+D,Q[2]+D)}}else{for(let se=0;se<k;se++){let D=F[se];xe(D[2],D[1],D[0])}for(let se=0;se<k;se++){let D=F[se];xe(D[0]+U*u,D[1]+U*u,D[2]+U*u)}}n.addGroup(ie,s.length/3-ie,0)}function ee(){let ie=s.length/3,se=0;pe(L,se),se+=L.length;for(let D=0,_e=S.length;D<_e;D++){let Q=S[D];pe(Q,se),se+=Q.length}n.addGroup(ie,s.length/3-ie,1)}function pe(ie,se){let D=ie.length;for(;--D>=0;){let _e=D,Q=D-1;Q<0&&(Q=ie.length-1);for(let ue=0,me=u+g*2;ue<me;ue++){let Le=U*ue,Te=U*(ue+1),I=se+_e+Le,E=se+Q+Le,B=se+Q+Te,W=se+_e+Te;ce(I,E,B,W)}}}function re(ie,se,D){l.push(ie),l.push(se),l.push(D)}function xe(ie,se,D){Se(ie),Se(se),Se(D);let _e=s.length/3,Q=_.generateTopUV(n,s,_e-3,_e-2,_e-1);De(Q[0]),De(Q[1]),De(Q[2])}function ce(ie,se,D,_e){Se(ie),Se(se),Se(_e),Se(se),Se(D),Se(_e);let Q=s.length/3,ue=_.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);De(ue[0]),De(ue[1]),De(ue[3]),De(ue[1]),De(ue[2]),De(ue[3])}function Se(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function De(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return l1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Al[s.type]().fromJSON(s)),new i(n,e.options)}},a1={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-h),new le(d,1-p),new le(v,1-m)]:[new le(a,1-l),new le(u,1-h),new le(f,1-p),new le(g,1-m)]}};function l1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Bi=class i extends ah{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ks=class i extends tt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new M,p=new le;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let _=m+g,x=_,y=_+n+1,R=_+n+2,w=_+1;a.push(x,y,w),a.push(y,R,w)}}this.setIndex(a),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Qt=class i extends tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new M,d=new M,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){let _=[],x=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let w=R/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+x*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(w+y,1-x),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){let x=u[m][_+1],y=u[m][_],R=u[m+1][_],w=u[m+1][_+1];(m!==0||o>0)&&f.push(x,y,w),(m!==n-1||l<Math.PI)&&f.push(y,R,w)}this.setIndex(f),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Dt=class i extends tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new M,h=new M,d=new M;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let v=p/s*r,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let v=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,_=(s+1)*f+p;o.push(v,g,_),o.push(g,m,_)}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var js=class i extends tt{constructor(e=new Tl(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new M,l=new M,c=new le,u=new M,h=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function v(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),_(),m()}function g(x){u=e.getPointAt(x/t,u);let y=o.normals[x],R=o.binormals[x];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,C=Math.sin(A),T=-Math.cos(A);l.x=T*y.x+C*R.x,l.y=T*y.y+C*R.y,l.z=T*y.z+C*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=t;x++)for(let y=1;y<=s;y++){let R=(s+1)*(x-1)+(y-1),w=(s+1)*x+(y-1),A=(s+1)*x+y,C=(s+1)*(x-1)+y;p.push(R,w,C),p.push(w,A,C)}}function _(){for(let x=0;x<=t;x++)for(let y=0;y<=s;y++)c.x=x/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Al[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Rl=class extends We{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},st=class extends Ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends st{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Cl=class extends Ln{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Qa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function c1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function u1(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Rp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function om(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ps=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uh=class extends ps{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hf,endingEnd:hf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case df:r=e,a=2*t-n;break;case ff:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case df:o=e,l=2*n-t;break;case ff:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,_=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*v+.5*p,y=f*g-f*v;for(let R=0;R!==a;++R)r[R]=m*o[u+R]+_*o[c+R]+x*o[l+R]+y*o[h+R];return r}},hh=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},dh=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case Wr:t=this.InterpolantFactoryMethodLinear;break;case Mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&c1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let v=t[h+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Wr;var ms=class extends Qn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Gr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Qn{};Pl.prototype.ValueTypeName="color";var Oi=class extends Qn{};Oi.prototype.ValueTypeName="number";var fh=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)bt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ki=class extends Qn{InterpolantFactoryMethodLinear(e){return new fh(this.times,this.values,this.getValueSize(),e)}};ki.prototype.ValueTypeName="quaternion";ki.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Qn{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Gr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Qn{};Vi.prototype.ValueTypeName="vector";var Il=class{constructor(e="",t=-1,n=[],s=hg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(d1(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Qn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=u1(l);l=Rp(l,1,u),c=Rp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Oi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,p,v){if(f.length!==0){let g=[],m=[];om(f,g,m,p),g.length!==0&&v.push(new h(d,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(let v in f){let g=[],m=[];for(let _=0;_!==d[p].morphTargets.length;++_){let x=d[p];g.push(x.time),m.push(x.morphTarget===v?1:0)}s.push(new Oi(".morphTargetInfluence["+v+"]",g,m))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(Vi,f+".position",d,"pos",s),n(ki,f+".quaternion",d,"rot",s),n(Vi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function h1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oi;case"vector":case"vector2":case"vector3":case"vector4":return Vi;case"color":return Pl;case"quaternion":return ki;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function d1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=h1(i.type);if(i.times===void 0){let t=[],n=[];om(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ls={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ph=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}},f1=new ph,Gi=class{constructor(e){this.manager=e!==void 0?e:f1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ii={},mh=class extends Error{constructor(e,t){super(e),this.response=t}},jo=class extends Gi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ls.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:s});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ii[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,v=0,g=new ReadableStream({start(m){_();function _(){h.read().then(({done:x,value:y})=>{if(x)m.close();else{v+=y.byteLength;let R=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let w=0,A=u.length;w<A;w++){let C=u[w];C.onProgress&&C.onProgress(R)}m.enqueue(y),_()}},x=>{m.error(x)})}}});return new Response(g)}else throw new mh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ls.add(e,c);let u=Ii[e];delete Ii[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ii[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var gh=class extends Gi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ls.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=ko("img");function l(){u(),ls.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var vs=class extends Gi{constructor(e){super(e)}load(e,t,n,s){let r=new dn,o=new gh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Jr=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ll=class extends Jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nu=new we,Cp=new M,Pp=new M,Jo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Cp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cp),Pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pp),t.updateMatrixWorld(),nu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vh=class extends Jo{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Xr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ul=class extends Jr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ip=new we,Ro=new M,iu=new M,xh=class extends Jo{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ro.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ro),iu.copy(n.position),iu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(iu),n.updateMatrixWorld(),s.makeTranslation(-Ro.x,-Ro.y,-Ro.z),Ip.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ip)}},Dl=class extends Jr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},yh=class extends Jo{constructor(){super(new yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},mn=class extends tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Fl=class extends Gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ls.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ls.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ls.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ls.add(e,l),r.manager.itemStart(e)}};var Nl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Lp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Lp(){return performance.now()}var Vh="\\[\\]\\.:\\/",p1=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",m1="[^"+Vh.replace("\\.","")+"]",g1=/((?:WC+[\/:])*)/.source.replace("WC",Gh),v1=/(WCOD+)?/.source.replace("WCOD",m1),x1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),y1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),_1=new RegExp("^"+g1+v1+x1+y1+"$"),b1=["material","materials","bones","map"],_h=class{constructor(e,t,n){let s=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p1,"")}static parseTrackName(e){let t=_1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);b1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=_h;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dw=new Float32Array(1);var Up=new we,Hl=class{constructor(e,t,n=0,s=1/0){this.ray=new Ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Up.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Up),this}intersectObject(e,t=!0,n=[]){return bh(e,this,n,t),n.sort(Dp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)bh(e[s],this,n,t);return n.sort(Dp),n}};function Dp(i,e){return i.distance-e.distance}function bh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)bh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);function Wh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new tt,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=am(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][d]);let p=am(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function am(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new nt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let v=u.getComponent(d,p);a.setComponent(d+h,p,v)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Xh(i,e){if(e===qp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ea||e===Bl){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ea)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var bs=class extends Gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new dd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=xs.extractUrlBase(e);o=xs.resolveURL(c,this.path)}else o=xs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new jo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dm){try{o[_t.KHR_BINARY_GLTF]=new fd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new _d(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case _t.KHR_MATERIALS_UNLIT:o[h]=new Kh;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[h]=new pd(r,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[h]=new md;break;case _t.KHR_MESH_QUANTIZATION:o[h]=new gd;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function M1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zh=class{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Tn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Js(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Dl(u),c.distance=h;break;case"spot":c=new Ul(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Kh=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){let s=[];e.color=new oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(s)}},jh=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Jh=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(a,a)}return Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},ed=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},td=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,wt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},nd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},id=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new oe().setRGB(a[0],a[1],a[2],Tn),Promise.all(r)}},sd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},rd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new oe().setRGB(a[0],a[1],a[2],Tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,wt)),Promise.all(r)}},od=class{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},ad=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},ld=class{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},cd=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ud=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},hd=class{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},dd=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ei.TRIANGLES&&c.mode!==ei.TRIANGLE_STRIP&&c.mode!==ei.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let v=new we,g=new M,m=new bt,_=new M(1,1,1),x=new Ut(p.geometry,p.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,v.compose(g,m,_));for(let y in l)if(y==="_COLOR_0"){let R=l[y];x.instanceColor=new xt(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,l[y]);Gt.prototype.copy.call(x,p),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},dm="glTF",ta=12,lm={JSON:1313821514,BIN:5130562},fd=class{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ta,r=new DataView(e,ta),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===lm.JSON){let c=new Uint8Array(e,ta+o,a);this.content=n.decode(c)}else if(l===lm.BIN){let c=ta+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},pd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=xd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=xd[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=eo[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let v=f.attributes[p],g=l[p];g!==void 0&&(v.normalized=g)}h(f)},a,c,Tn,d)})})}},md=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},gd=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},Gl=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,v=p-c,g=-2*f+3*d,m=f-d,_=1-g,x=m-d+h;for(let y=0;y!==a;y++){let R=o[v+y+a],w=o[v+y+l]*u,A=o[p+y+a],C=o[p+y]*u;r[y]=_*R+x*w+g*A+m*C}return r}},E1=new bt,vd=class extends Gl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return E1.fromArray(r).normalize().toArray(r),r}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cm={9728:wn,9729:Nn,9984:Ph,9985:Io,9986:Ir,9987:gi},um={33071:Di,33648:Bo,10497:Vs},qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w1={CUBICSPLINE:void 0,LINEAR:Wr,STEP:Gr},Yh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function T1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new st({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),i.DefaultMaterial}function Qs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function S1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function A1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R1(i){let e,t=i.extensions&&i.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$h(t.attributes):e=i.indices+":"+$h(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+$h(i.targets[n]);return e}function $h(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function yd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var P1=new we,_d=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new M1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new vs(this.options.manager):this.textureLoader=new Fl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Qs(r,a,s),Wi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(xs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=qh[s.type],a=eo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new nt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=qh[s.type],c=eo[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,v,g;if(f&&f!==h){let m=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,x=t.cache.get(_);x||(v=new c(a,m*f,s.count*f/u),x=new $r(v,f/u),t.cache.add(_,x)),g=new qs(x,l,d%f/u,p)}else a===null?v=new c(s.count*l):v=new c(a,d,s.count*l),g=new nt(v,l,p);if(s.sparse!==void 0){let m=qh.SCALAR,_=eo[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,R=new _(o[1],x,s.sparse.count*m),w=new c(o[2],y,s.sparse.count*l);a!==null&&(g=new nt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,C=R.length;A<C;A++){let T=R[A];if(g.setX(T,w[A*l]),l>=2&&g.setY(T,w[A*l+1]),l>=3&&g.setZ(T,w[A*l+2]),l>=4&&g.setW(T,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=cm[d.magFilter]||Nn,u.minFilter=cm[d.minFilter]||gi,u.wrapS=um[d.wrapS]||Vs,u.wrapT=um[d.wrapT]||Vs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==wn&&u.minFilter!==Nn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(v){let g=new dn(v);g.needsUpdate=!0,d(g)}),t.load(xs.resolveURL(h,r.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Wi(h,o),h.userData.mimeType=o.mimeType||C1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[_t.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ys,Ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new qo,Ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return st}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[_t.KHR_MATERIALS_UNLIT]){let h=s[_t.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Tn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,wt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Qe);let u=r.alphaMode||Yh.OPAQUE;if(u===Yh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Yh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Lt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new le(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Lt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Lt){let h=r.emissiveFactor;a.emissive=new oe().setRGB(h[0],h[1],h[2],Tn)}return r.emissiveTexture!==void 0&&o!==Lt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,wt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Wi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Qs(s,h,r),h})}createUniqueName(e){let t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return hm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=R1(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=hm(new tt,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?T1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let v=u[f],g=o[f],m,_=c[f];if(g.mode===ei.TRIANGLES||g.mode===ei.TRIANGLE_STRIP||g.mode===ei.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new ml(v,_):new Re(v,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===ei.TRIANGLE_STRIP?m.geometry=Xh(m.geometry,Bl):g.mode===ei.TRIANGLE_FAN&&(m.geometry=Xh(m.geometry,ea));else if(g.mode===ei.LINES)m=new _l(v,_);else if(g.mode===ei.LINE_STRIP)m=new Zr(v,_);else if(g.mode===ei.LINE_LOOP)m=new bl(v,_);else if(g.mode===ei.POINTS)m=new zi(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&A1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Wi(m,r),g.extensions&&Qs(s,m,g),t.assignFinalMaterial(m),h.push(m)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Qs(s,h[0],r),h[0];let d=new Ge;r.extensions&&Qs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Be.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new yi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new we;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vl(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],v=f.target,g=v.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(p),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],v=h[3],g=h[4],m=[];for(let _=0,x=d.length;_<x;_++){let y=d[_],R=f[_],w=p[_],A=v[_],C=g[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let T=n._createAnimationTracks(y,R,w,A,C);if(T)for(let b=0;b<T.length;b++)m.push(T[b])}return new Il(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,P1)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Xo:c.length>1?u=new Ge:c.length===1?u=c[0]:u=new Gt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Wi(u,r),r.extensions&&Qs(n,u,r),r.matrix!==void 0){let h=new we;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ge;n.name&&(r.name=s.createUniqueName(n.name)),Wi(r,n),n.extensions&&Qs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Ln||d instanceof dn)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];_s[r.path]===_s.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(_s[r.path]){case _s.weights:c=Oi;break;case _s.rotation:c=ki;break;case _s.position:case _s.scale:c=Vi;break;default:switch(n.itemSize){case 1:c=Oi;break;case 2:case 3:default:c=Vi;break}break}let u=s.interpolation!==void 0?w1[s.interpolation]:Wr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let p=new c(l[d]+"."+_s[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=yd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ki?vd:Gl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function I1(i,e,t){let n=e.attributes,s=new Zt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new M(l[0],l[1],l[2]),new M(c[0],c[1],c[2])),a.normalized){let u=yd(eo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new M,l=new M;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let v=yd(eo[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new In;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function hm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=xd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return vt.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),Wi(i,e),I1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?S1(i,e.targets,t):i})}var Wl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},L1=new yi(-1,1,1,-1,0,1),bd=class extends tt{constructor(){super(),this.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xe([0,2,0,0,2,0],2))}},U1=new bd,Ms=class{constructor(e){this._mesh=new Re(U1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,L1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var to=class extends Xn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof We?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ys.clone(e.uniforms),this.material=new We({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ms(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var na=class extends Xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xl=class extends Xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ql=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new to(Wl),this.copyPass.material.blending=vi,this.clock=new Nl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}na!==void 0&&(o instanceof na?n=!0:o instanceof Xl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yl=class extends Xn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var fm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var no=class i extends Xn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Pn(r,o,{type:ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Pn(r,o,{type:ui});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Pn(r,o,{type:ui});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=fm;this.highPassUniforms=ys.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Wl;this.copyUniforms=ys.clone(u.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:on,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new oe,this.oldClearAlpha=1,this.basic=new Lt,this.fsQuad=new Ms(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new We({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new We({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};no.BlurDirectionX=new le(1,0);no.BlurDirectionY=new le(0,1);var pm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var $l=class extends Xn{constructor(){super();let e=pm;this.uniforms=ys.clone(e.uniforms),this.material=new Rl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ms(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Th?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qo&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ia=new M;function ti(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ia.copy(e),ia[n]=0,ia.normalize();let c=.5*o/(o+a),u=1-ia.angleTo(i)/l;return Math.sign(ia[t])===1?u*c:a/(o+a)+c+c*(1-u)}var _i=class extends Xs{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new M,l=new M,c=new M(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,p=new M,v=.5/s;for(let g=0,m=0;g<u.length;g+=3,m+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*r,u[g+1]=c.y*Math.sign(a.y)+l.y*r,u[g+2]=c.z*Math.sign(a.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=ti(p,l,"z","y",r,n),d[m+1]=1-ti(p,l,"y","z",r,t);break;case 1:p.set(-1,0,0),d[m+0]=1-ti(p,l,"z","y",r,n),d[m+1]=1-ti(p,l,"y","z",r,t);break;case 2:p.set(0,1,0),d[m+0]=1-ti(p,l,"x","z",r,e),d[m+1]=ti(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),d[m+0]=1-ti(p,l,"x","z",r,e),d[m+1]=1-ti(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),d[m+0]=1-ti(p,l,"x","y",r,e),d[m+1]=1-ti(p,l,"y","x",r,t);break;case 5:p.set(0,0,-1),d[m+0]=ti(p,l,"x","y",r,e),d[m+1]=1-ti(p,l,"y","x",r,t);break}}};var ro={};V0(ro,{AXIS_H:()=>bi,BODY_R:()=>Zl,CRUISE:()=>ws,FLOAT_H:()=>io,GRAVITY:()=>Td,HEIGHT_GLSL:()=>jl,HILLS:()=>qt,JUMP_V:()=>wd,LANE:()=>Md,LAYOUT_LANE:()=>Ed,SLIDE:()=>Yt,SWELL:()=>sa,WATER:()=>Es,baseHeight:()=>Hn,clamp01:()=>er,hills:()=>mm,laneX:()=>zn,slopeAt:()=>Kl,smoothstep:()=>so,surface:()=>Xi,waves:()=>gm});var Es=0,bi=1.5,Md=.7,Ed=.85,io=.34,Zl=.4,ws=7,wd=6.2,Td=17,Yt={half:1.1,moat:-.6,crown:.1},qt=[[-16.7,0],[-11.8,-.5],[-5.6,.36],[-1,0]],sa={amp:.1,wavelength:7.4},er=i=>Math.min(1,Math.max(0,i)),so=(i,e,t)=>{let n=er((t-i)/(e-i));return n*n*(3-2*n)},zn=i=>(1-i)*.7;function mm(i){if(i<=qt[0][0]||i>=qt[qt.length-1][0])return 0;for(let e=0;e<qt.length-1;e++){let[t,n]=qt[e],[s,r]=qt[e+1];if(i<s)return n+(r-n)*so(t,s,i)}return 0}function Hn(i,e,t){let n=er((i.tunnelStart-t)*.5),s=Math.abs(e),r=Yt.crown*er(1-s*s/(Yt.half*Yt.half)),o=so(Yt.half,Yt.half+.55,s),a=n*((r+mm(t))*(1-o)+Yt.moat*o),l=er((t-i.tunnelStart)*.5)*er((i.tunnelEnd-t)*.5),c=l*sa.amp*Math.sin((t-i.tunnelStart)*2*Math.PI/sa.wavelength),u=Math.sqrt(Math.max(.01,i.tunnelRadius*i.tunnelRadius-1.5*1.5)),h=er((s-(u-.45))/.45);return 0+a+c+l*.45*h*h}function gm(i,e,t){return .06*Math.sin(e*.9-t*3.1+i*.35)+.035*Math.sin(e*2.3-t*5.3-i*1.1+1.7)+.02*Math.sin(e*4.7-t*7.9+i*2.3+.4)+.012*Math.sin(i*6+t*4+e*.5)}var Xi=(i,e,t,n)=>Hn(i,e,t)+gm(e,t,n),Kl=(i,e,t)=>(Hn(i,e,t+.25)-Hn(i,e,t-.25))/.5,jl=`
uniform vec4 uTunnel;   // start z, end z, radius, axis height
uniform float uTime;
float bwSmooth(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
float bwHills(float z) {
  if (z <= ${qt[0][0].toFixed(3)} || z >= ${qt[3][0].toFixed(3)}) return 0.0;
  if (z < ${qt[1][0].toFixed(3)}) return mix(${qt[0][1].toFixed(3)}, ${qt[1][1].toFixed(3)}, bwSmooth(${qt[0][0].toFixed(3)}, ${qt[1][0].toFixed(3)}, z));
  if (z < ${qt[2][0].toFixed(3)}) return mix(${qt[1][1].toFixed(3)}, ${qt[2][1].toFixed(3)}, bwSmooth(${qt[1][0].toFixed(3)}, ${qt[2][0].toFixed(3)}, z));
  return mix(${qt[2][1].toFixed(3)}, ${qt[3][1].toFixed(3)}, bwSmooth(${qt[2][0].toFixed(3)}, ${qt[3][0].toFixed(3)}, z));
}
float bwBase(vec2 xz) {
  float before = clamp((uTunnel.x - xz.y) * 0.5, 0.0, 1.0);
  float ax = abs(xz.x);
  float crown = ${Yt.crown.toFixed(3)} * clamp(1.0 - ax * ax / ${(Yt.half*Yt.half).toFixed(3)}, 0.0, 1.0);
  float edge = bwSmooth(${Yt.half.toFixed(3)}, ${(Yt.half+.55).toFixed(3)}, ax);
  float slide = before * mix(crown + bwHills(xz.y), ${Yt.moat.toFixed(3)}, edge);
  float inside = clamp((xz.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xz.y) * 0.5, 0.0, 1.0);
  float swell = inside * ${sa.amp.toFixed(3)} * sin((xz.y - uTunnel.x) * ${(2*Math.PI/sa.wavelength).toFixed(5)});
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
`;var nn=`
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
`,vm=`
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
`,xm=`
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
`,ym=i=>`
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
`,_m=`
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
`;var tr=8,bm=`
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
`,Mm=`
${jl}
${bm}
uniform vec4 uRipples[${tr}];   // x, u, start time, strength (track coordinates)
// Each vertex knows its track position (sideways x, along u) and the path frame there, so the sheet
// follows the 3D path: it climbs, drops and banks with the bent drum (track.js).
attribute vec2 aTrack;
attribute vec3 aP, aR, aU, aT;
varying vec2 vTrack;
varying vec3 vWorld, vR, vU, vT;
float rippleHeight(vec2 xz) {
  float h = 0.0;
  for (int i = 0; i < ${tr}; i++) {
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
`,Em=`
${jl}
${nn}
${bm}
uniform vec4 uRipples[${tr}];
uniform float uFlow;        // current speed (m/s)
uniform float uSlideHalf;   // half width of the raised slide
uniform vec3 uDeep, uShallow, uTurq, uGlow, uSky, uPink, uGold, uRingA, uRingB, uFog, uSunDir;
uniform vec3 uRings;        // first ring u, spacing, count
uniform float uOpen;        // the Screen 3 opening look on the slide (opening.js); 0 = the original water
varying vec2 vTrack;
varying vec3 vWorld, vR, vU, vT;

float ripples(vec2 xz) {
  float f = 0.0;
  for (int i = 0; i < ${tr}; i++) {
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
`,wm=`
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
`,Tm=`
${nn}
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
`;var Kw=`
${nn}
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
`,Sm=`
varying vec3 vDir;
void main() { vDir = normalize((modelMatrix * vec4(position, 1.0)).xyz - cameraPosition); gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }
`,Am=`
uniform vec3 uTop, uMid, uHorizon, uBottom;
varying vec3 vDir;
void main() {
  float y = vDir.y;
  vec3 c = y > 0.0 ? mix(uHorizon, mix(uMid, uTop, smoothstep(0.25, 0.9, y)), smoothstep(0.0, 0.25, y)) : mix(uHorizon, uBottom, smoothstep(0.0, -0.3, y));
  gl_FragColor = vec4(c, 1.0);
}
`,Rm=`
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
`,Cm=`
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
`,Pm=`
attribute float size; attribute float alpha; attribute float kind;
uniform float uScale;
varying float vAlpha; varying float vKind;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  vAlpha = alpha; vKind = kind;
  gl_Position = projectionMatrix * mv;
}
`,Im=`
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
`,Lm={uniforms:{tDiffuse:{value:null},uSat:{value:1.32},uContrast:{value:1.12},uVignette:{value:.18},uOpen:{value:0},uOpenExposure:{value:.9},uOpenVibrance:{value:.35},uOpenDepth:{value:.16}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},Um=`
varying vec2 vUv; varying vec3 vN; varying vec3 vWorld;
void main() {
  vUv = uv;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,Dm=`
${nn}
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
`;var Jl=(i,e,t,n,s)=>so(e,t,i)*(1-so(n,s,i));function Nm(i,e={}){let t=i.tunnelStart+(e.straight||0),n=e.curve??1,s=L=>n*(.27*Jl(L,t+5,t+8,t+11,t+13.5)-.34*Jl(L,t+14.5,t+17.5,t+21,t+24)),r=L=>n*(.055*Jl(L,t+6,t+9,t+12,t+15)-.06*Jl(L,t+18,t+21,t+26,t+29)),o=L=>Math.atan(7*7*r(L)/9.81),a=i.startZ-34,l=i.tunnelEnd+14,c=.05,u=Math.ceil((l-a)/c)+1,h=new Float64Array(u*3),d=new Float64Array(u*3),f=new Float64Array(u*3),p=new Float64Array(u*3),v=new Float64Array(u*3),g=0,m=0,_=a,x=0,y=(L,N)=>{let U=s(L);return[Math.cos(U)*Math.sin(N),Math.sin(U),Math.cos(U)*Math.cos(N)]};for(let L=0;L<u;L++){let N=a+L*c,U=L*3,k=s(N),H=o(N),K=y(N,x),O=[Math.cos(x),0,-Math.sin(x)],j=[K[1]*O[2]-K[2]*O[1],K[2]*O[0]-K[0]*O[2],K[0]*O[1]-K[1]*O[0]],ve=Math.cos(H),de=Math.sin(H);h[U]=g,h[U+1]=m,h[U+2]=_,p[U]=K[0],p[U+1]=K[1],p[U+2]=K[2];for(let pe=0;pe<3;pe++)d[U+pe]=O[pe]*ve-j[pe]*de,f[U+pe]=j[pe]*ve+O[pe]*de;v[U]=k,v[U+1]=x,v[U+2]=H;let V=x+r(N+c*.5)*c*.5,ee=y(N+c*.5,V);g+=ee[0]*c,m+=ee[1]*c,_+=ee[2]*c,x+=r(N+c*.5)*c}let R=L=>{let N=Math.min(u-1.0001,Math.max(0,(L-a)/c)),U=Math.floor(N);return[U,N-U]},w=(L,N,U,k)=>{let H=N*3;return k.x=L[H]+(L[H+3]-L[H])*U,k.y=L[H+1]+(L[H+4]-L[H+1])*U,k.z=L[H+2]+(L[H+5]-L[H+2])*U,k};function A(L,N={P:new M,R:new M,U:new M,T:new M}){let[U,k]=R(L);w(h,U,k,N.P),w(d,U,k,N.R).normalize(),w(f,U,k,N.U).normalize(),w(p,U,k,N.T).normalize();let H=L-a<0?L-a:L-(a+(u-1)*c);return(L<a||L>a+(u-1)*c)&&N.P.addScaledVector(N.T,H),N}let C={P:new M,R:new M,U:new M,T:new M};function T(L,N,U,k=new M){return A(U,C),k.copy(C.P).addScaledVector(C.R,L).addScaledVector(C.U,N)}function b(L,N,U,k,H=new M){return A(k,C),H.set(0,0,0).addScaledVector(C.R,L).addScaledVector(C.U,N).addScaledVector(C.T,U)}function S(L,N=new bt){return A(L,C),N.setFromRotationMatrix(new we().makeBasis(C.R,C.U,C.T))}function z(L,N=new we){let U=L.elements[14];A(U,C);let k=new we().makeBasis(C.R,C.U,C.T).setPosition(C.P);return N.multiplyMatrices(k,new we().makeTranslation(0,0,-U)).multiply(L)}function F(L){let[N,U]=R(L),k=N*3,H=180/Math.PI;return{pitch:(v[k]+(v[k+3]-v[k])*U)*H,heading:(v[k+1]+(v[k+4]-v[k+1])*U)*H,bank:(v[k+2]+(v[k+5]-v[k+2])*U)*H}}return{u0:a,u1:l,frame:A,map:T,dir:b,quaternion:S,mapMatrix:z,angles:F,pitch:s,turn:r,bankOf:o}}function Bm({scene:i,mats:e,track:t}){let n=new Ge;n.name="scenery",i.add(n);let s=[],r=e.env,o=e.gold,a=new st({color:15903035,metalness:1,roughness:.3,envMap:r,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.6}),l=new st({color:2381823,metalness:.35,roughness:.26,envMap:r,envMapIntensity:1.2}),c=new st({color:1521336,metalness:.3,roughness:.3,envMap:r,envMapIntensity:1}),u=new st({color:1343628,metalness:.3,roughness:.25,envMap:r,envMapIntensity:1}),h=new st({color:16178356,metalness:.25,roughness:.35,envMap:r,envMapIntensity:.9}),d=zm(16740296),f=zm(16773370),p=new Lt({color:new oe(2.4,2.05,1.35)}),v=(T,b=n)=>(b.add(T),T),g=(T,b,S,z)=>{let F=new Re(T,b);return S&&F.position.set(...S),v(F,z)},m=(T,b,S=n)=>{let z=new Ge;return z.position.set(...T),z.quaternion.setFromUnitVectors(new M(0,0,1),new M(...b).normalize()),v(z,S)},_=(T,b,S,z,F,L=0,N=0)=>{let U=new Ut(new Qt(z,10,8),F,S),k=new we;for(let H=0;H<S;H++){let K=N+H/S*Math.PI*2;U.setMatrixAt(H,k.makeTranslation(Math.cos(K)*b,Math.sin(K)*b,L))}return v(U,T)},x=(T,b,S,z,F,L=0)=>{let N=F1(),U=new Ut(N,F,S),k=new we,H=new bt,K=new M;for(let O=0;O<S;O++){let j=O/S*Math.PI*2,ve=z*(.8+.4*ra(O*7.1));H.setFromEuler(new yn(ra(O)*6,ra(O+3)*6,ra(O+9)*6)),K.set(ve,ve,ve),U.setMatrixAt(O,k.compose(new M(Math.cos(j)*b,Math.sin(j)*b,L+(ra(O+5)-.5)*z),H,K))}return v(U,T)},y=new Map;function R(T,b,S){let z=`${T}|${b}|${S}`;if(y.has(z))return y.get(z);let F=new fs,L=T*.8,N=Math.PI*2/b;for(let H=0;H<b;H++){let K=H*N;[[L,K],[T*.97,K+N*.1],[T,K+N*.22],[T,K+N*.34],[T*.97,K+N*.46],[L,K+N*.56]].forEach(([j,ve],de)=>{let V=Math.cos(ve)*j,ee=Math.sin(ve)*j;H===0&&de===0?F.moveTo(V,ee):F.lineTo(V,ee)})}F.closePath();let U=new Kr;U.absarc(0,0,T*.42,0,Math.PI*2,!0),F.holes.push(U);let k=new Zs(F,{depth:S,bevelEnabled:!0,bevelThickness:S*.35,bevelSize:T*.05,bevelSegments:3,curveSegments:6});return k.translate(0,0,-S/2),y.set(z,k),k}{let b=m([-2.25,-.3,-10],[.94,.05,-.34]),S=v(new Ge,b);g(new Dt(1.3,.24,20,72),o,null,S),g(new Dt(1.3-.32,.1,12,64),a,null,S);let z=new Ut(new _i(.26,.2,.5,2,.05),a,28),F=new we,L=new bt;for(let U=0;U<28;U++){let k=U/28*Math.PI*2;L.setFromAxisAngle(new M(0,0,1),k),z.setMatrixAt(U,F.compose(new M(Math.cos(k)*(1.3+.2),Math.sin(k)*(1.3+.2),0),L,new M(1,1,1)))}v(z,S),g(new pn(1.3-.36,1.3-.36,.16,48),l,null,S).rotation.x=Math.PI/2;for(let U=0;U<6;U++){let k=g(new _i(.16,2.275,.12,2,.05),o,[0,0,.12],S);k.rotation.z=U/6*Math.PI}g(new pn(.32,.36,.4,32),o,null,S).rotation.x=Math.PI/2,g(new Qt(.2,20,14),l,[0,0,.24],S),_(S,1.3-.08,18,.05,p,.24),_(S,1.3-.08,18,.05,p,-.24,.17),x(S,1.3+.42,22,.17,d,-.15),s.push({obj:S,axis:new M(0,0,1),speed:-.55});let N=g(new pn(.22,.22,1.2,24),a,null,b);N.rotation.x=Math.PI/2,N.position.z=-.6,g(new Dt(.3,.06,10,28),c,[0,0,-.35],b)}{let T=v(new Ge);T.position.set(2.05,-.55,-12),T.rotation.y=.3,g(new _i(1.3,1.1,1.4,4,.2),h,null,T);for(let S of[-.25,.27])g(new _i(1.36,.12,1.46,2,.05),a,[0,S,0],T);g(new Dt(.3,.07,10,32),o,[0,.02,-.72],T),g(new ds(.26,32),l,[0,.02,-.71],T).rotation.y=Math.PI,_(T,.3,10,.035,p,-.77);let b=v(new Ge,T);b.position.y=.6,b.rotation.x=Math.PI/2,x(b,.45,9,.2,d),x(b,.15,4,.18,f)}for(let T of[1,-1]){let b=[[T*2.9,-.7,-12.5],[T*2.5,.25,-10.8],[T*2.75,.55,-7.5],[T*2.45,1.15,-4.6],[T*2.9,1.5,-2.2]],S=new hs(b.map(z=>new M(...z)));g(new js(S,60,.1,14),o);for(let z=.08;z<1;z+=.16){let F=S.getPoint(z),L=S.getTangent(z);g(new Dt(.12,.045,8,20),c,[F.x,F.y,F.z]).quaternion.setFromUnitVectors(new M(0,0,1),L)}}let w=new Ge;w.name="tunnelDecor",i.add(w);let A=[],C=null;if(t){let{TR:T,L:b,W:S}=t,z=[[0,1.25,2.1],[.2,1.6,2.3]],F=b.tunnelRadius*.955,L=2.3,N=new Dt(F,.06,8,112),U=new Dt(F,.17,8,112),k=new Qt(.055,8,6),H=0;for(let Q=b.tunnelStart+1.4;Q<b.tunnelEnd-.8;Q+=L,H++){let ue=new oe(...z[H%2]),me=new Lt({color:ue.clone()}),Le=new Re(N,me);Le.matrixAutoUpdate=!1,T.mapMatrix(new we().makeTranslation(0,S.WATER+S.AXIS_H,Q),Le.matrix),w.add(Le);let Te=new Lt({color:new oe(0,.22,.42),transparent:!0,blending:on,depthWrite:!1}),I=new Re(U,Te);I.matrixAutoUpdate=!1,I.matrix.copy(Le.matrix),I.renderOrder=3,w.add(I);let E=new Ut(k,new Lt({color:new oe(2.4,2.8,2.9)}),28),B=new we,W=new we;for(let X=0;X<28;X++){let q=X/28*Math.PI*2;W.makeTranslation(Math.cos(q)*F,S.WATER+S.AXIS_H+Math.sin(q)*F,Q+.08),T.mapMatrix(W,B),E.setMatrixAt(X,B)}E.frustumCulled=!1,w.add(E),A.push({mat:me,base:ue,haloMat:Te,haloBase:Te.color.clone(),u:Q})}let K=[-10,15,65,90,115,165,190].map(Q=>Be.degToRad(Q)),O=[];for(let Q=b.tunnelStart+1.4+L/2;Q<b.tunnelEnd-1.5;Q+=L)O.push(Q);let j=O.length*K.length,ve=b.tunnelRadius*.92,de=new Lt({map:D1(),color:16777215,alphaTest:.5,side:Qe}),V=new Ut(new fn(.62,.34),de,j),ee=new Ut(new _i(.72,.44,.06,2,.04),o,j),pe=new we,re=new we,xe=new we,ce=new we,Se=new M,De=new M(0,0,1),ie=new M,se=[],D=0;for(let Q of O)for(let ue of K)Se.set(Math.sin(ue),-Math.cos(ue),0),ie.set(-Math.cos(ue),-Math.sin(ue),0),pe.makeBasis(Se,De,ie).setPosition(Math.cos(ue)*ve,S.WATER+S.AXIS_H+Math.sin(ue)*ve,Q),T.mapMatrix(pe,xe),V.setMatrixAt(D,xe),re.multiplyMatrices(pe,ce.makeTranslation(0,0,-.04)),T.mapMatrix(re,xe),ee.setMatrixAt(D,xe),V.setColorAt(D,new oe(1,1,1)),se.push(Q),D++;V.frustumCulled=ee.frustumCulled=!1,w.add(ee,V),C={mesh:V,u:se,c:new oe};let _e=0;for(let Q=b.tunnelStart+3;Q<b.tunnelEnd-2;Q+=4.6,_e++)for(let ue of[1,-1]){let me=ue*(.62+.12*(_e%2)),Le=ue*Math.cos(me*ue)*(b.tunnelRadius-.12),Te=S.WATER+S.AXIS_H+Math.sin(Math.abs(me))*(b.tunnelRadius-.12),I=new Ge;I.matrixAutoUpdate=!1;let E=new M(-Le,S.WATER+S.AXIS_H-Te,0).normalize(),B=new we().compose(new M(Le,Te,Q),new bt().setFromUnitVectors(new M(0,0,1),E),new M(1,1,1));T.mapMatrix(B,I.matrix),w.add(I);let W=.34+.08*((_e+(ue>0?1:0))%2),X=new Ge;I.add(X);let q=g(R(W,Math.round(W*26),W*.3),o,null,X),ge=g(new pn(W*.4,W*.4,W*.3,24),(_e+ue)%2?u:l,null,q);ge.rotation.x=Math.PI/2,g(new Qt(W*.15,14,10),o,[0,0,W*.18],q),_(q,W*.62,6,W*.06,p,W*.18),s.push({obj:q,axis:new M(0,0,1),speed:ue*(.8+.2*(_e%3))})}}return{root:n,tunnel:w,update(T,b){for(let S of A){let z=Hm(S.u,b);S.mat.color.copy(S.base).multiplyScalar(.75+.4*z),S.haloMat.color.copy(S.haloBase).multiplyScalar(.6+.8*z)}if(C){for(let S=0;S<C.u.length;S++)C.mesh.setColorAt(S,C.c.setScalar(1.15+.6*Hm(C.u[S]+1.15,b)));C.mesh.instanceColor.needsUpdate=!0}for(let S of s)S.obj.rotateOnAxis(S.axis,S.speed*T)}}}function Hm(i,e){let t=.5+.5*Math.sin(i*.55-e*2.6);return t*t}function D1(){let i=document.createElement("canvas");i.width=256,i.height=140;let e=i.getContext("2d"),t=(r,o,a,l,c)=>{e.beginPath(),e.moveTo(r+c,o),e.arcTo(r+a,o,r+a,o+l,c),e.arcTo(r+a,o+l,r,o+l,c),e.arcTo(r,o+l,r,o,c),e.arcTo(r,o,r+a,o,c),e.closePath()};t(4,4,248,132,26),e.fillStyle="#d61c9a",e.fill();let n=e.createLinearGradient(0,14,0,126);n.addColorStop(0,"#ff9be2"),n.addColorStop(.5,"#ff5cc8"),n.addColorStop(1,"#f23cb4"),t(14,14,228,112,18),e.fillStyle=n,e.fill(),e.fillStyle="rgba(255, 236, 250, 0.92)";for(let r=0;r<7;r++)t(36+r*28,34,12,72,6),e.fill();let s=new Vn(i);return s.colorSpace=wt,s.anisotropy=4,s}function zm(i){let e=new st({color:i,roughness:.95,metalness:0,emissive:i,emissiveIntensity:.18});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { float rim = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 2.0);
        totalEmissiveRadiance += diffuseColor.rgb * rim * 0.55; }`)},e}var Sd=null;function F1(){if(Sd)return Sd;let i=new Bi(1,3),e=i.attributes.position,t=new M;for(let n=0;n<e.count;n++){t.fromBufferAttribute(e,n);let s=1+.16*Math.sin(t.x*9.1+t.y*4.3)*Math.sin(t.y*7.7+t.z*5.9)+.08*Math.sin(t.z*17+t.x*13);t.multiplyScalar(s),e.setXYZ(n,t.x,t.y,t.z)}return i.computeVertexNormals(),Sd=i,i}function ra(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}var N1=2.6,Mi={towers:[{at:[3,1.2,-2],height:5.9,yaw:180},{at:[-3,1.2,-2],height:5.9,yaw:0}],gears:[{at:[1.72,1.05,-1.7],dir:[-.2,.05,-.98],d:.8,spin:.9},{at:[2,.45,-2.4],dir:[-.25,.1,-.96],d:.92,spin:-.75},{at:[1.53,.26,-3.1],dir:[-.1,.1,-.99],d:.56,spin:1.2},{at:[-1.66,1,-1.7],dir:[.2,.05,-.98],d:.76,spin:-.9},{at:[-2,.5,-2.5],dir:[.25,.1,-.96],d:.96,spin:.7},{at:[-1.53,.23,-3.2],dir:[.1,.1,-.99],d:.55,spin:-1.2},{at:[2.05,3.15,-2.6],dir:[-.3,0,-.95],d:1.1,spin:-.7}],pipes:[{onTower:0,lift:.3,anchor:"down",size:.95,rot:[0,-135,0],pour:!0},{onTower:1,lift:.3,anchor:"down",size:.95,rot:[0,-45,0],pour:!0}],crowns:[{at:[0,4.72,2.12],width:2.1,rot:[0,180,0]}]};function Om({scene:i,models:e,env:t,gold:n,glowTexture:s,fallGeometry:r,fallMaterial:o,fx:a}){let l=new Ge;l.name="entranceDecor",i.add(l);let c={value:0},u=new st({color:2381823,metalness:.35,roughness:.26,envMap:t,envMapIntensity:1.2}),h=[],d=[],f=[],p=(S,z,F={})=>{let L=new st({map:S.map,metalnessMap:S.metalnessMap,roughnessMap:S.roughnessMap,normalMap:S.normalMap,metalness:1,roughness:1,envMap:t,envMapIntensity:F.envI??1.1,emissive:16777215,emissiveMap:S.map,emissiveIntensity:F.glow??.2,side:Qe});return F.fluid&&(L.onBeforeCompile=N=>{N.uniforms.uFluidTime=c,N.vertexShader=N.vertexShader.replace("void main() {",`varying vec3 vFluidP;
void main() {
  vFluidP = position;`),N.fragmentShader=N.fragmentShader.replace("void main() {",`varying vec3 vFluidP;
uniform float uFluidTime;
${nn}
void main() {`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+_m)}),L.customProgramCacheKey=()=>"decor:"+z,L},v=(S,z,F)=>{let L=null;S.scene.traverse(U=>{U.isMesh&&(L=L||p(U.material,z,F),U.material=L)}),S.scene.updateMatrixWorld(!0);let N=new Zt().setFromObject(S.scene);return{scene:S.scene,box:N,size:N.getSize(new M),centre:N.getCenter(new M),mat:L}},g={tower:v(e.tower,"tower",{fluid:!0,glow:.18}),gear:v(e.gear,"gear",{glow:.22}),pipe:v(e.pipe,"pipe",{glow:.2}),crown:v(e.crown,"crown",{glow:.25})},m=(S,z,F)=>{let L=S.scene.clone();return L.scale.setScalar(z),L.position.copy(F).multiplyScalar(-z),L},_=(S,z)=>{let F=new M(...z),L=new M,N=new M,U=-1/0,k=0,H=[];S.scene.traverse(K=>{if(!K.isMesh)return;let O=K.geometry.attributes.position;for(let j=0;j<O.count;j+=3){L.fromBufferAttribute(O,j).applyMatrix4(K.matrixWorld);let ve=L.dot(F);H.push(L.clone(),ve),U=Math.max(U,ve)}});for(let K=0;K<H.length;K+=2)H[K+1]>U-.04&&(N.add(H[K]),k++);return N.divideScalar(Math.max(1,k))},x={down:_(g.pipe,[0,-1,0]),side:_(g.pipe,[-1,0,0]),centre:g.pipe.centre},y=(()=>{let S=new M,z=-1/0,F=0,L=0,N=0,U=g.tower.box,k=U.max.x-U.min.x;return g.tower.scene.traverse(H=>{if(!H.isMesh)return;let K=H.geometry.attributes.position;for(let O=0;O<K.count;O++)S.fromBufferAttribute(K,O).applyMatrix4(H.matrixWorld),S.x>U.max.x-k*.16&&S.y<U.min.y+(U.max.y-U.min.y)*.55&&(z=Math.max(z,S.y));for(let O=0;O<K.count;O++)S.fromBufferAttribute(K,O).applyMatrix4(H.matrixWorld),S.x>U.max.x-k*.16&&Math.abs(S.y-z)<.02&&(F+=S.x,L+=S.z,N++)}),new M(F/Math.max(1,N),z,L/Math.max(1,N))})(),R=S=>S.map(z=>Be.degToRad(z)),w={towers:[],gears:[],pipes:[],crowns:[]},A=[];function C(){for(let S of Object.values(w))for(let z of S)l.remove(z);for(let S of A)l.remove(S);for(let S of Object.keys(w))w[S]=[];A.length=0,h.length=0,d.length=0;for(let S of Mi.towers){let z=g.tower,F=S.height/z.size.y,L=new Ge;if(L.position.set(...S.at),L.rotation.y=Be.degToRad(S.yaw),L.add(m(z,F,new M(z.centre.x,z.box.min.y,z.centre.z))),s){let N=new ci(new jn({map:s,color:new oe(.25,.75,1.6),transparent:!0,opacity:.55,blending:on,depthWrite:!1}));N.position.set(0,S.height*.57,0),N.scale.setScalar(S.height*.42),N.renderOrder=3,L.add(N),d.push({sp:N,phase:d.length*1.7})}if(S.at[1]>-.4&&n){let N=z.size.x*F*.36,U=S.at[1]+.75,k=new Re(new pn(N,N*1.12,U,32),n);k.position.y=-U/2,L.add(k);for(let H of[-.12,-U*.55]){let K=new Re(new Dt(N*1.03,.07,10,40),u);K.rotation.x=Math.PI/2,K.position.y=H,L.add(K)}}L.updateMatrixWorld(!0),L.userData.stubTop=y.clone().sub(new M(z.centre.x,z.box.min.y,z.centre.z)).multiplyScalar(F).applyMatrix4(L.matrixWorld),l.add(L),w.towers.push(L)}for(let S of Mi.gears){let z=g.gear,F=S.d/Math.max(z.size.x,z.size.y),L=new Ge;L.position.set(...S.at),L.quaternion.setFromUnitVectors(new M(0,0,1),new M(...S.dir).normalize());let N=new Ge;N.rotation.z=S.at[0]*7.3,N.add(m(z,F,z.centre)),L.add(N),h.push({obj:N,speed:S.spin}),l.add(L),w.gears.push(L)}for(let S of Mi.pipes){let z=g.pipe,F=S.size/Math.max(z.size.x,z.size.y,z.size.z),L=x[S.anchor||"centre"],N=S.onTower!==void 0?w.towers[S.onTower].userData.stubTop.clone():new M(...S.at),U=new Ge;if(S.lift&&n){let k=S.size*.16,H=new Re(new pn(k,k,S.lift+.1,20),n);H.position.copy(N).add(new M(0,(S.lift-.1)/2,0)),l.add(H),A.push(H),N.y+=S.lift}if(U.position.copy(N),U.rotation.set(...R(S.rot)),S.mirror&&(U.scale.x=-1),U.add(m(z,F,L)),l.add(U),w.pipes.push(U),S.pour&&r&&o){U.updateMatrixWorld(!0);let k=S.anchor==="side"?"down":"side",H=x[k].clone().sub(L).multiplyScalar(F).applyMatrix4(U.matrixWorld),K=new M(...k==="side"?[-1,0,0]:[0,-1,0]).applyQuaternion(U.getWorldQuaternion(new bt));K.y=0,K.lengthSq()<1e-4&&K.set(Math.sign(N.x)||1,0,0),K.normalize();let O=Math.max(.3,H.y+.62),j=k==="side"?.55:.15,ve=S.size*.36,de=new Re(r(j,O,ve,ve*1.5),o);de.position.copy(H),de.lookAt(H.clone().add(K)),de.renderOrder=2,l.add(de),A.push(de);let V=H.clone().addScaledVector(K,j);if(V.y=-.6,a){let ee=Mi.pipes.indexOf(S);f[ee]?f[ee].pos.copy(V):(f[ee]={pos:V,rate:14,kind:1,spread:.25,up:1.1,size:.34},a.addSource(f[ee]))}}}for(let S of Mi.crowns){let z=g.crown,F=S.width/z.size.x,L=new Ge;L.position.set(...S.at),L.rotation.set(...R(S.rot)),L.add(m(z,F,z.centre)),l.add(L),w.crowns.push(L)}return l.updateMatrixWorld(!0),T()}function T(S=3.9){let z={},F=new M;for(let[L,N]of Object.entries(w)){let U=1/0;for(let k of N)k.traverse(H=>{if(!H.isMesh)return;let K=H.geometry.attributes.position;for(let O=0;O<K.count;O+=5)F.fromBufferAttribute(K,O).applyMatrix4(H.matrixWorld),F.z<S&&F.y<N1&&(U=Math.min(U,Math.abs(F.x)))});z[L]=Number.isFinite(U)?+U.toFixed(2):null}return z}let b=C();return{root:l,clear:b,place:C,update(S,z){c.value=z;for(let F of h)F.obj.rotation.z+=F.speed*S;for(let F of d)F.sp.material.opacity=.42+.16*Math.sin(z*2.3+F.phase)}}}var Vm=typeof window<"u"&&!window.__BW_CLASSIC__&&!/[?&]classic(=|&|$)/.test(location.search)&&!!(window.__BW_PHASE_A__||/[?&]phase-?a(=|&|$)/i.test(location.search)),Gm={wallHue:305,wallSat:.32,wallDim:.14,goldHue:36,goldSoften:.18,hotSoften:.2,glowAbove:3.3,glowZ:1.2,glowSize:[4.5,3.2,8],glowColor:[1,.86,.98],glowMix:.35,glowAdd:.06},Ad={hotHue:300,hotSoften:.22,goldHue:34,goldSoften:.3},Wm={stone:[.62,.38,.66],glow:[.95,.8,.95],glowMix:.55,glowReach:3.6},Rd={deep:[.03,.4,.88],light:[.3,.75,1],icyMix:.85,crackScale:[4.4,2.2],crack:1,crackW:.11,collarR:.5,collarW:.7,edgeFoam:1,sparkle:2,skyCut:.6},Ql=typeof window<"u"&&window.__BW_PHASE_A_TUNE__||{};Object.assign(Gm,Ql.castle||{});Object.assign(Ad,Ql.tower||{});Object.assign(Wm,Ql.wall||{});Object.assign(Rd,Ql.water||{});var Nt=i=>(+i).toFixed(4),km=i=>`vec2(${i.map(Nt).join(", ")})`,nr=i=>`vec3(${i.map(Nt).join(", ")})`,H1=`
vec3 paRgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 paHsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;function Xm({scene:i,castle:e,waterSheets:t,axisY:n,tunnelStart:s}){let r={castleMaterials:0,towerMeshes:0,wallFacing:!1,waterSheet:!1},o=null,a=null;if(i.traverse(c=>{if(!(!c.isMesh||!c.material||!c.material.customProgramCacheKey||c.material.customProgramCacheKey()!=="decor:tower")){if(!a){o=c.material;let u=Ad,h=o.onBeforeCompile;a=o.clone(),a.onBeforeCompile=(d,f)=>{h.call(o,d,f),d.fragmentShader=d.fragmentShader.replace("void main() {",`${H1}
vec3 paTower(vec3 lin) {
  vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = paRgb2hsv(c); float h = hsv.x * 360.0;
  float hot = smoothstep(295.0, 312.0, h) * smoothstep(0.45, 0.7, hsv.y);
  hsv.x = mix(hsv.x, ${Nt(u.hotHue/360)}, hot * 0.5); hsv.y *= 1.0 - ${Nt(u.hotSoften)} * hot; hsv.z *= 1.0 - 0.05 * hot;
  float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
  hsv.x = mix(hsv.x, ${Nt(u.goldHue/360)}, gold * 0.4); hsv.y *= 1.0 - ${Nt(u.goldSoften)} * gold;
  return pow(paHsv2rgb(hsv), vec3(2.2));
}
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  diffuseColor.rgb = paTower(diffuseColor.rgb);   // Phase A`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance = paTower(totalEmissiveRadiance);   // Phase A`)},a.customProgramCacheKey=()=>"decor:tower|phaseA:"+JSON.stringify(Ad)}c.material=a,r.towerMeshes++}}),i.traverse(c=>{if(r.wallFacing||!c.isMesh||!c.material||!c.material.uniforms||!c.material.uniforms.uWall)return;let u=Wm,h=c.material.clone();h.fragmentShader=`uniform vec3 uWall, uShade; varying vec2 vP;
      void main() {   // Phase A (?phaseA)
        float r = length(vP);
        vec3 c = mix(${nr(u.stone)}, ${nr(u.glow)}, (1.0 - smoothstep(2.95, ${Nt(u.glowReach)}, r)) * ${Nt(u.glowMix)});
        c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);
        c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));   // the thin dark line right at the ring stays
        float a = 1.0 - smoothstep(3.55, 3.92, r);                 // fades into the castle's own wall, as before
        gl_FragColor = vec4(c * a, a);
      }`,c.material=h,r.wallFacing=!0}),e){let c=Gm,u=`
      { // Phase A (?phaseA): the approved castle's pink-lavender stone, softer peach gold, calmer pink, and a soft glow
        vec3 c = pow(max(diffuseColor.rgb, 0.0), vec3(1.0 / 2.2));
        vec3 hsv = bwRgb2hsv(c);
        float h = hsv.x * 360.0;
        float lav = smoothstep(215.0, 245.0, h) * (1.0 - smoothstep(330.0, 345.0, h));
        float pale = max(lav, 1.0 - smoothstep(0.04, 0.09, hsv.y)) * (1.0 - smoothstep(0.22, 0.42, hsv.y)) * smoothstep(0.45, 0.75, hsv.z);
        hsv.x = mix(hsv.x, ${Nt(c.wallHue/360)}, pale * 0.75);
        hsv.y = mix(hsv.y, max(hsv.y, ${Nt(c.wallSat)}), pale);
        hsv.z *= 1.0 - ${Nt(c.wallDim)} * pale;
        float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
        hsv.x = mix(hsv.x, ${Nt(c.goldHue/360)}, gold * 0.4);
        hsv.y *= 1.0 - ${Nt(c.goldSoften)} * gold;
        hsv.z *= 1.0 - 0.06 * gold;
        float hot = smoothstep(300.0, 318.0, h) * smoothstep(0.55, 0.8, hsv.y);
        hsv.y *= 1.0 - ${Nt(c.hotSoften)} * hot;
        c = bwHsv2rgb(hsv);
        vec3 dg = (vShadeP - vec3(0.0, ${Nt(n+c.glowAbove)}, ${Nt(c.glowZ)})) / ${nr(c.glowSize)};
        float glowK = exp(-dot(dg, dg));
        c = mix(c, ${nr(c.glowColor)}, glowK * ${Nt(c.glowMix)}) + ${nr(c.glowColor)} * glowK * ${Nt(c.glowAdd)};
        diffuseColor.rgb = pow(c, vec3(2.2));
      }`;e.traverse(h=>{if(!h.isMesh||!h.material||!h.material.onBeforeCompile)return;let d=h.material,f=d.onBeforeCompile,p=d.customProgramCacheKey.bind(d),v=d.clone();v.onBeforeCompile=(g,m)=>{f.call(d,g,m),g.fragmentShader.includes("bwRgb2hsv")&&g.fragmentShader.includes("vShadeP")&&(g.fragmentShader=g.fragmentShader.replace("#include <color_fragment>",u+`
#include <color_fragment>`))},v.customProgramCacheKey=()=>p()+"|phaseA-castle:"+JSON.stringify(c),h.material=v,r.castleMaterials++})}let l=(t||[]).find(c=>(c.geometry.computeBoundingBox(),c.geometry.boundingBox.min.z<s-5));if(l){let c=l.material,u=c.fragmentShader,h=`  float bubbleShade = 0.0;
`,d=`    col += (vec3(0.55, 0.92, 1.0) * lines * 0.3 + vec3(0.75, 0.95, 1.0) * caustic * 0.3 * (1.0 - moat)) * openK;
  }`,f="  vec3 foamCol = vec3(0.9, 0.97, 1.0) * (0.92 + 0.18 * NdotL);";if([h,d,f].every(p=>u.split(p).length===2)){let p=c.clone();p.uniforms=c.uniforms,p.fragmentShader=u.replace(h,h+`  float paSlide = 0.0;   // Phase A
`).replace(d,d.replace(/\n  }$/,"")+`
`+z1(Rd)+`
  }`).replace(f,`  lit -= env * fresnel * 0.28 * (1.0 - inDrum * 0.6) * ${Nt(Rd.skyCut)} * paSlide;   // Phase A: less pale sky on the slide
`+f),l.material=p,r.waterSheet=!0}}return r}var z1=i=>`
    { // Phase A (?phaseA): icy cyan water, a bold white crackle web, a thicker white foam collar and more sparkles
      float slideK = openK * (1.0 - moat);
      paSlide = slideK;
      vec3 icy = mix(${nr(i.deep)}, ${nr(i.light)}, clamp(0.3 + crest * 0.4 + hollow * 0.3, 0.0, 1.0));
      col = mix(col, icy, ${Nt(i.icyMix)} * slideK);
      vec2 iw = bwVoronoi((xz + warp * 0.35) * ${km(i.crackScale)} - vec2(0.0, flowT * 0.55) + 11.0);
      vec2 iw2 = bwVoronoi((xz + warp * 0.25) * ${km(i.crackScale)} * 2.0 - vec2(0.0, flowT * 0.6) + 23.0);
      float crack = 1.0 - smoothstep(0.015, ${Nt(i.crackW)}, iw.y - iw.x);
      float crack2 = (1.0 - smoothstep(0.01, ${Nt(i.crackW*.66)}, iw2.y - iw2.x)) * 0.6;
      col = mix(col, vec3(0.93, 0.99, 1.0), clamp(max(crack, crack2) * (0.55 + 0.45 * patchy) * ${Nt(i.crack)}, 0.0, 1.0) * slideK);
      float collar = exp(-pow(max(0.0, rM - ${Nt(i.collarR)}) / ${Nt(i.collarW)}, 2.0));
      foam = max(foam, smoothstep(0.3, 0.75, collar * (0.75 + 0.5 * stream)) * openK);
      foam = max(foam, edgeBand * smoothstep(0.35, 0.7, stream) * ${Nt(i.edgeFoam)} * openK);
      vec2 sp2 = xz * vec2(11.0, 6.0) - vec2(0.0, flowT * 0.35), sc2 = floor(sp2);
      float sh2 = bwHash(sc2 + 57.3);
      float star2 = 1.0 - smoothstep(0.0, 0.035, length((fract(sp2) - 0.5) * vec2(0.09, 0.17)));
      glint += step(0.93, sh2) * star2 * pow(max(0.0, sin(t * (4.0 + sh2 * 5.0) + sh2 * 60.0)), 4.0) * ${Nt(i.sparkle)} * slideK;
    }`;var un={ringColours:[[.16,.8,1],[.25,.45,1],[1,.45,.85],[.72,.56,1],[.75,.95,1]],ringGlow:.6,ringFar:{from:5,to:16,white:.6,bright:.9,keep:1},wallDeep:[[.01,.035,.26],[.1,.26,.8]],swirl:{radius:1.93,rowStep:.3,around:72,from:4,to:176,strength:1.3,white:1,blue:.3,bands:1.7,twist:.35,far:1},water:{azure:[.1,.4,.95],azureMix:.35,foam:.75},foam:{count:96,bright:1.12,cells:2.6,zones:[{w:.3,dx:[-.8,.8],du:[-.7,-.15],r:[.2,.36],sink:.4,drift:.4,out:.25},{w:.34,side:[.5,1],du:[-.5,.4],r:[.28,.5],sink:.12,drift:.4,out:.25},{w:.16,dx:[-.95,.95],du:[-1.45,-.8],r:[.15,.3],sink:.5,drift:.5,out:.2},{w:.2,ring:[.42,.56],r:[.12,.22],sink:.2,drift:.3,out:.15}],life:[.6,1.25]},spray:{rate:110,size:[.07,.15]},whirl:{ahead:14,radius:1.9,strength:1.25,exitFade:[7,2]},camera:{lookY:1.1},bubbles:{count:32,du:[-2.6,13],x:[.38,1.55],h:[.35,2.5],r:[.05,.28],flow:1.6,film:1.7},sparkles:{rate:34,du:[3,15],r:[.2,1.7]},brush:{pink:[1,.34,.72],white:[1,.92,.98],royal:[.1,.2,.9],deep:[.05,.1,.55],tufts:26,core:.45},gem:{color:[.7,.45,1],emissive:[.62,.36,1]}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.round3,e=(t,n)=>{for(let s of Object.keys(n))n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&t[s]?e(t[s],n[s]):t[s]=n[s]};i&&e(un,i)}function qm({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,soap:a,round4:l=!1}){let c=t.tunnelStart,u=t.tunnelEnd,h=n.WATER+n.AXIS_H,d=ec(15930),f={},p=()=>Be.smoothstep(s.z,c-.9,c+.4);return f.foam=B1({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,rnd:d,inside:p,big:l?1.3:1,look4:l||null}),f.swirl=X1({scene:i,TR:e,TS:c,TE:u,axisH:h,updaters:r,time:o,inside:p,mascot:s}),a&&(f.bubbles=$1({scene:i,TR:e,W:n,L:t,mascot:s,updaters:r,time:o,rnd:d,soap:a,inside:p,axisH:h,look4:l||null})),l&&(f.whirl=Z1({scene:i,TR:e,TE:u,axisH:h,mascot:s,updaters:r,time:o,inside:p})),f}function B1({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,rnd:a,inside:l,big:c=1,look4:u=null}){let h=u&&u.foam,d=h?{...un.foam,count:h.count,cells:h.cells,bright:h.bright}:un.foam,f=d.count,p=h?h.size:1,v=new Bi(1,4),g=new mn;g.setAttribute("position",v.attributes.position),g.setAttribute("normal",v.attributes.normal);let m=new xt(new Float32Array(f*4),4).setUsage(Sn),_=new xt(new Float32Array(f),1);g.setAttribute("aBlob",m),g.setAttribute("aSeed",_),g.instanceCount=f;let x={uTime:o,uBright:{value:d.bright},uCells:{value:d.cells},uKey:{value:new M(.35,.85,-.42).normalize()}};h&&Object.assign(x,{uWhite:{value:h.white},uDeep:{value:new oe(...h.deep)},uAqua:{value:new oe(...h.aqua)}});let y=new We({uniforms:x,vertexShader:O1,fragmentShader:h?W1:k1}),R=new Re(g,y);R.frustumCulled=!1,R.name="r3Foam",R.visible=!1,R.renderOrder=2,i.add(R);let w=u&&u.foamBubbles,A=null,C=null,T=null,b=null,S=null,z=null;if(w){let O=f*w.per,j=ec(45237),ve=new Bi(1,1),de=new mn;de.setAttribute("position",ve.attributes.position),de.setAttribute("normal",ve.attributes.normal),C=new xt(new Float32Array(O*4),4).setUsage(Sn);let V=new xt(new Float32Array(O),1);de.setAttribute("aBlob",C),de.setAttribute("aSeed",V),de.instanceCount=O,T=new Float32Array(O*3),b=new Float32Array(O),S=new Float32Array(O);for(let ee=0;ee<O;ee++){let pe=j()*2-1,re=.15+j()*.85,xe=j()*2-1.35,ce=Math.hypot(pe,re,xe)||1;T.set([pe/ce,re/ce,xe/ce],ee*3),b[ee]=w.at[0]+j()*(w.at[1]-w.at[0]),S[ee]=w.size[0]+Math.pow(j(),1.5)*(w.size[1]-w.size[0]),V.array[ee]=j()}z={uTime:o,uKey:x.uKey,uUp:{value:new M(0,1,0)},uInner:{value:new oe(...w.inner)},uDeep:{value:new oe(...w.deep)},uBright:{value:w.bright}},A=new Re(de,new We({uniforms:z,vertexShader:V1,fragmentShader:G1})),A.name="r4FoamBubbles",A.frustumCulled=!1,A.visible=!1,A.renderOrder=2,i.add(A)}let F={P:new M,R:new M,U:new M,T:new M},L=d.zones.reduce((O,j)=>O+j.w,0),N=O=>O[0]+a()*(O[1]-O[0]),U=[],k=(O,j)=>{let ve=a()*L,de=d.zones[0];for(let V of d.zones){if(ve<V.w){de=V;break}ve-=V.w}if(O.z=de,O.r=N(de.r)*(de.side?c:1)*p,O.life=N(d.life),O.age=j?a()*O.life:0,de.ring){let V=Be.degToRad(-200+a()*220),ee=N(de.ring);O.dx=Math.cos(V)*ee,O.du=Math.sin(V)*ee*.8}else de.side?(O.dx=(a()<.5?-1:1)*N(de.side),O.du=N(de.du)):(O.dx=N(de.dx),O.du=N(de.du));O.out=Math.sign(O.dx||1)*de.out*(.5+a())};for(let O=0;O<f;O++){let j={};k(j,!0),U.push(j),_.array[O]=a()}let H=new M,K=null;return r.push((O,j)=>{let ve=l();if(R.visible=ve>0,A&&(A.visible=R.visible),!R.visible){K=null;return}K===null&&(K=s.x),K+=(s.x-K)*(1-Math.exp(-O/.12));let de=m.array,V=A?C.array:null,ee=w?w.per:0;A&&(e.frame(s.z,F),z.uUp.value.copy(F.U));for(let pe=0;pe<f;pe++){let re=U[pe];re.age+=O,re.age>=re.life&&k(re,!1),re.du-=re.z.drift*O,re.dx+=re.out*O;let xe=re.age/re.life,ce=Math.pow(Math.sin(Math.PI*Math.min(1,xe*1.2+.08)),.55)*ve,Se=K+re.dx,De=s.z+re.du,ie=re.r*ce;e.map(Se,n.surface(t,Se,De,j)-re.z.sink*re.r+ie*.25,De,H),de[pe*4]=H.x,de[pe*4+1]=H.y,de[pe*4+2]=H.z,de[pe*4+3]=Math.max(ie,1e-4);for(let se=pe*ee,D=se+ee;se<D;se++){let _e=T[se*3],Q=T[se*3+1],ue=T[se*3+2],me=ie*b[se];V[se*4]=H.x+(F.R.x*_e+F.U.x*Q*.8+F.T.x*ue)*me,V[se*4+1]=H.y+(F.R.y*_e+F.U.y*Q*.8+F.T.y*ue)*me,V[se*4+2]=H.z+(F.R.z*_e+F.U.z*Q*.8+F.T.z*ue)*me,V[se*4+3]=Math.max(ie*S[se],1e-4)}}m.needsUpdate=!0,A&&(C.needsUpdate=!0)}),{heaps:f,trianglesEach:v.attributes.position.count/3}}var O1=`
${nn}
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
`,k1=`
${nn}
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
`,V1=`
attribute vec4 aBlob; attribute float aSeed;
varying vec3 vN; varying vec3 vW; varying float vSeed;
void main() {
  vec3 p = aBlob.xyz + normal * aBlob.w;
  vN = normal; vW = p; vSeed = aSeed;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,G1=`
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
`,W1=`
${nn}
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
`;function X1({scene:i,TR:e,TS:t,TE:n,axisH:s,updaters:r,time:o,inside:a,mascot:l}){let c=un.swirl,u=Math.ceil((n+4-(t+.2))/c.rowStep)+1,h=c.around+1,d=new Float32Array(u*h*3),f=new Float32Array(u*h*2),p=[],v=new M;for(let y=0;y<u;y++){let R=t+.2+y*c.rowStep;for(let w=0;w<h;w++){let A=Be.degToRad(c.from+(c.to-c.from)*w/c.around);if(e.map(Math.cos(A)*c.radius,s+Math.sin(A)*c.radius,R,v),d.set([v.x,v.y,v.z],(y*h+w)*3),f.set([A,R],(y*h+w)*2),w<c.around&&y<u-1){let C=y*h+w;p.push(C,C+1,C+h,C+1,C+h+1,C+h)}}}let g=new tt;g.setAttribute("position",new nt(d,3)),g.setAttribute("aAU",new nt(f,2)),g.setIndex(p),g.computeBoundingSphere();let m={uTime:o,uStrength:{value:c.strength},uEnds:{value:new le(t,n+4)},uFade:{value:0},uMix:{value:new le(c.white,c.blue)},uBands:{value:new le(c.bands,c.twist)},uFar:{value:c.far}},_=new We({uniforms:m,vertexShader:q1,fragmentShader:Y1,transparent:!0,depthWrite:!1,blending:cn,blendSrc:gn,blendDst:$t,side:Qe}),x=new Re(g,_);return x.name="r3Swirl",x.renderOrder=3,x.visible=!1,x.frustumCulled=!1,i.add(x),r.push(()=>{let y=a();x.visible=y>0,m.uFade.value=y}),{triangles:p.length/3}}var q1=`
attribute vec2 aAU;
varying vec2 vAU; varying float vDepth;
void main() {
  vAU = aAU;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,Y1=`
${nn}
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
`;function $1({scene:i,TR:e,W:t,L:n,mascot:s,updaters:r,time:o,rnd:a,soap:l,inside:c,axisH:u,look4:h=null}){let d=h&&h.bubbles?{...un.bubbles,...h.bubbles}:un.bubbles,f=d.count,p=new Qt(1,26,16),v=new mn;v.index=p.index,v.setAttribute("position",p.attributes.position),v.setAttribute("normal",p.attributes.normal);let g=new xt(new Float32Array(f*4),4).setUsage(Sn),m=new Float32Array(f*4);for(let b=0;b<f;b++)m.set([a()*6.28,0,.05,0],b*4);v.setAttribute("inst",g),v.setAttribute("motion",new xt(m,4)),v.instanceCount=f;let _={uTime:o,uMotion:{value:1},uAvoid:{value:new M(0,-99,0)},uCentreAlpha:{value:.04},uFilm:{value:d.film}},x=new We({uniforms:_,vertexShader:l.vertex,fragmentShader:l.fragment,transparent:!0,depthWrite:!1,blending:cn,blendSrc:gn,blendDst:$t}),y=new Re(v,x);y.frustumCulled=!1,y.renderOrder=7,y.name="r3Bubbles",y.visible=!1,i.add(y);let R=b=>b[0]+a()*(b[1]-b[0]),w=[],A=(b,S)=>{b.u=s.z+(S?R(d.du):d.du[1]-a()*2),b.x=(a()<.5?-1:1)*R(d.x),b.h=R(d.h),b.h>u+.6&&(b.x*=.8),b.r=d.r[0]+Math.pow(a(),1.8)*(d.r[1]-d.r[0])};for(let b=0;b<f;b++){let S={};A(S,!0),w.push(S)}let C=new M,T=!1;return r.push(b=>{let S=c();if(y.visible=S>0,!y.visible){T=!1;return}if(!T){for(let F of w)A(F,!0);T=!0}_.uAvoid.value.copy(s.root.position);let z=g.array;for(let F=0;F<f;F++){let L=w[F];L.u+=d.flow*b,L.u<s.z+d.du[0]&&A(L,!1),e.map(L.x,L.h,L.u,C),z[F*4]=C.x,z[F*4+1]=C.y,z[F*4+2]=C.z,z[F*4+3]=L.r*S}g.needsUpdate=!0}),{count:f}}function Z1({scene:i,TR:e,TE:t,axisH:n,mascot:s,updaters:r,time:o,inside:a}){let l=un.whirl,c={uTime:o,uFade:{value:0},uStrength:{value:l.strength}},u=new We({uniforms:c,vertexShader:K1,fragmentShader:j1,transparent:!0,depthWrite:!1,blending:cn,blendSrc:gn,blendDst:$t,side:Qe}),h=new Re(new ds(1,96),u);h.name="r3Whirlpool",h.renderOrder=1,h.visible=!1,h.frustumCulled=!1,i.add(h);let d={P:new M,R:new M,U:new M,T:new M},f=new we;return r.push(()=>{let p=s.z+l.ahead,v=a()*(1-Be.smoothstep(p,t-l.exitFade[0],t-l.exitFade[1]));h.visible=v>.001,c.uFade.value=v,h.visible&&(e.frame(Math.min(p,t-.5),d),h.position.copy(d.P).addScaledVector(d.U,n),f.makeBasis(d.R,d.U,d.T.clone().negate()),h.quaternion.setFromRotationMatrix(f),h.scale.setScalar(l.radius))}),{ahead:l.ahead,radius:l.radius}}var K1="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",j1=`
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
`;function ec(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var _n={straight:4,emerge:[7.5,11,1.6],lining:{radius:2,from:-56,to:236,rowStep:.25,around:96,deep:[.005,.012,.14],mid:[.015,.05,.42],cyan:[.05,.48,.92],spacing:1.15,streaks:.2,line:.7,far:.25},rings:{radius:1.93,tube:.045,glow:[.12,.55,1.05],every:1.15},gold:{radius:1.97,tube:.085,every:3,color:[1,.72,.28]},grade:{contrast:1.2,saturation:1.15,exposure:.84,pivot:.5},crown:{petals:32,radius:[.44,.72],height:[.55,1.05],width:[.3,.5],life:[.5,.95],flare:.55,curl:.35,alpha:1.6,fingers:7,veil:.1},water:{middle:[0,.66,.84],side:[.015,.15,.55],mix:.75,crest:.3,froth:.9,churn:.95},foam:{count:150,size:.72,cells:4,bright:1.05,white:1,deep:[.01,.16,.78],aqua:[.05,.6,1]},bubbles:{count:44,r:[.05,.32]},foamBubbles:{per:7,at:[.8,1.05],size:[.22,.46],inner:[.42,.55,1],deep:[.06,.2,.86],bright:1.08},camera:{lookY:1.3},spray:{rate:400,size:[.1,.26]},pompom:{count:320,rim:48,radius:.92,depth:.5,cap:80,size:.115,long:1.25,glow:.28,sheen:.32,strands:.35,fibres:.45,fuzz:.5,whiteLift:.35,right:[[.42,[[.1,.2,.86],[.13,.25,.95]]],[.58,[[1,.95,.98]]],[.78,[[1,.5,.8],[1,.42,.76]]],[9,[[1,.95,.98],[1,.86,.94]]]],left:[[.4,[[1,.36,.74]]],[.62,[[1,.95,.98],[1,.86,.94]]],[9,[[1,.4,.76],[1,.32,.7]]]]}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.round4,e=(t,n)=>{for(let s of Object.keys(n))n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&t[s]?e(t[s],n[s]):t[s]=n[s]};i&&e(_n,i)}function Ym({scene:i,TR:e,L:t,W:n,updaters:s,time:r,env:o,mascot:a,hide:l=[]}){let c=t.tunnelStart,u=t.tunnelEnd,h=n.WATER+n.AXIS_H;for(let f of l)f&&(f.visible=!1);let d={hidden:l.filter(Boolean).length};return d.lining=J1({scene:i,TR:e,TS:c,TE:u,axisH:h,time:r}),d.rings=tM({scene:i,TR:e,TS:c,TE:u,axisH:h,env:o,time:r}),a&&(d.crown=sM({scene:i,TR:e,L:t,W:n,mascot:a,updaters:s,time:r,TS:c})),d}function J1({scene:i,TR:e,TS:t,TE:n,axisH:s,time:r}){let o=_n.lining,a=t-.4,l=n+4,c=Math.ceil((l-a)/o.rowStep)+1,u=o.around+1,h=new Float32Array(c*u*3),d=new Float32Array(c*u*2),f=[],p=new M;for(let x=0;x<c;x++){let y=a+x*o.rowStep;for(let R=0;R<u;R++){let w=Be.degToRad(o.from+(o.to-o.from)*R/o.around);if(e.map(Math.cos(w)*o.radius,s+Math.sin(w)*o.radius,y,p),h.set([p.x,p.y,p.z],(x*u+R)*3),d.set([w,y],(x*u+R)*2),R<o.around&&x<c-1){let A=x*u+R;f.push(A,A+u,A+1,A+1,A+u,A+u+1)}}}let v=new tt;v.setAttribute("position",new nt(h,3)),v.setAttribute("aAU",new nt(d,2)),v.setIndex(f),v.computeBoundingSphere();let g={uTime:r,uDeep:{value:new oe(...o.deep)},uMid:{value:new oe(...o.mid)},uCyan:{value:new oe(...o.cyan)},uSpacing:{value:o.spacing},uStreaks:{value:o.streaks},uStart:{value:t},uLine:{value:o.line},uFar:{value:o.far}},m=new We({uniforms:g,vertexShader:Q1,fragmentShader:eM,side:Qe}),_=new Re(v,m);return _.name="r4Lining",_.frustumCulled=!1,i.add(_),{triangles:f.length/3,rows:c,cols:u}}var Q1=`
attribute vec2 aAU; varying vec2 vAU; varying float vDepth;
void main() { vAU = aAU; vec4 mv = modelViewMatrix * vec4(position, 1.0); vDepth = -mv.z; gl_Position = projectionMatrix * mv; }
`,eM=`
${nn}
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
`;function tM({scene:i,TR:e,TS:t,TE:n,axisH:s,env:r,time:o}){let a=_n.rings,l=_n.gold,c=_n.lining,u=[];for(let w=t+.4;w<n+3.5;w+=a.every)u.push(w);let h=new we,d=(w,A)=>e.mapMatrix(new we().makeTranslation(0,s,w),A),f=new Dt(a.radius,a.tube,8,128),p={uTime:o,uGlow:{value:new oe(...a.glow)}},v=new We({uniforms:p,vertexShader:nM,fragmentShader:iM}),g=new Ut(f,v,u.length),m=new Float32Array(u.length);u.forEach((w,A)=>{d(w,h),g.setMatrixAt(A,h),m[A]=w}),f.setAttribute("aU",new xt(m,1)),g.name="r4GlowRings",g.frustumCulled=!1,i.add(g);let _=u.filter((w,A)=>A%l.every===1).map(w=>w+.3),x=new Dt(l.radius,l.tube,10,128),y=new st({color:new oe(...l.color),metalness:1,roughness:.22,envMap:r||null,envMapIntensity:1.4,emissive:new oe(.55,.32,.05),emissiveIntensity:.6}),R=new Ut(x,y,_.length);return _.forEach((w,A)=>{d(w,h),R.setMatrixAt(A,h)}),R.name="r4GoldRings",R.frustumCulled=!1,i.add(R),{glow:u.length,gold:_.length,trianglesEach:[f.index.count/3,x.index.count/3]}}var nM=`
attribute float aU; uniform float uTime; varying float vWave; varying vec3 vN; varying vec3 vW;
void main() {
  vWave = 0.75 + 0.25 * sin(aU * 0.9 - uTime * 3.0);
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,iM=`
uniform vec3 uGlow; varying float vWave; varying vec3 vN; varying vec3 vW;
void main() {
  float face = clamp(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0, 1.0);
  vec3 col = mix(uGlow * 0.6, uGlow * 1.5 + vec3(0.2), pow(face, 3.0) * 0.6) * vWave;
  gl_FragColor = vec4(col, 1.0);
}
`;function sM({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,TS:a}){let l=_n.crown,c=l.petals,u=rM(1220),h=new fn(1,1,4,10);h.translate(0,.5,0);let d=new mn;d.index=h.index,d.setAttribute("position",h.attributes.position),d.setAttribute("uv",h.attributes.uv);let f=new xt(new Float32Array(c*4),4).setUsage(Sn),p=new xt(new Float32Array(c*2),2).setUsage(Sn);d.setAttribute("aPetal",f),d.setAttribute("aState",p),d.instanceCount=c;let v={uTime:o,uCentre:{value:new M},uR:{value:new M(1,0,0)},uU:{value:new M(0,1,0)},uT:{value:new M(0,0,1)},uFlare:{value:l.flare},uCurl:{value:l.curl},uFade:{value:0},uAlpha:{value:l.alpha},uFingers:{value:l.fingers},uVeil:{value:l.veil}},g=new We({uniforms:v,vertexShader:oM,fragmentShader:aM,transparent:!0,depthWrite:!1,side:Qe,blending:cn,blendSrc:gn,blendDst:$t}),m=new Re(d,g);m.name="r4SplashCrown",m.frustumCulled=!1,m.renderOrder=6,m.visible=!1,i.add(m);let _=A=>A[0]+u()*(A[1]-A[0]),x=new Float32Array(c),y=new Float32Array(c),R=(A,C)=>{f.array.set([u()*Math.PI*2,_(l.radius),_(l.height),_(l.width)],A*4),x[A]=_(l.life),y[A]=C?u()*x[A]:0,p.array[A*2+1]=u()};for(let A=0;A<c;A++)R(A,!0);let w={P:new M,R:new M,U:new M,T:new M};return r.push((A,C)=>{let T=Be.smoothstep(s.z,a-.9,a+.4)*(s.air?.25:1);if(m.visible=T>.01,v.uFade.value=T,!m.visible)return;e.frame(s.z,w);let b=n.surface(t,s.x,s.z,C);v.uCentre.value.copy(w.P).addScaledVector(w.R,s.x).addScaledVector(w.U,b),v.uR.value.copy(w.R),v.uU.value.copy(w.U),v.uT.value.copy(w.T);for(let S=0;S<c;S++)y[S]+=A*(.8+.4*Math.min(1.5,s.speed/n.CRUISE)),y[S]>=x[S]&&R(S,!1),p.array[S*2]=y[S]/x[S];p.needsUpdate=!0,f.needsUpdate=!0}),{petals:c}}function rM(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var oM=`
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
`,aM=`
${nn}
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
`;var Ts={radius:.9,depth:.5,roll:118,around:80,along:24,shells:20,fur:.22,lean:.2,density:30,clumpSize:.18,clump:.88,taper:.22,fringe:{count:120,rows:[[.98,.02],[.93,-.16]],length:[.15,.26],width:[.1,.16],strands:9},light:[.35,.85,.6],ambient:.72,diffuse:.5,sheen:.32,tip:.8,ao:.55,glow:.14,right:{edges:[.5,.78],bands:[["#2a48d8","#3a5ef0","#1f38bd","#4566ff"],["#fff7fc","#f7e4f1","#ffffff","#fbeaf5"],["#f55ab4","#ec4aa9","#ff7cc8","#ff63b8"]]},left:{edges:[.22,.72],bands:[["#ff5fb6","#f04aa8","#ff74c2","#f55ab4"],["#fff7fc","#f7e4f1","#ffffff","#fbeaf5"],["#f55ab4","#ff7cc8","#ec4aa9","#ff63b8"]]},balls:{fur:.2,density:80,clumpSize:.16,clump:.2,taper:.32,tip:.2,sheen:.15,glow:.08,ambient:.62,diffuse:.6,edges:{right:[.42,.7],left:[.25,.62]}}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.fluffy,e=(t,n)=>{for(let s of Object.keys(n))n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&t[s]?e(t[s],n[s]):t[s]=n[s]};i&&e(Ts,i)}var Cd=null,Pd={},tc={};function $m(){if(Cd)return Cd;let i=Ts,e=i.radius,t=i.depth,n=Be.degToRad(i.roll),s=i.around+1,r=i.along+1,o=[],a=[],l=[],c=[],u=[],h=0,d=null;for(let p=0;p<r;p++){let v=n*p/i.along,g=e*Math.sin(v),m=t*Math.cos(v);d&&(h+=Math.hypot(g-d[0],m-d[1])),d=[g,m];let _=Math.sin(v)/e,x=Math.cos(v)/t,y=Math.hypot(_,x),R=v<=Math.PI/2?Math.sin(v):1+(v-Math.PI/2)/(Math.PI/2);for(let w=0;w<s;w++){let A=Math.PI*2*w/i.around,C=Math.cos(A),T=Math.sin(A);if(o.push(g*C,g*T,m),a.push(C*_/y,T*_/y,x/y),l.push(h*C,h*T),c.push(R),w<i.around&&p<i.along){let b=p*s+w;u.push(b,b+1,b+s,b+1,b+s+1,b+s)}}}let f=new tt;return f.setAttribute("position",new Xe(o,3)),f.setAttribute("normal",new Xe(a,3)),f.setAttribute("aFur",new Xe(l,2)),f.setAttribute("aT",new Xe(c,1)),f.setIndex(u),Cd=f}function lM(){let i=Ts.shells;if(Pd[i])return Pd[i];let e=$m(),t=new mn;t.index=e.index;for(let s of["position","normal","aFur","aT"])t.setAttribute(s,e.attributes[s]);let n=new Float32Array(i);for(let s=0;s<i;s++)n[s]=s/(i-1);return t.setAttribute("aLayer",new xt(n,1)),t.instanceCount=i,t.boundingSphere=new In(new M,Ts.radius+Ts.fur+.2),Pd[i]=t}var Zm=`
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
`,cM=`
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
`,Km=`
uniform float uDensity, uClumpSize, uClump, uTaper;
varying vec2 vFur; varying float vT; varying float vH; varying vec3 vN; varying vec3 vW;
${Zm}
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
`,uM=Km.replace("  float len = (0.6 + 0.4 * fbH(si + 7.0)) * (1.0 - 0.55 * smoothstep(0.3, 0.75, bd));   // shorter between the tufts",`  float rb = clamp(bd / 0.66, 0.0, 1.0), domeH = sqrt(max(0.0, 1.0 - rb * rb));
  float len = (0.18 + 0.82 * domeH) * (0.86 + 0.14 * fbH(si + 7.0));   // a round ball of fuzz`).replace("  vec3 base = fbBand(vT, bid) * (0.9 + 0.18 * fbH(si + 1.0));","  vec3 base = fbBand(vT, bid) * (0.9 + 0.18 * fbH(si + 1.0)) * (0.82 + 0.3 * domeH * smoothstep(0.2, 1.0, h));").replace("  float ao = mix(uAo, 1.0, smoothstep(0.0, 0.85, h)) * mix(1.0, 0.82, smoothstep(0.45, 0.8, bd) * (1.0 - h));","  float ao = mix(uAo, 1.0, smoothstep(0.0, 0.85, h)) * mix(1.0, 0.68, smoothstep(0.7, 1.0, rb) * (1.0 - h));"),hM=`
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
`,dM=`
uniform float uStrands;
varying vec2 vUv; varying float vSeed; varying float vT; varying vec3 vN; varying vec3 vW;
${Zm}
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
`;function fM(i){if(tc[i])return tc[i];let e=new fn(1,1,1,4);return e.translate(0,.5,0),tc[i]=e}function jm(i=!1,e={}){let t=e.balls?Ts.balls:null,n=t?{...Ts,...t}:Ts,s=i?n.left:n.right,r=t?{...s,edges:i?t.edges.left:t.edges.right}:s,o=[];for(let b of r.bands)for(let S of b)o.push(new oe(S));let a={uLight:{value:new M(...n.light).normalize()},uCol:{value:o},uEdges:{value:new le(...r.edges)},uAmb:{value:n.ambient},uDif:{value:n.diffuse},uSheen:{value:n.sheen},uTip:{value:n.tip},uAo:{value:n.ao},uGlow:{value:n.glow},uFur:{value:n.fur},uLean:{value:n.lean},uDensity:{value:n.density},uClumpSize:{value:n.clumpSize},uClump:{value:n.clump},uTaper:{value:n.taper},uStrands:{value:n.fringe.strands}},l=new Ge;l.name="fluffyBrush";let c=new We({uniforms:a,vertexShader:cM,fragmentShader:t?uM:Km,side:Qe}),u=new Re(lM(),c);u.name="fluffyShells",u.frustumCulled=!1,l.add(u);let h=n.fringe,d=h.count*h.rows.length,f=pM(i?241:242),p=new We({uniforms:a,vertexShader:hM,fragmentShader:dM,side:Qe}),v=i?"L":"R",g=!tc[v],m=fM(v),_=new Ut(m,p,d);_.name="fluffyFringe",_.frustumCulled=!1;let x=new Float32Array(d*4),y=new Float32Array(d),R=new we,w=new bt,A=new yn,C=0;h.rows.forEach(([b,S],z)=>{for(let F=0;F<h.count;F++,C++){let L=(F+f()*.6+z*.5)/h.count*Math.PI*2,N=n.radius*b,U=n.depth*S;A.set(0,0,L-Math.PI/2),w.setFromEuler(A),w.multiply(new bt().setFromAxisAngle(new M(1,0,0),-.35+f()*.3)),R.compose(new M(Math.cos(L)*N,Math.sin(L)*N,U),w,new M(1,1,1)),_.setMatrixAt(C,R),x.set([f()*10,h.length[0]+f()*(h.length[1]-h.length[0]),h.width[0]+f()*(h.width[1]-h.width[0]),0],C*4),y[C]=1.05+z*.15}}),g&&(m.setAttribute("aCard",new xt(x,4)),m.setAttribute("aCardT",new xt(y,1))),l.add(_);let T=$m().index.count/3*n.shells+m.index.count/3*d;return l.userData.fluffy={shells:n.shells,cards:d,triangles:T},l}function pM(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var mM=typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)),gM=typeof window>"u"||mM?[]:window.__BW_S3__||((location.search.match(/[?&]s3=([^&]*)/)||[])[1]||"").split(","),oo=gM.includes("round6"),ir={camBlendEnd:-2,porthole:{bezel:{inner:1.98,outer:2.5,front:-.34,back:.16,round:.55},step:{inner:1.9,outer:2.04,z:.22,depth:.14},seal:{radius:1.99,tube:.075,z:.36},face:{inner:2.42,outer:9,z:-.2,dish:.35},rivets:{count:20,radius:2.82,size:.07},lavender:[.68,.6,.98],lilac:[.88,.8,1],shade:[.34,.26,.62]},flanges:{every:2.3,from:1,wall:2.03,lip:1.8,depth:.16,goldEvery:3,arc:[-56,236],face:[.03,.1,.62],deep:[.01,.03,.26],cyan:[.45,1,1.25],gold:[1,.74,.32]},round5:{camera:{off:[0,.45,-2.7],lookY:2.2,fov:72},vortex:{bands:1,twist:.12,warp:.6,crestLine:.45,lip:.2,ribs:.3,foam:.55,streaks:.35,deep:[0,.03,.32]}}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.round6;i&&Qm(ir,i)}function Qm(i,e){for(let t of Object.keys(e))e[t]&&typeof e[t]=="object"&&!Array.isArray(e[t])&&i[t]?Qm(i[t],e[t]):i[t]=e[t];return i}function e0({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,env:a}){let l=t.tunnelStart,c=t.tunnelEnd,u=n.WATER+n.AXIS_H,h={};for(let d of["r5Entrance","r4GlowRings"]){let f=i.getObjectByName(d);f&&(f.visible=!1)}return h.porthole=vM({scene:i,TR:e,TS:l,axisH:u,env:a,time:o}),h.flanges=_M({scene:i,TR:e,TS:l,TE:c,axisH:u,env:a,time:o}),h}function nc(i,e=[0,360],t=160){let n=Be.degToRad(e[0]),s=Be.degToRad(e[1]),r=i.length,o=[],a=[],l=[];for(let u=0;u<=t;u++){let h=n+(s-n)*u/t,d=Math.cos(h),f=Math.sin(h);for(let p=0;p<r;p++){let[v,g]=i[p];o.push(d*v,f*v,g),a.push(u/t,p/(r-1))}}for(let u=0;u<t;u++)for(let h=0;h<r-1;h++){let d=u*r+h;l.push(d,d+1,d+r,d+1,d+r+1,d+r)}let c=new tt;return c.setAttribute("position",new Xe(o,3)),c.setAttribute("uv",new Xe(a,2)),c.setIndex(l),c.computeVertexNormals(),c}function Jm(i,e,t,n,s,r=40){let o=(i+e)/2,a=(t+n)/2,l=(e-i)/2,c=(n-t)/2,u=Math.max(.1,s),h=[];for(let d=0;d<=r;d++){let f=Math.PI*2*d/r,p=Math.cos(f),v=Math.sin(f);h.push([o+l*Math.sign(p)*Math.pow(Math.abs(p),u),a+c*Math.sign(v)*Math.pow(Math.abs(v),u)])}return h}function t0(i,e,t){let n={P:new M,R:new M,U:new M,T:new M};i.frame(e,n);let s=new we().makeBasis(n.R,n.U,n.T);return s.setPosition(n.P.clone().addScaledVector(n.U,t)),s}function vM({scene:i,TR:e,TS:t,axisH:n,env:s,time:r}){let o=ir.porthole,a=new Ge;a.name="r6Porthole";let l=o.bezel,c=new st({color:16764782,metalness:1,roughness:.2,envMap:s||null,envMapIntensity:1.6,emissive:9064978,emissiveIntensity:.75}),u=new Re(nc(Jm(l.inner,l.outer,l.front,l.back,l.round),[0,360],192),c);u.name="r6Bezel";let h=o.step,d=new st({color:14192714,metalness:1,roughness:.3,envMap:s||null,envMapIntensity:1.3,emissive:5909e3,emissiveIntensity:.6}),f=new Re(nc(Jm(h.inner,h.outer,h.z-h.depth/2,h.z+h.depth/2,.4),[0,360],160),d),p=new Re(new Dt(o.seal.radius,o.seal.tube,16,160),new st({color:1716152,metalness:.2,roughness:.18,envMap:s||null,envMapIntensity:1.2,emissive:660576,emissiveIntensity:.6}));p.position.z=o.seal.z;let v=o.face,g=[];for(let w=0;w<=24;w++){let A=w/24,C=v.inner+(v.outer-v.inner)*A;g.push([C,v.z-v.dish*Math.sin(A*Math.PI*.5)])}let m=new We({uniforms:{uTime:r,uIn:{value:v.inner},uOut:{value:v.outer},uLav:{value:new oe(...o.lavender)},uLilac:{value:new oe(...o.lilac)},uShade:{value:new oe(...o.shade)}},vertexShader:xM,fragmentShader:yM,side:Qe}),_=new Re(nc(g,[0,360],160),m);_.name="r6Face";let x=o.rivets,y=new Ut(new Qt(1,16,10),c,x.count),R=new we;for(let w=0;w<x.count;w++){let A=(w+.5)/x.count*Math.PI*2,C=x.radius,T=v.z-v.dish*Math.sin((C-v.inner)/(v.outer-v.inner)*Math.PI*.5);R.compose(new M(Math.cos(A)*C,Math.sin(A)*C,T-.02),new bt,new M(x.size,x.size,x.size*.55)),y.setMatrixAt(w,R)}a.add(_,u,f,p,y),a.applyMatrix4(t0(e,t,n));for(let w of a.children)w.frustumCulled=!1;return i.add(a),{bezel:[l.inner,l.outer],face:[v.inner,v.outer],rivets:x.count}}var xM=`
varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() { vL = position; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }
`,yM=`
${nn}
uniform float uTime, uIn, uOut; uniform vec3 uLav, uLilac, uShade;
varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() {
  float r = length(vL.xy), a = atan(vL.y, vL.x), t = clamp((r - uIn) / (uOut - uIn), 0.0, 1.0);
  vec3 col = mix(uLav, uShade, smoothstep(0.15, 1.0, t) * 0.75);                         // lavender, deepening outward
  float grain = 0.9 + 0.1 * bwNoise(vec2(r * 38.0, a * 3.0)) + 0.04 * sin(r * 160.0);       // brushed concentric grain
  col *= grain;
  float sheen = pow(max(0.0, dot(normalize(vL.xy + 0.0001), normalize(vec2(-0.55, 0.85)))), 3.0) * (1.0 - t);   // up and to the left
  col = mix(col, uLilac * 1.15, sheen * 0.55);
  float bounce = exp(-pow((r - uIn) / 0.35, 2.0));                                           // cyan light from the tunnel
  col += vec3(0.25, 0.7, 1.0) * bounce * (0.45 + 0.15 * sin(a * 6.0 + uTime * 2.0));
  float groove = exp(-pow((r - (uIn + 0.95)) / 0.05, 2.0)) + exp(-pow((r - (uIn + 1.9)) / 0.07, 2.0));   // pressed rings
  col = mix(col, uShade * 0.8, groove * 0.5); col += uLilac * 0.25 * exp(-pow((r - (uIn + 1.0)) / 0.04, 2.0));
  float view = clamp(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0, 1.0);
  col *= 0.75 + 0.35 * view;
  gl_FragColor = vec4(col, 1.0);
}
`;function _M({scene:i,TR:e,TS:t,TE:n,axisH:s,env:r,time:o}){let a=ir.flanges,l=[];for(let v=t+a.from;v<n+3;v+=a.every)l.push(v);let c=[[a.wall+.05,-a.depth*.5],[a.wall,-a.depth*.5],[a.lip+.08,-a.depth*.42],[a.lip+.02,-a.depth*.3],[a.lip,0],[a.lip+.02,a.depth*.3],[a.lip+.08,a.depth*.42],[a.wall,a.depth*.5],[a.wall+.05,a.depth*.5]],u=nc(c,a.arc,128),h=new Float32Array(l.length),d=new Float32Array(l.length);l.forEach((v,g)=>{h[g]=v,d[g]=g%a.goldEvery===1?1:0}),u.setAttribute("aU",new xt(h,1)),u.setAttribute("aGold",new xt(d,1));let f=new We({uniforms:{uTime:o,uFace:{value:new oe(...a.face)},uDeep:{value:new oe(...a.deep)},uCyan:{value:new oe(...a.cyan)},uGold:{value:new oe(...a.gold)},uLip:{value:a.lip},uWall:{value:a.wall}},vertexShader:bM,fragmentShader:MM,side:Qe}),p=new Ut(u,f,l.length);return l.forEach((v,g)=>p.setMatrixAt(g,t0(e,v,s))),p.name="r6Flanges",p.frustumCulled=!1,i.add(p),{count:l.length,every:a.every,triangles:u.index.count/3}}var bM=`
attribute float aU; attribute float aGold; varying vec3 vL; varying vec3 vN; varying vec3 vW; varying float vU; varying float vGold;
void main() {
  vL = position; vU = aU; vGold = aGold;
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,MM=`
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
  col = mix(col, col + vec3(0.18, 0.08, 0.32), up * 0.5);
  float wave = 0.75 + 0.25 * sin(vU * 0.9 - uTime * 3.0);                                   // the glow pulses down the tunnel
  float sheen = pow(1.0 - facing, 2.0);
  vec3 lipCol = mix(uCyan * (0.8 + 0.5 * sheen), uGold * (1.0 + 0.8 * pow(abs(sin(a * 3.0 + uTime * 0.6)), 6.0)), vGold);
  col = mix(col, lipCol * wave, toLip);
  float caustic = pow(0.5 + 0.5 * sin(a * 14.0 + vU * 2.0 - uTime * 2.6) * sin(a * 9.0 - uTime * 1.7 + vU), 6.0);   // water light
  col += vec3(0.3, 0.8, 1.0) * caustic * 0.35 * front * (1.0 - toLip);
  gl_FragColor = vec4(col, 1.0);
}
`;var ut={vortex:{bands:1.6,twist:.05,flow:1.3,deep:[0,.05,.4],body:[0,.45,1],cyan:[.55,1,1],foam:.4,streaks:.2,far:[18,40],farGlow:1,farMix:.55,rainbow:.8,rainbowAt:13,warp:.35,crestLine:1.5,ribs:.45,lip:.55,violet:.75,gold:.8,caustic:.35},camera:{off:[0,1,-2.7],lookY:1.5,fov:64},foam:{white:.6,deep:[.01,.2,.88],aqua:[.12,.58,1]},foamBubbles:{per:2,inner:[.35,.62,1],deep:[.04,.24,.9],bright:1.05},hideFoamHeaps:!0,spray:{rate:450,size:[.03,.09]},grade:{contrast:1.32,saturation:1.4},path:{curve:.3},heart:{ahead:20,radius:3.5,core:1.3,halo:.9,rays:.45},entrance:{rim:1.88,rimTube:.11,inner:1.7,innerTube:.05,violet:.35,lavender:[.62,.55,.92]},hideRings:!1,bloom:{strength:.45,radius:.5,threshold:1.05},droplets:{count:700,near:3,far:22,radius:[.35,1.85],size:[.02,.06],swirl:.35,flow:2.2,scale:420,maxPx:14},bubbles:{count:64,du:[-1.4,14],x:[.3,1.6],h:[.2,2.6],r:[.04,.36],flow:1.6,film:1.7},fur:{shells:8,length:.05,density:260,tip:.5,halo:.45},crests:{spots:[[-1,0,.2,1.1],[1,0,.2,1.1],[-1.45,.05,1.1,1.3],[1.45,.05,1.1,1.3],[-.38,-.18,-.42,.75],[.4,-.18,-.4,.75],[-.85,-.2,-.9,.7],[.85,-.2,-.9,.7]],bob:.05,breathe:.08,opacity:.95},water:{middle:[0,.75,.9],side:[0,.18,.78],mix:.85,crest:.7,froth:1},contact:{radius:.42,height:.5,disc:1.15,wake:2.2,wakeBack:1.1},softBubbles:{count:40,box:[[-1.2,1.2],[0,1.3],[-1,2.2]],size:[.05,.3],big:7,rise:.25,drift:.9}};{let i=typeof window<"u"&&window.__BW_S3_TUNE__&&window.__BW_S3_TUNE__.round5,e=(t,n)=>{for(let s of Object.keys(n))n[s]&&typeof n[s]=="object"&&!Array.isArray(n[s])&&t[s]?e(t[s],n[s]):t[s]=n[s]};oo&&e(ut,ir.round5),i&&e(ut,i)}function i0({scene:i,TR:e,L:t,W:n,mascot:s,updaters:r,time:o,bloomPass:a}){let l=t.tunnelStart,c=n.WATER+n.AXIS_H,u={},h=()=>Be.smoothstep(s.z,l-.5,l+2.5);if(u.vortex=EM(i,o,l),u.entrance=zM({scene:i,TR:e,TS:l,axisH:c}),ut.hideRings)for(let d of["r4GlowRings","r4GoldRings"]){let f=i.getObjectByName(d);f&&(f.visible=!1)}{let d=i.getObjectByName("r4GoldRings");d&&(d.visible=!1)}if(u.droplets=CM({scene:i,TR:e,mascot:s,updaters:r,time:o,inside:h,axisH:c}),u.heart=SM({scene:i,TR:e,L:t,mascot:s,updaters:r,time:o,inside:h,axisH:c}),u.crests=LM({scene:i,TR:e,W:n,mascot:s,updaters:r,time:o,inside:h}),u.contact=UM({scene:i,TR:e,W:n,mascot:s,updaters:r,time:o,inside:h}),ut.hideFoamHeaps){let d=i.getObjectByName("r3Foam");d&&r.push(()=>{d.visible=!1})}if(u.softBubbles=HM({scene:i,TR:e,W:n,mascot:s,updaters:r,time:o,inside:h}),a){let d=ut.bloom,f=a.radius,p=a.threshold,v=null;r.push(()=>{let g=h();v===null&&(v={radius:f,threshold:p}),a.strength=a.strength+(d.strength-a.strength)*g,a.radius=v.radius+(d.radius-v.radius)*g,a.threshold=v.threshold+(d.threshold-v.threshold)*g}),u.bloom=d}return u}function EM(i,e,t){let n=i.getObjectByName("r4Lining");if(!n)return null;let s=ut.vortex,r={uTime:e,uStart:{value:t},uDeep:{value:new oe(...s.deep)},uBody:{value:new oe(...s.body)},uCyan:{value:new oe(...s.cyan)}};return n.material=new We({uniforms:r,vertexShader:wM,fragmentShader:TM,side:Qe}),n.name="r5Vortex",{replaced:"r4Lining"}}var wM=`
attribute vec2 aAU; varying vec2 vAU; varying float vDepth;
void main() { vAU = aAU; vec4 mv = modelViewMatrix * vec4(position, 1.0); vDepth = -mv.z; gl_Position = projectionMatrix * mv; }
`,TM=`
${nn}
uniform float uTime, uStart; uniform vec3 uDeep, uBody, uCyan;
varying vec2 vAU; varying float vDepth;
void main() {
  float a = vAU.x, u = vAU.y;
  float sw = bwFbm(vec2(a * 1.6 + u * 0.25 - uTime * 0.6, u * 0.5 - uTime * 0.3));
  float ph = (u - uStart) * ${ut.vortex.bands.toFixed(3)} + a * ${ut.vortex.twist.toFixed(3)} + sw * ${ut.vortex.warp.toFixed(3)} - uTime * ${ut.vortex.flow.toFixed(3)};
  float band = 0.5 + 0.5 * sin(ph * 6.2832);
  vec3 col = mix(uDeep, uBody, smoothstep(0.1, 0.6, band));                       // deep blue troughs, electric-blue bodies
  col = mix(col, uCyan, smoothstep(0.62, 0.86, band));                            // cyan crests
  col += uCyan * smoothstep(0.9, 0.97, band) * ${ut.vortex.crestLine.toFixed(3)};   // a thin glowing cyan line on each crest
  // the drum's own wall, fixed in place under the flowing water: ribs and occasional violet and gold bands
  float phS = (u - uStart) * ${ut.vortex.bands.toFixed(3)} + a * ${ut.vortex.twist.toFixed(3)}, fiS = floor(phS), frS = fract(phS);
  float lip = smoothstep(0.0, 0.07, frS) * (1.0 - smoothstep(0.07, 0.2, frS)), trough = smoothstep(0.55, 0.95, frS);
  col = col * (1.0 - ${ut.vortex.ribs.toFixed(3)} * trough) + uCyan * lip * ${ut.vortex.lip.toFixed(3)};
  float hv = fract(sin(fiS * 12.9898) * 43758.5453), hg = fract(sin(fiS * 78.233) * 12543.1);
  float vio = step(0.82, hv), gld = step(0.88, hg) * (1.0 - vio), bandM = smoothstep(0.15, 0.3, frS) * (1.0 - smoothstep(0.62, 0.78, frS));
  col = mix(col, vec3(0.55, 0.25, 1.0) * (0.8 + 0.6 * band), vio * bandM * ${ut.vortex.violet.toFixed(3)});
  col = mix(col, vec3(1.0, 0.72, 0.3) * (0.75 + 0.9 * pow(abs(sin(a * 2.0 + uTime * 0.7)), 8.0)), gld * bandM * ${ut.vortex.gold.toFixed(3)});
  float foam = smoothstep(0.84, 0.97, band) * smoothstep(0.35, 0.7, bwFbm(vec2(a * 7.0 - uTime * 0.8, u * 3.0 + uTime * 0.5)));
  float streak = smoothstep(0.7, 0.9, bwFbm(vec2(a * 14.0 + u * 1.5 - uTime * 1.5, u * 0.8)));
  col = mix(col, vec3(1.0), clamp(foam * ${ut.vortex.foam.toFixed(3)} + streak * ${ut.vortex.streaks.toFixed(3)} * band, 0.0, 1.0));
  vec2 g = vec2(a * 26.0, u * 3.5 - uTime * 0.7), c = floor(g);                   // twinkling glints in the water
  vec3 p3 = fract(vec3(c.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); float hs = fract((p3.x + p3.y) * p3.z);
  col += vec3(1.0) * step(0.93, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.6 + 0.4 * sin(uTime * 5.0 + hs * 40.0));
  { float door = 1.0 - smoothstep(uStart - 0.06, uStart + 0.06, u);           // pass A: the lavender metal shell up to the mouth
    float brushed = 0.82 + 0.18 * bwNoise(vec2(a * 40.0, u * 2.0)), sheen = pow(max(0.0, sin(a)), 6.0);
    vec3 lav = vec3(${ut.entrance.lavender.join(", ")}) * brushed + vec3(0.35, 0.3, 0.45) * sheen + vec3(0.2, 0.12, 0.3) * smoothstep(0.4, 0.0, u - uStart + 0.4);
    float vband = smoothstep(uStart, uStart + 0.05, u) * (1.0 - smoothstep(uStart + ${ut.entrance.violet.toFixed(2)} - 0.05, uStart + ${ut.entrance.violet.toFixed(2)}, u));
    col = mix(col, vec3(0.5, 0.28, 1.0) * (0.85 + 0.4 * band), vband * 0.85);
    col = mix(col, lav, door); }
  float far = smoothstep(${ut.vortex.far[0].toFixed(1)}, ${ut.vortex.far[1].toFixed(1)}, vDepth);   // the luminous heart
  vec2 cv = bwVoronoi(vec2(a * 5.0, u * 2.2 - uTime * 0.9));                      // water caustics playing over the wall
  col += vec3(0.35, 0.85, 1.0) * (1.0 - smoothstep(0.0, 0.08, cv.y - cv.x)) * ${ut.vortex.caustic.toFixed(3)} * (1.0 - far);
  col = mix(col, mix(vec3(0.55, 0.85, 1.0), vec3(1.0, 0.97, 1.0), band) * ${ut.vortex.farGlow.toFixed(3)}, far * ${ut.vortex.farMix.toFixed(3)});
  float rb = exp(-pow((vDepth - ${ut.vortex.rainbowAt.toFixed(1)}) / 2.0, 2.0)) * ${ut.vortex.rainbow.toFixed(3)};
  col += (0.5 + 0.5 * cos(6.2832 * (a / 6.2832 * 2.0 + vec3(0.0, 0.33, 0.67) + uTime * 0.1))) * rb * band;   // a pastel rainbow ring
  gl_FragColor = vec4(col, 1.0);
}
`;function SM({scene:i,TR:e,L:t,mascot:n,updaters:s,time:r,inside:o,axisH:a}){let l=ut.heart,c={uTime:r,uFade:{value:0},uCore:{value:l.core},uHalo:{value:l.halo},uRays:{value:l.rays}},u=new We({uniforms:c,vertexShader:AM,fragmentShader:RM,transparent:!0,depthWrite:!1,blending:on,side:Qe}),h=new Re(new fn(2,2),u);h.name="r5Heart",h.frustumCulled=!1,h.visible=!1,h.renderOrder=2,i.add(h);let d={P:new M,R:new M,U:new M,T:new M},f=new we;return s.push(()=>{let p=Math.min(n.z+l.ahead,t.tunnelEnd-1),v=o()*(1-Be.smoothstep(n.z+l.ahead,t.tunnelEnd+2,t.tunnelEnd+8));h.visible=v>.001,c.uFade.value=v,h.visible&&(e.frame(p,d),h.position.copy(d.P).addScaledVector(d.U,a),f.makeBasis(d.R,d.U,d.T.clone().negate()),h.quaternion.setFromRotationMatrix(f),h.scale.setScalar(l.radius))}),{ahead:l.ahead}}var AM="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",RM=`
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
`;function CM({scene:i,TR:e,mascot:t,updaters:n,time:s,inside:r,axisH:o}){let a=ut.droplets,l=a.count,c=Ld(3440),u=new Float32Array(l*3),h=new Float32Array(l),d=new Float32Array(l),f=new tt;f.setAttribute("position",new nt(u,3).setUsage(Sn)),f.setAttribute("aSize",new nt(h,1)),f.setAttribute("aSeed",new nt(d,1));let p=new We({uniforms:{uTime:s,uFade:{value:0},uScale:{value:a.scale},uMaxPx:{value:a.maxPx}},vertexShader:PM,fragmentShader:IM,transparent:!0,depthWrite:!1,blending:on}),v=new zi(f,p);v.name="r5Droplets",v.frustumCulled=!1,v.visible=!1,v.renderOrder=8,i.add(v);let g=R=>R[0]+c()*(R[1]-R[0]),m=[],_=(R,w)=>{R.u=t.z+(w?a.near+c()*(a.far-a.near):a.far-c()*2),R.a=c()*Math.PI*2,R.r=g(a.radius),R.w=(.5+c())*a.swirl*(c()<.5?-1:1)};for(let R=0;R<l;R++){let w={};_(w,!0),m.push(w),h[R]=g(a.size),d[R]=c()}let x=new M,y=!1;return n.push(R=>{let w=r();if(v.visible=w>0,p.uniforms.uFade.value=w,!v.visible){y=!1;return}if(!y){for(let A of m)_(A,!0);y=!0}for(let A=0;A<l;A++){let C=m[A];C.u-=a.flow*R*.3,C.a+=C.w*R,C.u<t.z+a.near-1.5&&_(C,!1);let T=o+Math.sin(C.a)*C.r;T<o-.6&&(C.a=-C.a),e.map(Math.cos(C.a)*C.r,Math.max(T,o-.5),C.u,x),u[A*3]=x.x,u[A*3+1]=x.y,u[A*3+2]=x.z}f.attributes.position.needsUpdate=!0}),{count:l}}var PM=`
attribute float aSize; attribute float aSeed; uniform float uTime, uScale, uMaxPx; varying float vSeed; varying float vTw;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vSeed = aSeed; vTw = 0.55 + 0.45 * sin(uTime * (3.0 + aSeed * 5.0) + aSeed * 30.0);
  gl_PointSize = min(aSize * uScale / max(-mv.z, 0.2), uMaxPx);   // small, sharp glints (big soft ones fogged the view)
  gl_Position = projectionMatrix * mv;
}
`,IM=`
uniform float uFade; varying float vSeed; varying float vTw;
void main() {
  vec2 p = gl_PointCoord - 0.5; float r = length(p);
  float core = 1.0 - smoothstep(0.0, 0.22, r), halo = 1.0 - smoothstep(0.1, 0.5, r);
  float star = (1.0 - smoothstep(0.0, 0.05, abs(p.x))) * (1.0 - smoothstep(0.1, 0.5, abs(p.y))) + (1.0 - smoothstep(0.0, 0.05, abs(p.y))) * (1.0 - smoothstep(0.1, 0.5, abs(p.x)));
  float glint = step(0.8, vSeed) * star * 0.8;
  vec3 col = vec3(0.85, 0.97, 1.0) * (core * 0.9 + halo * 0.12 + glint) * vTw;
  gl_FragColor = vec4(col * uFade, 1.0);
}
`;function Id(i){let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d"),s=Ld(i),r=(a,l,c,u,h,d)=>{let f=n.createRadialGradient(a-c*.25,l-c*.35,c*.1,a,l,c);f.addColorStop(0,u),f.addColorStop(.55,h),f.addColorStop(1,d),n.fillStyle=f,n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.fill()};for(let a=0;a<2;a++)for(let l=0;l<46;l++){let c=s(),u=18+c*220,h=Math.sin(c*Math.PI),d=256*(.78-.42*h*(.6+.4*s()))+(a?10:0),f=10+s()*26*(.5+h*.7);a===0?r(u,d,f*1.1,"rgba(225,240,255,0.95)","rgba(120,185,255,0.9)","rgba(40,110,235,0)"):r(u,d,f,"rgba(255,255,255,1)","rgba(232,244,255,0.97)","rgba(150,200,255,0)")}for(let a=0;a<70;a++){let l=20+s()*216,c=256*(.35+s()*.5),u=2+s()*6;n.strokeStyle="rgba(255,255,255,0.9)",n.lineWidth=1.2,n.beginPath(),n.arc(l,c,u,0,Math.PI*2),n.stroke(),n.fillStyle="rgba(90,160,255,0.35)",n.beginPath(),n.arc(l,c,u*.8,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.95)",n.beginPath(),n.arc(l-u*.35,c-u*.35,u*.25,0,Math.PI*2),n.fill()}for(let a=0;a<40;a++){let l=20+s()*216,c=256*(.08+s()*.35),u=1+s()*3.5;n.fillStyle="rgba(255,255,255,0.95)",n.beginPath(),n.arc(l,c,u,0,Math.PI*2),n.fill()}let o=new Vn(t);return o.colorSpace=wt,o}function LM({scene:i,TR:e,W:t,mascot:n,updaters:s,time:r,inside:o}){let a=ut.crests,l=new Ge;l.name="r5Crests",l.visible=!1,i.add(l);let c=[Id(49637),Id(49893),Id(50149)],u=a.spots.map(([d,f,p,v],g)=>{let m=new jn({map:c[g%3],transparent:!0,depthWrite:!1,opacity:a.opacity,fog:!1}),_=new ci(m);return _.center.set(.5,.15),_.renderOrder=5,_.frustumCulled=!1,l.add(_),{sp:_,dx:d,dh:f,du:p,s:v,ph:g*1.7}}),h=new M;return s.push(()=>{let d=o();if(l.visible=d>.01,!l.visible)return;let f=r.value;for(let p of u){e.map(n.x+p.dx,t.WATER+p.dh+Math.sin(f*2.3+p.ph)*a.bob,n.z+p.du,h),p.sp.position.copy(h);let v=1+Math.sin(f*3.1+p.ph*1.3)*a.breathe;p.sp.scale.set(p.s*v*1.25,p.s*v,1),p.sp.material.opacity=a.opacity*d}}),{cards:u.length}}function UM({scene:i,TR:e,W:t,mascot:n,updaters:s,time:r,inside:o}){let a=ut.contact,l={P:new M,R:new M,U:new M,T:new M},c={uTime:r,uFade:{value:0}},u=new Re(new pn(a.radius,a.radius*1.25,a.height,64,1,!0),new We({uniforms:c,vertexShader:n0,fragmentShader:DM,transparent:!0,depthWrite:!1,side:Qe})),h=new Re(new ds(a.disc,64).rotateX(-Math.PI/2),new We({uniforms:{...c,uR:{value:a.radius/a.disc}},vertexShader:n0,fragmentShader:FM,transparent:!0,depthWrite:!1}));u.renderOrder=6,h.renderOrder=4,u.frustumCulled=h.frustumCulled=!1;let d=new Ge;d.name="r5Contact",d.add(h,u),d.visible=!1,i.add(d),u.position.y=a.height*.32,h.position.y=.01,h.scale.set(1,1,a.wake),h.position.z=-a.wakeBack;let f=new we,p=new M;return s.push(()=>{let v=o();d.visible=v>.01,c.uFade.value=v,d.visible&&(e.frame(n.z,l),e.map(n.x,t.WATER,n.z,p),d.position.copy(p),f.makeBasis(l.R,l.U,l.T),d.quaternion.setFromRotationMatrix(f))}),{radius:a.radius}}var n0="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",DM=`
${nn}
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
}`,FM=`
${nn}
uniform float uTime, uFade, uR; varying vec2 vUv;
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p);
  float ring = smoothstep(uR * 0.7, uR, r) * (1.0 - smoothstep(0.55, 1.0, r));   // churn from the body outward, fading
  float n = bwFbm(vec2(atan(p.y, p.x) * 3.0, r * 6.0 + uTime * 1.6)) + 0.4 * bwFbm(p * 9.0 - vec2(0.0, uTime * 2.0));
  float foam = smoothstep(0.55, 0.95, n) * ring;
  vec3 col = mix(vec3(0.0, 0.6, 1.0), vec3(1.0), smoothstep(0.3, 0.8, foam * 1.4));
  gl_FragColor = vec4(col, clamp(foam * 1.3 + ring * 0.18, 0.0, 1.0) * uFade);
}`;function NM(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=128/2,s=t.createRadialGradient(n,n,n*.55,n,n,n*.98);s.addColorStop(0,"rgba(180,220,255,0.04)"),s.addColorStop(.6,"rgba(160,140,255,0.16)"),s.addColorStop(.85,"rgba(120,230,255,0.35)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.beginPath(),t.arc(n,n,n*.98,0,Math.PI*2),t.fill();let r=t.createLinearGradient(0,0,128,128);["rgba(255,140,220,0.55)","rgba(140,200,255,0.55)","rgba(150,255,210,0.5)","rgba(255,240,150,0.5)"].forEach((a,l)=>r.addColorStop(l/3,a)),t.strokeStyle=r,t.lineWidth=128*.035,t.beginPath(),t.arc(n,n,n*.9,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=128*.015,t.beginPath(),t.arc(n,n,n*.94,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.ellipse(n*.62,n*.55,n*.16,n*.09,-.7,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.6)",t.beginPath(),t.arc(n*1.35,n*1.38,n*.06,0,Math.PI*2),t.fill();let o=new Vn(e);return o.colorSpace=wt,o}function HM({scene:i,TR:e,W:t,mascot:n,updaters:s,time:r,inside:o}){let a=ut.softBubbles,l=Ld(11582238),c=NM(),u=new Ge;u.name="r5SoftBubbles",u.visible=!1,i.add(u);let h=v=>v[0]+l()*(v[1]-v[0]),d=[];for(let v=0;v<a.count;v++){let g=new ci(new jn({map:c,transparent:!0,depthWrite:!1,fog:!1}));g.renderOrder=7,g.frustumCulled=!1,u.add(g);let m=v<a.big;d.push({sp:g,x:m?(v%2?.9:-1)+l()*.3:h(a.box[0]),h:m?.05+l()*.25:h(a.box[1]),du:m?-.9-l()*.3:h(a.box[2]),s:m?.28+l()*.12:h(a.size),w:l()*6})}let f=new M,p=null;return s.push(v=>{let g=o();if(u.visible=g>.01,!u.visible){p=null;return}let m=r.value;for(let _ of d)p!==null&&(_.h+=a.rise*v,_.du-=a.drift*v*.3),(_.h>a.box[1][1]+.3||_.du<a.box[2][0]-.4)&&(_.h=h([0,.3]),_.du=h([.5,a.box[2][1]]),_.x=h(a.box[0])),e.map(n.x+_.x+Math.sin(m*1.3+_.w)*.05,t.WATER+_.h,n.z+_.du,f),_.sp.position.copy(f),_.sp.scale.setScalar(_.s*2),_.sp.material.opacity=g;p=m}),{count:d.length}}function zM({scene:i,TR:e,TS:t,axisH:n}){let s=ut.entrance,r={P:new M,R:new M,U:new M,T:new M};e.frame(t,r);let o=new Ge;o.name="r5Entrance";let a=new st({color:15909995,metalness:.8,roughness:.32,emissive:8014356,emissiveIntensity:.8}),l=new st({color:14260821,metalness:.8,roughness:.35,emissive:5910544,emissiveIntensity:.7}),c=new Re(new Dt(s.rim,s.rimTube,20,128),a),u=new Re(new Dt(s.inner,s.innerTube,12,128),l);return u.position.z=.12,o.add(c,u),o.position.copy(r.P).addScaledVector(r.U,n),o.quaternion.setFromRotationMatrix(new we().makeBasis(r.R,r.U,r.T)),i.add(o),{at:t}}function Ld(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var BM={ringStep:.85,ringIn:2,ringOut:2.5,hazards:[[6,1],[6.7,-1],[16.6,-1],[18.8,1],[26,1],[26.7,-1]],deco:[[11.2,1,52],[21.8,-1,50],[31.5,1,55]],brushR:1,brushX:1.62,brushY:.9,turnIn:24,spin:2.2,bubbles:46,cluster:.03,showAhead:18,showBehind:6},ic={ringColours:[[1,.36,.8],[.62,.42,1],[.16,.88,1],[.95,.45,.95],[1,.74,.26]],sparkle:.955,bubbles:22,bubbleAngle:[28,152],bubbleR:[1.5,1.95],bubbleMax:.3,clearOut:1.15,hazardWarn:[7.5,3],hazardWidth:.34,hazardMix:.8,grade:{vibrance:.25,knee:.62,roll:1.6},bloom:.22,wallDeep:[[.1,.08,.46],[.58,.38,.98]],brushBlue:[.62,.66,1],brushBlueMix:.45,brushPink:[1,.5,.82]};async function a0({scene:i,TR:e,L:t,W:n,camera:s,updaters:r,mascot:o,bump:a,brushBytes:l,waterSheets:c,soap:u,loaderParse:h,drumMeshes:d,round2:f}){let p=f?ic:null,v=f&&f.hooks||{},g=f&&f.round3?un:null,m=f&&f.round4?_n:null,_=m&&f.round5?ut:null,x=!!m,y={rings:0,brushes:0,bubbles:0,panelsHidden:0,waterCopy:!1},R=BM,w=t.tunnelStart,A=t.tunnelEnd,C=n.WATER+n.AXIS_H,T={value:0},b={P:new M,R:new M,U:new M,T:new M};{let O=[];for(let ce=w+.6;ce<A-.6+(p?4.4:0);ce+=R.ringStep)O.push(ce);let j=new Ks(R.ringIn,R.ringOut,112,1),ve=new We({uniforms:{uTime:T,uIn:{value:R.ringIn},uOut:{value:R.ringOut},uSpark:{value:p?p.sparkle:.9}},vertexShader:GM,fragmentShader:g?WM(g):c0,transparent:!0,depthWrite:!1,blending:on,side:Qe}),de=new Ut(j,ve,O.length),V=p?(g||p).ringColours.map(ce=>new oe(...ce)):[new oe(.5,.22,1),new oe(1,.3,.78),new oe(.12,.85,1),new oe(.45,.65,1)],ee=new we,pe=new Float32Array(O.length);O.forEach((ce,Se)=>{e.mapMatrix(new we().makeTranslation(0,C,ce),ee),de.setMatrixAt(Se,ee),de.setColorAt(Se,V[Se%V.length]),pe[Se]=ce}),j.setAttribute("aU",new xt(pe,1)),de.frustumCulled=!1,de.renderOrder=3,de.name="s4Rings",i.add(de),y.rings=O.length;let re=i.getObjectByName("tunnelDecor"),xe=0;if(re&&re.traverse(ce=>{if(!ce.isInstancedMesh)return;let Se=ce.geometry.parameters||{};ce.geometry.type==="PlaneGeometry"&&Math.abs(Se.width-.62)<.001&&(ce.visible=!1,y.panelsHidden++,xe=ce.count)}),re&&xe&&re.traverse(ce=>{ce.isInstancedMesh&&ce.visible&&ce.count===xe&&ce.material&&ce.material.metalness===1&&(ce.visible=!1,y.panelsHidden++)}),p&&re){let ce=new Map,Se=0;re.traverse(De=>{if(!De.isMesh||De.isInstancedMesh||!De.material||De.material.metalness<.9)return;let ie={};if(De.material.color.getHSL(ie),!(ie.h<.06||ie.h>.18)){if(!ce.has(De.material)){let se=De.material.clone();se.emissive=new oe(1,.68,.18),se.emissiveIntensity=.45,se.roughness=Math.min(se.roughness,.3),ce.set(De.material,se)}De.material=ce.get(De.material),Se++}}),y.goldGlow=Se}}let S=new Map;for(let O of d||[]){let j=O.material;if(!S.has(j)){let ve=j.clone(),de=j.onBeforeCompile,V=j.customProgramCacheKey.bind(j);ve.onBeforeCompile=(ee,pe)=>{de.call(j,ee,pe),ee.fragmentShader=ee.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          { float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
            vec3 deep = mix(vec3(${(p?(g||p).wallDeep[0]:[.06,.08,.42]).map(re=>re.toFixed(3)).join(", ")}), vec3(${(p?(g||p).wallDeep[1]:[.42,.36,.95]).map(re=>re.toFixed(3)).join(", ")}), smoothstep(0.05, 0.75, l));
            diffuseColor.rgb = mix(diffuseColor.rgb * vec3(0.5, 0.55, 0.95), deep, 0.55); }`)},ve.customProgramCacheKey=()=>V()+"|s4-deep"+(g?"3":p?"2":""),S.set(j,ve)}O.material=S.get(j)}y.drumMaterialsTinted=S.size;let z=[],F=null;f&&f.tripoBrush&&(await h(await(await fetch("models/brush_p2.glb")).arrayBuffer())).scene.traverse(j=>{j.isMesh&&!F&&(F=j)});let L=O=>{let j=F.material.clone();return j.onBeforeCompile=ve=>{ve.vertexShader=ve.vertexShader.replace("void main() {",`varying vec3 vBrushP;
void main() {
  vBrushP = position;`),ve.fragmentShader=ve.fragmentShader.replace("void main() {",`varying vec3 vBrushP;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  { float lum = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114)), c = normalize(vBrushP).z;
    vec3 mid = ${O?"vec3(0.06, 0.12, 0.85)":"vec3(1.0, 0.3, 0.68)"}, ring = vec3(1.0, 0.95, 0.98), outer = vec3(1.0, 0.32, 0.7);
    vec3 band = c > 0.84 ? mid : (c > 0.55 ? ring : outer);
    diffuseColor.rgb = band * clamp(0.35 + 0.95 * lum / 0.62, 0.0, 1.4); }`)},j.customProgramCacheKey=()=>"tripoBrush"+O,new Re(F.geometry,j)};if(l){let O=await h(l),j=null;O.scene.traverse(_e=>{_e.isMesh&&!j&&(j=_e)});let ve=j.geometry,de=ve.attributes.position,V=ve.attributes.color,ee=ve.index.array,pe=[],re=new oe;for(let _e=0;_e<ee.length;_e+=3){let Q=ee[_e],ue=ee[_e+1],me=ee[_e+2],Le=(de.getX(Q)+de.getX(ue)+de.getX(me))/3,Te=(de.getY(Q)+de.getY(ue)+de.getY(me))/3,I=Math.hypot(Le,Te);re.setRGB((V.getX(Q)+V.getX(ue)+V.getX(me))/3,(V.getY(Q)+V.getY(ue)+V.getY(me))/3,(V.getZ(Q)+V.getZ(ue)+V.getZ(me))/3);let E={};re.getHSL(E);let B=E.h>.07&&E.h<.17&&E.s>.35||E.h>.66&&E.h<.84&&E.s<.45&&E.l>.55;I>.96||Te<-.58&&B||Te<-.86||pe.push(Q,ue,me)}let xe=VM(ve,pe,R.cluster);p&&XM(xe,2,.6),y.brushTriangles=xe.index.count/3,y.brushTrianglesDelivered=ee.length/3;let ce=new st({vertexColors:!0,roughness:.7,metalness:.15,side:Qe}),Se=p?`
  totalEmissiveRadiance += vec3(1.0, 0.88, 0.97) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.5) * 0.4;`:"";p&&(ce.roughness=.85);let De=p?`{ vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
        diffuseColor.rgb = mix(c, vec3(${p.brushBlue.join(", ")}) * (0.6 + 0.6 * dot(c, vec3(0.333))), blue * ${p.brushBlueMix}); }`:"";ce.onBeforeCompile=_e=>{_e.fragmentShader=_e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+De).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+Se)},ce.customProgramCacheKey=()=>"s4:brush"+(p?"2":""),g&&s0(ce,!1,Se);let ie=new st({color:16762194,metalness:1,roughness:.2,emissive:4860416,emissiveIntensity:.5}),se=ce.clone();se.onBeforeCompile=_e=>{_e.fragmentShader=_e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        { vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
          diffuseColor.rgb = mix(c, vec3(${p?p.brushPink.join(", "):"1.0, 0.42, 0.78"}) * (${p?"0.62 + 0.6":"0.5 + 0.7"} * dot(c, vec3(0.333))), blue * 0.92); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+Se)},se.customProgramCacheKey=()=>"s4:brushPink"+(p?"2":""),g&&s0(se,!0,Se);let D=(_e,Q,ue,me)=>{e.frame(_e,b);let Le=new Ge,Te,I;if(me)Te=Q*R.brushX,I=R.brushY;else{let Ie=Be.degToRad(ue),he=1.95;Te=Q*Math.cos(Ie)*he,I=C+Math.sin(Ie)*he}Le.position.copy(b.P).addScaledVector(b.R,Te).addScaledVector(b.U,I);let E=b.T.clone().negate(),B=b.R.clone().multiplyScalar(-Q),W=E.multiplyScalar(Math.cos(Be.degToRad(R.turnIn))).addScaledVector(B,Math.sin(Be.degToRad(R.turnIn))).normalize(),X=new we().lookAt(new M,W.clone().negate(),b.U);Le.quaternion.setFromRotationMatrix(X);let q=new Re(xe,Q>0?se:ce);q.scale.setScalar(R.brushR/.95);let ge=new Ge;if(ge.add(q),Le.add(ge),m){let Ie=F?L(Q<0):x?jm(Q>0,{balls:!!_}):OM(Q>0,q.scale.x);x&&Ie.scale.setScalar(q.scale.x),ge.add(Ie),q.visible=!1}let be=new Re(new pn(.09,.09,1.1,16),ie);be.rotation.x=Math.PI/2,be.position.z=-.75,Le.add(be),Le.name="s4Brush",i.add(Le);let Me={holder:Le,spinner:ge,u:_e,side:Q,hazard:me,hit:!1,dir:Q*(me?1:.6),base:Le.position.clone(),out:b.R.clone().multiplyScalar(Q),cleared:!1,clear:0,bonk:0};return z.push(Me),Me};for(let[_e,Q]of R.hazards)D(_e,Q,0,!0);for(let[_e,Q,ue]of R.deco)D(_e,Q,ue,!1);y.brushes=z.length,y.hazards=R.hazards.length}let N=[];v.clearBrushes=(O,j)=>{let ve=0;for(let de of z)de.hazard&&!de.cleared&&de.u>=O&&de.u<=j&&(de.cleared=!0,ve++,v.pop&&v.pop(de.holder.position));return ve},v.hazards=()=>z.filter(O=>O.hazard).map(O=>({u:O.u,side:O.side,cleared:O.cleared})),r.push((O,j,ve)=>{T.value=j;for(let V of z){let ee=V.u-o.z;V.holder.visible=o.z>w-14&&ee<R.showAhead&&ee>-R.showBehind,V.cleared&&o.z>V.u+R.showBehind&&(V.cleared=!1);let pe=V.cleared?1:0,re=m?Be.smoothstep(ee,m.emerge[0],m.emerge[1])*m.emerge[2]:0;if(V.clear!==pe||m){V.clear!==pe&&(V.clear=V.holder.visible?Be.clamp(V.clear+Math.sign(pe-V.clear)*O/.35,0,1):pe);let xe=V.clear*V.clear*(3-2*V.clear);V.holder.position.copy(V.base).addScaledVector(V.out,xe*(p?p.clearOut:0)+re)}V.bonk=Math.max(0,V.bonk-O),V.holder.visible&&(V.spinner.rotation.z+=R.spin*V.dir*O*(1-.7*V.clear+5*V.bonk))}if(k&&k.forEach((V,ee)=>{let pe=U[ee];V.z=pe.cleared?0:1}),ve!=="running")return;let de=o;for(let V of z)if(V.hazard){if(Math.abs(de.z-V.u)>1.25){de.z>V.u+1.5&&(V.hit=!1);continue}if(!(V.hit||V.cleared||de.air&&de.yAbs-n.surface(t,de.x,de.z,j)>2.2)&&V.side*de.x>.33){V.hit=!0;let ee=a(V.side);N.push({t:+j.toFixed(2),u:V.u,side:V.side,lane:de.lane,knocked:ee!==!1}),ee===!1&&(V.bonk=.5)}}}),y.hits=N;let U=z.filter(O=>O.hazard),k=p?U.map(O=>new yt(O.u,n.laneX(O.side>0?0:2),1,0)):null;for(;k&&k.length<6;)k.push(new yt(-999,0,0,0));if(u){let O=p?p.bubbles:R.bubbles,j=l0(23307),ve=new Qt(1,26,16),de=new mn;de.index=ve.index,de.setAttribute("position",ve.attributes.position),de.setAttribute("normal",ve.attributes.normal);let V=new Float32Array(O*4),ee=new Float32Array(O*4),pe=new M;for(let Se=0;Se<O;Se++){let De=w+1.5+j()*(A-w-3),ie=Be.degToRad(-10+j()*200),se=1.05+j()*.85;p&&(ie=Be.degToRad(p.bubbleAngle[0]+(ie/Math.PI*180+10)/200*(p.bubbleAngle[1]-p.bubbleAngle[0])),se=p.bubbleR[0]+(se-1.05)/.85*(p.bubbleR[1]-p.bubbleR[0])),e.map(Math.cos(ie)*se,C+Math.sin(ie)*se,De,pe);let D=.06+Math.pow(j(),2.2)*.42;V.set([pe.x,pe.y,pe.z,p?.05+(D-.06)*(p.bubbleMax-.05)/.42:D],Se*4),ee.set([j()*6.28,j()<.3?.08:0,.04,0],Se*4)}de.setAttribute("inst",new xt(V,4)),de.setAttribute("motion",new xt(ee,4)),de.instanceCount=O;let re={uTime:T,uMotion:{value:1},uAvoid:{value:new M(0,-99,0)},uCentreAlpha:{value:.035},uFilm:{value:1.3}},xe=new We({uniforms:re,vertexShader:u.vertex,fragmentShader:u.fragment,transparent:!0,depthWrite:!1,blending:cn,blendSrc:gn,blendDst:$t}),ce=new Re(de,xe);ce.frustumCulled=!1,ce.renderOrder=5,ce.name="s4Bubbles",i.add(ce),r.push(()=>{re.uAvoid.value.copy(o.root.position)}),y.bubbles=O}let H=(c||[]).find(O=>(O.geometry.computeBoundingBox(),O.geometry.boundingBox.min.z>w-5)),K="  vec3 lit = col * (0.8 + 0.3 * NdotL);";if(H&&H.material.fragmentShader.includes(K)){let O=H.material,j=O.clone();j.uniforms=O.uniforms,p&&(O.uniforms.uS4Haz={value:k},O.uniforms.uS4Warn={value:new M(...p.hazardWarn,p.hazardWidth)},j.polygonOffset=!0,j.polygonOffsetFactor=-1,j.polygonOffsetUnits=-4),j.fragmentShader=(p?`uniform vec4 uS4Haz[6]; uniform vec3 uS4Warn;
`:"")+O.fragmentShader.replace(K,p?g?r0.replace(K,KM()+(m?ZM(_):"")+K):r0:`  if (inDrum > 0.0) {   // Screen 4 tunnel look (?s3=tunnel)
    vec2 toM = xz - uPlayer.xz; float rM = length(toM * vec2(1.0, 0.85));
    float collar = exp(-pow(max(0.0, rM - 0.42) / 0.42, 2.0));
    float behindM = clamp(-toM.y / 3.2, 0.0, 1.0);
    float trailV = exp(-pow((abs(toM.x) - (0.45 + behindM * 0.95)) / 0.17, 2.0)) * step(toM.y, 0.2) * (1.0 - behindM);
    float st = bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - flowT * 0.5));
    foam = max(foam, smoothstep(0.28, 0.72, (collar + trailV * 0.85) * (0.7 + 0.6 * st)) * inDrum);
    col = mix(col, mix(uShallow, uTurq, 0.55), 0.35 * inDrum);
  }
`+K),p&&(j.fragmentShader=j.fragmentShader.replace(o0,jM+o0)),H.material=j,y.waterCopy=!0,p&&(y.warnShader=j.fragmentShader.includes("a brush's warning"))}return p&&(y.round2=qM({scene:i,round2:f,mascot:o,updaters:r,time:T,TS:w})),g&&(y.round3=qm({scene:i,TR:e,L:t,W:n,mascot:o,updaters:r,time:T,soap:u,round4:_?{...m,bubbles:_.bubbles,foam:{...m.foam,..._.foam},foamBubbles:{...m.foamBubbles,..._.foamBubbles}}:m||!1})),m&&(y.round4=Ym({scene:i,TR:e,L:t,W:n,updaters:r,time:T,env:f.env,mascot:o,hide:[i.getObjectByName("s4Rings"),i.getObjectByName("r3Swirl"),...d||[]]})),_&&(y.round5=i0({scene:i,TR:e,L:t,W:n,mascot:o,updaters:r,time:T,bloomPass:f.bloomPass})),_&&oo&&(y.round6=e0({scene:i,TR:e,L:t,W:n,mascot:o,updaters:r,time:T,env:f.env,bloomPass:f.bloomPass})),y}var Ss={uR3Pink:{value:new oe},uR3White:{value:new oe},uR3Royal:{value:new oe},uR3Deep:{value:new oe},uR3Tufts:{value:26},uR3Core:{value:.45}},oa=null,Ud={};function OM(i,e){let t=_n.pompom;if(!oa){oa=new Qt(1,10,8);let v=oa.attributes.position,g=new M;for(let m=0;m<v.count;m++){g.fromBufferAttribute(v,m);let _=1+.16*Math.sin(g.x*7.1+g.y*3.3)*Math.sin(g.z*5.7-g.y*4.1);g.multiplyScalar(_),v.setXYZ(m,g.x,g.y,g.z)}oa.computeVertexNormals()}let n=i?"L":"R";if(!Ud[n]){let v=new st({color:16777215,roughness:.92,metalness:0});v.onBeforeCompile=g=>{g.vertexShader=`varying vec3 vTuft;
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
    totalEmissiveRadiance += diffuseColor.rgb * (${t.glow.toFixed(3)} + ${t.whiteLift.toFixed(3)} * whiteness) + vec3(1.0, 0.92, 0.98) * pow(edge, 2.0) * ${t.sheen.toFixed(3)}; }`)},v.customProgramCacheKey=()=>"s4:tuft4c",Ud[n]=v}let s=t.count+t.rim,r=new Ut(oa,Ud[n],s),o=new we,a=new bt,l=new M,c=new M,u=new oe,h=new M,d=l0(i?1953:1954),f=Math.PI*(3-Math.sqrt(5)),p=v=>{let g=i?t.left:t.right;v+=(d()-.5)*.06;for(let m of g)if(v<=m[0])return m[1][Math.floor(d()*m[1].length)];return g[g.length-1][1][0]};for(let v=0;v<s;v++){let g,m;if(v<t.count){let x=(v+.5)/t.count;g=Math.acos(1-x*(1-Math.cos(Be.degToRad(t.cap)))),m=v*f}else g=Be.degToRad(t.cap+4+d()*10),m=(v-t.count)/t.rim*Math.PI*2+d()*.2;h.set(Math.sin(g)*Math.cos(m),Math.sin(g)*Math.sin(m),Math.cos(g)),c.set(h.x*t.radius,h.y*t.radius,h.z*t.radius*t.depth-t.radius*t.depth*.35),a.setFromUnitVectors(new M(0,1,0),h);let _=t.size*(.8+d()*.4)*(v<t.count?1:1.15);l.set(_,_*t.long,_),o.compose(c,a,l),r.setMatrixAt(v,o),u.setRGB(...p(g/Be.degToRad(t.cap))).multiplyScalar(.9+d()*.18),r.setColorAt(v,u)}return r.scale.setScalar(e),r.name="r4PomPom",r.frustumCulled=!1,r}var kM=`float r3h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float r3n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(r3h(i), r3h(i + vec2(1, 0)), f.x), mix(r3h(i + vec2(0, 1)), r3h(i + vec2(1, 1)), f.x), f.y); }
`;function s0(i,e,t){let n=un.brush;Ss.uR3Pink.value.setRGB(...n.pink),Ss.uR3White.value.setRGB(...n.white),Ss.uR3Royal.value.setRGB(...n.royal),Ss.uR3Deep.value.setRGB(...n.deep),Ss.uR3Tufts.value=n.tufts,Ss.uR3Core.value=n.core,typeof window<"u"&&(window.__bwR3=Object.assign(window.__bwR3||{},{brushU:Ss,ROUND3:un})),i.onBeforeCompile=s=>{Object.assign(s.uniforms,Ss),s.vertexShader=`varying vec3 vR3Obj;
`+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vR3Obj = position;`),s.fragmentShader=`varying vec3 vR3Obj; uniform vec3 uR3Pink, uR3White, uR3Royal, uR3Deep; uniform float uR3Tufts, uR3Core;
`+kM+s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
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
  totalEmissiveRadiance += diffuseColor.rgb * 0.35;`+t)},i.customProgramCacheKey=()=>"s4:brush3"+(e?"L":"R")}function VM(i,e,t){let n=i.attributes.position,s=i.attributes.color,r=new Map,o=[],a=new Map,l=p=>{if(a.has(p))return a.get(p);let v=Math.floor(n.getX(p)/t)+","+Math.floor(n.getY(p)/t)+","+Math.floor(n.getZ(p)/t),g=r.get(v);g===void 0&&(g=o.length,r.set(v,g),o.push([0,0,0,0,0,0,0]));let m=o[g];return m[0]+=n.getX(p),m[1]+=n.getY(p),m[2]+=n.getZ(p),s&&(m[3]+=s.getX(p),m[4]+=s.getY(p),m[5]+=s.getZ(p)),m[6]++,a.set(p,g),g},c=[];for(let p=0;p<e.length;p+=3){let v=l(e[p]),g=l(e[p+1]),m=l(e[p+2]);v!==g&&g!==m&&v!==m&&c.push(v,g,m)}let u=o.length,h=new Float32Array(u*3),d=new Float32Array(u*3);o.forEach((p,v)=>{h.set([p[0]/p[6],p[1]/p[6],p[2]/p[6]],v*3),d.set([p[3]/p[6],p[4]/p[6],p[5]/p[6]],v*3)});let f=new tt;return f.setAttribute("position",new nt(h,3)),s&&f.setAttribute("color",new nt(d,3)),f.setIndex(c),f.computeVertexNormals(),f.computeBoundingSphere(),f}function l0(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var GM=`
attribute float aU;
varying float vR; varying vec3 vC; varying float vU; varying float vA; varying float vDepth;
void main() {
  vR = length(position.xy); vA = atan(position.y, position.x); vU = aU;
  vC = instanceColor;
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,c0=`
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
`;function WM(i){let e=i.ringFar;return c0.replace("float fade = 1.0 - 0.45 * smoothstep(6.0, 26.0, vDepth);",`float fade = 1.0 - ${(.45*(1-e.keep)).toFixed(3)} * smoothstep(6.0, 26.0, vDepth);`).replace("gl_FragColor = vec4(col, 1.0);",`float far = smoothstep(${e.from.toFixed(2)}, ${e.to.toFixed(2)}, vDepth);
  col = mix(col * ${i.ringGlow.toFixed(3)}, vec3(0.85, 0.95, 1.0) * (core + glow) * wave * ${e.bright.toFixed(3)}, far * ${e.white.toFixed(3)});
  gl_FragColor = vec4(col, 1.0);`)}function XM(i,e,t){let n=i.attributes.color,s=i.index.array,r=n.count,o=Array.from({length:r},()=>new Set);for(let l=0;l<s.length;l+=3){let c=s[l],u=s[l+1],h=s[l+2];o[c].add(u).add(h),o[u].add(c).add(h),o[h].add(c).add(u)}let a=Float32Array.from(n.array);for(let l=0;l<e;l++){let c=new Float32Array(a.length);for(let u=0;u<r;u++){let h=0,d=0,f=0,p=0;for(let v of o[u])h+=a[v*3],d+=a[v*3+1],f+=a[v*3+2],p++;if(!p){c.set(a.subarray(u*3,u*3+3),u*3);continue}c[u*3]=a[u*3]*(1-t)+h/p*t,c[u*3+1]=a[u*3+1]*(1-t)+d/p*t,c[u*3+2]=a[u*3+2]*(1-t)+f/p*t}a=c}n.array.set(a),n.needsUpdate=!0}function qM({round2:i,mascot:e,updaters:t,time:n,TS:s}){let r={exit:!1,grade:!1},{exitLight:o,grade:a,bloomPass:l}=i;o&&o[0]&&(o[0].material=new We({uniforms:{uTime:n},vertexShader:YM,fragmentShader:$M}),o[1]&&o[1].material.color.setRGB(.12,.16,.3),r.exit=!0);let c=ic.grade,u=i.round5?{..._n.grade,...ut.grade}:_n.grade;a&&a.material.fragmentShader.includes("if (uOpen > 0.0) {")&&(a.uniforms.uS4Grade={value:0},a.material.fragmentShader=a.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uS4Grade;").replace("if (uOpen > 0.0) {",`if (uS4Grade > 0.0) {   // ?s3=round2: inside the drum, rich and never washed out
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
          c.rgb = mix(c.rgb, max(h, 0.0), uS4Grade); }`:""}
      }
      if (uOpen > 0.0) {`),a.material.needsUpdate=!0,r.grade=!0);let h=l?l.strength:0;return t.push(()=>{let d=Be.smoothstep(e.z,s-.5,s+2.5);r.grade&&(a.uniforms.uS4Grade.value=d),l&&(l.strength=h+(ic.bloom-h)*d)}),r}var YM="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",$M=`
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
`,r0=`  float s4Haz = 0.0;
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
`,o0="  float dist = length(cameraPosition - vWorld);",ZM=i=>{let e=i&&i.water?{..._n.water,...i.water}:_n.water;return`  if (inDrum > 0.0) {   // ?s3=round4
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
`},KM=()=>{let i=un.water;return`  if (inDrum > 0.0) {   // ?s3=round3
    col = mix(col, vec3(${i.azure.join(", ")}), ${i.azureMix.toFixed(3)} * inDrum);
    vec2 b3 = bwVoronoi(xz * vec2(5.5, 3.8) - vec2(0.0, flowT * 0.42));
    float patch3 = smoothstep(0.42, 0.72, bwFbm(xz * vec2(1.7, 0.75) - vec2(0.0, flowT * 0.35)));
    float near3 = exp(-pow(max(0.0, length(xz - uPlayer.xz) - 0.5) / 1.8, 2.0));
    float lace3 = 1.0 - smoothstep(0.02, 0.11, b3.y - b3.x);
    foam = max(foam, clamp(lace3 * patch3 * (0.45 + 0.55 * near3) + smoothstep(0.62, 0.9, patch3) * near3 * 0.6, 0.0, 1.0) * ${i.foam.toFixed(3)} * inDrum * (1.0 - s4Haz));
  }
`},jM=`  lit = mix(lit, vec3(1.0, 0.12, 0.5) * (0.85 + 0.25 * NdotL), clamp(s4Haz * 1.7, 0.0, 1.0) * ${ic.hazardMix.toFixed(2)});   // ?s3=round2: a brush's warning
`;var JM=typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)),qn=typeof window>"u"||JM?[]:window.__BW_S3__||((location.search.match(/[?&]s3=([^&]*)/)||[])[1]||"").split(","),Ke=Object.fromEntries(["castle","entrance","machinery","brush","bubbles"].map(i=>[i,qn.includes(i)||qn.includes("all")]));Ke.edges=qn.includes("edges");Ke.cine=qn.includes("cine");Ke.tunnel=qn.includes("tunnel");Ke.paint=qn.includes("paint");Ke.round2=qn.includes("round2");Ke.round3=qn.includes("round3");Ke.round6=qn.includes("round6");Ke.round5=qn.includes("round5")||Ke.round6;Ke.round4=qn.includes("round4")||Ke.round5;Ke.fluffy=Ke.round4&&qn.includes("fluffy");Ke.tripobrush=Ke.round5&&qn.includes("tripobrush");Ke.round4&&(Ke.round3=!0);Ke.round3&&(Ke.round2=!0);Ke.round2&&(Ke.paint=!Ke.round3,Ke.tunnel=!0);if(Ke.round3)for(let i of["castle","entrance","machinery","brush","bubbles","edges","cine"])Ke[i]=!0;Ke.paint&&(Ke.castle=!0,Ke.edges=!0);var d0=Object.values(Ke).some(Boolean),Fd={castle:"models/s3_castle.glb",entrance:"models/s3_entrance.glb",machinery:"models/s3_machinery.glb",brush:"models/s3_brush.glb"},Ei={castle:{scale:10,archCentreY:-.27,front:2.75,glow:.32,envI:1.25,gold:{hue:43,sat:.92,val:1.1,metal:.55},pink:{hue:292,mix:.45,sat:.62},cyan:{sat:.55,val:1.06,glow:.55}},entrance:{holeRadius:2.05,holeCentre:[-.01,-.29],z:2.6,glow:.25,envI:1.25,gold:{hue:43,sat:.92,val:1.08,metal:.6}},machinery:{scale:1.66,at:[-2.73,.4,-7],yaw:180,glow:.3,envI:1.25,gold:{hue:43,sat:.92,val:1.1,metal:.55},cyan:{sat:.6,val:1.06,glow:.5}},brush:{scale:1.2,at:[2.32,.165,-7],yaw:180,glow:.22,rough:.72,metal:.15,envI:1},bubbles:{extra:[[475,526,14,79,0,.02],[428,478,13,15,.06,.03],[522,612,11,20,0,.02]],centreAlpha:.035}},ao={brush:{scale:1.51,at:[2.62,.23,-4.9]},film:1.4,edge:{profile:[[-.08,-.05],[0,.07],[.1,.13],[.22,.1],[.3,-.02],[.33,-.8]],alpha:.45,foam:1}},f0={far:2.35,towers:-1.5,brush:-4.9,machinery:-6.5,groundBelow:.35,tear:1.35,cutZ:-14,fadeFrom:-12,fadeTo:-6},sr={up:.099,forward:.818,pitch:.3,fov:1.0375,blend:.9},As=typeof window<"u"&&window.__BW_S3_TUNE__||{};for(let i of Object.keys(As))Ei[i]&&(Ei[i]={...Ei[i],...As[i]});As.edges&&Object.assign(ao,As.edges);As.cine&&Object.assign(sr,As.cine);As.paint&&Object.assign(f0,As.paint);Ke.edges&&(Ei.brush={...Ei.brush,...ao.brush});var aa={};for(let i of Object.keys(Fd))Ke[i]&&(aa[i]=p0(Fd[i]));Ke.tunnel&&(aa.brushT=aa.brush||p0(Fd.brush));async function p0(i){try{if(window.__BW_MODEL_FORMAT__==="json")throw new Error("json");let e=await fetch(i);if(!e.ok)throw new Error(e.status);return await e.arrayBuffer()}catch{try{let e=await(await fetch(i+".json")).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}catch{return null}}}async function m0({scene:i,env:e,axisY:t,tunnelStart:n,oldCastle:s,sideMachinery:r,staticBubbles:o,camera:a,updaters:l,mascot:c,L:u,W:h,renderPass:d,rollers:f,grade:p,bloomPass:v,outputPass:g,waterSheets:m,TR:_,bumpMascot:x,drumMeshes:y,exitLight:R,r2:w}){let A={},C=new bs,T=async L=>{let N=await aa[L];return N?C.parseAsync(N,""):null},b=L=>{L&&(L.visible=!1)},S=(L,N)=>{let U=null;return L&&L.children.forEach(k=>k.traverse(H=>{!U&&H.isMesh&&H.material&&H.material.customProgramCacheKey&&H.material.customProgramCacheKey()===N&&(U=k)})),U};if(Ke.castle){let L=await T("castle");if(!L)A.castle="not found";else{let N=Ei.castle,U=N.scale,k=new Ge;k.name="s3Castle",k.rotation.y=Math.PI,k.scale.setScalar(U),k.position.set(0,t-N.archCentreY*U,N.front+.236*U),L.scene.traverse(H=>{H.isMesh&&(H.material=Dd(H.material,e,"castle",N))}),k.add(L.scene),i.add(k),b(s),i.traverse(H=>{H.isMesh&&H.material&&H.material.uniforms&&H.material.uniforms.uWall&&b(H)}),b(S(i.getObjectByName("entranceDecor"),"decor:crown")),A.castle={scale:U,...h0(k,t,n)}}}if(Ke.entrance){let L=await T("entrance");if(!L)A.entrance="not found";else{let N=Ei.entrance,U=N.holeRadius/.52,k=new Ge;k.name="s3Entrance",k.rotation.y=Math.PI,k.scale.setScalar(U),k.position.set(N.holeCentre[0]*U,t-N.holeCentre[1]*U,N.z),L.scene.traverse(H=>{H.isMesh&&(H.material=Dd(H.material,e,"entrance",N))}),k.add(L.scene),i.add(k),b(i.getObjectByName("washerDoor")),A.entrance={scale:+U.toFixed(3),...h0(k,t,n)}}}let z=(L,N,U)=>{let k=new Ge;k.rotation.y=Be.degToRad(N.yaw),k.scale.setScalar(N.scale),k.position.set(...N.at),L.scene.traverse(K=>{K.isMesh&&(K.material=U(K.material))}),k.add(L.scene),i.add(k);let H=u0(k,n);for(let K=0;K<40&&H<1.18;K++)k.position.x+=.03*Math.sign(k.position.x),H=u0(k,n);return{holder:k,lane:+H.toFixed(2),at:k.position.toArray().map(K=>+K.toFixed(2))}};if(Ke.machinery){let L=await T("machinery");if(!L)A.machinery="not found";else{let N=Ei.machinery,U=z(L,N,H=>Dd(H,e,"machinery",N));U.holder.name="s3Machinery";let k=i.getObjectByName("scenery");if(k)for(let H of k.children)H.position.distanceTo(new M(-2.25,-.3,-10))<.01&&b(H);A.machinery={scale:N.scale,at:U.at,nearestToLanes:U.lane}}}if(Ke.brush){let L=await T("brush");if(!L)A.brush="not found";else{let N=Ei.brush,U=z(L,N,H=>{let K=new st({vertexColors:!0,roughness:N.rough,metalness:N.metal,envMap:e,envMapIntensity:N.envI,side:Qe});return K.onBeforeCompile=O=>{O.fragmentShader=O.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${(+N.glow).toFixed(3)};`)},K.customProgramCacheKey=()=>"s3:brush:"+JSON.stringify(N),K});U.holder.name="s3Brush",b(r);let k=i.getObjectByName("scenery");if(k)for(let H of k.children)H.position.distanceTo(new M(2.05,-.55,-12))<.01&&b(H);A.brush={scale:N.scale,at:U.at,nearestToLanes:U.lane,spins:!1}}}let F=Ke.cine&&d?sE({camera:a,renderPass:d,updaters:l}):null;if(F&&(A.cine={...sr}),Ke.bubbles&&o&&(A.bubbles=QM({scene:i,staticBubbles:o,camera:F||a,updaters:l,mascot:c})),Ke.edges&&u&&h&&(A.edges=tE({scene:i,L:u,W:h,env:e,updaters:l})),Ke.tunnel&&_&&x&&(A.tunnel=await a0({scene:i,TR:_,L:u,W:h,camera:a,updaters:l,mascot:c,bump:x,brushBytes:await aa.brushT,waterSheets:m,soap:{vertex:g0,fragment:v0},loaderParse:L=>C.parseAsync(L.slice(0),""),drumMeshes:y,round2:Ke.round2?{exitLight:R,grade:p,bloomPass:v,hooks:w,round3:Ke.round3,round4:Ke.round4,round5:Ke.round5,fluffy:Ke.fluffy,tripoBrush:Ke.tripobrush,env:e}:null})),Ke.paint&&p&&g&&(A.paint=await rE({scene:i,camera:a,updaters:l,tunnelStart:n,sideMachinery:r,staticBubbles:o,rollers:f,grade:p,bloomPass:v,outputPass:g,waterSheets:m,L:u,W:h})),Ke.edges&&a){let L=[];i.traverse(U=>{/^s3(Castle|Entrance|Machinery|Brush|IcyEdge|Bubbles)/.test(U.name)&&L.push(U)});let N=!1;l.push(()=>{let U=a.position.z,k=N?U>n:U>n+1.5;if(k!==N){N=k;for(let H of L)H.visible=!N}}),A.hiddenInTunnel=L.length}return A}function u0(i,e){i.updateMatrixWorld(!0);let t=1/0,n=new M;return i.traverse(s=>{if(!s.isMesh)return;let r=s.geometry.attributes.position;for(let o=0;o<r.count;o+=2)n.fromBufferAttribute(r,o).applyMatrix4(s.matrixWorld),n.z<e&&n.y<2.6&&(t=Math.min(t,Math.abs(n.x)))}),t}function QM({scene:i,staticBubbles:e,camera:t,updaters:n,mascot:s}){let r=Ei.bubbles,o=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,a={uTime:{value:0},uMotion:{value:o?0:1},uAvoid:{value:new M(0,-99,0)},uCentreAlpha:{value:r.centreAlpha},uFilm:{value:Ke.edges?ao.film:1}},l=new We({uniforms:a,vertexShader:g0,fragmentShader:v0,transparent:!0,depthWrite:!1,depthTest:!0,blending:cn,blendSrc:gn,blendDst:$t}),c=new Qt(1,40,24),u=(_,x)=>{let y=new mn;return y.index=c.index,y.setAttribute("position",c.attributes.position),y.setAttribute("normal",c.attributes.normal),y.setAttribute("inst",_),y.setAttribute("motion",x),y},h=_=>{let x=new Re(_,l);return x.frustumCulled=!1,x.renderOrder=5,x.name="s3Bubbles",i.add(x),x},d=e.geometry,f=h(u(d.attributes.inst,d.attributes.motion)),p=r.extra.length,v=u(new xt(new Float32Array(p*4),4),new xt(new Float32Array(p*4),4));v.instanceCount=0,h(v);let g=new Vt(40,.5,.1,200),m=!1;return n.push((_,x,y)=>{if(a.uTime.value=x,s&&a.uAvoid.value.copy(s.root.position),e.visible=!1,f.geometry.instanceCount=d.instanceCount,m||y!=="intro")return;m=!0,g.fov=t.aspect>=.5?t.fov:Be.radToDeg(2*Math.atan(Math.tan(Be.degToRad(t.fov)/2)*t.aspect/.5)),g.position.copy(t.position),g.quaternion.copy(t.quaternion),g.updateProjectionMatrix(),g.updateMatrixWorld(!0);let R=g.getWorldDirection(new M),w=new M,A=v.attributes.inst,C=v.attributes.motion,T=b=>1076/(2*b*Math.tan(Be.degToRad(g.fov)/2));r.extra.forEach(([b,S,z,F,L,N],U)=>{w.set(b/538*2-1,1-S/1076*2,.5).unproject(g).sub(g.position).normalize();let k=g.position.clone().addScaledVector(w,z/w.dot(R));A.setXYZW(U,k.x,k.y,k.z,F/T(z)),C.setXYZW(U,1.7+U*2.3,L,N,0)}),v.instanceCount=p,A.needsUpdate=C.needsUpdate=!0}),{spheres:!0,extra:p,reducedMotion:o}}var g0=`
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
`,v0=`
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
`;function h0(i,e,t){i.updateMatrixWorld(!0);let n=1/0,s=1/0,r=new M;return i.traverse(o=>{if(!o.isMesh)return;let a=o.geometry.attributes.position;for(let l=0;l<a.count;l++)r.fromBufferAttribute(a,l).applyMatrix4(o.matrixWorld),s=Math.min(s,r.z),r.y>-.2&&r.z<t+30&&(n=Math.min(n,Math.hypot(r.x,r.y-e)))}),{nearestToAxis:+n.toFixed(2),frontZ:+s.toFixed(2)}}function Dd(i,e,t,n){let s=new st({map:i.map,metalnessMap:i.metalnessMap,roughnessMap:i.roughnessMap,normalMap:i.normalMap||null,metalness:1,roughness:1,envMap:e,envMapIntensity:n.envI,emissive:16777215,emissiveMap:i.map,emissiveIntensity:n.glow,side:Qe}),r=n.gold||{},o=n.pink||null,a=n.cyan||null,l=u=>(+u).toFixed(4),c=`
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
      return smoothstep(165.0, 178.0, h) * (1.0 - smoothstep(212.0, 222.0, h)) * smoothstep(0.3, 0.5, hsv.y); }`:""}`;return s.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("void main() {",`${eE}
${c}
float s3Gold = 0.0;
void main() {`).replace("#include <map_fragment>",`#include <map_fragment>
  s3Gold = s3GoldMask(diffuseColor.rgb);
  diffuseColor.rgb = s3Grade(diffuseColor.rgb);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
  metalnessFactor *= mix(1.0, ${l(r.metal??1)}, s3Gold);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance = s3Grade(totalEmissiveRadiance)${a?` * (1.0 + ${l(a.glow)} * s3CyanMask(totalEmissiveRadiance))`:""};`)},s.customProgramCacheKey=()=>"s3:"+t+":"+JSON.stringify(n),s}var eE=`
vec3 s3Rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 s3Hsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;function tE({scene:i,L:e,W:t,env:n,updaters:s}){let r={wallsHidden:0,railsHidden:0},o=e.startZ-24,a=-.6;i.traverse(d=>{if(!d.isMesh||d.isInstancedMesh||!d.material||!d.material.color)return;let f=d.material.color.getHex(),p=d.geometry;p.boundingBox||p.computeBoundingBox();let v=p.boundingBox;v.max.z-v.min.z>20&&v.min.z<o+1&&Math.abs((v.min.x+v.max.x)/2)<1.8&&(f===15128831||f===9425663?(d.visible=!1,r.wallsHidden++):p.type==="TubeGeometry"&&(d.visible=!1,r.railsHidden++))});let l={uTime:{value:0},uAlpha:{value:ao.edge.alpha},uFoam:{value:ao.edge.foam}},c=new We({uniforms:l,vertexShader:nE,fragmentShader:iE,transparent:!0,depthWrite:!1,side:Qe,blending:cn,blendSrc:gn,blendDst:$t}),u=ao.edge.profile,h=u.length;for(let d of[-1,1]){let f=[],p=[],v=[],g=0;for(let x=o;x<=a+1e-6;x+=.25,g++){let y=t.baseHeight(e,d*t.SLIDE.half,x);u.forEach(([R,w],A)=>{f.push(d*(t.SLIDE.half+R),y+w,x),p.push(A/(h-1))})}for(let x=0;x<g-1;x++)for(let y=0;y<h-1;y++){let R=x*h+y,w=R+h;v.push(R,w,R+1,w,w+1,R+1)}let m=new tt;m.setAttribute("position",new Xe(f,3)),m.setAttribute("across",new Xe(p,1)),m.setIndex(v),m.computeVertexNormals();let _=new Re(m,c);_.renderOrder=2,_.name="s3IcyEdge",i.add(_)}return s.push((d,f)=>{l.uTime.value=f}),r.icyEdges=2,r}var nE=`
attribute float across;
varying vec3 vW; varying vec3 vN; varying float vAcross;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vAcross = across;
  gl_Position = projectionMatrix * viewMatrix * w; }
`,iE=`
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
`;function sE({camera:i,renderPass:e,updaters:t}){let n=new Vt(i.fov,i.aspect,i.near,i.far),s=new M,r=new bt,o=new M(1,0,0),a=null;return t.push((l,c,u)=>{u==="running"&&a===null&&(a=c);let h=a===null?0:c-a,d=u==="intro"?1:a===null?0:1-Be.smoothstep(h,0,sr.blend);if(d<=0){e.camera!==i&&(e.camera=i);return}i.getWorldDirection(s),s.y=0,s.normalize(),n.position.copy(i.position).addScaledVector(s,sr.forward*d),n.position.y+=sr.up*d,n.quaternion.copy(i.quaternion).multiply(r.setFromAxisAngle(o,-Be.degToRad(sr.pitch)*d)),n.fov=i.fov*(1+(sr.fov-1)*d),n.aspect=i.aspect,n.near=i.near,n.far=i.far,n.updateProjectionMatrix(),n.updateMatrixWorld(!0),e.camera=n}),n}async function rE({scene:i,camera:e,updaters:t,tunnelStart:n,sideMachinery:s,staticBubbles:r,rollers:o,grade:a,bloomPass:l,outputPass:c,waterSheets:u,L:h,W:d}){let f=f0,p=await new vs().loadAsync("ui/s3_paint_backdrop.png");p.colorSpace=wt,p.anisotropy=4;let v=[i.getObjectByName("entranceDecor"),i.getObjectByName("scenery"),s,r,...(o||[]).filter(xe=>xe.centre.z<n).map(xe=>xe.g)].filter(Boolean);for(let xe of v)xe.visible=!1;let g=48,m=96,_=-40,x=578,y=-80,R=1156,w=(g+1)*(m+1),A=new Float32Array(w*3),C=new Float32Array(w*2),T=[];for(let xe=0;xe<=m;xe++)for(let ce=0;ce<=g;ce++){let Se=xe*(g+1)+ce;C[Se*2]=_+(x-_)*ce/g,C[Se*2+1]=y+(R-y)*xe/m}for(let xe=0;xe<m;xe++)for(let ce=0;ce<g;ce++){let Se=xe*(g+1)+ce,De=Se+g+1;T.push(Se,De,Se+1,Se+1,De,De+1)}let b=new tt;b.setAttribute("position",new nt(A,3)),b.setAttribute("stage",new nt(C,2)),b.setIndex(T);let S={map:{value:p},uFade:{value:1},uBanner:{value:0},uPanel:{value:0}},z=new We({uniforms:S,vertexShader:oE,fragmentShader:aE,transparent:!0,depthWrite:!0,depthTest:!0,blending:cn,blendSrc:zo,blendDst:$t,blendSrcAlpha:Eh,blendDstAlpha:$t}),F=new Re(b,z);F.name="s3Paint",F.frustumCulled=!1,F.renderOrder=-1,F.visible=!1,i.add(F),a.uniforms.uS3Paint={value:0},a.material.fragmentShader=a.material.fragmentShader.replace("uniform sampler2D tDiffuse;","uniform sampler2D tDiffuse; uniform float uS3Paint;").replace("gl_FragColor = max(c, 0.0);",`{ vec4 s3o = texture2D(tDiffuse, vUv); c.rgb = mix(c.rgb, s3o.rgb, clamp(1.0 - s3o.a, 0.0, 1.0) * uS3Paint); c.a = s3o.a; }
      gl_FragColor = max(c, 0.0);`),a.material.needsUpdate=!0,c.uniforms.uS3Paint={value:0},c.material.fragmentShader=c.material.fragmentShader.replace("uniform sampler2D tDiffuse;",`uniform sampler2D tDiffuse;
		uniform float uS3Paint;`).replace("gl_FragColor = texture2D( tDiffuse, vUv );","vec4 s3o = texture2D( tDiffuse, vUv ); gl_FragColor = s3o;").replace("// color space",`gl_FragColor.rgb = mix( gl_FragColor.rgb, s3o.rgb, clamp( 1.0 - s3o.a, 0.0, 1.0 ) * uS3Paint ); gl_FragColor.a = 1.0;
			// color space`),c.material.needsUpdate=!0;let L={uPaintCut:{value:0},uPaintZ:{value:f.cutZ}},N=(u||[]).find(xe=>(xe.geometry.computeBoundingBox(),xe.geometry.boundingBox.min.z<n-5)),U=!1;if(N&&N.material.fragmentShader.includes("  vec2 xz = vTrack;")){let xe=N.material,ce=xe.clone();ce.uniforms={...xe.uniforms,...L},ce.fragmentShader=`uniform float uPaintCut; uniform float uPaintZ;
`+xe.fragmentShader.replace("  vec2 xz = vTrack;",`  vec2 xz = vTrack;
  if (uPaintCut > 0.5 && abs(xz.x) > uSlideHalf + 0.62 && xz.y > uPaintZ && xz.y < uTunnel.x) discard;`),N.material=ce,U=!0}let k=a.material.fragmentShader.includes("uS3Paint")&&c.material.fragmentShader.includes("s3o.rgb"),H=new Vt(40,.5,.1,200),K=new M,O=new M,j=(xe,ce,Se)=>{let De=Math.min(1,Math.max(0,(Se-xe)/(ce-xe)));return De*De*(3-2*De)},ve=(xe,ce,Se)=>{let De=D=>{let _e=xe.y+ce.y*D,Q=xe.z+ce.z*D;return _e<d.baseHeight(h,0,Math.min(Q,n-.5))-f.groundBelow},ie=.3,se=null;for(let D=.3;D<=Se;D+=.25){if(De(D)){se=D;break}ie=D}if(se===null)return Se;for(let D=0;D<20;D++){let _e=(ie+se)/2;De(_e)?se=_e:ie=_e}return se},de=new Float32Array(w),V=0,ee=!1,pe=null,re=null;return t.push((xe,ce,Se)=>{if(!ee&&Se==="intro"){ee=!0,H.fov=e.aspect>=.5?e.fov:Be.radToDeg(2*Math.atan(Math.tan(Be.degToRad(e.fov)/2)*e.aspect/.5)),H.position.copy(e.position),H.quaternion.copy(e.quaternion),H.updateProjectionMatrix(),H.updateMatrixWorld(!0);let D=H.position,_e=ue=>(ue-D.z)/Math.max(K.z,1e-4);for(let ue=0;ue<w;ue++){let me=C[ue*2],Le=C[ue*2+1];K.set(me/538*2-1,1-Le/1076*2,.5).unproject(H).sub(D).normalize();let Te=1-j(.8,1.3,((me-52)/120)**2+((Le-582)/135)**2),I=j(368,410,me)*j(395,430,Le)*(1-j(780,820,Le)),E=Math.min(1,1-j(60,95,me)+j(445,480,me))*j(50,80,Le)*(1-j(430,470,Le))*(1-Math.max(Te,I)),B=Math.max(.05,1-Math.max(Te,I,E)),X=1/((Te/_e(f.brush)+I/_e(f.machinery)+E/_e(f.towers)+B/_e(f.far))/(Te+I+E+B)),q=Math.max(Te,I,E);K.y<-1e-4&&(X=X*q+Math.min(X,ve(D,K,X))*(1-q)),O.copy(D).addScaledVector(K,X),de[ue]=X,A[ue*3]=O.x,A[ue*3+1]=O.y,A[ue*3+2]=O.z}let Q=[];for(let ue=0;ue<m;ue++)for(let me=0;me<g;me++){let Le=ue*(g+1)+me,Te=Le+g+1,I=[Le,Le+1,Te,Te+1].map(E=>de[E]);Math.max(...I)/Math.min(...I)<f.tear&&Q.push(Le,Te,Le+1,Le+1,Te,Te+1)}b.setIndex(Q),V=T.length/6-Q.length/6,b.attributes.position.needsUpdate=!0,b.computeBoundingSphere(),F.visible=!0}Se==="running"&&pe===null&&(pe=ce);let De=pe===null?-1:ce-pe,ie=De<0?0:j(0,.45,De);S.uBanner.value=ie,S.uPanel.value=ie,S.uFade.value=1-j(f.fadeFrom,f.fadeTo,e.position.z);let se=ee&&S.uFade.value>.001&&e.position.z<n;F.visible=se,z.depthWrite=S.uFade.value>.999,a.uniforms.uS3Paint.value=c.uniforms.uS3Paint.value=se?1:0,L.uPaintCut.value=se?1:0,l&&(se?re===null&&(re=l.enabled,l.enabled=!1):re!==null&&(l.enabled=re,re=null))}),{grid:[g,m],hidden:v.length,passesPatched:k,moatCut:U,depths:{...f},get tornCells(){return V}}}var oE=`
attribute vec2 stage;
varying vec2 vStage;
void main() { vStage = stage; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,aE=`
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
`;var wi=!(typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)));function rr(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var sc={1:"models/roller_candidate_1.glb",2:"models/roller_candidate_2.glb"},ca=typeof window>"u"?null:String(window.__BW_ROLLER__||(location.search.match(/[?&]roller=(\d)/)||[])[1]||"")||null,x0=lE()&&sc[ca]?cE(sc[ca]):null;function lE(){return!(typeof window<"u"&&(window.__BW_CLASSIC__||/[?&]classic(=|&|$)/.test(location.search)))}async function cE(i){try{if(window.__BW_MODEL_FORMAT__==="json")throw new Error("json");let e=await fetch(i);if(!e.ok)throw new Error(e.status);return await e.arrayBuffer()}catch{try{let e=await(await fetch(i+".json")).json(),t=atob(e.data),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}catch{return null}}}var uE={at:[-2.7,null,-6.4],yaw:-50,length:2.7,spin:-1.4,feetY:.4};function ua(i,e){let t=Math.random;Math.random=i;try{return e()}finally{Math.random=t}}async function M0(i,e){let t=Math.random;Math.random=i;try{return await e()}finally{Math.random=t}}var la=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function E0(i){let{scene:e,env:t,TR:n,L:s,W:r,mascot:o,camera:a,Particles:l,fxScale:c,waterU:u,grade:h,bubbles:d,rollers:f,sideMachinery:p,setSideMachinery:v,fur:g,mascotModel:m}=i,_=rr(377827),x=new Ge;x.name="openingLook",e.add(x);let y=r.WATER+r.AXIS_H,R=s.tunnelStart,w=[],A=new st({color:16762194,metalness:1,roughness:.17,envMap:t,envMapIntensity:1.55,emissive:4860416,emissiveIntensity:.45}),C=new st({color:15242798,metalness:1,roughness:.26,envMap:t,envMapIntensity:1.35,emissive:3808256,emissiveIntensity:.5}),T=new st({color:2759290,metalness:.1,roughness:.34,envMap:t,envMapIntensity:.9,emissive:1181247,emissiveIntensity:.5,side:Qe});if(Un.portal){let E=new Ge;E.name="washerDoor",E.position.set(0,y,0),x.add(E);let B=G=>(G.rotateX(Math.PI/2),G),W=new Re(new Dt(2.74,.25,28,140),A);W.position.z=2.72,E.add(W);let X=new Re(new Dt(3.02,.075,14,140),C);X.position.z=2.62,E.add(X);let q=new Re(new Dt(2.5,.06,12,140),C);q.position.z=2.98,E.add(q);let ge=new Ut(new Qt(.075,14,10),C,28),be=new we;for(let G=0;G<28;G++){let Ee=G/28*Math.PI*2;ge.setMatrixAt(G,be.makeTranslation(Math.cos(Ee)*2.76,Math.sin(Ee)*2.76,2.47))}E.add(ge);let Me=[[2.56,3.02],[2.47,3.12],[2.5,3.24],[2.41,3.36],[2.44,3.48],[2.35,3.6],[2.37,3.7],[2.27,3.8],[2.24,3.88]],Ie=B(new jr(Me.map(([G,Ee])=>new le(G,Ee)),140));E.add(new Re(Ie,T));let he=[new oe(.08,1,1.9),new oe(.4,1.35,2.1),new oe(.08,1,1.9)],fe=[];[[2.43,3.15],[2.39,3.4],[2.31,3.64]].forEach(([G,Ee],J)=>{let ae=new Lt({color:he[J].clone()}),Ne=new Re(new Dt(G,.022,8,140),ae);Ne.position.z=Ee,E.add(Ne),fe.push({mat:ae,base:he[J],u:Ee})});let ye=new We({uniforms:{uColor:{value:new oe(.25,.95,1.6)},uGain:{value:1}},vertexShader:"varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uGain; varying vec2 vP; void main() { float r = length(vP); float k = exp(-pow((r - 2.26) / 0.04, 2.0)); gl_FragColor = vec4(uColor * k * uGain, 1.0); }",transparent:!0,blending:on,depthWrite:!1,side:Qe}),Ce=new Re(new Ks(2.2,2.34,140,1),ye);Ce.position.z=3.87,Ce.renderOrder=3,E.add(Ce);let Ae=new We({uniforms:{uWall:{value:new oe(.66,.56,.93)},uShade:{value:new oe(.2,.13,.45)}},vertexShader:"varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uWall, uShade; varying vec2 vP;
        void main() {
          float r = length(vP);
          float shade = 1.0 - smoothstep(2.95, 3.35, r);                 // soft shadow next to the gold ring
          vec3 c = mix(uWall, uShade, shade * 0.55);
          c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);               // a little lighter toward the top
          c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));      // a dark outline right at the ring
          float a = 1.0 - smoothstep(3.55, 3.92, r);                     // fades into the castle's own wall
          gl_FragColor = vec4(c * a, a);
        }`,transparent:!0,depthWrite:!1,blending:cn,blendSrc:gn,blendDst:$t,side:Qe}),Je=new Re(new Ks(2.93,3.92,160,1),Ae);Je.position.z=.86,Je.renderOrder=1,E.add(Je);let je=new jn({map:vE(),color:new oe(2.2,2,1.6),transparent:!0,blending:on,depthWrite:!1}),ct=[];for(let G=0;G<7;G++){let Ee=.35+G*.36+_()*.2,J=new ci(je.clone());J.position.set(Math.cos(Ee)*2.9,Math.sin(Ee)*2.9,2.45),J.renderOrder=4,E.add(J),ct.push({sp:J,ph:_()*6.28,rate:1.3+_()*1.4})}w.push((G,Ee)=>{for(let J of fe)J.mat.color.copy(J.base).multiplyScalar(.82+.25*Math.sin(Ee*2.6-J.u*2.2));ye.uniforms.uGain.value=.8+.2*Math.sin(Ee*1.7);for(let J of ct){let ae=Math.pow(Math.max(0,Math.sin(Ee*J.rate+J.ph)),8);J.sp.scale.setScalar(.05+.42*ae),J.sp.material.opacity=ae}})}let b=new l(700);b.u.uScale=c;let S=new We({uniforms:{uTime:{value:0}},vertexShader:pE,fragmentShader:mE}),z=64,F=new Ut(gE(_),S,z);F.frustumCulled=!1,F.name="mascotFoam",x.add(F);let L=[];for(let E=0;E<z;E++){let B=E>=40,W=B?Math.PI+(_()<.5?-1:1)*(.55+_()*1.15):E/40*Math.PI*2+_()*.12;!B&&Math.abs((W-Math.PI+Math.PI*3)%(Math.PI*2)-Math.PI)<.6&&(W=Math.PI+(_()<.5?-1:1)*(.6+_()*.7));let X=B?.6+Math.pow(_(),.8)*.45:.42+_()*.08;L.push({a:W,r:X,s:B?.03+_()*.04:.055+_()*.05,ph:_()*6.28,spin:_()*6.28,outer:B,drift:_()})}let N=new bt,U=new yn,k=new M,H=new M,K=new we,O={P:new M,R:new M,U:new M,T:new M},j=o.x,ve={side:0,wall:0,puff:0,bow:0},de=E=>1-la(R-3.5,R-.8,E),V=(E,B)=>{let W=o,X=E-W.x,q=B-W.z,ge=W.speed/r.CRUISE,be=W.downhill||0,Me=Math.hypot(X,q*.85),Ie=la(-.3,.5,q),he=Math.exp(-(((Me-.6)/.17)**2))*(.06+.06*ge+.05*be)*(.55+.75*Ie),fe=-Math.exp(-Me*Me*9)*.04,ye=Math.min(1,Math.max(0,-q/(2.4+2.6*ge))),Ce=.6+ye*(.8+.7*ge),Ae=Math.exp(-(((Math.abs(X-W.xv*.12*ye)-Ce)/.15)**2))*(q<=0?1:0)*(1-ye)*(.02+.07*ge);return he+fe+Ae},ee=(E,B,W)=>r.surface(s,E,B,W)+V(E,B);w.push((E,B,W)=>{let X=o,q=W==="running",ge=Un.foam?de(X.z):0,be=r.surface(s,X.x,X.z,B)+r.FLOAT_H,Me=Math.max(0,X.yAbs-be),Ie=ge*(1-la(.08,.45,Me)),he=Math.min(1.4,X.speed/r.CRUISE);j+=(X.x-j)*Math.min(1,E*5);for(let fe=0;fe<z;fe++){let ye=L[fe],Ce=q?(B*(1.1+1.4*ye.drift)+ye.drift)%1:0,Ae=Ce*he*(ye.outer?.9:.5),je=(ye.outer?j:X.x)+Math.sin(ye.a)*ye.r*(1+.25*he*Ce),ct=X.z+Math.cos(ye.a)*ye.r*.85-Ae,G=ee(je,ct,B),Ee=Math.sin(B*2.3+ye.ph)*.015,J=q?Math.sin(Math.PI*Math.min(1,Ce*1.05))*.6+.4:1,ae=ye.s*Ie*J*(q?ye.outer?.5:.9:1)*(1+.12*Math.sin(B*1.7+ye.ph));n.frame(ct,O),H.copy(O.P).addScaledVector(O.R,je).addScaledVector(O.U,G+.01+ae*.3+Ee),U.set(ye.spin+B*.4,ye.ph+B*.3,0),N.setFromEuler(U),k.set(ae*1.25,ae*.8,ae*1.25),F.setMatrixAt(fe,K.compose(H,N,k))}if(F.instanceMatrix.needsUpdate=!0,S.uniforms.uTime.value=B,F.visible=Ie>.001,Ie>.01&&!X.air){for(ve.side+=(q?20+30*he:16)*Ie*E;ve.side>=1;ve.side--){let fe=_()<.5?-1:1,ye=(_()-.5)*1.4,Ce=X.x+fe*(.44+_()*.14),Ae=X.z+ye*.35,Je=r.surface(s,Ce,Ae,B);b.emitT(Ce,Je+.04,Ae,fe*(.4+_()*.7),1+_()*1.3,X.speed*.6+(_()-.5)*.5,.03+_()*.045,.45+_()*.35,0)}for(ve.puff+=(q?6:7)*Ie*E;ve.puff>=1;ve.puff--){let fe=Math.PI+(_()-.5)*2.6,ye=.5+_()*.35,Ce=X.x+Math.sin(fe)*ye,Ae=X.z+Math.cos(fe)*ye*.85,Je=r.surface(s,Ce,Ae,B);b.emitT(Ce,Je+.03,Ae,Math.sin(fe)*.12,.12+_()*.12,X.speed*.8,.12+_()*.12,.6+_()*.5,1,.08)}}if(Un.foam)for(ve.wall+=30*E;ve.wall>=1;ve.wall--){let fe=Math.min(R-1.2,X.z-2+_()*18);if(de(fe)<.5)continue;let ye=_()<.5?-1:1,Ce=ye*(r.SLIDE.half-.04),Ae=r.surface(s,Ce,fe,B);b.emitT(Ce,Ae+.05,fe,-ye*(.2+_()*.5),.8+_()*1.2,1.5+_()*2,.035+_()*.04,.4+_()*.3,0),_()<.25&&b.emitT(Ce-ye*.08,Ae+.03,fe,-ye*.1,.1,2,.1+_()*.08,.5+_()*.4,1,.05)}b.update(E)}),u&&(u.uOpen.value=Un.foam?1:0);let pe={uTime:{value:0},uAvoid:{value:new M(0,-99,0)}},re=new We({vertexShader:dE,fragmentShader:fE,uniforms:pe,transparent:!0,depthWrite:!1,blending:cn,blendSrc:gn,blendDst:$t}),xe=E=>{let B=new fn(2,2),W=new mn;W.index=B.index,W.attributes.position=B.attributes.position,W.attributes.uv=B.attributes.uv,W.setAttribute("inst",new xt(new Float32Array(E*4),4).setUsage(Sn)),W.setAttribute("motion",new xt(new Float32Array(E*4),4)),W.instanceCount=0;let X=new Re(W,re);return X.frustumCulled=!1,X.renderOrder=5,x.add(X),X},ce=null,Se=!1,De=new Vt(40,.5,.1,200),ie=[];if(Un.bubbles&&d){let E=d.geometry.attributes.inst,B=d.geometry.attributes.phase;for(let W=0;W<E.count;W++)E.getZ(W)>R-.5||(ie.push([E.getX(W),E.getY(W),E.getZ(W),E.getW(W),B.getX(W)]),E.setW(W,0));E.needsUpdate=!0,ce=xe(ie.length+_0.length)}let se=64,D=Un.bubbles?xe(se):null,_e=[];for(let E=0;E<se;E++)_e.push({a:Math.PI+(_()-.5)*3.8,r:.5+Math.pow(_(),1.3)*.7,s:.012+Math.pow(_(),2.2)*.04,ph:_()*6.28});let Q=20,ue=Un.foam?xe(Q):null,me=[];for(let E=0;E<Q;E++){let B=E<9,W=B?9:11,X=B?E:E-9,q=B?1.35:1.75,ge=Math.PI+((X+.5)/W*2-1)*q+(_()-.5)*.15;me.push({a:ge,r:B?.47+_()*.05:.6+_()*.08,s:B?.1+_()*.07:.05+_()*.045,lift:B?.22+_()*.3:.25+_()*.2,ph:_()*6.28,drift:_(),inner:B})}if(w.push((E,B,W)=>{if(pe.uTime.value=B,pe.uAvoid.value.copy(o.root.position),ce&&!Se&&W==="intro"){Se=!0;let X=a.aspect;De.fov=X>=.5?a.fov:Be.radToDeg(2*Math.atan(Math.tan(Be.degToRad(a.fov)/2)*X/.5)),De.position.copy(a.position),De.quaternion.copy(a.quaternion),De.updateProjectionMatrix(),De.updateMatrixWorld(!0);let q=De.getWorldDirection(new M),ge=new M,be=ce.geometry.attributes.inst,Me=ce.geometry.attributes.motion,Ie=0;for(let fe of ie)be.setXYZW(Ie,fe[0],fe[1],fe[2],fe[3]),Me.setXYZW(Ie,fe[4],0,.02,0),Ie++;let he=fe=>1076/(2*fe*Math.tan(Be.degToRad(De.fov)/2));for(let[fe,ye,Ce,Ae,Je,je]of _0){ge.set(fe/538*2-1,1-ye/1076*2,.5).unproject(De).sub(De.position).normalize();let ct=De.position.clone().addScaledVector(ge,Ce/ge.dot(q));be.setXYZW(Ie,ct.x,ct.y,ct.z,Ae/he(Ce)),Me.setXYZW(Ie,_()*6.28,Je,je,0),Ie++}ce.geometry.instanceCount=Ie,be.needsUpdate=Me.needsUpdate=!0}if(D){let X=o,q=de(X.z)*(X.air?0:1),ge=D.geometry.attributes.inst,be=D.geometry.attributes.motion;for(let Me=0;Me<se;Me++){let Ie=_e[Me],he=W==="running"?(B*.9+Ie.ph)%1*(X.speed/r.CRUISE):0,fe=j+Math.sin(Ie.a)*Ie.r,ye=X.z+Math.cos(Ie.a)*Ie.r*.85-he*1.2,Ce=ee(fe,ye,B);n.frame(ye,O),H.copy(O.P).addScaledVector(O.R,fe).addScaledVector(O.U,Ce+Ie.s*.9),ge.setXYZW(Me,H.x,H.y,H.z,Ie.s*q),be.setXYZW(Me,Ie.ph,0,0,-1)}D.geometry.instanceCount=se,ge.needsUpdate=!0,be.needsUpdate=!0}if(ue){let X=o,q=W==="running",ge=Math.min(1.4,X.speed/r.CRUISE),be=Math.max(0,X.yAbs-(r.surface(s,X.x,X.z,B)+r.FLOAT_H)),Me=de(X.z)*(1-la(.06,.35,be)),Ie=ue.geometry.attributes.inst,he=ue.geometry.attributes.motion;for(let fe=0;fe<Q;fe++){let ye=me[fe],Ce=q?(B*(.7+.6*ye.drift)+ye.drift)%1:0,Ae=Ce*ge*(ye.inner?.35:.6),Je=q?.55+.45*Math.sin(Math.PI*Math.min(1,Ce*1.1)):1,je=ye.inner?X.x:j,ct=1+.06*Math.sin(B*2.1+ye.ph),G=je+Math.sin(ye.a)*ye.r*(1+.15*ge*Ce),Ee=X.z+Math.cos(ye.a)*ye.r*.85-Ae,J=ye.s*Me*Je*ct;n.frame(Ee,O),H.copy(O.P).addScaledVector(O.R,G).addScaledVector(O.U,ee(G,Ee,B)+J*ye.lift),Ie.setXYZW(fe,H.x,H.y,H.z,J),he.setXYZW(fe,ye.ph,0,0,1)}ue.geometry.instanceCount=Q,ue.renderOrder=6,Ie.needsUpdate=!0,he.needsUpdate=!0}}),Un.brushes){if(v){let B={...Nd.machinery,at:[...Nd.machinery.at]},W=v(B);for(let X=0;X<20&&!(W>=b0);X++)B.at[0]+=.03,W=v(B);i.machineryInnerX=W}p&&p.traverse(B=>{B.isMesh&&(B.material=I(B.material,"machinery","face",B.geometry))}),f.filter(B=>B.centre.z<R).forEach((B,W)=>{let X=null;B.g.traverse(ge=>{ge.isMesh&&(!X||ge.geometry.attributes.position.count>X.geometry.attributes.position.count)&&(X=ge)}),X&&(X.material=I(X.material,"roller"+W,"roller",X.geometry));let q=Nd.rollers[W];q&&q.hide?B.g.visible=!1:q&&Le(B,q)})}function Le(E,B){let W=new Zt,X=new M,q=new M,ge=E.g.children[0];E.g.remove(ge),ge.updateMatrixWorld(!0),W.setFromObject(ge),W.getSize(X),W.getCenter(q),E.g.add(ge);let be=B.d/Math.max(X.x,X.z),Me=new M(...B.axis).normalize(),Ie=n.map(B.at[0],B.at[1],B.at[2]);E.m0=new we().compose(Ie,new bt().setFromUnitVectors(new M(0,1,0),Me),new M(be,be,be)).multiply(new we().makeTranslation(-q.x,-q.y,-q.z)),E.centre=Ie,E.axis=Me}if(Un.slide&&e.traverse(E=>{if(E.isMesh&&E.material&&E.material.isMeshStandardMaterial&&E.material.color.getHex()===15128831){let B=E.material.clone();B.color.set(9425663),B.roughness=.16,B.metalness=.1,B.envMapIntensity=1.35,B.emissive.set(1929176),B.emissiveIntensity=.35,E.material=B}}),Un.mascot&&m){let E=new M(...y0.stretch);m.scale.multiply(E),m.position.multiply(E),g&&(g.uSpike.value=y0.spike)}h&&(h.uniforms.uOpen.value=0),w.push(()=>{if(!h)return;let E=a.position.z;h.uniforms.uOpen.value=Un.light?1-la(-6,1.2,E):0});async function Te(){if(d0&&(window.__bwS3=await m0({scene:e,env:t,axisY:y,tunnelStart:R,oldCastle:i.castle,sideMachinery:p,staticBubbles:ce,camera:a,updaters:w,mascot:o,L:s,W:r,renderPass:i.renderPass,rollers:f,grade:h,bloomPass:i.bloomPass,outputPass:i.outputPass,waterSheets:i.waterSheets,TR:n,bumpMascot:i.bumpMascot,drumMeshes:i.drumMeshes,exitLight:i.exitLight,r2:i.r2})),!x0)return;let E=await x0;if(!E){i.rollerCandidate={file:sc[ca],error:"not found"};return}let B=await new bs().parseAsync(E,""),W=null;B.scene.traverse(Ue=>{Ue.isMesh&&!W&&(W=Ue)});let X=W.geometry,q=X.attributes.position,ge=X.index.array,be=ge.length/3,Me=Ue=>`${Math.round(q.getX(Ue)*1e4)},${Math.round(q.getY(Ue)*1e4)},${Math.round(q.getZ(Ue)*1e4)}`,Ie=new Map,he=new Int32Array(q.count);for(let Ue=0;Ue<q.count;Ue++){let it=Me(Ue);Ie.has(it)||Ie.set(it,Ie.size),he[Ue]=Ie.get(it)}let fe=new Int32Array(Ie.size).map((Ue,it)=>it),ye=Ue=>{for(;fe[Ue]!==Ue;)Ue=fe[Ue]=fe[fe[Ue]];return Ue};for(let Ue=0;Ue<be;Ue++){let it=ye(he[ge[Ue*3]]);fe[ye(he[ge[Ue*3+1]])]=it,fe[ye(he[ge[Ue*3+2]])]=it}let Ce=new Map;for(let Ue=0;Ue<be;Ue++){let it=ye(he[ge[Ue*3]]);Ce.has(it)||Ce.set(it,[]),Ce.get(it).push(ge[Ue*3],ge[Ue*3+1],ge[Ue*3+2])}let Ae=[...Ce.values()].sort((Ue,it)=>it.length-Ue.length),Je=(()=>{let Ue=W.material.metalnessMap;if(!Ue||!Ue.image)return null;let it=document.createElement("canvas");it.width=Ue.image.width,it.height=Ue.image.height;let sn=it.getContext("2d");sn.drawImage(Ue.image,0,0);let ji=sn.getImageData(0,0,it.width,it.height).data,Dn=X.attributes.uv;return(Bt,P,Y)=>{let ne=(Dn.getX(Bt)+Dn.getX(P)+Dn.getX(Y))/3,te=(Dn.getY(Bt)+Dn.getY(P)+Dn.getY(Y))/3;Ue.flipY&&(te=1-te);let $=Math.min(it.width-1,Math.max(0,Math.floor(ne*it.width))),Pe=Math.min(it.height-1,Math.max(0,Math.floor(te*it.height)));return ji[(Pe*it.width+$)*4+2]/255}})(),je=0;if(Je){let Ue=Ae[0],it=Bt=>(q.getZ(Ue[Bt])+q.getZ(Ue[Bt+1])+q.getZ(Ue[Bt+2]))/3,sn=[];for(let Bt=0;Bt<Ue.length;Bt+=3)Je(Ue[Bt],Ue[Bt+1],Ue[Bt+2])<.5&&sn.push(it(Bt));sn.sort((Bt,P)=>Bt-P);let ji=sn[Math.floor(sn.length*.02)],Dn=sn[Math.floor(sn.length*.98)];for(let Bt=0;Bt<Ue.length;Bt+=3)Je(Ue[Bt],Ue[Bt+1],Ue[Bt+2])>.5&&(it(Bt)<ji||it(Bt)>Dn)&&je++}let ct=Ue=>{let it=new tt;for(let sn of Object.keys(X.attributes))it.setAttribute(sn,X.attributes[sn]);return it.setIndex(Ue),it.computeBoundingBox(),it.computeBoundingSphere(),it},G=ct(Ae[0]),Ee=Ae.length>1?ct(Ae.slice(1).flat()):null,J=!!Ee&&je<10,ae=G.boundingBox,Ne=new M((ae.min.x+ae.max.x)/2,(ae.min.y+ae.max.y)/2,0);X.computeBoundingBox();let ze=X.boundingBox,rt=ze.getSize(new M),It=W.material,en=new st({map:It.map,metalnessMap:It.metalnessMap,roughnessMap:It.roughnessMap,normalMap:It.normalMap||null,metalness:1,roughness:1,envMap:t,envMapIntensity:1.15,emissive:16777215,emissiveMap:It.map,emissiveIntensity:.2,side:Qe});en.customProgramCacheKey=()=>"opening:rollerCandidate";let mt=uE,An=mt.length/rt.z,Jt=new Ge;Jt.name="rollerCandidate"+ca;let Zi=new Ge;Zi.scale.setScalar(An),Jt.add(Zi);let Ls=new Ge;Ls.position.copy(Ne),Zi.add(Ls);let fi=new Re(G,en);if(fi.position.copy(Ne).negate(),Ls.add(fi),Ee){let Ue=new Re(Ee,en);Zi.add(Ue)}x.add(Jt);let ur=()=>{let Ue=mt.length/rt.z;Zi.scale.setScalar(Ue),Jt.position.set(mt.at[0],mt.feetY-ze.min.y*Ue,mt.at[2]),Jt.rotation.y=Be.degToRad(mt.yaw)};ur();let fo=()=>{Jt.updateMatrixWorld(!0);let Ue=1/0,it=new M;return Jt.traverse(sn=>{if(!sn.isMesh)return;let ji=sn.geometry.attributes.position;for(let Dn=0;Dn<ji.count;Dn+=3)it.fromBufferAttribute(ji,Dn).applyMatrix4(sn.matrixWorld),it.z<R&&it.y<2.6&&(Ue=Math.min(Ue,Math.abs(it.x)))}),Ue},po=()=>{let Ue=fo();for(let it=0;it<30&&Ue<b0;it++)Jt.position.x+=.04*Math.sign(Jt.position.x||-1),Ue=fo();return Ue},Ki=po();window.__bwRoller=Ue=>(Object.assign(mt,Ue),ur(),Ki=po(),i.rollerCandidate={...i.rollerCandidate,at:Jt.position.toArray().map(it=>+it.toFixed(2)),nearestToLanes:+Ki.toFixed(2)},i.rollerCandidate);let mo=f.filter(Ue=>Ue.centre.z<R);mo[1]&&(mo[1].g.visible=!1),i.rollerCandidate={file:sc[ca],pieces:Ce.size,drumTris:Ae[0].length/3,bracketTris:Ee?Ee.index.count/3:0,fusedGoldTris:je,spinnable:J,scale:+An.toFixed(3),diameter:+(Math.max(rt.x,rt.y)*An).toFixed(2),length:mt.length,at:Jt.position.toArray().map(Ue=>+Ue.toFixed(2)),nearestToLanes:+Ki.toFixed(2)},J&&w.push(Ue=>{Ls.rotation.z+=mt.spin*Ue})}return Vm&&(window.__bwPhaseA=Xm({scene:e,castle:i.castle,waterSheets:i.waterSheets,axisY:y,tunnelStart:R})),{root:x,loadExtras:Te,update(E,B,W){for(let X of w)X(E,B,W)}};function I(E,B,W,X){let q=E.clone(),ge=E.onBeforeCompile,be=E.customProgramCacheKey.bind(E),Me=W==="face";Me&&(q.envMapIntensity=1.4,q.emissiveIntensity=.15),X.computeBoundingBox();let Ie=X.boundingBox,he=Ie.getCenter(new M),fe=Ie.getSize(new M),ye=Me?Math.max(fe.x,fe.y)*.5:Math.max(fe.x,fe.z)*.5;return q.onBeforeCompile=(Ce,Ae)=>{ge.call(E,Ce,Ae),Ce.vertexShader=Ce.vertexShader.replace("void main() {",`varying vec3 vFibreP;
void main() {
  vFibreP = position;`),Ce.fragmentShader=Ce.fragmentShader.replace("void main() {",`varying vec3 vFibreP;
${hE}
void main() {`);let Je=Me?"#include <emissivemap_fragment>":"#include <alphamap_fragment>",je=`(vFibreP - vec3(${he.x.toFixed(4)}, ${he.y.toFixed(4)}, ${he.z.toFixed(4)})) / ${ye.toFixed(4)}`,ct=Me?"vec3(atan(q.y, q.x) * 160.0, length(q.xy) * 9.0, q.z * 30.0)":"vec3(atan(q.z, q.x) * 150.0, q.y * 120.0, length(q.xz) * 8.0)";Ce.fragmentShader=Ce.fragmentShader.replace(Je,`${Je}
        { vec3 cc = diffuseColor.rgb;
          float mx = max(cc.r, max(cc.g, cc.b));
          float soft = ${Me?"(1.0 - smoothstep(0.3, 0.6, metalnessFactor))":"1.0"} * smoothstep(0.04, 0.2, mx);
          vec3 q = ${je};
          vec3 fc = ${ct};
          float strand = fibreNoise(fc) * 0.65 + fibreNoise(fc * vec3(2.1, 1.7, 1.0) + 7.3) * 0.35;
          float f = mix(0.74, 1.18, smoothstep(0.2, 0.8, strand));
          diffuseColor.rgb *= mix(1.0, f, soft * 0.85);
          ${Me?"totalEmissiveRadiance *= mix(1.0, f, soft);":""} }`)},q.customProgramCacheKey=()=>be()+"|fibre:"+B,q}}var Un={portal:wi,foam:wi,bubbles:wi,brushes:wi,slide:wi,mascot:wi,light:wi,art:wi};if(typeof window<"u"&&Array.isArray(window.__BW_OPENING_OFF__))for(let i of window.__BW_OPENING_OFF__)Un[i]=!1;Ke.round3&&(Un.art=!1);var y0={stretch:[.95,1.07,.95],spike:1},_0=[[512,655,7.5,30,0,.03],[36,815,5.4,52,0,.03],[503,848,5.2,46,0,.03],[165,592,13,26,0,.04],[92,470,15,20,0,.04],[120,700,9,14,.12,.05],[420,720,9,12,.1,.05],[205,440,22,8,.15,.06],[345,430,22,9,.12,.06],[372,540,18,10,.1,.05],[160,520,18,9,.14,.05],[60,640,9,16,.08,.04],[250,400,26,6,.1,.05],[300,395,26,5,.12,.05],[24,560,12,22,0,.03]],b0=1.18,Nd={machinery:{at:[2.9,.92,-9.7],yaw:.1,height:3.1},rollers:[{hide:!0},{at:[-2.7,1.1,-5.8],axis:[.12,1,.25],d:1.35}]},hE=`
float fibreHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float fibreNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(fibreHash(i), fibreHash(i + vec3(1, 0, 0)), f.x), mix(fibreHash(i + vec3(0, 1, 0)), fibreHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(fibreHash(i + vec3(0, 0, 1)), fibreHash(i + vec3(1, 0, 1)), f.x), mix(fibreHash(i + vec3(0, 1, 1)), fibreHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
`,dE=`
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
`,fE=`
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
`,pE=`
varying vec3 vN; varying vec3 vW;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 w = m * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(m) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,mE=`
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
`;function gE(i){let e=new Bi(1,4),t=e.attributes.position,n=new M,s=4+i()*2,r=5+i()*2;for(let o=0;o<t.count;o++){n.fromBufferAttribute(t,o);let a=1+.1*Math.sin(n.x*s+n.y*3.1)*Math.sin(n.y*r+n.z*3.7)+.035*Math.sin(n.z*9+n.x*7);n.multiplyScalar(a),t.setXYZ(o,n.x,n.y,n.z)}return e.computeVertexNormals(),e}function vE(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,0.9)",e.beginPath(),e.moveTo(32,2),e.lineTo(35,29),e.lineTo(62,32),e.lineTo(35,35),e.lineTo(32,62),e.lineTo(29,35),e.lineTo(2,32),e.lineTo(29,29),e.closePath(),e.fill();let n=new Vn(i);return n.colorSpace=wt,n}var T0={radius:.3,half:.05,bright:[1,.78,.26],field:[.96,.6,.12],edge:[.95,.52,.08],metalness:.75,roughness:.26,glow:.3};function Hd(i="high"){let e=T0,t=i==="high",n=[[0,.03],[.188,.03],[.2,.038],[.214,.044],[.228,.038],[.237,.034],[.248,.047],[.266,.052],[.287,.047],[.299,.032]],s=[...n,...n.slice().reverse().map(([d,f])=>[d,-f])].map(([d,f])=>new le(d,f));s.reverse();let r=new jr(s,t?56:28).toNonIndexed();r.rotateX(Math.PI/2),w0(r,(d,f,p)=>{let v=Math.hypot(d,f);return Math.abs(p)<.034&&v>.29?e.edge:v<.196?e.field:e.bright});let o=[],a={depth:.004,bevelEnabled:!0,bevelThickness:.008,bevelSize:.007,bevelSegments:t?3:1,curveSegments:t?14:6},l=new fs;l.moveTo(0,.03),l.bezierCurveTo(.058,.03,.084,-.008,.084,-.042),l.bezierCurveTo(.084,-.076,.06,-.094,.036,-.09),l.bezierCurveTo(.016,-.087,.009,-.1,0,-.1),l.bezierCurveTo(-.009,-.1,-.016,-.087,-.036,-.09),l.bezierCurveTo(-.06,-.094,-.084,-.076,-.084,-.042),l.bezierCurveTo(-.084,-.008,-.058,.03,0,.03),o.push(new Zs(l,a));for(let[d,f,p,v,g]of[[-.106,.04,.03,.04,.5],[-.039,.093,.031,.042,.14],[.039,.093,.031,.042,-.14],[.106,.04,.03,.04,-.5]]){let m=new fs;m.absellipse(0,0,p,v,0,Math.PI*2,!1,0);let _=new Zs(m,a);_.rotateZ(g),_.translate(d,f,0),o.push(_)}let c=Wh(o.map(d=>(d.deleteAttribute("uv"),d.index?d.toNonIndexed():d)));c.translate(0,-.005,.03+a.bevelThickness-.002),w0(c,()=>e.bright);let u=c.clone();u.rotateY(Math.PI),r.deleteAttribute("uv");let h=Wh([r,c,u]);return h.computeBoundingSphere(),h}function w0(i,e){let t=i.attributes.position,n=new Float32Array(t.count*3);for(let s=0;s<t.count;s++)n.set(e(t.getX(s),t.getY(s),t.getZ(s)),s*3);i.setAttribute("color",new nt(n,3))}function S0(i){let e=T0,t=new st({vertexColors:!0,metalness:e.metalness,roughness:e.roughness,envMap:i,envMapIntensity:1.35});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${e.glow.toFixed(3)} + vec3(1.0, 0.9, 0.55) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 3.0) * 0.35;`)},t.customProgramCacheKey=()=>"pawCoin",t}var Mt=!!Ke.round2,jt={hearts:5,hurtGuard:1,outOfHearts:1.4,blasts:3,blastTime:3,blastReach:13,turbos:3,turboTime:2.5,turboSpeed:1.45,coinH:.7,sockH:.88,gemH:.85,coinLines:[[1,4.4,5],[0,10.8,3],[1,16.8,2],[2,18.6,3],[1,23.4,5],[0,29.8,3]],coinStep:1,socks:[[1,9.6],[0,14],[2,21.8],[1,28.6],[0,33]],gems:[[1,15.6],[0,34.2]]},Is={},Yi=!!Ke.round3,cc=!!Ke.round5,$d=!!Ke.round4;Yi&&Object.assign(jt,{coinLines:[[1,4,3,1,.7,0],[2,10.1,1,1,.55,0],[0,11.2,3,1.4,.92,.18],[1,15,3,1,.72,0],[2,18.4,3,1,.7,0],[1,23.4,5,1,.7,0],[0,29.8,3,1,.7,0]],socks:[[1,7.6],[2,12.1],[2,21.8],[1,28.6],[0,33]],gems:[[0,14.6],[0,34.2]],gemH:1});var xE=Yi?ec(15931):null,C0=!!window.__BW_TEST__,Xd=!!window.__BW_SIDE__||/[?&]side(=|&|$)/.test(location.search),_c=!!window.__BW_TOUCHES__||/[?&]touches(=|&|$)/.test(location.search);Xd&&document.body.classList.add("side");var at=i=>document.getElementById(i),Rs=i=>new M(i[0],i[1],i[2]),Kt=i=>new oe(i),xn=at("stage"),yE=at("view"),$i=new fl({canvas:yE,antialias:!1,powerPreference:"high-performance"});$i.toneMapping=Qo;$i.toneMappingExposure=1.05;var qi=Math.min(window.devicePixelRatio||1,1.6);$i.setPixelRatio(qi);var Pt=new Wo,vn=new Vt(55,.5,.1,200),di=new ql($i);di.addPass(new Yl(Pt,vn));var uo=new no(new le(256,512),.32,.45,.97);di.addPass(uo);var P0=new to(Lm);di.addPass(P0);di.addPass(new $l);Pt.add(new Ll(16771583,7252223,1.1));var Zd=new Js(16773862,1.7);Zd.position.set(-3,6,-4);Pt.add(Zd);var _E=Zd.position.clone().normalize(),I0=new Js(13625599,1.3);I0.position.set(2,7,12);Pt.add(I0);var qd={layout:"models/layout.json",castle:"models/castle.glb",drum:"models/drum.glb",mascot:"models/mascot.glb",roller:"models/roller.glb",gem:"models/gem.glb",sock:"models/sock.glb",machinery:"models/machinery.glb",tower:"models/tower.glb",gear:"models/gear.glb",pipe:"models/pipe.glb",crown:"models/crown.glb",coinP2:"models/coin_p2.glb",coinP2Lo:"models/coin_p2_lo.glb"},L0={};function bE(){let i=0,e=0;for(let n of Object.values(L0))i+=n.loaded,e+=n.total||n.loaded;let t=e>0?Math.round(i/e*100):0;at("loadBar").style.width=t+"%",at("loadPct").textContent=t+"%"}var ME=new bs;async function A0(i,e){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);let n=+t.headers.get("content-length")||0,s=t.body.getReader(),r=[],o=0;for(;;){let{done:c,value:u}=await s.read();if(c)break;r.push(u),o+=u.length,L0[e]={loaded:o,total:Math.max(n,o)},bE()}let a=new Uint8Array(o),l=0;for(let c of r)a.set(c,l),l+=c.length;return a}var EE=window.__BW_MODEL_FORMAT__==="json";async function zd(i){let e;try{if(EE)throw new Error("json");e=await A0(qd[i],i)}catch{let t=JSON.parse(new TextDecoder().decode(await A0(qd[i]+".json",i))),n=atob(t.data);e=new Uint8Array(n.length);for(let s=0;s<n.length;s++)e[s]=n.charCodeAt(s)}return ME.parseAsync(e.buffer,"")}var Fe,Tt,Oe={P:new M,R:new M,U:new M,T:new M},Z={phase:"loading",time:0,coins:1280,gems:36,socks:0,sound:!0,collected:{coins:0,gems:0},laps:0};Mt&&Object.assign(Z,{hearts:jt.hearts,blasts:jt.blasts,turbos:jt.turbos,paused:!1,blastT:0,turboT:0,guardT:0,outT:-1,knocks:0,restarts:0});var Ve={};function wE(i,e={}){let t=new Lt({map:i.map||null,color:16777215,vertexColors:!!e.vertexColors,side:Qe}),n=e.saturation??1.15,s=e.brightness??1,r=e.glow??0,o=e.haze,a=e.shade;t.onBeforeCompile=c=>{a&&(c.vertexShader=c.vertexShader.replace("void main() {",`varying vec3 vShadeN; varying vec3 vShadeP;
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
`+e.afterColor)),(e.grade||e.afterColor)&&(c.fragmentShader=c.fragmentShader.replace("void main() {",`${vm}
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
      ${o?`diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${o[3].map(u=>u.toFixed(3)).join(", ")}), ${o[0].toFixed(3)} * smoothstep(${o[1].toFixed(2)}, ${o[2].toFixed(2)}, vHazeDepth));`:""}`)};let l="baked:"+JSON.stringify([n,s,r,e.lift??0,o||0,a||0,e.grade||"",e.afterColor||""]);return t.customProgramCacheKey=()=>l,t}var or,ar,et,gt,ft,ga,lr,uc=null,hc=[],dc=[],fc=[],va=[],U0=[],pc=new we,TE=new we,mc=new bt;function SE(){let i=new Re(new Qt(170,32,16),new We({vertexShader:Sm,fragmentShader:Am,side:En,depthWrite:!1,uniforms:{uTop:{value:Kt(12759295)},uMid:{value:Kt(15128319)},uHorizon:{value:Kt(16445183)},uBottom:{value:Kt(9420031)}}}));i.renderOrder=-10,Pt.add(i);let e=new Wo,t=i.clone();t.material=i.material.clone(),t.material.uniforms={uTop:{value:Kt(7299008)},uMid:{value:Kt(10127064)},uHorizon:{value:Kt(14072048)},uBottom:{value:Kt(2306159)}},e.add(t);for(let[s,r,o]of[[[0,60,10],[90,50],[3.2,3,3.2]],[[-70,25,20],[40,60],[2.6,1.6,2.4]],[[70,20,10],[40,60],[1.4,2.4,3]],[[0,18,-80],[70,30],[2,1.9,2.2]],[[0,10,85],[60,25],[1.6,2,2.8]]]){let a=new Re(new fn(...r),new Lt({color:new oe(...o),side:Qe}));a.position.set(...s),a.lookAt(0,0,0),e.add(a)}let n=new Yr($i);Ve.env=n.fromScene(e,.02,.1,400).texture,Ve.gold=new st({color:16760645,metalness:1,roughness:.22,envMap:Ve.env,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.35})}function bc(i){let e=0;return i.traverse(t=>{if(!t.isMesh)return;t.geometry.attributes.normal||(t.geometry.computeVertexNormals(),e+=1e6);let n=t.geometry.attributes.normal,s=new Float32Array(n.count*3);for(let r=0;r<n.count;r++){let o=n.getX(r),a=n.getY(r),l=n.getZ(r),c=Math.hypot(o,a,l);c>1e-4?(o/=c,a/=c,l/=c):(o=0,a=1,l=0,e++),s[r*3]=o,s[r*3+1]=a,s[r*3+2]=l}t.geometry.setAttribute("normal",new nt(s,3))}),e}function AE(i,e){let t=new Ge;return t.matrixAutoUpdate=!1,t.matrix.fromArray(e),t.add(i),Pt.add(t),t}function Kd(i,e,t){i.traverse(n=>{n.isMesh&&(n.material=wE(n.material,{...e,...t?t(n):{},vertexColors:!!n.geometry.attributes.color}),n.frustumCulled=!0)})}function RE(){let i=[];for(let r=0;r<=10;r++)i.push(-30+(30-3.2)*Math.pow(r/10,.55));for(let r=1;r<40;r++)i.push(-3.2+6.4*(r/40));for(let r=10;r>=0;r--)i.push(30-(30-3.2)*Math.pow(r/10,.55));let e=(r,o,a,l)=>{let c=Math.ceil((a-o)/l)+1,u=c*r.length,h=new Float32Array(u*3),d=new Float32Array(u*2),f=new Float32Array(u*3),p=new Float32Array(u*3),v=new Float32Array(u*3),g=new Float32Array(u*3),m=[];for(let x=0;x<c;x++){let y=o+(a-o)*x/(c-1);Tt.frame(y,Oe);for(let R=0;R<r.length;R++){let w=x*r.length+R,A=r[R];d[w*2]=A,d[w*2+1]=y,Oe.P.toArray(f,w*3),Oe.R.toArray(p,w*3),Oe.U.toArray(v,w*3),Oe.T.toArray(g,w*3),h[w*3]=Oe.P.x+Oe.R.x*A,h[w*3+1]=Oe.P.y+Oe.R.y*A,h[w*3+2]=Oe.P.z+Oe.R.z*A}}for(let x=0;x<c-1;x++)for(let y=0;y<r.length-1;y++){let R=x*r.length+y,w=R+r.length;m.push(R,w,R+1,w,w+1,R+1)}let _=new tt;_.setAttribute("position",new nt(h,3)),_.setAttribute("aTrack",new nt(d,2));for(let[x,y]of[["aP",f],["aR",p],["aU",v],["aT",g]])_.setAttribute(x,new nt(y,3));return _.setIndex(m),_.computeBoundingSphere(),_.boundingSphere.radius+=3,_},t=[];for(let r=0;r<tr;r++)t.push(new yt(0,0,-99,0));ar={uTime:{value:0},uTunnel:{value:new yt(Fe.tunnelStart,Fe.tunnelEnd,Fe.tunnelRadius,Fe.axisHeight)},uRipples:{value:t},uPlayer:{value:new M},uPlayerMove:{value:new M},uFlow:{value:9},uSlideHalf:{value:Yt.half},uDeep:{value:Kt(407256)},uShallow:{value:Kt(2071551)},uTurq:{value:Kt(4123384)},uGlow:{value:Kt(10154751)},uSky:{value:Kt(11126015)},uPink:{value:Kt(16751584)},uGold:{value:Kt(16763994)},uRingA:{value:Kt(16767091)},uRingB:{value:Kt(9234175)},uFog:{value:Kt(13421823)},uSunDir:{value:_E},uRings:{value:new M(Fe.tunnelStart+.25,Fe.segmentLength-Math.max(.02,Fe.segmentLength*.005),4)},uOpen:{value:0}};let n=new We({vertexShader:Mm,fragmentShader:Em,uniforms:ar}),s=[];for(let r=0;r<=28;r++)s.push(-2.1+4.2*(r/28));or=new Ge,or.add(new Re(e(i,Fe.startZ-30,Fe.tunnelStart+2.5,.3),n)),or.add(new Re(e(s,Fe.tunnelStart-.5,Fe.tunnelEnd+6,.25),n)),Pt.add(or)}function CE(){let i=new st({color:3107839,metalness:.2,roughness:.12,envMap:Ve.env,envMapIntensity:1.6,emissive:666266,emissiveIntensity:.5}),e=new st({color:15128831,metalness:.15,roughness:.32,envMap:Ve.env,envMapIntensity:1,side:Qe}),t=new st({color:15903035,metalness:1,roughness:.3,envMap:Ve.env,envMapIntensity:1.25,emissive:3809792,emissiveIntensity:.6}),n=Fe.startZ-24,s=-.6,r=.62,o=Math.floor((s-n)/r)+1,a=new Ut(new _i(.22,.26,.5,2,.06),t,o*2),l=new Ut(new Qt(.055,12,8),i,o*2),c=[[-.06,-.06],[.04,.1],[.14,.2],[.26,.2],[.34,.08],[.36,-.8]],u=0;for(let h of[-1,1]){let d=[],f=[],p=[],v=0;for(let _=n;_<=s+1e-6;_+=.25,v++){let x=Hn(Fe,h*Yt.half,_);for(let[y,R]of c)d.push(h*(Yt.half+y),x+R,_);p.push(new M(h*(Yt.half+.2),x+.26,_))}let g=c.length;for(let _=0;_<v-1;_++)for(let x=0;x<g-1;x++){let y=_*g+x,R=y+g;f.push(y,R,y+1,R,R+1,y+1)}let m=new tt;m.setAttribute("position",new Xe(d,3)),m.setIndex(f),m.computeVertexNormals(),Pt.add(new Re(m,e)),Pt.add(new Re(new js(new hs(p),p.length*2,.1,14),Ve.gold));for(let _=0;_<o;_++,u++){let x=n+_*r,y=Hn(Fe,h*Yt.half,x),R=(Hn(Fe,h*Yt.half,x+.2)-Hn(Fe,h*Yt.half,x-.2))/.4;mc.setFromAxisAngle(new M(1,0,0),-Math.atan(R)),a.setMatrixAt(u,pc.compose(new M(h*(Yt.half+.36),y+.1,x),mc,new M(1,1,1))),l.setMatrixAt(u,pc.makeTranslation(h*(Yt.half+.48),y+.1,x))}}Pt.add(a,l)}function D0(i,e,t,n,s=12,r=26){let a=[0],l=new M;for(let m=1;m<=200;m++){let _=m/200,x=new M(0,-e*_*_,i*_);a.push(a[m-1]+x.distanceTo(l)),l=x}let c=a[200],u=[],h=[],d=[],f=[],p=[],v=0;for(let m=0;m<=r;m++){let _=m/r,x=_*c;for(;v<199&&a[v+1]<x;)v++;let y=(v+Math.min(1,Math.max(0,(x-a[v])/Math.max(1e-6,a[v+1]-a[v]))))/200,R=new M(0,-e*y*y,i*y),w=new M(0,-2*e*y,i).normalize(),A=new M(0,w.z,-w.y),C=t+(n-t)*_,T=C*.5,b=C*.35;for(let S=0;S<=s;S++){let z=Math.PI*S/s,F=-Math.cos(z),L=Math.sin(z),N=R.clone().add(new M(F*T,0,0)).addScaledVector(A,L*b),U=new M(F/T,0,0).addScaledVector(A,L/b).normalize();u.push(N.x,N.y,N.z),h.push(U.x,U.y,U.z),d.push(S/s,x),f.push(_)}}for(let m=0;m<r;m++)for(let _=0;_<s;_++){let x=m*(s+1)+_,y=x+s+1;p.push(x,x+1,y,y,x+1,y+1)}let g=new tt;return g.setAttribute("position",new Xe(u,3)),g.setAttribute("normal",new Xe(h,3)),g.setAttribute("uv",new Xe(d,2)),g.setAttribute("progress",new Xe(f,1)),g.setIndex(p),g}function PE(){let i={uTime:{value:0},uLipSpeed:{value:1.2},uStreakLen:{value:.35},uDeep:{value:Kt(21247)},uBright:{value:Kt(4250623)},uSky:{value:Kt(14268671)},uPink:{value:Kt(16751078)}};U0.push(i);let e=new Ge;Pt.add(e),Ve.falls=e;let t=new We({vertexShader:wm,fragmentShader:Tm,uniforms:i,transparent:!0,depthWrite:!1,side:Qe});Ve.fallMat=t;let n=(r,o,a,l)=>{let c=o.clone().sub(r),u=r.y-o.y;c.y=0;let h=new Re(D0(Math.max(.02,c.length()),Math.max(.05,u),a,l),t);h.position.copy(r),h.lookAt(r.clone().add(c.lengthSq()>1e-6?c.normalize():new M(0,0,-1))),h.renderOrder=2,e.add(h)},s=(r,o,a)=>{let l=o.clone().sub(r),c=l.length(),u=new Re(new pn(a,a,c,16),Ve.gold);u.position.copy(r).add(o).multiplyScalar(.5),u.quaternion.setFromUnitVectors(new M(0,1,0),l.normalize()),e.add(u)};for(let r of Fe.waterfalls){let o=Rs(r.lip),a=Rs(r.basin),l=Rs(r.overflow),c=Rs(r.landing),u=Rs(r.tower),h=r.width,d=h*.42;n(o,a.clone().add(new M(0,-.02,0)),h*.7,h*.85),n(l,c,h*.9,h*1.15),s(o.clone().add(new M(0,d*.45,0)),u.clone().add(new M(0,d*.45,.3)),d);let f=new Re(new pn(r.basinRadius,r.basinRadius*.8,.18,24),Ve.gold);f.position.copy(a).add(new M(0,-.1,0)),e.add(f);let p=new Re(new Dt(r.basinRadius,.07,8,32),Ve.gold);p.position.copy(a),p.rotation.x=Math.PI/2,e.add(p),s(a.clone().add(new M(0,-.12,0)),Rs(r.basinTower).add(new M(0,-.12,.3)),.08),ft.addSource({pos:c.clone().setY(-.6),rate:22,kind:1,spread:h*.5,up:1.6,size:.55}),ft.addSource({pos:c.clone().setY(-.6),rate:30,kind:0,spread:h*.4,up:2.4,size:.12}),ft.addSource({pos:a.clone(),rate:10,kind:1,spread:h*.3,up:.9,size:.35})}}function IE(){let i=new Dt(Fe.tunnelRadius*.965,.075,8,72),e=[],t=Fe.segmentLength-Math.max(.02,Fe.segmentLength*.005);for(let s=0;s<3;s++)e.push(Fe.tunnelStart+s*t+.25);e.push(Fe.tunnelEnd-.25),e.forEach((s,r)=>{let o=new Re(i,new Lt({color:r%2===0?new oe(2.6,2,.95):new oe(1.4,2.2,2.9)}));o.matrixAutoUpdate=!1,Tt.mapMatrix(new we().makeTranslation(0,0+1.5,s),o.matrix),o.userData.pulse=r*.9,o.userData.base=o.material.color.clone(),Pt.add(o),Ve.rings=Ve.rings||[],Ve.rings.push(o)});let n=(s,r,o,a)=>{let l=new Re(new fn(r,r),o);return l.matrixAutoUpdate=!1,l.renderOrder=a,Tt.mapMatrix(new we().makeTranslation(0,0+1.5,Fe.tunnelEnd+s).multiply(new we().makeRotationY(Math.PI)),l.matrix),Pt.add(l),l};Ve.exitLight=[n(4.5,16,new Lt({map:LE(),toneMapped:!1}),0)],Ve.exitLight[1]=n(1.5,7,new Lt({map:F0(),color:new oe(.9,1.1,1.4),transparent:!0,blending:on,depthWrite:!1}),3)}function LE(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d"),t=e.createRadialGradient(256,256,0,256,256,256);t.addColorStop(0,"#ffffff"),t.addColorStop(.22,"#f4fbff"),t.addColorStop(.45,"#bfe9ff"),t.addColorStop(.7,"#d9c4ff"),t.addColorStop(1,"#ffc6ec"),e.fillStyle=t,e.fillRect(0,0,512,512),e.globalCompositeOperation="lighter";for(let s=0;s<18;s++){let r=s/18*Math.PI*2+s%2*.09,o=.05+s%3*.025,a=e.createRadialGradient(256,256,30,256,256,256);a.addColorStop(0,"rgba(255,255,255,0.32)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.moveTo(256,256),e.arc(256,256,256,r-o,r+o),e.closePath(),e.fill()}let n=new Vn(i);return n.colorSpace=wt,n}function F0(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new Vn(i);return n.colorSpace=wt,n}var UE=[{at:[2.55,2.25,-3.4],axis:[-.3,.05,-.95],d:1.8,spin:110},{at:[-2.45,1.3,-5],axis:[.3,.05,-.95],d:1.8,spin:-95}];function DE(i){Kd(i.scene,{saturation:1.25,brightness:1.1,glow:.9,lift:.08,haze:[.45,6,32,[.78,.86,1]],shade:[.88,.22,.25]}),i.scene.updateMatrixWorld(!0);let e=[];i.scene.traverse(o=>{o.isMesh&&e.push(o)});let t=new we,n=new we,s=new M,r=new M;Ve.drumMeshes=[];for(let o of Fe.drumSegments){t.fromArray(o);for(let a of e){n.multiplyMatrices(t,a.matrixWorld);let l=a.geometry,c=l.attributes.position,u=new Float32Array(c.count*3);for(let f=0;f<c.count;f++)s.fromBufferAttribute(c,f).applyMatrix4(n),Tt.map(s.x,s.y,s.z,r),u[f*3]=r.x,u[f*3+1]=r.y,u[f*3+2]=r.z;let h=new tt;h.setAttribute("position",new nt(u,3));for(let f of["uv","color"])l.attributes[f]&&h.setAttribute(f,l.attributes[f]);h.setIndex(l.index),h.computeVertexNormals(),h.computeBoundingSphere();let d=new Re(h,a.material);Pt.add(d),Ve.drumMeshes.push(d)}}}function FE(i){let e=i.scene;bc(e),Kd(e,{saturation:1.25,brightness:1.08,shade:[.8,.38,.45]},r=>{if(!/Bristles/.test(r.material.name))return{};let o=r.geometry.attributes.position,a=0;for(let l=0;l<o.count;l++)a=Math.max(a,Math.hypot(o.getX(l),o.getZ(l)));return{afterColor:ym(a)}});for(let r of Fe.rollers){if(r.centre[2]<Fe.tunnelStart)continue;let o=new Ge;o.matrixAutoUpdate=!1,o.add(e.clone()),Pt.add(o),Mt&&(o.visible=!1);let a=Rs(r.centre);va.push({g:o,m0:Tt.mapMatrix(new we().fromArray(r.matrix)),centre:Tt.map(a.x,a.y,a.z),axis:Tt.dir(r.axis[0],r.axis[1],r.axis[2],a.z).normalize(),speed:Be.degToRad(r.spin),angle:0})}let t=new Zt().setFromObject(e),n=t.getSize(new M),s=t.getCenter(new M);for(let r of UE){let o=r.d/Math.max(n.x,n.z),a=new M(...r.axis).normalize(),l=Tt.map(r.at[0],r.at[1],r.at[2]),c=new we().compose(l,new bt().setFromUnitVectors(new M(0,1,0),a),new M(o,o,o)).multiply(new we().makeTranslation(-s.x,-s.y,-s.z)),u=new Ge;u.matrixAutoUpdate=!1,u.add(e.clone()),Pt.add(u),va.push({g:u,m0:c,centre:l,axis:a,speed:Be.degToRad(r.spin),angle:Math.random()*6})}}var pa={at:[2.7,1.05,-8],yaw:.08,height:2.8};function NE(i){let e=i.scene;e.traverse(o=>{if(!o.isMesh)return;let a=o.material;o.material=new st({map:a.map,metalnessMap:a.metalnessMap,roughnessMap:a.roughnessMap,normalMap:a.normalMap,metalness:1,roughness:1,envMap:Ve.env,envMapIntensity:1.05,emissive:16777215,emissiveMap:a.map,emissiveIntensity:.2,side:Qe})});let t=new Zt().setFromObject(e),n=t.getSize(new M),s=t.getCenter(new M);Ve.sideMachineryModel={model:e,size:n,centre:s};let r=new Ge;r.name="sideMachinery",r.add(e),Pt.add(r),Ve.sideMachinery=r,jd()}function jd(){let{model:i,size:e,centre:t}=Ve.sideMachineryModel,n=Ve.sideMachinery,s=pa.height/e.y;i.scale.setScalar(s),i.position.copy(t).multiplyScalar(-s),n.position.set(...pa.at),n.rotation.y=Math.PI+pa.yaw,n.updateMatrixWorld(!0);let r=1/0,o=new M;i.traverse(a=>{if(!a.isMesh)return;let l=a.geometry.attributes.position;for(let c=0;c<l.count;c+=7)o.fromBufferAttribute(l,c).applyMatrix4(a.matrixWorld),o.y<1.4&&(r=Math.min(r,Math.abs(o.x)))}),Z.machineryInnerX=+r.toFixed(2)}function HE(){let i=new fn(2,2),e=new mn;e.index=i.index,e.attributes.position=i.attributes.position,e.attributes.uv=i.attributes.uv;let t=(r,o,a,l)=>[...Tt.map(r,o,a).toArray(),l],n=Fe.bubbles.map(r=>t(r.pos[0],r.pos[1],r.pos[2],r.size*.5));for(let r of[[.72,.42,-17.9,.24],[-.82,.3,-17.6,.3],[-1.2,1.05,-16.4,.2],[-2.05,1.55,-13.6,.55],[-1.75,.55,-14.4,.3],[1.9,1.75,-12.6,.24],[-2.4,2.6,-10.2,.4],[1.4,.15,-15.6,.22]])n.push(t(...r));for(let r=0;r<30;r++){let o=Fe.startZ+2+Math.random()*(Fe.tunnelEnd-Fe.startZ-2),a=o>Fe.tunnelStart,l=(Math.random()*2-1)*(a?1.6:4.5),c=(a?1:.8)+Math.random()*2.2,u=.06+Math.random()*.2;Mt&&a&&(l=Math.sign(l||1)*(1.35+Math.abs(l)*.3),c=2.1+(c-1)*.45,u*=.6),n.push(t(l,c,o,u))}e.setAttribute("inst",new xt(new Float32Array(n.flat()),4)),e.setAttribute("phase",new xt(new Float32Array(n.map(()=>Math.random()*6.28)),1)),e.instanceCount=n.length,Ve.bubbleU={uTime:{value:0}};let s=new Re(e,new We({vertexShader:Rm,fragmentShader:Cm,uniforms:Ve.bubbleU,transparent:!0,depthWrite:!1,blending:cn,blendSrc:gn,blendDst:$t}));s.frustumCulled=!1,s.renderOrder=5,Pt.add(s),Ve.bubbles=s}function zE([i,e],t){let n=a=>{let l=null;return a.scene.traverse(c=>{c.isMesh&&!l&&(l=c)}),l},s=n(i),r=n(e),o=s.material;return o.envMap=t,o.envMapIntensity=1.5,o.color.setRGB(1,1.14,.72),o.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * 0.5 + vec3(1.0, 0.92, 0.5) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 3.0) * 0.45;`)},o.customProgramCacheKey=()=>"tripoCoin",{hi:s.geometry,lo:r.geometry,mat:o}}function BE(i,e,t=null){e.colorSpace=wt;let n=new st({map:e,color:16777215,metalness:.6,roughness:.3,envMap:Ve.env,emissive:9067008,emissiveMap:e,emissiveIntensity:1.25}),s=new st({color:16761418,metalness:1,roughness:.25,envMap:Ve.env,envMapIntensity:1.3,emissive:8014336,emissiveIntensity:.8}),r=new pn(.3,.3,.08,36);r.rotateX(Math.PI/2);let o=[s,n,n],a=Mt?ua(rr(39484),()=>t?zE(t,Ve.env):{hi:Hd("high"),lo:Hd("low"),mat:S0(Ve.env)}):null,l=(x,y)=>{let R=x.z;x=Tt.map(x.x,x.y,x.z);let w=a?ua(rr(39485+hc.length),()=>{let A=new pl;return A.addLevel(new Re(a.hi,a.mat),0),A.addLevel(new Re(a.lo,a.mat),9),A}):new Re(r,o);w.position.copy(x),Pt.add(w),hc.push({obj:w,home:x.clone(),kind:"coin",live:!0,pop:-1,phase:Math.random()*6,compose:y,u:R,q0:Mt?Tt.quaternion(R,new bt):null})},c=x=>Rs(x).multiply(new M(.7/.85,1,1)),u=Fe.tunnelStart,h=Fe.screen4Z+11,d=(x,y,R)=>new M(x,Hn(Fe,x,R)+y,R);if(Mt){for(let x of Fe.coins3)x[2]<u&&l(c(x),!0);for(let[x,y,R,w,A,C]of jt.coinLines)for(let T=0;T<R;T++){let b=Yi?A+C*Math.sin(Math.PI*T/Math.max(1,R-1)):jt.coinH;l(d(zn(x),b,y+T*(Yi?w:jt.coinStep)))}}else{for(let x of Fe.coins3)l(c(x),!0);for(let x of Fe.coins4)l(c(x),!0);for(let x=0;x<6;x++)l(d(zn(1),.65,u+2.5+x*1.6));for(let x=0;x<5;x++)l(d(zn(2),.65+Math.sin(x/4*Math.PI)*.9,u+4+x*1.5));for(let x=0;x<5;x++)l(d(zn(0),.65,h+x*1.3))}let f=i.scene;bc(f);let p=new Zt().setFromObject(f),v=p.getSize(new M),g=p.getCenter(new M),m=.42/v.y;if(f.traverse(x=>{if(!x.isMesh)return;let y=x.material.map;x.material=new st({map:y,metalness:0,roughness:.12,envMap:Ve.env,envMapIntensity:1.6,emissive:16777215,emissiveMap:y,emissiveIntensity:.35,side:Qe})}),Ve.gemMaterials=[],f.traverse(x=>{x.isMesh&&Ve.gemMaterials.push(x.material)}),Yi)for(let x of Ve.gemMaterials)x.color.setRGB(...un.gem.color),x.emissive.setRGB(...un.gem.emissive);let _=(x,y)=>{let R=x.z;x=Tt.map(x.x,x.y,x.z);let w=new Ge,A=f.clone(),C=m*(Mt?1.2:1);A.scale.setScalar(C),A.position.copy(g).multiplyScalar(-C),w.add(A),w.position.copy(x),Pt.add(w),dc.push({obj:w,home:x.clone(),kind:"gem",live:!0,pop:-1,phase:Math.random()*6,spin:Math.random()*6,compose:y,u:R})};if(Mt){for(let[x,y]of jt.gems)_(d(zn(x),jt.gemH,y));return}_(c(Fe.gem4),!0),_(d(zn(1),1.7,Fe.tunnelEnd-1.5)),_(d(zn(0),1.35,u+10.5)),_(d(zn(1),.7,u+12)),_(d(zn(2),.7,h+1.5))}var rc={};function OE(i,e){if(!rc[i]){let n=document.createElement("canvas");n.width=n.height=128;let s=n.getContext("2d"),r=s.createRadialGradient(64,64,0,64,64,64);i==="sock"?(r.addColorStop(0,"rgba(255,248,236,0.95)"),r.addColorStop(.42,"rgba(255,190,232,0.62)"),r.addColorStop(.7,"rgba(255,214,120,0.42)"),r.addColorStop(.78,"rgba(255,170,220,0.18)"),r.addColorStop(1,"rgba(255,160,220,0)")):(r.addColorStop(0,"rgba(255,170,250,0.8)"),r.addColorStop(.5,"rgba(210,90,255,0.35)"),r.addColorStop(1,"rgba(160,60,255,0)")),s.fillStyle=r,s.fillRect(0,0,128,128),rc[i]=new Vn(n),rc[i].colorSpace=wt}let t=new ci(new jn({map:rc[i],transparent:!0,depthWrite:!1,blending:on,opacity:i==="sock"?.7:.6}));return t.scale.setScalar(e),t.position.z=.32,t.renderOrder=4,t.name="r2Halo",t}function kE(i){let e=i.scene;e.traverse(l=>{l.isMesh&&(l.material=new Cl({map:l.material.map,emissive:16777215,emissiveMap:l.material.map,emissiveIntensity:.32}))});let t=new Zt().setFromObject(e),n=t.getSize(new M),s=t.getCenter(new M),r=(Mt?.74:.62)/n.y,o=Fe.tunnelStart,a=Mt?jt.socks.map(([l,c])=>[l,jt.sockH,c]):[[1,.8,o+7.5],[0,.95,o+11.8],[2,1,o+15.6],[1,.85,o+21],[0,.9,o+26.4]];Mt&&e.traverse(l=>{l.isMesh&&(l.material.emissiveIntensity=.42)});for(let[l,c,u]of a){let h=zn(l),d=new Ge,f=new Ge,p=e.clone();p.scale.setScalar(r),p.position.copy(s).multiplyScalar(-r),f.add(p),f.rotation.y=Math.PI,d.add(f),Tt.map(h,Hn(Fe,h,u)+c,u,d.position),Tt.quaternion(u,d.quaternion),Mt&&ua(rr(20672+fc.length),()=>d.add(OE("sock",1.25))),Pt.add(d),fc.push({obj:d,turn:f,home:d.position.clone(),kind:"sock",live:!0,pop:-1,phase:Math.random()*6,u})}}var gc=class{constructor(e){this.n=e,this.next=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e).fill(1),this.size0=new Float32Array(e),this.kind=new Float32Array(e),this.grav=new Float32Array(e),this.sizeA=new Float32Array(e),this.alphaA=new Float32Array(e),this.fl=new Float32Array(e*6);let t=new tt;this.posAttr=new nt(this.p,3).setUsage(Sn),this.sizeAttr=new nt(this.sizeA,1).setUsage(Sn),this.alphaAttr=new nt(this.alphaA,1).setUsage(Sn),this.kindAttr=new nt(this.kind,1).setUsage(Sn),t.setAttribute("position",this.posAttr),t.setAttribute("size",this.sizeAttr),t.setAttribute("alpha",this.alphaAttr),t.setAttribute("kind",this.kindAttr),this.u={uScale:{value:400}},this.points=new zi(t,new We({vertexShader:Pm,fragmentShader:Im,uniforms:this.u,transparent:!0,depthWrite:!1,blending:cn,blendSrc:gn,blendDst:$t})),this.points.frustumCulled=!1,this.points.renderOrder=6,this.sources=[],Pt.add(this.points)}emit(e,t,n,s,r,o,a,l,c,u=1,h=null){let d=this.next;this.next=(this.next+1)%this.n,this.p.set([e,t,n],d*3),this.v.set([s,r,o],d*3),this.life[d]=l,this.max[d]=l,this.size0[d]=a,this.kind[d]=c,this.grav[d]=u,h?this.fl.set(h,d*6):this.fl.fill(0,d*6,d*6+6)}emitT(e,t,n,s,r,o,a,l,c,u=1){Tt.frame(n,Oe);let h=Hn(Fe,e,n),d=Oe.P.x+Oe.R.x*e+Oe.U.x*t,f=Oe.P.y+Oe.R.y*e+Oe.U.y*t,p=Oe.P.z+Oe.R.z*e+Oe.U.z*t;this.emit(d,f,p,Oe.R.x*s+Oe.U.x*r+Oe.T.x*o,Oe.R.y*s+Oe.U.y*r+Oe.T.y*o,Oe.R.z*s+Oe.U.z*r+Oe.T.z*o,a,l,c,u,[Oe.P.x+Oe.R.x*e+Oe.U.x*h,Oe.P.y+Oe.R.y*e+Oe.U.y*h,Oe.P.z+Oe.R.z*e+Oe.U.z*h,Oe.U.x,Oe.U.y,Oe.U.z])}burstT(e,t,n,s,r,o={}){for(let a=0;a<s;a++){let l=Math.random()*Math.PI*2,c=(.4+Math.random())*r,u=o.dir||0;this.emitT(e+Math.cos(l)*.25,t,n+Math.sin(l)*.25,Math.cos(l)*c*.9+u*r*.9,(1.2+Math.random()*1.6)*r*(o.up??1),Math.sin(l)*c*.9+(o.vz||0),(o.size||.11)*(.6+Math.random()*.8),.5+Math.random()*.5,o.kind??0,o.grav??1)}}sparkle(e,t){for(let n=0;n<t;n++){let s=new M().randomDirection().multiplyScalar(1+Math.random()*2.5);this.emit(e.x,e.y,e.z,s.x,s.y+.6,s.z,.16+Math.random()*.2,.45+Math.random()*.45,2,-.1)}}addSource(e){e.carry=0,this.sources.push(e)}update(e){for(let t of this.sources)for(t.carry+=t.rate*e;t.carry>=1;t.carry--){let n=Math.random()*Math.PI*2,s=Math.random()*t.spread;this.emit(t.pos.x+Math.cos(n)*s,t.pos.y+.05,t.pos.z+Math.sin(n)*s,Math.cos(n)*.6,t.up*(.5+Math.random()*.7),Math.sin(n)*.6,t.size*(.6+Math.random()*.8),.5+Math.random()*.6,t.kind,t.kind===1?.15:1,[t.pos.x,t.pos.y,t.pos.z,0,1,0])}for(let t=0;t<this.n;t++){if(this.life[t]<=0){this.alphaA[t]=0,this.sizeA[t]=0;continue}this.life[t]-=e;let n=t*3;this.v[n+1]-=9.81*this.grav[t]*e,this.kind[t]===1&&(this.v[n]*=1-e*2,this.v[n+2]*=1-e*2,this.v[n+1]*=1-e*3),this.p[n]+=this.v[n]*e,this.p[n+1]+=this.v[n+1]*e,this.p[n+2]+=this.v[n+2]*e;let s=1-this.life[t]/this.max[t];this.alphaA[t]=Math.min(1,s*8)*(1-s*s),this.sizeA[t]=this.size0[t]*(this.kind[t]===1?.7+s*1.2:this.kind[t]===2?Math.sin(Math.min(1,s*1.4)*Math.PI):1);let r=t*6,o=this.fl[r+3],a=this.fl[r+4],l=this.fl[r+5];this.kind[t]===0&&(o!==0||a!==0||l!==0)&&(this.p[n]-this.fl[r])*o+(this.p[n+1]-this.fl[r+1])*a+(this.p[n+2]-this.fl[r+2])*l<-.05&&this.v[n]*o+this.v[n+1]*a+this.v[n+2]*l<0&&(this.life[t]=0)}this.posAttr.needsUpdate=this.sizeAttr.needsUpdate=this.alphaAttr.needsUpdate=this.kindAttr.needsUpdate=!0}},Bd=0;function lo(i,e,t){ar.uRipples.value[Bd].set(i,e,Z.time,t),Bd=(Bd+1)%tr}var VE=1.04;function GE(i){let e=i.scene;Z.repairedNormals=bc(e);let t=new Zt().setFromObject(e),n=t.getSize(new M),s=t.getCenter(new M),r=VE/n.x;e.position.copy(s).multiplyScalar(-r),e.scale.setScalar(r),Ve.fur={uCentre:{value:new M},uUp:{value:new M(0,1,0)},uRadius:{value:n.y*r*.5},uKey:{value:new M(.35,.85,-.42).normalize()},uTime:{value:0},uSky:{value:new oe(1,.86,1)},uGround:{value:new oe(.55,.42,.95)},uRim:{value:new oe(1,.55,.88)},uTip:{value:new oe(1,.8,.96)},uSpike:{value:0}},e.traverse(c=>{c.isMesh&&(c.material=new We({uniforms:{map:{value:c.material.map},...Ve.fur},vertexShader:Um,fragmentShader:Dm,side:Qe}))});let o=new Ge;o.add(e);let a=new Ge;a.add(o);let l=new Ge;l.add(a),Pt.add(l),et={root:l,tilt:a,squash:o,height:n.y*r,lane:1,x:0,xv:0,z:Fe.startZ,y:0,speed:0,air:!1,vy:0,yAbs:0,pitch:0,lean:0,yaw:0,flip:0,spin:0,spinV:0,sq:0,sqV:0,look:0,lookT:2.5,lastSlope:0,downhill:0,wakeCarry:0,foamCarry:0,bobRipple:0}}function Jd(){let i=et;Object.assign(i,{lane:1,x:0,xv:0,z:Fe.startZ,speed:0,air:!1,vy:0,pitch:0,lean:0,yaw:0,flip:0,spin:0,spinV:0,sq:0,sqV:0}),i.yAbs=Xi(Fe,0,Fe.startZ,Z.time)+.34;for(let e of[...hc,...dc,...fc])e.live=!0,e.pop=-1,e.obj.visible=!0,e.obj.scale.setScalar(1),e.obj.position.copy(e.home);Z.socks=0,Z.phase!=="loading"&&cr(),Ft&&(Ft.n=0),gt.snap=!0}function xa(i){if(Z.phase!=="running")return;let e=Math.max(0,Math.min(2,et.lane+i));if(e===et.lane){et.sqV+=2;return}et.lane=e;let t=et;ft.burstT(t.x,Xi(Fe,t.x,t.z,Z.time)+.05,t.z,16,1,{dir:zn(e)>t.x?1:-1,vz:t.speed*.5}),lo(t.x,t.z,1),Z.lastGesture={t:Z.time,lane:e},ni("swish")}function Qd(){if(Z.phase!=="running"||et.air)return;et.air=!0,et.vy=6.2,et.flip=0,et.sqV+=6;let i=et;ft.burstT(i.x,i.yAbs-.34+.05,i.z,20,1.1,{vz:i.speed*.4}),lo(i.x,i.z,1.2),ni("splash")}function ef(){Z.phase==="running"&&(et.spinV=Math.PI*2/.5,et.spinLeft=Math.PI*2,ni("swish"))}function WE(i){if(Z.phase!=="running")return!1;let e=et;if(Mt){if(Z.turboT>0||Z.blastT>0||Z.guardT>0||Z.outT>=0)return ft.sparkle(e.root.position.clone().add(new M(i*.5,.4,0)),14),ni("swish"),!1;Z.hearts=Math.max(0,Z.hearts-1),Z.knocks++,Z.guardT=jt.hurtGuard,cr(),ya("heartPill"),$E(),Z.hearts===0&&(Z.outT=0,at("r2Toast").classList.add("show"))}e.lane=1,e.speed*=.55,e.sqV-=12;let t=Xi(Fe,e.x,e.z,Z.time);return ft.burstT(e.x,t+.1,e.z,40,1.6,{dir:-i,vz:e.speed*.3}),ft.burstT(e.x,t+.05,e.z,8,.9,{kind:1,size:.24,grav:.15,up:.6}),lo(e.x,e.z,1.6),ni("splash"),Z.bumps=(Z.bumps||0)+1,!0}function XE(i){let e=et,t=Z.time,n=Z.phase==="running",s=Kl(Fe,e.x,e.z),r=s+Math.tan(Tt.pitch(e.z)),o=n?7*(1+Be.clamp(-r*1.6,-.22,.4))*(Mt&&Z.turboT>0?jt.turboSpeed:1):0;e.speed+=(o-e.speed)*Math.min(1,i*(n?2.2:4)),e.z+=e.speed*i;{let f=11.11111111111111,p=f*i,v=1/(1+p+.48*p*p+.235*p*p*p),g=zn(e.lane),m=e.x-g,_=(e.xv+f*m)*i;e.xv=(e.xv-f*_)*v,e.x=g+(m+_)*v}let a=Xi(Fe,e.x,e.z,t),l=Math.sin(t*1.7*Math.PI*2)*.05,c=a+.34+l;e.air?(e.vy-=17*i,e.yAbs+=e.vy*i,e.flip=Math.min(Math.PI*2,e.flip+i*(Math.PI*2)/.62),e.yAbs<=c&&e.vy<0&&(e.air=!1,e.flip=0,e.sqV-=9+Math.min(8,-e.vy),ft.burstT(e.x,a+.05,e.z,34,1.4,{vz:e.speed*.5}),ft.burstT(e.x,a+.05,e.z,6,.8,{kind:1,size:.22,grav:.15,up:.5}),lo(e.x,e.z,1.6),ni("splash"))):e.yAbs=c,e.downhill+=(Be.clamp(-r*4,0,1)-e.downhill)*Math.min(1,i*4);let u=Math.max(0,r-e.lastSlope)/Math.max(i,.001);if(n&&!e.air&&u>.35&&e.lastSlope<-.1){for(e.splashCarry=(e.splashCarry||0)+u*i*36;e.splashCarry>=1;e.splashCarry--)ft.emitT(e.x+(Math.random()*2-1)*.55,a+.05,e.z+.2+Math.random()*.4,(Math.random()*2-1)*2.2,2.2+Math.random()*2.4,e.speed*(.6+Math.random()*.3),.07+Math.random()*.08,.6+Math.random()*.4,0);e.sqV-=u*i*25,(!e.splashRipple||Z.time-e.splashRipple>.4)&&(lo(e.x,e.z,1.4),e.splashRipple=Z.time,ni("splash"))}if(e.pitch+=(Math.atan(s)*.9-e.pitch)*Math.min(1,i*6),e.lean+=(Be.clamp(-e.xv*.22,-.45,.45)-e.lean)*Math.min(1,i*10),e.yaw+=(Be.clamp(e.xv*.1,-.3,.3)-e.yaw)*Math.min(1,i*8),e.spinLeft>0){let f=Math.min(e.spinLeft,e.spinV*i);e.spin+=f,e.spinLeft-=f}else e.spin=0;e.sqV+=(-e.sq*90-e.sqV*9)*i,e.sq+=e.sqV*i,n?e.look=Math.max(0,e.look-i/.3):(e.lookT-=i,e.lookT<0?(e.look=Math.min(1,e.look+i/.55),e.lookT<-1.6&&(e.lookT=4.5)):e.look=Math.max(0,e.look-i/.55));let h=Be.smoothstep(e.look,0,1)*Math.PI*.92;Tt.map(e.x,e.yAbs,e.z,e.root.position),Tt.quaternion(e.z,e.root.quaternion),e.tilt.rotation.set(-e.pitch+(e.air?-e.flip:0)+Math.sin(t*3.4)*.03*(n?1:.4),e.yaw+e.spin+h,e.lean+Math.sin(t*2.2)*.04,"YXZ");let d=1+e.sq*.25;if(e.squash.scale.set(1/Math.sqrt(d),d,1/Math.sqrt(d)),!e.air){let f=e.speed/7;for(e.wakeCarry+=(n?8+22*f+50*e.downhill+Math.abs(e.xv)*18:2)*i;e.wakeCarry>=1;e.wakeCarry--){let p=Math.random()<.5?-1:1;ft.emitT(e.x+p*(.25+Math.random()*.25),a+.04,e.z-.15-Math.random()*.3,p*(.5+Math.random()*1.2)-e.xv*.4,1+Math.random()*(1.6+2.2*e.downhill),e.speed*(.35+Math.random()*.3),.04+Math.random()*.07,.45+Math.random()*.4,0)}for(e.bowCarry=(e.bowCarry||0)+(n?6+18*f+24*e.downhill:0)*i;e.bowCarry>=1;e.bowCarry--){let p=Math.random()<.5?-1:1,v=Math.random()*.9;ft.emitT(e.x+p*(.42+Math.random()*.15),a+.08,e.z+.15+v*.3,p*(.9+Math.random()*1.1)-e.xv*.3,1.4+Math.random()*1.6,e.speed*(.55+Math.random()*.25),.04+Math.random()*.05,.4+Math.random()*.3,0)}for(e.foamCarry+=(n?1.5+3*f+5*e.downhill:.8)*i;e.foamCarry>=1;e.foamCarry--){let p=Math.random()<.5?-1:1;ft.emitT(e.x+p*(.32+Math.random()*.25),a+.05,e.z-.35-Math.random()*.6,p*.45,.2,e.speed*.75,.1+Math.random()*.12,.45+Math.random()*.3,1,.1)}if(!n)for(e.restBubbles=(e.restBubbles||0)+14*i;e.restBubbles>=1;e.restBubbles--){let p=Math.random()*Math.PI*2,v=.42+Math.random()*.28;ft.emitT(e.x+Math.cos(p)*v,a+.02,e.z+Math.sin(p)*v*.7,Math.cos(p)*.15,.25+Math.random()*.3,0,.07+Math.random()*.09,1+Math.random()*.8,0,-.03)}e.bobRipple-=i,e.bobRipple<0&&(lo(e.x,e.z,n?.35:.6),e.bobRipple=n?.45:1.2)}ar.uPlayer.value.set(e.x,a,e.z),ar.uPlayerMove.value.set(e.xv,e.speed/7,e.downhill),e.lastSlope=r,Ve.fur.uTime.value=t,Ve.fur.uCentre.value.copy(e.root.position),Tt.frame(e.z,Oe),Ve.fur.uUp.value.copy(Oe.U),document.body.classList.toggle("inDrum",n&&e.z>Fe.tunnelStart-.5),Ft&&sw(),n&&e.z>Fe.tunnelEnd-2&&ZE()}function qE(i){let e=et;if(Z.guardT=Math.max(0,Z.guardT-i),Z.blastT>0&&(Z.blastT=Math.max(0,Z.blastT-i),Is.clearBrushes&&Is.clearBrushes(e.z-1,e.z+jt.blastReach)),Z.turboT>0)for(Z.turboT=Math.max(0,Z.turboT-i),(!e.spinLeft||e.spinLeft<.5)&&(e.spinV=Math.PI*2/.32,e.spinLeft=Math.PI*2),e.turboCarry=(e.turboCarry||0)+i*60;e.turboCarry>=1;e.turboCarry--){let t=Math.random()*Math.PI*2,n=Xi(Fe,e.x,e.z,Z.time);ft.emitT(e.x+Math.cos(t)*.5,n+.1+Math.random()*.4,e.z+Math.sin(t)*.3,Math.cos(t)*2.2,.8+Math.random(),e.speed*.4,.08+Math.random()*.07,.4+Math.random()*.3,0)}Z.outT>=0&&(Z.outT+=i,Z.outT>=jt.outOfHearts&&N0()),at("r2Shield").classList.toggle("on",Z.blastT>0||Z.turboT>0)}function YE(i){let e=et,t=xE;if(Z.phase!=="running"||e.z<Fe.tunnelStart-.3)return;let n=$d?{...un.spray,..._n.spray,...cc?ut.spray:{}}:un.spray,s=Xi(Fe,e.x,e.z,Z.time);if(!e.air)for(e.r3Spray=(e.r3Spray||0)+n.rate*i;e.r3Spray>=1;e.r3Spray--){let o=t()<.5?-1:1,a=t();ft.emitT(e.x+o*(.38+t()*.3),s+.05,e.z-.25+a*.5,o*(.4+t()*1.4)-e.xv*.3,1.6+t()*2.2,e.speed*(.45+t()*.35),n.size[0]+t()*(n.size[1]-n.size[0]),.45+t()*.35,3,.9)}let r=un.sparkles;for(e.r3Spark=(e.r3Spark||0)+r.rate*i;e.r3Spark>=1;e.r3Spark--){let o=t()*Math.PI*2,a=r.r[0]+t()*(r.r[1]-r.r[0]),l=r.du[0]+t()*(r.du[1]-r.du[0]);Tt.frame(e.z+l,Oe);let c=0+1.5+Math.sin(o)*a;if(c<.35)continue;let u=Oe.P.clone().addScaledVector(Oe.R,Math.cos(o)*a).addScaledVector(Oe.U,c);ft.emit(u.x,u.y,u.z,0,.05,0,.1+t()*.14,.5+t()*.5,2,0)}}function tf(){if(!Mt||Z.phase!=="running"||Z.paused||Z.blasts<=0||Z.blastT>0||Z.outT>=0)return!1;Z.blasts--,Z.blastT=jt.blastTime;let i=et,e=Xi(Fe,i.x,i.z,Z.time);for(let t=0;t<46;t++){let n=Math.random()*Math.PI*2,s=Math.random()*.5;ft.emitT(i.x+Math.cos(n)*s*.6,e+.5+Math.sin(n)*s*.5,i.z+.4,Math.cos(n)*.9,.4+Math.random()*.8,i.speed+4+Math.random()*5,.16+Math.random()*.2,.9+Math.random()*.6,1,-.05)}return Is.clearBrushes&&Is.clearBrushes(i.z-1,i.z+jt.blastReach),ya("blastBtn"),ni("gem"),cr(),!0}function nf(){return!Mt||Z.phase!=="running"||Z.paused||Z.turbos<=0||Z.turboT>0||Z.outT>=0?!1:(Z.turbos--,Z.turboT=jt.turboTime,ya("turboBtn"),ni("swish"),cr(),!0)}function ma(i){(!Mt||Z.phase!=="running")&&(i=!1),Z.paused=!!i,document.body.classList.toggle("paused",Z.paused),at("pausePanel").hidden=!Z.paused,Wt&&(Z.paused?Wt.suspend?.():Wt.resume?.()),Yd=performance.now(),Z.paused&&at("resumeBtn").focus({preventScroll:!0})}function $E(){let i=at("r2Hurt");i.classList.remove("go"),i.offsetWidth,i.classList.add("go")}function N0(){Z.outT=-1,Z.restarts++,at("r2Toast").classList.remove("show"),Object.assign(Z,{hearts:jt.hearts,blasts:jt.blasts,turbos:jt.turbos,blastT:0,turboT:0,guardT:0}),Jd(),Z.phase="intro",document.body.classList.remove("running","inDrum"),cr()}Mt&&(Is.pop=i=>{ft.sparkle(i,22);for(let e=0;e<14;e++){let t=new M().randomDirection();ft.emit(i.x+t.x*.6,i.y+t.y*.6,i.z+t.z*.6,t.x,t.y+.5,t.z,.2+Math.random()*.2,.7,1,-.05)}});function ZE(){Z.laps++;let i=at("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),Jd(),Z.phase="running"}var co={off:new M(0,1,-6.4),look:new M(0,.5,5.97),fov:40},Ps={off:new M(0,1.03,-3.58),look:new M(0,.89,6.42),fov:60};Yi&&(Ps.look.y=un.camera.lookY);$d&&(Ps.look.y=_n.camera.lookY);if(cc&&ut.camera){let i=ut.camera;Ps.off.set(...i.off),Ps.look.y=i.lookY,Ps.fov=i.fov}gt={snap:!0,x:0,y:0,tilt:0,shake:0};function KE(i){let e=et,t=Be.smoothstep(e.z,-4,Fe.tunnelStart+(oo?ir.camBlendEnd:3)),n=co.off.clone().lerp(Ps.off,t),s=co.look.clone().lerp(Ps.look,t),r=Be.lerp(co.fov,Ps.fov,t),o=Hn(Fe,e.x,e.z)+.34,a=e.x*.55,l=o+(e.yAbs-o)*.35,c=0;for(let R=1;R<=6;R++)c+=Kl(Fe,e.x,e.z+R*1.2);c/=6;let u=Z.phase==="running"?c:0,h=gt.snap;gt.snap&&(gt.x=a,gt.y=l,gt.tilt=u,gt.snap=!1);let d=1-Math.exp(-i/.14);gt.x+=(a-gt.x)*d,gt.y+=(l-gt.y)*(1-Math.exp(-i/.12)),gt.tilt+=(u-gt.tilt)*(1-Math.exp(-i/.35));let f=gt.x+n.x,p=gt.y+n.y+gt.tilt*n.z*.6,v=e.z+n.z;Tt.frame(e.z,Oe),(h||!gt.fT)&&(gt.fP=Oe.P.clone(),gt.fR=Oe.R.clone(),gt.fU=Oe.U.clone(),gt.fT=Oe.T.clone());let g=1-Math.exp(-i/.25);gt.fP.copy(Oe.P),gt.fT.lerp(Oe.T,g).normalize(),gt.fU.lerp(Oe.U,g),gt.fR.crossVectors(gt.fU,gt.fT).normalize(),gt.fU.crossVectors(gt.fT,gt.fR).normalize();let m=(R,w,A,C)=>C.copy(gt.fP).addScaledVector(gt.fR,R).addScaledVector(gt.fU,w).addScaledVector(gt.fT,A),_=m(f,p,n.z,new M),x=m(gt.x+s.x,gt.y+s.y+gt.tilt*s.z,s.z,new M);if(Tt.frame(v,Oe),v>-.25&&v<Fe.tunnelEnd){let R=_.clone().sub(Oe.P),w=R.dot(Oe.R),A=R.dot(Oe.U)-(0+1.5),C=R.dot(Oe.T),T=Math.hypot(w,A),b=Fe.clearRadius-.4;T>b&&_.copy(Oe.P).addScaledVector(Oe.R,w/T*b).addScaledVector(Oe.U,0+1.5+A/T*b).addScaledVector(Oe.T,C)}vn.up.set(0,1,0).lerp(Oe.U,.75).normalize(),vn.position.copy(_),vn.lookAt(x);let y=vn.aspect;vn.fov=y>=.5?r:Be.radToDeg(2*Math.atan(Math.tan(Be.degToRad(r)/2)*.5/y)),vn.updateProjectionMatrix()}function jE(i){let e=Z.time,t=et.root.position,n=r=>r.obj.position.distanceTo(t)<.4+.42;for(let r of hc)if(!(!r.live&&r.pop<0)){if(r.pop>=0){kd(r,i);continue}r.obj.position.y=r.home.y+Math.sin(e*1.2*6.283+r.phase)*.08,r.q0?r.obj.quaternion.copy(r.q0).multiply(JE.setFromAxisAngle(QE,Math.sin(e*2-r.u*.9)*.5)):r.obj.rotation.y+=i*Be.degToRad(120),Mt&&Od(r),Z.phase==="running"&&n(r)&&Vd(r)}for(let r of dc)if(!(!r.live&&r.pop<0)){if(r.pop>=0){kd(r,i);continue}if(r.spin+=i*Be.degToRad(70),r.obj.position.y=r.home.y+Math.sin(e*.75*6.283+r.phase)*.1,r.obj.rotation.set(Math.sin(e*.9+r.phase)*.16,r.spin,Math.sin(e*.7+r.phase*1.3)*.12),Mt&&Od(r),Z.phase==="running"&&n(r)&&Vd(r),Math.random()<i*(1.2+10*Math.max(0,1-r.obj.position.distanceTo(t)/6))){let o=r.obj.position.clone().add(new M().randomDirection().multiplyScalar(.22));ft.emit(o.x,o.y,o.z,0,.1,0,.12+Math.random()*.1,.35,2,0)}}for(let r of fc)if(!(!r.live&&r.pop<0)){if(r.pop>=0){kd(r,i);continue}r.obj.position.y=r.home.y+Math.sin(e*.9*6.283+r.phase)*.09,r.turn.rotation.set(Math.sin(e*1.3+r.phase)*.12,Math.PI+Math.sin(e*.8+r.phase)*.45,Math.sin(e*1.1+r.phase*1.7)*.15),Mt&&Od(r),Z.phase==="running"&&n(r)&&Vd(r)}let s=dc.reduce((r,o)=>o.live?Math.max(r,1-Math.min(1,o.obj.position.distanceTo(t)/6)):r,0);for(let r of Ve.gemMaterials||[])r.emissiveIntensity=.35+.6*s}var JE=new bt,QE=new M(0,1,0);function Od(i){let e=et.z-i.u,t=Be.clamp((e-.6)/1,0,1);i.obj.scale.setScalar(1-t+.001),i.obj.visible=t<1}function kd(i,e){i.pop+=e;let t=Math.min(1,i.pop/.35);i.obj.position.lerp(et.root.position.clone().add(new M(0,Mt?1:.6,0)),t),i.obj.scale.setScalar((1+(Mt?.15:.6)*Math.sin(t*Math.PI))*(1-t)+.001),t>=1&&(i.pop=-1,i.obj.visible=!1)}function Vd(i){i.live=!1,i.pop=0,i.kind==="coin"?(Z.coins++,Z.collected.coins++,ft.sparkle(i.obj.position,7),ni("coin")):i.kind==="sock"?(Z.socks++,Z.collected.socks=(Z.collected.socks||0)+1,ft.sparkle(i.obj.position,16),ni("gem"),ya("sockPanel")):(Z.gems++,Z.collected.gems++,ft.sparkle(i.obj.position,18),ni("gem"),ya("gemPill")),cr()}function cr(){Mt&&(at("hearts").innerHTML=Z.hearts>=jt.hearts?`${Z.hearts} <small>Full</small>`:String(Z.hearts),at("blastCount").textContent=String(Z.blasts),at("turboCount").textContent=String(Z.turbos),at("blastBtn").disabled=Z.blasts<=0,at("turboBtn").disabled=Z.turbos<=0),at("coins").textContent=Z.coins.toLocaleString("en-US"),at("gems").textContent=String(Z.gems),at("sockCount").textContent=`${Math.min(5,Z.socks)}/5`,at("sockBar").style.width=`${Math.min(5,Z.socks)*20}%`}function ya(i){let e=at(i);e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}function ho(){Z.phase==="intro"&&(Z.phase="running",Z.startedAt=Z.time,document.body.classList.add("running"),nw())}var ew=["banner","startPanel"].map(i=>at(i)),ha=at("openingArt");function tw(){let i=Z.phase==="running"?Z.time-Z.startedAt:-1,e=i<0?0:Be.smoothstep(i,0,.45);for(let t of ew)t.style.opacity=(1-e).toFixed(3),t.style.transform=`translateX(-50%) translateY(calc(var(--u) * ${(12*e).toFixed(2)}))`,t.style.visibility=e>=1?"hidden":"";if(at("hint").classList.toggle("show",i>=.3&&i<3.8&&Z.laps===0),ha){let t=Un.art&&e<1&&ha.complete&&ha.naturalWidth>0&&document.body.classList.contains("ready");document.body.classList.toggle("openingArt",t),ha.style.visibility=t?"visible":"hidden",ha.style.opacity=(1-e).toFixed(3),at("soundBtn").style.opacity=t?e.toFixed(3):""}if(Mt){let t=i<0?0:Be.smoothstep(i,.1,.55);document.body.classList.toggle("r2Play",t>0);let n=document.body.classList.contains("openingArt");at("soundBtn").style.opacity=String(n?e*(1-t):1-t),at("soundBtn").style.visibility=t>=1?"hidden":"";for(let s of["pauseBtn","blastBtn","turboBtn"]){let r=at(s);r.style.opacity=t.toFixed(3),r.style.visibility=t>0?"":"hidden"}}}var Wt=null,Cs=null;function nw(){if(!(Wt||C0))try{Wt=new(window.AudioContext||window.webkitAudioContext),Cs=Wt.createGain(),Cs.gain.value=Z.sound?.5:0,Cs.connect(Wt.destination);let i=Wt.createBuffer(1,Wt.sampleRate*2,Wt.sampleRate),e=i.getChannelData(0);for(let r=0;r<e.length;r++)e[r]=Math.random()*2-1;let t=Wt.createBufferSource();t.buffer=i,t.loop=!0;let n=Wt.createBiquadFilter();n.type="lowpass",n.frequency.value=900;let s=Wt.createGain();s.gain.value=.06,t.connect(n).connect(s).connect(Cs),t.start()}catch{Wt=null}}function Gd(i,e,t,n,s="sine"){let r=Wt.createOscillator(),o=Wt.createGain();r.type=s,r.frequency.value=i,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(n,e+.005),o.gain.exponentialRampToValueAtTime(1e-4,e+t),r.connect(o).connect(Cs),r.start(e),r.stop(e+t+.05)}function ni(i){if(!Wt||!Z.sound)return;let e=Wt.currentTime;if(i==="coin")Gd(1318.5,e,.12,.25,"triangle"),Gd(1975.5,e+.06,.22,.2,"triangle");else if(i==="gem")[1567.98,2093,2637.02,3135.96].forEach((t,n)=>Gd(t,e+n*.045,.5,.18));else if(i==="splash"||i==="swish"){let t=i==="splash"?.35:.18,n=Wt.createBuffer(1,Wt.sampleRate*t,Wt.sampleRate),s=n.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=(Math.random()*2-1)*Math.pow(1-l/s.length,2);let r=Wt.createBufferSource();r.buffer=n;let o=Wt.createBiquadFilter();o.type="bandpass",o.frequency.value=i==="splash"?700:1800,o.Q.value=.8;let a=Wt.createGain();a.gain.value=i==="splash"?.5:.18,r.connect(o).connect(a).connect(Cs),r.start(e)}}var hi=null,R0=["left","middle","right"],ac=[],da=null;function sf(i,e){if(!_c)return;let t=xn.getBoundingClientRect();ac.push({x:i.clientX-t.left,y:i.clientY-t.top,t:Z.time,down:e}),ac.length>80&&ac.shift()}function vc(i){_c&&(da={text:i,t:Z.time})}xn.addEventListener("pointerdown",i=>{i.target.closest("button")||Mt&&Z.paused||(hi={x:i.clientX,y:i.clientY,t:performance.now(),used:!1},xn.setPointerCapture?.(i.pointerId),sf(i,!0))});xn.addEventListener("pointermove",i=>{if(!hi||(sf(i,!0),hi.used))return;let e=i.clientX-hi.x,t=i.clientY-hi.y,n=Math.max(24,xn.clientWidth*.06);if(Math.abs(e)>n&&Math.abs(e)>Math.abs(t)){hi.used=!0,Z.phase==="intro"&&ho();let s=et.lane;xa(e<0?-1:1),vc(`Swipe ${e<0?"\u2190":"\u2192"}  \xB7  ${s===et.lane?"edge lane":`lane ${R0[s]} \u2192 ${R0[et.lane]}`}`)}else t<-n&&Math.abs(t)>Math.abs(e)&&(hi.used=!0,Z.phase==="intro"&&ho(),Qd(),vc("Swipe \u2191  \xB7  jump"))});xn.addEventListener("pointerup",i=>{hi&&(sf(i,!1),!hi.used&&performance.now()-hi.t<400&&(Z.phase==="intro"?(ho(),vc("Tap  \xB7  start")):(ef(),vc("Tap  \xB7  spin"))),hi=null)});window.addEventListener("keydown",i=>{if(Z.phase==="loading")return;let e=i.key;if(Mt&&Z.phase==="running"){if(e==="p"||e==="P"||e==="Escape"){ma(!Z.paused),i.preventDefault();return}if(Z.paused)return;if(e==="b"||e==="B"){tf();return}if(e==="t"||e==="T"){nf();return}}if(Z.phase==="intro"&&[" ","Enter","ArrowLeft","ArrowRight","ArrowUp","a","d","w"].includes(e)&&(ho(),e===" "||e==="Enter")){i.preventDefault();return}e==="ArrowLeft"||e==="a"?xa(-1):e==="ArrowRight"||e==="d"?xa(1):e==="ArrowUp"||e==="w"?Qd():e===" "&&(i.preventDefault(),ef())});function H0(){Z.sound=!Z.sound,at("soundBtn").setAttribute("aria-pressed",String(!Z.sound)),at("soundBtn").title=Z.sound?"Sound on":"Sound off",Cs&&(Cs.gain.value=Z.sound?.5:0),Mt&&(at("pauseSound").textContent=Z.sound?"Sound: On":"Sound: Off",at("pauseSound").setAttribute("aria-pressed",String(Z.sound)))}at("soundBtn").addEventListener("click",H0);if(Mt){document.body.classList.add("r2"),at("hint").after(at("r2Hud").content.cloneNode(!0));for(let i of["pauseBtn","blastBtn","turboBtn","pausePanel","r2Toast","r2Hurt","r2Shield"])at(i).hidden=!1;at("pausePanel").hidden=!0,at("blastBtn").addEventListener("click",i=>{i.currentTarget.blur(),tf()}),at("turboBtn").addEventListener("click",i=>{i.currentTarget.blur(),nf()}),at("pauseBtn").addEventListener("click",i=>{i.currentTarget.blur(),ma(!0)}),at("resumeBtn").addEventListener("click",()=>ma(!1)),at("pauseSound").addEventListener("click",H0),at("restartBtn").addEventListener("click",()=>{ma(!1),N0()})}var Ft=null;function iw(){let i=new yi(-1,1,1,-1,.1,500),e=new Ge;Pt.add(e);let t=[],n=[],s=0;for(let u=Fe.startZ-10;u<=Fe.tunnelEnd+8;u+=.2,s++){let h=Tt.map(0,Hn(Fe,0,u),u);if(t.push(h.x,h.y,h.z,h.x,h.y-.45,h.z),s){let d=s*2;n.push(d-2,d-1,d,d-1,d+1,d)}}let r=new tt;r.setAttribute("position",new Xe(t,3)),r.setIndex(n),e.add(new Re(r,new Lt({color:2063871,side:Qe})));for(let u of[1.5+Fe.tunnelRadius,1.5-Fe.tunnelRadius]){let h=[];for(let d=Fe.tunnelStart;d<=Fe.tunnelEnd;d+=.5)h.push(Tt.map(0,u,d));e.add(new Re(new js(new hs(h),h.length*2,.05,6),new Lt({color:14721056})))}let o=1200,a=new Float32Array(o*3),l=new tt;l.setAttribute("position",new nt(a,3)),l.setDrawRange(0,0);let c=new zi(l,new Ys({color:16719774,size:5,sizeAttenuation:!1}));c.frustumCulled=!1,e.add(c);for(let u of[Ve.castle,or,Ve.machinery,Ve.sideMachinery,lr&&lr.root,ga&&ga.tunnel,Ve.falls,Ve.bubbles,...Ve.drumMeshes||[],...Ve.exitLight||[],...va.map(h=>h.g)])u&&(u.visible=!1);Ft={cam:i,g:e,dots:c,tp:a,n:0,N:o,yc:1,width:22,startY:et.root.position.y}}function sw(){let i=et.root.position;Ft.n>=Ft.N&&(Ft.tp.copyWithin(0,3),Ft.n=Ft.N-1),i.toArray(Ft.tp,Ft.n*3),Ft.n++,Ft.dots.geometry.attributes.position.needsUpdate=!0,Ft.dots.geometry.setDrawRange(0,Ft.n)}function rw(){let i=xn.clientWidth,e=xn.clientHeight,t=et.root.position,n=Ft.cam,s=Ft.width,r=s*e/i;return n.left=-s*.36,n.right=s*.64,n.top=r/2,n.bottom=-r/2,n.updateProjectionMatrix(),n.position.set(t.x-60,Ft.yc,t.z),n.up.set(0,1,0),n.lookAt(t.x,Ft.yc,t.z),{width:s,height:r,left:t.z+n.left}}var fa=at("overlay"),ot=fa.getContext("2d");function ow(){let i=xn.clientWidth,e=xn.clientHeight;(fa.width!==i||fa.height!==e)&&(fa.width=i,fa.height=e),ot.clearRect(0,0,i,e),Ft&&lw(i,e),_c&&aw(i,e)}function lc(i,e,t,n,s=1,r="center"){ot.font=`600 ${n}px Fredoka, system-ui, sans-serif`;let o=ot.measureText(i).width,a=n*.6,l=r==="center"?e-o/2-a:e-a;ot.globalAlpha=s*.82,ot.fillStyle="#141c5c",ot.beginPath(),ot.roundRect(l,t-n*.95,o+a*2,n*1.6,n*.8),ot.fill(),ot.globalAlpha=s,ot.fillStyle="#fff",ot.textAlign=r==="center"?"center":"left",ot.fillText(i,e,t+n*.1),ot.globalAlpha=1}function aw(i,e){let t=ac.filter(n=>Z.time-n.t<.5);if(t.length){ot.lineCap="round",ot.lineJoin="round";for(let r=1;r<t.length;r++){let o=t[r-1],a=t[r],l=Z.time-a.t;ot.strokeStyle=`rgba(255,255,255,${Math.max(0,.85-l*1.6)})`,ot.lineWidth=14*(1-l),ot.beginPath(),ot.moveTo(o.x,o.y),ot.lineTo(a.x,a.y),ot.stroke()}let n=t[t.length-1],s=Z.time-n.t;ot.fillStyle=`rgba(255,255,255,${Math.max(0,.9-s*1.8)})`,ot.strokeStyle=`rgba(255,79,184,${Math.max(0,.9-s*1.8)})`,ot.lineWidth=3,ot.beginPath(),ot.arc(n.x,n.y,15,0,Math.PI*2),ot.fill(),ot.stroke()}da&&Z.time-da.t<1&&lc(da.text,i/2,e*.86,Math.round(e*.024),Math.min(1,(1-(Z.time-da.t))*3))}function lw(i,e){let t=Ft.frame,n=et.root.position,s=c=>(Ft.cam.top-(c-Ft.yc))/t.height*e;ot.font=`500 ${Math.round(e*.022)}px Fredoka, system-ui, sans-serif`,ot.textAlign="left";for(let c=-3;c<=6;c+=.5){let u=s(c);if(u<0||u>e)continue;let h=Math.abs(c-Math.round(c))<1e-6;ot.strokeStyle=h?"rgba(40,30,110,0.45)":"rgba(40,30,110,0.18)",ot.lineWidth=h?1.5:1,ot.beginPath(),ot.moveTo(0,u),ot.lineTo(i,u),ot.stroke(),h&&(ot.fillStyle="rgba(30,20,90,0.85)",ot.fillText(`${c>=0?"+":""}${c.toFixed(0)} m`,8,u-4))}let r=(n.z-t.left)/t.width*i,o=s(n.y);ot.strokeStyle="#ff1f9e",ot.setLineDash([6,5]),ot.lineWidth=2,ot.beginPath(),ot.moveTo(r,o),ot.lineTo(i*.9,o),ot.stroke(),ot.setLineDash([]);let a=Tt.angles(et.z),l=Math.round(e*.028);lc(`height ${n.y>=0?"+":""}${n.y.toFixed(2)} m`,i*.9-4,o+l*.35,l,1,"left"),lc("SIDE VIEW (debug) \xB7 camera fixed in height \xB7 pink dots = the mascot's real path",i/2,l*1.5,l),lc(`tube pitch ${a.pitch>=0?"+":""}${a.pitch.toFixed(0)}\xB0  \xB7  bank ${a.bank>=0?"+":""}${a.bank.toFixed(0)}\xB0  \xB7  speed ${et.speed.toFixed(1)} m/s${et.air?"  \xB7  jumping":""}`,i/2,e-l*1.2,l)}function rf(){let i=xn.clientWidth,e=xn.clientHeight;$i.setSize(i,e,!1),di.setSize(i,e),di.setPixelRatio(qi),uo.resolution.set(Math.round(i*.5),Math.round(e*.5)),vn.aspect=i/e,ft&&(ft.u.uScale.value=e*qi*.5/Math.tan(Be.degToRad(vn.fov)/2)),xn.style.setProperty("--u",Math.min(e/537,i/269).toFixed(4)+"px")}new ResizeObserver(rf).observe(xn);function xc(i){if(!(Mt&&Z.paused)){Z.time+=i,Mt&&qE(i),Yi&&YE(i),ar.uTime.value=Z.time;for(let e of U0)e.uTime.value=Z.time;Ve.bubbleU.uTime.value=Z.time,XE(i),jE(i);for(let e of va)e.angle+=e.speed*i,mc.setFromAxisAngle(e.axis,e.angle),pc.makeTranslation(e.centre.x,e.centre.y,e.centre.z).multiply(TE.makeRotationFromQuaternion(mc)).multiply(new we().makeTranslation(-e.centre.x,-e.centre.y,-e.centre.z)),e.g.matrix.multiplyMatrices(pc,e.m0);ga.update(i,Z.time),lr.update(i,Z.time);for(let e of Ve.rings)e.material.color.copy(e.userData.base).multiplyScalar(.8+.25*Math.sin(Z.time*2.4+e.userData.pulse));ft.update(i),KE(i),tw(),uc&&uc.update(i,Z.time,Z.phase)}}var Wd=60,oc=0;function yc(){Ft?(Ft.frame=rw(),ft&&(ft.u.uScale.value=xn.clientHeight*qi/Ft.frame.height),$i.render(Pt,Ft.cam)):(ft&&(ft.u.uScale.value=xn.clientHeight*qi*.5/Math.tan(Be.degToRad(vn.fov)/2)),di.render()),(Ft||_c)&&ow()}var Yd=performance.now();function z0(i){if(requestAnimationFrame(z0),Z.phase==="loading"||C0)return;let e=Math.min(.05,(i-Yd)/1e3);Yd=i,xc(e),yc(),Wd+=(1/Math.max(e,.001)-Wd)*.05,oc=Wd<32?oc+e:0,oc>2.5&&(oc=0,uo.enabled?uo.enabled=!1:qi>.75&&(qi=Math.max(.75,qi*.8),$i.setPixelRatio(qi),rf()))}async function cw(){try{Fe=await(await fetch(qd.layout)).json(),Tt=Nm(Fe,$d?{straight:_n.straight,...cc?{curve:ut.path.curve}:{}}:{}),SE();let[e,t,n,s,r,o,a,l,c,u,h,d]=await Promise.all([...["castle","drum","mascot","roller","gem","sock","machinery","tower","gear","pipe","crown"].map(zd),new vs().loadAsync("ui/coin_face.png")]);ft=new gc(Yi?2200:1400),Yi&&(ft.points.material.fragmentShader=ft.points.material.fragmentShader.replace("if (vKind < 0.5) {",`if (vKind > 2.5) {
    float hl = 1.0 - smoothstep(0.0, 0.4, length(p - vec2(-0.3, -0.3)));
    a = (1.0 - smoothstep(0.7, 1.0, r)) * 0.85 + hl * 0.15;
    col = mix(vec3(0.8, 0.93, 1.0), vec3(1.25), clamp(hl + (1.0 - r) * 0.5, 0.0, 1.0));
  } else if (vKind < 0.5) {`),ft.points.material.needsUpdate=!0),bc(e.scene),Kd(e.scene,{saturation:1,brightness:1.06,glow:.35,grade:xm,haze:[.3,14,45,[.86,.79,1]],shade:[.86,.26,.35]}),Ve.castle=AE(e.scene,Fe.castle),DE(t),RE(),CE(),PE(),IE(),FE(s),ga=Bm({scene:Pt,mats:Ve,track:{TR:Tt,L:Fe,W:ro}}),Ve.machinery=ga.root,NE(a),lr=Om({scene:Pt,models:{tower:l,gear:c,pipe:u,crown:h},env:Ve.env,gold:Ve.gold,glowTexture:F0(),fallGeometry:D0,fallMaterial:Ve.fallMat,fx:ft}),Z.decorClear=lr.clear,HE();let f=cc?await Promise.all([zd("coinP2"),zd("coinP2Lo")]):null;BE(r,d,f),kE(o),GE(n),wi&&!Xd&&(uc=ua(rr(3045),()=>E0({scene:Pt,env:Ve.env,TR:Tt,L:Fe,W:ro,mascot:et,camera:vn,Particles:gc,fxScale:ft.u.uScale,waterU:ar,castle:Ve.castle,waterSheets:or.children,renderPass:di.passes[0],bumpMascot:WE,drumMeshes:Ve.drumMeshes,exitLight:Ve.exitLight,r2:Mt?Is:null,bloomPass:uo,outputPass:di.passes[di.passes.length-1],grade:P0,bubbles:Ve.bubbles,rollers:va,sideMachinery:Ve.sideMachinery,fur:Ve.fur,mascotModel:et.squash.children[0],setSideMachinery:p=>(Object.assign(pa,p),jd(),Z.machineryInnerX),get rollerCandidate(){return Z.rollerCandidate},set rollerCandidate(p){Z.rollerCandidate=p}})),await M0(rr(3046),uc.loadExtras)),Xd&&iw(),rf(),Jd(),Z.phase="intro",cr(),xc(1/60),yc(),document.body.classList.add("ready"),at("loading").hidden=!0,B0()}catch(i){console.error(i),at("loadMsg").textContent="The washing machine could not load: "+(i&&i.message?i.message:i)+". Reload the page to try again.",O0(i)}}var B0,O0,uw=new Promise((i,e)=>{B0=i,O0=e});requestAnimationFrame(z0);cw();window.__bw={ready:uw,state:()=>({phase:Z.phase,time:+Z.time.toFixed(3),z:+et.z.toFixed(3),x:+et.x.toFixed(3),y:+et.yAbs.toFixed(3),world:et.root.position.toArray().map(i=>+i.toFixed(3)),path:Object.fromEntries(Object.entries(Tt.angles(et.z)).map(([i,e])=>[i,+e.toFixed(1)])),cameraUp:vn.up.toArray().map(i=>+i.toFixed(3)),lane:et.lane,speed:+et.speed.toFixed(2),air:et.air,slope:+et.lastSlope.toFixed(3),pitchDeg:+Be.radToDeg(et.pitch).toFixed(1),leanDeg:+Be.radToDeg(et.lean).toFixed(1),coins:Z.coins,gems:Z.gems,socks:Z.socks,collected:{...Z.collected},laps:Z.laps,camera:vn.position.toArray().map(i=>+i.toFixed(3)),cameraPitchDeg:+Be.radToDeg(Math.asin(vn.getWorldDirection(new M).y)).toFixed(2),particles:ft?ft.life.reduce((i,e)=>i+(e>0?1:0),0):0,repairedNormals:Z.repairedNormals,machineryInnerX:Z.machineryInnerX??null,decorClear:Z.decorClear??null,rollerCandidate:Z.rollerCandidate??null,...Mt?{hearts:Z.hearts,blasts:Z.blasts,turbos:Z.turbos,paused:Z.paused,blastT:+Z.blastT.toFixed(2),turboT:+Z.turboT.toFixed(2),knocks:Z.knocks,restarts:Z.restarts,bumps:Z.bumps||0}:{}}),blast:()=>tf(),turbo:()=>nf(),pause:i=>ma(i),hazards:()=>Is.hazards?Is.hazards():null,tap:()=>{Z.phase==="intro"?ho():ef()},swipe:i=>{Z.phase==="intro"&&ho(),i==="left"?xa(-1):i==="right"?xa(1):i==="up"&&Qd()},advance:(i,e=30)=>{let t=Math.max(1,Math.round(i*e));for(let n=0;n<t;n++)xc(1/e);return yc(),window.__bw.state()},render:yc,lookBack:i=>{et.look=i,et.lookT=-.5},setBloom:i=>{uo.enabled=!!i},setSideMachinery:i=>(Object.assign(pa,i),jd(),Z.machineryInnerX),setDecor:(i,e,t)=>(t===null?Mi[i].splice(e,1):Mi[i][e]=Object.assign(Mi[i][e]||{},t),Z.decorClear=lr.place(),Z.decorClear),getDecor:()=>JSON.parse(JSON.stringify(Mi)),pick:(i,e)=>{let t=xn.getBoundingClientRect(),n=new Hl;n.setFromCamera(new le(i/t.width*2-1,-(e/t.height)*2+1),vn);let s=n.intersectObjects([Ve.castle,lr.root,Ve.sideMachinery].filter(Boolean),!0)[0];return s?{p:s.point.toArray().map(r=>+r.toFixed(2)),obj:s.object.name||s.object.parent?.name||""}:null},project:i=>{let e=new M(...i).project(vn),t=xn.getBoundingClientRect();return[+((e.x+1)/2*t.width).toFixed(1),+((1-e.y)/2*t.height).toFixed(1)]},setFraming:i=>{i.off&&co.off.set(...i.off),i.look&&co.look.set(...i.look),i.fov&&(co.fov=i.fov),gt.snap=!0},clearanceTrace:(i,e=30)=>{let t=[],n=0+1.5,s=new M,r=o=>o>Fe.tunnelStart+.5&&o<Fe.tunnelEnd-.5;for(let o=0,a=Math.round(i*e);o<a;o++){xc(1/e);let l=et,c=r(l.z)?Math.hypot(l.x,l.yAbs-n)+.4:null,u=null;for(let h=l.z-9;h<=l.z+.5;h+=.05){Tt.frame(h,Oe),s.copy(vn.position).sub(Oe.P);let d=Math.abs(s.dot(Oe.T));(!u||d<u.along)&&(u={along:d,u:h,r:Math.hypot(s.dot(Oe.R),s.dot(Oe.U)-n)})}t.push({t:+Z.time.toFixed(3),z:+l.z.toFixed(2),body:c&&+c.toFixed(3),camera:r(u.u)?+u.r.toFixed(3):null})}return t},debug:()=>({scene:Pt,water:or,mascot:et.root,particles:ft.points,renderer:$i,composer:di,camera:vn,track:Tt,layout:Fe,world:ro,mascotState:et})};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
