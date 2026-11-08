# Screen 09 "Avoid Enemies!" background: passes 17 and 18 (8 November 2026, session bb87ba9f). OPT-IN (`scene07`), NOT APPROVED

Target (the user's correction): ONLY the user's LEFT screenshot =
`Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/00_AUTHENTIC_APPROVED_SCREEN09.png` (frame:
`77_scene07_pass15_upper/frames/original_master_frame.png`). Packs and the six-zone map: `Design/ReferencePacks/2026-11-08_Avoid_Enemies_Background_Pack_from_user/`,
`Design/ReferencePacks/2026-11-08_Avoid_Enemies_3D_Reconstruction_Map_from_user/`. Not the Classic blue tunnel.
Mandate: BACKGROUND SCENERY ONLY, real three.js geometry; the mascot, water, enemies, HUD, camera, controls, collectibles and progression unchanged.
Full app: `index.html?s3=intunnel,structmatch,home,level1,tripo1,scene07` (checkpoint u 229.5, centre lane, 412 x 915).
Switches: `,nobuild18` = pass 17c; `,norecon17` = pass 16 v5 (bundle a359dad4). Code: `WebDemo/src/scene07_build18.js` (pass 18),
`WebDemo/src/scene07_recon17.js` (pass 17), hooks in `WebDemo/src/tripo_l1.js` (gated on `BUILD18_ON` / `RECON17_ON`); small neutral hooks in
`scene07_recon16.js` (exports; `RECON16.gear.hide`, `RECON16.ledgeTex`; FAR16 opt-in `,far16`).

## The six zones of the user's map -> what existed -> what was built (pass 18, real 3D)
| Zone | Existed (v5 / pass 17) | Missing (approved image) | Built (scene group, switch) |
|---|---|---|---|
| 1 Left washer portal | pink torus rim, gold bands, lilac interior, paw bubble (pass 16) | the drum as a machine: a long lavender-silver drum body running back toward the channel, gold bands, bolts, the green-topped machine on its far end | `scene07_b18_housing` (`,nohousing18`): drum body 1.5 m long (R 1.25), three gold bands, 18 bolts, layered gold / lilac rings, 16 rim studs, a pipe up, the green-topped machine (pink tank, mint dome) on its end. (18a's rectangular housing slab was REVERTED: it buried the porthole) |
| 2 Upper-right cobalt gear | one gear, pale lavender, mostly under the banner | a deep cobalt toothed gear assembly | `scene07_b18_gear` (`,nogear18`): main gear R 1.0 + two meshing gears, lilac frills, blue rings, hubs, backing plate with bolts, axle housing; camera-facing; placed right of the game's lowered banner |
| 3 Deep machine interior | columns, gantries, cabinet rows, far machine wall | dense small machinery receding to the vanishing point | `scene07_b18_dense` (`,nodense18`): 379 parts / 818 instances: pipe runs with joints and valve wheels, longitudinal pipes, small gears, lamp fixtures with warm / cool bulbs, angled hatches, canisters on the rows' tops, a hanging cluster before the far wall (above 4.4 m); no ceiling ribs |
| 4 Left rail / ledge | flat counter front (banded texture, portholes, pass 17) | a curved layered catwalk with railings and ornaments | `scene07_b18_rail` (`,norail18`): a lower step tier with its own gold lips, front piping on brackets, ornamental lamps, a gold railing with glowing finials (skipping the drum) |
| 5 Right pink machine wall | a 1 m pink star tub with a cream rim | a bulging decorated pink cabinet with piping and lights | `scene07_b18_wall` (`,nowall18`): a convex bulge band with gold lines, gold-framed panels, vertical pipes, 21 rim lights, a taller stepped back tier (pink panels, gold bands, glowing roundels), its rim and rail, tanks and a pipe on top |
| 6 Decorative depth | 48 bank bubbles, 520 glints | gold accents, bubbles, sparkle, warm / cool light | `scene07_b18_deco` (`,nodeco18`): 8 gold paw medallions MOUNTED on backing plates (never floating like the collectible coins; all on walls / the bridge), 64 bubble clusters (192 instances), 82 warm / cool lamp glows, 960 sparkle glints |
Pass 17 (also in the candidate): receding cabinet rows with light conduits (ROWS17), the far end wall covered with real machine fronts + jambs +
a bridge, FAR16's projected master pixels removed (FAR17), the level tube's rings and hoops beyond the portal kept out of view while in this stretch
(they are not in the approved image), jewel-tone materials (JEWEL17), the counter's banded front; WATER17 opt-in only (the user forbids water changes).
