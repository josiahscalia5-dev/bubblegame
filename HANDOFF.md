# Hand-off: where Bubble Wash Kingdom stands (2 November 2026, evening)

Read this first when you continue in a new Claude conversation.

## Where everything is

- **Repository:** `josiahscalia5-dev/bubblegame`. It is **public**: anyone can read it, including the chat history.
- **Branches:**

  | Branch | What it holds |
  |---|---|
  | `ccr-052e5531-zna8s3` | **Latest work.** Everything below, plus this evening's Screen 3 polish (castle colours, brushes, rails, tunnel, exit light, camera). |
  | `ccr-ce4e9217-j1l0vl` | The afternoon session's work (3D path, water, fur, socks, recordings, Meshy asset review). The branch above builds on it. |
  | `ccr-e6a125ac-2krpmp` | The head of **PR #1** (draft, do not merge yet). It holds the afternoon work, **not** this evening's commits. Moving them there needs the user's go-ahead. |
  | `claude/new-session-oth0dd` | PR #1's base. At 20:17 on 2 November another session pushed "Build Screens 1-2 and 5-12" (`ea70999`) here. PR #1 **conflicts** with it in 9 files: `CloudBuild.cs`, `Level1SceneBuilder.cs`, `MaterialSet.cs`, `ScreenComposition.cs`, `Collectible.cs`, `GameHud.cs`, `Waterfall.shader` (both sides added one), `Design/VISUAL_DIFFERENCES.md` and `README.md`. The conflicts are not resolved: that needs the user's go-ahead. `WebDemo/` does not conflict. |

- **Chat history:** [`ChatHistory/`](ChatHistory), one file per session, exported with `Tools/export_chat_history.py`.
- **Visual target:** [`Design/ApprovedScreens/`](Design/ApprovedScreens), the 12 approved screens (`x3_` files are 3× crops of Screens 3 and 4).
- **Meshy models as delivered:** [`Design/MeshyDeliveries/`](Design/MeshyDeliveries), with an index of where each is used.
- **Two Claude accounts:** the user works from two accounts. Each published page is private to the account that published it.

## Current focus: Screen 3, browser demo (`WebDemo/`)

The user wants Screen 3 to look and move right before the remaining screens. The approved Screen 3 is the target.

- **Play:** https://claude.ai/artifact/F27yfpA3Fp5a1mJWbDCTkb (this evening's version, from the account that ran it). The afternoon version is at https://claude.ai/artifact/Nq5qbxwgsk5jKEMnX6ESKC on the other account. Both are private until shared from their Share menu. Locally: `cd WebDemo && python3 -m http.server`.
- **Latest round (Screen 3 completion), all in code, no new Meshy models:**
  - **Framing:** measured against the approved image. A 36° lens from further back keeps the mascot's size and place, and the portal arch now fills the approved 64 % of the width.
  - **Slide:** narrower, as in the approved image (2.2 m, lanes 0.70 m apart). It is a flume with lavender walls, thick gold rails and chunky gold segments.
  - **Machinery** (`WebDemo/src/scenery.js`):
    - the huge gold washing wheel (lower right) and a blue-and-gold wheel (upper left)
    - a cream-and-gold housing
    - gold machinery towers with water tubes and waterfalls on both sides of the castle
    - six gold gears with teal and navy hubs at the portal mouth
    - curved gold pipes, pink fluffy trim and glowing bulbs
    - Wheels, gears and collars turn.
  - **Golden helper** (`WebDemo/src/helper.js`): the duck-like friend on a pink float, in front of the portal, facing the mascot. It leads the way into the washing machine.
  - **Brushes:** a 3 m Meshy brush turns end-on at the lower left; a second one shows its pink fringe on the right.
  - **Water:** a soft, wavy caustic shimmer and twinkling sparkles instead of the polygon grid. Foam only where water churns, including a foam collar around the mascot. Fewer droplets.
- **Earlier this evening:** castle colour grade (lavender, white and gold), brush recolour, lighter tunnel with a light at its end, camera follow over the crest, coins gold from the first frame.
- **Done in the afternoon session:** the real 3D path (climb, crest, drop, banked turns), electric-blue water with caustics and foam, the fur shader, the Meshy lost socks with the "Rescue 5 lost socks" panel, the touch overlay (`?touches`) and the side view (`?side`).
- **Evidence:** [`Previews/WebDemo/`](Previews/WebDemo): this evening's gameplay and side-view recordings, the height chart, the start frame beside the approved screen, and the per-frame game state. Recorded in headless Chromium with software WebGL. **Not tried on a real phone.**
- **Known differences from the approved Screen 3:**
  - The approved vortex inside the portal is whiter and pinker than ours.
  - In the approved image the left brush overlaps the slide's edge. Ours stays just clear of the left lane, so it sits a little further left and is cut by the screen edge.
  - The code-built helper and machinery are simpler than hand-sculpted models. `Design/MESHY_ASSET_REVIEW.md` lists the two optional Meshy upgrades.
- **Build and record:**
  - Build: `cd WebDemo && npm install && node build.mjs`.
  - Play-test: `node tools/playtest.cjs "$PWD" <out> quick`.
  - Record: `node tools/record.cjs "$PWD" <out> 13 game|side|dry`, then `python3 -I tools/evidence_images.py <game dir> <side dir> ../Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png <out dir>`. The ffmpeg commands are in `Previews/WebDemo/README.md`.
  - Republish the page: `artifact.html` with `game.bundle.js`, `models/layout.json`, `artifact-models/*.glb.json` (published as `models/*.glb.json`) and `ui/*.png`. From a different account, publish it as a new page.

## Unity project (unchanged since the afternoon)

- Screens 3–4 are playable in Unity and wait for the first real Unity capture and compare (see `README.md`).
- None of the demo-only changes have been ported to Unity: the 3D path, narrower slide and flume, machinery, helper, fur shader, castle grade, brush recolour, water shimmer, exit light and camera framing.
- **Pink mascot:** not yet in Unity. Copy `Design/MeshyDeliveries/PinkMascot/BubbleWash_Pink_Mascot_Claudia_4MB_ColorSafe.glb` into `Assets/BubbleWash/Models/Mascot/` and rebuild. It is a static mesh (no rig) with an unlit, double-sided material, facing +Z.
- **Lost sock:** not yet in Unity. Copy `Design/MeshyDeliveries/LostSock/BubbleWash_Lost_Sock_Claudia_Small.glb` into `Assets/BubbleWash/Models/RescueSock/`. Its face is on +Z, and its material is fully metallic, so it needs a non-metallic material.

## Open requests from the user

1. Keep polishing Screen 3 until it looks and moves right, then move on to the remaining screens.
2. **Meshy asset review:** done. See [`Design/MESHY_ASSET_REVIEW.md`](Design/MESHY_ASSET_REVIEW.md). The three models it first listed as missing are now built in code. No new Meshy model is required; two optional upgrades are listed there.
3. Keep PR #1 as a draft. Do not merge it.
4. Not yet asked: whether to move this evening's commits onto PR #1's branch, and how to resolve PR #1's conflicts with its base.

## How the user likes to work

- The approved screens are the visual target: preserve composition, character, camera and lighting as closely as possible, and compare side by side.
- Use the existing Meshy assets. Do not substitute unrelated designs or create duplicate assets, and keep Meshy credits for what is really missing.
- Improve what exists. Do not rebuild from scratch.
- Show real gameplay recordings, not simulated screenshots, and say plainly what was actually run and what was not.
- Save everything to the repository, including the chat history, so work can continue from the other account.
