#!/usr/bin/env bash
# Gameplay proofs on this worktree's rebuilt bundle, the accepted ?s3=intunnel against ?s3=intunnel,structmatch:
#   s3_func, r2_func (VW=135 VH=270, as the accepted report was made) and the motion trace (SCRIPT=swipejump), then the diffs.
#   bash gameplay.sh <worktree>
R="$1"; D=$R/WebDemo; E=$R/Previews/WebDemo/screen4_round9_match/64_final_pass
mkdir -p $E/proofs $E/motion; cd $D
for L in accepted structmatch; do
  S=intunnel; [ $L = structmatch ] && S=intunnel,structmatch
  S3="$S" node tools/screen3/s3_func.cjs $D > $E/proofs/s3_func_$L.txt 2> $E/proofs/s3_func_$L.err; echo "s3_func $S: exit $?"
  S3="$S" VW=135 VH=270 node tools/screen3/r2_func.cjs $D > $E/proofs/r2_func_$L.txt 2> $E/proofs/r2_func_$L.err; echo "r2_func $S: exit $?"
  S3="$S" SCRIPT=swipejump node tools/screen4/motion_trace.cjs $D $E/motion/trace_${L}_swipejump.json > $E/motion/trace_$L.log 2>&1; echo "trace $S: exit $?"
done
diff $E/proofs/s3_func_accepted.txt $E/proofs/s3_func_structmatch.txt > $E/proofs/s3_func_compare.txt
diff $E/proofs/r2_func_accepted.txt $E/proofs/r2_func_structmatch.txt > $E/proofs/r2_func_compare.txt
~/.bubblewash-tools/visual/bin/python $R/Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/trace_compare.py $E/motion/trace_accepted_swipejump.json $E/motion/trace_structmatch_swipejump.json > $E/proofs/motion_trace_gameplay.txt
wc -l $E/proofs/*_compare.txt; cat $E/proofs/motion_trace_gameplay.txt
