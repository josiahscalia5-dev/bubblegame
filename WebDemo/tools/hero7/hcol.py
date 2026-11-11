# colour bands of the hero (top / upper / lower / base quarters of its visible height): median colour, luminance p10/50/90, saturation
import sys, numpy as np, colorsys
from PIL import Image
def bands(I, M, top, bot, l, r):
  out=[]
  for k,(a,b) in enumerate(((0,0.25),(0.25,0.5),(0.5,0.75),(0.75,1.0))):
    y0=int((top+(bot-top)*a)*1536); y1=int((top+(bot-top)*b)*1536); x0=int(l*864); x1=int(r*864)
    m=M[y0:y1,x0:x1]; px=I[y0:y1,x0:x1][m]
    if not len(px): out.append(None); continue
    med=np.median(px,0); h,li,s=colorsys.rgb_to_hls(*med); lum=px.mean(1)
    out.append('#%02x%02x%02x L%.2f S%.2f p10/90 %.2f/%.2f'%(*(med*255).astype(int),li,s,np.percentile(lum,10),np.percentile(lum,90)))
  return out
A=np.asarray(Image.open('/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png').convert('RGB')).astype(float)/255
R,G,B=A[...,0],A[...,1],A[...,2]; MA=(R>0.4)&(R>G*1.6)&(B>G)&(R>B*0.75)
for n,v in zip(('top','upper','lower','base'), bands(A,MA,0.606,0.756,0.30,0.69)): print('approved', n.ljust(6), v)
for f in sys.argv[1:]:
  I=np.asarray(Image.open(f).convert('RGB').resize((864,1536))).astype(float)/255; M=np.asarray(Image.open(f.replace('.png','_vis.png')).convert('L').resize((864,1536)))>128
  ys,xs=np.nonzero(M[int(0.45*1536):]); top=(ys.min()+int(0.45*1536))/1536; bot=(ys.max()+int(0.45*1536))/1536
  for n,v in zip(('top','upper','lower','base'), bands(I,M,top,bot,0.32,0.70)): print(f.split('/')[-1][:14].ljust(14), n.ljust(6), v)
