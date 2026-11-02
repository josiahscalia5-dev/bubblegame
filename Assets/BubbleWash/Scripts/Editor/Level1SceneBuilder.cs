using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using Object = UnityEngine.Object;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// Builds the playable Level 1 opening (approved Screens 3 and 4) from the user's Meshy models:
    /// BubbleWashCastle.glb (castle portal) and BubbleWashTunnel_Mobile_2K_Lite.glb (washer drum).
    ///
    /// Both models are measured on import: the castle's see-through portal and the tunnel's end
    /// opening are found by silhouette analysis, the tunnel's length axis (Meshy: X) is detected and
    /// rotated onto Unity +Z, both are scaled to one shared opening radius, and three tunnel
    /// segments are chained with a small overlap so there is no gap. The tower waterfalls are mounted
    /// on the measured castle (see TowerWaterfalls). Everything without a Meshy model yet is built
    /// procedurally and named PLACEHOLDER_*.
    /// </summary>
    public static class Level1SceneBuilder
    {
        public const string Root = "Assets/BubbleWash";
        public const string CastlePath = Root + "/Models/CastlePortal/BubbleWashCastle.glb";
        public const string TunnelPath = Root + "/Models/WasherTunnel/BubbleWashTunnel_Mobile_2K_Lite.glb";
        public const string ScenePath = Root + "/Scenes/Level1_WasherEntry.unity";
        public const string GeneratedDir = Root + "/Generated";
        public const string ReportPath = "Previews/Level1_build_report.md";

        // Measurements of the supplied GLBs (Unity space after glTFast import), used when live
        // measurement is unavailable. Produced by this same ApertureMeasurer code on the files in
        // this repository (see Design/MODEL_MEASUREMENTS.md).
        static readonly Vector2 CastleApertureCentre = new Vector2(-0.0001f, -0.4041f);
        const float CastleApertureRadius = 0.2705f;
        static readonly Vector2 CastleRimDepth = new Vector2(-0.1128f, -0.0201f);
        static readonly Vector2 CastleDepth = new Vector2(-0.3093f, 0.3082f);
        const float TunnelEndRadius = 0.4272f;
        const float TunnelClearRadius = 0.3443f;
        const float TunnelLength = 1.9032f;

        const int EnvironmentLayer = 8, PlayerLayer = 9, CollectibleLayer = 10, UILayer = 5;

        /// <summary>Placeholder mascot size: arms-to-arms ~1.04 m, matching its share of the width in Screens 3 and 4.</summary>
        public const float MascotScale = 0.8f;
        /// <summary>Body centre above the water (the lower part of the fur sits in the foam).</summary>
        public const float MascotFloat = 0.34f;

        static readonly StringBuilder Log = new StringBuilder();

        /// <summary>Add a line to the build report (Previews/Level1_build_report.md).</summary>
        internal static void Note(string line) => Log.AppendLine(line);

        [MenuItem("Bubble Wash/1. Build Level 1 Scene (Screens 3-4)", priority = 1)]
        public static void BuildFromMenu()
        {
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo()) return;
            Build();
            EditorUtility.DisplayDialog("Bubble Wash", "Level 1 scene built:\n" + ScenePath + "\n\nReport: " + ReportPath +
                "\n\nNext: Bubble Wash > 2. Capture & Compare Screens 3 and 4.", "OK");
        }

        public static Level1Environment Build()
        {
            Log.Clear();
            Log.AppendLine("# Level 1 build report").AppendLine().AppendLine($"Built {DateTime.Now:yyyy-MM-dd HH:mm}").AppendLine();
            EnsureFolders();
            HudImport.ConfigureSprites();
            PropFactory.Begin();
            var mats = new MaterialSet();
            mats.Create();

            var scene = EditorSceneManager.NewScene(NewSceneSetup.EmptyScene, NewSceneMode.Single);
            var envGo = new GameObject("Level1_WasherEntry");
            var env = envGo.AddComponent<Level1Environment>();
            var session = envGo.AddComponent<GameSession>();
            envGo.AddComponent<PerformanceProbe>();
            env.MakeActive();
            session.MakeActive();
            var layout = env.layout;

            var sun = SetupLighting(mats);
            var castle = BuildCastle(layout, envGo.transform);
            if (castle != null) ApplyMeshyLook(castle, mats.castle, "castle");
            var tunnel = BuildTunnel(layout, envGo.transform, mats);
            if (!layout.usingPlaceholderTunnel) ApplyMeshyLook(tunnel.gameObject, mats.drum, "tunnel");
            layout.loopZ = layout.tunnelEndZ + 3.5f;
            env.castle = castle != null ? castle.transform : null;
            env.tunnelRoot = tunnel;
            env.PushWaveGlobals(Vector3.zero);

            env.water = BuildWater(layout, envGo.transform, mats);
            BuildDrumLights(layout, envGo.transform, mats);
            var mascot = BuildMascot(layout, mats);
            env.runner = mascot.GetComponent<BubbleRunner>();
            var cam = BuildCamera(mascot.transform, mats);
            BuildAmbientFx(cam.transform, mats);
            var rig = cam.GetComponent<RunnerCameraRig>();
            ScreenComposition.Build(layout, rig, mascot.transform, mats, envGo.transform);
            TowerWaterfalls.Build(layout, ScreenComposition.Screen3Pose(layout, rig), castle, mats, envGo.transform, Log);
            BuildGemFx(mats, mascot.transform);
            BuildHud(env.runner);

            // Live look tuning (water, foam, glow, bloom, fog) in one inspector.
            var look = envGo.AddComponent<BubbleWashLook>();
            look.water = mats.water; look.waterfall = mats.waterfall; look.brush = mats.brush; look.gem = mats.meshyGem; look.castle = mats.castle; look.drum = mats.drum; look.glowRing = mats.glowRing;
            look.post = mats.postProfile; look.sun = sun;
            look.Apply();

            EditorSceneManager.MarkSceneDirty(scene);
            EditorSceneManager.SaveScene(scene, ScenePath);
            AddToBuildSettings();
            WriteReport(layout);
            Debug.Log("[BubbleWash] Level 1 scene built. " + ReportPath);
            return env;
        }

        // ------------------------------------------------------------------ setup

        static void EnsureFolders()
        {
            foreach (var p in new[] { GeneratedDir, GeneratedDir + "/Materials", GeneratedDir + "/Meshes", Root + "/Scenes" })
            {
                if (AssetDatabase.IsValidFolder(p)) continue;
                string parent = Path.GetDirectoryName(p).Replace('\\', '/');
                AssetDatabase.CreateFolder(parent, Path.GetFileName(p));
            }
            Directory.CreateDirectory("Previews/Captures");
        }

        static Light SetupLighting(MaterialSet mats)
        {
            var sunGo = new GameObject("Sun");
            var sun = sunGo.AddComponent<Light>();
            sun.type = LightType.Directional;
            sun.color = new Color(1f, 0.95f, 0.9f);
            sun.intensity = 1.25f;
            sun.shadows = LightShadows.None; // mobile: no realtime shadow maps, matches the bright approved look
            sunGo.transform.rotation = Quaternion.Euler(36f, 12f, 0f);

            RenderSettings.skybox = mats.sky;
            RenderSettings.sun = sun;
            RenderSettings.ambientMode = AmbientMode.Trilight;
            RenderSettings.ambientSkyColor = new Color(0.95f, 0.82f, 1.0f);
            RenderSettings.ambientEquatorColor = new Color(0.6f, 0.8f, 1.0f);
            RenderSettings.ambientGroundColor = new Color(0.35f, 0.55f, 1.0f);
            RenderSettings.ambientIntensity = 0.9f;
            RenderSettings.fog = true;
            RenderSettings.fogMode = FogMode.Linear;
            RenderSettings.fogColor = new Color(0.8f, 0.8f, 1.0f);
            RenderSettings.fogStartDistance = 40f;  // far enough not to wash out the drum interior
            RenderSettings.fogEndDistance = 160f;
            return sun;
        }

        /// <summary>
        /// Render a Meshy model with BubbleWash/MeshyBaked using its own baked colour texture (the artwork
        /// is unchanged; only saturation, light response and glow of bright stripes are controlled).
        /// </summary>
        internal static void ApplyMeshyLook(GameObject root, Material template, string label, bool report = true)
        {
            int n = 0;
            foreach (var r in root.GetComponentsInChildren<Renderer>(true))
            {
                var src = r.sharedMaterials;
                var dst = new Material[src.Length];
                for (int i = 0; i < src.Length; i++)
                {
                    var tex = BaseTexture(src[i]);
                    if (tex == null) { dst[i] = src[i]; continue; }
                    if (template.GetTexture("_BaseMap") == null || template.GetTexture("_BaseMap") == tex)
                    {
                        template.SetTexture("_BaseMap", tex);
                        CopyNormalMap(src[i], template);
                        dst[i] = template;
                    }
                    else
                    {
                        // A second texture on the same model: clone the settings for it.
                        string path = $"{GeneratedDir}/Materials/{template.name}_{tex.name}.mat";
                        var m = AssetDatabase.LoadAssetAtPath<Material>(path);
                        if (m == null) { m = new Material(template); AssetDatabase.CreateAsset(m, path); }
                        m.CopyPropertiesFromMaterial(template);
                        m.SetTexture("_BaseMap", tex);
                        CopyNormalMap(src[i], m);
                        dst[i] = m;
                    }
                    n++;
                }
                r.sharedMaterials = dst;
            }
            EditorUtility.SetDirty(template);
            if (report) Log.AppendLine($"- {label}: {n} material slot(s) rendered with {template.shader.name} (Meshy texture kept as-is).");
        }

        /// <summary>Hand the Meshy normal map to shaders that use one (the gem); the others ignore it.</summary>
        static void CopyNormalMap(Material src, Material dst)
        {
            if (src == null || !dst.HasProperty("_NormalMap")) return;
            foreach (var p in new[] { "normalTexture", "_BumpMap", "_NormalMap" })
                if (src.HasProperty(p) && src.GetTexture(p) != null) { dst.SetTexture("_NormalMap", src.GetTexture(p)); return; }
        }

        static Texture BaseTexture(Material m)
        {
            if (m == null) return null;
            foreach (var p in new[] { "baseColorTexture", "_BaseMap", "_BaseColorMap", "_MainTex" })
                if (m.HasProperty(p) && m.GetTexture(p) != null) return m.GetTexture(p);
            return m.mainTexture;
        }

        // ------------------------------------------------------------------ castle

        static GameObject BuildCastle(LevelLayout layout, Transform parent)
        {
            var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(CastlePath);
            if (prefab == null)
            {
                Log.AppendLine($"- **ERROR**: castle model not imported at `{CastlePath}`. Is the glTFast package installed?");
                return null;
            }
            var castle = (GameObject)PrefabUtility.InstantiatePrefab(prefab);
            castle.name = "CastlePortal (Meshy: BubbleWashCastle.glb)";
            castle.transform.SetPositionAndRotation(Vector3.zero, Quaternion.identity);
            castle.transform.localScale = Vector3.one;

            MeshSampler.Collect(castle, out var v, out var t);
            var bounds = MeshSampler.BoundsOf(v);
            var ap = v.Length > 0 ? ApertureMeasurer.Measure(v, t, Vector3.forward, Vector3.up, 512) : default;
            Vector2 centre; float radius; Vector2 rim;
            if (ap.found && ap.radius > 0.05f)
            {
                centre = ap.centre; radius = ap.radius;
                rim = ApertureMeasurer.RimDepthRange(v, Vector3.forward, Vector3.up, ap);
                Log.AppendLine($"- Castle measured: {v.Length:N0} vertices, {t.Length / 3:N0} triangles, bounds size {bounds.size:F3} (native units).");
                Log.AppendLine($"- Castle see-through portal: centre ({centre.x:F4}, {centre.y:F4}), radius {radius:F4}; portal lining depth z {rim.x:F3}..{rim.y:F3}.");
            }
            else
            {
                centre = CastleApertureCentre; radius = CastleApertureRadius; rim = CastleRimDepth;
                Log.AppendLine("- Castle portal measurement failed, using the stored measurement (centre (-0.0001,-0.4041), r 0.2705).");
            }
            float zFront = v.Length > 0 ? bounds.max.z : CastleDepth.y;
            float zBack = v.Length > 0 ? bounds.min.z : CastleDepth.x;

            // Front of the Meshy castle (towers' plinths, crest) faces its +Z; the player approaches
            // from -Z, so turn it around. Scale so the portal radius equals the shared opening radius.
            float s = layout.tunnelRadius / radius;
            var rot = Quaternion.Euler(0f, 180f, 0f);
            Vector3 localCentre = new Vector3(centre.x, centre.y, zFront);
            Vector3 pos = new Vector3(0f, layout.waterLevel + layout.axisHeight, layout.castleFrontZ) - rot * (localCentre * s);
            castle.transform.SetParent(parent, true);
            castle.transform.SetPositionAndRotation(pos, rot);
            castle.transform.localScale = Vector3.one * s;

            layout.castleScale = s;
            layout.castleBackZ = layout.castleFrontZ + (zFront - zBack) * s;
            // The narrowest portal ring is where the castle opening is measured; the drum's porthole (same
            // radius) starts right behind it so the two read as one continuous opening with no step.
            float liningBackZ = layout.castleFrontZ + (zFront - rim.x) * s;
            layout.tunnelStartZ = liningBackZ + 0.01f;
            Log.AppendLine($"- Castle placed: scale x{s:F3} (portal radius {layout.tunnelRadius} m), rotated 180 deg, front face z={layout.castleFrontZ:F2}, back face z={layout.castleBackZ:F2}, height {bounds.size.y * s:F1} m.");

            // Cheap collision: a ring of boxes around the portal lining.
            AddRingColliders(castle.transform.parent, "CastlePortal_Colliders", layout.AxisPoint(0f), layout.tunnelRadius + 0.2f, 0.4f,
                layout.castleFrontZ + (zFront - rim.y) * s, liningBackZ, 20);
            return castle;
        }

        // ------------------------------------------------------------------ tunnel

        static Transform BuildTunnel(LevelLayout layout, Transform parent, MaterialSet mats)
        {
            var root = new GameObject("WasherTunnel").transform;
            root.SetParent(parent, false);
            var prefab = AssetDatabase.LoadAssetAtPath<GameObject>(TunnelPath);
            float segLen, endRadiusNative, clearNative;
            PassageAxis axis = PassageAxis.X;
            Vector3 centre3 = Vector3.zero; float axisMin = 0f;
            Quaternion rot;

            Vector3[] v = null; int[] t = null;
            if (prefab != null)
            {
                var probe = (GameObject)PrefabUtility.InstantiatePrefab(prefab);
                probe.transform.SetPositionAndRotation(Vector3.zero, Quaternion.identity);
                MeshSampler.Collect(probe, out v, out t);
                Object.DestroyImmediate(probe);
            }
            if (prefab != null && v.Length > 0 && t.Length > 0)
            {
                var bounds = MeshSampler.BoundsOf(v);

                // Which axis can you see straight through? (Meshy exported the drum along X.)
                axis = ModelAxis.DetectPassageAxis(v, t, PassageAxis.X, out var clear);
                Vector3 ax = ModelAxis.AxisVector(axis), up = ModelAxis.UpFor(axis);
                Vector3 right = Vector3.Cross(up, ax).normalized, trueUp = Vector3.Cross(ax, right).normalized;
                axisMin = Vector3.Dot(bounds.min, ax);
                float axisMax = Vector3.Dot(bounds.max, ax);
                float len = axisMax - axisMin;

                // End opening (porthole) radius: measure only the last 4 % slab of the drum.
                var endTris = MeshSampler.TrianglesInSlab(v, t, ax, axisMax - len * 0.04f, axisMax + 1e-4f);
                var end = ApertureMeasurer.Measure(v, endTris, ax, up, 384);
                clearNative = clear.found ? clear.radius : TunnelClearRadius;
                endRadiusNative = end.found && end.radius > clearNative * 0.9f ? end.radius : clearNative / 0.806f;
                var c2 = end.found ? end.centre : clear.centre;
                centre3 = right * c2.x + trueUp * c2.y;
                segLen = len;
                Log.AppendLine($"- Tunnel measured: {v.Length:N0} vertices, {t.Length / 3:N0} triangles, bounds size {bounds.size:F3}.");
                Log.AppendLine($"- Tunnel length axis detected: **{axis}** (Meshy native). Rotated onto Unity +Z with {ModelAxis.RotationToForward(axis).eulerAngles}.");
                Log.AppendLine($"- Tunnel end opening radius {endRadiusNative:F4}, clear radius past the paddle fins {clearNative:F4}, length {len:F4} (native).");
            }
            else
            {
                // Stored measurement of BubbleWashTunnel_Mobile_2K_Lite.glb (length along X, centred on its origin).
                segLen = TunnelLength; endRadiusNative = TunnelEndRadius; clearNative = TunnelClearRadius;
                axis = PassageAxis.X; axisMin = -TunnelLength * 0.5f; centre3 = Vector3.zero;
                Log.AppendLine(prefab == null
                    ? $"- **Tunnel model missing** at `{TunnelPath}`: using PLACEHOLDER_WasherTube."
                    : "- Tunnel mesh data unreadable: placed with the stored measurement (length axis X, end opening 0.4272, clear 0.3443, length 1.9032).");
            }

            float s = layout.tunnelRadius / endRadiusNative;
            rot = ModelAxis.RotationToForward(axis);
            layout.segmentLength = segLen * s;
            layout.clearRadius = clearNative * s;
            layout.usingPlaceholderTunnel = prefab == null;
            float overlap = Mathf.Max(0.02f, layout.segmentLength * 0.005f);
            var chain = TunnelChain.Layout(layout.tunnelStartZ, layout.segmentLength, layout.segmentCount, overlap);
            layout.tunnelEndZ = chain[chain.Count - 1].endZ;
            Log.AppendLine($"- Tunnel scaled x{s:F3}: opening radius {layout.tunnelRadius:F2} m (matches castle portal), clear radius {layout.clearRadius:F2} m, segment length {layout.segmentLength:F2} m.");
            Log.AppendLine($"- {chain.Count} segments chained from z={layout.tunnelStartZ:F2} to z={layout.tunnelEndZ:F2} with {overlap * 100f:F1} cm overlap (max gap {TunnelChain.MaxGap(chain) * 100f:F1} cm).");

            Mesh placeholder = null;
            if (prefab == null)
            {
                placeholder = SaveMesh(ProceduralMeshes.WasherTube(layout.tunnelRadius, 0.6f, layout.segmentLength), "PLACEHOLDER_WasherTube");
            }

            for (int i = 0; i < chain.Count; i++)
            {
                GameObject seg;
                if (prefab != null)
                {
                    seg = (GameObject)PrefabUtility.InstantiatePrefab(prefab);
                    seg.name = $"TunnelSegment_{i + 1} (Meshy: BubbleWashTunnel_Mobile_2K_Lite.glb)";
                    Vector3 axisVec = ModelAxis.AxisVector(axis);
                    Vector3 localFront = centre3 + axisVec * axisMin;
                    Vector3 target = new Vector3(0f, layout.waterLevel + layout.axisHeight, chain[i].startZ);
                    seg.transform.SetPositionAndRotation(target - rot * (localFront * s), rot);
                    seg.transform.localScale = Vector3.one * s;
                }
                else
                {
                    seg = new GameObject($"PLACEHOLDER_WasherTube_{i + 1}");
                    seg.AddComponent<MeshFilter>().sharedMesh = placeholder;
                    seg.AddComponent<MeshRenderer>().sharedMaterial = mats.placeholderDrum;
                    seg.transform.position = new Vector3(0f, layout.waterLevel + layout.axisHeight, chain[i].startZ);
                }
                seg.transform.SetParent(root, true);
                AddRingColliders(root, $"TunnelSegment_{i + 1}_Colliders", layout.AxisPoint(0f), layout.clearRadius + 0.2f, 0.4f,
                    chain[i].startZ, chain[i].endZ, 24);
            }
            return root;
        }

        static void AddRingColliders(Transform parent, string name, Vector3 axisPoint, float radius, float thickness, float z0, float z1, int count)
        {
            var go = new GameObject(name) { layer = EnvironmentLayer };
            go.transform.SetParent(parent, false);
            float len = Mathf.Max(0.1f, z1 - z0);
            float chord = 2f * Mathf.PI * radius / count * 1.08f;
            for (int i = 0; i < count; i++)
            {
                float a = 2f * Mathf.PI * (i + 0.5f) / count;
                var dir = new Vector3(Mathf.Cos(a), Mathf.Sin(a), 0f);
                var box = new GameObject($"Wall_{i:00}") { layer = EnvironmentLayer };
                box.transform.SetParent(go.transform, false);
                box.transform.position = new Vector3(axisPoint.x, axisPoint.y, 0f) + dir * radius + Vector3.forward * (z0 + len * 0.5f);
                box.transform.rotation = Quaternion.LookRotation(Vector3.forward, dir);
                var c = box.AddComponent<BoxCollider>();
                c.size = new Vector3(chord, thickness, len);
            }
        }

        // ------------------------------------------------------------------ water and lights

        static Transform BuildWater(LevelLayout layout, Transform parent, MaterialSet mats)
        {
            float channel = Mathf.Sqrt(Mathf.Max(0.1f, Mathf.Pow(layout.tunnelRadius * 1.02f, 2f) - layout.axisHeight * layout.axisHeight));
            float moatUntil = layout.castleBackZ + 1.5f;
            float pathEdge = WaveField.Slide.x + 0.9f;      // raised path + its spill slope
            const int side = 8, path = 34, cols = side * 2 + path;
            var moatRow = new float[cols + 1];
            for (int i = 0; i <= side; i++)
            {
                float k = Mathf.Pow((float)i / side, 1.7f);      // denser toward the path
                moatRow[side - i] = -Mathf.Lerp(pathEdge, 24f, k);
                moatRow[cols - side + i] = Mathf.Lerp(pathEdge, 24f, k);
            }
            for (int i = 0; i <= path; i++) moatRow[side + i] = Mathf.Lerp(-pathEdge, pathEdge, (float)i / path);
            var channelRow = new float[cols + 1];
            for (int i = 0; i <= cols; i++) channelRow[i] = Mathf.Lerp(-channel, channel, (float)i / cols);
            var mesh = ProceduralMeshes.WaterSheet(layout.startZ - 26f, layout.tunnelEndZ + 6f, 0.3f, cols,
                z => z < moatUntil ? moatRow : channelRow);
            mesh = SaveMesh(mesh, "WaterSheet");
            var go = new GameObject("Water (electric blue, animated)") { layer = 4 };
            go.transform.SetParent(parent, false);
            go.AddComponent<MeshFilter>().sharedMesh = mesh;
            var r = go.AddComponent<MeshRenderer>();
            r.sharedMaterial = mats.water;
            r.shadowCastingMode = ShadowCastingMode.Off;
            Log.AppendLine($"- Water: {mesh.vertexCount:N0} vertices. Raised Screen 3 path half-width {WaveField.Slide.x:F1} m standing {-WaveField.Slide.y:F2} m above the moat (to z={moatUntil:F1}); channel half-width {channel:F2} m inside the drum.");
            return go.transform;
        }

        static void BuildDrumLights(LevelLayout layout, Transform parent, MaterialSet mats)
        {
            var root = new GameObject("DrumLighting").transform;
            root.SetParent(parent, false);
            var ring = SaveMesh(ProceduralMeshes.Torus(layout.tunnelRadius * 0.965f, 0.075f, 72, 8), "GlowRing");
            var chain = TunnelChain.Layout(layout.tunnelStartZ, layout.segmentLength, layout.segmentCount, Mathf.Max(0.02f, layout.segmentLength * 0.005f));
            int n = 0;
            for (int i = 0; i <= chain.Count; i++)
            {
                float z = i < chain.Count ? chain[i].startZ + 0.25f : chain[chain.Count - 1].endZ - 0.25f;
                var go = new GameObject($"GlowRing_{n++}");
                go.transform.SetParent(root, false);
                go.transform.position = layout.AxisPoint(z);
                go.AddComponent<MeshFilter>().sharedMesh = ring;
                var mr = go.AddComponent<MeshRenderer>();
                mr.sharedMaterial = mats.glowRing;
                mr.shadowCastingMode = ShadowCastingMode.Off;
                var pulse = go.AddComponent<GlowPulse>();
                pulse.color = i % 2 == 0 ? new Color(2.6f, 2.0f, 0.95f) : new Color(1.4f, 2.2f, 2.9f);
                pulse.phase = i * 0.9f;
            }
            for (int i = 0; i < chain.Count; i++)
            {
                var lgo = new GameObject($"DrumLight_{i + 1}");
                lgo.transform.SetParent(root, false);
                lgo.transform.position = layout.AxisPoint(chain[i].CentreZ) + Vector3.up * 0.5f;
                var l = lgo.AddComponent<Light>();
                l.type = LightType.Point;
                l.color = new Color(0.62f, 0.8f, 1f);
                l.range = layout.segmentLength * 1.1f;
                l.intensity = 3.0f;
                l.shadows = LightShadows.None;
            }
            // Bright light at the far end of the drum (the luminous centre of the approved Screen 4 vortex).
            var end = new GameObject("DrumEndGlow");
            end.transform.SetParent(root, false);
            end.transform.position = layout.AxisPoint(layout.tunnelEndZ + 1.5f);
            end.AddComponent<MeshFilter>().sharedMesh = SaveMesh(ProceduralMeshes.Disc(layout.tunnelRadius * 1.6f), "EndGlowDisc");
            var er = end.AddComponent<MeshRenderer>();
            er.sharedMaterial = mats.endGlow;
            er.shadowCastingMode = ShadowCastingMode.Off;
        }

        // ------------------------------------------------------------------ mascot

        static GameObject BuildMascot(LevelLayout layout, MaterialSet mats)
        {
            var root = new GameObject("PLACEHOLDER_PinkMascot (replace with Meshy mascot GLB)") { layer = PlayerLayer };
            root.transform.position = new Vector3(0f, layout.waterLevel + MascotFloat, layout.startZ);
            var body = new GameObject("Body").transform;      // animated (squash, lean, flips, spins)
            body.SetParent(root.transform, false);
            var anim = root.AddComponent<MascotAnimator>();
            anim.body = body;

            // Final Meshy mascot, if supplied (Assets/BubbleWash/Models/Mascot/ or the asset slot).
            var meshy = PropFactory.Create(PropSlot.Mascot, body);
            if (meshy != null)
            {
                root.name = "PinkMascot (Meshy)";
                var e = MeshyAssetSlots.LoadOrCreate().Get(PropSlot.Mascot);
                anim.armLeft = PropFactory.FindChild(meshy.transform, e.armLeft);
                anim.armRight = PropFactory.FindChild(meshy.transform, e.armRight);
                anim.footLeft = PropFactory.FindChild(meshy.transform, e.footLeft);
                anim.footRight = PropFactory.FindChild(meshy.transform, e.footRight);
                anim.eyes = PropFactory.FindChild(meshy.transform, e.eyes);
                Log.AppendLine($"- Mascot: **Meshy model** `{meshy.name}` fitted to {e.targetSize:F2} m ({e.sizeAxis}). Animated nodes found: arms {(anim.armLeft && anim.armRight ? "yes" : "no")}, feet {(anim.footLeft && anim.footRight ? "yes" : "no")}, eyes {(anim.eyes ? "yes" : "no")}.");
            }
            else
            {
                BuildPlaceholderMascot(body, mats, anim);
                Log.AppendLine("- Mascot: **PLACEHOLDER_PinkMascot** (procedural fluffy pink body with arms, feet, ears and face). Drop the Meshy mascot GLB into Assets/BubbleWash/Models/Mascot/ and rebuild.");
            }

            var input = root.AddComponent<SwipeInput>();
            var splash = root.AddComponent<SplashFX>();
            // World-space emitters live outside the mascot so its tumbles and spins don't swing them around.
            var fxRoot = new GameObject("MascotFX (splashes)").transform;
            splash.wake = Fx(fxRoot, "FX_Wake", ps => ParticleFactory.Wake(ps, mats.droplet));
            splash.burst = Fx(fxRoot, "FX_SplashBurst", ps => ParticleFactory.Burst(ps, mats.droplet));
            splash.bubbleBurst = Fx(fxRoot, "FX_BubbleBlast", ps => ParticleFactory.Burst(ps, mats.bubble));

            var runner = root.AddComponent<BubbleRunner>();
            runner.input = input; runner.animator = anim; runner.splash = splash;
            runner.environmentMask = 1 << EnvironmentLayer;
            runner.floatHeight = MascotFloat;
            runner.bodyRadius = 0.5f * MascotScale;
            return root;
        }

        static void BuildPlaceholderMascot(Transform body, MaterialSet mats, MascotAnimator anim)
        {
            var visual = new GameObject("Visual").transform;  // overall size of the placeholder
            visual.SetParent(body, false);
            visual.localScale = Vector3.one * MascotScale;

            var pink = new Color(1f, 0.33f, 0.72f);
            var tip = new Color(1f, 0.72f, 0.9f);
            var furMesh = SaveMesh(ProceduralMeshes.FluffBall(0.5f, 4, 0.16f, 7, pink, tip, "PLACEHOLDER_MascotFur"), "PLACEHOLDER_MascotFur");
            var smallFur = SaveMesh(ProceduralMeshes.FluffBall(1f, 3, 0.2f, 11, pink, tip, "PLACEHOLDER_MascotTuft"), "PLACEHOLDER_MascotTuft");
            Part(visual, "Fur", furMesh, mats.mascotFur, Vector3.zero, Vector3.one);
            Part(visual, "Ear_L", smallFur, mats.mascotFur, new Vector3(-0.3f, 0.36f, -0.02f), Vector3.one * 0.15f);
            Part(visual, "Ear_R", smallFur, mats.mascotFur, new Vector3(0.3f, 0.36f, -0.02f), Vector3.one * 0.15f);
            anim.armLeft = Part(visual, "Arm_L", smallFur, mats.mascotFur, new Vector3(-0.5f, -0.06f, 0.05f), new Vector3(0.15f, 0.13f, 0.15f));
            anim.armRight = Part(visual, "Arm_R", smallFur, mats.mascotFur, new Vector3(0.5f, -0.06f, 0.05f), new Vector3(0.15f, 0.13f, 0.15f));
            anim.footLeft = Part(visual, "Foot_L", smallFur, mats.mascotFur, new Vector3(-0.2f, -0.44f, 0.16f), new Vector3(0.14f, 0.1f, 0.17f));
            anim.footRight = Part(visual, "Foot_R", smallFur, mats.mascotFur, new Vector3(0.2f, -0.44f, 0.16f), new Vector3(0.14f, 0.1f, 0.17f));

            // Face on the front (+Z, away from the follow camera; visible on Screens 1, 8, 10-12).
            var eyes = new GameObject("Eyes").transform;
            eyes.SetParent(visual, false);
            eyes.localPosition = new Vector3(0f, 0.08f, 0.43f);
            var sphere = BuiltinSphere();
            foreach (float side in new[] { -1f, 1f })
            {
                var eye = Part(eyes, side < 0 ? "Eye_L" : "Eye_R", sphere, mats.eye, new Vector3(0.16f * side, 0f, 0f), new Vector3(0.15f, 0.19f, 0.09f));
                Part(eye, "Shine", sphere, mats.white, new Vector3(-0.22f, 0.25f, -0.45f), Vector3.one * 0.35f);
                Part(visual, side < 0 ? "Cheek_L" : "Cheek_R", sphere, mats.cheek, new Vector3(0.3f * side, -0.07f, 0.4f), new Vector3(0.13f, 0.07f, 0.04f));
            }
            Part(visual, "Mouth", sphere, mats.eye, new Vector3(0f, -0.06f, 0.48f), new Vector3(0.09f, 0.05f, 0.03f));
            anim.eyes = eyes;
        }

        static Transform Part(Transform parent, string name, Mesh mesh, Material mat, Vector3 pos, Vector3 scale)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.localPosition = pos;
            go.transform.localScale = scale;
            go.AddComponent<MeshFilter>().sharedMesh = mesh;
            var r = go.AddComponent<MeshRenderer>();
            r.sharedMaterial = mat;
            r.shadowCastingMode = ShadowCastingMode.Off;
            return go.transform;
        }

        static Mesh _sphere;

        internal static Mesh BuiltinSphere()
        {
            if (_sphere != null) return _sphere;
            var tmp = GameObject.CreatePrimitive(PrimitiveType.Sphere);
            _sphere = tmp.GetComponent<MeshFilter>().sharedMesh;
            Object.DestroyImmediate(tmp);
            return _sphere;
        }

        internal static ParticleSystem Fx(Transform parent, string name, Action<ParticleSystem> configure)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            var ps = go.AddComponent<ParticleSystem>();
            configure(ps);
            return ps;
        }

        // ------------------------------------------------------------------ camera, post FX, ambient

        static Camera BuildCamera(Transform mascot, MaterialSet mats)
        {
            var go = new GameObject("Main Camera") { tag = "MainCamera" };
            var cam = go.AddComponent<Camera>();
            cam.nearClipPlane = 0.1f;
            cam.farClipPlane = 180f;
            cam.fieldOfView = 55f;
            cam.clearFlags = CameraClearFlags.Skybox;
            go.AddComponent<AudioListener>();
            var data = cam.GetUniversalAdditionalCameraData();
            data.renderPostProcessing = true;
            data.antialiasing = AntialiasingMode.FastApproximateAntialiasing;
            var rig = go.AddComponent<RunnerCameraRig>();
            rig.target = mascot;
            rig.cam = cam;
            rig.Snap();

            var volGo = new GameObject("PostFX (Bloom / Colour)");
            var vol = volGo.AddComponent<Volume>();
            vol.isGlobal = true;
            vol.sharedProfile = mats.postProfile;
            return cam;
        }

        static void BuildAmbientFx(Transform cam, MaterialSet mats)
        {
            var bubbles = Fx(null, "FX_AmbientBubbles", ps => ParticleFactory.Bubbles(ps, mats.bubble, new Vector3(5.5f, 3.2f, 16f), 9f, 0.1f, 0.55f, 90));
            var f1 = bubbles.gameObject.AddComponent<AmbientFollower>();
            f1.follow = cam; f1.offset = new Vector3(0f, 0.6f, 10f);
            var sparkles = Fx(null, "FX_Sparkles", ps => ParticleFactory.Sparkles(ps, mats.sparkle, new Vector3(5.5f, 3.2f, 16f), 22f, 70));
            var f2 = sparkles.gameObject.AddComponent<AmbientFollower>();
            f2.follow = cam; f2.offset = new Vector3(0f, 0.8f, 10f);
        }

        /// <summary>One shared sparkle effect for every gem: twinkles that rise near the mascot, and the collection burst and chime.</summary>
        static void BuildGemFx(MaterialSet mats, Transform mascot)
        {
            var go = new GameObject("FX_GemSparkles (shared by every gem)");
            var fx = go.AddComponent<GemSparkles>();
            fx.mascot = mascot;
            fx.twinkles = Fx(go.transform, "FX_GemTwinkles", ps => ParticleFactory.GemTwinkles(ps, mats.sparkle));
            fx.burst = Fx(go.transform, "FX_GemCollectBurst", ps => ParticleFactory.GemBurst(ps, mats.sparkle));
            fx.glow = Fx(go.transform, "FX_GemCollectGlow", ps => ParticleFactory.GemGlow(ps, mats.gemGlow));
            int gems = 0;
            foreach (var c in Object.FindObjectsByType<Collectible>(FindObjectsSortMode.None)) if (c.kind == CollectibleKind.Gem) gems++;
            Log.AppendLine($"- Gems: {gems} in the level, " + (PropFactory.Has(PropSlot.Gem)
                ? "all from the one Meshy gem model and one shared material (BubbleWash/Gem)."
                : "PLACEHOLDER gem mesh (drop the Meshy gem into Assets/BubbleWash/Models/Gem/)."));
        }

        static void BuildHud(BubbleRunner runner)
        {
            var go = new GameObject("HUD (approved Screen 3/4 layout)") { layer = UILayer };
            var canvas = go.AddComponent<Canvas>();
            canvas.renderMode = RenderMode.ScreenSpaceOverlay;
            canvas.sortingOrder = 10;
            var scaler = go.AddComponent<CanvasScaler>();
            scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
            scaler.referenceResolution = GameHud.ReferenceResolution;
            scaler.screenMatchMode = CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
            scaler.matchWidthOrHeight = 1f; // the approved screens keep HUD size relative to height
            go.AddComponent<GraphicRaycaster>();
            var hud = go.AddComponent<GameHud>();
            hud.runner = runner;
            hud.sprites = HudImport.LoadSprites();
            hud.Build();

            var es = new GameObject("EventSystem");
            es.AddComponent<UnityEngine.EventSystems.EventSystem>();
#if BW_INPUT_SYSTEM && ENABLE_INPUT_SYSTEM
            es.AddComponent<UnityEngine.InputSystem.UI.InputSystemUIInputModule>();
#else
            es.AddComponent<UnityEngine.EventSystems.StandaloneInputModule>();
#endif
        }

        // ------------------------------------------------------------------ assets

        internal static Mesh SaveMesh(Mesh mesh, string name)
        {
            string path = $"{GeneratedDir}/Meshes/{name}.asset";
            var existing = AssetDatabase.LoadAssetAtPath<Mesh>(path);
            if (existing != null)
            {
                EditorUtility.CopySerialized(mesh, existing);
                existing.name = name;
                Object.DestroyImmediate(mesh);
                EditorUtility.SetDirty(existing);
                return existing;
            }
            mesh.name = name;
            AssetDatabase.CreateAsset(mesh, path);
            return mesh;
        }

        static void AddToBuildSettings()
        {
            var scenes = new List<EditorBuildSettingsScene>(EditorBuildSettings.scenes);
            scenes.RemoveAll(s => s.path == ScenePath);
            scenes.Insert(0, new EditorBuildSettingsScene(ScenePath, true));
            EditorBuildSettings.scenes = scenes.ToArray();
        }

        static void WriteReport(LevelLayout l)
        {
            Log.AppendLine().AppendLine("## Layout (metres, +Z forward, water at y=0)").AppendLine();
            Log.AppendLine($"| Item | Value |\n|---|---|");
            Log.AppendLine($"| Shared opening radius (castle portal = drum porthole) | {l.tunnelRadius:F2} |");
            Log.AppendLine($"| Clear radius inside drum (fins) | {l.clearRadius:F2} |");
            Log.AppendLine($"| Axis height above water | {l.axisHeight:F2} |");
            Log.AppendLine($"| Castle front / back z | {l.castleFrontZ:F2} / {l.castleBackZ:F2} |");
            Log.AppendLine($"| Tunnel start / end z | {l.tunnelStartZ:F2} / {l.tunnelEndZ:F2} |");
            Log.AppendLine($"| Segment length | {l.segmentLength:F2} |");
            Log.AppendLine($"| Lanes | {l.laneCount} x {l.laneSpacing:F2} |");
            Log.AppendLine($"| Screen 3 start z / Screen 4 capture z | {l.startZ:F2} / {ScreenComposition.Screen4Z(l):F2} |");
            Log.AppendLine().AppendLine("Run **Bubble Wash > 3. Validate Clearance, Gaps & Budget** for the collision/clearance check.");
            File.WriteAllText(ReportPath, Log.ToString());
        }
    }
}
