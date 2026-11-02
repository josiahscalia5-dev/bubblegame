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
- **Done this evening** (details in [`WebDemo/README.md`](WebDemo/README.md)), with no new Meshy models:
  - **Castle colours:** a shader grade turns the Meshy castle's orange to warm gold and its soft pinks to lavender, keeps the pink crest banner, and adds a light lavender haze. The sky is pale lavender.
  - **Brushes:** the Meshy roller's bristles are recoloured as on approved Screens 3 and 4 (blue tufts toward the hub, a white band, a pink fringe). The big brush sits low at the left edge, as in the approved image.
  - **Rails:** chunky gold rails with balusters and blue gem studs ride the slide's hills.
  - **Tunnel:** lighter, misting to a bright core. Its far end is a glowing portal of light instead of plain sky.
  - **Camera:** it follows the mascot's own smoothed path frame, so the mascot stays in the lower middle of the screen over the crest and drop. The Tap to Start view is unchanged.
  - **Coins:** their face texture loads before the first frame, so they are never dark at Tap to Start.
- **Done in the afternoon session:** the real 3D path (climb, crest, drop, banked turns), electric-blue water with caustics and foam, the fur shader, the Meshy lost socks with the "Rescue 5 lost socks" panel, the touch overlay (`?touches`) and the side view (`?side`).
- **Evidence:** [`Previews/WebDemo/`](Previews/WebDemo): this evening's gameplay and side-view recordings, the height chart, the start frame beside the approved screen, and the per-frame game state. Recorded in headless Chromium with software WebGL. **Not tried on a real phone.**
- **Known differences from the approved Screen 3:**
  - The golden figure on the slide in front of the portal is missing (no Meshy model yet).
  - The gold machinery towers and gears are simple procedural shapes (Meshy models are missing).
  - The approved vortex inside the portal is whiter and pinker than ours.
  - The approved slide has more white foam and bubbles around the mascot's base.
- **Build and record:**
  - Build: `cd WebDemo && npm install && node build.mjs`.
  - Play-test: `node tools/playtest.cjs "$PWD" <out> quick`.
  - Record: `node tools/record.cjs "$PWD" <out> 13 game|side|dry`, then `python3 -I tools/evidence_images.py <game dir> <side dir> ../Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png <out dir>`. The ffmpeg commands are in `Previews/WebDemo/README.md`.
  - Republish the page: `artifact.html` with `game.bundle.js`, `models/layout.json`, `artifact-models/*.glb.json` (published as `models/*.glb.json`) and `ui/*.png`. From a different account, publish it as a new page.

## Unity project (unchanged since the afternoon)

- Screens 3–4 are playable in Unity and wait for the first real Unity capture and compare (see `README.md`).
- None of the demo-only changes have been ported to Unity: the 3D path, narrower slide, machinery, fur shader, castle grade, brush recolour, rails, exit light and camera follow.
- **Pink mascot:** not yet in Unity. Copy `Design/MeshyDeliveries/PinkMascot/BubbleWash_Pink_Mascot_Claudia_4MB_ColorSafe.glb` into `Assets/BubbleWash/Models/Mascot/` and rebuild. It is a static mesh (no rig) with an unlit, double-sided material, facing +Z.
- **Lost sock:** not yet in Unity. Copy `Design/MeshyDeliveries/LostSock/BubbleWash_Lost_Sock_Claudia_Small.glb` into `Assets/BubbleWash/Models/RescueSock/`. Its face is on +Z, and its material is fully metallic, so it needs a non-metallic material.

## Open requests from the user

1. Keep polishing Screen 3 until it looks and moves right, then move on to the remaining screens.
2. **Meshy asset review:** done. See [`Design/MESHY_ASSET_REVIEW.md`](Design/MESHY_ASSET_REVIEW.md). Three models are genuinely missing: a gold machinery tower, a gold gear with a blue hub, and the golden toy figure on the slide.
3. Keep PR #1 as a draft. Do not merge it.
4. Not yet asked: whether to move this evening's commits onto PR #1's branch, and how to resolve PR #1's conflicts with its base.

## How the user likes to work

- The approved screens are the visual target: preserve composition, character, camera and lighting as closely as possible, and compare side by side.
- Use the existing Meshy assets. Do not substitute unrelated designs or create duplicate assets, and keep Meshy credits for what is really missing.
- Improve what exists. Do not rebuild from scratch.
- Show real gameplay recordings, not simulated screenshots, and say plainly what was actually run and what was not.
- Save everything to the repository, including the chat history, so work can continue from the other account.
