# Hand-off: where Bubble Wash Kingdom stands (2 November 2026, night)

Read this first when you continue in a new Claude conversation.

## Where everything is

- **Repository:** `josiahscalia5-dev/bubblegame`. It is **public**: anyone can read it, including the chat history.
- **Branches:**

  | Branch | What it holds |
  |---|---|
  | `ccr-590365bd-e5p8xt` | **Latest work.** Everything below, plus the four Meshy entrance decorations (water towers, gear wheels, pipe elbows, crown trim). |
  | `ccr-052e5531-zna8s3` | This evening's Screen 3 polish (castle colours, brushes, rails, tunnel, exit light, camera, duck helper, side machinery). The branch above builds on it. |
  | `ccr-ce4e9217-j1l0vl` | The afternoon session's work (3D path, water, fur, socks, recordings, Meshy asset review). The branch above builds on it. |
  | `ccr-e6a125ac-2krpmp` | The head of **PR #1** (draft, do not merge yet). It holds the afternoon work, **not** this evening's commits. Moving them there needs the user's go-ahead. |
  | `claude/new-session-oth0dd` | PR #1's base. At 20:17 on 2 November another session pushed "Build Screens 1-2 and 5-12" (`ea70999`) here. PR #1 **conflicts** with it in 9 files: `CloudBuild.cs`, `Level1SceneBuilder.cs`, `MaterialSet.cs`, `ScreenComposition.cs`, `Collectible.cs`, `GameHud.cs`, `Waterfall.shader` (both sides added one), `Design/VISUAL_DIFFERENCES.md` and `README.md`. The conflicts are not resolved: that needs the user's go-ahead. `WebDemo/` does not conflict. |

- **Chat history:** [`ChatHistory/`](ChatHistory), one file per session, exported with `Tools/export_chat_history.py`. The latest is `2026-11-02_screen3_polish_session.md` (this evening: castle colours, machinery, the duck helper and the side machinery). Tonight's entrance-decor session is not exported: exporting its log into this public repository was blocked by a permission check, so it needs the user's go-ahead.
- **Not in the repository on purpose:** `WebDemo/node_modules/` (run `npm install`), `WebDemo/artifact-models/` (rebuilt by `node build.mjs`) and `WebDemo/package-lock.json` (the two packages are pinned in `package.json`).
- **Visual target:** [`Design/ApprovedScreens/`](Design/ApprovedScreens), the 12 approved screens (`x3_` files are 3× crops of Screens 3 and 4).
- **Meshy models as delivered:** [`Design/MeshyDeliveries/`](Design/MeshyDeliveries), with an index of where each is used.
- **Two Claude accounts:** the user works from two accounts. Each published page is private to the account that published it.

## Current focus: Screen 3, browser demo (`WebDemo/`)

The user wants Screen 3 to look and move right before the remaining screens. The approved Screen 3 is the target.

- **Play:** https://claude.ai/artifact/1zbgcsX6AF7HTNJMesKmiX (tonight's version with the Meshy entrance decor). It was published from the account that ran tonight's session, as an update of that account's earlier Bubble Wash Kingdom page, so the link stayed the same.
  - Older versions: https://claude.ai/artifact/F27yfpA3Fp5a1mJWbDCTkb (this evening) and https://claude.ai/artifact/Nq5qbxwgsk5jKEMnX6ESKC (afternoon).
  - All are private until shared from their Share menu.
  - Locally: `cd WebDemo && python3 -m http.server`.
- **Latest round (night of 2 November): the four Meshy entrance decorations** (`Design/MeshyDeliveries/EntranceDecor/`, placed and animated by `WebDemo/src/decor.js`):
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
- **Previous round (Screen 3 completion), all in code, no new Meshy models:**
  - **Framing:** measured against the approved image. A 36° lens from further back keeps the mascot's size and place, and the portal arch now fills the approved 64 % of the width.
  - **Slide:** narrower, as in the approved image (2.2 m, lanes 0.70 m apart). It is a flume with lavender walls, thick gold rails and chunky gold segments.
  - **Machinery** (`WebDemo/src/scenery.js`):
    - the huge gold washing wheel (lower right) and a blue-and-gold wheel (upper left)
    - a cream-and-gold housing
    - gold machinery towers with water tubes and waterfalls on both sides of the castle
    - six gold gears with teal and navy hubs at the portal mouth
    - curved gold pipes, pink fluffy trim and glowing bulbs
    - Wheels, gears and collars turn.
  - **Duck helper:** the user's Meshy duck on its pink float (`Design/MeshyDeliveries/DuckHelper/`, Balanced copy in `WebDemo/models/duck.glb`). It replaced the code-built helper. `WebDemo/src/helper.js` places it ahead of the mascot, facing it, with gentle splashes and softened goggles. It leads the way into the washing machine.
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
  - The Meshy duck has big open eyes and goggles; the approved helper's eyes are closed and it has no goggles (the goggles are softened). Its float is about 15 % wider than the approved one.
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
