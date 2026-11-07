# Offline prototype of the SWIM2 heap field on heroSwell at the start camera (no browser). Mirrors swellGeometry + the
# proposed vertex displacement; prints the projected top silhouette per column against the ORIGINAL's waterline.
import numpy as np, sys, json
sys.path.insert(0,'/tmp/claude-0/-home-user-bubblegame/08b39b21-0dec-5ec1-bc99-07d34f97f077/scratchpad/wv')
from proj import scr, C
D2R=np.pi/180
S2=json.load(open(sys.argv[1])) if len(sys.argv)>1 else None
P=dict(ax=0.95,au=0.55,phiMax=108,cols=216,rows=54,out=0.34,inner=0.22,foot=-0.32,skirt=-0.9,dip=0.0)
line=S2['line']; mounds=[]
def crestAt(phi):
    i=np.clip((phi+110)/5,0,len(line)-1.0001); i0=int(np.floor(i))
    h=line[i0]+(line[i0+1]-line[i0])*(i-i0)
    end=np.clip((abs(phi)-96)/12,0,1); h*=1-end*end*0.85
    return h
def Cxy(phi): return np.array([P['ax']*np.sin(phi*D2R), -P['au']*np.cos(phi*D2R)])
def sOf(phi):
    n=60; s=0; p0=Cxy(0)
    for k in range(1,n+1):
        p1=Cxy(phi*k/n); s+=np.hypot(*(p1-p0)); p0=p1
    return -s if phi<0 else s
cols,rows=P['cols'],P['rows']
pos=np.zeros((cols+1,rows+2,3)); surf=np.zeros((cols+1,rows+2,2))
for i in range(cols+1):
    phi=-P['phiMax']+2*P['phiMax']*i/cols; a=phi*D2R; cx,cu=Cxy(phi)
    nx=np.sin(a)/P['ax']; nu=-np.cos(a)/P['au']; nl=np.hypot(nx,nu); nx/=nl; nu/=nl
    H=crestAt(phi); sc=min(max(H/0.45,1),1.6)**0.8; wo=P['out']*sc; wi=P['inner']*sc; s=sOf(phi)
    for jj,j in enumerate(range(-1,rows+1)):
        th=np.pi*max(j,0)/rows
        o=(wo if th<=np.pi/2 else wi)*np.cos(th); h=P['skirt'] if j<0 else P['foot']+(H-P['foot'])*np.sin(th)
        pos[i,jj]=[cx+nx*o,h,cu+nu*o]; surf[i,jj]=[s,max(j,0)/rows]
# normals by finite differences (grid)
du=np.gradient(pos,axis=0); dv=np.gradient(pos,axis=1)
nrm=np.cross(du,dv); nrm/=np.linalg.norm(nrm,axis=2,keepdims=True)
if nrm[cols//2,(rows+2)//2+1,1]<0: nrm=-nrm
# ---- heap field (python mirror; lattice hash is a stand-in, the designed heaps are exact)
def hsh(x,y,k): return (np.sin(x*127.1+y*311.7+k*74.7)*43758.5453)%1.0
def heaps(s,t,T,lattice=True):
    H=S2['heap']; b=(0.5-t)*1.9; side=1.0 if s>=H['bow'] else -1.0; a=abs(s-H['bow'])
    env=(np.clip((a-0.0)/0.18,0,1)**2*(3-2*np.clip(a/0.18,0,1)) if False else 1.0)
    def ss(e0,e1,x):
        t_=np.clip((x-e0)/(e1-e0),0,1); return t_*t_*(3-2*t_)
    env=ss(*H['born'],a)*(1-ss(*H['sinkA'],a))*ss(*H['over'],b)*(1-ss(*H['sinkB'],b))
    best=0.0
    T0=H['idle']*3.517
    for (sd,a0,b0,ra,rb,A) in H['designed']:
        if sd!=side: continue
        ca=a0+H['vs']*(T-T0); cb=b0+H['vd']*(T-T0)
        e=((a-ca)/ra)**2+((b-cb)/rb)**2
        if e<1: best=max(best,A*(1-e)**2*(1-ss(H['designedOut'][0],H['designedOut'][1],T-T0)))
    if lattice:
        CA,CB=H['cell']; qa=(a-H['vs']*T)/CA; qb=(b-H['vd']*T)/CB
        r0=np.floor(qb)
        zone=(1-ss(0.55,0.75,a))*(1-ss(0.08,0.16,b))
        latK=1-zone*(1-ss(0,H['formT'],T-T0))
        for r in (r0-1,r0,r0+1):
            off=0.5*(r%2)
            c0=np.floor(qa+off)
            for c in (c0-1,c0,c0+1):
                hp=hsh(c,r,side*3.0)
                if hp>H['share']: continue
                ja=(hsh(c,r,5.1+side)-0.5)*0.44; jb=(hsh(c,r,9.3+side)-0.5)*0.44
                ca=(c+0.5+ja-off)*CA; cb=(r+0.5+jb)*CB
                ra=CA*(H['ra'][0]+(H['ra'][1]-H['ra'][0])*hsh(c,r,13.7+side)); rb=CB*(H['rb'][0]+(H['rb'][1]-H['rb'][0])*hsh(c,r,17.1+side))
                A=H['amp'][0]+(H['amp'][1]-H['amp'][0])*hsh(c,r,21.3+side)**1.6
                e=((qa*CA-ca)/ra)**2+((qb*CB-cb)/rb)**2
                if e<1: best=max(best,A*(1-e)**2*latK)
    return best*env*(1+H.get('sideGain',0)*ss(0.25,0.6,a))
T=float(sys.argv[2]) if len(sys.argv)>2 else S2['heap']['idle']*3.517
lat=(len(sys.argv)<=3 or sys.argv[3]!='nolat')
disp=pos.copy()
for i in range(cols+1):
    for jj in range(rows+2):
        if jj==0: continue
        h=heaps(surf[i,jj,0],surf[i,jj,1],T,lat)
        disp[i,jj]=pos[i,jj]+nrm[i,jj]*h
# project and take the top silhouette per 15 px column (points above the water only)
pts=disp.reshape(-1,3); top={}
yl={}
for p in pts:
    if p[1]<-0.02: continue
    x,y,_=scr(C+p)
    k=170+int(round((x-170)/15))*15
    if 140<=k<=620: top[k]=min(top.get(k,9999),y)
orig={170:1175,185:1183,200:1170,215:1151,230:1260,245:1246,260:1243,275:1240,290:1241,305:1248,320:1260,335:1272,350:1284,365:1287,380:1284,395:1283,410:1286,425:1293,440:1297,455:1316,470:1303,485:1311,500:1317,515:None,530:1324,545:1309,560:1241,575:1246,590:1243}
err=[]
print(' x   ', ' '.join('%5d'%k for k in sorted(orig)))
print('orig ', ' '.join('%5s'%(orig[k] or '-') for k in sorted(orig)))
print('swim2', ' '.join('%5.0f'%top.get(k,0) for k in sorted(orig)))
for k in sorted(orig):
    if orig[k] and 230<=k<=545: err.append(top.get(k,0)-orig[k])
print('mean abs err x 230-545: %.1f px, max %.0f'%(np.mean(np.abs(err)),np.max(np.abs(err))))
