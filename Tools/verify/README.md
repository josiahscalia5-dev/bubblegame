# Verifying without the Unity editor

These scripts check the project where no Unity editor can be opened, for example in a cloud session. They use Unity's own compilers, taken from the Unity 6000.3.27f2 Linux editor archive. They don't replace a real Unity run: the look, Play-mode feel, the capture tool and phone frame rate still need the editor or the WebGL build.

| Script | What it checks |
|---|---|
| `setup.sh` | One-time setup, about 5 minutes. Streams the editor archive (4.5 GB) and keeps about 2 GB. Builds the package assemblies the project references. |
| `compile_csharp.sh` | Compiles Runtime, Editor and EditMode tests in three configurations: Input System backend, legacy input backend, and the WebGL player (no editor code). |
| `check_shaders.py` | Compiles every pass of every shader in `Assets/BubbleWash/Shaders`, in every `multi_compile` variant and both stages. Uses Unity 6.3's DXC against URP 17.3's shader library, with the D3D11 header and the Vulkan header with `SHADER_API_MOBILE`. Prints warnings that come from this project's code, not URP's. |
| `check_waterfalls.py` | Runs the `TowerWaterfalls` placement maths against the real castle GLB. Prints where each spout and basin lands and draws a preview beside the approved Screen 3. |

```bash
Tools/verify/setup.sh
Tools/verify/compile_csharp.sh
python3 -I Tools/verify/check_shaders.py
pip install numpy pillow pygltflib && python3 -I Tools/verify/check_waterfalls.py
```

The cache goes to `~/.cache/bubblewash-verify`. Set `BW_VERIFY_CACHE` to put it elsewhere.

## What is real and what is stubbed

- **Real:** the engine and editor assemblies, Roslyn, the .NET Standard 2.1 references and NUnit come from the editor. uGUI and the Input System are compiled from their package sources. Shaders compile against the real URP 17.3 and Core RP shader libraries.
- **Stubbed:** URP and Core RP C# (`urp_stubs/`). Their real sources need Burst, Collections and Unity's internal build defines. The stubs copy the URP 17.3 signatures of the few types this project uses: `Volume`, `VolumeProfile`, Bloom, Tonemapping, Color Adjustments, Vignette, `UniversalAdditionalCameraData`. If new code uses other URP types, add them to the stubs from the package source.
- **Not covered:** GLES3 (WebGL) shader translation. That header relies on Unity's own shader preprocessor, so the mobile code paths are checked through the Vulkan header instead.
