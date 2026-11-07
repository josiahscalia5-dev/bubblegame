import json, numpy as np, sys
d=json.load(open('/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/53_swim/solve/frame_start.json'))
P=np.array(d['proj']).reshape(4,4).T; V=np.array(d['view']).reshape(4,4).T
C=np.array(d['swell']['C'])
def scr(w):
    w=np.array(list(w)+[1.0]); c=P@V@w; n=c[:3]/c[3]
    return (n[0]*0.5+0.5)*767, (0.5-n[1]*0.5)*1536, c[3]
if __name__=='__main__':
    print('cam', d['state']['camera'], 'C', C)
    # floor points straight ahead toward camera from her (u negative = toward camera)
    for u in [0.5,0,-0.3,-0.55,-0.75,-0.9,-1.1,-1.3,-1.5,-1.8]:
        print('floor u=%5.2f'%u, ['%.0f,%.0f'%scr(C+np.array([x,0,u]))[:2] for x in [-1.5,-0.95,-0.5,0,0.5,0.95,1.5]])
    for h in [0.1,0.2,0.3,0.4,0.5,0.6]:
        print('crest front h=%.2f'%h, ['%.0f,%.0f'%scr(C+np.array([x,h,-0.55*np.cos(np.arcsin(min(abs(x)/0.95,1)))]))[:2] for x in [-0.9,-0.6,-0.3,0,0.3,0.6,0.9]])
    # her body centre and bottom
    root=np.array(d['root']); print('her centre', scr(root), 'bottom', scr(root-np.array([0,0.4,0])), 'front-bottom', scr(root+np.array([0,-0.25,-0.3])))
