#!/usr/bin/env bash
# Step 7 variants on the step 6 build (main checkout) by test tune only (no file changes): seed 7, no steering, T after the tap.
E=/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil; D=/home/user/bubblegame/WebDemo
source /home/user/bubblegame/Tools/bw_tools_env.sh
WALLZ='[[0.38,[20,160],[0.62,0.93],[4.5,10]],[0.25,[160,222],[0.62,0.93],[4.5,10]],[0.25,[-42,20],[0.62,0.93],[4.5,10]],[0.12,[20,200],[0.75,0.93],[10,30]]]'
declare -A TUNES=(
  [V1]='{"matchWater":{"bubbles":{"count":40}}}'
  [V2]="{\"matchWater\":{\"bubbles\":{\"count\":40,\"zones\":$WALLZ}}}"
  [V3]="{\"matchWater\":{\"bubbles\":{\"count\":60,\"zones\":$WALLZ}}}"
)
one() { (cd $D && S3=focus T=$2 TUNE="${TUNES[$1]}" node tools/screen4/layer_diag.cjs $D $E/variants/$1_T$2 > $E/variants/$1_T$2.log 2>&1); echo "$1 T$2: $(tail -n 1 $E/variants/$1_T$2.log)"; }
mkdir -p $E/variants
for v in V1 V2 V3; do one $v 3.0 & one $v 4.0 & wait; one $v 5.0 & one $v 6.0 & wait; done
