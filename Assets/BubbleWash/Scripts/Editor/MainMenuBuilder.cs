using System.IO;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;
using UnityEngine.UI;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// Builds the menu scene for approved Screen 1 (Home) and Screen 2 (Select Level): the Meshy castle
    /// with tower waterfalls behind the logo, the mascot facing the player with the duck, sock buddy,
    /// water-drop buddy, star ball and paw coin around it, bubbling water and foam clouds, plus the
    /// uGUI screens (<see cref="MenuUI"/>). Camera framing is fitted to Screen 1: portal centre at 49 %
    /// height and 31 % of the width, mascot centred at 67 % height and 52 % of the width.
    /// </summary>
    public static class MainMenuBuilder
    {
        public const string ScenePath = Level1SceneBuilder.Root + "/Scenes/MainMenu.unity";
        const string ThumbPath = Level1SceneBuilder.GeneratedDir + "/Level1Thumbnail.renderTexture";
        const float Aspect1 = 276f / 537f;

        [MenuItem("Bubble Wash/1b. Build Menu Scene (Screens 1-2)", priority = 1)]
        public static void BuildFromMenu()
        {
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo()) return;
            Build();
            EditorUtility.DisplayDialog("Bubble Wash", "Menu scene built:\n" + ScenePath, "OK");
        }

        public static void Build()
        {
            foreach (var p in new[] { Level1SceneBuilder.GeneratedDir, Level1SceneBuilder.GeneratedDir + "/Materials", Level1SceneBuilder.GeneratedDir + "/Meshes", Level1SceneBuilder.Root + "/Scenes" })
                if (!AssetDatabase.IsValidFolder(p)) AssetDatabase.CreateFolder(Path.GetDirectoryName(p).Replace('\\', '/'), Path.GetFileName(p));
            HudImport.ConfigureSprites();
            PropFactory.Begin();
            var mats = new MaterialSet();
            mats.Create();

            var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);
            var root = new GameObject("MainMenu").transform;
            root.gameObject.AddComponent<PerformanceProbe>();
            var sun = Level1SceneBuilder.SetupLighting(mats);
            RenderSettings.fogStartDistance = 60f;
            RenderSettings.fogEndDistance = 200f;

            // Castle: same placement and scale as Level 1 (front face at z = 0, portal centre 1.5 m above the water).
            var layout = new LevelLayout();
            var castle = Level1SceneBuilder.BuildCastle(layout, root);
            if (castle != null)
            {
                Level1SceneBuilder.ApplyMeshyLook(castle, mats.castle, "castle");
                EnvironmentDressing.CastleWaterfalls(castle.transform, mats, root, 0f);
            }

            // Flat bubbling water in front of the castle.
            var water = new GameObject("Water") { layer = 4 };
            water.transform.SetParent(root, false);
            water.AddComponent<MeshFilter>().sharedMesh = Level1SceneBuilder.SaveMesh(ProceduralMeshes.WaterSheet(-70f, 8f, 0.5f, 30, z => 30f), "MenuWater");
            var wr = water.AddComponent<MeshRenderer>(); wr.sharedMaterial = mats.water; wr.shadowCastingMode = ShadowCastingMode.Off;

            // Camera: 45 m in front of the castle at portal height, looking straight at it.
            var camPose = new ScreenComposition.CamPose { pos = new Vector3(0f, 1.5f, -45f), rot = Quaternion.identity, fov = 50f, aspect = Aspect1 };
            var camGo = new GameObject("Main Camera") { tag = "MainCamera" };
            camGo.transform.SetPositionAndRotation(camPose.pos, camPose.rot);
            var cam = camGo.AddComponent<Camera>();
            cam.fieldOfView = camPose.fov; cam.nearClipPlane = 0.1f; cam.farClipPlane = 250f; cam.clearFlags = CameraClearFlags.Skybox;
            camGo.AddComponent<AudioListener>();
            var cd = cam.GetUniversalAdditionalCameraData(); cd.renderPostProcessing = true; cd.antialiasing = AntialiasingMode.FastApproximateAntialiasing;
            var vol = new GameObject("PostFX").AddComponent<Volume>(); vol.isGlobal = true; vol.sharedProfile = mats.postProfile;

            // Mascot facing the player (Screen 1 shows its face).
            var mascotRoot = new GameObject("PLACEHOLDER_PinkMascot (menu)");
            mascotRoot.transform.SetParent(root, false);
            mascotRoot.transform.position = new Vector3(0f, 0.84f, camPose.pos.z + 4.17f);
            mascotRoot.transform.rotation = Quaternion.Euler(0f, 180f, 0f);
            var body = new GameObject("Body").transform; body.SetParent(mascotRoot.transform, false);
            var anim = mascotRoot.AddComponent<MascotAnimator>(); anim.body = body;
            var meshy = PropFactory.Create(PropSlot.Mascot, body);
            if (meshy != null) mascotRoot.name = "PinkMascot (Meshy, menu)";
            else Level1SceneBuilder.BuildPlaceholderMascot(body, mats, anim);

            // Friends and props at their Screen 1 positions (fractions of the approved crop, camera depth).
            var props = new GameObject("Screen1_Composition").transform; props.SetParent(root, false);
            Vector3 camPos = camPose.pos;
            EnvironmentDressing.Duck(props, mats, ScreenComposition.At(camPose, 0.19f, 0.55f, 7f), ScreenComposition.SizeAt(camPose, 0.21f, 7f), camPos);
            EnvironmentDressing.SockFriend(props, mats, ScreenComposition.At(camPose, 0.13f, 0.66f, 5f), 1.0f, camPos);
            EnvironmentDressing.WaterDropBuddy(props, mats, ScreenComposition.At(camPose, 0.86f, 0.57f, 7f), ScreenComposition.SizeAt(camPose, 0.17f, 7f), camPos);
            EnvironmentDressing.StarBall(props, mats, ScreenComposition.At(camPose, 0.93f, 0.66f, 6f), ScreenComposition.SizeAt(camPose, 0.13f, 6f));
            MenuCoin(props, mats, ScreenComposition.At(camPose, 0.87f, 0.75f, 5f), ScreenComposition.SizeAt(camPose, 0.17f, 5f), camPos);
            var pink = new Color(1f, 0.72f, 0.9f);
            EnvironmentDressing.FoamCloud(props, mats, ScreenComposition.At(camPose, 0.5f, 0.86f, 4.3f), 1.5f, Color.white, 21);
            EnvironmentDressing.FoamCloud(props, mats, ScreenComposition.At(camPose, 0.16f, 0.85f, 4.0f), 1.1f, Color.white, 22);
            EnvironmentDressing.FoamCloud(props, mats, ScreenComposition.At(camPose, 0.84f, 0.85f, 4.0f), 1.1f, Color.white, 23);
            EnvironmentDressing.FoamCloud(props, mats, ScreenComposition.At(camPose, 0.04f, 0.78f, 3.6f), 0.8f, pink, 24);
            EnvironmentDressing.FoamCloud(props, mats, ScreenComposition.At(camPose, 0.96f, 0.8f, 3.6f), 0.8f, pink, 25);
            var quad = ScreenComposition.QuadMesh();
            ScreenComposition.HeroBubble(props, quad, mats.bubble, ScreenComposition.At(camPose, 0.06f, 0.5f, 6f), ScreenComposition.SizeAt(camPose, 0.12f, 6f));
            ScreenComposition.HeroBubble(props, quad, mats.bubble, ScreenComposition.At(camPose, 0.95f, 0.42f, 7f), ScreenComposition.SizeAt(camPose, 0.1f, 7f));
            ScreenComposition.HeroBubble(props, quad, mats.bubble, ScreenComposition.At(camPose, 0.26f, 0.42f, 9f), ScreenComposition.SizeAt(camPose, 0.07f, 9f));
            var bubbles = Level1SceneBuilder.Fx(root, "FX_Bubbles", ps => ParticleFactory.Bubbles(ps, mats.bubble, new Vector3(9f, 6f, 10f), 7f, 0.1f, 0.5f, 70));
            bubbles.transform.position = ScreenComposition.At(camPose, 0.5f, 0.45f, 12f);
            var sparkles = Level1SceneBuilder.Fx(root, "FX_Sparkles", ps => ParticleFactory.Sparkles(ps, mats.sparkle, new Vector3(10f, 7f, 10f), 16f, 60));
            sparkles.transform.position = ScreenComposition.At(camPose, 0.5f, 0.4f, 14f);

            // Live picture of the castle for the Level 1 card (Screen 2).
            var thumbRt = AssetDatabase.LoadAssetAtPath<RenderTexture>(ThumbPath);
            if (thumbRt == null)
            {
                thumbRt = new RenderTexture(new RenderTextureDescriptor(512, 306, RenderTextureFormat.ARGB32, 24) { sRGB = true }) { name = "Level1Thumbnail" };
                AssetDatabase.CreateAsset(thumbRt, ThumbPath);
            }
            var thumbGo = new GameObject("Level1CardCamera");
            thumbGo.transform.SetParent(root, false);
            thumbGo.transform.position = new Vector3(0f, 3.2f, -27f);
            thumbGo.transform.LookAt(new Vector3(0f, 4.6f, 0f));
            var thumbCam = thumbGo.AddComponent<Camera>();
            thumbCam.fieldOfView = 42f; thumbCam.targetTexture = thumbRt; thumbCam.enabled = false; thumbCam.clearFlags = CameraClearFlags.Skybox;

            var director = root.gameObject.AddComponent<MainMenuDirector>();
            director.mascot = anim; director.cameraRig = camGo.transform; director.thumbnailCamera = thumbCam;
            director.PushWater(2.4f);

            // Screens 1 and 2 interface.
            var uiGo = new GameObject("MenuUI (approved Screens 1-2)") { layer = 5 };
            var canvas = uiGo.AddComponent<Canvas>(); canvas.renderMode = RenderMode.ScreenSpaceOverlay; canvas.sortingOrder = 10;
            var scaler = uiGo.AddComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = GameHud.ReferenceResolution;
            scaler.screenMatchMode = CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
            scaler.matchWidthOrHeight = 1f;
            uiGo.AddComponent<GraphicRaycaster>();
            var menu = uiGo.AddComponent<MenuUI>();
            menu.sprites = HudImport.LoadSprites();
            menu.levelThumbnail = thumbRt;
            menu.level1Scene = Path.GetFileNameWithoutExtension(Level1SceneBuilder.ScenePath);
            menu.Build();
            var es = new GameObject("EventSystem");
            es.AddComponent<UnityEngine.EventSystems.EventSystem>();
