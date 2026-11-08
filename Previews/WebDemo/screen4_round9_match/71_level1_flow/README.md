# 71 Level 1 flow: the user's 10-beat gameplay blueprint as real gameplay (session `b0abcf95`, 8 November 2026)

**Status: a CANDIDATE, NOT accepted.** Waiting for the user's verdict. Nothing is merged into another branch; pull request #3 was not touched.

- Switch: `index.html?s3=intunnel,structmatch,home,level1` (the full app). `flow` is on by default with `level1`; `,noflow` draws the previous
  Level 1 exactly (proven below). The accepted `?s3=intunnel` and every older switch are unchanged (proven below).
- Branch: `ccr-50c66592-kcnqoy` (this session's own branch; it contains all of `claude/bubble-wash-kingdom-continue-z9nmm1` and
  `ccr-76d4bc77-rqhl8o`). Build tested here: `game.bundle.js` md5 `4d46f2d2ff79f276ff48113aae0d2d0d` (first pushed in autosave commit `dd84a4f`).
- The user's references: `Design/ReferencePacks/2026-11-08_Level1_Blueprint_and_Strict_Prompt_from_user/` (the strict prompt, the annotated
  10-panel blueprint, the generated preview, the original 12-screen board). Visual authority: the ORIGINAL approved Screen 4 only.

## What the player can do now, in the real three.js game (each tested by driving the game; numbers from `route_test_*.json`)

