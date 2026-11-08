#!/usr/bin/env bash
# Level 1 continuity pass: GL cost (draw calls and triangles, cost_probe.cjs) for the previous level1 (ccr 92bd9272) and the new one at
# the same moments of the same autopiloted run; then the gameplay tests (s3_func, r2_func, the seeded motion trace) on the new build,
# candidate against level1 (the old session's 68_level1/scripts/gameplay.sh), and pause / Bubble Blast / Turbo Spin on a fresh page.
#   bash tests.sh <repo> <scratch> <previous demo dir> <new demo dir>
R="$1"; SP="$2"; OLD="$3"; NEW="$4"; E=$R/Previews/WebDemo/screen4_round9_match/70_level1_wet; source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
for v in old:$OLD new:$NEW; do L=${v%%:*}; Dd=${v#*:}
  (cd $Dd && S3=intunnel,structmatch,level1 TIMES=0,3,8,20,30,38,42,46 timeout 1500 node $R/WebDemo/tools/level1/cost_probe.cjs $Dd > $E/proofs/cost_$L.txt 2>&1); echo "cost $L: exit $?"; done
cd $NEW
for L in candidate level1; do S=intunnel,structmatch; [ $L = level1 ] && S=intunnel,structmatch,level1
  S3="$S" timeout 1500 node tools/screen3/s3_func.cjs $NEW > $E/proofs/s3_func_$L.txt 2> $E/proofs/s3_func_$L.err; echo "s3_func $S: exit $?"
  S3="$S" VW=135 VH=270 timeout 1500 node tools/screen3/r2_func.cjs $NEW > $E/proofs/r2_func_$L.txt 2> $E/proofs/r2_func_$L.err; echo "r2_func $S: exit $? (its later page reload hangs, as in the old session's runs)"
  S3="$S" SCRIPT=swipejump timeout 1500 node tools/screen4/motion_trace.cjs $NEW $E/motion/trace_${L}_swipejump.json > $E/motion/trace_$L.log 2>&1; echo "trace $S: exit $?"
done
diff $E/proofs/s3_func_candidate.txt $E/proofs/s3_func_level1.txt > $E/proofs/s3_func_compare.txt
~/.bubblewash-tools/visual/bin/python $R/Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/trace_compare.py $E/motion/trace_candidate_swipejump.json $E/motion/trace_level1_swipejump.json > $E/proofs/motion_trace_gameplay.txt
(cd $NEW && timeout 900 node $R/Previews/WebDemo/ccr_branch_verification_2026-11-08/scripts/abilities_probe.cjs $NEW > $E/proofs/abilities_probe_level1.txt 2>&1); echo "abilities: exit $?"
cat $E/proofs/motion_trace_gameplay.txt | head -3; echo "== done $(date -u +%H:%M:%S)"
