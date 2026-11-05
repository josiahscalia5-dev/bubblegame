from common import *
from scipy import ndimage as ndi
boxes={'approved':[('big left',0.085,0.544,0.301,0.660),('right',0.778,0.671,0.996,0.800),('centre',0.468,0.529,0.571,0.579)],
       '3.0s':[('big left',0.005,0.58,0.21,0.73),('upper left',0.02,0.478,0.225,0.575),('centre',0.455,0.535,0.58,0.597)]}
for lab,p,vp in FR[:2]:
    im=load(p); h,s,v=hsv(im)
    lum=(0.2126*im[...,0]+0.7152*im[...,1]+0.0722*im[...,2])/255
    for n,x0,y0,x1,y1 in boxes[lab]:
        sl=(slice(int(y0*H0),int(y1*H0)),slice(int(x0*W0),int(x1*W0)))
        m=((h[sl]>=20)&(h[sl]<65)&(s[sl]>0.35)&(v[sl]>0.45))
        L=lum[sl][m]; c=im[sl][m]
        bright=(v[sl]>0.97)&m
        print(f"{lab:9s} {n:10s} median {hexc(np.median(c,0))} H {np.median(h[sl][m]):.0f} S {np.median(s[sl][m]):.2f} | lum p5 {np.percentile(L,5):.2f} p95 {np.percentile(L,95):.2f} range {np.percentile(L,95)-np.percentile(L,5):.2f} | brightest 5% {hexc(np.percentile(c,95,0))} darkest 5% {hexc(np.percentile(c,5,0))} | lemon-hi (V>.97,S<.6) {100*((v[sl]>0.97)&(s[sl]<0.6)&m).sum()/m.sum():.1f}%")
