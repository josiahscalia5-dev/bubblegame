# Hand-off: where Bubble Wash Kingdom stands (3 November 2026, morning: Screen 3 opening test version)

Read this first when you continue in a new Claude conversation.

## Where everything is

- **Repository:** `josiahscalia5-dev/bubblegame`. It is **public**: anyone can read it, including the chat history.
- **Branches:**

  | Branch | What it holds |
  |---|---|
  | `ccr-4e2b86d7-kqpei8` | **Test version for review (3 November, late morning):** the approved Screen 3 artwork as the Tap to Start screen, on top of `ccr-68cd26f5-4t8etp`. Not merged; see section 2c of `Design/SCREEN3_OPENING_MATCH.md`. |
  | `ccr-68cd26f5-4t8etp` | **Test version for review (3 November, morning):** the Screen 3 opening look (`WebDemo/src/opening.js`) on top of `ccr-590365bd-e5p8xt`. Not merged; see `Design/SCREEN3_OPENING_MATCH.md`. |
  | `ccr-590365bd-e5p8xt` | **The working original** (untouched by the test version). Everything below, plus the four Meshy entrance decorations (water towers, gear wheels, pipe elbows, crown trim), the duck helper removed, and the previous tunnel restored with cyan rings and pink panels. The Meshy tunnel liner was tried and is disabled; commit `46c034c` is the backup with it in place. |
  | `ccr-052e5531-zna8s3` | This evening's Screen 3 polish (castle colours, brushes, rails, tunnel, exit light, camera, duck helper, side machinery). The branch above builds on it. |
  | `ccr-ce4e9217-j1l0vl` | The afternoon session's work (3D path, water, fur, socks, recordings, Meshy asset review). The branch above builds on it. |
  | `ccr-e6a125ac-2krpmp` | The head of **PR #1** (draft, do not merge yet). It holds the afternoon work, **not** this evening's commits. Moving them there needs the user's go-ahead. |
  | `claude/new-session-oth0dd` | PR #1's base. At 20:17 on 2 November another session pushed "Build Screens 1-2 and 5-12" (`ea70999`) here. PR #1 **conflicts** with it in 9 files: `CloudBuild.cs`, `Level1SceneBuilder.cs`, `MaterialSet.cs`, `ScreenComposition.cs`, `Collectible.cs`, `GameHud.cs`, `Waterfall.shader` (both sides added one), `Design/VISUAL_DIFFERENCES.md` and `README.md`. The conflicts are not resolved: that needs the user's go-ahead. `WebDemo/` does not conflict. |

- **Reference packs:** [`Design/ReferencePacks/`](Design/ReferencePacks). What you sent for a round of work, as delivered: the approved and current frames, the annotated differences and your prompts.
- **Chat history:** [`ChatHistory/`](ChatHistory), one file per session, exported with `Tools/export_chat_history.py`.
  - Newest: `2026-11-03_screen3_opening_and_rollers_session.md` (3 November: the opening look, the soap suds and the roller candidates).
  - The exporter now also keeps messages sent with pictures attached, which it used to skip.
  - Before it, `2026-11-02_decor_and_tunnel_session.md` (2–3 November: the entrance decorations, the tunnel liner and its diagnosis, the restored tunnel). Before it, `2026-11-02_screen3_polish_session.md` (castle colours, machinery, the duck helper and the side machinery).
- **Not in the repository on purpose:** `WebDemo/node_modules/` (run `npm install`), `WebDemo/artifact-models/` (rebuilt by `node build.mjs`) and `WebDemo/package-lock.json` (the two packages are pinned in `package.json`).
- **Visual target:** [`Design/ApprovedScreens/`](Design/ApprovedScreens), the 12 approved screens (`x3_` files are 3× crops of Screens 3 and 4).
- **Meshy models as delivered:** [`Design/MeshyDeliveries/`](Design/MeshyDeliveries), with an index of where each is used.
- **Two Claude accounts:** the user works from two accounts. Each published page is private to the account that published it.

## Latest (3 November, late night): opening-only cinematic camera behind `?s3=all,edges,cine` (test, not approved)

