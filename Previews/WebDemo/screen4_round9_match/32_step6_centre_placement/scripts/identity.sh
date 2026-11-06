#!/usr/bin/env bash
# Step 6 identity proof (a copy of ../27_step4_floor_lift/scripts/identity.sh): the raw 3D canvas (tools/models/game_eval.cjs SHOT, seed 7,
# 538 x 1076) of the normal game, the ten older switches, match and match,nofoam, BEFORE (step 4, bundle 73ed2a8b, the main
# checkout) and AFTER (step 6, the step 6 worktree),
# at Tap to Start, 2.85 and 4.2 s (match and match,nofoam also 3.0 s): the same 41 frames as steps 3 and 4.
#   identity.sh <before WebDemo> <after WebDemo> <out dir>
B="$1"; A="$2"; O="$3"; mkdir -p "$O/before" "$O/after"
one() { # $1 switch list, $2 label, $3 times
  for side in before after; do
    D=$B; [ $side = after ] && D=$A
    (cd "$D" && S3="$1" TIMES="$3" EVAL='0' SHOT="$O/$side/$2_%.png" node tools/models/game_eval.cjs "$D" > "$O/$side/$2.log" 2>&1) &
  done
  wait
}
one "" normal 2.85,4.2
for s in round4 round5 round6 round6,rich round7 hero liquid liquid,nofoam splash splash,nofoam; do one "$s" "${s/,/+}" 2.85,4.2; done
one match match 2.85,3.0,4.2
one match,nofoam match+nofoam 2.85,3.0,4.2
echo done
