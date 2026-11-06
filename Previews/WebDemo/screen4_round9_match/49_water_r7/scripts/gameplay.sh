#!/usr/bin/env bash
# R7 gameplay checks on one bundle: s3_func (settings, Tap to Start, real swipes, jump, the ride, keyboard start, console
# errors, draw calls) and r2_func (hearts, Bubble Blast, Turbo Spin, pause) for ?s3=intunnel,water7 and the accepted
# ?s3=intunnel; the two reports of each are compared afterwards.
R=/workspace/bubblegame; E=$R/Previews/WebDemo/screen4_round9_match/49_water_r7/gameplay; D=$R/WebDemo
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; mkdir -p $E; cd $D
(S3=intunnel,water7 node tools/screen3/s3_func.cjs $D > $E/s3_func_water7.txt 2>&1; echo "s3_func water7 exit $?") &
(S3=intunnel node tools/screen3/s3_func.cjs $D > $E/s3_func_intunnel.txt 2>&1; echo "s3_func intunnel exit $?") &
wait
(S3=intunnel,water7 VW=135 VH=270 node tools/screen3/r2_func.cjs $D > $E/r2_func_water7.txt 2>&1; echo "r2_func water7 exit $?") &
(S3=intunnel VW=135 VH=270 node tools/screen3/r2_func.cjs $D > $E/r2_func_intunnel.txt 2>&1; echo "r2_func intunnel exit $?") &
wait
