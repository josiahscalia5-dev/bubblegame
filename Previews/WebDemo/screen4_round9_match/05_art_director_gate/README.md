# Round 9, step 5: the Art Director's six-area quality gate on the merged build (5 November 2026)

- **Target:** the ORIGINAL approved Screen 4 only, `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536). Zones: the user's precision kit `10_TARGET_ZONES_ANNOTATED.jpg`.
- **Judged:** merged `2a6ab30`, `?s3=match`, real seeded gameplay (seed 7, DPR 1.5, HUD on): `../04_merged/match_t3.00.png` (primary), with 2.85 s and 3.10 s as checks. Draw calls 202-209 a frame (`match_info.json`).
- **Method:** frames resized to 538 x 1076 and sorted into the Art Director's HSV classes (`scripts/common.py`). Positions are fractions of the frame (x/W, y/H). The merged vanishing point is taken as (0.53, 0.53), as in steps 2 and 3, so the numbers compare. Raw output: `measured.txt`. One read-only diagnostic capture was made (`rw_probe/`, `scripts/rw_probe.cjs`). No game file was edited.
- **No overall similarity percentage is claimed.** The scores are my visual judgement per area; the measured numbers are reported beside them, separately.

Images:
- `approved_vs_merged_3.00s_gate_annotated.png`: original | merged 3.0 s, both 1536 px tall. The six zones are drawn on both, and the top fixes (F1-F7) are marked in red on the merged frame.
- `crops_per_area_original_vs_merged_3.00s.jpg`: one row per area, original | merged, cropped at the same frame fractions. The yellow circle marks the centre disc (r < 0.06 W).
- `objects_zoom_grid_original_vs_merged_3.00s.jpg`: the objects, with a grid every 0.02. Boxes marked "read" below were read off it.

## The six areas at 3.0 s

| area (zone) | score | why (visual) | measured: approved / merged (script, box) | verdict |
|---|---|---|---|---|
| **1 housing and framing** (1, 5) | **7** | Placement, rim colour and the opening are close. But the gold rim is a heavy bronze band, and the lilac collar arc reads as a smooth, clean ring. | rim band thickness **0.019 / 0.032 H**; at x 0.95 it spans 0.263-0.282 / 0.252-0.320 (`rim.py`). Rim colour #eea98b / #e8a48d. Zone 1 lavender 45.5 / 41.6% (`zones.py`). Top bevel x .30-.70, y .25-.31: lavender 61.5 / 68.2%, median #6763d8 / #6c69db. Left strip x < .08, y .40-.76: lavender 13.4 / 15.0%, white 21.1 / 6.6% (`strips.py`). | partly (close on layout) |
| **2 deep blue tunnel** (2) | **5** | The blue body and the swirl are good. But the centre is a lilac-pink nebula where the original has a warm, luminous core with tight rings. The walls are smoother and paler in their darks, with fewer and broader bands. | **centre r < .06: warm 46.7 / 18.5%, lavender 11.1 / 45.2%, median #f1d7db / #dac1f2.** Mid vortex r .08-.20: lavender 12.1 / 19.2%, white 22.3 / 13.7%. Upper wall: deep cobalt 3.9 / 1.2%, electric blue 43.0 / 51.4%, band-scale texture hp5 0.094 / 0.062 (`walls.py`). Bright bands up / left / right 8 / 10 / 7 against 6 / 4 / 7; band contrast 0.184 / 0.167 / 0.201 against 0.126 / 0.242 / 0.175 (`rings.py`). | partly |
| **3 light and reflections** (2) | **4** | Generic four-point star sparkles show on the walls. The "warm patches" at the upper right read lime-yellow, not peach. The glints are white-lilac rather than ice blue. Cyan streaks are half the original's. The warm core glow is missing. | upper wall cyan (azure) 13.3 / 6.6%, azure median #2fb2f5 / #52d7f7. Small sparkle blobs 0.20 / 0.85% (`walls.py`). Glints (brightest 2%) #cae0ff S 0.27 / #e6e0f9 S 0.14. **Lime (hue 70-100) wall pixels 29 / 783**; peach-pink (hue 0-45) 1901 / 831 (`palette.py`, "other" hue histogram). Centre warm 46.7 / 18.5%. | far |
| **4 character immersion** (3) | **6** | The waterline height and the violet see-through are right. But the body sits behind a smooth glass-bowl lip with a thin white rim, where the original sinks it into bubbly foam lobes. Under the lip, the fur shows as a pale pink block. | waterline (median lowest pink, x .3-.7) 0.836 / 0.824. Sides at x .30-.34: 0.809-0.822 / 0.800-0.803 (`char.py`, `wl.py`). Under the body (x .33-.67, y .835-.875): violet 36.8 / 40.3%, **texture hp5 0.112 / 0.071**, white 14.2 / 6.6%, pale blue 20.5 / 34.4% (`bank.py`). Contact strip (x .30-.70, y .78-.835): pink 85.1 / 71.8%, white 3.6 / 9.5% (`contact.py`). | partly |
| **5 foreground waves** (6) | **4** | The original's lower fifth is a massive sculpted bank of glossy white-blue foam lobes and bubbles, rising to about 0.78 in the corners. In the visible merged frame it is a thin lip over flat water with many tiny flecks. (The game's HUD buttons are bigger and sit higher, from 0.835 against about 0.90, so they also hide the bank.) | bank y .80-.875 (HUD masked): white 20.3 / 15.9%, pale blue 26.4 / 31.6%, saturated blue 14.0 / 10.7%, electric blue 12.2 / 8.9%, hp5 0.095 / 0.083, highlights 18.6 / 14.6% (`bank.py`). Left of the body (x < .24, y .70-.835): white 25.0 / 14.1%, **white blobs 13 / 105** (`contact.py`). Zone 6 azure 7.7 / 1.8% (`zones.py`). | far |
| **6 object size and placement** (4) | **7** | Most objects are within 0.03 H of their places, and both brushes are in their boxes. But the gem is low and big, the upper-left coin stacks onto the big coin like a totem, a second coin, a sock and a small gem crowd the centre coin, and the right coin is too big. | gem 0.271-0.374, 0.489-0.529 / **0.254-0.369, 0.510-0.561: 12% wide, 0.027 H low**. Right coin 0.778-0.996, 0.671-0.800 / 0.746-0.996, 0.689-0.822 (0.218 / 0.250 W). Big left coin 0.085-0.301, 0.544-0.660 / 0.093-0.28, 0.565-0.68 (read) (`objects.py`). Upper-left coin 0.087-0.213, 0.441-0.499 / 0.11-0.245, 0.505-0.565 (read, **0.065 H low**). Sock 0.645-0.84, 0.555-0.665 / 0.635-0.83, 0.583-0.695 (read: right size, 0.025 H low). Left brush 0.011-0.199, 0.233-0.415 / 0.011-0.169, 0.241-0.456; right brush 0.786-0.987, 0.393-0.611 / 0.829-0.987, 0.406-0.648 (`brush.py`). | partly (close for most) |

At 2.85 s and 3.10 s (`measured.txt`) the same faults show:
- the centre is lavender 46.3% and 46.5%, warm 21.0% and 14.1%;
- the bank is white 16.0% and 15.4%;
- at 3.1 s the left brush leaves the frame and the left coin is cut by the edge (0.004-0.217).

## The centre diagnosis: CONFIRMED, with two refinements

Water & VFX's finding is right: the lilac centre is drawn by `heroWalls`, because `matchWall()` (`tunnel_r9_match.js`) takes its colour-map radius from each point's own track frame rather than from where the point appears on screen:

```glsl
rw = length(cs - uHeroCam.xy) / max(u - uHeroCam.z, 0.25) / uHeroTanW
```

Evidence:

1. **The probe** (`scripts/rw_probe.cjs`, real camera at 3.0 s): every `heroWalls` vertex was projected and the nearest kept per 1/135 W cell. In each screen ring I compared the shader's `rw` with the true screen radius round the projected vanishing point (0.546, 0.529). `rw/true` is the ratio of the two:

   | screen ring | shader `rw` (median) | distance ahead | rw/true |
   |---|---|---|---|
   | r < 0.035 | 0.071 | 37 m | 2.4 |
   | r 0.035-0.06 | 0.087 | 31 m | 1.7 |
   | r 0.06-0.09 | 0.099 | | 1.3 |
   | r 0.09-0.12 and beyond | | | **1.00** |

   - **No wall cell inside r < 0.09 samples the map's core rows (rw < 0.06): 0%.**
   - The formula is exact on the straight part of the tube and wrong only in the middle.
2. **Why (refinement 1): the lining is finite.** `heroWalls` ends 38.2 m ahead (tunnel u 3.9-37.2, camera at u -1.0). Its radius is 2.0 m and `uHeroTanW` is 0.7265, so the smallest `rw` the formula can ever give is about 2.0 / 38.2 / 0.7265 = **0.072**. That is outside the 0.06 W centre disc, so the warm core rows can never appear.
3. **Why (refinement 2): the path bends.** It is straight to 12 m, then pitches up (T.y +0.063 at 16 m), turns (T.x +0.059 at 20 m) and pitches down (T.y -0.102 at 30 m). So the far wall faces the camera across the centre at 26-37 m. The title's "the drum turns" is this bend, not the drum mesh spinning.
4. **What those rows hold** (`scripts/texrows.py`, `tunnel_colour.png` by `rw`):

   | rows | lavender | pale lilac | warm |
   |---|---|---|---|
   | rw 0.06-0.085 | 33% | 39% | 1% |
   | rw 0.085-0.12 | 20% | 25% | 5% |
   | the core, rw 0.025-0.035 (#fbe7ec) | 2% | | 43% |

   The peach core tint (`MATCH.walls.core.r` [0.035, 0.085]) is keyed on the same wrong `rw`, so it is about 0-17% on where the centre is drawn. That gives the measured 45% lavender and 18% warm.

**The right fix (Tunnel & Lighting, `matchWall`):**
- Work out `rw` and `tu` from `gl_FragCoord` round the projected centre of the far tube:
  - add new `MATCH_UNIFORMS` `uMatchVP` (vec2, drawing-buffer fractions) and `uMatchRes`;
  - set them each frame in a gated `onBeforeRender` by projecting the axis at about `min(camU + 30, TE - 2)`.
- Blend the screen value in only where the screen radius is under about 0.14 W (fully under 0.09). The probe shows the ratio is 1.00 outside 0.09, so the matched outer walls do not move.
- Blend `tu` through unit vectors, to avoid the wrap at ±0.5.
- Drive the core tint from the corrected `rw`.
- Water & VFX's floor has the same formula (`tunnel_r9_match_water.js` line 135, inside the `matchFloorApply` GLSL; its `lil` and `fk` terms use it). It must take the same corrected `rw` where the far floor curves up into the centre.
- After that, the mid vortex will still lean lilac, because the map's own rows at rw 0.06-0.12 are lilac. Regrade that zone in `tools/screen4/derive_ref5_water.py`, or add a gated de-lilac there like the floor's `delilac`.
- **Targets:**
  - centre r < .06: warm at least 35%, lavender at most 15%, white about 30-37%, median toward #f1d7db;
  - mid vortex: lavender at most 13%, white at least 18%;
  - the `rw_probe` core share in r < 0.06 at least 0.9;
  - upper-wall shares within ±1 point of now.

**Probe limits:**
- It is a vertex z-buffer, not rasterised. Only 7 of about 70 cells inside r < 0.035 hold a vertex.
- The closed-form bound in point 2 does not depend on that.

## Ranked fixes, largest visible difference first

| # | owner | what (code) | measured target at 3.0 s (approved) | check |
|---|---|---|---|---|
| **F1** | Tunnel & Lighting (floor part: Water & VFX) | The centre. Screen-space `rw`/`tu` in `matchWall()` as above; core tint on the corrected `rw`; the same in `matchFloorApply`; then de-lilac the map's rw 0.06-0.12 rows. | centre warm ≥35 (46.7), lavender ≤15 (11.1); mid vortex lavender ≤13 (12.1), white ≥18 (22.3) | `walls.py` centre and mid rows; `rw_probe.cjs` core share ≥0.9 |
| **F2** | Water & VFX | Foreground bank mass. Large lobe clusters at the outer phis (±50 to ±80, radius 0.18-0.24 m, up to the crest) in `MATCH_WATER.splash.lumps`, bubbly white caps (`lobe.cap`, `lobe.foam`); far fewer tiny flecks (`lobe.fleck` 0.72 -> about 0.85, fewer `heroSplash` spray points). | bank white 18-22 (20.3), saturated blue ≥13 (14.0), electric blue ≥11 (12.2), pale ≤27 (26.4), hp5 ≥0.09 (0.095); left of body white ≥20 (25.0), white blobs ≤40 (13; now 105) | `bank.py`, `contact.py`, `zones.py` zone 6 |
| **F3** | Tunnel & Lighting | Wall depth. A cobalt trough term from the relief map's luminance (`det`) in `matchWall` (new `MATCH.walls.trough` about 0.3, toward the approved deep cobalt #4a64d2); more and narrower bands on the left (only 4 there now: the colour map's left-sector log-r compression in `derive_ref5_water.py`, or the detail period `MATCH.walls.detailSpan`). | upper wall deep cobalt 3-5 (3.9; now 1.2), side walls ≥3 (4.1; now 1.1); hp5 ≥0.085 (0.094); bands ≥7 per sector (8 / 10 / 7); band contrast 0.17-0.20 in every sector | `walls.py`, `rings.py` |
| **F4** | Tunnel & Lighting | Colour of the light. Pull hue 60-100 (lime) to peach #ffd3a0 / pink #efc9d9, in the Reference 5 grade (`derive_ref5_water.py`) or a gated hue clamp in `matchWall`; cyan streaks from the variation map's streak channel at #2fb2f5 (the azure tone is too light and green now); electric blue down to make room. | lime pixels ≤100 (29; now 783); upper-wall azure ≥11 (13.3); azure median near #2fb2f5; electric blue ≤46 (43.0) | `palette.py`, `walls.py` |
| **F5** | Tunnel & Lighting | Remove the four-point star sparkles on the walls. First find the source with `hide_probe.cjs`: Reference 5's stars baked into `tunnel_colour.png` (your own step 2 note), the `shimmer` term on `vr.r`, or the `spec` glints. Remove the stars in the derive step (top-hat detection and inpainting), and tint the remaining glints to #cae0ff (`MATCH.walls.glint`). | small sparkle ≤0.3% (0.20; now 0.85); glints saturation ≥0.22 (0.27; now 0.14) | `walls.py` sparkle column; `palette.py` glints |
| **F6** | Tunnel & Lighting | Housing. A thinner rim: `MATCH.hero.round6.porthole.bezel.inner` 2.39 -> about 2.45 (outer 2.55 kept), or less gold in the rim ramp. Break the smooth collar arc on the left with droplets. **Do not remove lavender:** it is already at the approved level (zone 1 41.6 / 45.5; top bevel 68 / 62; left strip 15 / 13). | rim thickness 0.018-0.022 H (0.019; now 0.032); at x .95, 0.263-0.282; left strip white ≥15 (21.1; now 6.6) | `rim.py`, `strips.py` |
| **F7** | Tunnel & Lighting | The gem and the centre crowding. `extraGem` up and visual scale about 0.89 (solve with `hero_probe.cjs` `PICKS='[[0.323,0.509,d]]'` at its current distance). Push the far coin line (`coinLines` `[1, 12.0, 3, ...]`), the far sock and `MATCH.farGem` so only the centre coin lies within 0.08 W of the vanishing point. | gem 0.271-0.374, 0.489-0.529; centre coin alone at 0.468-0.571, 0.529-0.579 | `objects.py`, the grid zoom |
| **F8** | Water & VFX | The water under and round the body. Break the glass-bowl lip into bubbly foam lobes across the front (`matchSwellGLSL`, `MATCH_WATER.look.crest`, `top`, `clear`, and the front `lumps` at phi -7 to 19); cut the pale blue under the lip. | under the body hp5 ≥0.10 (0.112), white 12-16 (14.2), pale ≤24 (20.5), violet ≥30 kept (36.8); contact strip pink ≥80 (85.1) | `bank.py`, `contact.py` |
| **F9** | Water & VFX | The floor ahead. Re-measure after F1, then raise `MATCH_WATER.floor.delilac` and the white caustic and glint share. | floor ahead lavender ≤5 with the sock excluded (3.0), white 25-30 (30.5), median near #aed7f3 (now #98bff1) | `walls.py` floor row |
| **F10** | Tunnel & Lighting | The right coin and the sock. Right coin (`coinLines` `[2.243, 2.2, ...]`) about 0.3 m further, or 0.87 visual scale, and 0.02 H higher. `firstSock` about +0.1 m up. The sock's purple glitter toe against the approved's navy-blue toe is optional. The upper-left coin is 0.065 H low and touches the big coin, but the jump reach bounds it: leave it unless a reachable place exists. | right coin 0.778-0.996, 0.671-0.800 (0.218 W); sock 0.645-0.84, 0.555-0.665 | `objects.py`, the grid zoom |

## The lead's specific questions

- **Less lavender round the opening:** REJECTED as the lever. The measured lavender round the opening is already at or under the approved level (see F6). The opening reads less immersive because:
  - the rim is 1.7 times too thick;
  - the left collar arc is a smooth, clean lilac ring, where the original breaks its edges with white droplets and bubbles;
  - the centre lacks its luminous pull (F1).
- **Deep cobalt contrast:** short. The upper wall has 1.2% deep cobalt against 3.9%, the side walls 1.1% against 4.1%. Band contrast is too low at the top and right and too high (0.242, with only 4 bands) on the left. See F3.
- **The sock:** the right size (about 0.195 W x 0.11 H against 0.19 x 0.11), 0.025 H low, upright with a purple glitter toe. **The lower-right coin:** 15% too wide and 0.02 H low. See F10.
- **The gem:** confirmed, 12% too wide and 0.027 H low. See F7.

## Files

- `README.md` (this file), `measured.txt`, `approved_vs_merged_3.00s_gate_annotated.png`, `crops_per_area_original_vs_merged_3.00s.jpg`, `objects_zoom_grid_original_vs_merged_3.00s.jpg`
- `rw_probe/rw_probe_t3.00.json` and `.png`: the diagnostic capture.
- `scripts/`:
  - from step 1: `common.py` (now pointed at the merged frames), `walls.py`, `rings.py`, `rim.py`, `bank.py`, `contact.py`, `char.py`, `wl.py`, `palette.py`, `objects.py`, `brush.py`;
  - new: `housing.py`, `zones.py`, `strips.py`, `sock.py`, `texrows.py`, `rw_probe.cjs`, `sheets.py`, `annotate_gate.py`.
  - `sock.py`'s box hit its search limits, so the sock was read off the grid zoom instead.
