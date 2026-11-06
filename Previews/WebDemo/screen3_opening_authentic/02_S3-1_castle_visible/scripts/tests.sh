#!/usr/bin/env bash
# S3-1 regression: 41 identity frames (step 8 = main checkout vs S3-1 worktree) and ?s3=focus + normal-game gameplay.
E=/home/user/bubblegame/Previews/WebDemo/screen3_opening_authentic/02_S3-1_castle_visible; R=/home/user/bubblegame/Previews/WebDemo/screen4_round9_match
B=/home/user/bubblegame/WebDemo; A=/home/user/bw-s3a/WebDemo; SP=/tmp/claude-0/-workspace/19cc1b9f-f41f-59b0-8120-cc2c97fb2a7c/scratchpad/tests_s3a
cd /home/user/bubblegame && source Tools/bw_tools_env.sh; mkdir -p $E/gameplay $SP
$R/35_step7_bubble_veil/scripts/identity.sh $B $A $SP/identity > /dev/null 2>&1
{ echo "S3-1 identity proof: before = step 8 (main checkout, e6cd9334), after = S3-1 (bw-s3a). 41 raw-canvas frames of the normal game, the ten older switches, match and match,nofoam (35_step7_bubble_veil/scripts/identity.sh)."
  $BW_PY -I $R/11_merged_final/scripts/identity_compare.py $SP/identity/before $SP/identity/after; } > $E/identity_proof_S3-1.txt
echo "identity: $(tail -n 1 $E/identity_proof_S3-1.txt); logs with console messages: $(grep -l -i 'error\|warning' $SP/identity/*/*.log 2>/dev/null | wc -l)"
(cd $A && S3=focus node tools/screen3/s3_func.cjs $A > $E/gameplay/s3_func_focus_S3-1.txt 2>&1)
(cd $A && S3=focus VW=135 VH=270 node tools/screen3/r2_func.cjs $A > $E/gameplay/r2_func_focus_S3-1.txt 2>&1)
(cd $A && S3= node tools/screen3/s3_func.cjs $A > $E/gameplay/s3_func_normal_S3-1.txt 2>&1)
G=$R/37_step8_white_splashes/gameplay
for k in s3_func_focus r2_func_focus s3_func_normal; do echo "$k vs step 8: $(diff $G/${k}_step8.txt $E/gameplay/${k}_S3-1.txt | grep -c '^[<>]') differing lines"; done
echo "S3-1 TESTS DONE"
