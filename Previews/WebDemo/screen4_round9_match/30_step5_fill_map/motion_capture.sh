#!/usr/bin/env bash
# Motion captures for a before / after pair: the same seeded run (seed 7, the video's swipes), shots at the video times in SH,
# 1:2 frame (538 x 1076 at 1536/1076: a 768 x 1536 canvas) and Pixel 7 (412 x 839 at 2.625).
#   motion_capture.sh <before WebDemo> <after WebDemo> <out dir> [extra env for after, e.g. TUNE=...]
B="$1"; A="$2"; O="$3"; SH="${SH:-5.0,5.5,6.5,7.7,9.0}"
M=/home/user/bw-step5/WebDemo/tools/screen4/motion_shots.cjs
mkdir -p "$O"
one() { # demo label view dpr
  (cd "$1" && S3=focus ART_OFF=1 SHOTS=$SH VIEW=$3 DPR=$4 node $M "$1" "$O/$2" 9.1 > "$O/$2.log" 2>&1)
  echo "$2: $(tail -n1 "$O/$2.log") | $(ls "$O/$2" 2>/dev/null | grep -c canvas) shots"
}
[ -d "$O/before_1to2" ] || { one "$B" before_1to2 538x1076 1.42751 & one "$B" before_pixel7 412x839 2.625 & wait; }
one "$A" after_1to2 538x1076 1.42751 & one "$A" after_pixel7 412x839 2.625 & wait
