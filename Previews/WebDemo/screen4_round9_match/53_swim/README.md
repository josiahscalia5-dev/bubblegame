# Screen 4 candidate `?s3=intunnel,swim` (6 November 2026, sixteenth session): NOT merged, for the user's review

The one isolated candidate built from the engineering diagnosis (`../52_diagnosis/README.md`) for the user's two goals,
VISUAL MATCHING and NATURAL SWIMMING. The ORIGINAL approved Screen 4 is the only target. The accepted `?s3=intunnel`,
R7-R9 and the normal game are unchanged: 0 pixels differ against the previous bundle (below).

## What it changes (code: `WebDemo/src/tunnel_s4_swim.js`, all gated on `SWIM_ON`)

1. **No travelling pad.** `heroSwell`, the 1.9 m mound locked to her whose face was a still picture of the original's foam
   (the diagnosed cause), becomes a tight contact collar on her waterline:
   - the crest ellipse 0.47 m sideways and 0.40 m toward the camera (was 0.95 / 0.55), the outer face 0.16 m (was 0.34);
   - the crest heights solved through the real start camera so that her waterline lands on the ORIGINAL's own outline
     of her (`scripts/solve_collar.py`, `solve/frame_start.json` from `tools/screen4/frame_dump.cjs`);
   - it sinks into the floor behind her widest point;
   - applied in `buildHeroWater` (`tunnel_r7_hero_water.js`) before the swell and the layers that follow its crest are
     built. The same mesh and draw call.
2. **Its water flows.** The picture is gone (no water2-9).
   - The collar is clear blue water (`swimCollarGLSL`, the last step of the swell's Round 9 shading in
     `tunnel_r9_match_water.js`): cobalt where its surface turns from the light, azure, turquoise currents streaming
     down its face and out along the crest at about her speed.
   - It carries large irregular rounded water shapes: clear bulges with turquoise sheens, pale rims and white glints.
   - Small clear bubbles and a sparkling, broken waterline (small white specks, a thin froth line, never a cushion).
   - It is 74-90 % opaque: her lower body shows faintly violet through it (the original's lavender at her base).
   - Nearly clear beside her body, so it reads as water climbing her sides, not a container. Its foot is the floor's
     own water.
3. **The wake.** The floor's existing V wake, the ring round her, the landing rings and the game's ripples (`lqFloor`'s
   `lqWake`, until now hidden under the pad) are coloured (`swimWakeGLSL` in `tunnel_r8_liquid.js`):
   - turquoise-lit crests, deeper cobalt churned water inside the V, a few small white flecks close to her;
   - anchored in the water, fading over about 2.5 m.
4. **Swimming** (visual only; her gameplay state is untouched, proved below).
   - **The collar's base** follows the water surface under her, not her bob. It piles up on the side she swerves to
     (0.14 per m/s, was 0.05), flattens in the air (to 8 %, was 45 %) and is thrown up on landing (25 %, was 12 %).
   - **Her model** (`swimPose`, `game.js` `updateMascot`) gets a calmer 1.2 Hz swim bob of +/-3.5 cm in place of the
     visible 1.7 Hz +/-5 cm one, a +/-3 deg pitch rock, a +/-2 deg side sway and a 1.5 % breath. The phase is set so
     that the start frame's pose is the accepted one. Her lean, yaw, somersault and squash are the game's own,
     unchanged.
5. **Spray:** R7's cap, every droplet at most 12 px of the 1536-px canvas.

## How it was reached (each look checked by eye at the start and +1 s before going on; all in `frames/`)

| look | what it was | verdict |
|---|---|---|
| c1 | the collar shaded as smooth flowing water | a ribbed blue bucket round her: a water wall |
| c2 | its face broken into opaque rounded lobes | a quilted blue basket (the old "cobblestones") |
| c3 | the lobes as clear water, her fur seen through | a glass jar: its sides stood as walls |
| c4 | clear beside her body | her whole lower body a big plain violet blob |
| c5 | reflective water (74-90 % opaque), sparkling waterline | the first that reads as water round her |
| final | c5 with more glints and specks | the candidate |

## Results against the criteria of `../52_diagnosis/README.md`

(filled in below)