- **The user approved `4711680` (`?s3=all,edges`, 6.5/10) as a saved experimental checkpoint only.** No new Meshy models yet.
- **`cine`:** a separate render camera fitted to the approved perspective, the gameplay pose plus 0.10 m up, 0.82 m forward, 0.3° down and a 41.5° view. It blends back to the untouched gameplay camera over 0.9 s after the tap.
  - Code: `setupCine` in `screen3_models.js`. `game.js` passes its render pass to the opening layer.
- **Result:** about 7/10, against 6.5. The mascot, slide and door now line up structurally (edge correlation in that region 0.115 → 0.295).
- **Finding:** the camera was not the main barrier. The remaining gaps are the castle's narrow arch (towers off-screen), the entrance's small opening, its colours and the protected tunnel's curve, plus painted effects and the removed duck.
- **Evidence:** `Previews/WebDemo/screen3_cine_test/`.
- **Checks:** controls, collectibles and the 13 s seeded run identical; tunnel pixel-identical; `?s3=all,edges` unchanged.

## Earlier (3 November, night): slide-edge restyle behind `?s3=all,edges` (test, not approved)

- **The user approved `ad518e3` (`?s3=all`, the five assets) as a saved experimental checkpoint only.** It is not the final Screen 3, and nothing is merged.
- **`edges`** (not part of `all`):
  - the tall pale slide walls and the gold tube rail become low icy rims with foam spilling over;
  - the brush stands at the approved size and place (scale 1.51 at z −4.9);
  - the bubble film is stronger;
  - the opening-only scenery is hidden inside the tunnel.
- **Not adopted:** `?phaseA` measured worse in the slide region.
- **Evidence:** `Previews/WebDemo/screen3_edges_test/` (region-by-region colour and structure, scores, checks, tools).
- **Honest score:** the whole opening is about 6.5/10, against 6 for the five-asset version.
  - Blocked from about 8 by the protected camera and narrow slide, the tunnel's curve, and the castle's narrow arch and the entrance's small opening.
  - A castle variant (arch about 0.75 of the tower spacing) and an entrance variant (opening at least 70 % of the frame) would give about 7–7.5. Beyond that, the opening camera would have to change, which needs the user's explicit decision.

## Earlier (3 November, evening): the five Screen 3 assets in the real 3D opening behind `?s3` (saved, not approved)

- **Code:** `WebDemo/src/screen3_models.js`, called from `opening.js` loadExtras.
  - Switches: `?s3=castle,entrance,machinery,brush,bubbles`, or `?s3=all`.
  - Without them nothing is downloaded and the page is unchanged.
  - Models: `WebDemo/models/s3_*.glb`, byte-identical to `Design/MeshyDeliveries/Screen3Models/`. The castle is the newest delivery.
- **Evidence:**
  - `Previews/WebDemo/screen3_five_assets/` (approved, previous and new, plus the first 2 s);
  - `Previews/WebDemo/screen3_castle_test/` (stage 1).
- **Honest score:** the whole opening is about 6/10, against 5/10 before.
  - Limits: lane clearance on the narrow slide, the slide's tall walls, the protected tunnel's curve, and the castle's narrow arch and the entrance's small opening.
  - The README lists what would raise it.
- **Checks:**
  - same seed and inputs as `591db28`: controls, swipes, jump, collectibles and the 13 s seeded run identical;
  - tunnel 3D pixel-identical;
  - no console errors.
- **Waiting on the user:** approval, and whether to order the castle and entrance variants or restyle the slide's walls.

## Earlier (3 November, midday): Phase A castle-and-water test behind `?phaseA` (saved, not approved, not merged)

- **Code:** `WebDemo/src/phase_a.js`, called from `opening.js`. The game passes it the castle and the water sheets.
  - It runs only with `?phaseA`. Without it the page is pixel-identical to `591db28` (the approved-artwork opening).
- **Evidence:** see `Previews/WebDemo/phase_a_castle_water/README.md`.
  - Castle colour difference to the approved image: 11.2 → 3.5.
  - Water: white lines and foam 2 % → 27 % (approved 27 %).
