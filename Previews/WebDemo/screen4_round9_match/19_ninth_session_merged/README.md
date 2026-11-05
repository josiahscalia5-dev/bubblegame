# Ninth session: both specialists merged, `?s3=focus` (5 November 2026, 20:20 UTC)

Repository `josiahscalia5-dev/bubblegame`, branch `ccr-de8d9670-2ohd5t`. Only target: the ORIGINAL APPROVED Screen 4
(`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).

## Commits

| commit | what |
|---|---|
| `0ff0d0b` | Tunnel & Lighting's earlier work restored from its 18:58 snapshot: camera at the original's size, rim restaged, the lower-left wedge as wall water, the left-wall seam removed |
| `5462f30` | Merge Water & VFX (`d615259`, `4ae6099`, `d903650`, `eacb3f4`, `5dac0d8`, `b5fb9d3`, `60671c2`): broken sparkling blue splash round her, the floor ahead, fewer chunkier flying streaks, bubbles off the centre |
| `a78a143` | Merge Tunnel & Lighting (`82d568c`, `24fd87e`, `340b117`, `2db3d6b`, `956a7de`, `849217a`): objects on the original's spots, broad softly blended flows (kit problem B), chunkier wall splashes, warm centre, pale left wall; bundle rebuilt after the merge (md5 `f131fa46...`) |
| `dfa9c93` | These sheets |

Files changed in the pass: `WebDemo/src/tunnel_r9_match.js`, `WebDemo/src/tunnel_r9_match_water.js`,
`WebDemo/src/tunnel_r9_focus.js` (`FOCUS.match`, `FOCUS.water`), `WebDemo/game.bundle.js`. Specialists' own evidence:
`../17_tunnel_lighting_focus/README.md`, `../18_water_vfx_focus/README.md`.

## Sheets (3.0 s, seed 7, DPR 1.5; before = focus at `182ad19`, the session start)

- `full_original_before_now_3.00s.png` (HUD on), `overlay_50pct_original_over_now.png`
- `zoom_lower_left_corner.png`, `zoom_rings_and_currents.png`, `zoom_water_round_her.png`, `zoom_objects.png`
- `frames/`: merged captures at 2.85, 3.0 and 3.1 s; `match_t3.00_canvas_identity.png`

## Checks on the merged build

- `?s3=match` 3.0 s canvas: identical (max difference 0) to `182ad19` / `71f7fa7`.
- `checks/s3_func_focus.txt`: lanes, jump, keyboard start, 12 coins, 1 gem, 2 socks in the tunnel, no console errors;
  136 draw calls, 1.07 M triangles.
- `checks/r2_func_focus.txt` (`VW=135 VH=270`): hearts 5 -> 0 -> restart at 5 Full; pause freezes time and resumes
  (button and keyboard); Bubble Blast clears the two brushes ahead, 3 -> 2, disabled at 0; Turbo Spin 6.68 -> 8.78 m/s,
  no knocks; no console errors.
- `checks/pixel7_two_framings.png`: Pixel 7 at 412 x 839 and full-screen 412 x 915: no grey wedge, clipping or holes; she
  sits on the water; HUD intact; no console errors.

## The user's Tunnel Correction kit checklist

| item | state |
|---|---|
| Lower-left inner-wall wedge covered with animated water | verified (`zoom_lower_left_corner.png`) |
| Upper metal rim where it belongs | verified |
| A real water mesh/shader change improves the target | verified (`focusRibbonsGLSL`, `focusMouthWaterGLSL`, swell and floor shaders) |
| Broad cobalt/turquoise flows, not hard white outlines | partly: bands per ray 6.5 (orig 6.3), turquoise 6.9% (7.5); blue saturation 0.71 against 0.83, mid tones lighter and more violet |
| Warm centre readable, depth closer | partly: warm 10.9% (13.0), pink-violet 7.3% (8.6); inner rings more regular and paler than the original's |
| Character on top of blue water, no foam cushion | verified; her pink 0.25 W wide at the base against 0.20 |
| 3.0 s comparisons show improvements and remaining differences | verified (this folder) |
| Gameplay and phone tests pass | verified |
| Source pushed, hashes shared | verified |

## Still different from the original

- Left wall: its numbers now match the original's (my measure, x 0-0.30, y 0.44-0.79: saturation 0.47 / 0.47, vivid blue
  25.8 / 25.9%, white 16.0 / 15.6%), but by eye it is smoother and milkier than the original's crisp cyan and white sparkle.
- More small white streaks and bubbles over the rings than the original (streak pieces 11.2 per 10k px against 3.2).
- The water behind her about 4 L* darker than the original's; her pink a little wider at the base.
- The sock's open eyes and violet toe (the model; the original's has closed happy eyes and a blue toe).
