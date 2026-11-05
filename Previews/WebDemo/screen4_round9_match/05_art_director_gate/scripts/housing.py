"""Housing and framing (zone 1 and the opening): lavender / warm rim / blue shares in the housing band, the lavender ring
   between the rim and the blue water, and how much of the play area the blue opening fills. Art Director's HSV classes."""
from common import *
from scipy import ndimage as ndi
for lab,p,(vx,vy) in FR:
    im=load(p); cl,h,s,v=classes(im); yy,xx=np.mgrid[0:H0,0:W0]
    blue=cl['azure']|cl['electric blue']|cl['deep cobalt']|cl['pale blue']
    warm=(((h>=10)&(h<55))|(h>=345))&(s>0.25)&(v>0.55)
    hud=0.205 if lab=='approved' else 0.172
    def sh(m): n=max(m.sum(),1); return f"lav {100*(cl['lavender']&m).sum()/n:4.1f} warm {100*(warm&m).sum()/n:4.1f} blue {100*(blue&m).sum()/n:4.1f} white {100*(cl['white']&m).sum()/n:4.1f} pink {100*(cl['pink']&m).sum()/n:4.1f} med {hexc(np.median(im[m],0))}"
    z1=(yy>=0.213*H0)&(yy<0.304*H0)
    side=(yy>=0.30*H0)&(yy<0.70*H0)&((xx<0.12*W0)|(xx>0.88*W0))
    play=(yy>=max(hud,0.21)*H0)&(yy<0.78*H0)
    # the opening: largest connected blue region (closed) inside the play band; its share of the play band and its top row at x .52
    bm=ndi.binary_opening(ndi.binary_closing(blue&play,iterations=3),iterations=2); lb,n=ndi.label(bm); k=np.argmax(ndi.sum(bm,lb,range(1,n+1)))+1; op=ndi.binary_fill_holes(lb==k)
    cols=np.nonzero(op.any(0))[0]; rows=np.nonzero(op.any(1))[0]
    c52=np.nonzero(op[:,int(0.52*W0)])[0]
    lavp=cl['lavender']&play&~op
    print(f"{lab:10s} zone1 y.213-.304: {sh(z1)}")
    print(f"{'':10s} side walls x<.12|x>.88 y.30-.70: {sh(side)}")
    print(f"{'':10s} opening (largest blue region, holes filled): {100*op.sum()/play.sum():.1f}% of play band y{max(hud,0.21):.3f}-.78; x {cols.min()/W0:.3f}-{cols.max()/W0:.3f}; top at x.52 {c52.min()/H0 if len(c52) else float('nan'):.3f}; lavender outside the opening {100*lavp.sum()/play.sum():.1f}% of play band")
