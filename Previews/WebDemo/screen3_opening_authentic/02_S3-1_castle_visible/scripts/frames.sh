#!/usr/bin/env bash
# S3-1 frames: <label> <WebDemo>: Tap to Start (NOTAP) and 0.5, 1.0, 1.5, 2.0, 3.0 s after the tap (seed 7, no steering),
# 1:2 (768 x 1536 canvas + page); Tap to Start also on a Pixel 7 (412 x 839).
L=$1; D=$2; E=/home/user/bubblegame/Previews/WebDemo/screen3_opening_authentic/02_S3-1_castle_visible
cd /home/user/bubblegame && source Tools/bw_tools_env.sh; mkdir -p $E/frames
T=/home/user/bubblegame/WebDemo/tools/screen4/layer_diag.cjs
r() { local n=$1; shift; (cd $D && env S3=focus "$@" node $T $D $E/frames/${L}_$n > $E/frames/${L}_$n.log 2>&1); echo "${L}_$n: $(tail -n 1 $E/frames/${L}_$n.log)"; }
r tap NOTAP=1; r tap_pixel7 NOTAP=1 VIEW=412x839 DPR=2.625
for t in 0.5 1.0 1.5 2.0 3.0; do r T$t T=$t; done