- **Paused and not built:** the `?polish` work (live water band below the artwork, door-opens reveal), saved as a git stash in that session. The user redirected to scene structure.
- **Next, at the user's request:** rebuild the opening's scenery structure (rollers, machinery, door, castle, bubbles) with existing Meshy assets, in a separate test switch.

## Earlier (3 November, late morning): the approved artwork as the opening screen, test version waiting for approval

- **Branch `ccr-4e2b86d7-kqpei8`** (this session). It starts from the test version below (`6116703`), which stays on `ccr-68cd26f5-4t8etp` as the restore point.
  - The tag `checkpoint/before-opening-artwork` is local only; GitHub refused tag pushes from this session.
  - The working original (`ccr-590365bd-e5p8xt`) is untouched. Nothing is merged.
- **What it is:** the approved Screen 3 (`BWK_01`, unedited, duck included) shown as the Tap to Start screen.
  - It fades into the live 3D game with the existing 0.45 s fade.
  - Taps pass through it, and the settings button stays clickable over the painted gear.
  - `?classic` shows the original opening.
- **Read:** section 2c of `Design/SCREEN3_OPENING_MATCH.md`. Evidence is in `Previews/WebDemo/opening_artwork/`.
- **Duck:** you declined the patch-filled copies (blurry, patchy). Do not retry patch-based removal.
- **Phones taller than 1:2:** the whole artwork shows from the top, with a band in its border colour below it.
- **The published page:** not republished. `artifact.html` now references `ui/approved_screen3.png`, so a republish must include that file.
- **Waiting on the user:** approval of this test before anything further.

## Earlier (3 November, morning): Screen 3 opening look, test version waiting for approval

- **Branch `ccr-68cd26f5-4t8etp`** (this session). It starts from `ccr-590365bd-e5p8xt` (`b75f88c`), which stays as the working original. Nothing is merged.
- **What it is:** one cosmetic module, `WebDemo/src/opening.js`, plus small additive hooks in `game.js` and `shaders.js`.
  - The gold washer-door rim, violet seal and cyan rings at the portal, with a lavender wall facing over the castle's pastel funnel.
  - Bubbly foam, splashes and glossy bubbles around the mascot; bubble-lace foam and whitewater on the slide.
  - Soap bubbles at three depths.
  - Brushes: the extra roller beside the portal hidden, the right roller turned to show its fluffy side, the side machinery larger (1.22 m from the lanes).
  - Glassy aqua flume walls, a slightly more upright mascot with crisper fur, and an opening-only grade.
- **Proof:** a seeded run is frame-for-frame identical (position, lane, speed, jumps, camera, pickups). The tunnel renders pixel-identical with the mascot presentation off, and `?classic` is pixel-identical to the original.
- **Read:** `Design/SCREEN3_OPENING_MATCH.md`, which has the checklist, the roller answers, the asset inventory, what could not be matched, and the tests. Evidence is in `Previews/WebDemo/opening_match/`.
- **Second round, same branch:**
  - **Soap suds** against the mascot's lower body, matched to the user's approved close-up (section 2b of the write-up).
  - **Two Meshy roller candidates** (`Design/MeshyDeliveries/CompactRollers/`), tested one at a time in the right-hand slot with `?roller=1` or `?roller=2`. They are off by default.
    - Recommended: No. 1.
    - Neither can spin safely as delivered (gold welded to the drum), so both stand still in the test.
    - Before using No. 1: a 1024 px web copy, because it adds 42.7 MB of GPU texture memory.
    - See `Design/SCREEN3_ROLLER_CANDIDATES.md`.
- **Waiting on the user:**
  - approval or changes;
  - whether to use roller No. 1 still, or wait for the separated Meshy parts;
  - whether to bring the duck helper back (still removed, as asked);
  - whether to tint the coins;
  - whether to order the optional left-brush Meshy model described in the write-up.

## Current focus: Screen 3, browser demo (`WebDemo/`)

The user wants Screen 3 to look and move right before the remaining screens. The approved Screen 3 is the target.

