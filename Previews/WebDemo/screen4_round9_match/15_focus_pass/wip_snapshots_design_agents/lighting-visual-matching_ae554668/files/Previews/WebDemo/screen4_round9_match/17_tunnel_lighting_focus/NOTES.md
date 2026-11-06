**CAMERA DECIDED AND COMMITTED (`0dae738`):** `FOCUS.match.hero.round6.round5.camera = { off: [-0.162, 1.126, -3.1], lookY: 1.655,
lookX: 0.142, fov: 68 }`, with the rim restaged (`porthole.bezel { inner: 2.506, outer: 2.641 }`, `face.inner 2.59`, `rivets.radius
3.42`, `hero.rim.centre [-0.1155, 0.8415]`) and `rimRho { mouth: 0.864, perMetre: 0.0855 }`. At 3.0 s: character width 0.473 W, top
0.695, base 0.850, centre (0.500, 0.780); water top 0.28; tube axis (0.497, 0.531); rim circle 0.931 W round (0.550, 0.672).

# Tunnel & Lighting, focused pass on `?s3=focus`: running notes (5 November 2026, from about 18:20 UTC)

Worktree branch `worktree-agent-ae55466877e7d52cb`, started at `d6e836d`. Only target: the ORIGINAL APPROVED Screen 4
(`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`). Files: `WebDemo/src/tunnel_r9_match.js`
and `FOCUS.match` in `WebDemo/src/tunnel_r9_focus.js`; everything gated on `FOCUS_ON`.

