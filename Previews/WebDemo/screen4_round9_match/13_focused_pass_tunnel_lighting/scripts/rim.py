from common import *
for lab,p,vp in FR:
    im=load(p); h,s,v=hsv(im); yy,xx=np.mgrid[0:H0,0:W0]
    warm=(((h>=10)&(h<55))|(h>=345))&(s>0.25)&(v>0.55)&(yy>0.08*H0)&(yy<0.42*H0)
    # exclude coins/pink brushes: brushes are pink h>=290 so not included; coins below .42 excluded
    out=[]; th=[]; cols=[]
    for x in np.arange(0.05,1.0,0.05):
        c=int(x*W0); col=warm[:,max(c-2,0):c+3].any(1); ys=np.nonzero(col)[0]
        if len(ys)<3: out.append(f"{x:.2f}:-"); continue
        # largest contiguous run
        runs=np.split(ys,np.nonzero(np.diff(ys)>2)[0]+1); r=max(runs,key=len)
        out.append(f"{x:.2f}:{r[0]/H0:.3f}-{r[-1]/H0:.3f}"); th.append((r[-1]-r[0])/H0); cols.append(np.median(im[r[0]:r[-1]+1,c].reshape(-1,3),0))
    print(f"{lab:9s} warm rim band per column: "+' '.join(out))
    if th: print(f"          median thickness {np.median(th):.3f}H  median colour {hexc(np.median(cols,0))}  warm-rim pixels {100*warm.sum()/(W0*H0):.2f}% of frame")
