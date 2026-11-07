#!/usr/bin/env bash
# The final pass's evidence sheets: the ORIGINAL scaled uniformly (537 x 1076) | page captures with the HUD (538 x 1076,
# s3_shot.cjs, seed 7) of the ACCEPTED ?s3=intunnel and the NEW ?s3=intunnel,structmatch, the same build and moments.
#   bash sheets.sh <worktree>
R="$1"; E=$R/Previews/WebDemo/screen4_round9_match/64_final_pass; A=$E/frames_accepted; N=$E/frames_new
S="$HOME/.bubblewash-tools/visual/bin/python $E/scripts/sheet.py"; mkdir -p $E/sheets; cd $R
$S $E/sheets/01_TAP_TO_START_ORIGINAL_ACCEPTED_NEW.jpg "ACCEPTED Tap to Start=$A/t0.png" "NEW Tap to Start=$N/t0.png"
$S $E/sheets/02_PLUS1S_PLUS2S.jpg "ACCEPTED +1 s=$A/t1.0.png" "NEW +1 s=$N/t1.0.png" "ACCEPTED +2 s=$A/t2.0.png" "NEW +2 s=$N/t2.0.png"
$S $E/sheets/03_PLUS3S_PLUS5S.jpg "ACCEPTED +3 s=$A/t3.0.png" "NEW +3 s=$N/t3.0.png" "ACCEPTED +5 s=$A/t5.0.png" "NEW +5 s=$N/t5.0.png"
$S $E/sheets/04_LATER_PLUS4S_PLUS8S_PLUS14S_near_route_end.jpg "ACCEPTED +4 s=$A/t4.0.png" "NEW +4 s=$N/t4.0.png" "ACCEPTED +8 s=$A/t8.0.png" "NEW +8 s=$N/t8.0.png" "ACCEPTED +14 s=$A/t14.0.png" "NEW +14 s=$N/t14.0.png"
$S $E/sheets/05_closeup_washer_lining_y08-55_plus1_plus3_plus8_plus14.jpg --crop 0.08 0.55 "ACCEPTED Tap to Start=$A/t0.png" "NEW +1 s=$N/t1.0.png" "NEW +3 s=$N/t3.0.png" "NEW +8 s=$N/t8.0.png" "NEW +14 s=$N/t14.0.png"
$S $E/sheets/06_closeup_lining_ACCEPTED_vs_NEW_y08-55_plus1_plus8.jpg --crop 0.08 0.55 --zoom 1.5 "ACCEPTED +1 s=$A/t1.0.png" "NEW +1 s=$N/t1.0.png" "ACCEPTED +8 s=$A/t8.0.png" "NEW +8 s=$N/t8.0.png"
$S $E/sheets/07_closeup_water_round_her_y60-95_t0_plus1_plus2.jpg --crop 0.6 0.95 --zoom 1.5 "ACCEPTED Tap to Start=$A/t0.png" "NEW Tap to Start=$N/t0.png" "ACCEPTED +1 s=$A/t1.0.png" "NEW +1 s=$N/t1.0.png" "NEW +2 s=$N/t2.0.png"
ls $E/sheets
