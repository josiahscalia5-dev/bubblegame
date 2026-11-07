import numpy as np, sys
from PIL import Image
def wl(path, size=(767,1536)):
    im=np.array(Image.open(path).convert('RGB').resize(size)).astype(int)
    r,g,b=im[...,0],im[...,1],im[...,2]
    pink=(r>g+60)&(r>140)&(b<r+20)
    out={}
    for x in range(140,620,15):
        col=pink[1100:1450,x]
        ys=np.where(col)[0]
        # the lowest row of a pink run of at least 4 px (her fur), searched from the top
        y=None
        if len(ys):
            # take the longest contiguous top-connected region: rows from first pink downward until a gap > 12
            run=[ys[0]]
            for v in ys[1:]:
                if v-run[-1]<=12: run.append(v)
                else: break
            y=1100+run[-1]
        out[x]=y
    return out
o=wl('/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
r=wl('/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/ablation/R9_start/base_canvas.png')
print('x    ', ' '.join('%4d'%x for x in o))
print('orig ', ' '.join('%4s'%(o[x] or '-') for x in o))
print('R9   ', ' '.join('%4s'%(r[x] or '-') for x in r))
