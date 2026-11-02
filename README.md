# Bubble Wash Kingdom (Unity 6.3 LTS, mobile)

This project recreates the 12 approved Bubble Wash Kingdom screens as real-time, playable 3D. The approved designs are the permanent visual targets: [`Design/ApprovedScreens/`](Design/ApprovedScreens).

## Status

Every screen below is built in code (C# and shaders, compile-checked). **None has been rendered in Unity yet**, so none is marked visually complete. That decision waits for real Unity captures compared against the approved images (step 5 below).

| Screen | What's built (code) | Visual check in Unity |
|---|---|---|
| 1 · Home | Menu scene: live Meshy castle with waterfalls, mascot and friends, crown + logo, Play, bottom bar (Levels opens Select Level; Characters, Shop and Settings say "coming soon"). Counters come from saved progress. | not yet |
| 2 · Select Level | Level 1 card with a live 3D picture, its stars and Play (loads Level 1). Levels 2–4 are locked until the level before is finished. | not yet |
| 3 · Let's go! | Meshy castle portal with tower waterfalls, raised flowing water path, "Tap to Start" HUD. | not yet |
| 4 · Rescue 5 lost socks | Three Meshy drum segments with a swirl layer; socks, coins and gem to collect; 0/5 counter. | not yet |
| 5 · Jump to Side Paths! | Out of the drum onto outdoor slides. Swipe toward a raised side path to hop up onto it; coins along it. | not yet |
| 6 · Drop Down to Lower Paths! | Swipe back or down, or reach the path's end, to drop to the main path. The path's end pours off as a waterfall. | not yet |
| 7 · Watch out! Spinning brushes! | A second Meshy drum. Brushes reach into the outer lanes and cost a heart. | not yet |
| 8 · Collect Coins, Gems & Rescue Socks! | The camera swings round to the mascot's face as it collects coins, the special gem and sock 4. | not yet |
| 9 · Avoid Enemies! | Enemies drift across the lanes. Bubble Blast pops them and Turbo Spin barges through them. | not yet |
| 10 · Enter the Bubble Kingdom! | Floating islands with waterfalls and castles, plus the kingdom gate. | not yet |
| 11 · Rescue progress 4/5 | The camera faces the mascot under the gate, with cheering socks and the centred mission panel; sock 5 comes just after. | not yet |
| 12 · Level Complete! | Finish with friends and a treasure chest; stars, checklist (5 socks, 50 coins, 1 special gem), rewards; Next Level returns to Select Level with Level 2 unlocked. | not yet |

Everything named `PLACEHOLDER_` is waiting for its Meshy model: see [`Design/MISSING_ASSETS.md`](Design/MISSING_ASSETS.md). The known differences per screen are in [`Design/VISUAL_DIFFERENCES.md`](Design/VISUAL_DIFFERENCES.md).

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
   - The menu and Level 1 scenes then **build themselves**, and the menu opens: `Assets/BubbleWash/Scenes/MainMenu.unity` (Screens 1-2) and `Level1_WasherEntry.unity` (Screens 3-12).
   - A Level 1 scene made by an older version of the project is rebuilt automatically.
   - If they don't build, use **Bubble Wash → 1. Build Level 1 Scene (Screens 3-12)** and **1b. Build Menu Scene (Screens 1-2)**.
4. **Play.**
   - In the **Game** tab, set a portrait size: open the resolution dropdown, press **+**, and add **1080 × 2160**.
   - Press **▶ Play** in the menu scene, then **Play → Level 1 → Play**. See the controls below.
5. **Capture and compare.** This is the first real Unity test milestone.
   - Use **Bubble Wash → 2. Capture & Compare All 12 Screens** (Ctrl+Shift+K).
   - Unity enters Play mode by itself and puts the *running* game into each approved moment of Level 1 (Screens 3–12). It lets the waves, foam, splashes, paddling, enemies and camera run for a moment, photographs each one, then leaves Play mode and photographs the menu (Screens 1–2).
   - A folder opens with `Previews/Captures/Screen01_compare.png` … `Screen12_compare.png`. Each shows **approved | Unity | 50 % overlay**.
   - **Send me those images** and I'll correct the largest differences first.
   - **Bubble Wash → 2b. Quick Capture (Edit Mode)** produces the same images without entering Play mode.
   - **F12** during Play saves a screenshot of any moment to `Previews/Captures/`.
6. **Optional checks.**
   - **Bubble Wash → 3. Validate Clearance, Gaps & Budget** checks against the real Meshy meshes:
     - the gap between tunnel segments;
     - castle/drum opening alignment;
     - mascot clearance in every lane, while floating and jumping;
     - camera clearance;
     - the triangle budget.

     Results go to `Previews/validation_report.md`.
   - **Window → General → Test Runner → EditMode → Run All** runs the unit tests and a full build-and-validate test.

### Controls

| Action | Phone | Editor |
|---|---|---|
| Start the run (Screen 3 "Tap to Start") | tap | click, Space or Enter |
| Steer between the 3 lanes (lean and turn) | swipe left / right | drag left/right, ←/→, A/D |
| Hop up onto a side path (Screen 5): from the outer lane, swipe toward it | swipe left / right | ←/→ |
| Drop down from a side path (Screen 6) | swipe back toward the middle, or down | →/←, ↓ |
| Jump (with a tumble flip, splash on landing) | swipe up | drag up, ↑, W |
| Dive under the water | swipe down | drag down, ↓, S |
| Spin on the water | tap while running | click, Space |
| Turbo Spin (fast spin, speed boost, passes brushes and enemies safely) / Bubble Blast (pulls in coins and socks, pops enemies ahead) / Pause | HUD buttons | click them |
| FPS overlay / screenshot | three-finger tap | F1 / F12 |

The mascot floats on the moving waves and the raised path, paddles its arms, kicks its feet, blinks, and squashes and stretches as it moves. The opening loops back to Screen 3 after the third drum segment until Screens 5 onwards are built.

## Tuning the look

Select **Level1_WasherEntry** in the Hierarchy. The **Bubble Wash Look** component holds every look setting, and changes show immediately in the editor and in Play mode:
- water colours, foam, foam lace, caustics, reflections and drum-ring reflections;
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
| Spinning brush | `Assets/BubbleWash/Models/SpinningBrush/` | `PLACEHOLDER_SpinningBrush_*` |
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
| Electric-blue rushing water | `Water.shader`: raised crowned path with spill foam, foam lace and streaks, caustics, glints, and sky and drum-ring reflections. The mascot floats on the same surface (`WaveField.cs`). |
| Splashes, iridescent bubbles, sparkles, glowing rings, drum lights, bloom | particle systems, `IridescentBubble.shader`, `Glow.shader`, URP Volume |
| Follow camera with a framing fitted to each approved screen | `RunnerCameraRig.cs` |
| Movement, side-path hops, animation, collisions, hazards, collectibles, power-ups, finish | `BubbleRunner.cs`, `SidePath.cs`, `Hazard.cs`, `MascotAnimator.cs`, `Collectible.cs`, `GameSession.cs` |
| Screens 5–12 in order along the level (banners, camera, HUD per stretch) | `SectionDirector.cs`, built by `Editor/Level1Sections.cs` |
| Second drum, side paths, kingdom, finish | `Editor/Level1Sections.cs`. The second drum and the kingdom gate reuse the Meshy models. |
| HUD (Screens 3–11), Level Complete (12), menu (1–2) | `GameHud.cs`, `LevelCompleteUI.cs`, `MenuUI.cs`. The sprites are generated stand-ins (`Tools/generate_ui_sprites.py`). |
| Saved hearts, coins, gems, stars, unlocked levels | `PlayerProgress.cs` |
| Everything named `PLACEHOLDER_` | temporary until the Meshy model arrives |

How the two Meshy models are measured, aligned and chained is explained in [`Design/MODEL_MEASUREMENTS.md`](Design/MODEL_MEASUREMENTS.md).

## What has and hasn't been tested

Done in the cloud build environment, which has no Unity editor:
- All C# compiles against the Unity 6.3 reference assemblies, uGUI, and the URP and Input System APIs, with both input backends. The edit-mode tests compile too.
- All 9 shaders compile with Microsoft DXC against URP 17.3's shader library, in every keyword variant: fog, additional lights, and Forward / Forward+.
- The measurement code was run on both GLBs.

**Still needs your machine:**
- importing the project in the Unity editor;
- how the materials, lighting and particles actually look;
- Play-mode feel;
- the capture tool;
- frame rate on a phone.

The Meshy castle (150k triangles) and each drum segment (136k) are heavy for mid-range phones. The full level reuses them: six drum segments, the kingdom gate and two island castles. To keep the cost down, `ZRangeVisibility` stops drawing the parts of the level the camera has already left or hasn't reached. If the frame rate on the phone is still short, lower-poly Meshy exports are the fix.

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
Tools/               HUD sprite generator
Open_BubbleWash_In_Unity.bat
CLOUD_BUILD.md       browser version: cloud build + hosting steps
```
