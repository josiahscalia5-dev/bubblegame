#!/usr/bin/env bash
# Identity proofs for tripo1 (session 57091b57, 8 November 2026): layer_diag.cjs WebGL canvases (seed 7, 768 x 1536, the DOM HUD not
# included) of the frozen previous build (e97a4d3b = ccr-50c66592-kcnqoy's bundle at fc57eba2) against the tripo1 build, WITHOUT tripo1:
# the accepted ?s3=intunnel, the normal game, the candidate intunnel,structmatch, and level1 (flow) at Tap to Start and 3 / 20 / 38 s.
#   bash identity.sh <repo> <scratch> <old demo dir> <new demo dir>
R="$1"; SP="$2"; OLD="$3"; NEW="$4"; E=$R/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies; OUT=$SP/identity74; mkdir -p $OUT
: > $E/proofs/identity.txt
run() { L="$1"; S="$2"; M="$3"; if [ "$M" = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  for B in old new; do D=$OLD; [ $B = new ] && D=$NEW; (cd $R/WebDemo && env S3="$S" $EX timeout 900 node tools/screen4/layer_diag.cjs $D $OUT/${L}_${M}_$B > /dev/null 2>&1); done
  ~/.bubblewash-tools/visual/bin/python -c "
import numpy as np; from PIL import Image
a,b=(np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in ['$OUT/${L}_${M}_old/base_canvas.png','$OUT/${L}_${M}_new/base_canvas.png'])
print('$L $M:', int((np.abs(a-b).sum(-1)>0).sum()), 'pixels differ ($(md5sum < $OLD/game.bundle.js | cut -c1-8) vs $(md5sum < $NEW/game.bundle.js | cut -c1-8), ?s3=$S)')" | tee -a $E/proofs/identity.txt; }
run accepted intunnel start; run normal , T1.0
run opening_home intunnel,structmatch,home start
for M in start T20.0; do run level1_flow intunnel,structmatch,level1 $M; done
echo "== done $(date -u +%H:%M:%S)" | tee -a $E/proofs/identity.txt