- **Play:** https://claude.ai/artifact/1zbgcsX6AF7HTNJMesKmiX (version 3, 3 November: the restored tunnel with cyan rings and pink panels, no helper, the Meshy entrance decor). It was published from the account that ran tonight's session, as an update of that account's earlier Bubble Wash Kingdom page, so the link stayed the same.
  - Older versions: https://claude.ai/artifact/F27yfpA3Fp5a1mJWbDCTkb (this evening) and https://claude.ai/artifact/Nq5qbxwgsk5jKEMnX6ESKC (afternoon).
  - All are private until shared from their Share menu.
  - Locally: `cd WebDemo && python3 -m http.server`.
- **Latest round (3 November): the previous tunnel restored, with cyan rings and pink panels**
  - At the user's request the Meshy tunnel liner is disabled. Its files stay. The tunnel is the Meshy drum over its full length again, with its light rings and gold wall gears (as in `d44d687`).
  - **Added in code** (`WebDemo/src/scenery.js`):
    - Glowing rings in electric cyan, two tones, with bulbs and soft halos.
    - 98 glowing pink light panels in gold frames on the upper walls, clear of the water and the gears.
    - A slow wave of light running down the tunnel.
  - **Kept:** no helper; the start panels fade after the tap; the four entrance decorations.
  - **The ride is unchanged.** Played with the same seed on this build and on `d44d687`, every frame's position, height, lane, speed, jumps and camera are identical. Only which coins get picked up varies: three.js uses the random-number generator for object IDs, so adding or removing objects shifts the coins' random bobbing.
  - **Clearance:** the mascot's body reaches 1.98 m from the axis at most, even jumping in every lane. The drum's ribs are at 2.1 m, the panels at 2.3 m.
- **The round before (night of 2–3 November): the Meshy tunnel interior liner (since disabled), and no helper**
  - **The liner:** four copies of the Recommended liner (`Design/MeshyDeliveries/TunnelInterior/`, `WebDemo/src/liner.js`) line the drum, bent along the ride's path. The castle, portal and the drum's mouth are unchanged. That folder's README explains the radius remap.
  - **The old drum:** not drawn behind the liner (`trimDrum`). Its ribs and walls cut through the liner and caused the dark, broken-looking patches.
  - **Cracks:** the Meshy model has cracks of its own. A deep-blue backing shows through them.
  - **Lights:** the liner's painted cyan bands and pink panels really glow (`LINER_GLOW`), plus emissive cyan and white rings every 2 m, fading into deep blue with distance. The walls are dimmer than outdoors, so the blue and gold are not washed out.
  - **Clearance:** the nearest liner surface is 2.06 m from the axis. The mascot's body reaches 1.98 m at most, even jumping in every lane (`window.__bw.clearanceTrace`).
  - **Load:** fewer triangles and draw calls than before. At Tap to Start, 1.82 M triangles and 219 draw calls, against 1.92 M and 287.
  - **Duck helper:** removed at the user's request (model, code, splashes, foam ring, goggles shader). Do not bring it back.
  - **Start panels:** the "Let's go!" banner and Tap to Start panel fade out over 0.45 s of game time after the tap.
  - **The ride is unchanged.** With the same random seed, the old and new builds end in the same place and collect the same coins, gems and socks.
