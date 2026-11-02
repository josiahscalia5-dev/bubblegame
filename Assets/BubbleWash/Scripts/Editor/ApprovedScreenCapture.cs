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
    /// One-click visual verification against the approved screens, rendered by Unity itself (URP,
    /// post-processing, HUD) at each approved crop's aspect ratio.
    ///
    /// Bubble Wash > 2. Capture & Compare Screens 3 and 4 (Ctrl+Shift+K)
    ///     Enters Play mode, poses the RUNNING game at each approved camera position, lets waves,
    ///     foam, splashes, paddling and the follow camera run for a moment, captures, exits Play mode.
    /// Bubble Wash > 2b. Quick Capture (Edit Mode)
    ///     Same framing without entering Play mode (particles are pre-simulated).
    /// Batch: Unity.exe -projectPath . -executeMethod BubbleWash.EditorTools.ApprovedScreenCapture.CaptureFromCommandLine
    /// Output: Previews/Captures/Screen03_unity.png, Screen03_compare.png (approved | Unity | overlay), compare_report.md
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
            new Target { screen = 3, approvedFile = "03_Lets_Go_Washer_Entry.png", title = "Screen 3 - Let's go! Into the washing machine!" },
            new Target { screen = 4, approvedFile = "04_Rescue_Socks_Inside_Tunnel.png", title = "Screen 4 - Rescue 5 lost socks" },
        };

        static StringBuilder _report;

        static ApprovedScreenCapture()
        {
            EditorApplication.playModeStateChanged += OnPlayModeChanged;
        }

        // ------------------------------------------------------------------ Play mode (the running game)

        [MenuItem("Bubble Wash/2. Capture & Compare Screens 3 and 4 %#k", priority = 2)]
        public static void CaptureFromMenu()
        {
            if (EditorApplication.isPlaying) { Debug.LogWarning("[BubbleWash] Stop Play mode first; the capture enters Play mode by itself."); return; }
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo()) return;
            if (!File.Exists(Level1SceneBuilder.ScenePath)) Level1SceneBuilder.Build();
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
                director.capture = screen =>
                {
                    var rig = UnityEngine.Object.FindFirstObjectByType<RunnerCameraRig>();
                    var hud = UnityEngine.Object.FindFirstObjectByType<GameHud>();
                    CaptureOne(screen, rig.GetComponent<Camera>(), hud, _report);
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
                AssetDatabase.Refresh();
                EditorUtility.RevealInFinder(Path.GetFullPath(Path.Combine(OutDir, "Screen03_compare.png")));
                EditorUtility.DisplayDialog("Bubble Wash capture",
                    "Captured the running game for Screens 3 and 4.\n\n" + Path.GetFullPath(OutDir) +
                    "\n\nScreen03_compare.png and Screen04_compare.png show: approved | Unity | 50% overlay.", "OK");
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
                if (!File.Exists(Level1SceneBuilder.ScenePath)) Level1SceneBuilder.Build();
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
            if (!File.Exists(Level1SceneBuilder.ScenePath)) Level1SceneBuilder.Build();
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

            var sb = Header("Edit mode (pre-simulated)");
            foreach (var t in Targets)
            {
                Pose(t.screen, env, runner, rig, hud);
                CaptureOne(t.screen, cam, hud, sb);
            }

            // Leave the scene as it was saved.
            runner.ResetToStart();
            rig.Snap();
            if (hud != null) hud.ShowScreen(3);
            return Finish(sb);
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
            sb.AppendLine("Send Screen03_compare.png and Screen04_compare.png back for the next round of corrections.");
            sb.AppendLine("Screens are only marked complete after these comparisons are reviewed against Design/VISUAL_DIFFERENCES.md.");
            File.WriteAllText(Path.Combine(OutDir, "compare_report.md"), sb.ToString());
            Debug.Log("[BubbleWash] Capture finished: " + Path.GetFullPath(OutDir));
            return sb.ToString();
        }

        /// <summary>Render one approved screen with the given camera and write the render + comparison images.</summary>
        static void CaptureOne(int screen, Camera cam, GameHud hud, StringBuilder sb)
        {
            var t = Array.Find(Targets, x => x.screen == screen);
            string approvedPath = Path.Combine(ApprovedDir, t.approvedFile);
            var approved = LoadPng(approvedPath);
            int height = approved != null ? Mathf.RoundToInt(Width * (float)approved.height / approved.width) : Width * 2;

            var render = Render(cam, hud, Width, height);
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

        /// <summary>Pose the mascot, camera, water, particles and HUD for an approved screen.</summary>
        public static void Pose(int screen, Level1Environment env, BubbleRunner runner, RunnerCameraRig rig, GameHud hud)
        {
            var l = env.layout;
            const float time = 2.4f; // fixed so captures are repeatable
            WaveField.Time = time;
            float z = screen == 3 ? l.startZ : ScreenComposition.Screen4Z(l);
            runner.PoseAt(z, l.laneCount / 2, time);
            env.PushWaveGlobals(runner.transform.position);
            var anim = runner.GetComponent<MascotAnimator>();
            if (anim != null) anim.Tick(0.016f, time);
            rig.ApplyPreset(screen == 3 ? rig.screen3 : rig.screen4, runner.transform.position);

            foreach (var f in UnityEngine.Object.FindObjectsByType<AmbientFollower>(FindObjectsSortMode.None))
            {
                f.follow = rig.transform;
                f.SnapNow();
            }
            foreach (var b in UnityEngine.Object.FindObjectsByType<Billboard>(FindObjectsSortMode.None)) b.Face(rig.GetComponent<Camera>());
            foreach (var ps in UnityEngine.Object.FindObjectsByType<ParticleSystem>(FindObjectsSortMode.None))
            {
                if (ps.main.loop) ps.Simulate(4f, true, true, true);
            }
            var splash = runner.GetComponent<SplashFX>();
            if (splash != null && splash.wake != null)
            {
                splash.Wake(runner.transform.position, runner.cruiseSpeed, false);
                splash.wake.Simulate(1.2f, true, true, true);
            }
            if (hud != null)
            {
                hud.Refresh();
                hud.ShowScreen(screen);
            }
        }

        static Texture2D Render(Camera cam, GameHud hud, int w, int h)
        {
            var desc = new RenderTextureDescriptor(w, h, RenderTextureFormat.ARGB32, 24) { sRGB = true, msaaSamples = 1 };
            var rt = RenderTexture.GetTemporary(desc);
            Canvas canvas = hud != null ? hud.GetComponent<Canvas>() : null;
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
