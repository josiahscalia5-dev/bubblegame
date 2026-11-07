# Screen 4 Checkpoint A: `?s3=intunnel,structmatch` (7 November 2026, nineteenth session, screen4-water-motion-engineer)

Scope as NARROWED by the user at about 14:00 UTC (`Design/ReferencePacks/2026-11-07_CheckpointA_Brief_from_user/02_...` and
its README): the accepted Tap to Start is the base; the default flag changes ONLY (1) the washer's metal housing at the top,
kept while moving, (2) the opening water round her, (3) her swim through the water. Authority: the ORIGINAL only. The parts
built before the narrowing are kept as opt-in switches, OFF by default: `,hero2` (crown reshape, fur colour, Screen 3's
stretch off), `,tunnel2` (walls' grade and warm core, thicker rim), `,props2` (staged coins, gem, sock), `,hud2` (corner
cards). Comparison switches: `,nowater`, `,nohousing`. Bundle **2c9edf60** (`WebDemo/game.bundle.js`); `index.html` is
byte-identical to the committed one.

## What changed and why (code: `WebDemo/src/tunnel_s4_struct.js`; flags in `tunnel_s4_bt.js` `STRUCT_ON`, `STRUCT_PARTS`)
- **1. Washer housing** (`HOUSING`, `structHousingGLSL`; hook `tunnel_r8_liquid.js` wallFragment). Cause (62_ row 1): the rim
  `r6Porthole` is one fixed object; once the camera passes it the top band is the tube's ceiling (plain blue). Fix with
  existing geometry and material only (no carried stage): the drum's upper wall about 1.2-10 m ahead of the camera is drawn
  as the washer drum's brushed metal (lavender near the camera, periwinkle and deep violet toward a gold-lavender lip,
  silver and pink sheens, panel seams and perforations FIXED TO THE DRUM, so they stream past). It fades in only after the
  tap, as the camera nears the rim (none at Tap to Start), so the rim hands over to the drum's metal (sheet 07).
- **2-3. Water round her** (`STRUCT.water`, `buildStructWater`; hooks `tunnel_r7_hero_water.js`). Cause (61_ row 6):
  `heroSwell` is one pad in her frame. Under the flag it is hidden (its foam followers with it) and replaced by ONE opaque
  height-field surface of separate rounded glass mounds whose places are fixed in the WATER (the water flows forward at
  0.6 of her travel, so the mounds stream back past her at 0.4 of her speed); each mound rises as it nears her and sinks
  away, so her lower body is in the water and her dome stays clear. Staged at the start as the ORIGINAL (lavender glass
  mounds at her lower left and under her centre, azure banks either side). Colours are the ORIGINAL's foreground (azure
  bodies, darker cores, lavender-blue glass), written through the walls' inverse grade (`undisplayGLSL`, now exported).
  The gap between her legs is closed by a fur-shaded fill (`structFill`, drawn only), since the swell no longer hides it.
  Two attempts: dome instances (read as faceted ice rocks, replaced), then the height field (kept, three look passes; a
  white-crest pass made "white clouds" and was reverted).

## Evidence (`sheets/`; page captures with the HUD, `s3_shot.cjs`, seed 7, 538 x 1076; ORIGINAL scaled uniformly)
01 Tap to Start ORIGINAL | ACCEPTED | NEW; 02 +1 s and +2 s; 03-04 water round her y .60-.95 at 2x (start, +1 s);
05-06 top washer band y .12-.50 at 2x (+1 s, +2 s); 07 NEW at 0 / 0.25 / 0.5 / 0.75 / 1 s (rim to drum); 08 +3 s;
09 `,nowater`; 10 `,nohousing`; 11 every deferred opt-in. Frames: `frames_new/`, `frames_nowater/`, `frames_nohousing/`,
`frames_optin_all/`. Scripts: `scripts/` (`evidence.sh`, `identity_all.sh`, `gameplay.sh`, `sheets.sh`, `measure_A.py`).

## Measured (`measurements_A.txt`, `scripts/measure_A.py`; definitions as 62_ / 61_)
| measure | ORIGINAL | ACCEPTED t0 / +1 / +2 / +3 s | NEW t0 / +1 / +2 / +3 s |
|---|---|---|---|
| lavender housing share, y .16-.36 (page) | 21.3 % | 16.3 / 1.7 / 1.3 / 0.7 | 16.3 / 35.9 / 32.1 / 49.7 |
| her pink box lower edge (where the water cuts her) | .86 | .85 / .87 / .86 / .86 | .87 / .88 / .88 / .87 |
| water y .78-.92 at start (canvas): azure / peri-violet / white %, blue hue | 27 / 9.4 / 23, 213.8 | 64.5 / 0.5 / 15.9, 207.2 | 41.9 / 7.7 / 17.3, 214.9 |
| water y .80-.84 at start (canvas): white / peri-violet % | 22.8 / 12.7 | 19.9 / 0.3 | 6.9 / 1.3 |

## Tests
- Identity (`proofs/identity.txt`): 0 pixels differ, committed 38466b67 against 2c9edf60, for `intunnel` (start, +1, +2 s),
  `intunnel,noswim2`, `intunnel,blend`, `intunnel,water9` (+1 s), normal game (start, +1 s). Accepted Tap to Start PAGE
  capture with the HUD: `proofs/identity_page_t0.txt` (an earlier build with the hud2 CSS in `page.html` differed by 4029
  px of HUD-icon rasterization; the CSS is now injected only under `,hud2`).
- `s3_func` / `r2_func` (VW=135 VH=270): r2_func identical; s3_func differs only in the switch list, the `structWater`
  report and draw calls / triangles (209 -> 207, 1,420,197 -> 1,418,525). Motion trace (swipe, swipe, jump): 0 differences
  in 152 frames x 17 gameplay and camera fields. No console errors (every capture, including all opt-ins).

## Judgement (candid)
- **Housing (1): substantial and obvious.** While moving, the top stays washer metal instead of plain blue. Differs: more
  lavender than the ORIGINAL (32-50 % against 21 %), no gold-peach rim arc while moving, its lip is a fade at a fixed
  distance from the camera, and the perforated drum ceiling is an interpretation, not the original's housing.
- **Water (2-3): mixed, NOT obviously closer (stop rule).** Gained: separate rounded dimensional forms, lavender glass at her
  lower left, the original's blue hue, water that streams past her (not pinned), her base in the water. Lost: the accepted's
  white frothy surf; the mounds read smooth, close to pillows or balloons. Blocker: the ORIGINAL's painted froth (dense white
  foam lace, bubbles, broken spray over the mounds) is not reached by procedural shading; next step is art: a painted /
  reference-derived foam and surf texture set mapped on these water-space mounds (costed separately), not more tuning.
