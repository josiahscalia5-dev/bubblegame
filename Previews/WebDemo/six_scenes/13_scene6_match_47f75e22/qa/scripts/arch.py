from common import *
from scipy import ndimage as nd
from scipy.signal import find_peaks
for p,name,vp,uim in [(A,'approved',(0.50,0.455),ui_approved()),(G,'u206',(0.50,0.44),ui_game()),(T,'tap',(0.495,0.445),ui_tap())]:
    img=load(p); h,s,v=hsv(img); L=img@np.array([0.2126,0.7152,0.0722])
    Ls=nd.gaussian_filter(L,1.2)
    for tgt in [(0.30,0.30),(0.70,0.30)]:
        n=400; xs=np.linspace(vp[0],tgt[0],n)*W; ys=np.linspace(vp[1],tgt[1],n)*H
        prof=Ls[ys.astype(int),xs.astype(int)]; ui=uim[ys.astype(int),xs.astype(int)]
        prof=np.where(ui,np.nan,prof)
        valid=~np.isnan(prof); pr=np.nan_to_num(prof,nan=0)
        pk,_=find_peaks(pr,prominence=0.06,distance=3)
        pk=[k for k in pk if valid[k]]
        print(f"{name} profile VP->{tgt}: {len(pk)} light peaks (prominence>.06), first at frac {', '.join(f'{k/n:.2f}' for k in pk[:14])}")
    # warm glowing lamp pixels in the tunnel centre (x .25-.75, y .22-.46)
    m=np.zeros((H,W),bool); m[box(0.25,0.22,0.75,0.46)]=True; m&=~uim
    glowW=((h>=15)&(h<55)&(v>0.95)&(s<0.65)).sum()/m.sum()*100
    flat=((h>=15)&(h<45)&(s>=0.65)&(v>0.7)&m).sum()/m.sum()*100
    print(f"{name} tunnel centre: warm GLOWING (V>.95,S<.65) {glowW:.1f}%  saturated flat orange (S>.65) {flat:.1f}%")
