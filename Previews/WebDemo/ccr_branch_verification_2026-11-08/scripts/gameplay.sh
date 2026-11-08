#!/usr/bin/env bash
# Gameplay tests on an exact export of branch ccr-76d4bc77-rqhl8o (session 8140e507, 8 November 2026): the old session's own
# 68_level1/scripts/gameplay.sh run on <demo-dir> with its outputs here: s3_func, r2_func (VW=135 VH=270) and the seeded motion
# trace (SCRIPT=swipejump) on the candidate ?s3=intunnel,structmatch and with level1, then the diffs.
#   bash gameplay.sh <repo> <demo-dir>
R="$1"; D="$2"; E=$R/Previews/WebDemo/ccr_branch_verification_2026-11-08
mkdir -p $E/proofs $E/motion; cd $D; source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
for L in candidate level1; do
  S=intunnel,structmatch; [ $L = level1 ] && S=intunnel,structmatch,level1
  S3="$S" node tools/screen3/s3_func.cjs $D > $E/proofs/s3_func_$L.txt 2> $E/proofs/s3_func_$L.err; echo "s3_func $S: exit $?"
  S3="$S" VW=135 VH=270 node tools/screen3/r2_func.cjs $D > $E/proofs/r2_func_$L.txt 2> $E/proofs/r2_func_$L.err; echo "r2_func $S: exit $?"
  S3="$S" SCRIPT=swipejump node tools/screen4/motion_trace.cjs $D $E/motion/trace_${L}_swipejump.json > $E/motion/trace_$L.log 2>&1; echo "trace $S: exit $?"
done
diff $E/proofs/s3_func_candidate.txt $E/proofs/s3_func_level1.txt > $E/proofs/s3_func_compare.txt
diff $E/proofs/r2_func_candidate.txt $E/proofs/r2_func_level1.txt > $E/proofs/r2_func_compare.txt
~/.bubblewash-tools/visual/bin/python $R/Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/trace_compare.py $E/motion/trace_candidate_swipejump.json $E/motion/trace_level1_swipejump.json > $E/proofs/motion_trace_gameplay.txt
wc -l $E/proofs/*_compare.txt; cat $E/proofs/motion_trace_gameplay.txt
