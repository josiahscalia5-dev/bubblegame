# 72: `tripo1`, board 09's grime ball as a Tripo model (8 November 2026, session 57091b57, branch `ccr-b67aeffb-d94mmq`)

**NOT accepted; waiting for the user.** Opt-in on top of Level 1: `index.html?s3=intunnel,structmatch,home,level1,tripo1`.
Without `tripo1` nothing changes (proofs below).

## What it is
The grime-ball enemies (board 07 "Avoid Enemies!", the ball itself from board panel 09) drawn with a Tripo P2 model made from the ORIGINAL
board's own crop, in place of the code-built ball (a faceted dark ball with box eyebrows). Looks only: `WebDemo/src/tripo_l1.js` hides the
code meshes of each `l1Enemy` and puts the model in the same `body` group after `buildLevel1()`, so the patrol, the bob, the wobble, the
hit box (`hw`), the pops and the knocks are level1.js's own, untouched. Model: `WebDemo/models/l1_enemy_tripo.glb` (429 KB, 4,903
triangles, textures 1024 / 512 / 512 px, glTF Validator 0 errors). Its jobs, inputs, credits and the rejected castle:
`Design/TripoDeliveries/2026-11-08_session_57091b57_Level1_assets/README.md`.

## Side by side (real gameplay, seed 7, 412 x 915 phone frame, the upper route, same course positions)
`01_side_by_side_board07_before_tripo1.jpg`: the original board 07 crop, then u 230 and u 236 before / with `tripo1`. Frames:
`frames/base/`, `frames/tripo1/` (u 214, 222, 230, 236, 240), captured with `WebDemo/tools/level1/flow_routes.cjs` (ROUTE=upper).

| | Before (code ball) | `tripo1` |
|---|---|---|
| Body | dark, rough, spiky lump | glossy navy-cobalt ball (base colour mean RGB 39 77 156; the board's ball 33 71 155) |
| Face | tiny white eyes, red dots, box brows | the board's angry pink eyes, heavy dark brows and pink mouth shape |
| Read at phone size | a dark dot | a recognizable character, as on the board |

**Still different from the board:** board 07's enemy floats larger, mid-screen above the water; the game's balls sit on the water in their
lanes, two side by side. That is placement in `level1.js` (session `b0abcf95`'s file), not the model; not changed here.

## Proofs
- **Gameplay unchanged** (`proofs/route_upper_base.json.log`, `proofs/route_upper_tripo1.json.log`): the same route with and without
  `tripo1` gives the identical event log and identical states at every frame (position, lane, route, socks, coins, gems, hearts, enemies
  popped, phase). Only the renderer's resource counts differ: 36 fewer geometries (the hidden code eyes, pupils and brows are never
  uploaded) and 3 more textures (the model's). No console errors in either run.
- **Older looks pixel-identical** (`proofs/identity.txt`, `scripts/identity.sh`): `layer_diag.cjs` WebGL canvases of the previous build
  (bundle `e97a4d3b`, `ccr-50c66592-kcnqoy` at `fc57eba2`) against this one (`aa85e7ac`) WITHOUT `tripo1`.
- The project restores: `npm ci` + `node build.mjs` rebuilt `e97a4d3b` byte-identical before any change.
