from common import *
for lab,p,(vx,vy) in FR[:2]:
    im=load(p); cl,h,s,v=classes(im); yy,xx=np.mgrid[0:H0,0:W0]
    rr=np.hypot((xx-vx*W0)/W0,(yy-vy*H0)/W0); ang=np.rad2deg(np.arctan2(-(yy-vy*H0),xx-vx*W0))
    hud=0.205 if lab=='approved' else 0.172
    m=(rr>0.08)&(rr<0.45)&(ang>20)&(ang<160)&(yy>hud*H0)&~(cl['gold']|cl['pink'])
    other=m.copy()
    for k in ['white','pale blue','azure','electric blue','deep cobalt','lavender']: other&=~cl[k]
    print('==',lab)
    for k in ['azure','electric blue','deep cobalt','white','pale blue','lavender']:
        mm=m&cl[k]
        if mm.sum(): print(f"  {k:13s} median {hexc(np.median(im[mm],0))}  p90-bright {hexc(np.percentile(im[mm],90,0))}  H {np.median(h[mm]):.0f} S {np.median(s[mm]):.2f} V {np.median(v[mm]):.2f}")
    hh=h[other]; ss=s[other]
    print(f"  other: n {other.sum()}  hue hist:", np.histogram(hh,bins=[0,20,45,70,100,140,165,185,205,235,260,290,330,360])[0].tolist(), 'median', hexc(np.median(im[other],0)), f"S {np.median(ss):.2f}")
    # brightest 2% in the wall: glints
    L=v[m]; t=np.percentile(L,98); g=m&(v>=t)
    print(f"  top-2% V glints median {hexc(np.median(im[g],0))} S {np.median(s[g]):.2f};  darkest 5% median {hexc(np.median(im[m&(v<=np.percentile(L,5))],0))}")
