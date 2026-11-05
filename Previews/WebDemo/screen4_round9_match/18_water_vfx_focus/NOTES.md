# Water & VFX, focused pass on `?s3=focus`: running notes (5 November 2026, from about 18:20 UTC)

Worktree branch `worktree-agent-a29b1562d2b9d7e06`, started at `d6e836d`. Files: `WebDemo/src/tunnel_r9_match_water.js` and
`FOCUS.water` in `WebDemo/src/tunnel_r9_focus.js` only. Target: the ORIGINAL APPROVED Screen 4 only.

Capture: `S3=focus TIMES=3.0 DPR=1.5 CANVAS=1 node tools/screen4/liquid_shots.cjs <WebDemo> <out> '<tune>'` (seed 7).
Measures: `scripts/measure.py` (the Art Director's character_water / zones / streaks / bubbles, unchanged, run on any frame).

## Baseline (`before/`, identical to the AD's `focus_final_t3.00_canvas.png`: max pixel difference 0)

`before/measure_before.txt`. Round her (orig / before): white 27.7 / 4.8%, vivid blue 12.9 / 32.4%, lavender 16.9 / 3.6%,
texture 5.47 / 4.53, largest white piece 10247 / 492 px. Floor ahead: L* 83.5 / 71.1, white 26.9 / 6.3%, lavender 3.6 / 12.4%.
Ring streaks: thickness 3.5 / 1.9 px, p90 area 1160 / 126 px. Bubbles within 0.2 W of the centre (Hough param2 40): 10 / 107.

## Lower-left lavender strip (the lead's note, user kit 05)

Hide probe at 3.0 s (`hide_probe.cjs`, DPR 1): the lavender-grey diagonal strip at x 0-0.10, y about 0.68-0.80 stays when
heroSwell, spCurls, spLumps, heroSplash, lqWaterlineBubbles, mwTunnelBubbles, lqFloor or heroCollar is hidden; none of the
Water & VFX objects draws it. Hiding heroWalls changes the whole region (the old drum lining shows), so it is the walls'
(Tunnel & Lighting's). The large pale-lavender disc at the left edge (x 0-0.05, y 0.70-0.77) is `heroBubbles`
(tunnel_r7_hero.js, not a Water & VFX file).

## Item 1: the water round her

Phi debug render (`face.debug: 1`, 10-degree stripes): at the current camera phi 0 lands at x 0.47; her lower body
(x 0.30-0.68) spans phi about +14 to -24; 10 degrees is about 0.08-0.12 W.

Tries:
- t0 (debug, teeth per 9/m, depth 0.1 m): the teeth far too big (flames) and the whole swell top cut away: the crest
  near the top is nearly flat, so d < 0.1 m covers a wide band; her pink showed down to y 0.92.
- t1 (teeth per 16, depth 0.04, fine 0.015; mounds 16 +0.12, -22 +0.04): still cut too low (pink to y 0.919, width at the
  base 0.5 W, pink share 7.1%); a mirrored pattern at the centre (the face's noise used |s|). Next: lift the crest by the
  teeth's depth, signed s for every pattern, mounds at her lower sides.

## Ninth session (from 19:05 UTC; worktree `worktree-agent-ae68b33859f973010`, base `71f7fa7` with Tunnel & Lighting's camera)

The 18:56 work restored from the snapshot (`changes.patch`, applied cleanly). New "before" = `71f7fa7`'s own focus frame
(`before71/`, the committed camera: off [-0.162, 1.126, -3.1], fov 68). All numbers: `scripts/measure.py`, 3.0 s, seed 7.

- s0 (the restored 18:56 work as it was): white 6.0 -> 17.6%, but the side crests' "white cap with holes" made two white
  masses of 2,821 and 4,253 px beside her (a cushion; the AD's limit is about 2,500).
- s1: the side crests' cap redrawn as separate small white pieces (`crest.cap` = cells, share, radius, up range): the masses
  are gone (largest 1,670 px, a bubble's glint at x 0.09 y 0.75, not the water), white 12.6%.
- s2-s3: the swell face's round white dots (they read as a polka-dot print) replaced by broken white crest ARCS (`face.lace`:
  the original's water under her is curving white crest lines over blue). Cells of 9/m drew them thin and sparse; a
  debug render of the face coordinates (`face.debug: 2`) gave about 540 px/m along the crest and 400 px/m down the face (767 W).
- s4 = **step 1a** (committed): arcs from the 2 x 2 nearest cells (no square cut ends), 6 cells/m, radius 0.26-0.48,
  line 0.11-0.19 of the cell, clustered in noise bands.

| round her (`character_water`) | original | before (71f7fa7) | step 1a |
|---|---|---|---|
| white | 27.7% | 6.0% | 13.6% |
| share of white in pieces <= 400 px | 13% | 78% | 47% |
| largest white piece | 10,247 | 1,449 | 1,672 |
| vivid blue | 12.9% | 47.6% | 23.6% |
| lavender | 16.9% | 0.2% | 0.2% |
| texture | 5.47 | 5.03 | 5.46 |
| pink width 0.02 H above her lowest point | 0.20 W | 0.27 W | 0.23 W |
| L* left / right (`char_left`, `char_right`) | 79.3 / 82.6 | 71.9 / 74.8 | 77.7 / 79.7 |

Still open after 1a: the side lumps read as smooth blue pillows (right x 0.78-0.98); white under the AD's 15%; her pink
0.23 W wide at the base (target <= 0.2); the spray reads as vertical white dashes (rain), not round droplets.

### Step 1b: the side lumps out (tunes v1-v10, `frames/step1b_*`)

- v1: the lumps lighter (light cyan to vivid blue) with more white pieces: still pillows.
- v2: the four lumps beside her (phi +-40 to +-54) out: the swell's broken water with crest arcs runs on there, as in the
  original. White 15.2%, L* left / right 78.6 / 80.5 (both in the AD's 78-82), texture 5.55. **Kept (step 1b).**
- v3-v6: the swell's front dip narrowed or deepened (`swellFront` full 0-16, to 30-44, dip 0.1-0.11, lift 0.03-0.035):
  the water rises at her lower sides (a U-shaped waterline, v6) but her lowest visible point rises from y 0.849 to
  0.834-0.843 (the original's 0.859), so she sits deeper; rejected (the user: never sunk).
- v7-v9: small splash crests at her lower sides (phi 9 and -14): pink width at the base 0.18-0.21 W, but on screen they
  are blue blobs stuck on her fur (the visible water edge is below the crest there); rejected.
- v10: rounded domes cut along the crest: no visible change. Her visible base in front is where the water's surface meets
  her body, not the cut, so the cut cannot shape it there; removed.

| round her | original | before (71f7fa7) | 1a | 1b |
|---|---|---|---|---|
| white | 27.7% | 6.0% | 13.6% | 15.2% |
| white in pieces <= 400 px | 13% | 78% | 47% | 41% |
| largest white piece (px) | 10,247 | 1,449 | 1,672 | 1,671 (a bubble's glint) |
| vivid blue | 12.9% | 47.6% | 23.6% | 20.8% |
| lavender | 16.9% | 0.2% | 0.2% | 0.2% |
| texture | 5.47 | 5.03 | 5.46 | 5.55 |
| pink width at the base | 0.20 W | 0.27 W | 0.23 W | 0.25 W |
| L* left / right | 79.3 / 82.6 | 71.9 / 74.8 | 77.7 / 79.7 | 78.6 / 80.5 |

### Step 1c: fine spray, irregular crest arcs (tunes v11-v16, `frames/step1c_*`)

- Hide probe (`heroSplash`, 7% of the zone): the white dashes beside her are the spray. Its "round" droplets are drawn on
  a 2:1 quad (`tunnel_r7_hero_water.js`, SPLASH_VERTEX: `len = max(L, wN)` then `len + wN` tall, `wN` wide), so at
  match's size (1.6-3.6 cm) every droplet is a tall oval and they read as rain. Not my file; within `FOCUS.water`:
  300 droplets at half the size, 90% round: fine white specks (v12).
- v13-v14: the crest arcs denser and smaller (8.5 per m, bands nearly everywhere), a wider rim, more glints.
- v15-v16: each arc's radius wobbles along it and its line tapers toward one end (`lace.wobble`, `lace.taper`), thicker:
  irregular broken crests instead of a row of white commas. **Kept (step 1c).**

| round her | original | before (71f7fa7) | 1b | 1c |
|---|---|---|---|---|
| white | 27.7% | 6.0% | 15.2% | 14.6% |
| white in pieces <= 400 px | 13% | 78% | 41% | 47% |
| largest white piece (px) | 10,247 | 1,449 | 1,671 | 1,388 |
| vivid blue | 12.9% | 47.6% | 20.8% | 22.7% |
| lavender | 16.9% | 0.2% | 0.2% | 0.2% |
| texture | 5.47 | 5.03 | 5.55 | 5.86 |
| pink width at the base | 0.20 W | 0.27 W | 0.25 W | 0.25 W |
| L* left / right | 79.3 / 82.6 | 71.9 / 74.8 | 78.6 / 80.5 | 77.7 / 79.8 |

## Item 2: the floor ahead, behind her (`frames/step2_*`, `crop_floor_ahead_orig_before_step2.png`)

- Hide probe (x .25-.65, y .60-.69): `lqFloor` draws 76% of it, `heroWalls` 12%. Match's floor levers (`deep` 0.5, `trough`
  0.18, `delilac` 1.0) moved L* only 71.8 -> 72.1: the colour there is the walls' derived map continued onto the floor.
- New `focusFloorGLSL` (inside `matchFloor`, the floor's own water only; the swell's lower water, which calls the same
  function, passes fx 0): lilac turned pale blue, the colour lifted toward the original's pale blue, and broken white crest
  streaks along the whirlpool's circles moving with the walls' flow, clustered in bands, with blue dashes between
  (`FOCUS.water.floorFx`). Tunes f2-f6; f6 kept.
- The floor's remaining lavender (about 11%) is NOT the water: with the floor forced fully pale (lift 1.0) it stays in the
  same lane-shaped blobs and none of the bubble or glow objects draws it (hide probe); it matches the brushes' pulsing pink
  hazard warning drawn on the floor after the water (`s4Haz` in `tunnel_r8_liquid.js`: gameplay feedback, not changed).

| floor ahead | original | before (71f7fa7) | step 2 |
|---|---|---|---|
| L* | 83.5 | 71.8 | 79.4 |
| white | 26.9% | 6.9% | 22.1% |
| pale | 35.4% | 28.6% | 43.5% |
| lavender | 3.6% | 10.7% | 10.8% (the hazard glow) |
| vivid | 15.5% | 28.1% | 12.3% |
| median | #aad7f4 | #7eb0e5 | #a7cdf2 |

Round her after step 2 (the floor shows at her sides): white 16.8%, vivid 16.1%, texture 5.41, L* left / right 79.5 / 80.7.
