# hero silhouette from a mask render (only the hero + water drawn): pink pixels; box + width at the water line
import sys, json, base64, io, numpy as np
from PIL import Image
def from_url(u): return Image.open(io.BytesIO(base64.b64decode(u.split(',')[1]))).convert('RGB')
def measure(img):
  I=np.asarray(img.resize((864,1536))).astype(float)/255; R,G,B=I[...,0],I[...,1],I[...,2]
  pink=(R>0.25)&(R>G*1.8)&(B>G)&(R>B*0.7)
  pink[:int(0.4*1536)]=False
  rows=pink.sum(1); ry=np.nonzero(rows>4)[0]; cols=pink.sum(0); cx=np.nonzero(cols>4)[0]
  if not len(ry): return None
  return dict(left=round(cx.min()/864,3), right=round(cx.max()/864,3), width=round((cx.max()-cx.min())/864,3), top=round(ry.min()/1536,3), bottom=round(ry.max()/1536,3))
j=json.load(open(sys.argv[1]))
for v in j['vars']:
  if isinstance(v['ret'], str) and v['ret'].startswith('data:'):
    img=from_url(v['ret']); img.save(sys.argv[1].replace('var6.json', v['tag']+'_mask.png')); print(v['tag'].ljust(16), measure(img))
