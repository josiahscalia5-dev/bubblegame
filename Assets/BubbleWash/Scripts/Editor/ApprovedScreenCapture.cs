using System;
using System.IO;
using System.Text;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.UI;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// One-click visual verification against all 12 approved screens, rendered by Unity itself (URP,
    /// post-processing, HUD) at each approved crop's aspect ratio.
    ///
    /// Bubble Wash > 2. Capture & Compare All 12 Screens (Ctrl+Shift+K)
    ///     Enters Play mode, poses the RUNNING game at each approved moment of Level 1 (Screens 3-12),
    ///     lets waves, foam, splashes, paddling, enemies and the follow camera run for a moment, captures,
    ///     exits Play mode, then captures the menu (Screens 1-2).
    /// Bubble Wash > 2b. Quick Capture (Edit Mode)
    ///     Same framings without entering Play mode (particles are pre-simulated).
    /// Batch: Unity.exe -projectPath . -executeMethod BubbleWash.EditorTools.ApprovedScreenCapture.CaptureFromCommandLine
    /// Output: Previews/Captures/ScreenNN_unity.png, ScreenNN_compare.png (approved | Unity | overlay), compare_report.md
    /// </summary>
    [InitializeOnLoad]
    public static class ApprovedScreenCapture
    {
        public const string ApprovedDir = "Design/ApprovedScreens";
        public const string OutDir = "Previews/Captures";
        const int Width = 1080;
        const string PendingKey = "BubbleWash.PlayCapturePending";
        const string RevealKey = "BubbleWash.PlayCaptureReveal";

        public struct Target
        {
            public int screen;
            public string approvedFile;
            public string title;
        }

        public static readonly Target[] Targets =
        {
            new Target { screen = 1, approvedFile = "01_Home_Screen.png", title = "Screen 1 - Home" },
            new Target { screen = 2, approvedFile = "02_Select_Level.png", title = "Screen 2 - Select Level" },
            new Target { screen = 3, approvedFile = "03_Lets_Go_Washer_Entry.png", title = "Screen 3 - Let's go! Into the washing machine!" },
            new Target { screen = 4, approvedFile = "04_Rescue_Socks_Inside_Tunnel.png", title = "Screen 4 - Rescue 5 lost socks" },
            new Target { screen = 5, approvedFile = "05_Jump_To_Side_Paths.png", title = "Screen 5 - Jump to Side Paths!" },
            new Target { screen = 6, approvedFile = "06_Drop_Down_To_Lower_Paths.png", title = "Screen 6 - Drop Down to Lower Paths!" },
            new Target { screen = 7, approvedFile = "07_Watch_Out_Spinning_Brushes.png", title = "Screen 7 - Watch out! Spinning brushes!" },
            new Target { screen = 8, approvedFile = "08_Collect_Coins_Gems_Socks.png", title = "Screen 8 - Collect Coins, Gems & Rescue Socks!" },
            new Target { screen = 9, approvedFile = "09_Avoid_Enemies.png", title = "Screen 9 - Avoid Enemies!" },
            new Target { screen = 10, approvedFile = "10_Enter_Bubble_Kingdom.png", title = "Screen 10 - Enter the Bubble Kingdom!" },
            new Target { screen = 11, approvedFile = "11_Rescue_Progress.png", title = "Screen 11 - Rescue progress 4/5" },
            new Target { screen = 12, approvedFile = "12_Level_Complete.png", title = "Screen 12 - Level Complete!" },
        };

        static readonly int[] LevelScreens = { 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };

        static StringBuilder _report;

        static ApprovedScreenCapture()
        {
            EditorApplication.playModeStateChanged += OnPlayModeChanged;
        }

        // ------------------------------------------------------------------ Play mode (the running game)

        [MenuItem("Bubble Wash/2. Capture & Compare All 12 Screens %#k", priority = 2)]
        public static void CaptureFromMenu()
        {
            if (EditorApplication.isPlaying) { Debug.LogWarning("[BubbleWash] Stop Play mode first; the capture enters Play mode by itself."); return; }
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo()) return;
            if (Level1SceneBuilder.SceneIsOutdated()) Level1SceneBuilder.Build();
            EditorSceneManager.OpenScene(Level1SceneBuilder.ScenePath, OpenSceneMode.Single);
            SessionState.SetBool(PendingKey, true);
            Debug.Log("[BubbleWash] Capture: entering Play mode to photograph the running game...");
            EditorApplication.EnterPlaymode();
        }

        static void OnPlayModeChanged(PlayModeStateChange change)
        {
            if (change == PlayModeStateChange.EnteredPlayMode && SessionState.GetBool(PendingKey, false))
            {
                SessionState.SetBool(PendingKey, false);
                Directory.CreateDirectory(OutDir);
                _report = Header("Play mode (running game)");
                var go = new GameObject("__BubbleWashCapture");
                var director = go.AddComponent<CaptureDirector>();
                director.screens = LevelScreens;
                director.capture = screen =>
                {
                    var rig = UnityEngine.Object.FindFirstObjectByType<RunnerCameraRig>();
                    var hud = UnityEngine.Object.FindFirstObjectByType<GameHud>();
                    CaptureOne(screen, rig.GetComponent<Camera>(), hud != null ? hud.GetComponent<Canvas>() : null, _report);
                };
                director.finished = () =>
                {
                    Finish(_report);
                    SessionState.SetBool(RevealKey, true);
                    EditorApplication.ExitPlaymode();
                };
            }
            else if (change == PlayModeStateChange.EnteredEditMode && SessionState.GetBool(RevealKey, false))
            {
                SessionState.SetBool(RevealKey, false);
                // The menu screens live in their own scene: capture them now, in edit mode.
                var menu = new StringBuilder();
                CaptureMenu(menu);
                File.AppendAllText(Path.Combine(OutDir, "compare_report.md"), menu.ToString());
                EditorSceneManager.OpenScene(Level1SceneBuilder.ScenePath, OpenSceneMode.Single);
                AssetDatabase.Refresh();
                EditorUtility.RevealInFinder(Path.GetFullPath(Path.Combine(OutDir, "Screen03_compare.png")));
                EditorUtility.DisplayDialog("Bubble Wash capture",
                    "Captured all 12 approved screens (3-12 from the running game, 1-2 from the menu).\n\n" + Path.GetFullPath(OutDir) +
                    "\n\nEach ScreenNN_compare.png shows: approved | Unity | 50% overlay.", "OK");
            }
        }

        // ------------------------------------------------------------------ Edit mode (quick)

        [MenuItem("Bubble Wash/2b. Quick Capture (Edit Mode)", priority = 3)]
        public static void QuickCaptureFromMenu()
        {
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo()) return;
            string report = CaptureAll();
            EditorUtility.RevealInFinder(Path.GetFullPath(Path.Combine(OutDir, "Screen03_compare.png")));
            Debug.Log(report);
        }

        public static void CaptureFromCommandLine()
        {
            try
            {
                if (Level1SceneBuilder.SceneIsOutdated()) Level1SceneBuilder.Build();
                Debug.Log(CaptureAll());
                EditorApplication.Exit(0);
            }
            catch (Exception e)
            {
                Debug.LogException(e);
                EditorApplication.Exit(1);
            }
        }

        public static string CaptureAll()
        {
            Directory.CreateDirectory(OutDir);
            var sb = Header("Edit mode (pre-simulated)");
            CaptureMenu(sb);

            if (Level1SceneBuilder.SceneIsOutdated()) Level1SceneBuilder.Build();
            EditorSceneManager.OpenScene(Level1SceneBuilder.ScenePath, OpenSceneMode.Single);

            var env = UnityEngine.Object.FindFirstObjectByType<Level1Environment>();
            var session = UnityEngine.Object.FindFirstObjectByType<GameSession>();
            var runner = UnityEngine.Object.FindFirstObjectByType<BubbleRunner>();
            var rig = UnityEngine.Object.FindFirstObjectByType<RunnerCameraRig>();
            var hud = UnityEngine.Object.FindFirstObjectByType<GameHud>();
            if (env == null || runner == null || rig == null) throw new InvalidOperationException("Level 1 scene is missing its environment, runner or camera rig. Rebuild it (Bubble Wash > 1).");
            env.MakeActive();
            if (session != null) session.MakeActive();
            var cam = rig.GetComponent<Camera>();
            var look = UnityEngine.Object.FindFirstObjectByType<BubbleWashLook>();
            if (look != null) look.Apply();
            var director = UnityEngine.Object.FindFirstObjectByType<SectionDirector>();
            var canvas = hud != null ? hud.GetComponent<Canvas>() : null;

            int socks = session != null ? session.socksRescued : 0;
            foreach (int screen in LevelScreens)
            {
                if (!Pose(screen, env, runner, rig, hud, director, session))
                {
                    sb.AppendLine($"## Screen {screen}").AppendLine().AppendLine("- Not in this Level 1 scene: rebuild it with Bubble Wash > 1.").AppendLine();
                    continue;
                }
                CaptureOne(screen, cam, canvas, sb);
            }

            // Leave the scene as it was saved.
            if (session != null) session.socksRescued = socks;
            runner.ResetToStart();
            rig.mode = CameraMode.Default;
            rig.Snap();
            if (hud != null) { hud.ShowScreen(3); hud.Refresh(); }
            return Finish(sb);
        }

        /// <summary>Screens 1 and 2: the menu scene with the approved counters.</summary>
        static void CaptureMenu(StringBuilder sb)
        {
            if (!File.Exists(MainMenuBuilder.ScenePath)) MainMenuBuilder.Build();
            EditorSceneManager.OpenScene(MainMenuBuilder.ScenePath, OpenSceneMode.Single);
            var menu = UnityEngine.Object.FindFirstObjectByType<MenuUI>();
            var director = UnityEngine.Object.FindFirstObjectByType<MainMenuDirector>();
            var cam = Camera.main;
            if (menu == null || cam == null)
            {
                sb.AppendLine("## Screens 1-2").AppendLine().AppendLine("- Menu scene incomplete: rebuild it with Bubble Wash > 1b.").AppendLine();
                return;
            }
            if (director != null)
            {
                director.PushWater(2.4f);
                if (director.mascot != null) director.mascot.Tick(0.016f, 2.4f);
                if (director.thumbnailCamera != null) director.thumbnailCamera.Render();
            }
            SimulateParticles(cam);
            var canvas = menu.GetComponent<Canvas>();
            menu.ShowHome(); menu.ShowApprovedValues();
            CaptureOne(1, cam, canvas, sb);
            menu.ShowSelect(); menu.ShowApprovedValues();
            CaptureOne(2, cam, canvas, sb);
            menu.ShowHome(); menu.Refresh();
        }

        // ------------------------------------------------------------------ shared

        static StringBuilder Header(string mode)
        {
            var sb = new StringBuilder();
            sb.AppendLine("# Approved screen comparison").AppendLine();
            sb.AppendLine($"Captured {DateTime.Now:yyyy-MM-dd HH:mm} - {mode} - Unity {Application.unityVersion}, {SystemInfo.graphicsDeviceName}.").AppendLine();
            sb.AppendLine("Each comparison image is: approved design | Unity render | 50 % overlay (for alignment).").AppendLine();
            return sb;
        }

        static string Finish(StringBuilder sb)
        {
            sb.AppendLine("Send the ScreenNN_compare.png images back for the next round of corrections.");
            sb.AppendLine("Screens are only marked complete after these comparisons are reviewed against Design/VISUAL_DIFFERENCES.md.");
            File.WriteAllText(Path.Combine(OutDir, "compare_report.md"), sb.ToString());
            Debug.Log("[BubbleWash] Capture finished: " + Path.GetFullPath(OutDir));
            return sb.ToString();
        }

        /// <summary>Render one approved screen with the given camera and write the render + comparison images.</summary>
        static void CaptureOne(int screen, Camera cam, Canvas canvas, StringBuilder sb)
        {
            var t = Array.Find(Targets, x => x.screen == screen);
            string approvedPath = Path.Combine(ApprovedDir, t.approvedFile);
            var approved = LoadPng(approvedPath);
            int height = approved != null ? Mathf.RoundToInt(Width * (float)approved.height / approved.width) : Width * 2;

            var render = Render(cam, canvas, Width, height);
            string renderPath = Path.Combine(OutDir, $"Screen{screen:00}_unity.png");
            File.WriteAllBytes(renderPath, render.EncodeToPNG());
            sb.AppendLine($"## {t.title}").AppendLine();
            sb.AppendLine($"- Unity render: `{renderPath}` ({Width}x{height})");
            if (approved != null)
            {
                var scaled = Resize(approved, Width, height);
                var compare = SideBySide(scaled, render);
                string comparePath = Path.Combine(OutDir, $"Screen{screen:00}_compare.png");
                File.WriteAllBytes(comparePath, compare.EncodeToPNG());
                float diff = MeanDifference(scaled, render);
                sb.AppendLine($"- Approved: `{approvedPath}` ({approved.width}x{approved.height})");
                sb.AppendLine($"- Comparison: `{comparePath}`");
                sb.AppendLine($"- Mean colour difference (0 = identical): {diff:F3}. Tracks progress between captures; not a pass/fail score.");
                UnityEngine.Object.DestroyImmediate(scaled);
                UnityEngine.Object.DestroyImmediate(compare);
                UnityEngine.Object.DestroyImmediate(approved);
            }
            else sb.AppendLine($"- Approved image missing: `{approvedPath}`");
            sb.AppendLine();
            UnityEngine.Object.DestroyImmediate(render);
        }

        /// <summary>Pose the mascot, camera, water, particles and HUD for an approved Level 1 screen (3-12).</summary>
        public static bool Pose(int screen, Level1Environment env, BubbleRunner runner, RunnerCameraRig rig, GameHud hud,
                                SectionDirector director, GameSession session)
        {
            const float time = 2.4f; // fixed so captures are repeatable
            WaveField.Time = time;
            if (!ApprovedScreenPoses.Pose(screen, env, runner, rig, hud, director, session, time)) return false;

            var cam = rig.GetComponent<Camera>();
            foreach (var f in UnityEngine.Object.FindObjectsByType<AmbientFollower>(FindObjectsSortMode.None))
            {
                f.follow = rig.transform;
                f.SnapNow();
            }
            SimulateParticles(cam);
            var splash = runner.GetComponent<SplashFX>();
            if (splash != null && splash.wake != null)
            {
                splash.Wake(runner.transform.position, runner.cruiseSpeed, false);
                splash.wake.Simulate(1.2f, true, true, true);
            }
            return true;
        }

        static void SimulateParticles(Camera cam)
        {
            foreach (var b in UnityEngine.Object.FindObjectsByType<Billboard>(FindObjectsSortMode.None)) b.Face(cam);
            foreach (var ps in UnityEngine.Object.FindObjectsByType<ParticleSystem>(FindObjectsSortMode.None))
            {
                if (ps.main.loop) ps.Simulate(4f, true, true, true);
            }
        }

        static Texture2D Render(Camera cam, Canvas canvas, int w, int h)
        {
            var desc = new RenderTextureDescriptor(w, h, RenderTextureFormat.ARGB32, 24) { sRGB = true, msaaSamples = 1 };
            var rt = RenderTexture.GetTemporary(desc);
            var oldMode = canvas != null ? canvas.renderMode : RenderMode.ScreenSpaceOverlay;
            var oldTarget = cam.targetTexture;
            try
            {
                cam.targetTexture = rt;
                if (canvas != null)
                {
                    // Overlay canvases are not part of camera renders; draw the HUD through the camera instead.
                    canvas.renderMode = RenderMode.ScreenSpaceCamera;
                    canvas.worldCamera = cam;
                    canvas.planeDistance = cam.nearClipPlane + 0.05f;
                    var scaler = canvas.GetComponent<CanvasScaler>();
                    if (scaler != null) { scaler.enabled = false; scaler.enabled = true; }
                    Canvas.ForceUpdateCanvases();
                }
                var request = new RenderPipeline.StandardRequest();
                if (RenderPipeline.SupportsRenderRequest(cam, request))
                {
                    request.destination = rt;
                    RenderPipeline.SubmitRenderRequest(cam, request);
                }
                else
                {
                    cam.Render();
                }
                var prev = RenderTexture.active;
                RenderTexture.active = rt;
                var tex = new Texture2D(w, h, TextureFormat.RGBA32, false);
                tex.ReadPixels(new Rect(0, 0, w, h), 0, 0);
                tex.Apply();
                RenderTexture.active = prev;
                return tex;
            }
            finally
            {
                cam.targetTexture = oldTarget;
                if (canvas != null) { canvas.renderMode = oldMode; canvas.worldCamera = null; }
                RenderTexture.ReleaseTemporary(rt);
            }
        }

        static Texture2D LoadPng(string path)
        {
            if (!File.Exists(path)) return null;
            var tex = new Texture2D(2, 2, TextureFormat.RGBA32, false);
            tex.LoadImage(File.ReadAllBytes(path));
            return tex;
        }

        static Texture2D Resize(Texture2D src, int w, int h)
        {
            var rt = RenderTexture.GetTemporary(new RenderTextureDescriptor(w, h, RenderTextureFormat.ARGB32, 0) { sRGB = true });
            src.filterMode = FilterMode.Bilinear;
            Graphics.Blit(src, rt);
            var prev = RenderTexture.active;
            RenderTexture.active = rt;
            var tex = new Texture2D(w, h, TextureFormat.RGBA32, false);
            tex.ReadPixels(new Rect(0, 0, w, h), 0, 0);
            tex.Apply();
            RenderTexture.active = prev;
            RenderTexture.ReleaseTemporary(rt);
            return tex;
        }

        /// <summary>[approved | render | 50 % overlay] with 24 px gutters and a coloured header bar per panel.</summary>
        static Texture2D SideBySide(Texture2D approved, Texture2D render)
        {
            int w = approved.width, h = approved.height, gap = 24, header = 36;
            var outTex = new Texture2D(w * 3 + gap * 4, h + gap * 2 + header, TextureFormat.RGBA32, false);
            var fill = new Color32[outTex.width * outTex.height];
            for (int i = 0; i < fill.Length; i++) fill[i] = new Color32(32, 26, 64, 255);
            outTex.SetPixels32(fill);
            var a = approved.GetPixels32();
            var r = render.GetPixels32();
            var o = new Color32[a.Length];
            for (int i = 0; i < a.Length; i++) o[i] = Color32.Lerp(a[i], r[i], 0.5f);
            outTex.SetPixels32(gap, gap, w, h, a);
            outTex.SetPixels32(gap * 2 + w, gap, w, h, r);
            outTex.SetPixels32(gap * 3 + w * 2, gap, w, h, o);
            // header bars: green = approved, blue = Unity, purple = overlay
            Bar(outTex, gap, h + gap + 6, w, header - 12, new Color32(80, 200, 120, 255));
            Bar(outTex, gap * 2 + w, h + gap + 6, w, header - 12, new Color32(70, 140, 255, 255));
            Bar(outTex, gap * 3 + w * 2, h + gap + 6, w, header - 12, new Color32(190, 110, 255, 255));
            outTex.Apply();
            return outTex;
        }

        static void Bar(Texture2D t, int x, int y, int w, int h, Color32 c)
        {
            var px = new Color32[w * h];
            for (int i = 0; i < px.Length; i++) px[i] = c;
            t.SetPixels32(x, y, w, h, px);
        }

        static float MeanDifference(Texture2D a, Texture2D b)
        {
            var pa = a.GetPixels32();
            var pb = b.GetPixels32();
            double sum = 0;
            for (int i = 0; i < pa.Length; i++)
                sum += (Mathf.Abs(pa[i].r - pb[i].r) + Mathf.Abs(pa[i].g - pb[i].g) + Mathf.Abs(pa[i].b - pb[i].b)) / (3.0 * 255.0);
            return (float)(sum / pa.Length);
        }
    }
}
