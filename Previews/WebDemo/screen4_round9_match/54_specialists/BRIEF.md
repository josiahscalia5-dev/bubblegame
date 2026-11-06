# Shared brief for the specialists (sixteenth session, 6 November 2026)

**The only visual target:** the ORIGINAL approved Screen 4,
`/workspace/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`
(767 x 1536).

**The game:** three.js r170, `/workspace/bubblegame/WebDemo/src`.
- The current water candidate the user rejected is R9: `?s3=intunnel,water9`.
- The accepted build is `?s3=intunnel`.
- Built with `cd WebDemo && node build.mjs`.

**The user's goals, equally important:**
1. **Visual accuracy:**
   - deep cobalt and turquoise water;
   - natural rounded waves;
   - a clean water-to-fur contact edge on the pink character.
2. **Playable swimming:** she must visibly travel THROUGH moving water during forward travel, left/right swipes, jumps
   and landings.

**Banned:**
- a white cloud behind her;
- glass-like water walls;
- a stationary water pedestal;
- large paper-like white streaks.

**Unchanged:** camera, HUD, collectibles, controls and gameplay. Every change goes behind a feature flag; the accepted
build stays byte-identical. Never touch the game's seeded `Math.random`.

**The established findings (start here; do not re-derive):**
- `Previews/WebDemo/screen4_round9_match/52_diagnosis/README.md`: same-frame layer ablations, motion trace, optical
  flow.
- `heroSwell` (`tunnel_r7_hero_water.js`) is a 1.9 m horseshoe mound built in HER frame and moved with her every frame.
  - It changes 73-76 % of the band's pixels at her base and covers 19-24 % of the frame (100 % of the width at 0.90 H).
  - Since water2, its face shows a STILL picture of the original's foam, pinned to her (`tunnel_s4_water2.js`: `uBwRef`
    captured once; proved live: identical at +0, +1 and +2 s while she travels 14 m).
  - So the water at her contact wobbles with her (optical-flow streaming 41-56 px/s against an oscillation of 153-162)
    instead of flowing past her.
  - It cuts her round silhouette flat.
- **The tunnel's water while moving: `r3Swirl` (`tunnel_r3.js:263-290`).**
  - A cyan-white swirl overlay, CustomBlending One / OneMinusSrcAlpha. Round 4 hid it once at build
    (`tunnel_r4.js:65`), but its own updater (`tunnel_r3.js:286`) shows it again every frame once she is inside the drum.
  - Measured in the tunnel zone (x 0.32-0.68, y 0.22-0.52) at +1 s, against the ORIGINAL: pale 23.0 % (original 8.3),
    saturation 0.46 (0.55), cobalt 10.8 (14.6), turquoise 5.5 (11.4).
  - With r3Swirl hidden: pale 11.6, saturation 0.54, cobalt 13.9, turquoise 8.7.
  - Lavender: 5 % against the original's 28.5 % (the walls alone 7.1). At the start frame R9 matches the original
    (lavender 29.4).
  - Table: `52_diagnosis/report/zone_water_T1.0.md`. Frames: `52_diagnosis/ablation/R9w_T1.0/abl_*.png`. Live A/B:
    `52_diagnosis/cdp/live_R9_T1.0_*.png`.
- **The "paper-scrap" white dashes on the floor: `focusFloorGLSL` (`tunnel_r9_match_water.js:329-355`).**
  - Rows of tapered white streaks, `#f6fbff` at 0.95.
  - Settings: `MATCH_WATER.floorFx`, `tunnel_r9_focus.js:278-279`.
  - It also turns the painted map's lilac pale blue on the floor (`delilac 1.0`).
  - The floor drawn alone: `52_diagnosis/ablation/R9w_T1.0/abl_31_soloFloor.png`.
- **Compiled GLSL of heroSwell, lqFloor, r3Swirl, heroWalls, spLumps and mwTunnelBubbles,** dumped from the live page
  through Chrome DevTools: `52_diagnosis/cdp/R9_T1.0_water_shaders.json`.
- **Bloom:** strength 0.16, radius 0.42, threshold 1.0. Neutral tone mapping, exposure 1.05; the grade pass after it.
- **Her motion (`game.js` `updateMascot`, about lines 970-1080):**
  - bob `sin(t * 1.7 * 2 pi) * 0.05` on her ride height, plus the water's own waves (+/-15 cm);
  - lean `clamp(-xv * 0.22, +/-0.45 rad)` (measured peaks -24 / +22 deg);
  - a full forward somersault per jump;
  - a squash on landing;
  - spray particles (white);
  - ripples into `uRipples`, used by `lqFloor`'s `lqWake` (V wake, ring, landing rings).
  - The camera follows 35 % of her bob and jumps.

**What already failed (do not repeat):**
- R2-R9: the still picture on the mound.
- Bubble domes, lobe banks and curling crests as separate objects (rejected as balloons, cobblestones and fins).
- This session's `?s3=intunnel,swim`: heroSwell as a tight collar (0.47 m) round her, clear water with lobes.
  - The art director's verdict: it reads as an object, "a frilled glass bowl on blue pillows", mid azure not cobalt;
    it lost the original's full-width spread.
  - The original's foreground in front of her is uneven rounded heaps: the tallest left of centre, x 180-330, top about
    y 1225; a lower one right, x 330-470, about y 1250. They spread sideways into froth across the whole width
    (y 1230-1450), with periwinkle-lavender glassy bodies, darker blue-violet cores, crisp white rims and white droplets
    between them.
  - Code: `WebDemo/src/tunnel_s4_swim.js`; evidence: `53_swim/README.md`.
  - Its MOTION parts measured well: a 1.2 Hz swim bob drawn on her model, 5.6 cm against the water; the collar's base on
    the water surface, not her bob; gameplay state identical frame by frame.

**Existing frames:**
- R9: `52_diagnosis/ablation/R9_start|T1.0|T2.0/base_canvas.png`.
- swim: `53_swim/frames/swim_start|T1.0/base_canvas.png`.
- Clips: `51_swim/videos/clip_R9.mp4` and `53_swim/videos/clip_swim.mp4`.

**Machine limits:**
- 4 CPU cores; do NOT start browsers, renders or Playwright (other jobs are running).
- Python with PIL, numpy and OpenCV: `~/.bubblewash-tools/visual/bin/python`.
