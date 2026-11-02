using UnityEngine;
using UnityEngine.Rendering;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// Shared scenery used by several approved screens: waterfalls pouring from the castle towers
    /// (Screens 1, 3, 10), foam clouds, and the friendly characters of Screens 1, 11 and 12. Every
    /// piece without a Meshy model is named PLACEHOLDER_ and listed in Design/MISSING_ASSETS.md.
    /// </summary>
    public static class EnvironmentDressing
    {
        // Side-tower balconies of the Meshy castle (glTF units, measured from the model's front view).
        static readonly Vector3[] CastleSpouts = { new Vector3(-0.45f, -0.08f, 0.18f), new Vector3(0.45f, -0.08f, 0.18f) };

        /// <summary>Waterfalls from both side towers of the castle down to <paramref name="waterY"/>.</summary>
        public static void CastleWaterfalls(Transform castle, MaterialSet mats, Transform parent, float waterY)
        {
            if (castle == null) return;
            var root = new GameObject("CastleWaterfalls").transform;
            root.SetParent(parent, false);
            foreach (var local in CastleSpouts)
            {
                Vector3 top = castle.TransformPoint(local);
                float h = Mathf.Max(1f, top.y - waterY);
                Waterfall(root, mats, top, 0.9f, h, 0.7f);
            }
        }

        /// <summary>A waterfall ribbon from <paramref name="top"/> falling <paramref name="height"/> m; it arcs
        /// <paramref name="outward"/> m toward -Z, turned by <paramref name="yaw"/> degrees about Y (180 = falls toward +Z).</summary>
        public static void Waterfall(Transform parent, MaterialSet mats, Vector3 top, float width, float height, float outward, float yaw = 0f)
        {
            var go = new GameObject("Waterfall");
            go.transform.SetParent(parent, false);
            go.transform.position = top;
            go.transform.rotation = Quaternion.Euler(0f, yaw, 0f);
            go.AddComponent<MeshFilter>().sharedMesh = Level1SceneBuilder.SaveMesh(
                ProceduralMeshes.WaterfallRibbon(width, height, outward), $"Waterfall_{width:F1}x{height:F1}");
            var r = go.AddComponent<MeshRenderer>();
            r.sharedMaterial = mats.waterfall;
            r.shadowCastingMode = ShadowCastingMode.Off;
            var splash = Level1SceneBuilder.Fx(parent, "WaterfallSplash", ps => ParticleFactory.WaterfallSplash(ps, mats.droplet, width));
            splash.transform.position = top + Quaternion.Euler(0f, yaw, 0f) * new Vector3(0f, -height + 0.05f, -outward);
        }

        /// <summary>A puffy foam cloud (white/pink), as along the bottom of Screens 1 and 12.</summary>
        public static Transform FoamCloud(Transform parent, MaterialSet mats, Vector3 pos, float size, Color tint, int seed)
        {
            var mesh = Level1SceneBuilder.SaveMesh(ProceduralMeshes.FluffBall(1f, 3, 0.12f, seed, tint, Color.white, $"FoamCloud_{seed}"), $"FoamCloud_{seed}");
            var go = new GameObject("FoamCloud");
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            go.transform.localScale = new Vector3(size, size * 0.62f, size * 0.8f);
            go.AddComponent<MeshFilter>().sharedMesh = mesh;
            var r = go.AddComponent<MeshRenderer>();
            r.sharedMaterial = mats.cloud;
            r.shadowCastingMode = ShadowCastingMode.Off;
            return go.transform;
        }

        /// <summary>The blue water-drop friend from Screen 1 (placeholder until its Meshy model exists).</summary>
        public static Transform WaterDropBuddy(Transform parent, MaterialSet mats, Vector3 pos, float size, Vector3 faceToward)
        {
            var go = new GameObject("PLACEHOLDER_WaterDropBuddy");
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            go.transform.rotation = Quaternion.LookRotation(Flat(faceToward - pos));
            var sphere = Level1SceneBuilder.BuiltinSphere();
            ScreenComposition.Child(go.transform, "Body", sphere, mats.buddyBlue, Vector3.zero, new Vector3(size, size * 0.9f, size));
            ScreenComposition.Child(go.transform, "Tip", sphere, mats.buddyBlue, new Vector3(0f, size * 0.45f, 0f), new Vector3(size * 0.35f, size * 0.5f, size * 0.35f));
            Face(go.transform, mats, size, 0.46f);
            return go.transform;
        }

        public static Transform StarBall(Transform parent, MaterialSet mats, Vector3 pos, float size)
        {
            var go = new GameObject("PLACEHOLDER_StarBall");
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            ScreenComposition.Child(go.transform, "Ball", Level1SceneBuilder.BuiltinSphere(), mats.starBall, Vector3.zero, Vector3.one * size);
            go.AddComponent<Hover>().amplitude = size * 0.06f;
            return go.transform;
        }

        /// <summary>A sock friend facing <paramref name="faceToward"/> (Meshy model when supplied).</summary>
        public static Transform SockFriend(Transform parent, MaterialSet mats, Vector3 pos, float scale, Vector3 faceToward)
        {
            bool meshy = PropFactory.Has(PropSlot.RescueSock);
            var go = new GameObject(meshy ? "SockFriend (Meshy)" : "PLACEHOLDER_SockFriend");
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            // The placeholder sock's face is on its local +Z.
            go.transform.rotation = Quaternion.LookRotation(Flat(faceToward - pos));
            go.transform.localScale = Vector3.one * scale;
            if (meshy) PropFactory.Create(PropSlot.RescueSock, go.transform);
            else
            {
                var body = Level1SceneBuilder.SaveMesh(ProceduralMeshes.SockBody(Color.white, new Color(0.62f, 0.45f, 0.95f), new Color(0.35f, 0.3f, 0.85f)), "PLACEHOLDER_SockBody");
                ScreenComposition.Child(go.transform, "Sock", body, mats.sockFur, Vector3.zero, Vector3.one);
                foreach (float side in new[] { -1f, 1f })
                    ScreenComposition.Child(go.transform, "Eye", Level1SceneBuilder.BuiltinSphere(), mats.eye, new Vector3(0.065f * side, 0.33f, 0.15f), new Vector3(0.05f, 0.06f, 0.03f));
            }
            var h = go.AddComponent<Hover>(); h.amplitude = 0.05f * scale; h.frequency = 1.6f; h.phase = pos.x;
            return go.transform;
        }

        public static Transform Duck(Transform parent, MaterialSet mats, Vector3 pos, float size, Vector3 faceToward)
        {
            bool meshy = PropFactory.Has(PropSlot.RubberDuck);
            var go = new GameObject(meshy ? "RubberDuck (Meshy)" : "PLACEHOLDER_RubberDuck");
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            go.transform.rotation = Quaternion.LookRotation(Flat(faceToward - pos));
            if (meshy) { var m = PropFactory.Create(PropSlot.RubberDuck, go.transform); m.transform.localScale *= size; }
            else
            {
                var sphere = Level1SceneBuilder.BuiltinSphere();
                ScreenComposition.Child(go.transform, "Body", sphere, mats.duck, Vector3.zero, new Vector3(size * 0.9f, size * 0.62f, size * 0.8f));
                ScreenComposition.Child(go.transform, "Head", sphere, mats.duck, new Vector3(0f, size * 0.42f, size * 0.15f), Vector3.one * size * 0.48f);
                ScreenComposition.Child(go.transform, "Beak", sphere, mats.cheek, new Vector3(0f, size * 0.38f, size * 0.42f), new Vector3(size * 0.26f, size * 0.1f, size * 0.2f));
                foreach (float side in new[] { -1f, 1f })
                    ScreenComposition.Child(go.transform, "Eye", sphere, mats.eye, new Vector3(side * size * 0.1f, size * 0.5f, size * 0.36f), Vector3.one * size * 0.08f);
            }
            go.AddComponent<Hover>().amplitude = size * 0.04f;
            return go.transform;
        }

        static void Face(Transform t, MaterialSet mats, float size, float forward)
        {
            var sphere = Level1SceneBuilder.BuiltinSphere();
            foreach (float side in new[] { -1f, 1f })
            {
                var eye = ScreenComposition.Child(t, "Eye", sphere, mats.eye, new Vector3(side * size * 0.17f, size * 0.06f, size * forward), new Vector3(size * 0.14f, size * 0.18f, size * 0.08f));
                ScreenComposition.Child(eye, "Shine", sphere, mats.white, new Vector3(-0.2f, 0.25f, -0.45f), Vector3.one * 0.35f);
            }
            ScreenComposition.Child(t, "Mouth", sphere, mats.cheek, new Vector3(0f, -size * 0.12f, size * (forward + 0.02f)), new Vector3(size * 0.16f, size * 0.08f, size * 0.04f));
        }

        static Vector3 Flat(Vector3 v)
        {
            v.y = 0f;
            return v.sqrMagnitude < 1e-6f ? Vector3.back : v.normalized;
        }
    }
}
