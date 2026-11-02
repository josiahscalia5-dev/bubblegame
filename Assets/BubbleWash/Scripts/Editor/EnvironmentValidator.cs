using System.Collections.Generic;
using System.IO;
using System.Text;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// Geometry checks for the Level 1 opening, run against the real Meshy meshes:
    /// - tunnel segment joints (gap / overlap),
    /// - castle portal vs drum opening alignment,
    /// - mascot clearance along every lane (floating, jump apex) and camera clearance along its path,
    /// - the Screen 3 tower waterfalls stay off the raised run path,
    /// - triangle / material budget for mobile.
    /// Results go to Previews/validation_report.md. Frame rate must be measured on device
    /// (PerformanceProbe logs it); see README.
    /// </summary>
    public static class EnvironmentValidator
    {
        const string ReportPath = "Previews/validation_report.md";
        const int ProbeLayer = 31;

        public class Result
        {
            public float maxJointGap;
            public float alignmentError;
            public float minMascotClearance = float.MaxValue;
            public float minCameraClearance = float.MaxValue;
            public string mascotWorst = "", cameraWorst = "";
            public int waterfallParts;
            public float waterfallPathGap = float.MaxValue;
            public int triangles;
            public int renderers;
            public int materials;
            public readonly List<string> failures = new List<string>();
            public bool Passed => failures.Count == 0;
        }

        [MenuItem("Bubble Wash/3. Validate Clearance, Gaps & Budget", priority = 3)]
        public static void ValidateFromMenu()
        {
            if (!EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo()) return;
            if (!File.Exists(Level1SceneBuilder.ScenePath)) Level1SceneBuilder.Build();
            EditorSceneManager.OpenScene(Level1SceneBuilder.ScenePath, OpenSceneMode.Single);
            var r = Validate();
            EditorUtility.DisplayDialog("Bubble Wash validation", (r.Passed ? "PASSED" : "FAILED:\n- " + string.Join("\n- ", r.failures)) + "\n\nDetails: " + ReportPath, "OK");
        }

        public static Result Validate()
        {
            var env = Object.FindFirstObjectByType<Level1Environment>();
            var runner = Object.FindFirstObjectByType<BubbleRunner>();
            var rig = Object.FindFirstObjectByType<RunnerCameraRig>();
            var r = new Result();
            if (env == null || runner == null || rig == null) { r.failures.Add("Scene incomplete - rebuild with Bubble Wash > 1."); return r; }
            env.MakeActive();
            var l = env.layout;

            // ---- joints: renderer bounds of consecutive segments along Z
            if (env.tunnelRoot != null)
            {
                var segs = new List<Bounds>();
                foreach (Transform child in env.tunnelRoot)
                {
                    var rends = child.GetComponentsInChildren<Renderer>();
                    if (rends.Length == 0) continue;
                    var b = rends[0].bounds;
                    foreach (var rr in rends) b.Encapsulate(rr.bounds);
                    segs.Add(b);
                }
                segs.Sort((a, b) => a.min.z.CompareTo(b.min.z));
                r.maxJointGap = float.NegativeInfinity;
                for (int i = 1; i < segs.Count; i++) r.maxJointGap = Mathf.Max(r.maxJointGap, segs[i].min.z - segs[i - 1].max.z);
                if (segs.Count < 2) r.maxJointGap = 0f;
                if (r.maxJointGap > 0.001f) r.failures.Add($"Tunnel joint gap {r.maxJointGap * 100f:F1} cm");
            }

            // ---- alignment: measure the castle portal and the first drum opening in world space
            if (env.castle != null && env.tunnelRoot != null && env.tunnelRoot.childCount > 0)
            {
                var castleAp = MeasureWorld(env.castle.gameObject, 512, null);
                var first = env.tunnelRoot.GetChild(0).gameObject;
                var tunnelAp = MeasureWorld(first, 384, l.tunnelStartZ + l.segmentLength * 0.04f);
                if (castleAp.found && tunnelAp.found)
                {
                    r.alignmentError = (castleAp.centre - tunnelAp.centre).magnitude + Mathf.Abs(castleAp.radius - tunnelAp.radius);
                    if (r.alignmentError > 0.08f) r.failures.Add($"Castle portal / drum opening misaligned by {r.alignmentError:F3} m");
                }
            }

            // ---- clearance against the real meshes (temporary mesh colliders)
            var temp = new List<GameObject>();
            try
            {
                foreach (var mf in Object.FindObjectsByType<MeshFilter>(FindObjectsSortMode.None))
                {
                    bool isEnv = (env.castle != null && mf.transform.IsChildOf(env.castle)) || (env.tunnelRoot != null && mf.transform.IsChildOf(env.tunnelRoot))
                                 || mf.name.StartsWith("PLACEHOLDER_SpinningBrush");
                    if (!isEnv || mf.sharedMesh == null) continue;
                    var go = new GameObject("__probe") { layer = ProbeLayer, hideFlags = HideFlags.HideAndDontSave };
                    go.transform.SetPositionAndRotation(mf.transform.position, mf.transform.rotation);
                    go.transform.localScale = mf.transform.lossyScale;
                    go.AddComponent<MeshCollider>().sharedMesh = mf.sharedMesh;
                    temp.Add(go);
                }
                Physics.SyncTransforms();
                int mask = 1 << ProbeLayer;

                float maxX = Mathf.Max(0f, l.PassageHalfWidth(runner.floatHeight) - runner.bodyRadius - runner.wallClearance);
                for (int lane = 0; lane < l.laneCount; lane++)
                {
                    float x = Mathf.Clamp(l.LaneX(lane), -maxX, maxX);
                    for (float z = l.startZ; z <= l.tunnelEndZ; z += 0.25f)
                    {
                        foreach (float lift in new[] { 0f, 0.6f, 1.2f })
                        {
                            var c = new Vector3(x, l.waterLevel + runner.floatHeight + lift, z);
                            float clear = Clearance(c, runner.bodyRadius, mask);
                            if (clear < r.minMascotClearance) { r.minMascotClearance = clear; r.mascotWorst = $"lane {lane} z={z:F2} lift {lift:F1}"; }
                        }
                    }
                }
                if (r.minMascotClearance < 0.02f) r.failures.Add($"Mascot touches geometry ({r.mascotWorst})");

                // Camera path: follow the rig blend from the start to the end of the drum.
                for (float z = l.startZ; z <= l.tunnelEndZ; z += 0.25f)
                {
                    var preset = rig.PresetAt(z, env);
                    var anchor = new Vector3(0f, l.waterLevel + runner.floatHeight, z);
                    var pos = l.ClampInsidePassage(anchor + preset.offset, rig.wallClearance);
                    float clear = Clearance(pos, 0.2f, mask);
                    if (clear < r.minCameraClearance) { r.minCameraClearance = clear; r.cameraWorst = $"mascot z={z:F2}, camera {pos:F2}"; }
                }
                if (r.minCameraClearance < 0.02f) r.failures.Add($"Camera clips geometry ({r.cameraWorst})");
            }
            finally
            {
                foreach (var go in temp) Object.DestroyImmediate(go);
                Physics.SyncTransforms();
            }

            // ---- tower waterfalls (Screen 3): every piece must stay off the raised run path and its spill slope
            var falls = GameObject.Find(TowerWaterfalls.RootName);
            if (falls == null) r.failures.Add("Screen 3 tower waterfalls missing - rebuild with Bubble Wash > 1.");
            else
            {
                float pathEdge = env.pathHalfWidth + 0.55f;
                foreach (var rend in falls.GetComponentsInChildren<Renderer>())
                {
                    if (rend is ParticleSystemRenderer) continue;
                    var b = rend.bounds;
                    float inner = b.min.x > 0f ? b.min.x : b.max.x < 0f ? -b.max.x : 0f;   // closest approach to x = 0
                    r.waterfallParts++;
                    r.waterfallPathGap = Mathf.Min(r.waterfallPathGap, inner - pathEdge);
                }
                if (r.waterfallParts == 0) r.failures.Add("Screen 3 tower waterfalls have no visible parts");
                else if (r.waterfallPathGap < 0f) r.failures.Add($"A tower waterfall piece reaches {-r.waterfallPathGap:F2} m onto the run path");
            }

            // ---- mobile budget
            var mats = new HashSet<Material>();
            foreach (var mr in Object.FindObjectsByType<MeshRenderer>(FindObjectsSortMode.None))
            {
                var mf = mr.GetComponent<MeshFilter>();
                if (mf == null || mf.sharedMesh == null) continue;
                r.renderers++;
                for (int s = 0; s < mf.sharedMesh.subMeshCount; s++) r.triangles += (int)(mf.sharedMesh.GetIndexCount(s) / 3);
                foreach (var m in mr.sharedMaterials) if (m != null) mats.Add(m);
            }
            r.materials = mats.Count;

            Write(r, l);
            return r;
        }

        /// <summary>Distance by which a sphere at <paramref name="c"/> could grow before touching geometry (negative = already overlapping).</summary>
        static float Clearance(Vector3 c, float radius, int mask)
        {
            if (Physics.CheckSphere(c, radius, mask, QueryTriggerInteraction.Ignore)) return -0.01f;
            float lo = 0f, hi = 2f;
            if (!Physics.CheckSphere(c, radius + hi, mask, QueryTriggerInteraction.Ignore)) return hi;
            for (int i = 0; i < 12; i++)
            {
                float mid = 0.5f * (lo + hi);
                if (Physics.CheckSphere(c, radius + mid, mask, QueryTriggerInteraction.Ignore)) hi = mid; else lo = mid;
            }
            return lo;
        }

        /// <summary>Aperture of a model measured in world space looking down +Z (optionally only geometry with z &lt;= <paramref name="maxZ"/>).</summary>
        static ApertureMeasurer.Result MeasureWorld(GameObject go, int resolution, float? maxZ)
        {
            MeshSampler.Collect(go, out var v, out var t);
            var m = go.transform.localToWorldMatrix;
            for (int i = 0; i < v.Length; i++) v[i] = m.MultiplyPoint3x4(v[i]);
            if (maxZ.HasValue) t = MeshSampler.TrianglesInSlab(v, t, Vector3.forward, float.MinValue, maxZ.Value);
            return ApertureMeasurer.Measure(v, t, Vector3.forward, Vector3.up, resolution);
        }

        static void Write(Result r, LevelLayout l)
        {
            var sb = new StringBuilder();
            sb.AppendLine("# Level 1 environment validation").AppendLine();
            sb.AppendLine(r.Passed ? "**PASSED**" : "**FAILED**").AppendLine();
            foreach (var f in r.failures) sb.AppendLine($"- {f}");
            sb.AppendLine().AppendLine("| Check | Result |").AppendLine("|---|---|");
            sb.AppendLine($"| Largest gap between tunnel segments | {r.maxJointGap * 100f:F2} cm (negative = overlap) |");
            sb.AppendLine($"| Castle portal vs drum opening (centre + radius error) | {r.alignmentError:F3} m |");
            sb.AppendLine($"| Minimum mascot clearance (all lanes, float + jump heights) | {r.minMascotClearance:F2} m at {r.mascotWorst} |");
            sb.AppendLine($"| Minimum camera clearance (0.2 m probe) | {r.minCameraClearance:F2} m at {r.cameraWorst} |");
            sb.AppendLine($"| Tower waterfalls: pieces / closest approach to the run path | {r.waterfallParts} / {(r.waterfallParts > 0 ? r.waterfallPathGap.ToString("F2") + " m clear" : "missing")} |");
            sb.AppendLine($"| Scene triangles / renderers / materials | {r.triangles:N0} / {r.renderers} / {r.materials} |");
            sb.AppendLine().AppendLine("Mobile notes: the castle (150k tris) and each drum segment (136k tris) dominate the budget. " +
                "Target under ~300k visible triangles on mid-range phones: request lower-poly Meshy exports or add LODs. " +
                "Frame rate is measured on device by PerformanceProbe (three-finger tap / F1 shows the overlay).");
            Directory.CreateDirectory(Path.GetDirectoryName(ReportPath));
            File.WriteAllText(ReportPath, sb.ToString());
            Debug.Log("[BubbleWash] Validation " + (r.Passed ? "passed" : "FAILED") + " - " + ReportPath);
        }
    }
}
