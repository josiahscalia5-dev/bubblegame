#!/usr/bin/env bash
# Bubble inventory on the step 6 build (main checkout): seed 7, no steering, T seconds after the tap, each bubble layer hidden alone.
E=/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil; D=/home/user/bubblegame/WebDemo
source /home/user/bubblegame/Tools/bw_tools_env.sh
one() { (cd $D && S3=focus T=$1 node tools/screen4/layer_diag.cjs $D $E/inventory/T$1 $E/bubble_ablations.json > $E/inventory/T$1.log 2>&1); echo "T$1: $(tail -n 1 $E/inventory/T$1.log)"; }
mkdir -p $E/inventory
one 3.0 & one 4.0 & wait
one 5.0 & one 6.0 & wait
one 8.0
