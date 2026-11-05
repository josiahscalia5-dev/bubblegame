# Round 9, step 7: Water & VFX gate fixes, with the user's checkpoints 01, 02 (as corrected) and 04 (5 November 2026)

- **Who and where:** the Water & VFX specialist, worktree branch `worktree-agent-a76d8d522689c2f66`, from `36c8676` (its
  `WebDemo/` is byte-identical to `af5791d`: the merged Round 9 build `2a6ab30` plus the Art Director's gate). This
  continues the 13:44-14:30 UTC run that was lost with its container: its work was restored from
  `../wip_snapshots_design_agents/water-vfx-engineer_ada634b5/`, measured, and committed first (`9bfd9f7`).
- **Switch:** `?s3=match` only. Files: `WebDemo/src/tunnel_r9_match_water.js` and one gated line pair in
  `WebDemo/src/tunnel_r8_splash.js`. Not touched: `tunnel_r9_match.js`, `matchFloor()`'s `du` / `rw` / `tu` lines, the
  character model.
- **Target:** the ORIGINAL approved Screen 4 only (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
  The user's annotated sheets (`2026-11-05_Screen4_Visual_Evidence_and_Assets/02_...`) were read as comparisons, not targets.
- **Method:** the camera locked by the seeded run (seed 7, 538 x 1076, DPR 1.5, real tap and game time), compared with the
  original at 3.0 s before each change, checked at 2.85 and 3.1 s. Measured with the Art Director's own scripts
  (`scripts/meas.py` runs `bank.py`, `contact.py`, `char.py` and `liquid_shares.py` unchanged). 13 capture iterations, plus 4 short diagnostic runs and the probes.
- **The user's newest instruction (correction, after 14:43):** she sits ON TOP of the water, supported by it and framed by
  foam, not sunk into it and not behind a water wall. This overrides the 14:16 brief's "partly submerged" and checkpoint 02's
  "occluded lower body". I had raised the water in this pass; it is taken back, and the waterline now matches the original's
  (0.835 against 0.836; the merged build's was 0.824, i.e. higher up her body).

## Images

| file | what |
|---|---|
| `original_vs_before_vs_now_3.00s_fullres.png` | ORIGINAL / merged 3.0 s before this pass (`../04_merged/match_t3.00.png`) / match 3.0 s now, all 1536 px tall |
| `original_vs_before_vs_now_2.85s.jpg`, `..._3.10s.jpg` | the same at 2.85 and 3.1 s |
| `match_t3.00.png` (page, HUD on), `match_t3.00_canvas.png` (3D canvas), `match_t2.85.png`, `match_t3.10.png` | the real frames |
| `closeup_01_tunnel_bubbles_and_streaks.jpg`, `closeup_01b_mid_ring_zoom.jpg` | checkpoint 01: original / before / now (canvas) |
| `closeup_02_waterline_character_on_the_water.jpg` | checkpoint 02 (as corrected): original / before / now |
| `closeup_04_foreground_foam_bank.jpg` | checkpoint 04: original / before / now |
| `bubbles_original_by_eye_overlay.jpg` | the original's free bubbles as counted (yellow), with the zone rings |
| `moves/moves_sheet.jpg` (+ frames, `match_moves.json`) | the water reacting to a swerve (3.38 s), a jump (3.85 s) and the landing (4.22 s) |
| `measured.txt`, `pixel_identity_vs_af5791d.txt`, `gameplay_checks_match_s3_func.txt`, `bubble_probe_*.json` | numbers |

## The user's checkpoints (verified / partly / not)

| checkpoint | verdict | evidence |
|---|---|---|
| **01 deep tunnel bubbles** | **partly verified** | Bubbles now originate inside the tunnel at every depth and drift with the swirl, toward the camera and upward: 132 shown at 3.0 s (near 49, mid 57, far 26; small 74, medium 48, large 10), against 8 before (the hero bubbles only, all near). They pass behind the coins, gem and sock (depth-tested; faded only in front of a collectible's face). 140 small white crescents and dashes ride the bands. **Still different:** the original's white flecks are bolder and denser along the rings, and its outlined bubbles are fewer (13 free bubbles by eye); ours lean toward many small clear bubbles round the middle. The big near bubbles are Tunnel & Lighting's `heroBubbles` (`MATCH.hero.bubbles`, placed at the original's big bubbles), unchanged. `closeup_01*.jpg`. |
| **02 waterline (as corrected: she sits on the water)** | **verified on the numbers, partly on the look** | Waterline 0.835 (original 0.836, before 0.824); her left side 0.806 (0.809, before 0.798), her right side 0.856 (0.860, before 0.811); contact strip x .30-.70 y .78-.835: pink 83.6% (85.1, before 71.8), white 2.6% (3.6). The see-through purple wall is gone: under the body (canvas) violet 2.1% (before 57.8%). A broken white foam rim at her base; foam lobes beside and below her. **Still different:** right under her the water's surface reads as a flat pale-lilac plate (pale blue 35.6% under the body against 20.5%), where the original has white froth with lilac bubbles. `closeup_02_*.jpg`. |
| **04 foreground foam** | **partly verified** | The bank is now nearly opaque foam lobes (alpha 0.93 / 0.95) with dense white froth with round holes and aqua-white sides over blue water: bank white 17.5% (20.3), saturated blue 19.6% (14.0), pale 25.5% (26.4), texture hp5 0.101 (0.095); no purple mass behind clear domes. **Still different:** the lobes read as glossy blue domes with white caps rather than the original's lacy white-aqua froth; electric blue in the bank 8.7% (12.2). `closeup_04_*.jpg`. |

Optional assets: the user's bubble sprites and `Starter_Transparent_Bubble_Cluster.glb` were **not used**. The procedural
shader bubble (clear body, rainbow soap-film rim kept at least 1.1 px wide, white glint) matches the original's thin outlined
bubbles and needs no texture.

## The Art Director's fixes (3.0 s; approved / before / now; scripts in `measured.txt`)

| fix | verdict | numbers |
|---|---|---|
| **F2 bank mass** | **partly** | bank white 20.3 / 15.9 / **17.5** (target 18-22: just under); saturated blue 14.0 / 10.7 / **19.6** (≥13, met); electric blue 12.2 / 8.9 / **8.7** (≥11, not met); pale 26.4 / 31.6 / **25.5** (≤27, met); hp5 0.095 / 0.083 / **0.101** (met); white left of the body 25.0 / 14.1 / **26.4** (≥20, met); separate white shapes left of the body 13 / 105 / **48** (≤40: not met, more than halved); lower-third white 16.9 / 8.5 / **10.0** (≤16.9, met); contact strip white 3.6 / 9.5 / **2.6** (≤19, met). |
| **F8 under the body** | **partly** | texture hp5 0.112 / 0.071 / **0.101** (≥0.10, met); white 14.2 / 6.6 / **16.1** (12-16, at the edge); pale blue 20.5 / 34.4 / **35.6** (≤24, not met); violet 36.8 / 40.3 / **1.3** (≥30: **deliberately not met**: the violet there was the fur seen through the see-through water, the purple curtain the user rejected; the original's lilac there is in its foam bubbles, which ours do not yet reproduce); waterline 0.836 / 0.824 / **0.835** (met). Note: on the page frame the "Swipe to steer" panel covers much of this box. |
| moves | **kept** | swerve, jump and landing captured with S3=match (`moves/`), no console errors. |

## The user's brief, my parts (corrected / partly / remaining)

- Water and foam round the character: **corrected** to the newest instruction (sitting on the water, framed by foam at her
  base, no water climbing her body, no see-through purple wall). Remaining: the flat pale plate under her.
- Many more bubbles inside the tunnel at different sizes and depths: **corrected** (132 shown against 8), partly in look (see 01).
- More splash detail, white water streaks, layered water motion: **partly** (200 white crescents and dashes moving with the
  bands; the original's flecks are bolder and more varied).
- Foreground foam bank fuller and more dimensional, turquoise and electric blue between the crests: **partly** (opaque
  froth lobes over blue water; electric blue still short, the froth less lacy than the original).
- First priority, a visibly blue water body with white only an accent: **kept** (lower-third white 10.0% against 16.9%).

## What changed (`tunnel_r9_match_water.js`, all under `MATCH_ON`)

1. **The tunnel bubble field** (`tunnelBubbles`, one instanced draw call): 160 bubbles, each placed at a distance ahead of
   the hero camera drawn with density 1/d² (5.3-34 m; spread evenly along the drum, perspective packed 147 of 248 into the
   middle 0.12 W), looping over its own 4 m, turning with the walls' swirl, drifting toward the camera and rising; rims kept
   at least `rimPx` wide; never drawn under `minPx`; faded only in front of a collectible's face (the probe's screen circle
   and depth). Settings `MATCH_WATER.bubbles`.
2. **White streaks** in the same draw call (`bubbles.flecks`): 200 small crescents and dashes along the bands, oriented by
   the ring's own direction round the axis (world tangent and inward vectors per instance). A first version that worked out
   the direction in screen space round the vanishing point drew nothing in SwiftShader (its quads collapsed); the world
   version is exact and cheaper.
3. **The bank's lobes** (`matchLumpGLSL`, `MATCH_WATER.lobe`): nearly opaque (`alpha` 0.93, `sideAlpha` 0.95), a froth
   colour of its own (`foamSide` pale aqua on the sides, white where it faces up, `foamUp`), denser smaller holes (`cell` 8,
   `holeShare` 0.25), broader caps (`capFoam`, `capFrom`, `frontFoam`), deeper aqua-blue bodies, lilac only as an opaque
   front tint.
4. **The water round her** (`matchSwellGLSL`, `MATCH_WATER.look`, `swell.mounds`, `splash.lumps`, `splash.curls`): the
   swell's front opaque (`clear` 0.9), a broken white foam rim at her base (`crestFront` 0.5, new `crestW`), and the mounds,
   lumps and curl at her left front, front, right front and right side lowered so she sits on the water as in the original.
5. Restored WIP (from the lost run): fewer flecks and droplets, larger lobes with bubbly caps, `lumpMin` / `lumpBump` in
   `tunnel_r8_splash.js` (gated), the faint spray sheets hidden.

## Checks

- **Pixel identity** (`pixel_identity_vs_af5791d.txt`): the normal game, `?s3=splash` and `?s3=liquid`, raw canvas at Tap to
  Start and 2.85 s: 0 differing pixels against the baseline bundle `ba0c7f6c...` (all six pairs).
- **Gameplay** (`gameplay_checks_match_s3_func.txt`, S3=match): lanes 1 → 0 → 2, the jump (in the air), 12 coins and 2 socks
  collected, keyboard start, no console errors.
- **Cost:** 207 / 209 / 202 draw calls and 1.34 / 1.42 / 1.31 M triangles at 2.85 / 3.0 / 3.1 s (merged: 209, 1.42 M at 3.0 s).
- No new textures, no random numbers outside `match` (private `mulberryMw` only), no new render passes.

## What still differs from the original (water and VFX only)

1. The tunnel's white flecks: the original's are bolder, denser and more varied (dots, rings, crescents) along every band.
2. The bank: glossy blue domes with white caps, where the original is a lacy white-aqua froth with lilac and blue bubbles.
3. Right under her: a flat pale-lilac surface instead of white froth with lilac bubbles.
4. Separate white shapes left of the body 48 (original 13); electric blue in the bank 8.7% (12.2%).
5. For the lead: the big near bubbles (`heroBubbles`, Tunnel & Lighting's `MATCH.hero.bubbles`) are the ones the user calls
   "large near-camera bubbles"; the biggest is about 0.1 W against the original's 0.07 W.

## Scripts (`scripts/`)

`meas.py` (all the targets above), `bubble_probe.cjs` (the game's shown bubbles and streaks by zone, size and depth),
`bubbles_eye.py` (the original's bubbles by eye), `bubbles.py` (an automatic ring detector: not reliable on the painted
original, kept for the record), `specks.py` (small white shapes by zone), `sbs.py` and `sheets.py` (the comparison images),
`pixcmp.py` (the pixel identity table).
