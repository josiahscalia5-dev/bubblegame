# Bubble Wash Kingdom (Unity 6.3 LTS, mobile)

Faithful recreation of the 12 approved Bubble Wash Kingdom screens as real-time, playable 3D.
The approved designs are the permanent visual targets: [`Design/ApprovedScreens/`](Design/ApprovedScreens).

## Status

| Screen | State |
|---|---|
| 3 · Let's go! Into the washing machine | **Built, not yet verified.** Playable 3D scene: castle portal (Meshy), animated water, mascot controls, camera framing fitted to the approved image, HUD. Needs the Unity capture comparison before it can be called visually complete. |
| 4 · Rescue 5 lost socks | **Built, not yet verified.** Continuous with Screen 3: the same run enters three Meshy drum segments; socks, coins and gem are collected and counted. Same verification still needed. |
| 1, 2, 5–12 | Not started. |

Remaining differences are tracked in [`Design/VISUAL_DIFFERENCES.md`](Design/VISUAL_DIFFERENCES.md). No screen is marked complete until a Unity capture has been compared with the approved image.

**About the previews in this commit.** The cloud environment this was built in has no Unity editor or license. The images in [`Previews/PreCheck_WebGL/`](Previews/PreCheck_WebGL) come from a WebGL layout pre-check, **not from Unity**. It uses the same Meshy models, placement maths, camera framings and HUD layout, so it checks composition and alignment only. The real comparison comes from the one-click tool below.

## Open and test on Windows

1. Install **Unity Hub**, then **Unity 6000.3.27f2**, or any Unity 6.3 LTS, from the Hub's *Installs* tab. Add **Android Build Support**, and **iOS Build Support** if you will build for iPhone from a Mac.
2. Get the project:
   ```
   git clone https://github.com/josiahscalia5-dev/bubblegame.git
   cd bubblegame
   git checkout claude/new-session-oth0dd
   ```
3. In Unity Hub choose **Add → Add project from disk** and select the `bubblegame` folder, then open it.
   - The first import takes a few minutes: Unity downloads glTFast and imports both GLBs (about 17 MB each).
4. When importing finishes, the scene builds itself the first time and opens: `Assets/BubbleWash/Scenes/Level1_WasherEntry.unity`.
   - If it doesn't, use the menu **Bubble Wash → 1. Build Level 1 Scene (Screens 3-4)**.
   - The build log is written to `Previews/Level1_build_report.md`. It records the measured castle/tunnel sizes, the detected tunnel axis, scales and segment positions.
5. In the **Game** view, pick a portrait resolution, for example 1080×2160 (add it with the "+" in the resolution dropdown). Press **Play**.

### Controls

| Action | Touch | Editor |
|---|---|---|
| Start (Screen 3 "Tap to Start") | tap | click, Space or Enter |
| Change lane | swipe left / right | drag left/right, ←/→, A/D |
| Jump (with a tumble flip) | swipe up | drag up, ↑, W |
| Dive under the water | swipe down | drag down, ↓, S |
| Bubble Blast / Turbo Spin / Pause | HUD buttons | click the buttons |
| FPS overlay | three-finger tap | F1 |

The opening loops back to Screen 3 after the third drum segment, because Screens 5 onwards aren't built yet.

### Verify against the approved screens (please run and send me the results)

- **Bubble Wash → 2. Capture & Compare Screens 3 and 4**
  - Renders the actual Unity scene (URP, post-processing and HUD) at each approved screen's aspect ratio.
  - Writes `Previews/Captures/Screen03_compare.png` and `Screen04_compare.png`. Each shows approved | Unity | 50 % overlay.
  - Also writes `Screen0X_unity.png` and `compare_report.md`.
- **Bubble Wash → 3. Validate Clearance, Gaps & Budget** checks against the real Meshy meshes:
  - the gap between tunnel segments;
  - whether the castle portal lines up with the drum opening;
  - mascot clearance in every lane, while floating and at jump height;
  - camera clearance along its whole path;
  - the triangle and material budget.

  Results go to `Previews/validation_report.md`.
- **Window → General → Test Runner → EditMode → Run All** runs the unit tests:
  - opening measurement and tunnel axis detection;
  - segment chaining and lane clearance;
  - a full build-and-validate of the Level 1 scene.

You can also run the capture from a command prompt. It needs a GPU, so don't add `-nographics`:
```
"C:\Program Files\Unity\Hub\Editor\6000.3.27f2\Editor\Unity.exe" -projectPath . -executeMethod BubbleWash.EditorTools.ApprovedScreenCapture.CaptureFromCommandLine -logFile capture.log
```

