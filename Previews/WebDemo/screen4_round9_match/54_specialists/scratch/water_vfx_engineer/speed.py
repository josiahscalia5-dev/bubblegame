import sys, numpy as np
sys.path.insert(0,'/tmp/claude-0/-home-user-bubblegame/08b39b21-0dec-5ec1-bc99-07d34f97f077/scratchpad/wv')
from proj import scr, C
D2R=np.pi/180
# a point on the base surface at (phi on the crest, b down the outer face) in her frame: approximate with crest + outward*o, height
def ell(phi): a=phi*D2R; return np.array([0.95*np.sin(a), -0.55*np.cos(a)])
def nrm(phi):
    a=phi*D2R; n=np.array([np.sin(a)/0.95, -np.cos(a)/0.55]); return n/np.linalg.norm(n)
def sOf(phi):
    n=200; s=0; p0=ell(0)
    for k in range(1,n+1): p1=ell(phi*k/n); s+=np.hypot(*(p1-p0)); p0=p1
    return s if phi>=0 else -s
phis=np.linspace(-108,108,2161); ss=np.array([sOf(p) for p in phis])
def pt(s,b,H=0.47,wo=0.36,foot=-0.32):
    phi=np.interp(s,ss,phis); th=np.pi/2-np.pi*b/1.9
    o=wo*np.cos(th); h=foot+(H-foot)*np.sin(th); c=ell(phi); n=nrm(phi)
    return C+np.array([c[0]+n[0]*o,h,c[1]+n[1]*o])
vs,vd=0.055,0.07
for (s0,b0,lab) in [(0.15,0.0,'front crest, left'),(-0.15,0.1,'front face, right'),(0.03+0.6,0.05,'left side crest'),(0.03-0.6,0.05,'right side crest'),(0.2,0.3,'front face low')]:
    side=1 if s0>=0.03 else -1
    p0=np.array(scr(pt(s0,b0))[:2]); p1=np.array(scr(pt(s0+side*vs*7.21,b0+vd*7.21))[:2])
    print('%-20s start (%4.0f,%4.0f) -> after 1 s at 7.21 m/s (%4.0f,%4.0f): %4.0f px/s'%(lab,*p0,*p1,np.linalg.norm(p1-p0)))
