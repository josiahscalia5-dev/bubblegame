# Hand-off: where Bubble Wash Kingdom stands (2 November 2026)

Read this first when you continue in a new Claude conversation.

## Where everything is

- **Repository:** `josiahscalia5-dev/bubblegame`. It is **public**: anyone can read it, including the chat history.
- **Branches:**

  | Branch | What it holds |
  |---|---|
  | `ccr-ce4e9217-j1l0vl` | **Latest work.** Everything in PR #1, plus the Screen 3 demo improvements, the lost sock, the recordings, this hand-off and the chat history. |
  | `ccr-e6a125ac-2krpmp` | The head of **PR #1** (draft, do not merge yet). It does **not** include the work above. |
  | `claude/new-session-oth0dd` | PR #1's base. Another session started on 2 November at 14:33 was building Screens 5–12 in Unity on it, with uncommitted work at the time. Check this branch before starting Screens 5–12, to avoid duplicating it. |

- **Chat history:** [`ChatHistory/`](ChatHistory). This session's messages and replies, exported with `Tools/export_chat_history.py`. Earlier sessions' chats could not be opened from this session, so they are not here. Their work is in the commits and in `README.md`.
- **Visual target:** [`Design/ApprovedScreens/`](Design/ApprovedScreens), the 12 approved screens (`x3_` files are 3× crops of Screens 3 and 4).
- **Meshy models as delivered:** [`Design/MeshyDeliveries/`](Design/MeshyDeliveries), with an index of where each is used.

## Current focus: Screen 3, browser demo (`WebDemo/`)

The user wants Screen 3 to look and move right before the remaining screens. The approved Screen 3 is the target.

- **Play:** https://claude.ai/artifact/Nq5qbxwgsk5jKEMnX6ESKC. It is private to the owner's account until shared from its Share menu. The earlier demo link (`1zbgcsX6…`) no longer opens. Locally: `cd WebDemo && python3 -m http.server`.
- **Done in this session** (details in [`WebDemo/README.md`](WebDemo/README.md)):
  - **Path:** a real 3D path (`src/track.js`). The slide dips and crests into the portal, then the bent Meshy drum climbs about 1.5 m turning left, crests, drops about 2 m turning right and banks about 16°. The camera follows and banks.
  - **Water and spray:** electric blue and turquoise with a caustic network, foam only where water churns, and small clear spray.
  - **Mascot:** fur shader, with its size matched to the approved screen.
  - **Scenery:**
    - A narrower slide.
    - The Meshy roller as the big left brush.
    - Simple procedural gold-and-blue machinery, big bubbles and glowing coins.
  - **Socks:** five Meshy lost socks with the "Rescue 5 lost socks" panel.
  - **Test tooling:** a touch overlay (`?touches`) and a side view (`?side`).
- **Evidence:** [`Previews/WebDemo/`](Previews/WebDemo).
  - Gameplay video and side-view height proof (−0.62 m to +1.94 m).
  - Height chart and the start frame beside the approved screen.
  - The per-frame game state.
  - Recorded in headless Chromium with software WebGL. **Not tried on a real phone.**
- **Known differences from the approved Screen 3:**
  - The castle keeps its Meshy pink and orange instead of lavender and gold.
  - The golden figure on the slide in front of the portal is missing (no Meshy model yet).
  - The gold machinery is simple procedural shapes.
  - The near brush is the pink/purple/blue Meshy roller; the approved one is mostly blue with a white and pink fringe.
  - The tunnel exit opens onto plain pastel sky.
  - At the crest the camera briefly sees the mascot high in the frame.
- **Build and record:**
  - Build: `cd WebDemo && npm install && node build.mjs`.
  - Play-test: `node tools/playtest.cjs "$PWD" <out> quick`.
  - Record: `node tools/record.cjs "$PWD" <out> 13 game|side|dry`, then `python3 -I tools/evidence_images.py …` and ffmpeg (commands in `Previews/WebDemo/README.md`).
  - Republish the page: `artifact.html` with `game.bundle.js`, `models/layout.json`, `artifact-models/*.glb.json` (published as `models/*.glb.json`) and `ui/*.png`.

## Unity project (unchanged in this session)

- Screens 3–4 are playable in Unity and wait for the first real Unity capture and compare (see `README.md`).
- The demo-only changes (3D path, narrower slide, machinery, fur shader) have not been ported to Unity.
- **Pink mascot:** not yet in Unity. Copy `Design/MeshyDeliveries/PinkMascot/BubbleWash_Pink_Mascot_Claudia_4MB_ColorSafe.glb` into `Assets/BubbleWash/Models/Mascot/` and rebuild. It is a static mesh (no rig) with an unlit, double-sided material, facing +Z.
- **Lost sock:** not yet in Unity. Copy `Design/MeshyDeliveries/LostSock/BubbleWash_Lost_Sock_Claudia_Small.glb` into `Assets/BubbleWash/Models/RescueSock/`. Its face is on +Z, and its material is fully metallic, so it needs a non-metallic material.

## Open requests from the user

1. Keep polishing Screen 3 until it looks and moves right, then move on to the remaining screens.
2. **Meshy asset review:** which 3D models are genuinely missing from Screen 3, so no Meshy credits are spent on duplicates. The answer is in the chat history ([`ChatHistory/`](ChatHistory)), dated 2 November.
3. Keep PR #1 as a draft. Do not merge it.
4. Still unanswered: move this branch's commits onto PR #1's branch, or open a separate draft PR?

## How the user likes to work

- The approved screens are the visual target: preserve composition, character, camera and lighting as closely as possible, and compare side by side.
- Use the existing Meshy assets. Do not substitute unrelated designs or create duplicate assets, and keep Meshy credits for what is really missing.
- Improve what exists. Do not rebuild from scratch.
- Show real gameplay recordings, not simulated screenshots, and say plainly what was actually run and what was not.
