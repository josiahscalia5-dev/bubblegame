#!/usr/bin/env bash
# After the identity proofs (session b0abcf95): GL cost of both builds at the same moments, the alternative-route clip (the side paths'
# main route, then the left upper ledge of the drop) and the ledge route's frames. All on the frozen builds.
#   bash after_identity.sh <repo> <scratch> <old demo dir> <new demo dir>
R="$1"; SP="$2"; OLD="$3"; NEW="$4"; E=$R/Previews/WebDemo/screen4_round9_match/71_level1_flow
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1
while pgrep -f "71_level1_flow/scripts/identity.sh" > /dev/null; do sleep 10; done
T=0,3,8,10,16,20,30,38,46
(cd $OLD && S3=intunnel,structmatch,level1 TIMES=$T timeout 1800 node $R/WebDemo/tools/level1/cost_probe.cjs $OLD > $E/proofs/cost_previous_level1_a62848a0.txt 2>&1); echo "cost old: $?"
(cd $NEW && S3=intunnel,structmatch,level1 TIMES=$T timeout 1800 node $R/WebDemo/tools/level1/cost_probe.cjs $NEW > $E/proofs/cost_flow_final.txt 2>&1); echo "cost new: $?"
(cd $NEW && S3=intunnel,structmatch,level1 ROUTE=ledge START_U=48 END_U=138 FPS=12 RUN=40 timeout 3600 node tools/level1/record_flow.cjs $NEW $SP/rec_ledge > $SP/rec_ledge.log 2>&1); echo "ledge clip: $?"
(cd $R/WebDemo && S3=intunnel,structmatch,level1 ROUTE=ledge SHOTS=66,78,110,117.4,124 timeout 1800 node tools/level1/flow_routes.cjs $NEW $E/frames/ledge_route > $E/frames/ledge_route/states.json 2> $SP/ledge_frames.err); echo "ledge frames: $?"
(cd $R/WebDemo && S3=intunnel,structmatch,level1 ROUTE=upper SHOTS=3.5,40,59,66,78,108,113.5,116,124,150,170,197,226,258,285,312,336 timeout 2400 node tools/level1/flow_routes.cjs $NEW $E/frames/upper_route > $E/frames/upper_route/states.json 2> $SP/upper_frames.err); echo "upper frames: $?"
for r in blocked; do (cd $R/WebDemo && S3=intunnel,structmatch,level1 ROUTE=$r SHOTS= timeout 1800 node tools/level1/flow_routes.cjs $NEW $SP/final_$r > $E/frames/route_test_$r.json 2> $SP/final_$r.err); echo "route $r: $?"; done
echo "== after_identity done $(date -u +%H:%M:%S)"
