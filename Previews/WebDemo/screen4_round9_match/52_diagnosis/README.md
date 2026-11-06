# Screen 4: the engineering diagnosis of the pale travelling mound and of her swimming (6 November 2026, sixteenth session)

The user's brief (about 21:20 UTC): stop the cosmetic water passes. Find, with debug-only layer toggles on identical
frames, what makes the pale water mound that travels with the pink character. Find whether she really bobs, leans, makes
movement-responsive ripples and meets the water in jumps and landings. Then give one diagnosis, one plan and pass/fail
criteria, and build ONE isolated candidate covering both VISUAL MATCHING and NATURAL SWIMMING, with the accepted build
untouched.

Measured on the current R9 (`?s3=intunnel,water9`, bundle `7402397a`), seed 7, no steering, at the three moments used
since R4: **start** (Tap to Start, game clock 3.517 s), **+1 s** and **+2 s** after the tap. The ORIGINAL approved
Screen 4 (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`) is the only
target. Nothing in the game was changed for this diagnosis. The tools only read the live objects or hide them for one
render and put them back.

## 1. The layer isolation: what makes the pale travelling mound

`tools/screen4/layer_diag.cjs` renders the SAME frame again with one layer (or one post pass) disabled; time is not
advanced between renders, and the repeated base renders differ by 0 pixels (deterministic). Ablations:
`scripts/ablations.json` (a new debug-only `hideU` matcher hides a layer by a uniform name: the unnamed drum water sheet
has `uRipples`, the spray particles `uMaxPx`). Frames: `ablation/R9_<moment>/abl_*.png`. Sheets of the lower 45 % of
the frame: `report/ablation_R9_start_sheet.jpg`, `_T1.0_sheet.jpg`, `_T2.0_sheet.jpg`. Full-resolution lower frame:
`report/T1.0_lower_original_R9_noswell_nodressing.jpg`.

"Changed" is the share of the band's pixels whose colour moves by more than 24 levels when that layer is hidden
(`scripts/ablation_report.py`; band = y 0.80-0.97 of the frame, her pink, the gold and the HUD corners left out, the
classes of `44_water_material/diag/band.py`).

| layer disabled | band pixels changed: start | +1 s | +2 s |
|---|---|---|---|
| **heroSwell** (the mound round her; since water2 its face carries the original's foreground water as a picture) | **75.7 %** | **73.0 %** | **74.5 %** |
| the foam bank (spLumps, spCurls, lqWaterlineBubbles) | 8.6 % | 6.7 % | 7.0 % |
| the spray particles (game.js `fx`) | 0.1 % | 5.4 % | 5.7 % |
| the overlays (r3Swirl, heroGlow, the opening's look) | 12.0 % | 0.0 % | 0.0 % |
| the floor water (the drum's water sheet and lqFloor) | 4.5 % | 1.1 % | 0.7 % |
| the splash droplets (heroSplash) | 0.6 % | 0.8 % | 1.0 % |
| bloom | 0.3 % | 0.0 % | 0.0 % |
| colour grade | 0.0 % | 0.0 % | 0.0 % |
| tone mapping (the whole colour pipeline, every pixel moves) | 35.6 % | 47.7 % | 46.2 % |

**Result: the pale travelling mound is `heroSwell`, and nothing else comes close.** Bloom, grade, floor, foam bank,
particles and overlays are each under 13 % at the start and under 8 % while moving. Tone mapping moves every pixel
evenly; it is the global colour pipeline, not the mound.

What `heroSwell` is (code):
- **A rigid pad locked to her.** One mesh, a horseshoe of water whose crest runs 0.95 m out to each side of her and
  0.55 m toward the camera, with a 0.34 m outer face (`tunnel_r7_hero_water.js` `HERO_WATER.swell`, `swellGeometry`).
  Her body radius is 0.40 m (`world.js` `BODY_R`), so the pad is about 2.4 times her width. It is built in HER frame and
  every frame is moved to her (`S.C` = her x with a 0.07 s lag, her z, the water's base height; `buildHeroWater`'s
  updater).
- **Its screen coverage:** drawn alone (`abl_13_soloSwell`) it covers 24.3 / 19.2 / 23.8 % of the frame (start / +1 s /
  +2 s) and 100 % of the width at 0.90 H. The whole bottom fifth of the screen is an object that travels with her.
- **Its face is a still picture.** Since `water2` the face shows the original's foreground water as a texture
  (`tunnel_s4_water2.js`), projected through the camera matrix captured ONCE at the start view (`uBwRef`) and pinned
  to her frame. Its only animation is a distortion of 0.004 texture units, under one pixel. So the white-lavender
  froth under her is a picture that moves with her and never flows past her. R9 recolours the swell with the tunnel's
  water (`mwFloor`) outside a band under her, but the mound and the pinned band stay.
- **It cuts her silhouette flat.** With heroSwell hidden she is a round dome with her side ears, much like the original
  (`abl_01_noSwell`). Her visible silhouette (`scripts/pink_silhouette.py`, px of the 767 x 1536 frame):

| frame | top | bottom | width at 25 / 50 / 75 % of her visible height |
|---|---|---|---|
| ORIGINAL | 1072 | 1330 | 245 / 329 / **220** (the bottom narrows into the water) |
| R9 start | 1054 | 1309 | 209 / 358 / **254** (cut flat by the mound's straight crest; wider at the bottom) |
| R9 +1 s | 1096 | 1344 | 188 / 345 / 185 |
| R9 +2 s | 1072 | 1332 | 195 / 353 / **296** |
| R9 +1 s, heroSwell hidden | 1096 | 1487 | 283 / 319 / 335 (her whole model: 130 px of her lower body are behind the mound) |

The bounding box is already close to the original's. The difference is the bottom outline: the original's waterline
rounds her bottom corners; the mound's crest slices straight across her.

**The colour totals are NOT what makes it look pale.** In the band at her base R9 is *bluer* than the original: pale
(icy + white) 34.2 / 40.2 / 41.2 % against the original's 46.2 %, saturated blue 41.2 / 36.1 / 35.6 % against 19.6 %
(`report/ablation_R9_*.md`). What reads as "pale and cloudy" is spatial:
- the pinned picture's soft white-lavender froth band directly under her;
- the large smooth face of the mound spread over the whole bottom of the screen;
- no crisp structure (deep troughs, lit crests) that moves.

This is why every earlier pass that tuned colour shares on the same mound failed by eye.

## 2. The motion investigation: does she swim?

`tools/screen4/motion_trace.cjs` (new, diagnostic only) runs the real game frame by frame (1/30 s), with the gestures
through the game's own handlers (swipe left at +1.0 s, right at +1.9 s, jump at +2.8 s, the 51_swim clip's timing),
and records her pose, the camera, her screen position, the water under her and heroSwell's frame and uniforms. Data:
`motion/trace_R9_swipejump.json`.

The mechanics EXIST in the code (`game.js` `updateMascot`, lines 970-1072) and run:

| mechanic | in the code | measured |
|---|---|---|
| bobbing | `bob = sin(t * 1.7 * 2 pi) * 0.05` on her ride height, plus the water's own waves (`W.surface`) | her centre 0.29-0.39 m above the water (the 0.34 float, plus or minus the 5 cm bob at 1.7 Hz); the waves move her +/-15 cm; on screen her centre moves about 100 px up and down |
| leaning into a lane change | `lean = clamp(-xv * 0.22, +/-0.45 rad)` | roll peaks -24.1 deg (swipe left), +19.2 deg (swipe right), back to 0 within about 0.4 s |
| yaw toward the move | `yaw = clamp(xv * 0.1, +/-0.3)` | present |
| jump | a full forward somersault in 0.62 s (`flip`) | flip 0 to 329 deg in 0.57 s; 1.0 m above the water |
| landing | squash (`sqV`), a burst of 34 + 6 spray droplets, a ripple | squash 0.83-0.86 for about 0.2 s |
| the mound answers her | piles up on the side she swerves to (`swerve 0.05` per m/s, clamped 30 %), far ends drag, slumps in the air (`air 0.55`), thrown up and out on landing (`land 0.12`) | uLat to +/-1.9, uAir to 1.0 in the air, uLand 0.87 on landing |
| movement-responsive ripples | `addRipple` on lane changes, jumps, landings, every 0.45 s while running, into `uRipples`; the floor (`lqFloor`, `tunnel_r8_liquid.js` `lqWake`) has a V wake behind her, a ring round her, landing rings and the ripples | the wake, ring and ripples lie inside the mound's footprint (the mound covers the bottom fifth of the screen, all of its width), so they are not visible |

So she is not missing motion. What is missing is **water that moves relative to her.** Dense optical flow (OpenCV
Farneback) between consecutive frames of the R7 and R9 clips, straight run 2.1-2.95 s (`scripts/flow_metric.py`; px/s
of a 1536-px-tall frame, relative to her own fur's motion). STREAMING is the time-mean vector, water that flows past
her; OSCILLATION is the wobble about it:

| clip | contact strip: streaming / oscillation | beside her | below her |
|---|---|---|---|
| R7 | 47 / 154 | 45 / 154 | 118 / 203 |
| R9 | 56 / 153 | 41 / 162 | 174 / 205 |

At her contact and beside her, the water's motion relative to her is about three times more wobble than flow: it rides
with her and jiggles as she bobs (her waterline moves only about 33 px against the mound). Meanwhile the walls and the
far floor stream past at her 7.2 m/s. That is the "riding a white foam carpet" impression, measured.

Jump and landing in the same terms:
- **In the jump** the mound slumps to 45 % and the floor's blue channel shows under her (the user's 0:18.65).
- **On landing** the whole pad springs back up round her at once (`uLand`), so the "wide white-blue patch" reappears
  behind her lower body (0:19.80).
- No wake or ring is visible after it, because the pad covers it.

## 3. The diagnosis, in one paragraph

The pale water that travels with her is ONE object: `heroSwell`, a 1.9 m wide horseshoe mound built in her own frame and
moved with her every frame, covering the bottom fifth of the screen. Since water2 its face shows a still picture of the
original's foam, pinned to her. Because it moves with her, the water touching her never flows past her. Because it is
so big, it hides the floor's existing V wake, ring and ripples. Because its crest is a straight line, it cuts her round
silhouette flat. Her bob, lean, somersault and squash are real, but against a pad that moves with her they read as a
toy riding a cushion, not a swimmer. Bloom, grade, foam, particles and floor are minor (each under 13 % of the band).

## 4. The plan: one isolated candidate, `?s3=intunnel,swim`

**One change of technique, not another colour pass:** the water touching her becomes part of the moving water, not a
pad carried with her. All of it is gated on a new `SWIM_ON` flag; `?s3=intunnel` (the accepted build), R7-R9, every
older switch and the normal game stay byte-identical. It sits on the accepted `intunnel`, without water2-9's pinned
picture (the diagnosed cause), keeping only R7's small-droplet cap.

Visual matching:
1. **The mound becomes a tight contact collar** (`HERO_WATER.swell` / `MATCH_WATER.swell` shape under SWIM_ON, the same
   mesh and draw call; `tunnel_r7_hero_water.js`, `tunnel_r9_match_water.js`):
   - the crest ellipse about 0.46 m sideways and 0.40 m toward the camera instead of 0.95 / 0.55;
   - a short 0.16 m outer face instead of 0.34;
   - its crest heights solved through the start camera so her waterline follows the ORIGINAL's own outline: rounded at
     her lower sides, where the water climbs her (irregular rounded swells); level under her; sinking into the floor
     beyond her body;
   - the bottom fifth of the screen becomes the tunnel's own floor water again.
2. **The collar shaded as the same flowing water** (`tunnel_s4_swim.js`, injected where water2's face code was):
   - the tunnel floor's own animated water (`mwFloor`, so it continues the floor without a seam and streams with it);
   - shaded by the collar's real shape: deep cobalt where the surface turns away, turquoise on the lit crests, crisp
     blue-white glints;
   - a thin broken white lip only where it touches her fur, small clear bubbles;
   - no picture, no lavender froth band.
3. **The floor's existing wake made visible and blue** (`lqFloor`, `tunnel_r8_liquid.js`, colour only): the V arms, the
   ring round her, the landing rings and the game's ripples get turquoise-lit crests and deeper cobalt troughs, with a
   few small white flecks within about 0.8 m of her. It fades over about 2.5 m behind her, so it blends into the
   surrounding water.

Natural swimming (visual only: her gameplay state `x`, `yAbs`, `air`, lanes, jumps and collisions untouched):

4. **A swim rhythm on her model** (`game.js` `updateMascot`, an offset on her `squash` group): a calmer 1.2 Hz bob of
   +/-3.5 cm replaces the visible 1.7 Hz +/-5 cm (the game's own bob stays in her state; only the drawing changes),
   with a +/-3 deg pitch rock and +/-2 deg side sway in step with it. The existing lean, yaw, somersault and squash stay.
5. **The collar stays on the water, not on her**: its base follows the water surface under her, not her bob, so her
   waterline visibly rises and falls on her body.
   - **When she swerves:** the side she moves toward piles up more (0.05 -> 0.14 per m/s) and the far side drops; the
     collar trails her by 0.12 s, so where she was shows open water.
   - **In the air:** it flattens fully (the water closes).
   - **On landing:** it is thrown up and out, then settles in about 0.4 s.
6. **Spray:** R7's 12 px cap on the droplets near the camera, and the kind-0 droplets tinted blue-white (colour only;
   emitters, counts and the seeded random numbers untouched).

## 5. Pass / fail criteria (each measured on the candidate and on R9, same seed and moments)

Visual, against the ORIGINAL:
- **V1 no travelling pad:** the collar drawn alone covers at most 6 % of the frame (R9 19-24 %) and no more than 45 %
  of the width at 0.90 H (R9 100 %).
- **V2 her silhouette:**
  - her width at 75 % of her visible height within 15 % of the original's 220 px at all three moments (R9: 254 / 185
    / 296);
  - her top and bottom rows within 30 px of the original's 1072 / 1330.
- **V3 colour, not paler than the original:** in the band at her base, white at most 19 % and pale (icy + white) at
  most 46 %; saturated + mid blue at least the original's 31 %.
- **V4 judged by eye** on the ORIGINAL | R9 | candidate sheets at the start, +1 s and +2 s: "substantially closer"
  or not, said plainly. The numbers do not decide it.
- **V5 untouched:** the tunnel, collectibles and HUD. Above 0.60 H the candidate differs from R9 only where the water
  or her reflections reach.

Swimming:
- **M1 water flows past her:** streaming at the contact strip and beside her at least 100 px/s, and larger than the
  oscillation (R9: 41-56 against 153-162).
- **M2 bob against the water:** the distance from her centre to the collar's crest in front of her varies by at least
  5 cm peak to peak at a 1.0-1.4 Hz rhythm while running straight.
- **M3 steering:**
  - during each lane change her roll peaks between 12 and 26 deg;
  - the collar's crest on the side she moves to stands at least 20 % higher than on the other side;
  - 0.3 s after the swerve, the water where she was shows no collar (open floor water).
- **M4 wake:** a V wake visible behind her (below her on screen) while running: at least 10 % of the zone below her
  changes when the wake colouring is disabled for one render.
- **M5 jump and landing:**
  - in the air no pad under her;
  - on landing a ring and splash that settle within 0.5 s;
  - 0.4 s after landing, white in the band at most the original's 18.6 %.

Gameplay (must all hold):
- **G1:** the motion trace's x, yAbs, lane, air, speed and hearts identical frame by frame to the accepted build, for
  the same gestures.
- **G2:** `tools/screen3/s3_func.cjs` and `r2_func.cjs` give the same results as the accepted build.
- **G3:** `?s3=intunnel`, R9 and the normal game: 0 pixels changed on the new bundle.
- **G4:** no console errors; draw calls not above R9's.

## 6. Second pass (about 22:20 UTC): the whole frame, the moving tunnel, and runtime inspection

The user asked for the whole frame and for browser debugging tools. Three findings beyond section 1.

**(a) The tunnel's water washes pale only while moving.**
- **The cause:** `r3Swirl`, Round 3's cyan-white swirl overlay (`tunnel_r3.js:263-290`; `ROUND3.swirl` line 24: strength
  1.3, white 1.0; blending One / OneMinusSrcAlpha).
- **Why it is visible:** Round 4 hides it once at build (`tunnel_r4.js:65`, "behind the new lining"). But its own
  updater (`tunnel_r3.js:286`) sets `visible = k > 0` every frame, with `k` rising from 0 to 1 as she travels 3.0-4.3 m
  along the path. So it is off in the start frame (at 1.59 m) and on in every moving one. That is why all the
  start-frame comparisons missed it.
- **Measured:** tunnel zone (x 0.32-0.68, y 0.22-0.52; `scripts/zone_water.py`, `report/zone_water_T1.0.md`, extra
  ablations `ablation/R9w_T1.0/`):

| | pale | white | lavender | cobalt | turquoise | mean saturation |
|---|---|---|---|---|---|---|
| ORIGINAL | 8.3 % | 5.8 % | 28.5 % | 14.6 % | 11.4 % | 0.55 |
| R9 start | 8.0 | 7.8 | 29.4 | 6.4 | 8.3 | 0.50 |
| R9 +1 s | 23.0 | 14.0 | 5.0 | 10.8 | 5.5 | 0.46 |
| R9 +1 s, r3Swirl hidden | 11.6 | 12.6 | 6.7 | 13.9 | 8.7 | 0.54 |
| R9 +1 s, bloom + grade off | 21.8 | 14.9 | 4.9 | 14.4 | 5.8 | 0.47 |
| R9 +1 s, the walls alone | 5.5 | 4.1 | 7.1 | 16.1 | 11.2 | 0.61 |

- **Confirmed live:** with the DevTools tools (`cdp/live_R9_T1.0_as_is.png` against `cdp/live_R9_T1.0_r3Swirl_hidden.png`).
- **The lavender rings:** the moving tunnel also loses the original's lavender (5 % against 28.5), the walls' own
  material included.

**(b) The floor's white "paper-scrap" dashes** are `focusFloorGLSL` (`tunnel_r9_match_water.js:329-355`, settings
`MATCH_WATER.floorFx` in `tunnel_r9_focus.js:278-279`):
- rows of tapered white streaks, `#f6fbff` at 0.95, in 95 % of their band cells;
- the same block turns the painted map's lilac pale blue on the floor (`delilac 1.0`);
- the floor drawn alone shows them on blue water (`ablation/R9w_T1.0/abl_31_soloFloor.png`).

`mwTunnelBubbles` holds 40 bubbles and no streaks.

**(c) The foreground is not short of cobalt.**
- **The colours:** in the full-width foreground (y 0.72-0.97) the ORIGINAL is pale 30.9 %, white 22.3, lavender 11.0
  and cobalt 2.9. R9 has 19.4 % cobalt.
- **The shapes:** the original's foreground is uneven rounded heaps across the whole width, with glassy periwinkle
  bodies, darker cores, white rims and droplets. R9 has a pad carrying a still picture. So the foreground difference is
  shape and motion, not colour totals.

**Runtime inspection through the Chrome DevTools Protocol** (`tools/screen4/cdp_inspect.cjs`, `cdp/R9_scene.json`):
- heroSwell's start-view matrix `uBwRef` is identical at +0, +1 and +2 s while she travels 14 m (the picture is pinned
  to her);
- bloom strength 0.16, radius 0.42, threshold 1.0; Neutral tone mapping, exposure 1.05;
- no console errors.

After the `parallax-threejs` plugin was enabled, its `chrome-devtools-mcp` and `threejs-devtools-mcp` bridge opened the
same R9 moment (clock 4.517 s, z 8.784). The compiled water shaders are dumped in `cdp/R9_T1.0_water_shaders.json`.

**The rejected candidate `?s3=intunnel,swim`** (`../53_swim/`), the art director's verdict:
- "not closer": a tight collar reads as "a frilled glass bowl on a pile of blue pillows", mid azure, not cobalt;
- it lost the full-width spread;
- it uncovered more of the floor's paper-scrap dashes.

Its motion parts measured well: the swim bob, the collar's base on the water, gameplay state identical.

## Files

- `scripts/ablations.json`, `scripts/run_ablation.sh`, `scripts/ablation_report.py`, `scripts/pink_silhouette.py`,
  `scripts/flow_metric.py`; `tools/screen4/motion_trace.cjs` (new); `tools/screen4/layer_diag.cjs` (`hideU` added,
  diagnostic only).
- `ablation/R9_start|T1.0|T2.0/` (the frames), `report/` (tables and sheets), `motion/` (traces).
