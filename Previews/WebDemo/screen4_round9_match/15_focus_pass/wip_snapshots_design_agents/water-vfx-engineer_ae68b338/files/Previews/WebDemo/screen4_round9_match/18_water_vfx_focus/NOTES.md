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
