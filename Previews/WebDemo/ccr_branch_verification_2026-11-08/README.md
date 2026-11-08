# Verification of branch `ccr-76d4bc77-rqhl8o` (8 November 2026, session `8140e507`, at the user's order)

The user's order: prove that the game runs from THIS branch, that the rigged Tripo girl and her animation are in the build and
work in the real mobile game, that the opening hands over into the playable tunnel, and that the gameplay still works.

## What was tested (exactly)
| | |
|---|---|
| Branch | `ccr-76d4bc77-rqhl8o` (GitHub; read with `git ls-remote` AND the GitHub API: the same SHA) |
| Remote commit | **`7e5dd685cc541be0ea614d0ca0dd9dd0ccd7a77c`** (02:56 UTC; its last code commit is `890167c`, the course culled and the Tripo girl rigged; the two after it are chat history and proof notes) |
| How | `git archive 7e5dd685... WebDemo` into a scratch folder: the branch's OWN files, not this session's working tree (this session's own branch carries its Screen 4 mascot work, which is NOT in what was tested here) |
| Build | `WebDemo/game.bundle.js` md5 **`92bd9272a90407a75b64198e5a4c343b`**; rebuilt from the branch's own source with `node build.mjs`: byte-identical (`92bd9272`) |
| Switches | `?s3=intunnel,structmatch,home,level1` (the full app: Home, Laundry Toss, the washer entry, the run through Level 1); seed 7 |
| Viewport | Pixel 7, 412 x 915, mobile + touch, software WebGL (SwiftShader) |

## The Tripo girl in the real game (`scripts/girl_probe.cjs`; screenshots `girl_probe/`, numbers `girl_probe/probe.json`)
Measured inside the live three.js scene (scenes collected through three.js's own `__THREE_DEVTOOLS__` events) while a player's
clicks drive the opening (START on Home, START on Laundry Toss), stepped at 30 frames per second:
- her model `models/opening/girl_rigged.glb` was requested and served (HTTP 200); in the scene: one SkinnedMesh (the Tripo mesh,
  13,274 vertices) on **17 bones** (hips, spine, chest, neck, head, shoulders, upper arms, forearms, hands, thighs, shins);
- **she moves**: her head bone turns all through (world quaternion y 0.169 -> 0.203 waiting, -> 0.393 by the end); her hands follow
  the basket and her left hand rises from 1.02 m to 1.43 m for the wave after the toss;
- **she blinks**: eyelids closed (scale 1.05) at waiting time 2.76 s; half-closed (0.72) at 0.6 s and 3.0 s of the toss; open
  (hidden) elsewhere;
- **she lifts and tips the basket and the laundry flies**: 5 laundry pieces appear at 0.6 s, fly (e.g. one from (0.03, 1.58, 0.21)
  to (0.30, 0.65, -1.04)) and are inside the washer by 3.0 s;
- **the pink mascot enters the washer**: on the basket (y 1.23), thrown (0.6 s: y 1.53), at the door rim (2.4 s: z 0.10), pulled
  in (3.0 s: z -0.99; 3.6 s: z -2.06), down onto the water inside (4.4 s: z -2.53);
- **the camera goes through the door into the tunnel**: z 4.0 -> 3.88 -> 3.22 -> 2.77 -> 1.86 -> 1.09 -> 0.02 -> -1.08; the girl is
  hidden once the camera is inside (3.6 s);
- **the hand-over into the playable game**: Tap to Start (phase `intro`, 5 hearts, 1,280 coins); after a tap, a left swipe and 3 s:
  phase `running`, speed 5.56, coins 1,286, gems 37, hearts 4 (one knock).
- Console: no errors; 3 WebGL warnings ("glTexStorage2D: Texture is immutable", software renderer).
Contact sheet: `girl_probe_contact_sheet.jpg`.

## Gameplay tests on the same export (`scripts/gameplay.sh`, the old session's own tests; `proofs/`, `motion/`)
| Test | Candidate `?s3=intunnel,structmatch` | With `level1` | Against the old session's own run (`68_level1/proofs/`) |
|---|---|---|---|
| `s3_func` (the gameplay functions) | exit 0 | exit 0 | candidate output identical; the comparison differs only in draw calls: 222 with level1 against 211 (the old file still had 322, from before the course was culled) |
| `r2_func` (hearts: 5 knocks to 0, restart to "5 Full", pause visible) | hearts test passed; exit 1 from a later page load over its 5-minute limit | the same | identical output AND the same timeout in the old session's run: a harness limit on the busy software renderer, not a game fault |
| `r2_func` rerun on the idle machine (`proofs/r2_func_level1_rerun_unloaded.*`) | - | hearts test passed again; the same hang at its second page load (a same-page reload after the hearts test never reaches `domcontentloaded`) | the harness, not the game |
| `scripts/abilities_probe.cjs` (r2_func's skipped sections, on a fresh page) | - | Pause: panel shown, time frozen, runs after Resume; Bubble Blast 3 -> 2; Turbo Spin 3 -> 2, speed 8.45; 0 errors | (tap-to-spin is not exposed by the game state, so not measured here) |
| motion trace (seeded swipes and a jump) | exit 0 | exit 0 | **152 frames x 17 gameplay fields (lanes, steering, jump, speed, hearts, coins, gems, socks, knocks, camera): 0 differences** between the two |

## Video
**`videos/ccr_7e5dd68_opening_girl_level1_pixel7.mp4`** (24 s, 412 x 916, 480 frames, `videos/record_log.json`; contact sheet
`videos/ccr_7e5dd68_contact_sheet.jpg`): the opening ends at frame 183 (9.2 s); then the run through the Washer drum, the Spinning
brushes and the Treasure run, steered by real swipes; final state running, coins 1,328 (+48), socks 4, hearts 5, knocks 0, gems 37;
0 errors. Recorded with the old session's own `WebDemo/tools/level1/record_full.cjs`
from the export (seed 7, 20 frames per game second, Pixel 7 412 x 915, RUN=14: Home, Laundry Toss with the girl animating, START,
the toss, the washer entry, Tap to Start, then 14 s of the run steered by real swipes).
