import sys, runpy, numpy as np
sys.argv=['proto.py']+sys.argv[1:]
src=open('/tmp/claude-0/-home-user-bubblegame/08b39b21-0dec-5ec1-bc99-07d34f97f077/scratchpad/wv/proto.py').read()
src=src.replace("if 140<=k<=620: top[k]=min(top.get(k,9999),y)","top[k]=min(top.get(k,9999),y)").replace("k=170+int(round((x-170)/15))*15","k=int(round(x/40))*40")
src=src.split("orig={")[0]+"print(' '.join('%d:%.0f'%(k,top.get(k,0)) for k in range(0,800,40)))\n"
exec(compile(src,'p','exec'))
