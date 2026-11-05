import numpy as np, cv2
from PIL import Image
APP='/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
G='/home/user/bubblegame/Previews/WebDemo/screen4_round8_splash/splash_%ss_fullres.png'
W0,H0=538,1076
FR=[('approved',APP,(0.528,0.532)),('3.0s',G%'3.00',(0.540,0.512)),('2.85s',G%'2.85',(0.526,0.506)),('3.1s',G%'3.10',(0.555,0.500))]
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
