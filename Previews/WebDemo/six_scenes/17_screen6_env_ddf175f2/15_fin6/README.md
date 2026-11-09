# fin6: the Screen 6 finishing pass (session ddf175f2, 9 November 2026). NOT approved: waiting for the user.

The user's direction: finish Screen 6 against the exact approved image by reusing / improving the models in the game and building missing
pieces in Blender / three.js; after each improvement capture 864x1536 at u 206 and fix the biggest remaining difference. Reversible: the
switch `fin6` (with s56 ... arch56,env6,tank6). Candidate:
`?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,coin6,hero6,water6,brush6,arch56,env6,tank6,fin6`
(`,nocrown6` = without the splash crown).

| Step | What (all measured on the frozen u 206 frame against the approved image) | Evidence |
|---|---|---|
| A | Left bank: the procedural lavender station (control box: rounded glossy body, violet screen, two big glowing bulbs with halos, three blue lights, glowing teal / yellow panel lights; railing; pink cabinet with the gold paw medallion) instead of the 911 / 912 housings. Brushes: the second tier WHITE, rounder tufts. A final grade (vibrance, exposure 0.72). Tanks: linear HDR measured (the tank region averaged (1.63, 0.72, 1.94): above white, flattened to lilac): darker violet body, small white-hot core | `SBS_A_*`, `A0_*`, `A1_*`, `A2_*` |
| B | Tank pedestals lavender (pink share left bank 28 % -> 23 %, approved 17 %), hotter yellow-white capsule lamps and ceiling bulb, larger tank cores (hot-white 8 -> 11 % left, 4 -> 7 % right; approved 17 / 16), icy far haze | `B_sheet.png` |
| C | Hot-pink deepen for bright pinks only: the hero #f649c6 L0.63 -> ~L0.55 (approved #f0159b L0.51); other pinks untouched. Hero sink / stretch variants tested: not better, kept | `SBS_C_*`, `C1_*`, `C2_*` |
| D | The white splash crown round him (s56_crown6.js: 84 camera-facing spray blades, tallest at his sides, and a foam ring at his water line; only while running) | `SBS_D_*`, `D0_*`, `D1_*` |
| E | Gameplay: the Level 1 route with fin6 = the baseline (Level Complete, 5 socks, 125 coins, 2 gems, 3 stars, 4 hearts, 2 pops, 11 swipes, 0 console errors); the crown was visible on Level Complete in the first run: fixed (only while running) | `E_gameplay_route_frames.png`, `route_fin6.json` |

Proofs after every step: the plain launch's 3D canvas 0 px changed at u 206; Classic Screen 4 (`?s3=intunnel`) 0 px.

Remaining (honest): the hero's model is a squat body (a mound, not the approved round dome; changing it would touch the shared mascot);
his fur speckled vs the approved soft radial fur; the gear hidden behind the gameplay coin arc at u 206; the tunnel curves at u 206, so the
approved straight vanishing point cannot show; the walls lighter than the approved (L 0.55 vs 0.51) with smaller holes; the left brush streaky.
