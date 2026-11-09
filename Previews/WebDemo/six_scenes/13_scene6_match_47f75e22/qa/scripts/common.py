import numpy as np
from PIL import Image
ROOT='/home/user/bubblegame/'
A=ROOT+'Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png'
G=ROOT+'Previews/WebDemo/six_scenes/13_scene6_match_47f75e22/baseline/s56_206.png'
T=ROOT+'Previews/WebDemo/six_scenes/13_scene6_match_47f75e22/baseline/s56_tap.png'
W,H=864,1536
def load(p): return np.asarray(Image.open(p).convert('RGB')).astype(np.float32)/255.
def hsv(img):
    r,g,b=img[...,0],img[...,1],img[...,2]
    mx=img.max(-1); mn=img.min(-1); d=mx-mn
    h=np.zeros_like(mx)
    m=d>1e-6
    rm=m&(mx==r); gm=m&(mx==g)&~rm; bm=m&~rm&~gm
    h[rm]=((g-b)[rm]/d[rm])%6
    h[gm]=((b-r)[gm]/d[gm])+2
    h[bm]=((r-g)[bm]/d[bm])+4
    h=h*60
    s=np.where(mx>1e-6,d/np.maximum(mx,1e-6),0)
    return h,s,mx
def box(x0,y0,x1,y1): return (slice(int(y0*H),int(y1*H)),slice(int(x0*W),int(x1*W)))
# UI masks (True = UI, excluded)
def ui_approved():
    m=np.zeros((H,W),bool)
    m[box(0,0,1,0.085)]=True          # top bar
    m[box(0.30,0,0.70,0.10)]=True     # logo
    m[box(0.02,0.06,0.13,0.115)]=True # settings
    m[box(0.87,0.055,0.99,0.115)]=True# mail
    m[box(0.11,0.095,0.88,0.225)]=True# Laundry Toss plaque
    m[box(0.03,0.795,0.96,0.86)]=True # caption
    m[box(0,0.86,1,1)]=True           # start bar
    return m
def ui_game():
    m=np.zeros((H,W),bool)
    m[box(0,0,1,0.085)]=True
    m[box(0.06,0.09,0.75,0.215)]=True # mission
    m[box(0.75,0.085,0.89,0.16)]=True # pause
    m[box(0.22,0.225,0.78,0.32)]=True # hint (u206)
    m[box(0,0.87,1,1)]=True           # power-up buttons
    return m
def ui_tap():
    m=ui_game(); m[box(0.22,0.225,0.78,0.32)]=False
    m[box(0.40,0.90,0.62,0.98)]=True
    return m
