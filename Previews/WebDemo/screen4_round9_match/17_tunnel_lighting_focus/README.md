# Tunnel & Lighting, focused correction pass on `?s3=focus` (5 November 2026, ninth session)

The only target: the ORIGINAL APPROVED Screen 4 (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
Worktree from `71f7fa7` (branch `ccr-de8d9670-2ohd5t`); the lead merges and pushes. Files changed: `WebDemo/src/tunnel_r9_match.js`,
the `FOCUS.match` part of `WebDemo/src/tunnel_r9_focus.js`, `WebDemo/game.bundle.js`. Everything is gated on `FOCUS_ON`.
Running notes with every finding and candidate: `NOTES.md`.

## Commits (this session)

| commit | step |
|---|---|
| `82d568c` | objects on the original's spots for the new camera (AD item 8) |
| `24fd87e` | the walls' water as broad, softly blended flows without outlines (kit problem B, AD item 3) |
| `340b117` | the walls' white splashes fewer, chunkier, broken, crisp white (AD item 4) |
| `2db3d6b` | the centre's pastel inner rings round a modest warm core (AD item 5) |
| `956a7de` | the left wall's water glows pale like the original (AD item 6) |

Earlier, restored as `0ff0d0b`: the camera at the original's size, problem A (the lower-left wedge drawn as wall water), the
left-wall seam.

## Evidence

- `sheet_original_before_after_t3.00.png`: original / focus at `71f7fa7` / focus at `956a7de`, real 3.0 s canvas frames.
- `crop_lower_left_original_before_after_t3.00.png`: the lower-left corner (original, focus before the pass with the wedge,
  `71f7fa7`, after). `crop_rings_original_before_after_t3.00.png`: the ring structure.
- `frames/`: every step's 3.0 s frames (canvas and page), 2.85 and 3.1 s for the final, Pixel 7 (412 x 839) for each step.
- `numbers/final_measures_t3.00.txt` (all measures, final frame), `numbers/pixel_identity_match_vs_71f7fa7.txt`,
  `numbers/s3_func_focus_final.json`.
- Tools in `scripts/` (see NOTES.md): `run_ad.py` (the Art Director's scripts on a new frame), `ring_metrics.py`,
  `minima_hist.py`, `lbins.py`, `core_detail.py`, `left_wall.py`, `brushes.py`, `maskbox.py`, `live_sweep.cjs`, `cands_nobub.cjs`.

## Results at 3.0 s (measurements; the Art Director's scripts unless noted)

| item | measure | original | before (`71f7fa7`) | after (`956a7de`) | target | status |
|---|---|---|---|---|---|---|
| 1 objects | lower-right coin centre, width | (0.893, 0.733), 0.219 | (0.751, 0.723), 0.241 | (0.894, 0.736), 0.214 | (0.893, 0.733), ~0.22 | verified |
| | big left coin | (0.198, 0.602) | (0.195, 0.608) | (0.195, 0.608) | (0.198, 0.602) | verified |
| | small left coin | (0.152, 0.471), not hidden | (0.158, 0.484), behind the brush | (0.150, 0.472), clear | | verified |
| | gem centre, height | (0.326, 0.511), 0.033 | (0.310, 0.511), 0.045 | (0.324, 0.514), 0.033 | height <= 0.037 | verified |
| | gold area (4 coin blobs) | 4.35% | 4.82% | 4.67% | 4.0-4.8% | verified |
| | sock (sock-only render) | box 0.64-0.83 x 0.555-0.665 | opening showing, cuff -17 deg | box 0.642-0.829 x 0.551-0.657, cuff +0.4 deg, opening hidden, toe low left | top 0.55-0.56, cuff +-7 deg | verified |
| | framing brushes (pink fur, `brushes.py`) | L x 0.010-0.171 y 0.240-0.416; R x 0.789-0.984 y 0.394-0.610 | L 0-0.236 / 0.268-0.501; R 0.734-1.0 / 0.393-0.671 | L 0-0.186 / 0.240-0.418; R 0.793-1.0 / 0.393-0.606 | where the original has them | verified |
| 2 water bands (upper ring) | dark bands per ray | 6.3 | 7.3 | 6.5 | 6.0-6.6 | verified |
| | ray coherence | 0.60 | 0.49 | 0.63 | | verified |
| | lightness spread along ray | 14.9 | 10.8 | 12.8 | >= 14 | partly (walls alone 14.8) |
| | median L* | 64 | 73 | 67 | 62-66 | partly (1 over) |
| | darker than L* 55 | 30.5% | 15.5% | 19.4% | 27-32% | partly |
| | saturated blue hue / saturation | 215 / 0.83 | 212 / 0.68 | 219 / 0.71 | 213-217 / >= 0.78 | not (see below) |
| | turquoise (zones ring_upper) | 7.5% | 10.5% | 6.9% | 6-9% | verified |
| | hard ring outlines (by eye) | none | sawtooth edges, stepped arcs | none: continuous profile, noise offsets | | verified |
| 3 wall streaks (upper arc) | full frame: pieces per 10k / median area / p90 / thickness | 3.6 / 44 / 517 / 3.2 | 11.8 / 37 / 151 / 2.1 | 9.8 / 50 / 318 / 2.3 | <= 5 / >= 45 / >= 500 / >= 3 | partly: the walls' own (bubble layer hidden) 4.3 / 60 / 331 / 3.9 |
| 4 centre (r < 0.12 W) | pink-violet / warm / saturated blue | 8.6 / 13.0 / 3.1% | 1.1 / 8.1 / 10.7% | 7.3 / 10.9 / 0.7% | 6-10 / 10-14 / <= 6% | verified |
| | warmth in the ring zone (r 0.12-0.45) | 3.1% | 1.4% | 1.4% | <= 5% | verified |
| 5 left wall (x 0-0.30, y 0.44-0.79) | L* / white | 76.9 / 24.8% | 69.1 / 6.5% | 77.3 / 22.3% | 74-80 / >= 20% | verified |
| | lavender in the outer 3% strip | 17.8% | 0.5% | 0.3% | no slivers | verified |
| checks | `?s3=match` 3.0 s canvas vs `71f7fa7` | | | identical (md5 e52d4ea3...) | identical | verified |
| | `S3=focus s3_func.cjs` | | | lanes 0 / 2, jump, 12 coins, 1 gem, 2 socks, no console errors | | verified |
| | Pixel 7 412 x 839 | | | no wedge, no holes, every object in frame | | verified |

## What still differs from the original (judgement and measures)

- **The bubble and streak layer (Water & VFX's, `FOCUS.water.bubbles`)** sets most of the remaining ring numbers. Hiding every
  object named *ubble*: the walls alone give 6.1 dark bands per ray, a 14.8 L* spread, coherence 0.61; the full frame's thin
  white dashes drop from 13.4 to 5.2 pieces per 10k px. A calibration render (every flow colour `#1a62e2`) shows the display
  chain is exact, and that under the translucent bubbles a quarter of the ring zone reads `#547ce7` whatever the walls draw, so
  the saturated-blue median saturation stays near 0.71 (the original 0.83). Recommended to Water & VFX: fewer, chunkier
  instanced streaks in the ring zone and fewer bubbles over the walls between r 0.1 and 0.3 W.
- The flows read a little more violet than the original (hue 219 against 215) and lighter in the mid tones (darker than L* 55:
  19% against 30%).
- The original's rings are more clearly layered (bright cyan glowing bands between broad electric-blue ones); ours are softer
  flows. The original's warm arc (pink-peach-yellow, 0.2-0.25 W above the centre) is still only a faint arc here.
- The centre's inner rings are more regular than the original's and carry more pale blue (35% against 15%).
- The left wall has the original's brightness and white but not its lilac-pink tints (lavender 1% against 14%); the original's
  left edge also shows a second, out-of-focus pink pom-pom that the game does not have.
- The sock's face (open eyes) and its violet toe come from the model; the original's sock has closed happy eyes and a blue toe.
