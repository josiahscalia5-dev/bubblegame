#!/usr/bin/env bash
# The evidence sheets (ORIGINAL scaled uniformly | captures at full 538 x 1076), from the page captures of evidence.sh.
#   bash sheets.sh <worktree>
R="$1"; E=$R/Previews/WebDemo/screen4_round9_match/63_structmatch_A; A=$R/Previews/WebDemo/screen4_round9_match/62_opening_mandate_audit/frames_accepted
S="$HOME/.bubblewash-tools/visual/bin/python $E/scripts/sheet.py"; N=$E/frames_new; mkdir -p $E/sheets; cd $R
$S $E/sheets/01_TAP_TO_START_ORIGINAL_ACCEPTED_NEW.jpg "ACCEPTED Tap to Start=$A/t0.png" "NEW Tap to Start=$N/t0.png"
$S $E/sheets/02_PLUS1S_PLUS2S_ORIGINAL_ACCEPTED_NEW.jpg "ACCEPTED +1 s=$A/t1.0.png" "NEW +1 s=$N/t1.0.png" "ACCEPTED +2 s=$A/t2.0.png" "NEW +2 s=$N/t2.0.png"
$S $E/sheets/03_closeup_water_round_her_y60-95_2x_t0.jpg --crop 0.6 0.95 --zoom 2 "ACCEPTED Tap to Start=$A/t0.png" "NEW Tap to Start=$N/t0.png"
$S $E/sheets/04_closeup_water_round_her_y60-95_2x_plus1s.jpg --crop 0.6 0.95 --zoom 2 "ACCEPTED +1 s=$A/t1.0.png" "NEW +1 s=$N/t1.0.png"
$S $E/sheets/05_closeup_top_washer_band_y12-50_2x_plus1s.jpg --crop 0.12 0.5 --zoom 2 "ACCEPTED +1 s=$A/t1.0.png" "NEW +1 s=$N/t1.0.png"
$S $E/sheets/06_closeup_top_washer_band_y12-50_2x_plus2s.jpg --crop 0.12 0.5 --zoom 2 "ACCEPTED +2 s=$A/t2.0.png" "NEW +2 s=$N/t2.0.png"
$S $E/sheets/07_transition_rim_to_drum_NEW_t0_025_05_075_1.jpg "NEW Tap to Start=$N/t0.png" "NEW +0.25 s=$N/t0.3.png" "NEW +0.5 s=$N/t0.5.png" "NEW +0.75 s=$N/t0.8.png" "NEW +1 s=$N/t1.0.png"
$S $E/sheets/08_plus3s_ORIGINAL_ACCEPTED_NEW.jpg "ACCEPTED +3 s=$A/t3.0.png" "NEW +3 s=$N/t3.0.png"
$S $E/sheets/09_subswitch_nowater_t0_plus1s.jpg "NEW Tap to Start=$N/t0.png" "NEW,nowater Tap to Start=$E/frames_nowater/t0.png" "NEW +1 s=$N/t1.0.png" "NEW,nowater +1 s=$E/frames_nowater/t1.0.png"
$S $E/sheets/10_subswitch_nohousing_plus1s_plus2s.jpg "NEW +1 s=$N/t1.0.png" "NEW,nohousing +1 s=$E/frames_nohousing/t1.0.png" "NEW +2 s=$N/t2.0.png" "NEW,nohousing +2 s=$E/frames_nohousing/t2.0.png"
$S $E/sheets/11_optin_deferred_hero2_tunnel2_props2_hud2_t0.jpg "NEW (default) Tap to Start=$N/t0.png" "NEW + all deferred opt-ins=$E/frames_optin_all/t0.png"
ls $E/sheets
