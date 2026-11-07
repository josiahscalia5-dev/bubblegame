import sys, cv2, numpy as np
O='Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
F='Previews/WebDemo/screen4_round9_match/60_fidelity/frames'
frames={'ORIGINAL':O,'ACC start':f'{F}/accepted_start/base_canvas.png','ACC +1s':f'{F}/accepted_T1.0/base_canvas.png','ACC +2s':f'{F}/accepted_T2.0/base_canvas.png'}
def load(p):
    im=cv2.imread(p); return cv2.resize(im,(768,1536),interpolation=cv2.INTER_AREA)
def hsv(im):
    h=cv2.cvtColor(im,cv2.COLOR_BGR2HSV_FULL).astype(np.float32); return h[...,0]*360/256,h[...,1]/255,h[...,2]/255
print('zone: blue-family pixels (sat>0.25) by hue: cyan-turquoise 170-200 | azure 200-222 | periwinkle-violet 222-265 ; mean sat; white/pale (sat<0.18,val>0.8) %')
for zone,(y0,y1,x0,x1) in {'tunnel x.30-.70 y.30-.52':(0.30,0.52,0.30,0.70),'foreground water y.80-.84 (above HUD)':(0.80,0.84,0.0,1.0)}.items():
    print('==',zone)
    for k,p in frames.items():
        H,S,Vv=hsv(load(p)); sl=(slice(int(y0*1536),int(y1*1536)),slice(int(x0*768),int(x1*768)))
        h,s,v=H[sl],S[sl],Vv[sl]; b=(h>=170)&(h<265)&(s>0.25); n=h.size
        c=lambda a,b2:100*np.mean(b&(h>=a)&(h<b2))
        print(f'  {k:10s} cyan {c(170,200):5.1f} azure {c(200,222):5.1f} peri/violet {c(222,265):5.1f} | blue mean hue {h[b].mean():5.1f} sat {s[b].mean():.2f} | white/pale {100*np.mean((s<0.18)&(v>0.8)):5.1f}')
print('== pink fur (hue 300-350 or <10, sat>0.35, val>0.45; lower half y.62-.90)')
for k,p in frames.items():
    H,S,Vv=hsv(load(p)); sl=(slice(int(0.62*1536),int(0.90*1536)),slice(0,768)); h,s,v=H[sl],S[sl],Vv[sl]
    m=(((h>=300)|(h<10))&(s>0.35)&(v>0.45)); hh=np.where(h[m]<180,h[m]+360,h[m])
    print(f'  {k:10s} pink px {m.sum():6d}  hue {hh.mean():5.1f}  sat {s[m].mean():.2f}  val {v[m].mean():.2f}')
print('== gold coins (hue 35-55, sat>0.55, val>0.6; blobs > 300 px, y .17-.85): centre x,y (fraction) and diameter (px of 768)')
for k,p in frames.items():
    H,S,Vv=hsv(load(p)); m=((H>=35)&(H<55)&(S>0.55)&(Vv>0.6)).astype(np.uint8); m[:int(0.17*1536)]=0; m[int(0.85*1536):]=0
    m=cv2.morphologyEx(m,cv2.MORPH_CLOSE,np.ones((9,9),np.uint8)); n,l,st,ce=cv2.connectedComponentsWithStats(m)
    blobs=sorted([(st[i,4],ce[i]) for i in range(1,n) if st[i,4]>300],key=lambda t:-t[0])[:5]
    print(f'  {k:10s} '+' ; '.join(f'({c[0]/768:.2f},{c[1]/1536:.2f}) d{2*np.sqrt(a/np.pi):.0f}' for a,c in blobs))