- **Earlier that night: the four Meshy entrance decorations** (`Design/MeshyDeliveries/EntranceDecor/`, placed and animated by `WebDemo/src/decor.js`):
  - **Glowing water towers:** one on each side of the castle, where the approved image has its tall gold-and-blue columns. Each stands on a gold plinth.
    - The fluid glows and swirls in the shader (`TOWER_FLUID`), with bubbles rising and a pulsing light.
    - They replace the code-built machinery towers.
  - **Blue-and-gold gear wheels:** six at the portal mouth and one high on the left, each turning about its axle. They replace the seven code-built gears there.
  - **Golden pipe elbows:** water spouts on the towers' own pipe stubs, pouring into the moat.
  - **Crown and curved trim:** the keystone on the portal arch. The "Let's go!" banner covers it at Tap to Start, and it shows during the run.
  - Every decoration stays at least 1.25 m from the slide's middle up to the highest jump (the mascot reaches 1.10 m).
  - Web copies come from the Balanced files, simplified within a small error, with their metal/roughness and normal maps kept. The Small files have stray sliver triangles and are not used.
  - **Tried and dropped:** extra elbows at the lower corners. On the left they would only cover the side machinery; on the right the bubbles and gold wheel hid them.
  - **Evidence** in `Previews/WebDemo/`: a new gameplay video, `entrance_decor_before_after.png`, `entrance_decor_closeups.png`, and the start frame beside and blended with the approved screen.
    - The ride is unchanged: every recorded frame matches the build before this round (position, height, lane, speed, jumps, path, camera).
    - The coin count can differ by one between unseeded runs, because coins bob with a random phase. `WebDemo/tools/seeded_run.cjs` shows both builds collect the same with the same seed.
  - **Known differences from the approved image:**
    - The crown keystone is hidden by the "Let's go!" banner at Tap to Start. The approved arch top has no crown; it was added because the user asked for it.
    - The approved portal-mouth gears are chunkier and sit right at the water's edge. Ours are a little smaller and further out, to stay clear of the lanes, and partly behind the side machinery and the right brush.
    - Pipe elbows appear only as the two tower spouts.
