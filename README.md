# Bubble Wash Kingdom (Unity 6.3 LTS, mobile)

This project recreates the 12 approved Bubble Wash Kingdom screens as real-time, playable 3D. The approved designs are the permanent visual targets: [`Design/ApprovedScreens/`](Design/ApprovedScreens).

## Status

| Screen | State |
|---|---|
| 3 · Let's go! Into the washing machine | **Playable, awaiting the first Unity capture.** It uses the Meshy castle portal, a raised flowing water path, electric-blue water, waterfalls pouring from both towers, the mascot controls, the approved camera framing and the HUD. |
| 4 · Rescue 5 lost socks | **Playable, awaiting the first Unity capture.** It continues from Screen 3 in one run through three Meshy drum segments. You can collect the socks, coins and gem, and the 0/5 counter updates. |
| 1, 2, 5–12 | Not started. |

**Neither screen is marked visually complete.** That decision waits for real Unity captures compared against the approved images (step 5 below). The remaining known differences are listed in [`Design/VISUAL_DIFFERENCES.md`](Design/VISUAL_DIFFERENCES.md).

## Play in a browser, with nothing installed

The project builds as a **WebGL** browser game in the cloud, either with Unity Build Automation (no installs) or with GitHub Actions. You then open a link to play the real Unity game on a laptop or phone. Step-by-step setup: **[CLOUD_BUILD.md](CLOUD_BUILD.md)**.

## Open the project on Windows (optional, full Unity editor)

