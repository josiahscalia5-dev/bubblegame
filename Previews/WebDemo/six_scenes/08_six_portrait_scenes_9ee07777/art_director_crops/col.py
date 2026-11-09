import sys
from PIL import Image
import numpy as np
R='/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/'
S='/tmp/claude-0/-home-user-bubblegame/9ee07777-d936-5734-8140-6e44974442dd/scratchpad/'
imgs={'REF01':R+'01_Surprise_Hideout.png','G1':S+'c6/t_-1.00.png','REF02':R+'02_She_Loads_Laundry.png','G2':S+'c6/t_2.10.png'}
regions={
 'window(0.62-0.76,0.22-0.30)':(0.62,0.22,0.76,0.30),
 'leftwall/shelf(0.0-0.10,0.22-0.40)':(0.0,0.22,0.10,0.40),
 'backwall(0.30-0.45,0.25-0.33)':(0.30,0.25,0.45,0.33),
 'floor(0.0-0.25,0.80-0.86)':(0.0,0.78,0.10,0.86),
 'scene band y0.25-0.75':(0.0,0.25,1.0,0.75),
 'porthole glass/drum (0.80-0.95,0.44-0.56)':(0.80,0.44,0.95,0.56),
}
def lum(a): return (0.2126*a[...,0]+0.7152*a[...,1]+0.0722*a[...,2])
for k,p in imgs.items():
    im=np.asarray(Image.open(p).convert('RGB')).astype(float)
    H,W,_=im.shape
    print(k)
    for n,(x0,y0,x1,y1) in regions.items():
        c=im[int(y0*H):int(y1*H),int(x0*W):int(x1*W)]
        m=c.reshape(-1,3).mean(0); L=lum(c)
        print(f"  {n:45s} mean #{int(m[0]):02x}{int(m[1]):02x}{int(m[2]):02x}  L={L.mean():5.1f} sd={L.std():4.1f} p10={np.percentile(L,10):5.1f} p90={np.percentile(L,90):5.1f}")
