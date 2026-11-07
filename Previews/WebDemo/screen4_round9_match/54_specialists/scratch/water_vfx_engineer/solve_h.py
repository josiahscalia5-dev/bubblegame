import numpy as np, sys
sys.path.insert(0,'/tmp/claude-0/-home-user-bubblegame/08b39b21-0dec-5ec1-bc99-07d34f97f077/scratchpad/wv')
from proj import scr, C
xs=[170,185,200,215,230,245,260,275,290,305,320,335,350,365,380,395,410,425,440,455,470,485,500,515,530,545,560,575,590]
orig=[1175,1183,1170,1151,1260,1246,1243,1240,1241,1248,1260,1272,1284,1287,1284,1283,1286,1293,1297,1316,1303,1311,1317,None,1324,1309,1241,1246,1243]
tgt=dict(zip(xs,orig))
def crest_pt(phi,h):
    a=np.radians(phi); return C+np.array([0.95*np.sin(a),h,-0.55*np.cos(a)])
res=[]
for phi in range(-70,75,5):
    # find screen x of crest at h=0.5
    sx,sy,_=scr(crest_pt(phi,0.5))
    # nearest target column
    xn=min(xs,key=lambda x:abs(x-sx))
    if abs(xn-sx)>10 or tgt[xn] is None: res.append((phi,sx,None,None)); continue
    ty=tgt[xn]
    lo,hi=0.0,1.2
    for _ in range(40):
        m=(lo+hi)/2; y=scr(crest_pt(phi,m))[1]
        if y>ty: lo=m
        else: hi=m
    res.append((phi,sx,ty,(lo+hi)/2))
for r in res: print('phi %4d  sx %6.1f  target_y %s  h %s'%(r[0],r[1],r[2],'%.3f'%r[3] if r[3] is not None else '-'))
