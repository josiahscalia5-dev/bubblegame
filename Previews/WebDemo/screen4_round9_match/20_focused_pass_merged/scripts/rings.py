from common import *
from scipy.signal import find_peaks
from scipy.ndimage import gaussian_filter1d
for lab,p,(vx,vy) in FR:
    im=load(p); cl,h,s,v=classes(im)
    lum=(0.2126*im[...,0]+0.7152*im[...,1]+0.0722*im[...,2])/255
    obj=cl['gold']|cl['pink']
    obj=cv2.dilate(obj.astype(np.uint8),np.ones((7,7),np.uint8))>0
    cx,cy=vx*W0,vy*H0
    rs=np.arange(0.03,0.50,0.0025)  # in W units
    out=[]
    for sector,(a0,a1) in (('up 50-130',(50,130)),('left 140-175',(140,175)),('right 5-40',(5,40))):
        angs=np.deg2rad(np.arange(a0,a1,1.0))
        prof=[];angcv=[]; satp=[]
        for r in rs:
            X=(cx+r*W0*np.cos(angs)).astype(int); Y=(cy-r*W0*np.sin(angs)).astype(int)
            ok=(X>=0)&(X<W0)&(Y>=int(0.21*H0))&(Y<H0)
            ok[ok]&=~obj[Y[ok],X[ok]]
            if ok.sum()<10: prof.append(np.nan); angcv.append(np.nan); satp.append(np.nan); continue
            L=lum[Y[ok],X[ok]]; prof.append(L.mean()); angcv.append(L.std()); satp.append(s[Y[ok],X[ok]].mean())
        prof=np.array(prof); angcv=np.array(angcv); satp=np.array(satp)
        good=~np.isnan(prof)
        # mouth edge: outermost radius still inside the blue tunnel = where saturation drops (lavender collar S<.45) for this sector
        P=gaussian_filter1d(np.nan_to_num(prof,nan=np.nanmean(prof)),1.0)
        pk,_=find_peaks(P,prominence=0.025,distance=3)
        tr,_=find_peaks(-P,prominence=0.025,distance=3)
        pr=rs[pk]
        sp=np.diff(np.log(pr)) if len(pr)>2 else np.array([np.nan])
        amp=(np.mean(P[pk])-np.mean(P[tr])) if len(pk) and len(tr) else np.nan
        print(f"{lab:9s} {sector:13s} bright bands {len(pk):2d} at r {', '.join(f'{x:.3f}' for x in pr)} | log-spacing mean {np.nanmean(sp):.3f} CV {np.nanstd(sp)/np.nanmean(sp):.2f} | band contrast {amp:.3f} | along-ring lum std {np.nanmean(angcv):.3f} | radial-profile std {np.nanstd(prof):.3f}")
