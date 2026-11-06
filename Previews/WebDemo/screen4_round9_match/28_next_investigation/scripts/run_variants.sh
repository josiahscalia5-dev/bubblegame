#!/usr/bin/env bash
# INVESTIGATION runs on the step 4 build (no game files changed): the seed 7, 3.0 s, no-steering frame via
# WebDemo/tools/screen4/layer_diag.cjs with a test tune (TUNE) and/or a ring map served in place of the shipped one (ROUTE_RINGS).
#   run_variants.sh <step 4 WebDemo> <out dir> <M2 map png>
DEMO="$1"; O="$2"; M2="$3"; mkdir -p "$O"
run() { L=$1; shift; (cd "$DEMO" && env S3=focus "$@" node tools/screen4/layer_diag.cjs "$DEMO" "$O/$L" > "$O/$L.log" 2>&1); echo "$L $(tail -1 "$O/$L.log")"; }
pair() { eval "$1" & eval "$2" & wait; }
# core lavender: one wall setting at a time (shipped map)
pair "run C1_core0 TUNE='{\"match\":{\"walls\":{\"core\":{\"amount\":0}}}}'" "run C2_glint0 TUNE='{\"match\":{\"walls\":{\"glint\":{\"amount\":0}}}}'"
pair "run C3_lift0 TUNE='{\"match\":{\"walls\":{\"lift\":0}}}'" "run C4_sat1 TUNE='{\"match\":{\"walls\":{\"sat\":1}}}'"
pair "run C5_detail0 TUNE='{\"match\":{\"walls\":{\"ringMap\":{\"detail\":0}}}}'" "run C6_map1 TUNE='{\"match\":{\"walls\":{\"ringMap\":{\"amount\":1}}}}'"
pair "run C7_wallflecks0 TUNE='{\"match\":{\"walls\":{\"flecks\":{\"amount\":0}}}}'" "run C8_spec0 TUNE='{\"match\":{\"walls\":{\"spec\":0}}}'"
# the fill-only map (the original's own pixels where visible), then the duplicate procedural whites removed
pair "run T1_M2 ROUTE_RINGS=$M2" "run T2_M2_wallflecks0 ROUTE_RINGS=$M2 TUNE='{\"match\":{\"walls\":{\"flecks\":{\"amount\":0}}}}'"
pair "run T3_M2_wallflecks0_streaks0 ROUTE_RINGS=$M2 TUNE='{\"match\":{\"walls\":{\"flecks\":{\"amount\":0}}},\"matchWater\":{\"bubbles\":{\"flecks\":{\"count\":0}}}}'" \
     "run B1_bubbles80 TUNE='{\"matchWater\":{\"bubbles\":{\"count\":80}}}'"
pair "run B2_bubble_body0 TUNE='{\"matchWater\":{\"bubbles\":{\"body\":0}}}'" "run B3_bubbles40 TUNE='{\"matchWater\":{\"bubbles\":{\"count\":40}}}'"
echo all done
