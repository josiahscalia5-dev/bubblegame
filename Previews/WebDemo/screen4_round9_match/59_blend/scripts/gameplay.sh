#!/usr/bin/env bash
# Gameplay proofs on this worktree's rebuilt bundle: gameplay.sh <s3_func|r2_func|trace> <s3> <label>
#   s3_func / r2_func (r2_func at VW=135 VH=270, as the accepted report was made) print the report to proofs/<test>_<label>.txt;
#   trace: tools/screen4/motion_trace.cjs (SCRIPT=swipejump) to motion/trace_<label>_swipejump.json
T="$1"; S="$2"; L="$3"
R=/home/user/bubblegame/.claude/worktrees/agent-a19467485d7ab6a56; E=$R/Previews/WebDemo/screen4_round9_match/59_blend; D=$R/WebDemo
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; mkdir -p $E/proofs $E/motion
cd $D
case "$T" in
  s3_func) S3="$S" node tools/screen3/s3_func.cjs $D > $E/proofs/s3_func_$L.txt 2> $E/proofs/s3_func_$L.err ;;
  r2_func) S3="$S" VW=135 VH=270 node tools/screen3/r2_func.cjs $D > $E/proofs/r2_func_$L.txt 2> $E/proofs/r2_func_$L.err ;;
  trace) S3="$S" SCRIPT=swipejump node tools/screen4/motion_trace.cjs $D $E/motion/trace_${L}_swipejump.json > $E/motion/trace_$L.log 2>&1 ;;
esac
echo "$T $S: exit $?"
