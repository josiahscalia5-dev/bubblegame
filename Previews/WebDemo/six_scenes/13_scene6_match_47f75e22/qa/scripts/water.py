from common import *
from scipy import ndimage as nd
def srgb2lin(c): return np.where(c<=0.04045,c/12.92,((c+0.055)/1.055)**2.4)
def classes(img,m):
    h,s,v=hsv(img)
    hh,ss,vv=h[m],s[m],v[m]
    n=m.sum()
    pale=(ss<0.25)&(vv>0.8)
    cob=(hh>=215)&(hh<245)&(ss>=0.5)
    az=(hh>=200)&(hh<215)&(ss>=0.35)
    tq=(hh>=170)&(hh<200)&(ss>=0.35)
    dark=(vv<0.35)
    lav=(hh>=245)&(hh<295)&(ss>=0.25)
    return dict(n=n,pale=pale.mean()*100,cobalt=cob.mean()*100,azure=az.mean()*100,turq=tq.mean()*100,lav=lav.mean()*100,dark=dark.mean()*100,
        Hmed=np.median(hh[ss>0.25]) if (ss>0.25).any() else -1, Smed=np.median(ss), Vmed=np.median(vv))
def objmask(img):
    h,s,v=hsv(img)
    pink=(h>=295)&(s>0.30)&(v>0.45)
    gold=(h>=25)&(h<65)&(s>0.45)&(v>0.5)
    purple=(h>=250)&(h<295)&(s>0.35)&(v<0.9)
    return nd.binary_dilation(pink|gold,iterations=4)
def report(p,name,uim):
    img=load(p); h,s,v=hsv(img)
    hero=np.asarray(Image.open(f'hero_{name}.png'))>0
    om=objmask(img)|nd.binary_dilation(hero,iterations=6)|uim
    out={}
    regions={'fg y.70-.795 x.15-.85':box(0.15,0.70,0.85,0.795),'mid y.55-.70 x.20-.80':box(0.20,0.55,0.80,0.70),'far y.46-.55 x.30-.70':box(0.30,0.46,0.70,0.55)}
    for rn,b in regions.items():
        m=np.zeros((H,W),bool); m[b]=True; m&=~om
        c=classes(img,m)
        mean=img[m].mean(0); lin=srgb2lin(img[m]).mean(0)
        # texture: high-pass luminance std (dimensional detail) inside region
        L=img.mean(-1); hp=L-nd.gaussian_filter(L,6)
        tex=hp[m].std()
        # pale components
        pale=(s<0.25)&(v>0.8)&m
        lab,n=nd.label(pale)
        if n:
            sz=nd.sum(pale,lab,range(1,n+1)); big=sz.max()
            wmean=(sz**2).sum()/sz.sum()
        else: big=0; wmean=0
        print(f"{name:9s} {rn:22s} n={c['n']:6d} pale {c['pale']:5.1f}% cobalt {c['cobalt']:5.1f}% azure {c['azure']:5.1f}% turq {c['turq']:5.1f}% lav {c['lav']:5.1f}% dark {c['dark']:4.1f}% | Hmed {c['Hmed']:.0f} Smed {c['Smed']:.2f} Vmed {c['Vmed']:.2f} | mean #{int(mean[0]*255):02x}{int(mean[1]*255):02x}{int(mean[2]*255):02x} lin ({lin[0]:.3f},{lin[1]:.3f},{lin[2]:.3f}) | tex {tex:.3f} | pale blobs: largest {big/(W*H)*1e4:.1f} per10k, area-wtd mean {wmean:.0f}px")
    # ring around hero
    ring=nd.binary_dilation(hero,iterations=40)&~nd.binary_dilation(hero,iterations=3)&~uim
    rpale=((s<0.25)&(v>0.8)&ring).sum()/ring.sum()*100
    below=np.zeros((H,W),bool); ys,xs=np.nonzero(hero); y1=ys.max(); x0,x1=xs.min(),xs.max()
    below[y1:min(H,y1+int(0.05*H)),x0:x1]=True; below&=~uim
    bpale=((s<0.25)&(v>0.8)&below).sum()/max(1,below.sum())*100
    print(f"{name:9s} ring 3-40px round hero: pale {rpale:.1f}%  | band 0.05H under hero: pale {bpale:.1f}% (n {below.sum()})")
report(A,'approved',ui_approved()); report(G,'u206',ui_game()); report(T,'tap',ui_tap())
