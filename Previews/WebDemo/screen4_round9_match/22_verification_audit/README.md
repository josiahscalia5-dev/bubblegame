# Screen 4 verification audit (tenth session, 5 November 2026, about 22:30 UTC)

The user asked for a verification audit before any more visual work: no agents, no new comparison framework, no
changes to the game. Everything here was made with the existing tools. The game, its switches and all saved work are
unchanged; this folder only adds evidence.

## 1. What the user has been watching, and what the branch holds

- **The phone video sent this session** (`16_phone_video_into_the_machine/pixel7_preview_into_the_machine_10s.mp4`):
  - recorded 20:48-21:11 UTC from the build committed then, `edf84f5` (bundle `3e7fc194...`), switch `?s3=match`
    (identified from its frames: the upright sock and the smaller character are `edf84f5`'s);
  - included Water & VFX's main focused pass (`b0e1f07`) but NOT Tunnel & Lighting's focused pass or Water & VFX's
    follow-up (both still in their worktrees then), and none of the `focus` line;
  - its script steers left at 0.8 s after the tap and right at 1.6 and 2.3 s, so at the 3.0 s hero moment the character is in
    the right lane and the camera has swung (`frames/phone_video_edf84f5_match_game5.0s.png`). It never shows the approved
    composition.
- **The branch now:** `ccr-9f8e2c8d-0zg3mc` at `7414b62` (game code as merged in `a276c38`, bundle md5
  `e94124846f2472829a817576d3e5aceb`). It holds two Round 9 test versions:
  - `?s3=focus`: the eighth and ninth sessions' line, with Tunnel & Lighting's and Water & VFX's latest focus passes (line B's
    `a78a143` and `5462f30`, merged there as `b2a5b6e`);
  - `?s3=match`: the seventh session's line, with Tunnel & Lighting's focused pass and Water & VFX's follow-up (`68c8c40`).
- **The normal game (no `?s3` switch) contains NONE of the Screen 4 work** (`frames/none_t3.00.png`): the old tunnel, no
  mission banner, no power buttons. Every Round 4-9 change is gated behind a test switch so that the normal game stays
  pixel-identical (`CLAUDE.md`). Any preview or APK opened without the switch shows the old game. The Android preview APK
  (5 November, about 02:50 UTC, bundle `1f045f85`) predates all Round 9 work.

## 2-4. The capture and the comparison (existing tools only)

- **Capture:** `WebDemo/tools/screen4/liquid_shots.cjs`.
  - Seed 7, the 1:2 game frame (538 x 1076 at DPR 1.5), Tap to Start then exactly 3.0 s, no steering, interface on.
  - `focus`, `match` and the normal game from this build (`frames/`), with no console errors.
  - The camera is the approved hero camera set up by each switch.
- **Same size:** `01_original_vs_focus_vs_match_vs_normal_3.00s_same_size.jpg` (every panel 767 x 1536).
  - `02_original_vs_phone_video_frame.jpg`: the video frame is resized from 824 x 1678, so it is 1.7% squashed.
- **Overlay** (`WebDemo/tools/screen4/match_overlay.py`): `overlay/original_over_{focus,match}_3.00s_{blend50,edges,diff}.png`.
  - Aligned on the vanishing points measured in the scene: `stage_probe.cjs`, `frames/probe_*.json`.
- **Automated comparison** (`WebDemo/tools/screen4/compare_s4.py`): `compare_s4/original_vs_match_focus_normal_3.00s.{png,md,json}`.
- **Measurements** (Tunnel & Lighting's and the Art Director's scripts, unchanged, `scripts/`): `measured.txt`.
- `03_five_differences_annotated_original_vs_focus.jpg`: the zones below, numbered.

Headline numbers (no overall similarity percentage is claimed):

| measure | original | focus | match | normal | tool |
|---|---|---|---|---|---|
| mean colour difference per pixel, play area (ΔE2000) | 0 | 13.3 | 14.0 | 26.9 | compare_s4 |
| structural similarity by region (SSIM) | 1 | 0.05-0.19 | 0.07-0.22 | 0.08-0.11 | compare_s4 |
| wall ring pattern correlation (aligned on the centre) | 1 | -0.05 (mirrored +0.11) | +0.03 | - | match_overlay |
| gold coins: place correlation | 1 | 0.96 | 0.97 | 0.00 | compare_s4 |
| character body box x / y | 0.212-0.732 / 0.694-0.865 | 0.234-0.712 / 0.695-0.855 | 0.158-0.801 / 0.699-0.888 | - | character.py |

So the COLOURS and the OBJECT PLACES are close; the STRUCTURE (the shapes of the rings, the water, the interface) is not.

## 5. The five largest remaining differences (for `focus`, the current line; `match` noted where different)

1. **Interface: size and layout** (zones 1 and 5).
   - In the original (read off the full-resolution images, about ±0.005):
     - the mission banner spans y 0.094-0.212, against ours 0.088-0.173 (1.4 times taller);
     - the top pills spread across the full width and run off the right edge, and the pause button is cut by the right
       edge;
     - the Bubble Blast and Turbo Spin buttons start at about y 0.90 and are cut off by the bottom edge;
     - no "Swipe to steer" panel shows.
   - Ours: the buttons start at y 0.83, and the hint panel sits between them at 0.89-0.98.
   - **Cause:** the original is a CROP of a taller, wider screen; our interface is a complete, playable screen.
   - **File:** `WebDemo/src/page.html` (CSS sized in `--u` units).
