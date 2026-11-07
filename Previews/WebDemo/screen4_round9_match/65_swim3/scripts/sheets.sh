#!/usr/bin/env bash
# swim3's sheets: the ORIGINAL (uniform scale) | ACCEPTED ?s3=intunnel | PREVIOUS candidate (452f9568) | NEW, page captures with
# the HUD (s3_shot.cjs, seed 7, 538 x 1076); and the established seed-7 3.0 s canvas renders (layer_diag.cjs, 768 x 1536).
#   bash sheets.sh <repo>
R="$1"; P=$R/Previews/WebDemo/screen4_round9_match; E=$P/65_swim3; A=$P/64_final_pass/frames_accepted; V=$P/64_final_pass/frames_new; N=$E/frames_new
S="$HOME/.bubblewash-tools/visual/bin/python $E/scripts/sheet.py"; cd $R
$S $E/sheets/01_TAP_TO_START_ORIGINAL_ACCEPTED_PREVIOUS_NEW.jpg "ACCEPTED Tap to Start=$A/t0.png" "PREVIOUS Tap to Start=$V/t0.png" "NEW Tap to Start=$N/t0.png"
$S $E/sheets/02_SEED7_3.0s_ORIGINAL_ACCEPTED_PREVIOUS_NEW.jpg "ACCEPTED 3.0 s (seed 7)=$E/proofs/seed7_3.0s_ACCEPTED_canvas.png" "PREVIOUS 3.0 s (seed 7)=$E/proofs/seed7_3.0s_PREVIOUS_canvas.png" "NEW 3.0 s (seed 7)=$E/proofs/seed7_3.0s_NEW_canvas.png"
$S $E/sheets/03_PLUS1S_PLUS2S_PLUS3S.jpg "PREVIOUS +1 s=$V/t1.0.png" "NEW +1 s=$N/t1.0.png" "PREVIOUS +2 s=$V/t2.0.png" "NEW +2 s=$N/t2.0.png" "PREVIOUS +3 s=$V/t3.0.png" "NEW +3 s=$N/t3.0.png"
$S $E/sheets/04_PLUS5S_PLUS8S_PLUS14S.jpg "PREVIOUS +5 s=$V/t5.0.png" "NEW +5 s=$N/t5.0.png" "PREVIOUS +8 s=$V/t8.0.png" "NEW +8 s=$N/t8.0.png" "NEW +14 s=$N/t14.0.png"
$S $E/sheets/06_closeup_water_round_her_y55-97.jpg --crop 0.55 0.97 --zoom 1.3 "ACCEPTED Tap to Start=$A/t0.png" "PREVIOUS Tap to Start=$V/t0.png" "NEW Tap to Start=$N/t0.png" "PREVIOUS +3 s=$V/t3.0.png" "NEW +3 s=$N/t3.0.png"
ls $E/sheets
