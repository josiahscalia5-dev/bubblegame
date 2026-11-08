#!/usr/bin/env bash
# Identity proofs for tripo2 (session 57091b57, 8 November 2026), the previous build (bundle aa85e7ac = tripo1) against the tripo2 build,
# WITHOUT tripo2: (1) the 3D opening (o3d_shots.cjs: Home at rest, the toss at 0.4 / 0.7 / 1.0 / 1.4 s, Screen 2 at rest), page
# screenshots compared pixel by pixel; (2) layer_diag.cjs WebGL canvases: the accepted ?s3=intunnel at start and 3 s, the normal game,
# level1 at start and 20 s.   bash identity.sh <repo> <scratch> <old demo dir> <new demo dir>
R="$1"; SP="$2"; OLD="$3"; NEW="$4"; E=$R/Previews/WebDemo/screen4_round9_match/73_tripo2_opening_basket_towels; OUT=$SP/identity73; mkdir -p $OUT; : > $E/proofs/identity.txt
cmp() { ~/.bubblewash-tools/visual/bin/python -c "
import numpy as np, sys; from PIL import Image
a,b=(np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in sys.argv[1:3]); print(int((np.abs(a-b).sum(-1)>0).sum()))" "$1" "$2"; }
S=intunnel,structmatch,home,level1
for B in old new; do D=$OLD; [ $B = new ] && D=$NEW; (cd $R/WebDemo && S3=$S IDLE=0 SEQ=0.4,0.7,1.0,1.4 timeout 900 node tools/level1/o3d_shots.cjs $D $OUT/o3d_$B > /dev/null 2>&1); done
for f in home_idle_0.0 seq_0.40 seq_0.70 seq_1.00 seq_1.40 toss_idle_0.0; do echo "opening $f: $(cmp $OUT/o3d_old/$f.png $OUT/o3d_new/$f.png) pixels differ ($(md5sum < $OLD/game.bundle.js | cut -c1-8) vs $(md5sum < $NEW/game.bundle.js | cut -c1-8), ?s3=$S)" | tee -a $E/proofs/identity.txt; done
run() { L="$1"; S3V="$2"; M="$3"; if [ "$M" = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  for B in old new; do D=$OLD; [ $B = new ] && D=$NEW; (cd $R/WebDemo && env S3="$S3V" $EX timeout 900 node tools/screen4/layer_diag.cjs $D $OUT/${L}_${M}_$B > /dev/null 2>&1); done
  echo "$L $M: $(cmp $OUT/${L}_${M}_old/base_canvas.png $OUT/${L}_${M}_new/base_canvas.png) pixels differ (?s3=$S3V)" | tee -a $E/proofs/identity.txt; }
run accepted intunnel start; run accepted intunnel T3.0; run normal , T1.0; run level1_flow intunnel,structmatch,level1 start; run level1_flow intunnel,structmatch,level1 T20.0
echo "== done $(date -u +%H:%M:%S)" | tee -a $E/proofs/identity.txt