- **Before that (Screen 3 completion), all in code, no new Meshy models:**
  - **Framing:** measured against the approved image. A 36° lens from further back keeps the mascot's size and place, and the portal arch now fills the approved 64 % of the width.
  - **Slide:** narrower, as in the approved image (2.2 m, lanes 0.70 m apart). It is a flume with lavender walls, thick gold rails and chunky gold segments.
  - **Machinery** (`WebDemo/src/scenery.js`):
    - the huge gold washing wheel (lower right) and a blue-and-gold wheel (upper left)
    - a cream-and-gold housing
    - gold machinery towers with water tubes and waterfalls on both sides of the castle
    - six gold gears with teal and navy hubs at the portal mouth
    - curved gold pipes, pink fluffy trim and glowing bulbs
    - Wheels, gears and collars turn.
  - **Duck helper (removed since, at the user's request):** the user's Meshy duck on its pink float (`Design/MeshyDeliveries/DuckHelper/`, Balanced copy in `WebDemo/models/duck.glb`). It replaced the code-built helper. `WebDemo/src/helper.js` places it ahead of the mascot, facing it, with gentle splashes and softened goggles. It leads the way into the washing machine.
  - **Brushes:** a 3 m Meshy brush turns end-on at the lower left; a second one shows its pink fringe on the right.
  - **Water:** a soft, wavy caustic shimmer and twinkling sparkles instead of the polygon grid. Foam only where water churns, including a foam collar around the mascot. Fewer droplets.
- **Giant side machinery (Meshy):** the user's model (`Design/MeshyDeliveries/SideMachinery/`, Medium copy in `WebDemo/models/machinery.glb`) stands at the lower left of the slide, matched to the approved screen.
  - It stays 1.18 m from the slide's middle, so it never blocks the lanes.
  - It is one combined mesh, so it stands still. Turning only its bristle wheel would need the wheel delivered as a separate mesh centred on its axle.
  - The Balanced copy showed thin gold cracks across the bristles at game size; the Medium copy mostly closes them.
  - It replaced the code-built blue-and-gold wheel on the upper left, and the Meshy roller moved up there.
- **Fix:** every baked Meshy material shared one compiled shader (three.js caches by the `onBeforeCompile` source), so materials could render with another's settings. The duck first showed all pink from the brushes' recolour. Each now has its own `customProgramCacheKey`. This also corrected the left brush's gold-and-blue hub.
- **Visual-fidelity round (after the user's review of the side-by-side):**
  - glossier lighting: studio reflections, a rim light, and shading on the Meshy models
  - raised water mound and V ridges around the mascot (visual only), deeper troughs, clear bow spray
  - tunnel rings in gold, pink, cyan and lavender with bulbs, and turning wall gears
  - a broader helper with a wider pink float, placed nearer the mascot
  - glossy jelly tutorial panels
  - sharper fur tips
  - framing checked at an exact 1:2 stage (40° lens)
- **Earlier this evening:** castle colour grade (lavender, white and gold), brush recolour, lighter tunnel with a light at its end, camera follow over the crest, coins gold from the first frame.
- **Done in the afternoon session:** the real 3D path (climb, crest, drop, banked turns), electric-blue water with caustics and foam, the fur shader, the Meshy lost socks with the "Rescue 5 lost socks" panel, the touch overlay (`?touches`) and the side view (`?side`).
- **Evidence:** [`Previews/WebDemo/`](Previews/WebDemo): this evening's gameplay and side-view recordings, the height chart, the start frame beside the approved screen, and the per-frame game state. Recorded in headless Chromium with software WebGL. **Not tried on a real phone.**
- **Known differences from the approved Screen 3:**
  - The approved vortex inside the portal is whiter and pinker than ours.
  - In the approved image the left brush overlaps the slide's edge. Ours stays just clear of the left lane, so it sits a little further left and is cut by the screen edge.
  - The approved image shows a small yellow helper in front of the mascot; at the user's request the game has none.
  - The code-built machinery is simpler than hand-sculpted models. `Design/MESHY_ASSET_REVIEW.md` lists the one optional Meshy upgrade left (the machinery tower).
- **Build and record:**
  - Build: `cd WebDemo && npm install && node build.mjs`.
  - Play-test: `node tools/playtest.cjs "$PWD" <out> quick`.
  - Record: `node tools/record.cjs "$PWD" <out> 13 game|side|dry`, then `python3 -I tools/evidence_images.py <game dir> <side dir> ../Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png <out dir>`. The ffmpeg commands are in `Previews/WebDemo/README.md`.
  - Compare with the approved screen at the same 1:2 size: `tools/start_frame.cjs`, `tools/beats.cjs`, `tools/try_settings.cjs`, `tools/compare_approved.py`, `tools/overlay_approved.py` (see `WebDemo/README.md`).
  - Republish the page: `artifact.html` with `game.bundle.js`, `models/layout.json`, `artifact-models/*.glb.json` (published as `models/*.glb.json`) and `ui/*.png`. From a different account, publish it as a new page.

## Unity project (unchanged since the afternoon)

- Screens 3–4 are playable in Unity and wait for the first real Unity capture and compare (see `README.md`).
- None of the demo-only changes have been ported to Unity: the 3D path, narrower slide and flume, machinery, helper, fur shader, castle grade, brush recolour, water shimmer, exit light and camera framing.
- **Pink mascot:** not yet in Unity. Copy `Design/MeshyDeliveries/PinkMascot/BubbleWash_Pink_Mascot_Claudia_4MB_ColorSafe.glb` into `Assets/BubbleWash/Models/Mascot/` and rebuild. It is a static mesh (no rig) with an unlit, double-sided material, facing +Z.
- **Lost sock:** not yet in Unity. Copy `Design/MeshyDeliveries/LostSock/BubbleWash_Lost_Sock_Claudia_Small.glb` into `Assets/BubbleWash/Models/RescueSock/`. Its face is on +Z, and its material is fully metallic, so it needs a non-metallic material.

## Open requests from the user

1. Keep polishing Screen 3 until it looks and moves right, then move on to the remaining screens. The four entrance decorations are in. The user asked to be told which model looks wrong, and why, before regenerating anything in Meshy.
2. **Meshy asset review:** done. See [`Design/MESHY_ASSET_REVIEW.md`](Design/MESHY_ASSET_REVIEW.md). The three models it first listed as missing are now built in code. No new Meshy model is required. The duck helper has been delivered and is in use, and one optional upgrade (the machinery tower) is listed there.
3. Keep PR #1 as a draft. Do not merge it.
4. Not yet asked: whether to move this evening's commits onto PR #1's branch, and how to resolve PR #1's conflicts with its base.

## How the user likes to work

- The approved screens are the visual target: preserve composition, character, camera and lighting as closely as possible, and compare side by side.
- Use the existing Meshy assets. Do not substitute unrelated designs or create duplicate assets, and keep Meshy credits for what is really missing.
- Improve what exists. Do not rebuild from scratch.
- Show real gameplay recordings, not simulated screenshots, and say plainly what was actually run and what was not.
- Save everything to the repository, including the chat history, so work can continue from the other account.
