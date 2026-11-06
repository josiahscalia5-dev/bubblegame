#!/usr/bin/env bash
# Step 6 motion captures (a copy of ../30_step5_fill_map/motion_capture.sh with this session's paths): the same seeded run
# (seed 7, the step 4 video's swipes), shots at the video times in SH, at 1:2 (538 x 1076 at 1536/1076: a 768 x 1536 canvas)
# and Pixel 7 (412 x 839 at 2.625).
#   motion_capture.sh <WebDemo> <out dir> <label> [extra env, e.g. TUNE=...]
D="$1"; O="$2"; L="$3"; shift 3; SH="${SH:-5.0,5.5,6.5,7.7,9.0}"
M="$D/tools/screen4/motion_shots.cjs"
mkdir -p "$O"
one() { # label view dpr
  (cd "$D" && env S3=focus ART_OFF=1 SHOTS=$SH VIEW=$2 DPR=$3 "${EXTRA[@]}" node "$M" "$D" "$O/$1" 9.1 > "$O/$1.log" 2>&1)
  echo "$1: $(tail -n1 "$O/$1.log") | $(ls "$O/$1" 2>/dev/null | grep -c canvas) shots"
}
EXTRA=("$@")
one "${L}_1to2" 538x1076 1.42751 & one "${L}_pixel7" 412x839 2.625 & wait
