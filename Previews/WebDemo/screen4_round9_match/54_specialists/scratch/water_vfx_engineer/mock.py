# A rough painter's-algorithm MOCK of the proposed heap field (python mirror, flat colours, no tone mapping) drawn over
# R9's same-frame 'heroSwell hidden' ablation, only to judge the composition. Not a game render.
import sys, numpy as np, cv2
src=open('/tmp/claude-0/-home-user-bubblegame/08b39b21-0dec-5ec1-bc99-07d34f97f077/scratchpad/wv/proto.py').read().split('# project and take')[0]
OUT=sys.argv[3] if len(sys.argv)>3 else '/tmp/claude-0/-home-user-bubblegame/08b39b21-0dec-5ec1-bc99-07d34f97f077/scratchpad/wv/mock.png'; sys.argv=['proto.py',sys.argv[1],sys.argv[2]]
exec(compile(src,'p','exec'))
from proj import scr
bg=cv2.imread('/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/ablation/R9_start/abl_01_noSwell.png')
bg=cv2.resize(bg,(767,1536))
cam=np.array(d['state']['camera']) if 'd' in globals() else None
import json
fr=json.load(open('/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/53_swim/solve/frame_start.json'))
cam=np.array(fr['state']['camera'])
hh=np.zeros(disp.shape[:2])
for i in range(cols+1):
    for jj in range(1,rows+2):
        hh[i,jj]=np.linalg.norm(disp[i,jj]-pos[i,jj])
du=np.gradient(disp,axis=0); dv=np.gradient(disp,axis=1)
nn=np.cross(du,dv); nn/=np.linalg.norm(nn,axis=2,keepdims=True)+1e-9
if nn[cols//2,(rows+2)//2+1,1]<0: nn=-nn
key=np.array([0.36,0.81,-0.46]); key/=np.linalg.norm(key)
quads=[]
for i in range(cols):
    for jj in range(rows+1):
        P4=[disp[i,jj],disp[i+1,jj],disp[i+1,jj+1],disp[i,jj+1]]
        if max(p[1] for p in P4)<-0.02: continue
        sc=[scr(C+p) for p in P4]
        z=np.mean([s[2] for s in sc])
        w=C+np.mean(P4,axis=0); V=cam-w; V/=np.linalg.norm(V)
        n=nn[i,jj]; ndv=abs(n@V)
        h=hh[i,jj]; up=np.clip(P4[0][1]/max(np.max(disp[i,:,1]),0.05),0,1)
        water=np.array([0xe6,0x8a,0x2f])*(1-up*0.4)+np.array([0xf6,0xb3,0x4f])*up*0.4
        heap=np.clip((h-0.003)/0.017,0,1)
        body=np.array([0xf2,0x9f,0x3d])*(1-up*0.5)+np.array([0xe6,0x9b,0x8f])*up*0.5
        lit=np.clip((n@key-0.55)/0.3,0,1)
        body=body*(1-lit*0.6)+np.array([0xf8,0xd2,0x7f])*lit*0.6
        col=water*(1-heap)+body*heap
        col=col*(1-(1-heap)*0.55*up)+np.array([0xd6,0x5f,0x1a])*(1-heap)*0.55*up
        fres=np.clip((1-ndv-0.55)/0.25,0,1)*heap
        col=col*(1-fres)+np.array([0xfd,0xf4,0xee])*fres
        quads.append((z,np.array([[s[0],s[1]] for s in sc],np.int32),tuple(int(c) for c in col)))
quads.sort(key=lambda q:-q[0])
img=bg.copy()
for z,pts,col in quads: cv2.fillConvexPoly(img,pts,col,lineType=cv2.LINE_AA)
o=cv2.resize(cv2.imread('/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'),(767,1536))
sheet=np.hstack([o[1000:1536],img[1000:1536]])
cv2.imwrite(OUT,sheet)
