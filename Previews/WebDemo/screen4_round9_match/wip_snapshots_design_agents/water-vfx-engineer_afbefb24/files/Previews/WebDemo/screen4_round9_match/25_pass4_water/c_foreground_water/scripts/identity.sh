#!/bin/bash
# Pass 4c identity proof: raw 3D canvas frames (CANVAS=1, seed 7, DPR 1.5) of `match`, the normal game and older switches,
# rendered by the bundle of e4c5fa1 (OLD_ROOT: a folder serving that bundle with this worktree's other files) and by this
# pass's bundle (NEW_ROOT), then compared pixel by pixel (identity_compare.py).
#   bash identity.sh <OLD_ROOT> <NEW_ROOT> <out-dir> [switches, default "match normal match,nofoam splash"] [times, default 2.85,3.0,3.1]
OLD=$1; NEW=$2; OUT=$3; SW=${4:-"match normal match,nofoam splash"}; T=${5:-2.85,3.0,3.1}
cd "$NEW"
for s in $SW; do
  lab=$(echo "$s" | tr ',' '+')
  s3=$s; [ "$s" = normal ] && s3=
  for side in old new; do
    root=$OLD; [ $side = new ] && root=$NEW
    S3=$s3 TIMES=$T DPR=1.5 CANVAS=1 LABEL=${lab}_$side flock /tmp/bw_browser.lock node "$NEW/tools/screen4/liquid_shots.cjs" "$root" "$OUT" 2>&1 | tail -1
  done
done
