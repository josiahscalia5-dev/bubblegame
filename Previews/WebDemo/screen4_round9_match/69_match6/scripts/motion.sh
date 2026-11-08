#!/usr/bin/env bash
# match6 through the run: motion_shots.cjs (real swipes, seed 7, Pixel 7 412 x 839) for match6 and for ,nomatch6 (match5) from
# the same bundle, so the motion is identical and only her look differs; then a sheet ORIGINAL | match5 | match6 per moment.
#   bash motion.sh <repo> <scratch>
R="$1"; SP="$2"; E=$R/Previews/WebDemo/screen4_round9_match/69_match6; D=$R/WebDemo; source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
for v in match6:intunnel,structmatch match5:intunnel,structmatch,nomatch6; do L=${v%%:*}; S=${v#*:}; rm -rf $SP/mo_$L
  (cd $D && S3=$S SHOTS=4.0,5.0,5.5,6.0,7.7,10.0 VIEW=412x839 DPR=2 ART_OFF=1 node tools/screen4/motion_shots.cjs $D $SP/mo_$L 10.5 > $SP/mo_$L.log 2>&1); echo "$L: exit $? $(ls $SP/mo_$L | wc -l) files"; done
