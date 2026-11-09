import sys, json, base64, io, numpy as np
from PIL import Image
def img(u): return np.asarray(Image.open(io.BytesIO(base64.b64decode(u.split(',')[1]))).convert('RGB').resize((864,1536))).astype(float)
j=json.load(open(sys.argv[1])); out={}
for v in j['vars']:
  r=v['ret']
  if not (isinstance(r, list) and len(r)==2): continue
  A,B=img(r[0]),img(r[1]); m=np.abs(A-B).max(2)>18
  m[:int(0.45*1536)]=False
  # keep the main blob region (columns/rows with enough pixels)
  rows=m.sum(1); cols=m.sum(0); ry=np.nonzero(rows>5)[0]; cx=np.nonzero(cols>5)[0]
  if not len(ry): print(v['tag'], None); continue
  wl=ry.max(); top=ry.min()
  # width at the widest row
  wrow=max(range(top,wl+1), key=lambda y: m[y].sum()); xs=np.nonzero(m[wrow])[0]
  res=dict(left=round(cx.min()/864,3), right=round(cx.max()/864,3), width=round((cx.max()-cx.min())/864,3), top=round(top/1536,3), waterline=round(wl/1536,3), height=round((wl-top)/1536,3))
  Image.fromarray((A).astype('uint8')).save(sys.argv[1].replace('var6.json', v['tag']+'.png'))
  Image.fromarray((m*255).astype('uint8')).save(sys.argv[1].replace('var6.json', v['tag']+'_vis.png'))
  print(v['tag'].ljust(18), res); out[v['tag']]=res
json.dump(out, open(sys.argv[1].replace('var6.json','measure.json'),'w'), indent=1)
