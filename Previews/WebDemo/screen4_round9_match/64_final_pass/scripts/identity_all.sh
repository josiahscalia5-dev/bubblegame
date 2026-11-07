#!/usr/bin/env bash
# Identity proof for ?s3=intunnel,structmatch (Checkpoint A): the same moments rendered by the COMMITTED bundle (38466b67,
# in a scratch copy of WebDemo whose other files are links to this worktree's) and by this worktree's REBUILT bundle, the
# same seed and frame (tools/screen4/layer_diag.cjs base canvas renders, 768 x 1536); pixel count that differ.
#   bash identity_all.sh <worktree> <scratch> <old bundle> <old index.html>
R="$1"; SP="$2"; OLDB="$3"; OLDI="$4"
D=$R/WebDemo; E=$R/Previews/WebDemo/screen4_round9_match/64_final_pass/proofs; OLD=$SP/webdemo_old; OUT=$SP/identity
mkdir -p $E $OUT $OLD
for f in $D/*; do b=$(basename $f); [ "$b" = game.bundle.js ] || [ "$b" = index.html ] || ln -sfn $f $OLD/$b; done
cp $OLDB $OLD/game.bundle.js; cp $OLDI $OLD/index.html
: > $E/identity.txt
run() {   # label s3 moment
  L="$1"; S="$2"; M="$3"
  if [ "$M" = start ]; then EX="NOTAP=1"; else EX="T=${M#T}"; fi
  (cd $D && env S3="$S" $EX node tools/screen4/layer_diag.cjs $OLD $OUT/${L}_${M}_old > $OUT/${L}_${M}_old.log 2>&1)
  (cd $D && env S3="$S" $EX node tools/screen4/layer_diag.cjs $D $OUT/${L}_${M}_new > $OUT/${L}_${M}_new.log 2>&1)
  ~/.bubblewash-tools/visual/bin/python - "$OUT/${L}_${M}_old/base_canvas.png" "$OUT/${L}_${M}_new/base_canvas.png" "$L $M" "$(md5sum < $OLD/game.bundle.js | cut -c1-8)" "$(md5sum < $D/game.bundle.js | cut -c1-8)" <<'PY' | tee -a $E/identity.txt
import sys, numpy as np; from PIL import Image
a, b = (np.asarray(Image.open(p).convert('RGBA')).astype(int) for p in sys.argv[1:3])
n = int((np.abs(a - b).sum(-1) > 0).sum())
print(f'{sys.argv[3]}: {a.shape[1]} x {a.shape[0]} canvas, {n} pixels differ (committed bundle {sys.argv[4]} vs rebuilt {sys.argv[5]})')
PY
}
run intunnel intunnel start; run intunnel intunnel T1.0; run intunnel intunnel T2.0
run noswim2 intunnel,noswim2 T1.0; run blend intunnel,blend T1.0; run water9 intunnel,water9 T1.0
run normal , start; run normal , T1.0
