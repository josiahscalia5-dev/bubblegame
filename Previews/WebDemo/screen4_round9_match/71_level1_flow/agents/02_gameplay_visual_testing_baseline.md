# gameplay-visual-testing: baseline of the current Level 1 (frozen bundle a62848a0)

Session b0abcf95, 8 November 2026.

The baseline is done: the current Level 1 runs from Tap to Start to Level Complete without errors, but the side path and the lower path (beats 03 and 04) are missing.

**Tools used (all exit 0):** `tools/level1/l1_run.cjs`, a copy of `tools/screen3/s3_func.cjs` with the viewport set to 412 x 915 (its built-in size is 700 x 1076), `ccr_branch_verification_2026-11-08/scripts/abilities_probe.cjs`, `tools/level1/cost_probe.cjs`, and a new scratch probe of mine, `hit_probe.cjs`.

Everything ran on the frozen snapshot only (bundle md5 a62848a0…), with `S3=intunnel,structmatch,level1`, seed 7, all browsers under the shared lock. The `home` opening was not run.

## 1. Seeded frames (AUTO=1, 412 x 915)

| Frame (game s) | u (m) | Section | Socks | Coins | Hearts |
|---|---|---|---|---|---|
| Tap to Start | 1.59 | Washer drum | 0 | 1280 | 5 |
| 3 | 22.16 | Washer drum | 0 | 1290 | 5 |
| 8 | 58.05 | Spinning brushes | 1 | 1307 | 5 |
| 15 | 107.05 | Treasure run | 2 | 1321 | 5 |
| 22 (in the air) | 156.05 | Soap bars | 3 | 1336 | 5 |
| 28 | 202.73 | The drop | 4 | 1346 | 5 |
| 34 | 244.75 | Grime balls | 4 | 1355 | 5 |
| 40 | 287.08 | Bubble Kingdom | 5 | 1368 | 5 |
| 46 | 332.41 | Bubble Kingdom | 6 | 1371 | 5 |
| 52, Level Complete | 341.74 | Bubble Kingdom (complete) | 6 | 1371 | 5 |

- The finish (u 340) is reached at about 47 s. The frames at 58, 64 and 70 s showed the same state as 52 s, so I did not keep them.
- No console errors or warnings.
- One thing seen, not measured: in the 22 s jump frame a flat pale-lavender band crosses the lower screen under her (y about 765 to 830 of 915).

## 2. Functional checks

**`s3_func` (412 x 915): PASS except one swipe.**
- Tap starts the run (`running`); keyboard Enter starts it too; 0 console errors.
- Two right swipes put her in lane 2; the up swipe sets `air: true`.
- By z 40.96 she has collected 13 coins and 1 sock.
- **The left swipe did not show a lane change:** lane 1 before and after, at z 8.588. The earlier proof `70_level1_wet/proofs/s3_func_level1.txt` has the same numbers, so this is not new. Its cause is not established.
- Cost from this run: 222 draw calls / 2,815,453 triangles at Tap to Start; 116 / 2,506,144 in the tunnel.

**`abilities_probe`: PASS.** Pause opens its panel and freezes time, and the game runs again after Resume. Bubble Blast count 3 → 2; Turbo Spin 3 → 2 (speed 8.45); 0 errors.

**`hit_probe` (my addition), letting her hit things instead of avoiding them:**

| What she hit | Where | Hearts | Speed |
|---|---|---|---|
| Brush | u 63.46 | 5 → 4 | 7.00 → 4.30 |
| Brush | u 70.61 | 4 → 3 | 6.78 → 4.20 |
| Soap bar (no jump) | u 145.73 | 3 → 2 | 7.00 → 3.85 |
| Soap bar (no jump) | u 155.64 | 2 → 1 | 6.90 → 3.81 |
| Grime ball | u 209.21 | 1 → 0 | 7.01 → 4.30 |

With 0 hearts the run went back to Tap to Start (u 1.59, socks 0) about 1.4 s later.

## 3. Draw calls and triangles (`cost_probe`, 412 x 915)

| Moment | u (m) | Draw calls | Triangles |
|---|---|---|---|
| Tap to Start | 1.59 | 222 | 2,816,420 |
| 3 s | 22.16 | 167 | 2,711,064 |
| 20 s | 142.05 | 105 | 1,817,797 |
| 38 s | 272.75 | 154 | 2,340,692 |

## 4. The user's 10 beats

| Beat | Status | Evidence |
|---|---|---|
| 01 Washer entry | PARTLY | The run starts inside the tunnel with the mission shown (Tap to Start frame, u 1.59). The girl / porthole entry needs `,home` and was not tested. |
| 02 Sock goal 0/5 shown | WORKS | "Rescue 5 lost socks 0/5" on the HUD at Tap to Start and at 3 s. |
| 03 Jump to raised side path | MISSING | The level is one 3-lane path. The only jumps are over two soap bars (u 146, 156) in the same lanes (22 s frame: in the air at u 156.05). |
| 04 Drop to a lower path | MISSING | "The drop" (u 166–203) is a downhill slope on the same path (`COURSE.pitch`, about −0.42 rad over u 172–190). The banner says "Drop down to the lower path!" but there is no second path (28 s frame). |
| 05 Spinning brushes | WORKS | 11 brushes (u 52–132), and hitting one costs a heart and speed (table above); 8 s frame. |
| 06 Coins, gems, socks | WORKS | Coins +91 (1280 → 1371), 6 socks picked up, HUD gems 36 → 38. The level places 114 coins, 2 gems and 5 socks (plus the Screen 4 drum's own items). The Level Complete card shows gem 1/1. |
| 07 Enemies that affect gameplay | WORKS | 6 grime balls roll toward her (28 s frame). A hit takes a heart and speed (u 209.21); 0 hearts resets the run. |
| 08 Bubble Kingdom inside a wet chamber | PARTLY | The chamber widens over u 266–292 (40 s and 46 s frames). The castle is only seen through a portal in the end wall at u 360, past the finish (u 340), so she never enters the kingdom. |
| 09 Rescue progress to 5/5 | WORKS | 1/5 at 8 s, 2/5 at 15 s, 3/5 at 22 s, 4/5 at 28–34 s, 5/5 at 40 s (u 287). There are 6 sock pickups (the count reaches 6) and the HUD stops at 5/5; no resets along the way. |
| 10 Level Complete with rewards | PARTLY | The card appears after u 341.74 with 3 stars, socks 5/5, coins 91, gem 1/1. But it only has "Play again" and says "Level 2 (Soap Lagoon) is not built yet": no Next Level button and no reward beyond these counts. |

Everything is in `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/71_level1_flow/baseline/`:
- `frames/` (10 jpgs and `states.json`)
- `contact_sheet.jpg`
- `s3_func.txt`, `abilities_probe.txt`, `hit_probe.txt`, `cost.txt`
- `scripts/` (`s3_func_412.cjs`, `hit_probe.cjs`)