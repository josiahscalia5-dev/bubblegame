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