1. **Install Unity 6.3.**
   - Install [Unity Hub](https://unity.com/download).
   - In Hub → **Installs → Install Editor**, choose **Unity 6.3 LTS** (6000.3.27f2, or any 6000.3.x).
   - Tick **Android Build Support** if you want to put it on a phone.
2. **Get the project.** Use one of these:
   - Download the zip you were sent, `BubbleWashKingdom_Unity6.3.zip`, and unzip it to a short path such as `C:\BubbleWash`.
   - Or, on GitHub, open branch `claude/new-session-oth0dd` and choose **Code → Download ZIP**.
   - Or clone it: `git clone https://github.com/josiahscalia5-dev/bubblegame.git`, then `git checkout claude/new-session-oth0dd`.
3. **Open it.**
   - Double-click **`Open_BubbleWash_In_Unity.bat`**.
   - Or, in Unity Hub, choose **Add → Add project from disk** and select the folder.
   - The first open takes a few minutes. Unity downloads glTFast and imports the castle and tunnel GLBs.
   - The Level 1 scene then **builds itself** and opens: `Assets/BubbleWash/Scenes/Level1_WasherEntry.unity`.
   - If it doesn't, use the menu **Bubble Wash → 1. Build Level 1 Scene (Screens 3-4)**.
4. **Play.**
   - In the **Game** tab, set a portrait size: open the resolution dropdown, press **+**, and add **1080 × 2160**.
   - Press **▶ Play**. See the controls below.
5. **Capture and compare.** This is the first real Unity test milestone.
   - Use **Bubble Wash → 2. Capture & Compare Screens 3 and 4** (Ctrl+Shift+K).
   - Unity enters Play mode by itself and positions the *running* game at each approved camera position. It lets the waves, foam, splashes, paddling and camera run for a moment, then photographs the result and leaves Play mode.
   - A folder opens with `Previews/Captures/Screen03_compare.png` and `Screen04_compare.png`. Each shows **approved | Unity | 50 % overlay**.
   - **Send me those two images** and I'll correct the largest differences first.
   - **Bubble Wash → 2b. Quick Capture (Edit Mode)** produces the same images without entering Play mode.
   - **F12** during Play saves a screenshot of any moment to `Previews/Captures/`.
6. **Optional checks.**
   - **Bubble Wash → 3. Validate Clearance, Gaps & Budget** checks against the real Meshy meshes:
     - the gap between tunnel segments;
     - castle/drum opening alignment;
     - mascot clearance in every lane, while floating and jumping;
     - camera clearance;
     - that the tower waterfalls stay off the run path;
     - the triangle budget.

     Results go to `Previews/validation_report.md`.
   - **Window → General → Test Runner → EditMode → Run All** runs the unit tests and a full build-and-validate test.

### Controls

| Action | Phone | Editor |
|---|---|---|
| Start the run (Screen 3 "Tap to Start") | tap | click, Space or Enter |
| Steer between the 3 lanes (lean and turn) | swipe left / right | drag left/right, ←/→, A/D |
| Jump (with a tumble flip, splash on landing) | swipe up | drag up, ↑, W |
| Dive under the water | swipe down | drag down, ↓, S |
| Spin on the water | tap while running | click, Space |
| Turbo Spin (fast spin, speed boost) / Bubble Blast (pulls in coins and socks) / Pause | HUD buttons | click them |
| FPS overlay / screenshot | three-finger tap | F1 / F12 |

The mascot floats on the moving waves and the raised path, paddles its arms, kicks its feet, blinks, and squashes and stretches as it moves. The opening loops back to Screen 3 after the third drum segment until Screens 5 onwards are built.

## Tuning the look

Select **Level1_WasherEntry** in the Hierarchy. The **Bubble Wash Look** component holds every look setting, and changes show immediately in the editor and in Play mode:
- water colours, foam, foam lace, caustics, reflections and drum-ring reflections;
- the tower waterfalls: colours, opacity, foam, glow and falling speed;
- the saturation and glow of the Meshy castle and drum;
- ring glow;
- bloom, saturation, contrast and exposure;
- fog and ambient light.

The raised water path (width, height, crown) is on the **Level 1 Environment** component.

## Adding the remaining Meshy models

Each upcoming model has a drop folder:

| Model | Folder | Replaces |
|---|---|---|
| Pink mascot | `Assets/BubbleWash/Models/Mascot/` | `PLACEHOLDER_PinkMascot` |
| Spinning brush | `Assets/BubbleWash/Models/SpinningBrush/` | **In:** the Meshy washing roller (`BubbleWash_WashingRoller_Claudia_Textured.glb`) replaces `PLACEHOLDER_SpinningBrush_*` |
| Rescue sock | `Assets/BubbleWash/Models/RescueSock/` | `PLACEHOLDER_LostSock_*` |
| Paw coin | `Assets/BubbleWash/Models/Coin/` | placeholder coins |
| Gem | `Assets/BubbleWash/Models/Gem/` | placeholder gem |
| Duck / golden figure at the portal | `Assets/BubbleWash/Models/RubberDuck/` | `PLACEHOLDER_RubberDuck` |

1. Drop the GLB into its folder.
2. Run **Bubble Wash → 1. Build Level 1 Scene**. The model is fitted to the size and position the approved screens need.
3. If a model faces the wrong way or needs a size tweak, edit **`Assets/BubbleWash/Config/MeshyAssetSlots.asset`**, which has rotation, size and offset per model. Then rebuild.
4. For the mascot's swimming animation, enter the names of its arm, foot and eye nodes in that asset. Without them it still floats, leans, flips, spins and squashes.

Or send me the GLBs and I'll wire them in.

## What is in the scene

| Part | Source |
|---|---|
| Castle portal | **Meshy** `Models/CastlePortal/BubbleWashCastle.glb`, rendered with `MeshyBaked.shader`. Its texture is unchanged; saturation and glow are tunable. |
| Washing-machine drum, 3 segments | **Meshy** `Models/WasherTunnel/BubbleWashTunnel_Mobile_2K_Lite.glb`. The white and gold ring stripes in its texture glow. |
| Waterfalls from both castle towers (Screen 3) | `Waterfall.shader` and spray particles. `TowerWaterfalls.cs` mounts them on the Meshy towers at the approved screen positions. The gold spouts and catch basins are `PLACEHOLDER_` pieces. |
| Electric-blue rushing water | `Water.shader`: raised crowned path with spill foam, foam lace and streaks, caustics, glints, and sky and drum-ring reflections. The mascot floats on the same surface (`WaveField.cs`). |
| Splashes, iridescent bubbles, sparkles, glowing rings, drum lights, bloom | particle systems, `IridescentBubble.shader`, `Glow.shader`, URP Volume |
| Follow camera fitted to Screen 3 and Screen 4 | `RunnerCameraRig.cs` |
| Movement, animation, collisions, collectibles, power-ups | `BubbleRunner.cs`, `MascotAnimator.cs`, `Collectible.cs`, `GameSession.cs` |
| HUD for Screens 3 and 4 | `GameHud.cs`. The sprites are generated stand-ins (`Tools/generate_ui_sprites.py`). |
| Spinning brushes, Screens 3 and 4 | **Meshy** `Models/SpinningBrush/BubbleWash_WashingRoller_Claudia_Textured.glb`, rendered with `MeshyBaked.shader`. Each roller spins about its long axis and has a capsule collider. It reaches as far into the drum as it can without touching any lane or jump. |
| Everything named `PLACEHOLDER_` | temporary until the Meshy model arrives |

How the two Meshy models are measured, aligned and chained is explained in [`Design/MODEL_MEASUREMENTS.md`](Design/MODEL_MEASUREMENTS.md).

## What has and hasn't been tested

Done in the cloud build environment, which has no Unity editor:
- All C# compiles with the Unity 6.3.27 editor's own compiler against its engine and editor assemblies, with both input backends.
  - uGUI and the Input System are built from their package sources.
  - The few URP types the code uses are checked against their URP 17.3 signatures.
  - The game code also compiles as the WebGL player sees it, without editor code.
- All 8 shaders compile with the DXC bundled with Unity 6.3, against URP 17.3's shader library. That covers every keyword variant (fog, instancing, additional lights, Forward / Forward+), for desktop and mobile API headers.
- The measurement code was run on both GLBs.
- The tower waterfall placement was checked against the real castle mesh. Both spouts reach the Meshy towers and sit within 1 % of the approved screen positions.

These checks can be re-run with [`Tools/verify/`](Tools/verify/README.md).

**Still needs your machine:**
- importing the project in the Unity editor;
- how the materials, lighting and particles actually look;
- Play-mode feel;
- the capture tool;
- frame rate on a phone.

The Meshy castle (150k triangles) plus three drum segments (136k each) total about 560k triangles. The three washing rollers add 133k each, about 960k in the whole scene, though not all of it is on screen at once. That is heavy for mid-range phones. If the frame rate on the phone is short, lower-poly Meshy exports are the fix, starting with the roller: a 20–30k-triangle version would look the same at these sizes.

## Project layout

```
Assets/BubbleWash/
  Models/            Meshy GLBs + drop folders for upcoming models
  Config/            MeshyAssetSlots.asset (created on first build)
  Scripts/Runtime/   gameplay, camera, FX, HUD, look tuning, measurement
  Scripts/Editor/    scene builder, capture & compare, validator, model slots
  Shaders/           water, Meshy baked, fur, bubbles, glow, particles, sky
  UI/                Fredoka Bold (OFL) and HUD sprites
  Tests/EditMode/    unit + scene validation tests
Design/              approved screens, measurements, visual differences
Previews/            build/validation reports, Unity captures
Assets/WebGLTemplates/BubbleWash/   portrait browser page for the WebGL build
.github/workflows/webgl-build.yml   cloud WebGL build (GameCI)
Tools/               HUD sprite generator; verify/ checks C# and shaders without the editor
Open_BubbleWash_In_Unity.bat
CLOUD_BUILD.md       browser version: cloud build + hosting steps
```