#if BW_INPUT_SYSTEM && ENABLE_INPUT_SYSTEM
            es.AddComponent<UnityEngine.InputSystem.UI.InputSystemUIInputModule>();
#else
            es.AddComponent<UnityEngine.EventSystems.StandaloneInputModule>();
#endif

            var look = root.gameObject.AddComponent<BubbleWashLook>();
            look.water = mats.water; look.castle = mats.castle; look.drum = mats.drum; look.glowRing = mats.glowRing;
            look.post = mats.postProfile; look.sun = sun; look.fogStart = 60f; look.fogEnd = 200f;
            look.Apply();

            EditorSceneManager.MarkSceneDirty(scene);
            EditorSceneManager.SaveScene(scene, ScenePath);
            BuildSettingsUtil.Register();
            Debug.Log("[BubbleWash] Menu scene (Screens 1-2) built: " + ScenePath);
        }

        static void MenuCoin(Transform parent, MaterialSet mats, Vector3 pos, float size, Vector3 faceToward)
        {
            bool meshy = PropFactory.Has(PropSlot.Coin);
            var go = new GameObject(meshy ? "PawCoin (Meshy)" : "PawCoin");
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            go.transform.rotation = Quaternion.LookRotation(pos - faceToward) * Quaternion.Euler(0f, -25f, 8f);
            if (meshy) PropFactory.Create(PropSlot.Coin, go.transform);
            else
            {
                var mesh = Level1SceneBuilder.SaveMesh(ProceduralMeshes.Coin(0.3f, 0.08f), "PawCoin");
                ScreenComposition.Child(go.transform, "Coin", mesh, mats.coin, Vector3.zero, Vector3.one * (size / 0.6f));
            }
            go.AddComponent<Hover>().amplitude = size * 0.05f;
        }
    }

    /// <summary>Keeps the build's scene order: menu (Screens 1-2) first, then Level 1 (Screens 3-12).</summary>
    public static class BuildSettingsUtil
    {
        public static void Register()
        {
            var list = new System.Collections.Generic.List<EditorBuildSettingsScene>();
            if (File.Exists(MainMenuBuilder.ScenePath)) list.Add(new EditorBuildSettingsScene(MainMenuBuilder.ScenePath, true));
            if (File.Exists(Level1SceneBuilder.ScenePath)) list.Add(new EditorBuildSettingsScene(Level1SceneBuilder.ScenePath, true));
            foreach (var s in EditorBuildSettings.scenes)
                if (s.path != MainMenuBuilder.ScenePath && s.path != Level1SceneBuilder.ScenePath) list.Add(s);
            EditorBuildSettings.scenes = list.ToArray();
        }
    }
}
