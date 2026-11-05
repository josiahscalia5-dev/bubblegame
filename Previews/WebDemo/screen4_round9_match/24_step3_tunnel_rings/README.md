# Step 3 of the user's fidelity plan: the tunnel rings of `?s3=focus` (5 November 2026, about 23:40 UTC)

- **Authority:** the ORIGINAL approved Screen 4 only.
- **Scope:** `?s3=focus` only. `match`, the normal game and every older switch are unchanged (proof below).
- **Built on:** step 2 (`a715434`).

## The cause found

- The walls' maps came from the user's Reference 5 (a different vortex picture) graded to the original's colours, and
  procedural ribbons were drawn over them at their own spacing. So the rings could not sit at the original's radii: the
  audit measured the wall pattern's correlation at about 0.
- The walls also placed their rings round two different centres:
  - the inner part round the point placed to match the original (`MATCH.centre.offset` +0.028 W);
  - the outer part round the tunnel's own vanishing point.
  The ring field was therefore off-centre by about 0.03 W on the left and right.

## What changed (files and values)

- **New: `WebDemo/tools/screen4/derive_ring_map.py`.** The ORIGINAL's own rings as a map, `WebDemo/textures/screen4/tunnel_rings_original.png`
  (512 x 1024, plus `.json`):
  - the original unwrapped round its vanishing point into the walls' own angle and log-radius space;
  - objects (HUD, coins, gem, sock, brushes, bubbles, the character, foam) and, outside the warm core, the white splash flecks
    masked out (`WHITE_OUT` 0.22 / 0.82 / 0.05: averaged in, they turned the blue grey);
  - smoothed ALONG each ring only (6 degrees round it, 1.2 rows across it), so each ring keeps the original's radius, width and
    colour.
  - Reproducible, no randomness; regenerated in place byte-identical to the tested map.
- **`WebDemo/src/tunnel_r9_match.js`** (all under `FOCUS_RINGS` = `?s3=focus` with `MATCH.walls.ringMap`):
  - **`focusRingMapGLSL`:** the walls draw the map (`uFocusRings`) at the angle and radius where the original has each ring,
    just before the walls' lift and saturation, pre-compensated so it shows as the original's colour. The derived relief's own
    light and dark move over it (the water's flow).
  - **`mtPlace`:** the whole ring field is now concentric round the placed centre. The offset is taken off the walls' 3D
    vector: `uMatchPathVP`, the path's own vanishing point, worked out each frame. The rings stay on the 3D tube and move with
    it as she rides.
  - **The twisting ribbons are skipped** (`focusRibbonsGLSL` returns only the band phase for the flecks). The procedural ring
    lines are off where the map is.
  - **The texture** loads with the others, made with the private random sequence (the game's `Math.random` is untouched).
  - A debug-only setting (`ringMap.debugCol`) paints the walls one colour. It was used to prove the display path exact: a
    constant (51, 140, 237) drawn shows as (55, 141, 237).
- **`WebDemo/src/tunnel_r9_match_water.js`:** `focusFloorRingsGLSL`. The floor ahead (not the swell round her) takes the same
  map, fading out at rw 0.22-0.32, before her body.
- **`WebDemo/src/tunnel_r9_focus.js`** (settings):
  - `walls.ringMap`: `{ amount: 0.92, detail: 0.25, r: [0, 0.005, 0.46, 0.56], edgeOff: 1, floor: { amount: 0.88, r: [0.22, 0.32] } }`;
  - `walls.innerRings: null`, `walls.leftGlow: null` (the map carries the original's own inner rings and left wall);
  - restrained so they stop hiding the rings:
    - the walls' white flecks: `dens` 0.28 → 0.12, `wid` [0.11, 0.22] → [0.07, 0.14], drops 0.08 → 0.04;
    - the tunnel's floating white streaks: 220 → 80, thinner;
    - the tunnel bubbles: 220 → 160.
- Not changed: the camera, the character, the collectibles, the water round her, the interface (step 2).

## Measured (`measured.txt`; seed 7, the same camera; no overall similarity percentage is claimed)

| measure | checkpoint | after step 2 | after step 3 (3.0 s) |
|---|---|---|---|
| radial ring profile vs the original, up / left / right (`scripts/ringprof.py`) | +0.61 / +0.26 / +0.24 | the same | **+0.79 / +0.56 / +0.67**, all best at scale 1.00 |
| walls' band-luminance correlation (`match_overlay.py`) | −0.05 | −0.05 | **+0.22** (the map itself scores +0.63) |
| upper wall: electric blue / median (`walls.py`; original 43.0% / #5b99ef) | 39.8% / #6eaaf7 | the same | 44.5% / #7aa6ef |
| upper wall saturation (original 0.58) | 0.49 | the same | 0.49 |

- **2.85 and 3.1 s:** the upper sector stays matched (+0.83 / +0.75). The sides fall back (best at scale 0.95-1.19), because
  the rings are real geometry streaming toward the camera as she rides; they sit at the original's radii at the hero moment.
- **The display path is exact** (the constant-colour test), and the walls alone reproduce the map's colours:
  - upper wall median `#4f96ed` against the map's `#4691ec`;
  - middle `#9bb5ea` against `#94b2e9`.
- **Bloom:** switching it off changes the frame by 0.5%.

## Checks

- **Identity** (`identity_proof_step3.txt`): the raw 3D canvas of the normal game, the ten older switches, `match` and
  `match,nofoam` is identical to step 2 (41 frames, 0 differing pixels). Step 3 changes `focus` only.
- **Gameplay**, `focus`, step 3 build:
  - `gameplay_s3_func_focus.txt`: lanes 1 → 0 → 2, the jump, 12 coins, 1 gem, 2 socks, no console errors;
  - `gameplay_r2_func_focus.txt`: hearts (5 knocks, back to full), pause, Bubble Blast, Turbo Spin, no console errors.
- **Draw calls:** `after/focus_step3_info.json` (COST=1).

## Images

- `01_original_vs_step2_vs_step3_3.00s.jpg`: every panel 767 x 1536.
- Close-ups: `02_closeup_tunnel_centre.jpg`, `03_closeup_mascot_waterline.jpg`.
- `04_pixel7_original_vs_step2_vs_step3.jpg`.
- `05_FINAL_original_vs_checkpoint_vs_step2_vs_step3_3.00s.jpg`: the whole road.
- `ring_map/`: the map's contact sheet and the map drawn back onto the frame.
- `iterations/`: r1-r4, the tests v8 / v9, and the three diagnostic renders.

## What still differs (honest)

1. **The middle of the vortex and the floor ahead are paler and more lavender than the original.**
   - Middle (r 0.08-0.20): lavender 24.6% against 12.1%; electric blue 13% against 25%.
   - Floor ahead: lavender 22% against 3%.
   - Not the rings: the walls alone match the map there. It comes from:
     - the 3D objects deep in the tunnel drawn over the centre (far brushes and socks, the small floating bubbles);
     - the floor ahead being semi-transparent over the drum's lavender shell.
   - Those belong to the water and objects pass (the plan's step D).
2. **Softer than the original.** The original's rings are crisp, saturated bands with many white splash bits on them. Ours
   are the original's ring colours smoothed round each ring, with fewer white flecks (restrained, as asked).
   - Upper wall saturation is 0.49 against 0.58.
3. **The warm core:** the right place and size; more white (47% against 37%).
4. **Off the hero moment** the side rings drift from the original's radii, as real tunnel rings move (see above).