Order (the lead, after the user's kit at about 18:26 UTC): 1 camera; 2 problem A (lower-left lavender-grey wedge); 3 objects;
4 problem B (softer, broader water bands); 5 wall streaks, centre, left wall.

## Tools (in `scripts/`)

- `run_ad.py <name> <canvas> [page]`: runs the Art Director's script `16_art_director_focus_review/scripts/<name>.py` on a new frame.
- `frame_fit.py <frames...> [--cands cands.json]`: the camera targets (character box by the AD's pink mask, water top by `rim_profile.py`'s rule).
- `tune_cands.cjs`: one browser, a fresh seeded page per tune candidate, canvas at 3.0 s, the projected vanishing point and camera.
- `hide_probe_tune.cjs`: `tools/screen4/hide_probe.cjs` with DPR and TUNE added.

## Baseline

`frames/focus_before_t3.00_canvas.png` is identical (max diff 0) to `15_focus_pass/final/focus_final_t3.00_canvas.png`.

## 1. Camera (sweep at 3.0 s, real renders, `tune_cands.cjs`)

Focus camera: `off [-0.11, 0.93, -2.25]`, `lookY 1.54`, `fov 73` (match's lookX 0.194). Pitch kept with lookY = y + 0.0704 (6.42 - z).

| candidate | width | top | base | centre | water top | vp |
|---|---|---|---|---|---|---|
| original | 0.465 | 0.702 | 0.859 | (0.502, 0.778) | 0.28 | |
| focus (base) | 0.600 | 0.687 | 0.894 | (0.521, 0.799) | 0.26 | (0.501, 0.535) |
| z -2.9 y 1.08 fov 72 | 0.473 | 0.693 | 0.848 | (0.523, 0.777) | 0.31 | (0.500, 0.538) |
| z -2.9 y 1.08 fov 67 | 0.520 | 0.711 | 0.882 | (0.525, 0.805) | 0.29 | (0.500, 0.542) |
| z -3.1 y 1.08 fov 68 | 0.476 | 0.698 | 0.849 | (0.525, 0.780) | 0.30 | (0.499, 0.541) |
| z -3.3 y 1.08 fov 65 | 0.477 | 0.698 | 0.847 | (0.527, 0.780) | 0.30 | (0.499, 0.543) |
| z -3.5 y 1.08 fov 62 | 0.476 | 0.701 | 0.847 | (0.529, 0.781) | 0.29 | (0.498, 0.545) |

Finding: moving the camera back shrinks the gold rim on screen (rim top about 0.27 instead of the original's 0.21) because
the porthole stays 1.16 m in front of the character; it must be restaged with the camera (scaled up / recentred) and the
rim ramp's on-screen constants (RIM_RHO) recomputed. Character centre x is 0.525: the camera moves about 0.05 m right
(off x and lookX together) to bring her to 0.50 without moving the vanishing point.

## 2. Problem A: the lower-left lavender-grey wedge

Hide probe at 3.0 s (focus, before the camera change), zone x 0-0.15, y 0.55-0.85, share of pixels that change when hidden:
heroWalls 0.50, heroSwell 0.10, heroBubbles 0.08, lqFloor 0.08, heroCollar 0.02, r6Face 0.00.

Cause: the flat lavender band with the dark blue line along its top is drawn by **heroWalls** (round4's lining
`r4Lining`, renamed `heroWalls`, shaded by `tunnel_r8_liquid.js` `wallFragment`). The lining extends before the tube's mouth
(u < uStart), and there `wallFragment` paints it flat `#c4b8f0` ("the washer's lavender shell before the mouth") plus the
navy mouth edge at uStart + 0.1. The rim's collar is centred low (h 0.755), so at the lower sides the collar's funnel is wider
than the tube, and this pre-mouth part of the lining lies inside it, in front of the collar's water: the camera sees a
flat lavender strip with a navy line at the lower left (and right). `matchMouthGLSL` (my file, inserted after those lines)
only repaints the upper part (the rim ramp, upA > -0.15).

Planned fix (focus only, in `matchMouthGLSL`): below the rim-ramp region, before the mouth, draw the walls' own animated water
(lqWall / matchWall) instead of the lavender shell and the navy edge; the upper part (gold rim, bevel, ramp) unchanged.

After the camera change (hide probe at DPR 1.5, `0dae738`): left x 0-0.12, y 0.5-0.85: heroWalls 0.63 changed (others <= 0.09);
right: heroWalls 0.24, s4Brush 0.46. Same cause, more visible with the camera further back.

**Done (`a61541c`):** `focusMouthWaterGLSL` in `tunnel_r9_match.js`, inserted by `matchMouthGLSL` into `wallFragment` (focus only):
where (1 - smoothstep(-0.15, 0.3, upA)) * (1 - smoothstep(0.2, 0.32, u - uStart)) > 0 it draws `lqWall(...)` over the lavender shell
and the navy edge. Lavender share (h 235-300, s 0.08-0.45, v > 0.6) in x 0-0.10, y 0.45-0.80: 11.2% -> 0.4%; x 0.90-1.0: 10.6% -> 1.1%.
Pixels changed only in y 0.615-0.783; none above y 0.60. Pixel 7 412x839: no wedge (`frames/phone_412x839_focus_A_3.00s.png`).

## 2b. The horizontal seam on the left wall (the lead, after `a61541c`)

A hard straight line across the wall water at the vanishing point's height (canvas y 0.527, x 0-0.35), there before fix A too
(not from the problem-A region: that changes only y 0.615-0.783). Cause: `focusRibbonsGLSL` keys its per-band picks (arc count,
arc offsets, body colour, and so the flecks' phase fRq) on floor(rq), and the band phase bs = lr * perLog + tu * spiral steps by
one band where tu wraps (screen-left, the horizontal through the camera in the cross-section, `mtPlace`). Every wall point at
the camera's height projects onto the horizon line, so with the camera at the axis height (h 1.6) the step is a straight line.
**Fixed (`2975aea`):** the ribbons count the angle from straight down (rTu = tu < -0.25 ? tu + 1 : tu; rq gets +spiral there), so
the step falls on the tube's bottom, under the water floor. Largest row jump on the left wall (x 0.02-0.30, y 0.48-0.62): 28.2 ->
14.0 (now the coin's edge; median 6). Page frame: the 0.531 jump (26.4) gone.

## 3. Objects after the camera (next)

Probe at 3.0 s (new camera): camera track (u -5.4, x -0.16, h 1.6). Picks (screen x, y, distance -> track u rel. tunnelStart, x, h):
lower-right coin (0.893, 0.733): d 3.0 -> (-2.6, -0.81, 0.83); d 3.5 -> (-2.1, -0.92, 0.70); d 4.0 -> (-1.65, -1.02, 0.58).
big left coin (0.198, 0.602): d 4.5 -> (-1.05, 0.87, 1.16); d 5.0 -> (-0.55, 0.98, 1.11).
small left coin (0.152, 0.471): d 4.6 -> (-1.0, 1.03, 1.94); d 5.5 -> (-0.1, 1.26, 2.01).
gem (0.326, 0.511): d 6.0 -> (0.5, 0.73, 1.74); d 7.0 -> (1.5, 0.88, 1.76).
Lane spacing 0.7 m (laneX = (1 - lane) * 0.7), pick-up within 0.82 m of the body (BODY_R 0.4 + 0.42), body 0.34 m above the water.

Measured after the camera (`frames/focus_seam`, objects.py; original in brackets): lower-right coin (0.751, 0.723) w 0.241
[(0.893, 0.733) w 0.219]; big left coin (0.195, 0.608) w 0.198 [(0.198, 0.602) w 0.211]; small left coin (0.158, 0.484) w 0.112
[(0.152, 0.471) w 0.123], partly behind the left brush; gem (0.310, 0.511) h 0.045 [(0.326, 0.511) h 0.033]; centre coin (0.540,
0.570) w 0.140 [(0.520, 0.554) w 0.100]. Brush silhouettes (hide probe diff): left x 0-0.23, y 0.27-0.50, 3.96% [x 0.01-0.20, y
0.233-0.415, 2.0%]; right x 0.74-1.0, y 0.40-0.67, 4.86% [about x 0.79-1.0, y 0.40-0.62]. Sock x 0.59-0.73 [x 0.66-0.84, y 0.555-0.705].

More picks (probe2): left brush centre (0.06, 0.325): d 4.6 -> (u -1.2, x 1.25, h 2.78) = deco radius 1.79, angle 45.7; d 4.95 ->
(-0.85, 1.36, 2.87) = 1.93, 45.2. Right brush (0.93, 0.51) d 5.29 -> (-0.3, -1.47, 1.72) = 1.49, 8.5. Sock origin (0.81, 0.62): d 4.0
-> (-1.5, -0.85, 1.12); d 4.4 -> (-1.1, -0.91, 1.07); d 4.77 -> (-0.75, -0.98, 1.03). Small coin (0.152, 0.471) d 4.6 -> (-1.0, 1.03,
1.94). Gem (0.326, 0.511) d 7.3 -> (1.8, 0.92, 1.77). Lower-right coin (0.893, 0.733) d 3.9 -> (-1.75, -1.0, 0.6) = lane 2.43.
(Layout u = track u + 3.9; deco radius/angle round the axis at h 1.5.)