| Beat (board panel) | What is built | Tested result |
|---|---|---|
| 01 Washer entry | the existing opening is kept: Home, the rigged Tripo girl, the Laundry Toss, the mascot through the porthole, the camera into the tunnel; then "Let's go! Into the washing machine!" as the run starts | recording frames 0-190; banner in `frames/upper_route/upper_u003.5.jpg` |
| 02 Start swimming, rescue 5 lost socks | the sock panel 0/5; banner "Rescue 5 lost socks!" after the drum | 0/5 at Tap to Start, 1/5 at u 3, 2/5 at u 6.6 |
| 03 Jump to side paths | **a real raised side path**: a bounce pad in the left lane launches her; a left swipe in the air lands her on a golden-rimmed water flume 0.9 m above the main water (u 62-91) with its own coins, sock and gem; it ramps back into the main water. From the water she cannot get on ("Jump first!") | upper route: swipe at u 56.6, riding it at u 66-78 at lift 0.90, its sock at u 77.4 (3/5) and its gem; blocked route: the swipe from the water refused (lane 0 stays 0) |
| 04 Drop to a lower path | **a real lower path**: at u 112 the middle lane falls 1.2 m down a chute into a channel between gold-railed water walls; the side lanes stay up on ledges (each with a soap bar to jump and its own sock); from the lower path she cannot climb back ("Too high!"); from a ledge she can drop in; the routes rejoin at u 135 | upper route: lower path u 113.5-135, its sock at u 126.6; ledge route: on the left ledge at lift 1.25, bar jumped, its sock at u 123.5; blocked route: lower path -> ledge refused (lane 1 stays 1) |
| 05 Spinning brushes | the brush section moved to its board place (u 141-186); a brush in her lane knocks her (a heart, slowed, middle lane) | knocks logged at brushes in her lane (`route_test_*`), none when she dodges |
| 06 Coins, gems, socks | the treasure run (u 186-212), coin arcs and a gem | coins 110-130 per run (goal 50), gems 1-2 (goal 1) |
| 07 Avoid enemies | grime balls (board 07's bigger navy ball with pink eyes), some patrolling across lanes; a tap-spin, Turbo Spin or Bubble Blast pops one (+5 coins), otherwise it knocks her | 2-3 popped per run by tap-spins; one collision traced frame by frame (her in lane 2 meeting the lane-2 ball at u 241: heart lost, knocked to lane 1) |
| 08 Bubble Kingdom | the existing wet chamber (from session `8140e507`): the drum widens into one wet washer chamber with the castle seen through a glowing portal; never a dry road | banners and frames at u 258 and 285 |
| 09 Rescue progress | banners "3/5 socks rescued!", "4/5 ... The last one is in the Kingdom", "All 5 socks rescued!"; the last sock is in the chamber (u 304) | 5/5 at u 304 on every route |
| 10 Level Complete | the board's card: stars (one per goal met), the three goals (5 socks, 50 coins, 1 special gem), the rewards (+300 coins, +10 gems, +5 socks) added to the game's totals, "Play Level 1 again" | 3 stars, socks 5/5, coins 50/50, gem 1/1 on the upper, ledge and blocked routes; the coin total rises by 300 and gems by 10 |

**Exactly five lost socks on any route.** Before, the Screen 4 drum alone held five socks, so the goal was complete before Level 1 began
(the tester's baseline: 5/5 at u 287 with six pickups). Now the drum keeps its first two (the ones in the accepted picture); its three far
socks (u 21.8, 28.6, 33.0) are parked: kept in the game's list so its seeded random sequence is unchanged. Each branch has one sock on
each of its routes, and the last is in the Kingdom.

## Proofs that nothing older changed (WebGL canvas, seed 7, 768 x 1536; `proofs/identity.txt`, script `scripts/identity.sh`)
(pending)

## Route tests (`tools/level1/flow_routes.cjs`, seeded, 412 x 915, 0 console errors)
(pending)

## Performance (`tools/level1/cost_probe.cjs`: one real frame's WebGL draw calls and triangles, 412 x 915)
(pending)

## Side by side
- `sheets/00_board_vs_game_beats_1.jpg`, `..._2.jpg`: each original board panel (03-12) beside this build's real gameplay frames.
- `sheets/01_original_screen4_vs_level1_sections.jpg`: the ORIGINAL approved Screen 4 beside this build's Tap to Start and Level 1 sections.

## Recordings
(pending)

## What is still wrong or not done (honest)
(pending)

## The specialists (all five project agents ran in parallel, read-only, in separate assignments; reports in `agents/`)
| Agent | Task | Result |
|---|---|---|
| game-art-director | the current Level 1 against the board and the original Screen 4; art spec for the new pieces | `agents/01_...`: beats 03 missing, 04/08/10 partly; the lilac ceiling (64 % against 22 %), indigo course water, cut lines, odd objects; colours for flumes, chute, pad, HUD, card |
| gameplay-visual-testing | a baseline of the frozen previous build: seeded frames, s3_func, abilities, hits, cost | `agents/02_...`, `baseline/`: Level Complete at 47 s, 0 errors; beats 03, 04 missing |
| lighting-visual-matching | artifacts and their causes in code; the widened section | `agents/03_...`: the fixed +/-45 degree metal wedge, wavy cut-out edge, floating axles, missing wall AA, hand-off nesting |
| water-vfx-engineer | the water spec for flumes and the chute | `agents/04_...`: the private random rule for new meshes, full-height dividers, level-gated wake (not done, see below) |
| screen4-water-motion-engineer | live three.js inspection with the parallax-threejs MCP tools | `agents/05_...`: PARTIAL (the shared page hung under the 4-core load): 192 main draws / 2.69 M triangles in the drum, her shell fur 1.1 M triangles in one draw, 28 draws per frame with nothing on screen, heroSwell still follows her in the course |
| (plugin) parallax-threejs:visual-debugger | a tool probe | `agents/06_...`: only Bash; the plugin's MCP tool names lack the `plugin_parallax-threejs_` prefix (the known plugin defect) |

What was taken from them (in `flow` only): the narrower metal crown (a fixed arc length, soft edge, faint outlines, faded in after the
drum), the wall anti-aliasing, the azure far centre, the lowered islands, no floating axles, the water-ribbon walls for the flume trough
and the lower path, full-height dividers, all new meshes inside Level 1's private random sequence, the art director's colours for the card.

## Files changed
- new `WebDemo/src/level1_flow.js` (the course in the board's order, the routes' heights `flowLift`, lanes, structures, rules)
- `WebDemo/src/level1.js` (everything new gated on `FLOW`), `WebDemo/src/game.js` (hooks gated on `level1.flow`; `socks` keep their lane
  for the tests), `WebDemo/src/world.js` (`HOOK`, null unless flow), `WebDemo/game.bundle.js`
- new tools: `WebDemo/tools/level1/flow_routes.cjs` (route tests), `WebDemo/tools/level1/record_flow.cjs` (the recordings)
- this folder; `SESSION_FILE_RESERVATIONS.md`, `HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md` (section 000), `CLAUDE.md`, `Tools/autosave_sessions.json`
