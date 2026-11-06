#!/usr/bin/env bash
# Layer ablation of one moment (diagnostic only; nothing in the game changes): run_ablation.sh <label> <s3> <start|T1.0|T2.0>
# start = Tap to Start (NOTAP=1, game clock 3.517 s); T1.0 / T2.0 = that long after the tap. Seed 7, no steering, the
# 768 x 1536 canvas (layer_diag.cjs defaults). Every ablation is the SAME frame (time is not advanced between renders).
L="$1"; S="$2"; M="$3"; R=/workspace/bubblegame; E=$R/Previews/WebDemo/screen4_round9_match/52_diagnosis; D=$R/WebDemo
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; mkdir -p $E/ablation
if [ "$M" = start ]; then EXTRA="NOTAP=1"; else EXTRA="T=${M#T}"; fi
(cd $D && env S3="$S" $EXTRA node tools/screen4/layer_diag.cjs $D $E/ablation/${L}_$M $E/scripts/ablations.json > $E/ablation/${L}_$M.log 2>&1)
echo "$L $M: $(tail -n 1 $E/ablation/${L}_$M.log)"
