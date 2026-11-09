import sys, colorsys
from PIL import Image
import numpy as np
R='/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/'
P={'A_leftShelf':(0,.22,.08,.32),'B_topBand':(.25,0,.45,.05),'C_window':(.62,.22,.68,.28),'D_curtL':(.53,.3,.6,.4),'E_curtR':(.8,.22,.9,.28),
   'F_floorR':(.8,.72,.95,.76),'G_floorL':(.0,.74,.1,.77),'H_rightEdge':(.93,.3,1,.4),'I_midShelf':(.36,.22,.5,.28),'J_leftMid':(0,.45,.06,.55),'K_topLeft':(0,.1,.1,.2)}
def stats(path):
    im=np.asarray(Image.open(path).convert('RGB')).astype(float); h,w,_=im.shape; out={}
    for k,(x0,y0,x1,y1) in P.items():
        a=im[int(y0*h):int(y1*h), int(x0*w):int(x1*w)].reshape(-1,3); m=a.mean(0); hh,ss,vv=colorsys.rgb_to_hsv(*(m/255)); out[k]=(m, hh*360, ss, vv, a.std(0).mean())
    return out
fr=sys.argv[1:]
items=[('REF01',R+'01_Surprise_Hideout.png'),('REF02',R+'02_She_Loads_Laundry.png')]+[tuple(f.split('=',1)) for f in fr]
S=[(n,stats(p)) for n,p in items]
for k in P:
    print(k.ljust(12), '  '.join(f"{n}: #{int(s[k][0][0]):02x}{int(s[k][0][1]):02x}{int(s[k][0][2]):02x} h{s[k][1]:3.0f} s{s[k][2]:.2f} v{s[k][3]:.2f} sd{s[k][4]:4.1f}" for n,s in S))
