using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// Places the props seen in the approved Screens 3 and 4 so they land where the approved images
    /// show them: each prop is positioned by casting from the fitted camera framing through the
    /// prop's measured screen position (fractions of the approved crop) to a chosen depth.
    /// Also lays out the gameplay coins, gems and the five lost socks.
    /// Every prop without a Meshy model is named PLACEHOLDER_*.
    /// </summary>
    public static class ScreenComposition
    {
        public const float Aspect3 = 269f / 538f;
        public const float Aspect4 = 231f / 537f;
        const int CollectibleLayer = 10, EnvironmentLayer = 8;

        public static float Screen4Z(LevelLayout l) => l.tunnelStartZ + l.segmentLength * 1.45f;

        internal struct CamPose { public Vector3 pos; public Quaternion rot; public float fov; public float aspect; }

        /// <summary>The fitted Screen 3 camera ("Tap to Start" view), the same pose the capture tool uses.</summary>
        internal static CamPose Screen3Pose(LevelLayout l, RunnerCameraRig rig) => Pose(l, rig.screen3, l.startZ, Aspect3, rig.wallClearance);

        static CamPose Pose(LevelLayout l, CameraPreset p, float mascotZ, float aspect, float wallClearance)
        {
            var anchor = new Vector3(0f, l.waterLevel + WaveField.SlideOffset(0f, mascotZ) + Level1SceneBuilder.MascotFloat, mascotZ);
            var pos = l.ClampInsidePassage(anchor + p.offset, wallClearance);
            return new CamPose { pos = pos, rot = Quaternion.LookRotation(anchor + p.lookOffset - pos), fov = p.fieldOfView, aspect = aspect };
        }

        /// <summary>World point seen at (xFrac from left, yFrac from top) of the approved crop, at a camera depth.</summary>
        internal static Vector3 At(CamPose c, float xFrac, float yFrac, float depth)
        {
            float t = Mathf.Tan(c.fov * 0.5f * Mathf.Deg2Rad);
            var local = new Vector3((xFrac * 2f - 1f) * t * c.aspect * depth, (1f - yFrac * 2f) * t * depth, depth);
            return c.pos + c.rot * local;
        }

        /// <summary>World size for something spanning <paramref name="widthFrac"/> of the screen width at that depth.</summary>
        internal static float SizeAt(CamPose c, float widthFrac, float depth) =>
            widthFrac * 2f * depth * Mathf.Tan(c.fov * 0.5f * Mathf.Deg2Rad) * c.aspect;

        /// <summary>March along the view ray until it reaches <paramref name="radius"/> from the drum axis (wall-mounted props).</summary>
        static Vector3 OnWall(CamPose c, LevelLayout l, float xFrac, float yFrac, float radius)
        {
            Vector3 dir = (At(c, xFrac, yFrac, 1f) - c.pos).normalized;
            Vector3 p = c.pos;
            for (int i = 0; i < 4000; i++)
            {
                p += dir * 0.02f;
                var d = new Vector2(p.x, p.y - (l.waterLevel + l.axisHeight));
                if (d.magnitude >= radius) break;
            }
            return p;
        }

        static MaterialSet _mats;
        static int _meshyGems;

        public static void Build(LevelLayout l, RunnerCameraRig rig, Transform mascot, MaterialSet mats, Transform parent)
        {
            _mats = mats;
            _meshyGems = 0;
            var root = new GameObject("Level1_Props").transform;
            root.SetParent(parent, false);

            var coinMesh = Level1SceneBuilder.SaveMesh(ProceduralMeshes.Coin(0.3f, 0.08f), "PawCoin");
            var gemMesh = Level1SceneBuilder.SaveMesh(ProceduralMeshes.Gem(0.2f, 0.42f), "Gem");
            var sockMesh = Level1SceneBuilder.SaveMesh(ProceduralMeshes.SockBody(Color.white, new Color(0.62f, 0.45f, 0.95f), new Color(0.35f, 0.3f, 0.85f)), "PLACEHOLDER_SockBody");
            var brushBluePink = Level1SceneBuilder.SaveMesh(ProceduralMeshes.BrushWheel(1f, 0.38f, new Color(0.15f, 0.3f, 0.95f), new Color(1f, 0.42f, 0.75f), 3), "PLACEHOLDER_BrushWheel_BluePink");
            var brushPink = Level1SceneBuilder.SaveMesh(ProceduralMeshes.BrushWheel(1f, 0.38f, new Color(0.25f, 0.3f, 0.9f), new Color(1f, 0.55f, 0.82f), 9), "PLACEHOLDER_BrushWheel_Pink");
            var duckBody = Level1SceneBuilder.SaveMesh(ProceduralMeshes.FluffBall(1f, 3, 0.03f, 5, Color.white, Color.white, "PLACEHOLDER_DuckBody"), "PLACEHOLDER_DuckBody");
            var quad = QuadMesh();
            var sphere = Level1SceneBuilder.BuiltinSphere();

            var c3 = Screen3Pose(l, rig);
            var c4 = Pose(l, rig.screen4, Screen4Z(l), Aspect4, rig.wallClearance);

            // ---------------- Screen 3: "Let's go! Into the washing machine!"
            var s3 = Group(root, "Screen3_Composition");
            var reachable = MascotVolume(l, mascot.GetComponent<BubbleRunner>());
            // Entrance brush, measured on the approved crop including its fur: centre (0.03, 0.53), 0.42 of the width across.
            var brush3 = At(c3, 0.03f, 0.53f, 9f);
            Brush(s3, "PLACEHOLDER_SpinningBrush_Entrance_L", brushBluePink, mats.brushFur, mats, reachable, brush3, SizeAt(c3, 0.42f, 9f) * 0.5f,
                Quaternion.LookRotation(Quaternion.Euler(0f, -32f, 0f) * (brush3 - c3.pos).normalized), 90f, 0f);
            HeroBubble(s3, quad, mats.bubble, At(c3, 0.87f, 0.47f, 7f), SizeAt(c3, 0.26f, 7f));
            HeroBubble(s3, quad, mats.bubble, At(c3, 0.95f, 0.66f, 6f), SizeAt(c3, 0.16f, 6f));
            HeroBubble(s3, quad, mats.bubble, At(c3, 0.05f, 0.71f, 6f), SizeAt(c3, 0.13f, 6f));
            HeroBubble(s3, quad, mats.bubble, At(c3, 0.25f, 0.83f, 5f), SizeAt(c3, 0.1f, 5f));
            Collect(s3, "Coin", coinMesh, mats.coin, At(c3, 0.33f, 0.47f, 19.5f), CollectibleKind.Coin, 0.3f);
            Collect(s3, "Coin", coinMesh, mats.coin, At(c3, 0.64f, 0.52f, 19.5f), CollectibleKind.Coin, 0.3f);
            Collect(s3, "Coin", coinMesh, mats.coin, At(c3, 0.44f, 0.43f, 27f), CollectibleKind.Coin, 0.3f);
            Collect(s3, "Coin", coinMesh, mats.coin, At(c3, 0.56f, 0.43f, 27f), CollectibleKind.Coin, 0.3f);
            Collect(s3, "Coin", coinMesh, mats.coin, At(c3, 0.50f, 0.40f, 33f), CollectibleKind.Coin, 0.3f);
            Duck(s3, mats, duckBody, sphere, At(c3, 0.49f, 0.555f, 11.8f), SizeAt(c3, 0.14f, 11.8f), mascot);
            Rails(s3, mats.rail, l);

            // ---------------- Screen 4: "Rescue 5 lost socks" inside the drum
            var s4 = Group(root, "Screen4_Composition");
            float wallR = l.clearRadius + 0.12f;
            var bl = OnWall(c4, l, 0.08f, 0.30f, wallR);
            var br = OnWall(c4, l, 0.90f, 0.47f, wallR);
            Brush(s4, "PLACEHOLDER_SpinningBrush_Drum_L", brushPink, mats.brushFur, mats, reachable, bl, 1.1f, FaceAxis(l, bl), 140f, 1.2f);
            Brush(s4, "PLACEHOLDER_SpinningBrush_Drum_R", brushBluePink, mats.brushFur, mats, reachable, br, 1.1f, FaceAxis(l, br), -140f, 1.2f);
            Collect(s4, "Coin", coinMesh, mats.coin, At(c4, 0.17f, 0.56f, 5.5f), CollectibleKind.Coin, 0.3f);
            Collect(s4, "Coin", coinMesh, mats.coin, At(c4, 0.83f, 0.67f, 5.0f), CollectibleKind.Coin, 0.3f);
            Collect(s4, "Coin", coinMesh, mats.coin, At(c4, 0.13f, 0.42f, 9f), CollectibleKind.Coin, 0.3f);
            Collect(s4, "Coin", coinMesh, mats.coin, At(c4, 0.50f, 0.51f, 16f), CollectibleKind.Coin, 0.3f);
            Collect(s4, "Gem", gemMesh, mats.gem, At(c4, 0.29f, 0.465f, 9f), CollectibleKind.Gem, 0.3f);
            Sock(s4, sockMesh, mats, sphere, At(c4, 0.69f, 0.56f, 8.5f), 1);
            HeroBubble(s4, quad, mats.bubble, At(c4, 0.74f, 0.33f, 7f), SizeAt(c4, 0.24f, 7f));
            HeroBubble(s4, quad, mats.bubble, At(c4, 0.08f, 0.69f, 5f), SizeAt(c4, 0.13f, 5f));
            HeroBubble(s4, quad, mats.bubble, At(c4, 0.93f, 0.47f, 5f), SizeAt(c4, 0.11f, 5f));
            HeroBubble(s4, quad, mats.bubble, At(c4, 0.62f, 0.41f, 9f), SizeAt(c4, 0.09f, 9f));
            HeroBubble(s4, quad, mats.bubble, At(c4, 0.36f, 0.36f, 10f), SizeAt(c4, 0.08f, 10f));

            // ---------------- gameplay layout: coin trails, the other four socks and a gem, kept out of the
            // Screen 4 view (camera z4-3.6 .. z4+12) so that framing stays as approved.
            var play = Group(root, "Gameplay_Collectibles");
            float z0 = l.tunnelStartZ, zAfter = Screen4Z(l) + 11f;
            for (int i = 0; i < 6; i++) Collect(play, "Coin", coinMesh, mats.coin, new Vector3(l.LaneX(1), 0.65f, z0 + 2.5f + i * 1.6f), CollectibleKind.Coin, 0.3f);
            for (int i = 0; i < 5; i++) Collect(play, "Coin", coinMesh, mats.coin, new Vector3(l.LaneX(2), 0.65f + Mathf.Sin(i / 4f * Mathf.PI) * 0.9f, z0 + 4f + i * 1.5f), CollectibleKind.Coin, 0.3f);
            for (int i = 0; i < 5; i++) Collect(play, "Coin", coinMesh, mats.coin, new Vector3(l.LaneX(0), 0.65f, zAfter + i * 1.3f), CollectibleKind.Coin, 0.3f);
            Collect(play, "Gem", gemMesh, mats.gem, new Vector3(l.LaneX(1), 1.7f, l.tunnelEndZ - 1.5f), CollectibleKind.Gem, 0.3f);
            // Pink gemstones along the water path, all sharing the one gem model and material: one to
            // jump for above the left lane, one on the water in the centre lane (both behind the Screen 4
            // camera), and one on the water in the right lane in the last drum segment.
            Collect(play, "Gem", gemMesh, mats.gem, new Vector3(l.LaneX(0), 1.35f, z0 + 10.5f), CollectibleKind.Gem, 0.3f);
            Collect(play, "Gem", gemMesh, mats.gem, new Vector3(l.LaneX(1), 0.7f, z0 + 12f), CollectibleKind.Gem, 0.3f);
            Collect(play, "Gem", gemMesh, mats.gem, new Vector3(l.LaneX(2), 0.7f, zAfter + 1.5f), CollectibleKind.Gem, 0.3f);
            Sock(play, sockMesh, mats, sphere, new Vector3(l.LaneX(0), 0.45f, z0 + 7f), 2);
            Sock(play, sockMesh, mats, sphere, new Vector3(l.LaneX(2), 0.45f, z0 + 12.5f), 3);
            Sock(play, sockMesh, mats, sphere, new Vector3(l.LaneX(1), 0.45f, zAfter + 3f), 4);
            Sock(play, sockMesh, mats, sphere, new Vector3(l.LaneX(2), 0.45f, l.tunnelEndZ - 1.5f), 5);
        }

        static Transform Group(Transform parent, string name)
        {
            var t = new GameObject(name).transform;
            t.SetParent(parent, false);
            return t;
        }

        static Quaternion FaceAxis(LevelLayout l, Vector3 p)
        {
            var outward = new Vector3(p.x, p.y - (l.waterLevel + l.axisHeight), 0f).normalized;
            return Quaternion.LookRotation(outward, Vector3.forward); // brush face (-Z) looks at the axis
        }

        /// <summary>
        /// Everywhere the mascot can be: every lane, from floating to the top of a jump, along the whole
        /// run, grown by its body radius plus a 10 cm margin. Spinning brushes must stay out of it.
        /// </summary>
        internal static Bounds MascotVolume(LevelLayout l, BubbleRunner runner)
        {
            float floatH = runner != null ? runner.floatHeight : Level1SceneBuilder.MascotFloat;
            float body = runner != null ? runner.bodyRadius : 0.5f * Level1SceneBuilder.MascotScale;
            float apex = runner != null ? runner.jumpVelocity * runner.jumpVelocity / (2f * Mathf.Max(0.1f, runner.gravity)) : 1.2f;
            apex = Mathf.Max(apex, 1.2f) + (runner != null ? runner.bobAmplitude : 0.05f);   // the validator checks lifts up to 1.2 m
            float lane = Mathf.Max(Mathf.Abs(l.LaneX(0)), Mathf.Abs(l.LaneX(l.laneCount - 1)));
            var b = new Bounds();
            b.SetMinMax(new Vector3(-lane, l.waterLevel + floatH, l.startZ - 30f), new Vector3(lane, l.waterLevel + WaveField.Slide.z + floatH + apex, l.loopZ + 10f));
            b.Expand(2f * (body + 0.1f));
            return b;
        }

        static void Brush(Transform parent, string name, Mesh mesh, Material mat, MaterialSet mats, Bounds reachable, Vector3 pos, float radius, Quaternion rot, float spin, float reach)
        {
            bool meshy = PropFactory.Has(PropSlot.SpinningBrush);
            var go = new GameObject(meshy ? name.Replace("PLACEHOLDER_", "") : name) { layer = EnvironmentLayer };
            go.transform.SetParent(parent, false);
            go.transform.SetPositionAndRotation(pos, rot);
            go.transform.localScale = Vector3.one * radius;
            if (meshy)
            {
                var holder = PropFactory.Create(PropSlot.SpinningBrush, go.transform);
                Level1SceneBuilder.ApplyMeshyLook(holder, mats.brush, go.name);
                float placed = MountRoller(go.transform, holder.transform, radius, reach, reachable);
                Level1SceneBuilder.Note($"- {go.name}: Meshy roller {2f * radius:F2} m across, reaching {placed:F2} m in front of its mount (wanted {reach:F2}) so it clears every lane and jump.");
            }
            else
            {
                go.AddComponent<MeshFilter>().sharedMesh = mesh;
                var r = go.AddComponent<MeshRenderer>();
                r.sharedMaterial = mat;
                r.shadowCastingMode = ShadowCastingMode.Off;
            }
            var s = go.AddComponent<Spinner>();
            s.localAxis = Vector3.forward;
            s.speed = spin;
        }

        /// <summary>
        /// Mounts the Meshy washing roller on its brush. The slot turns the roller's long axis onto the
        /// brush's local Z, which is its spin axis. The inner end (local -Z: toward the drum axis on the
        /// walls, toward the camera at the entrance) is placed <paramref name="reach"/> metres in front of
        /// the mount point. It is then pulled back in 5 cm steps until no roller vertex is inside the
        /// mascot's reachable volume; the rest of the roller runs back into the wall. A capsule collider
        /// along the axis makes it a solid obstacle for the runner (bump, blocked lane) without per-bristle
        /// mesh collision. Returns the reach used.
        /// </summary>
        internal static float MountRoller(Transform brush, Transform holder, float radius, float reach, Bounds reachable)
        {
            var b = PropFactory.LocalBounds(holder);      // holder space = brush space (holder sits at its origin)
            MeshSampler.Collect(holder.gameObject, out var v, out _);
            Vector3 fwd = brush.forward;
            // A vertex's world position is linear in the reach: a - fwd * reach.
            var a = new Vector3[(v.Length + 3) / 4];
            for (int i = 0, k = 0; i < v.Length; i += 4, k++)
                a[k] = brush.TransformPoint(holder.localPosition + v[i]) - fwd * (b.min.z * radius);
            float length = b.size.z * radius;
            for (; reach > -length; reach -= 0.05f)
            {
                bool hit = false;
                for (int k = 0; k < a.Length && !hit; k++) hit = reachable.Contains(a[k] - fwd * reach);
                if (!hit) break;
            }
            float shift = -reach / radius - b.min.z;
            holder.localPosition += Vector3.forward * shift;

            var cap = brush.gameObject.AddComponent<CapsuleCollider>();
            cap.direction = 2;
            cap.center = new Vector3(b.center.x, b.center.y, b.center.z + shift);
            cap.radius = Mathf.Max(b.extents.x, b.extents.y) * 0.9f;
            cap.height = b.size.z;
            return reach;
        }

        static void HeroBubble(Transform parent, Mesh quad, Material mat, Vector3 pos, float size)
        {
            var go = new GameObject("HeroBubble");
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            go.transform.localScale = Vector3.one * size;
            go.AddComponent<MeshFilter>().sharedMesh = quad;
            var r = go.AddComponent<MeshRenderer>();
            r.sharedMaterial = mat;
            r.shadowCastingMode = ShadowCastingMode.Off;
            go.AddComponent<Billboard>();
            var h = go.AddComponent<Hover>();
            h.amplitude = size * 0.08f;
            h.frequency = 0.35f;
            h.phase = pos.x * 1.3f + pos.z;
        }

        static GameObject Collect(Transform parent, string name, Mesh mesh, Material mat, Vector3 pos, CollectibleKind kind, float radius)
        {
            var slot = kind == CollectibleKind.Coin ? PropSlot.Coin : kind == CollectibleKind.Gem ? PropSlot.Gem : PropSlot.RescueSock;
            bool meshy = PropFactory.Has(slot);
            var go = new GameObject(meshy ? name.Replace("PLACEHOLDER_", "") : name) { layer = CollectibleLayer };
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            go.transform.rotation = Quaternion.Euler(0f, kind == CollectibleKind.Coin ? 15f : 0f, 0f);
            if (meshy)
            {
                var holder = PropFactory.Create(slot, go.transform);
                // Every Meshy gem shares the model's mesh and one GPU-instanced crystal material.
                if (kind == CollectibleKind.Gem && _mats != null)
                    Level1SceneBuilder.ApplyMeshyLook(holder, _mats.meshyGem, "gems", report: _meshyGems++ == 0);
            }
            else
            {
                go.AddComponent<MeshFilter>().sharedMesh = mesh;
                var r = go.AddComponent<MeshRenderer>();
                r.sharedMaterial = mat;
                r.shadowCastingMode = ShadowCastingMode.Off;
            }
            var c = go.AddComponent<SphereCollider>();
            c.radius = radius * 1.4f;
            c.isTrigger = true;
            var col = go.AddComponent<Collectible>();
            col.kind = kind;
            col.value = kind == CollectibleKind.Coin ? 1 : 1;
            col.spinSpeed = kind == CollectibleKind.Coin ? 120f : 70f;
            if (kind == CollectibleKind.Gem) { col.bobAmplitude = 0.1f; col.bobFrequency = 0.75f; }   // gentle float
            return go;
        }

        static void Sock(Transform parent, Mesh body, MaterialSet mats, Mesh sphere, Vector3 pos, int index)
        {
            var go = Collect(parent, $"PLACEHOLDER_LostSock_{index}", body, mats.sockFur, pos, CollectibleKind.Sock, 0.35f);
            go.transform.rotation = Quaternion.Euler(0f, 180f, 0f);
            if (PropFactory.Has(PropSlot.RescueSock)) return;
            go.transform.localScale = Vector3.one * 1.2f;
            foreach (float side in new[] { -1f, 1f })
            {
                var eye = new GameObject("Eye");
                eye.transform.SetParent(go.transform, false);
                eye.transform.localPosition = new Vector3(0.065f * side, 0.33f, 0.15f);
                eye.transform.localScale = new Vector3(0.05f, 0.06f, 0.03f);
                eye.AddComponent<MeshFilter>().sharedMesh = sphere;
                eye.AddComponent<MeshRenderer>().sharedMaterial = mats.eye;
            }
        }

        static void Duck(Transform parent, MaterialSet mats, Mesh body, Mesh sphere, Vector3 pos, float size, Transform mascot)
        {
            bool meshy = PropFactory.Has(PropSlot.RubberDuck);
            var go = new GameObject(meshy ? "RubberDuck (Meshy, drifts ahead into the drum)" : "PLACEHOLDER_RubberDuck (drifts ahead into the drum)");
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            if (meshy)
            {
                var m = PropFactory.Create(PropSlot.RubberDuck, go.transform);
                m.transform.localScale *= size;
            }
            else
            {
                Child(go.transform, "Body", body, mats.duck, new Vector3(0f, 0f, 0f), new Vector3(size * 0.5f, size * 0.38f, size * 0.55f));
                Child(go.transform, "Head", sphere, mats.duck, new Vector3(0f, size * 0.42f, size * 0.2f), Vector3.one * size * 0.45f);
                Child(go.transform, "Beak", sphere, mats.cheek, new Vector3(0f, size * 0.38f, size * 0.45f), new Vector3(size * 0.22f, size * 0.09f, size * 0.18f));
            }
            var drift = go.AddComponent<DriftAhead>();
            drift.mascot = mascot;
        }

        static Transform Child(Transform parent, string name, Mesh mesh, Material mat, Vector3 pos, Vector3 scale)
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

        static void Rails(Transform parent, Material mat, LevelLayout l)
        {
            var cyl = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            var mesh = cyl.GetComponent<MeshFilter>().sharedMesh;
            Object.DestroyImmediate(cyl);
            var root = Group(parent, "PLACEHOLDER_WaterSlideRails (replace with Meshy water-slide pieces)");
            // Gold rims along the edges of the raised water path (Screen 3 shows gold slide edges with
            // the water spilling over them).
            float zA = l.startZ - 22f, zB = l.castleFrontZ - 3f;
            float x = WaveField.Slide.x + 0.12f;
            foreach (float side in new[] { -1f, 1f })
            {
                var rail = Child(root, side < 0 ? "Rail_L" : "Rail_R", mesh, mat, new Vector3(x * side, 0.12f, (zA + zB) * 0.5f), new Vector3(0.14f, (zB - zA) * 0.5f, 0.14f));
                rail.rotation = Quaternion.Euler(90f, 0f, 0f);
                for (float z = zA; z <= zB; z += 3f)
                    Child(root, "Post", mesh, mat, new Vector3(x * side, -0.2f, z), new Vector3(0.08f, 0.32f, 0.08f));
            }
        }

        static Mesh QuadMesh()
        {
            var q = GameObject.CreatePrimitive(PrimitiveType.Quad);
            var mesh = q.GetComponent<MeshFilter>().sharedMesh;
            Object.DestroyImmediate(q);
            return mesh;
        }
    }
}
