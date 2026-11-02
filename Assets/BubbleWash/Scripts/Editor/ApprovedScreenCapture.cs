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
    /// One-click visual verification: renders the running-game framing for each approved screen with
    /// the real Unity renderer (URP, post-processing, HUD) at the approved crop's aspect ratio, then
    /// writes side-by-side and overlay comparisons next to the approved image.
    ///
    /// Menu: Bubble Wash > 2. Capture & Compare Screens 3 and 4
    /// Batch: Unity.exe -projectPath . -executeMethod BubbleWash.EditorTools.ApprovedScreenCapture.CaptureFromCommandLine
    /// (run without -nographics; it needs a GPU).
    /// Output: Previews/Captures/Screen03_unity.png, Screen03_compare.png, ... and compare_report.md
    /// </summary>
    public static class ApprovedScreenCapture
    {
        public const string ApprovedDir = "Design/ApprovedScreens";
        public const string OutDir = "Previews/Captures";
        const int Width = 1080;

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

        [MenuItem("Bubble Wash/2. Capture & Compare Screens 3 and 4", priority = 2)]
        public static void CaptureFromMenu()
        {
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo()) return;
            string report = CaptureAll();
            EditorUtility.RevealInFinder(Path.Combine(OutDir, "compare_report.md"));
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

            var sb = new StringBuilder();
            sb.AppendLine("# Approved screen comparison").AppendLine();
            sb.AppendLine($"Captured {DateTime.Now:yyyy-MM-dd HH:mm} with Unity {Application.unityVersion}, {SystemInfo.graphicsDeviceName}.").AppendLine();
            sb.AppendLine("Each comparison image is: approved design | Unity render | 50 % overlay (for alignment).").AppendLine();

            foreach (var t in Targets)
            {
                string approvedPath = Path.Combine(ApprovedDir, t.approvedFile);
                var approved = LoadPng(approvedPath);
                int height = approved != null ? Mathf.RoundToInt(Width * (float)approved.height / approved.width) : Width * 2;

                Pose(t.screen, env, runner, rig, hud);
                var render = Render(cam, hud, Width, height);
                string renderPath = Path.Combine(OutDir, $"Screen{t.screen:00}_unity.png");
                File.WriteAllBytes(renderPath, render.EncodeToPNG());

                string comparePath = Path.Combine(OutDir, $"Screen{t.screen:00}_compare.png");
                if (approved != null)
                {
                    var scaled = Resize(approved, Width, height);
                    var compare = SideBySide(scaled, render);
                    File.WriteAllBytes(comparePath, compare.EncodeToPNG());
                    float diff = MeanDifference(scaled, render);
                    sb.AppendLine($"## {t.title}").AppendLine();
                    sb.AppendLine($"- Approved: `{approvedPath}` ({approved.width}x{approved.height})");
                    sb.AppendLine($"- Unity render: `{renderPath}` ({Width}x{height})");
                    sb.AppendLine($"- Comparison: `{comparePath}`");
                    sb.AppendLine($"- Mean colour difference (0 = identical, 1 = opposite): {diff:F3}. Use it to track progress between captures; it is not a pass/fail score.");
                    sb.AppendLine();
                    UnityEngine.Object.DestroyImmediate(scaled);
                    UnityEngine.Object.DestroyImmediate(compare);
                }
                else
                {
                    sb.AppendLine($"## {t.title}\n\n- Approved image missing: `{approvedPath}`\n");
                }
                UnityEngine.Object.DestroyImmediate(render);
                if (approved != null) UnityEngine.Object.DestroyImmediate(approved);
            }

            // Leave the scene as it was saved.
            runner.ResetToStart();
            rig.Snap();
            if (hud != null) hud.ShowScreen(3);
            sb.AppendLine("Review the differences against Design/VISUAL_DIFFERENCES.md before marking a screen complete.");
            File.WriteAllText(Path.Combine(OutDir, "compare_report.md"), sb.ToString());
            AssetDatabase.Refresh();
            return sb.ToString();
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