2. **Overall composition: the visible stage** (follows from 1).
   - The original's stage is visible from the banner's bottom (0.21, sitting right on the gold rim) to about 0.90: the splash
     bank and her lower body show.
   - Ours shows a lavender housing band (0.17-0.21) above the rim. The buttons and hint panel cover 0.83-1.0, where the
     original has its splash bank.
   - **Files:** `page.html` (interface); the hero camera in `WebDemo/src/tunnel_r9_focus.js` (`FOCUS.match.hero.round6.round5.camera`).
3. **Tunnel rings: pattern and structure** (zone 2).
   - The opening, the gold rim (top at y 0.206 against about 0.21) and the vanishing point are aligned.
   - The ring PATTERN is not: correlation about 0 (`match_overlay.py`). The bright bands (`rings.py`, upper sector) sit at r
     0.113 / 0.175 / 0.205 / 0.240 / 0.265 W in the original, against 0.135 / 0.225 / 0.255 / 0.295 in focus.
   - The original reads as thin, near-concentric saturated-blue rings with white flecks, a bright rainbow arc and a glowing
     core. focus reads as broad twisting cobalt ribbons (deep cobalt 6.8% against 3.9% on the upper wall). match's walls are
     paler and whiter (upper wall white 19% against 9%).
   - **Cause:** the rings are PROCEDURAL shader bands with their own spacing and flow (`MATCH.walls.bands` `perLog` 3.7, the
     focus ribbons). They are drawn over the texture derived from the original and replace its structure.
   - **Files:** `WebDemo/src/tunnel_r9_match.js` (`matchWallGLSL`, `MATCH.walls`), `tunnel_r9_focus.js` (`walls.ribbons`,
     `focusRibbonsGLSL`), `WebDemo/textures/screen4/` (derived by `WebDemo/tools/screen4/derive_ref5_water.py` /
     `derive_tunnel_textures.py`).
4. **Water and splash round the character** (zone 3).
   - The original has a dense white-and-aqua bubbly splash bank across the whole bottom, wrapping her base and sides over
     saturated blue water: swimmer zone white 20.6%, pale 16.9% (`zones.py`).
   - focus: a paler periwinkle rippled sheet (swimmer zone white 14.5%, pale 30.5%; foreground pale 32.5% against 24.9%).
   - match: grey-white rounded froth lumps.
   - **Files:** `WebDemo/src/tunnel_r9_match_water.js` (the swell, `focusSwellGLSL`, `focusLumpGLSL`, the floor),
     `tunnel_r8_splash.js`, `tunnel_r8_liquid.js`, settings `tunnel_r9_focus.js` `FOCUS.water`.
   - **A conflict for the user to settle:** the original itself has a lot of white splash there, but the 17:15 correction says
     "no thick white foam cushion".
5. **The character's look** (zone 4).
   - focus's PLACEMENT already matches: its body box is within 0.02 of the original's.
   - The look does not: the original is a saturated hot-pink, taller, rounder dome with small side tufts, its lower part in the
     splash. Ours is lighter pink (saturated pink 2.1% of the frame against 4.1%), with a flatter dome and larger tufts.
   - In match she is also too big: 0.64 W wide against 0.52, base 0.888 against 0.865.
   - **Files:** the model `WebDemo/models/mascot.glb` / `mascot_furshell.glb` (shape); its fur material in `WebDemo/src/game.js` (`mats.fur`,
     about line 883) (colour); the camera (placement).

Also: the sock's look (violet fuzzy toe, against the original's navy toe) is `models/sock.glb` plus a material. The overall
painterly glow and bokeh of the original (an AI painting) is a style gap that real-time rendering can only approximate.

## 6. What the existing game can fix, and what may need new assets

| difference | existing game (code and settings only) | may need new art or assets |
|---|---|---|
| 1-2 interface and visible stage | yes: `page.html`; larger banner and pills, buttons lower and smaller, the hint panel hidden during play. A playable screen cannot cut off its pause and power buttons as the crop does, so this gets close, not exact | no |
| 3 tunnel rings | yes: drive the bands from the original's measured ring radii and the derived texture instead of free procedural spacing (`tunnel_r9_match.js`) | no |
| 4 water and splash | yes: shaders and settings | no (after the user decides how much white) |
| 5 character placement | already done in focus | no |
| 5 character colour | yes: fur material | no |
| 5 character silhouette | partly: non-uniform scale of the model | a remodel (Blender or Tripo, which costs credits) only if scaling is not enough |
| sock look | yes: material and scale | possibly a texture |
| painterly glow | partly: colour grade and glow | it can never be exactly a painting in real-time 3D |
| the normal game showing none of it | yes: make the chosen switch the default (one line per switch list), with the user's approval | no |

## 7. One plan (proposed; nothing implemented)

See the chat message of 5 November about 22:35 UTC and `HANDOFF.md`.
