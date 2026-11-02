using System.Collections.Generic;
using System.Text;
using UnityEngine;
using UnityEngine.Rendering;
using Object = UnityEngine.Object;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// Approved Screen 3's waterfalls. On each side of the portal, water pours from a gold spout on the
    /// Meshy castle's tower into a gold catch basin and on down into the moat. The approved image
    /// shows two tiers per side, between the towers' gold collars.
    ///
    /// Placement follows the approved image without moving the camera. Each waterfall's measured
    /// screen position is cast from the fitted Screen 3 camera until the ray reaches the castle mesh,
    /// so the spout sits on the tower exactly where the approved image shows the water.
    /// The falling water is permanent FX (BubbleWash/Waterfall plus spray particles). The gold
    /// spouts and basins are PLACEHOLDER_ pieces until Meshy models replace them.
    /// </summary>
    public static class TowerWaterfalls
    {
        /// <summary>One side's cascade, measured on the approved Screen 3 (fractions of the screen from its top-left corner).</summary>
        public struct Spec
        {
            public string side;
            /// <summary>Horizontal centre of the falling water.</summary>
            public float x;
            /// <summary>Where the upper fall leaves its spout.</summary>
            public float lipY;
            /// <summary>The catch basin (the approved image's second gold collar).</summary>
            public float basinY;
            /// <summary>Width of the water column as a fraction of the screen width.</summary>
            public float width;
        }

        // Measured on Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png (807 x 1614 px):
        // - left: column x 0.043-0.124, upper fall y 0.300-0.344, lower fall from 0.37; hidden behind
        //   the entrance brush below 0.43;
        // - right: column x 0.874-0.960, upper fall y 0.307-0.344, lower fall from 0.38; hidden behind
        //   the hero bubble below 0.43.
        public static readonly Spec[] Approved =
        {
            new Spec { side = "L", x = 0.085f, lipY = 0.298f, basinY = 0.360f, width = 0.080f },
            new Spec { side = "R", x = 0.917f, lipY = 0.305f, basinY = 0.372f, width = 0.085f },
        };

        public const string RootName = "Screen3_TowerWaterfalls";

        const float FallbackDepth = 19.5f;    // camera depth of the castle front, used when there is no castle mesh
        const float Standoff = 0.55f;         // how far each spout sticks out of the tower
        const float IntoTower = 0.3f;         // pipes and brackets run this far into the tower
        const float HitTolerance = 0.3f;      // ray-to-vertex distance that counts as reaching the castle
        const float UpperThrowSpeed = 1.1f;   // horizontal speed of the water leaving the spout (m/s)
        const float LowerThrowSpeed = 0.9f;   // horizontal speed of the overflow from the basin rim (m/s)
        const float Gravity = 9.81f;
        static readonly Vector3 Outward = Vector3.back;   // the castle front faces the approaching player (-Z)

        /// <summary>What was built for one side (for the build report and the tests).</summary>
        public struct Placement
        {
            public string side;
            public bool onTower;
            public Vector3 towerPoint, lip, basin, basinTowerPoint, landing;
            public float width, upperDrop, lowerDrop;
            /// <summary>Where the spout and the basin appear in the fitted Screen 3 view (fractions from the top-left).</summary>
            public Vector2 screenLip, screenBasin;
            public Spec spec;
        }

        /// <summary>The placements of the most recent build (read by the scene test).</summary>
        public static IReadOnlyList<Placement> LastBuild { get; private set; } = new List<Placement>();

        internal static List<Placement> Build(LevelLayout l, ScreenComposition.CamPose c3, GameObject castle, MaterialSet mats, Transform parent, StringBuilder log)
        {
            var root = new GameObject(RootName).transform;
            root.SetParent(parent, false);

            Vector3[] castleVerts = null;
            if (castle != null)
            {
                MeshSampler.Collect(castle, out var v, out _);
                var m = castle.transform.localToWorldMatrix;
                for (int i = 0; i < v.Length; i++) v[i] = m.MultiplyPoint3x4(v[i]);
                castleVerts = v.Length > 0 ? v : null;
            }

            var parts = new Parts
            {
                cylinder = PrimitiveMesh(PrimitiveType.Cylinder),
                quad = PrimitiveMesh(PrimitiveType.Quad),
                spoutRing = Level1SceneBuilder.SaveMesh(ProceduralMeshes.Torus(1f, 0.16f, 40, 8, "TowerSpoutRing"), "TowerSpoutRing"),
                mats = mats,
            };

            float moatY = l.waterLevel + WaveField.Slide.y;
            var placements = new List<Placement>();
            foreach (var spec in Approved)
            {
                var p = BuildSide(spec, c3, castleVerts, moatY, root, parts);
                placements.Add(p);
                log?.AppendLine($"- Waterfall {p.side}: spout on the {(p.onTower ? "Meshy tower" : "fallback plane (no castle mesh found)")} at ({p.towerPoint.x:F2}, {p.towerPoint.y:F2}, {p.towerPoint.z:F2}); " +
                                $"falls {p.upperDrop:F2} m into a basin, then {p.lowerDrop:F2} m into the moat; column {p.width:F2} m wide. " +
                                $"On Screen 3 the spout is at ({p.screenLip.x:F3}, {p.screenLip.y:F3}) and the basin at ({p.screenBasin.x:F3}, {p.screenBasin.y:F3}); approved ({spec.x:F3}, {spec.lipY:F3}) and ({spec.x:F3}, {spec.basinY:F3}).");
            }
            LastBuild = placements;
            return placements;
        }

        class Parts
        {
            public Mesh cylinder, quad, spoutRing;
            public MaterialSet mats;
        }

        static Placement BuildSide(Spec spec, ScreenComposition.CamPose c, Vector3[] castleVerts, float moatY, Transform root, Parts parts)
        {
            var side = new GameObject($"Waterfall_{spec.side}").transform;
            side.SetParent(root, false);
            var p = new Placement { side = spec.side, spec = spec };

            // ---- spout: on the tower where the approved image shows the water leaving it
            Vector3 dirLip = Ray(c, spec.x, spec.lipY);
            float hit = RayHit(castleVerts, c.pos, dirLip, 4f, 80f);
            p.onTower = hit > 0f;
            if (p.onTower)
            {
                p.towerPoint = c.pos + dirLip * hit;
                p.lip = c.pos + dirLip * (hit - Standoff / Mathf.Max(0.2f, dirLip.z));
            }
            else
            {
                p.lip = ScreenComposition.At(c, spec.x, spec.lipY, FallbackDepth);
                p.towerPoint = p.lip - Outward * Standoff;
            }
            float depth = Vector3.Dot(p.lip - c.pos, c.rot * Vector3.forward);
            float w = ScreenComposition.SizeAt(c, spec.width, depth);
            p.width = w;
            float pipeR = w * 0.42f;
            Vector3 start1 = p.lip + Vector3.down * (pipeR * 0.45f);   // the water runs along the bottom of the pipe

            // ---- catch basin: where the upper fall lands, at the approved image's second collar
            float basinR = Mathf.Max(0.3f, w * 0.75f);
            Vector3 basin = start1;
            for (int k = 0; k < 4; k++)
            {
                float drop = Mathf.Max(0.3f, start1.y - basin.y);
                float thr = UpperThrowSpeed * Mathf.Sqrt(2f * drop / Gravity);
                float y = ScreenComposition.At(c, spec.x, spec.basinY, depth - thr).y;
                basin = new Vector3(start1.x, y, start1.z) + Outward * thr;
            }
            // Keep the basin's back rim clear of the tower at its own height.
            Vector3 dirBasin = Ray(c, spec.x, spec.basinY);
            float hitB = RayHit(castleVerts, c.pos, dirBasin, 4f, 80f);
            p.basinTowerPoint = hitB > 0f ? c.pos + dirBasin * hitB : new Vector3(basin.x, basin.y, p.towerPoint.z);
            float backLimit = p.basinTowerPoint.z - 0.05f;
            if (basin.z + basinR > backLimit) basin.z = backLimit - basinR;
            p.basin = basin;
            p.upperDrop = start1.y - basin.y;

            // ---- lower fall: overflows the basin's front rim and drops into the moat
            Vector3 start2 = basin + Outward * (basinR * 0.92f) + Vector3.up * 0.04f;
            float landingY = moatY - 0.18f;                               // just under the wave troughs
            p.lowerDrop = Mathf.Max(0.3f, start2.y - landingY);
            float thr2 = LowerThrowSpeed * Mathf.Sqrt(2f * p.lowerDrop / Gravity);
            p.landing = start2 + Outward * thr2 + Vector3.down * p.lowerDrop;
            p.screenLip = Project(c, start1);
            p.screenBasin = Project(c, basin);

            // ---- falling water
            Fall(side, $"Waterfall_{spec.side}_Upper", start1, basin + Vector3.down * 0.02f, w * 0.7f, w * 0.85f, parts.mats.waterfall);
            Fall(side, $"Waterfall_{spec.side}_Lower", start2, p.landing, w * 0.9f, w * 1.15f, parts.mats.waterfall);

            // ---- gold spout and basin (placeholders for Meshy pieces)
            var gold = parts.mats.rail;
            Pipe(side, $"PLACEHOLDER_TowerSpout_{spec.side}", parts.cylinder, gold, p.lip, p.towerPoint - Outward * IntoTower, pipeR);
            var ring = Part(side, $"PLACEHOLDER_TowerSpoutCollar_{spec.side}", parts.spoutRing, gold, p.lip, Vector3.one * (pipeR + 0.04f));
            ring.rotation = Quaternion.LookRotation(Outward);
            Part(side, $"PLACEHOLDER_CatchBasin_{spec.side}", parts.cylinder, gold, basin + Vector3.down * 0.1f, new Vector3(basinR * 2f, 0.09f, basinR * 2f));
            var rim = Part(side, $"PLACEHOLDER_CatchBasinRim_{spec.side}", parts.spoutRing, gold, basin, Vector3.one * basinR);
            rim.rotation = Quaternion.Euler(90f, 0f, 0f);
            Pipe(side, $"PLACEHOLDER_CatchBasinBracket_{spec.side}", parts.cylinder, gold, basin + Vector3.down * 0.12f, p.basinTowerPoint - Outward * IntoTower + Vector3.down * 0.12f, 0.08f);

            // ---- foam, spray and droplets
            Foam(side, $"Foam_Basin_{spec.side}", parts.quad, parts.mats.droplet, basin + Vector3.up * 0.01f, basinR * 1.7f, 25f);
            Foam(side, $"Foam_Moat_{spec.side}", parts.quad, parts.mats.droplet, new Vector3(p.landing.x, moatY + 0.1f, p.landing.z), w * 2.6f, -18f);
            var droplet = parts.mats.droplet;
            Emitter(side, $"FX_WaterfallSplash_Basin_{spec.side}", basin, Quaternion.identity, ps => ParticleFactory.WaterfallSplash(ps, droplet, w * 0.3f, 0.55f));
            Emitter(side, $"FX_WaterfallSplash_Moat_{spec.side}", new Vector3(p.landing.x, moatY, p.landing.z), Quaternion.identity, ps => ParticleFactory.WaterfallSplash(ps, droplet, w * 0.5f, 1f));
            Emitter(side, $"FX_WaterfallDroplets_Spout_{spec.side}", start1, Quaternion.LookRotation(Outward), ps => ParticleFactory.WaterfallDroplets(ps, droplet, w * 0.7f, UpperThrowSpeed));
            Emitter(side, $"FX_WaterfallDroplets_Basin_{spec.side}", start2, Quaternion.LookRotation(Outward), ps => ParticleFactory.WaterfallDroplets(ps, droplet, w * 0.9f, LowerThrowSpeed));
            return p;
        }

        /// <summary>Screen position (fractions from the top-left) of a world point in a camera pose; the inverse of ScreenComposition.At.</summary>
        internal static Vector2 Project(ScreenComposition.CamPose c, Vector3 world)
        {
            Vector3 local = Quaternion.Inverse(c.rot) * (world - c.pos);
            float t = Mathf.Tan(c.fov * 0.5f * Mathf.Deg2Rad);
            float z = Mathf.Max(1e-4f, local.z);
            return new Vector2((local.x / (z * t * c.aspect) + 1f) * 0.5f, (1f - local.y / (z * t)) * 0.5f);
        }

        /// <summary>View-ray direction through a point of the approved screen.</summary>
        static Vector3 Ray(ScreenComposition.CamPose c, float xFrac, float yFrac) => (ScreenComposition.At(c, xFrac, yFrac, 1f) - c.pos).normalized;

        /// <summary>Distance along the ray to the nearest castle vertex lying within <see cref="HitTolerance"/> of it, or -1 when there is none.</summary>
        internal static float RayHit(Vector3[] verts, Vector3 origin, Vector3 dir, float minT, float maxT)
        {
            if (verts == null) return -1f;
            float best = float.MaxValue, tol2 = HitTolerance * HitTolerance;
            for (int i = 0; i < verts.Length; i++)
            {
                Vector3 d = verts[i] - origin;
                float t = Vector3.Dot(d, dir);
                if (t < minT || t > maxT || t >= best) continue;
                if ((d - dir * t).sqrMagnitude <= tol2) best = t;
            }
            return best < float.MaxValue ? best : -1f;
        }

        static void Fall(Transform parent, string name, Vector3 from, Vector3 to, float topWidth, float bottomWidth, Material mat)
        {
            Vector3 flat = to - from; flat.y = 0f;
            float throwDistance = Mathf.Max(0.02f, flat.magnitude);
            float drop = Mathf.Max(0.05f, from.y - to.y);
            var dir = flat.sqrMagnitude > 1e-6f ? flat.normalized : Outward;
            int along = Mathf.Clamp(Mathf.CeilToInt(drop / 0.12f), 10, 36);
            var mesh = Level1SceneBuilder.SaveMesh(ProceduralMeshes.Waterfall(throwDistance, drop, topWidth, bottomWidth, 0.35f, 12, along, name), name);
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.SetPositionAndRotation(from, Quaternion.LookRotation(dir, Vector3.up));
            go.AddComponent<MeshFilter>().sharedMesh = mesh;
            var r = go.AddComponent<MeshRenderer>();
            r.sharedMaterial = mat;
            r.shadowCastingMode = ShadowCastingMode.Off;
            r.receiveShadows = false;
        }

        /// <summary>A gold pipe (Unity's 2 m cylinder) running from <paramref name="a"/> to <paramref name="b"/>.</summary>
        static void Pipe(Transform parent, string name, Mesh cylinder, Material mat, Vector3 a, Vector3 b, float radius)
        {
            Vector3 d = b - a;
            float len = Mathf.Max(0.02f, d.magnitude);
            var t = Part(parent, name, cylinder, mat, (a + b) * 0.5f, new Vector3(radius * 2f, len * 0.5f, radius * 2f));
            t.rotation = Quaternion.FromToRotation(Vector3.up, d / len);
        }

        static void Foam(Transform parent, string name, Mesh quad, Material mat, Vector3 pos, float size, float spin)
        {
            var t = Part(parent, name, quad, mat, pos, Vector3.one * size);
            t.rotation = Quaternion.Euler(90f, 0f, 0f);
            var s = t.gameObject.AddComponent<Spinner>();
            s.localAxis = Vector3.forward;
            s.speed = spin;
        }

        static void Emitter(Transform parent, string name, Vector3 pos, Quaternion rot, System.Action<ParticleSystem> configure)
        {
            var ps = Level1SceneBuilder.Fx(parent, name, configure);
            ps.transform.SetPositionAndRotation(pos, rot);
        }

        static Transform Part(Transform parent, string name, Mesh mesh, Material mat, Vector3 pos, Vector3 scale)
        {
            var go = new GameObject(name);
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            go.transform.localScale = scale;
            go.AddComponent<MeshFilter>().sharedMesh = mesh;
            var r = go.AddComponent<MeshRenderer>();
            r.sharedMaterial = mat;
            r.shadowCastingMode = ShadowCastingMode.Off;
            r.receiveShadows = false;
            return go.transform;
        }

        static Mesh PrimitiveMesh(PrimitiveType type)
        {
            var tmp = GameObject.CreatePrimitive(type);
            var mesh = tmp.GetComponent<MeshFilter>().sharedMesh;
            Object.DestroyImmediate(tmp);
            return mesh;
        }
    }
}
