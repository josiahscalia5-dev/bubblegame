#!/usr/bin/env bash
# One moment of a candidate (layer_diag.cjs, seed 7, no steering, 768 x 1536 canvas): render.sh <label> <s3> <start|T1.0|T2.0> [tune json]
# start = Tap to Start (game clock 3.517 s); T1.0 / T2.0 = that long after the tap. Also renders the collar alone and the
# frame without it (abl_swim.json), the same frame.
L="$1"; S="$2"; M="$3"; TU="${4:-{\}}"; R=/workspace/bubblegame; E=$R/Previews/WebDemo/screen4_round9_match/53_swim; D=$R/WebDemo
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; mkdir -p $E/frames
if [ "$M" = start ]; then EXTRA="NOTAP=1"; else EXTRA="T=${M#T}"; fi
(cd $D && env S3="$S" TUNE="$TU" $EXTRA node tools/screen4/layer_diag.cjs $D $E/frames/${L}_$M $E/scripts/abl_swim.json > $E/frames/${L}_$M.log 2>&1)
echo "$L $M: $(tail -n 1 $E/frames/${L}_$M.log)"
