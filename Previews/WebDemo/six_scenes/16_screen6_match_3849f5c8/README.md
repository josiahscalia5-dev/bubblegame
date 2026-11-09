# Screen 6 measured visual match (session 3849f5c8, from 9 November 2026 ~17:50 UTC). NOTHING here is approved.

The user's mandate of ~17:45 UTC: a deliberate, MEASURED match of Screen 6, then Screen 5.
- Target: ONLY `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png` (864x1536).
- Game: u 206, the same camera (`S56.cam`: 3.0 m behind him, 0.58 m up, fov 66 vertical), 864x1536 (432x768 CSS px, DPR 2), headless Chromium, software WebGL.

## The measuring tool (the same for every step)
`$BW_PY WebDemo/tools/match6/match6.py <game frame> <out prefix> "" "<label>"` writes `<out>_sheet.png` (approved | game | 50/50 overlay | colour-difference heatmap)
and `<out>_zones.json`. What it measures:
- The UI of BOTH images is masked: top bar, logo, plaque, caption and Start bar of the approved image; HUD, mission, hint and power buttons of the game. 54.4 % of the frame is compared.
- **dE:** the mean CIE76 colour difference (CIELAB) per zone, after a 3 px blur of both images. 0 = identical, ~2.3 = just noticeable.
- **Class shares:** the % of pixels per colour class (pink, gold, violet glow, cobalt, azure, turquoise, pale, lavender wall; the art director's HSV thresholds).
  **gap** = half the L1 distance between the approved and game share vectors. 0 = the same mix of colours.
- **score** = dE x gap / 100 x zone area %. It only ranks the mismatches; it is NOT a similarity percentage.
- **Hero:** the bounding box of the pink fur.
- Self-check: the approved image against itself = 0.0.

## Step 0: the current game (bundle before this session's changes; `00_current/`)
Mean dE 56.8 over the compared area. Hero bbox: approved x 0.260-0.736, y 0.600-0.758; game x 0.272-0.738, y **0.508**-0.742 (the same width, but 1.5x the visible height).

| Zone | area % | dE | gap | score | Approved: largest classes | Game: largest classes |
|---|---|---|---|---|---|---|
| mid water (coins, enemies) | 13.8 | 67.0 | 34.7 | 322 | azure 27, pink 22, gold 16 | pink 54 (his body too tall), gold 13 |
| upper-right machinery + gear | 5.6 | 88.2 | 53.5 | 263 | cobalt 20 (gear), pink 15, gold 14 | gold 65 (two oversized coins), violet 22 |
| left brush | 7.6 | 60.8 | 42.2 | 194 | pink 26, azure 24 (blue bristles), gold 8 | violet 29 (wall), cobalt 11 |
| hero | 9.6 | 46.5 | 36.1 | 161 | pink 45, azure 18 | pink 80 |
| lower banks | 3.1 | 91.6 | 29.3 | 83 | pink 17, gold 17, azure 10, cobalt 10 | gold 44 (coins) |
| upper-left machinery | 3.5 | 58.8 | 37.2 | 77 | pink 22, violet glow 12, gold 9 | violet 51 (bare wall) |
| tunnel centre | 5.4 | 42.0 | 33.2 | 75 | pink 21, violet 13, pale 9 | violet 48 |
| right brush | 4.7 | 50.9 | 31.3 | 75 | pink 26, azure 23, pale 13 | violet 16, cobalt 15 |
| foreground water | 6.7 | 32.1 | 13.6 | 29 | azure 38, pink 25, pale 15, turquoise 8 | azure 30, pink 23, pale 13, cobalt 7 |

**Diagnosis:**
- **Camera:** his width, horizontal position and the vanishing point already match within ~0.01-0.015 of the frame. Measured by the art director, session 47f75e22, and confirmed here: hero x 0.272-0.738 against 0.260-0.736.
- What differs is what fills the frame:
  1. **Coins:** the coins are drawn ~2x too big and fill the upper right, where the gear and the glowing tank belong (gold 65 % there).
  2. **Hero:** he shows 1.5x too much height (top at y 0.508, approved 0.600), so his pink fills the mid water.
  3. **Brushes:** no brushes at either edge.
  4. **Machinery:** the upper banks are bare violet wall instead of pink-gold machinery with glowing tanks.
  5. **Water:** violet-cobalt and flat instead of azure-turquoise with thin crests.

## Who fixes what (each with a real u 206 capture at the same camera)
| Mismatch | Owner | Switch |
|---|---|---|
| Coins ~2x too big | coordinator | `coin6` (`play_tripo3.js`: drawn diameter 0.6 -> 0.32 m; pickup radius unchanged) |
| Hero too tall; water hue, relief, crests; orange crown pipes | water specialist (lane s56) | `water6` |
| Left / right brushes | brush specialist (lane brush6) | `brush6` |
| Machinery height and density, glowing tanks, control box, star drum, gold rails, the gear upper right, the red tint at u 206 | architecture specialist (lane arch56) | `arch56` |
| Verification of every step | game-art-director (read-only) + this tool | |

The integrated candidate is `?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,coin6,water6,brush6,arch56`. The plain launch is unchanged until the user approves.
