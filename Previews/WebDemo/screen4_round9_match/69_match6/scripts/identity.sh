#!/usr/bin/env bash
# match6 identity proofs (layer_diag.cjs canvases, Math.random seed 7): the previous bundle (92bd9272, before match6) against the
# new bundle for the accepted ?s3=intunnel, the normal game and ?s3=intunnel,structmatch,nomatch6.
#   bash identity.sh <repo> <scratch> <previous bundle> <index.html>
R="$1"; SP="$2"; E=$R/Previews/WebDemo/screen4_round9_match/69_match6; D=$R/WebDemo; OUT=$SP/identity69; mkdir -p $OUT
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
O=$SP/webdemo69_prev; mkdir -p $O; for f in $D/*; do b=$(basename $f); [ "$b" = game.bundle.js ] || [ "$b" = index.html ] || ln -sfn $f $O/$b; done; cp $3 $O/game.bundle.js; cp $4 $O/index.html
: > $E/proofs/identity.txt
run() { L="$1"; SO="$2"; SN="$3"; M="$4"; if [ "$M" = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  (cd $D && env S3="$SO" $EX node tools/screen4/layer_diag.cjs $O $OUT/${L}_${M}_old > /dev/null 2>&1)
  (cd $D && env S3="$SN" $EX node tools/screen4/layer_diag.cjs $D $OUT/${L}_${M}_new > /dev/null 2>&1)
  ~/.bubblewash-tools/visual/bin/python -c "
import numpy as np; from PIL import Image
a,b=(np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in ['$OUT/${L}_${M}_old/base_canvas.png','$OUT/${L}_${M}_new/base_canvas.png'])
print('$L $M:', int((np.abs(a-b).sum(-1)>0).sum()), 'pixels differ ($(md5sum < $O/game.bundle.js | cut -c1-8) ?s3=$SO vs $(md5sum < $D/game.bundle.js | cut -c1-8) ?s3=$SN)')" | tee -a $E/proofs/identity.txt; }
run accepted intunnel intunnel start; run accepted intunnel intunnel T3.0; run normal , , T1.0
run rollback_match5 intunnel,structmatch intunnel,structmatch,nomatch6 start; run rollback_match5 intunnel,structmatch intunnel,structmatch,nomatch6 T3.0
echo "== done $(date -u +%H:%M:%S)"
