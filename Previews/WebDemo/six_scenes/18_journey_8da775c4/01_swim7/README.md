# swim7: natural swimming controls (9 November 2026, session 8da775c4). NOT approved: waiting for the user's review.

Switch: add `,swim7` to the Screen 6 candidate list (`?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,coin6,hero6,water6,brush6,arch56,env6,tank6,fin6,hero7,swim7`).
Without it the game is unchanged (identity proof below). Code: `WebDemo/src/swim7.js` (all numbers, live in `window.__bwSwim7`), hooks in
`game.js`, `level1.js`, `level1_flow.js`.

| Control | Before | With swim7 |
|---|---|---|
| swipe left / right | lane change, 0.18 s ease | the same three lanes, swum over 0.24 s with a turn and bank into the move |
| swipe up | JUMP out of the water | a forward SWIM BURST: speed x1.42 at the peak for 0.95 s, drawn as a dip-and-surge stroke with a wake kick; the camera opens 4.5 degrees |
| swipe down | nothing | a DIVE under the surface for 0.85 s: grime balls and soap bars pass over him; bubbles trail, a low splash when he surfaces |
| raised side path | bounce pad, then swipe in the air | a WATER RAMP: its water rises out of the main water over 8 m; he swims onto its foot with a swipe left (u 46-54.5) and is carried up |
| soap bars on the ledges | jumped | dived under |
| pace | 7 m/s | the current carries him at 0.92 x 7 = 6.4 m/s with no input (`SWIM7.speed`, or `&swimspeed=0.8 ... 1.2` in the address) |

Jumping stays in the code for every other switch and for the Level Complete hop; with swim7 no gesture jumps. Keys: arrows / WASD (up = burst, down = dive).

## Tests (real game, seeded, headless Chromium, software WebGL)
- `routes/route_*.json` (`WebDemo/tools/level1/flow_routes.cjs`, 432x768): four routes, every one reaches Level Complete with 0 console errors.

| Route | Socks | Coins | Gems | Stars | Hearts left | Notes |
|---|---|---|---|---|---|---|
| upper (water ramp, side path, lower path) | 5 | 122 | 3 | 3 | 5 | 5 swim bursts |
| ledge (upper ledge, its soap bar dived under) | 5 | 100 | 2 | 3 | 3 | the autopilot was knocked by a brush and a grime ball |
| dive (ledge route, grime balls dived under) | 5 | 95 | 2 | 3 | 4 | 4 dives: 1 soap bar, 3 grime balls, none hit him |
| blocked (forbidden moves) | 5 | 118 | 2 | 3 | 4 | onto the side path past the ramp's foot: refused; lower path back up to a ledge: refused |
| baseline before swim7 (upper, with jumps) | 5 | 125 | 2 | 3 | 4 | `route_baseline_before_swim7_upper.json` |

- Six socks are out with swim7 (the drum's first one is 1.6 m from the start line; the nearer parked drum sock is back); the HUD and the goal count five.
- Motion frames (432x768): `motion_swim_burst_swipe_up.jpg` (before, +0.12, 0.3, 0.5, 0.75, 1.0 s; speed 6.5 -> 8.0 m/s), `motion_dive_swipe_down.jpg`
  (under the surface from 0.3 to 0.65 s), `motion_steer_swipe_right.jpg`, `water_ramp_onto_side_path_u48-62.jpg`.
- Identity (`WebDemo/tools/journey/identity.sh b49a16e`, raw WebGL canvas, old bundle 5ab6ee34 vs the swim7 build, lists WITHOUT swim7):
  `identity_classic_plain_candidate.txt`: Classic Screen 4, the plain launch and the Screen 6 candidate are all 0 pixels different.

## Not done / to judge
- The burst's strength, the dive's length and the pace are first values: tune them on a phone (`window.__bwSwim7`).
- With the ramp the bounce pad is not built; the pad build is unchanged without swim7.
