#!/usr/bin/env bash
# Step 7 gameplay checks: ?s3=focus on step 7; the NORMAL game (no switch; r2_func needs S3=',' because its default is
# round2) on step 7 and on step 6 (the reports must match).
E=/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil; A=/home/user/bw-step7/WebDemo; B=/home/user/bubblegame/WebDemo
source /home/user/bubblegame/Tools/bw_tools_env.sh; mkdir -p $E/gameplay
(cd $A && S3=focus node tools/screen3/s3_func.cjs $A > $E/gameplay/s3_func_focus_step7.txt 2>&1; echo "s3_func focus step7 exit $?") &
(cd $A && S3= node tools/screen3/s3_func.cjs $A > $E/gameplay/s3_func_normal_step7.txt 2>&1; echo "s3_func normal step7 exit $?") &
wait
(cd $B && S3= node tools/screen3/s3_func.cjs $B > $E/gameplay/s3_func_normal_step6.txt 2>&1; echo "s3_func normal step6 exit $?") &
(cd $A && S3=focus VW=135 VH=270 node tools/screen3/r2_func.cjs $A > $E/gameplay/r2_func_focus_step7.txt 2>&1; echo "r2_func focus step7 exit $?") &
wait
(cd $A && S3=, VW=135 VH=270 node tools/screen3/r2_func.cjs $A > $E/gameplay/r2_func_normal_step7.txt 2>&1; echo "r2_func normal step7 exit $?") &
(cd $B && S3=, VW=135 VH=270 node tools/screen3/r2_func.cjs $B > $E/gameplay/r2_func_normal_step6.txt 2>&1; echo "r2_func normal step6 exit $?") &
wait