### On a phone

**File → Build Profiles → Android → Switch Platform → Build And Run** with the phone connected by USB, with USB debugging on. Play a few laps. The FPS overlay (three-finger tap) and the `[BubbleWash perf]` log lines show the average and 1 % low frame rate.

## What is in the scene

| Part | Source |
|---|---|
| Castle portal | **Meshy** `Assets/BubbleWash/Models/CastlePortal/BubbleWashCastle.glb` |
| Washing-machine tunnel, 3 segments | **Meshy** `Assets/BubbleWash/Models/WasherTunnel/BubbleWashTunnel_Mobile_2K_Lite.glb` |
| Electric-blue water with waves, foam, wake and glints | `Shaders/Water.shader`; the mascot floats on the same waves (`WaveField.cs`) |
| Splashes, iridescent bubbles, sparkles | particle systems (`ParticleFactory.cs`, `IridescentBubble.shader`) |
| Glowing rings at the drum joints, drum lights, bloom | `Glow.shader`, URP Volume |
| Following camera with Screen 3 / Screen 4 framings | `RunnerCameraRig.cs` |
| Swimming-style mascot movement: paddle, kick, float, lean/turn, jump flip, turbo spin, dive, splash | `BubbleRunner.cs`, `MascotAnimator.cs` |
| HUD for Screens 3 and 4 | `GameHud.cs`; sprites from `Tools/generate_ui_sprites.py` |
| `PLACEHOLDER_PinkMascot` | temporary procedural mascot |
| `PLACEHOLDER_SpinningBrush_*`, `PLACEHOLDER_LostSock_*`, `PLACEHOLDER_RubberDuck`, `PLACEHOLDER_WaterSlideRails`, paw coins, gem | temporary procedural props |

Everything named `PLACEHOLDER_` is a stand-in until the Meshy model arrives. The HUD icons are generated stand-ins too, because the approved screens are only about 270 px wide.

### How the two Meshy models are connected

The models are measured on import; see [`Design/MODEL_MEASUREMENTS.md`](Design/MODEL_MEASUREMENTS.md).

1. **Castle portal.** The castle's see-through opening is found by projecting its triangles and fitting the largest circle that fits through the portal: radius 0.2705 units.
2. **Tunnel axis.** The tunnel is tested along X, Y and Z. It is only see-through along **X**, which confirms Meshy's X-length export, so it is rotated −90° about Y onto Unity's travel direction (+Z).
3. **Tunnel opening.** The tunnel's end porthole has radius 0.4272. Its paddle fins narrow the clear radius to 0.3443.
4. **Shared opening.** Both models are scaled so the castle portal and the drum porthole share one 2.5 m opening. The drum starts right behind the castle's narrowest portal ring, centred on the same axis.
5. **Chaining.** Three segments are chained with a 5.6 cm overlap so the joints never show a gap. Each joint gets a glowing ring.
6. **Water and lanes.** The water sits 1.5 m below the axis. The three lanes (0.85 m apart) and the camera are kept inside the 2.0 m clear radius past the fins.

## Adding the next Meshy models

Send the GLB and I will wire it in. Expected drop locations:
- mascot: `Assets/BubbleWash/Models/Mascot/`
- brushes, socks, coins, slides: `Assets/BubbleWash/Models/Props/`

The mascot needs its arms and feet as separate nodes so the swimming animation can drive them, or a rigged model. Placeholders keep their names, so you can see what is still temporary.

## Mobile performance notes

The castle (150k triangles) and each drum segment (136k) dominate the budget: about 560k triangles in total. That is heavy for mid-range phones. Measure on device first. If the frame rate is short of 60, the cheapest fix is a lower-poly Meshy export (Meshy's remesh, 30–50k triangles each) or LODs. Water, particles and post-processing are kept mobile-friendly:
- no realtime shadows;
- particle counts capped at about 90–220 per system;
- FXAA;
- render scale 0.8 on the Mobile quality level.

## Project layout

```
Assets/BubbleWash/
  Models/            Meshy GLBs (imported by glTFast)
  Scripts/Runtime/   gameplay, camera, FX, HUD, measurement
  Scripts/Editor/    scene builder, capture & compare, validator
  Shaders/           water, fur, bubbles, glow, particles, sky
  UI/                fonts (Fredoka Bold, OFL) and HUD sprites
  Tests/EditMode/    unit + scene validation tests
Design/              approved screens, measurements, visual differences
Previews/            build/validation reports, captures, WebGL pre-check
Tools/               sprite generator
```
