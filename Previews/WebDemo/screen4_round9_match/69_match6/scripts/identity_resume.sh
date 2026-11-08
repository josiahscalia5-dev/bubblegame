#!/usr/bin/env bash
# The last two checks of identity.sh (the container restarted after its first three): ,nomatch6 against the previous candidate.
#   bash identity_resume.sh <repo> <scratch>   (uses identity.sh's prepared folder <scratch>/webdemo69_prev; appends to identity.txt)
R="$1"; SP="$2"; E=$R/Previews/WebDemo/screen4_round9_match/69_match6; D=$R/WebDemo; OUT=$SP/identity69; O=$SP/webdemo69_prev
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
for M in start T3.0; do L=rollback_match5; if [ "$M" = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  (cd $D && env S3=intunnel,structmatch $EX node tools/screen4/layer_diag.cjs $O $OUT/${L}_${M}_old > /dev/null 2>&1)
  (cd $D && env S3=intunnel,structmatch,nomatch6 $EX node tools/screen4/layer_diag.cjs $D $OUT/${L}_${M}_new > /dev/null 2>&1)
  ~/.bubblewash-tools/visual/bin/python -c "
import numpy as np; from PIL import Image
a,b=(np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in ['$OUT/${L}_${M}_old/base_canvas.png','$OUT/${L}_${M}_new/base_canvas.png'])
print('$L $M:', int((np.abs(a-b).sum(-1)>0).sum()), 'pixels differ ($(md5sum < $O/game.bundle.js | cut -c1-8) ?s3=intunnel,structmatch vs $(md5sum < $D/game.bundle.js | cut -c1-8) ?s3=intunnel,structmatch,nomatch6)')" | tee -a $E/proofs/identity.txt; done
