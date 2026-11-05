import os, numpy as np, cv2
from PIL import Image
APP='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
import os.path as _op
_D=_op.dirname(_op.dirname(_op.abspath(__file__)))   # 06_tunnel_lighting_gate_fixes
BEFORE=_op.join(_op.dirname(_D),'04_merged','match_t3.00.png')   # the merged build before this pass
W0,H0=538,1076
# (Tunnel & Lighting gate fixes, step 6: the Art Director's step-5 common.py with the frames as an argument.)
# Frames from the environment: FRAMES="label=path;label=path" (each game frame measured round 0.53,0.53 as in the gate).
# The approved original is always first.
FR=[('approved',APP,(0.528,0.532))]
_env=os.environ.get('FRAMES','before='+BEFORE+';now3.0='+_op.join(_D,'match_t3.00.png')+';now2.85='+_op.join(_D,'match_t2.85.png')+';now3.1='+_op.join(_D,'match_t3.10.png'))
for it in [x for x in _env.split(';') if x]:
    lab,p=it.split('=',1); FR.append((lab,p,(0.53,0.53)))
def load(p): return np.asarray(Image.open(p).convert('RGB').resize((W0,H0),Image.LANCZOS))
def hsv(im):
    a=im.astype(np.float32)/255; mx,mn=a.max(-1),a.min(-1); v=mx; s=np.where(mx>0,(mx-mn)/np.maximum(mx,1e-6),0)
    r,g,b=a[...,0],a[...,1],a[...,2]; d=np.maximum(mx-mn,1e-6)
    h=np.where(mx==r,(60*((g-b)/d)+360)%360,np.where(mx==g,60*((b-r)/d)+120,60*((r-g)/d)+240))
    return h,s,v
def classes(im):
    h,s,v=hsv(im); out={}
    out['gold']=(h>=30)&(h<65)&(s>0.45)&(v>0.6)
    out['pink']=((h>=290)|(h<20))&(s>0.3)&(v>0.5)
    rest=~(out['gold']|out['pink'])
    out['white']=rest&(s<0.15)&(v>0.85)
    out['pale blue']=rest&(h>=185)&(h<235)&(s>=0.15)&(s<0.45)&(v>0.75)
    out['azure']=rest&(h>=165)&(h<205)&(s>=0.45)
    out['electric blue']=rest&(h>=205)&(h<228)&(s>=0.45)&(v>=0.8)
    out['deep cobalt']=rest&(((h>=205)&(h<245)&(s>=0.45)&(v<0.8))|((h>=228)&(h<245)&(s>=0.6)))
    out['lavender']=rest&(h>=235)&(h<290)&(s>=0.12)&~out['deep cobalt']
    return out,h,s,v
def hexc(c): c=np.clip(c,0,255).astype(int); return '#%02x%02x%02x'%tuple(c)
