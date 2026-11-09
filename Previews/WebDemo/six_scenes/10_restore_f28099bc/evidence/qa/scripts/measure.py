import sys, json
import numpy as np
from PIL import Image
R='/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/'
B='/home/user/bubblegame_lanes/_evidence/baseline/'
G='/home/user/bubblegame/Previews/WebDemo/six_scenes/09_s56_ac4e3449/'
def load(p):
    return np.asarray(Image.open(p).convert('RGB').resize((864,1536), Image.LANCZOS)).astype(np.float32)/255
def hsv(a):
    r,g,b=a[...,0],a[...,1],a[...,2]
    mx=a.max(-1); mn=a.min(-1); d=mx-mn
    h=np.zeros_like(mx)
    m=d>1e-6
    rm=m&(mx==r); gm=m&(mx==g)&~rm; bm=m&~rm&~gm
    h[rm]=(60*((g-b)[rm]/d[rm]))%360
    h[gm]=60*((b-r)[gm]/d[gm])+120
    h[bm]=60*((r-g)[bm]/d[bm])+240
    s=np.where(mx>1e-6,d/np.maximum(mx,1e-6),0)
    return h,s,mx
def zone(a,box):
    x0,y0,x1,y1=box; z=a[y0:y1,x0:x1]; h,s,v=hsv(z); return z,h,s,v
def classes(a,box):
    z,h,s,v=zone(a,box); n=h.size
    return dict(
        meanS=round(float(s.mean()),3), meanV=round(float(v.mean()),3),
        warm_gold=round(float(((h>=25)&(h<=60)&(s>0.45)&(v>0.6)).sum()/n*100),1),
        cyan_turq=round(float(((h>=175)&(h<205)&(s>0.4)&(v>0.4)).sum()/n*100),1),
        azure_cobalt=round(float(((h>=205)&(h<235)&(s>0.45)&(v>0.3)).sum()/n*100),1),
        ultramarine=round(float(((h>=235)&(h<262)&(s>0.45)&(v>0.3)).sum()/n*100),1),
        violet_lav=round(float(((h>=262)&(h<300)&(s>0.2)).sum()/n*100),1),
        pink_mag=round(float((((h>=300)|(h<15))&(s>0.35)&(v>0.35)).sum()/n*100),1),
        pale=round(float(((s<0.18)&(v>0.85)).sum()/n*100),1),
        dark=round(float((v<0.25).sum()/n*100),1))
def pink(a,box):
    z,h,s,v=zone(a,box)
    m=((h>=290)|(h<20))&(s>0.35)&(v>0.35)
    if m.sum()<10: return dict(n=int(m.sum()))
    hh=np.where(h[m]<180,h[m]+360,h[m])
    rgb=(z[m].mean(0)*255).astype(int).tolist()
    return dict(px=int(m.sum()), medHue=round(float(np.median(hh))%360,1), medS=round(float(np.median(s[m])),3), medV=round(float(np.median(v[m])),3), meanRGB=rgb)
def mean_rgb(a,box):
    z,h,s,v=zone(a,box)
    c=(z.reshape(-1,3).mean(0)*255).astype(int).tolist()
    return dict(meanRGB='#%02x%02x%02x'%tuple(c), meanS=round(float(s.mean()),3), meanV=round(float(v.mean()),3))
out={}
pairs={
 'S1':(R+'01_Surprise_Hideout.png',B+'t_-1.00.png'),
 'S2':(R+'02_She_Loads_Laundry.png',B+'t_2.40.png'),
 'S3':(R+'03_Oops_He_Goes_In.png',B+'t_4.80.png'),
 'S4':(R+'04_The_Wash_Begins.png',B+'t_7.00.png'),
 'S5o':(R+'05_Into_The_Laundry_Tunnel.png',B+'t_8.40.png'),
 'S5':(R+'05_Into_The_Laundry_Tunnel.png',G+'s56_tap.png'),
 'S6':(R+'06_Swim_Collect_Avoid_Enemies.png',G+'s56_206.png'),
}
spec=json.loads(open(sys.argv[1]).read())
import os
for k,(rp,gp) in pairs.items():
    if k not in spec or not os.path.exists(gp): continue
    r=load(rp); g=load(gp); sp=spec[k]; res={}
    for name,(kind,rb,gb) in sp.items():
        f={'cls':classes,'pink':pink,'rgb':mean_rgb}[kind]
        res[name]={'ref':f(r,rb),'game':f(g,gb)}
    out[k]=res
print(json.dumps(out,indent=1))
