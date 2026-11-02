using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;
using Object = UnityEngine.Object;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// Builds the rest of Level 1 after the opening (Screens 3-4), in the order of the approved screens:
    ///
    ///   Screens 5-6  outdoor water slides with two elevated side paths (hop up, ride, drop down),
    ///   Screens 7-8  a second Meshy washer drum: spinning brushes, then the collect moment,
    ///   Screen 9     enemies on the stretch after the drum (room to see them coming once the camera
    ///                has swung back from the Screen 8 close-up),
    ///   Screens 10-11 the Bubble Kingdom: floating islands, waterfalls, the kingdom gate, cheering socks,
    ///   Screen 12    the finish with the sock friends and the treasure chest.
    ///
    /// The second drum reuses the user's Meshy tunnel; the kingdom gate and the small island castles
    /// reuse the Meshy castle until their own models exist. Everything else without a Meshy model is
    /// a labelled PLACEHOLDER_ (see Design/MISSING_ASSETS.md).
    /// </summary>
    public static class Level1Sections
    {
        const int EnvironmentLayer = 8;

        /// <summary>Length of the outdoor stretch between the two drums (Screens 5-6).</summary>
        public const float OutdoorLength = 40f;
        /// <summary>From the end of the second drum to the finish: the enemy stretch (Screen 9) and the Bubble Kingdom (Screens 10-12).</summary>
        public const float KingdomLength = 60f;
        /// <summary>Length of the enemy stretch between the second drum and the kingdom (Screen 9).</summary>
        public const float EnemyStretch = 14f;
        /// <summary>The mascot glides this far past the finish line before stopping (Screen 12 pose).</summary>
        public const float FinishStop = 2f;
        /// <summary>Water surface of the elevated side paths above the main water level.</summary>
        public const float SidePathHeight = 1.0f;

        /// <summary>Key z positions, all derived from the measured opening so they follow the Meshy models.</summary>
        public struct Plan
        {
            public float drumAEnd, drumBStart, drumBEnd, kingdomStart, gateZ, screen11Z, finishZ, stopZ;
            public float sideLStart, sideLEnd, sideRStart, sideREnd;
            public float brushesZ, collectZ, enemiesZ;
            public float screen5Z, screen6Z, screen7Z, screen8Z, screen9Z, screen10Z;
        }

        public static Plan PlanFor(LevelLayout l)
        {
            var p = new Plan();
            p.drumAEnd = l.tunnelEndZ;
            p.drumBStart = l.drum2StartZ;
            p.drumBEnd = l.drum2EndZ;
            p.kingdomStart = l.drum2EndZ + EnemyStretch;
            p.finishZ = l.finishZ;
            p.stopZ = l.finishZ + FinishStop;
            p.sideLStart = p.drumAEnd + 6f; p.sideLEnd = p.drumAEnd + 22f;
            p.sideRStart = p.drumAEnd + 26f; p.sideREnd = p.drumAEnd + 36f;
            p.brushesZ = p.drumBStart; p.collectZ = p.drumBStart + 15f; p.enemiesZ = p.drumBEnd;
            p.gateZ = p.kingdomStart + 12f;
            p.screen11Z = p.kingdomStart + 21f;
            // Capture poses (where each approved screen is reproduced).
            p.screen5Z = p.sideLStart - 0.6f;     // hopping up onto the left side path
            p.screen6Z = p.sideLEnd - 3.0f;       // riding it just before it ends
            p.screen7Z = p.drumBStart + 2.5f;     // brushes ahead
            p.screen8Z = p.collectZ + 5.2f;       // coins, gem and sock between the mascot and the camera
            p.screen9Z = p.enemiesZ + 0.8f;       // just out of the drum, enemy ahead
            p.screen10Z = p.kingdomStart + 3f;    // the kingdom opens up
            return p;
        }

        /// <summary>Fill in the second drum, the finish and the run length from the measured first drum.</summary>
        public static void PlanLayout(LevelLayout l)
        {
            l.drum2StartZ = l.tunnelEndZ + OutdoorLength;
            l.drum2EndZ = l.drum2StartZ + (l.tunnelEndZ - l.tunnelStartZ);
            l.finishZ = l.drum2EndZ + KingdomLength;
            l.loopZ = l.finishZ + 1000f; // the full level finishes instead of looping
        }

        // ------------------------------------------------------------------ second drum

        /// <summary>Second washer drum (Screens 7-9): the same Meshy tunnel segments as the first drum, moved along.</summary>
        public static Transform BuildDrumB(LevelLayout l, Transform drumA, Transform parent, MaterialSet mats)
        {
            var root = new GameObject("WasherTunnel_B (Screens 7-9)").transform;
            root.SetParent(parent, false);
            float dz = l.drum2StartZ - l.tunnelStartZ;
            foreach (Transform child in drumA)
            {
                GameObject copy;
                var source = PrefabUtility.IsAnyPrefabInstanceRoot(child.gameObject)
                    ? PrefabUtility.GetCorrespondingObjectFromSource(child.gameObject) : null;
                if (source != null)
                {
                    copy = (GameObject)PrefabUtility.InstantiatePrefab(source);
                    copy.transform.SetPositionAndRotation(child.position + Vector3.forward * dz, child.rotation);
                    copy.transform.localScale = child.lossyScale;
                }
                else
                {
                    copy = Object.Instantiate(child.gameObject);
                    copy.transform.position = child.position + Vector3.forward * dz;
                }
                copy.name = child.name.Replace("TunnelSegment_", "TunnelSegment_B");
                copy.transform.SetParent(root, true);
            }
            if (!l.usingPlaceholderTunnel) Level1SceneBuilder.ApplyMeshyLook(root.gameObject, mats.drum, "tunnel B");
            // Mobile budget: the second drum is drawn from the end of the first one until the kingdom.
            var vis = root.gameObject.AddComponent<ZRangeVisibility>();
            vis.minCameraZ = l.tunnelEndZ - 12f;
            vis.maxCameraZ = l.drum2EndZ + 45f;
            Level1SceneBuilder.Log.AppendLine($"- Second drum (Screens 7-9): {l.segmentCount} more Meshy tunnel segments from z={l.drum2StartZ:F2} to z={l.drum2EndZ:F2}.");
            return root;
        }

        // ------------------------------------------------------------------ everything else

        public static void Build(LevelLayout l, MaterialSet mats, Transform parent, GameObject castle, Transform mascot)
        {
            var p = PlanFor(l);
            _showKingdomFromZ = l.drum2EndZ - 20f; // the kingdom's castles are drawn from late in the second drum
            var root = new GameObject("Level1_Sections (Screens 5-12)").transform;
            root.SetParent(parent, false);

            var coinMesh = MeshAsset("PawCoin", () => ProceduralMeshes.Coin(0.3f, 0.08f));
            var gemMesh = MeshAsset("Gem", () => ProceduralMeshes.Gem(0.2f, 0.42f));
            var sockMesh = MeshAsset("PLACEHOLDER_SockBody", () => ProceduralMeshes.SockBody(Color.white, new Color(0.62f, 0.45f, 0.95f), new Color(0.35f, 0.3f, 0.85f)));
            var brushA = MeshAsset("PLACEHOLDER_BrushWheel_BluePink", () => ProceduralMeshes.BrushWheel(1f, 0.38f, new Color(0.15f, 0.3f, 0.95f), new Color(1f, 0.42f, 0.75f), 3));
            var brushB = MeshAsset("PLACEHOLDER_BrushWheel_Pink", () => ProceduralMeshes.BrushWheel(1f, 0.38f, new Color(0.25f, 0.3f, 0.9f), new Color(1f, 0.55f, 0.82f), 9));
            var quad = ScreenComposition.QuadMesh();
            var sphere = Level1SceneBuilder.BuiltinSphere();

            // Waterfalls from the opening castle's side towers (Screens 1, 3).
            if (castle != null) EnvironmentDressing.CastleWaterfalls(castle.transform, mats, root, -0.6f);

            BuildOutdoor(l, p, mats, Group(root, "Screens5-6_OutdoorSlides"), coinMesh, gemMesh, brushA, brushB, quad);
            BuildDrumBContents(l, p, mats, Group(root, "Screens7-9_SecondDrum"), coinMesh, gemMesh, sockMesh, brushA, brushB, quad, sphere);
            BuildKingdom(l, p, mats, Group(root, "Screens10-11_BubbleKingdom"), castle, coinMesh, gemMesh, sockMesh, quad, sphere);
            BuildFinish(l, p, mats, Group(root, "Screen12_Finish"), coinMesh);
            Level1SceneBuilder.Log.AppendLine($"- Screens 5-12 built: side paths z {p.sideLStart:F0}-{p.sideLEnd:F0} (left) and {p.sideRStart:F0}-{p.sideREnd:F0} (right), " +
                $"second drum z {p.drumBStart:F0}-{p.drumBEnd:F0}, kingdom gate z {p.gateZ:F0}, finish z {p.finishZ:F0}.");
        }

        // ---------------- Screens 5-6

        static void BuildOutdoor(LevelLayout l, Plan p, MaterialSet mats, Transform root, Mesh coin, Mesh gem, Mesh brushA, Mesh brushB, Mesh quad)
        {
            float pathX = WaveField.Slide.x + 0.12f;
            Rails(root, mats, pathX, p.drumAEnd + 0.5f, p.drumBStart - 0.5f);

            var water = SidePathWater(mats);
            var left = SidePathPiece(root, mats, water, "SidePath_L", -3.3f, p.sideLStart, p.sideLEnd);
            var right = SidePathPiece(root, mats, water, "SidePath_R", 3.3f, p.sideRStart, p.sideREnd);

            var coins = Group(root, "Coins");
            for (int i = 0; i < 4; i++) Coin(coins, coin, mats, new Vector3(l.LaneX(1), 0.65f, p.drumAEnd + 2f + i * 1.5f));
            // Coins along the left side path (Screen 5) and a gem near its end.
            for (int i = 0; i < 10; i++)
                Coin(coins, coin, mats, new Vector3(left.centreX, SidePathHeight + 0.6f, left.startZ + 1.5f + i * 1.35f));
            ScreenComposition.Collect(coins, "Gem", gem, mats.gem, new Vector3(left.centreX, SidePathHeight + 1.2f, left.endZ - 1.2f), CollectibleKind.Gem, 0.3f);
            for (int i = 0; i < 6; i++)
                Coin(coins, coin, mats, new Vector3(right.centreX, SidePathHeight + 0.6f, right.startZ + 1.2f + i * 1.4f));
            for (int i = 0; i < 4; i++) Coin(coins, coin, mats, new Vector3(l.LaneX(2), 0.65f + Mathf.Sin(i / 3f * Mathf.PI) * 0.6f, p.sideLEnd + 2.5f + i * 1.4f));

            // Scenery: the tub of gold coins (Screen 5, left), giant brushes over the second drum's mouth
            // (Screen 6, top), foam clouds and bubbles.
            var deco = Group(root, "Scenery");
            CoinTub(deco, mats, coin, new Vector3(-5.4f, -0.2f, p.sideLStart + 3f));
            foreach (float side in new[] { -1f, 1f })
            {
                var big = new GameObject("PLACEHOLDER_GiantBrush (Screen 6)");
                big.transform.SetParent(deco, false);
                big.transform.SetPositionAndRotation(new Vector3(side * 3.6f, 4.4f, p.drumBStart - 1.2f), Quaternion.Euler(0f, side * 18f, 0f));
                big.transform.localScale = Vector3.one * 1.6f;
                big.AddComponent<MeshFilter>().sharedMesh = side < 0 ? brushB : brushA;
                var r = big.AddComponent<MeshRenderer>(); r.sharedMaterial = mats.brushFur; r.shadowCastingMode = ShadowCastingMode.Off;
                var sp = big.AddComponent<Spinner>(); sp.localAxis = Vector3.forward; sp.speed = side * 60f;
            }
            for (int i = 0; i < 6; i++)
            {
                float side = i % 2 == 0 ? -1f : 1f;
                EnvironmentDressing.FoamCloud(deco, mats, new Vector3(side * (6.5f + (i % 3)), -0.5f, p.drumAEnd + 4f + i * 6f), 2.2f + (i % 3) * 0.6f,
                    i % 3 == 0 ? new Color(1f, 0.8f, 0.93f) : Color.white, 40 + i);
            }
            for (int i = 0; i < 10; i++)
                ScreenComposition.HeroBubble(deco, quad, mats.bubble, new Vector3(((i * 37) % 9 - 4f) * 1.1f, 1.4f + (i % 4) * 0.6f, p.drumAEnd + 3f + i * 3.7f), 0.35f + (i % 3) * 0.2f);
        }

        static Material SidePathWater(MaterialSet mats)
        {
            const string path = Level1SceneBuilder.GeneratedDir + "/Materials/Water_SidePath.mat";
            var m = AssetDatabase.LoadAssetAtPath<Material>(path);
            if (m == null) { m = new Material(mats.water) { name = "Water_SidePath" }; AssetDatabase.CreateAsset(m, path); }
            m.shader = mats.water.shader;
            m.CopyPropertiesFromMaterial(mats.water);
            m.SetFloat("_LevelShape", 0f);
            m.SetFloat("_HeightOffset", SidePathHeight);
            EditorUtility.SetDirty(m);
            return m;
        }

        /// <summary>An elevated water channel beside the main path: trough, gold rims, supports, water and an end waterfall.</summary>
        static SidePath SidePathPiece(Transform parent, MaterialSet mats, Material water, string name, float x, float z0, float z1)
        {
            var go = new GameObject(name + " (PLACEHOLDER trough - replace with Meshy water-slide pieces)");
            go.transform.SetParent(parent, false);
            var sp = go.AddComponent<SidePath>();
            sp.startZ = z0; sp.endZ = z1; sp.centreX = x; sp.halfWidth = 0.75f; sp.height = SidePathHeight;

            float len = z1 - z0, w = sp.halfWidth * 2f + 0.3f;
            var cube = BuiltinCube();
            ScreenComposition.Child(go.transform, "Trough", cube, mats.chest, new Vector3(x, SidePathHeight - 0.32f, (z0 + z1) * 0.5f), new Vector3(w, 0.5f, len));
            var cyl = BuiltinCylinder();
            foreach (float side in new[] { -1f, 1f })
            {
                var rim = ScreenComposition.Child(go.transform, "GoldRim", cyl, mats.rail,
                    new Vector3(x + side * (w * 0.5f), SidePathHeight + 0.08f, (z0 + z1) * 0.5f), new Vector3(0.16f, len * 0.5f, 0.16f));
                rim.rotation = Quaternion.Euler(90f, 0f, 0f);
            }
            for (float z = z0 + 1f; z < z1; z += 4f)
                ScreenComposition.Child(go.transform, "Support", cyl, mats.chest, new Vector3(x, (SidePathHeight - 0.57f - 0.9f) * 0.5f, z),
                    new Vector3(0.35f, (SidePathHeight - 0.57f + 0.9f) * 0.5f, 0.35f));

            var cols = new float[13];
            for (int i = 0; i < cols.Length; i++) cols[i] = x - sp.halfWidth + 2f * sp.halfWidth * i / (cols.Length - 1);
            var mesh = ProceduralMeshes.WaterSheet(z0, z1, 0.3f, cols.Length - 1, _ => cols);
            mesh.bounds = Grow(mesh.bounds);
            mesh = Level1SceneBuilder.SaveMesh(mesh, "Water_" + name);
            var wgo = new GameObject("Water") { layer = 4 };
            wgo.transform.SetParent(go.transform, false);
            wgo.AddComponent<MeshFilter>().sharedMesh = mesh;
            var r = wgo.AddComponent<MeshRenderer>(); r.sharedMaterial = water; r.shadowCastingMode = ShadowCastingMode.Off;

            // The path pours off its end into the moat (Screen 6 "Drop Down to Lower Paths!").
            EnvironmentDressing.Waterfall(go.transform, mats, new Vector3(x, SidePathHeight, z1), sp.halfWidth * 2f, SidePathHeight + 0.6f, 0.8f, 180f);
            return sp;
        }

        static void CoinTub(Transform parent, MaterialSet mats, Mesh coin, Vector3 pos)
        {
            var go = new GameObject("PLACEHOLDER_CoinTub (Screen 5)");
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            ScreenComposition.Child(go.transform, "Tub", BuiltinCylinder(), mats.starBall, Vector3.zero, new Vector3(1.8f, 0.45f, 1.8f));
            ScreenComposition.Child(go.transform, "Rim", BuiltinCylinder(), mats.rail, new Vector3(0f, 0.45f, 0f), new Vector3(1.9f, 0.05f, 1.9f));
            var rnd = new System.Random(5);
            for (int i = 0; i < 22; i++)
            {
                float a = (float)rnd.NextDouble() * Mathf.PI * 2f, rr = (float)rnd.NextDouble() * 0.75f;
                var c = ScreenComposition.Child(go.transform, "Coin", coin, mats.coin, new Vector3(Mathf.Cos(a) * rr, 0.5f + (float)rnd.NextDouble() * 0.25f, Mathf.Sin(a) * rr), Vector3.one);
                c.localRotation = Quaternion.Euler((float)rnd.NextDouble() * 70f, (float)rnd.NextDouble() * 360f, 0f);
            }
        }

        // ---------------- Screens 7-9

        static void BuildDrumBContents(LevelLayout l, Plan p, MaterialSet mats, Transform root, Mesh coin, Mesh gem, Mesh sockMesh, Mesh brushA, Mesh brushB, Mesh quad, Mesh sphere)
        {
            // Screen 7 "Watch out! Spinning brushes!": big brush wheels facing the player from the walls,
            // reaching into the outer lanes. Touching one costs a heart.
            var brushes = Group(root, "Screen7_SpinningBrushes");
            BrushHazard(brushes, mats, brushA, -1, p.brushesZ + 4f, 150f);
            BrushHazard(brushes, mats, brushB, 1, p.brushesZ + 4f, -150f);
            BrushHazard(brushes, mats, brushB, -1, p.brushesZ + 8f, 150f);
            BrushHazard(brushes, mats, brushA, 1, p.brushesZ + 11.5f, -150f);
            for (int i = 0; i < 5; i++) Coin(brushes, coin, mats, new Vector3(l.LaneX(1), 0.65f, p.brushesZ + 3f + i * 1.8f));

            // Screen 8 "Collect Coins, Gems & Rescue Socks!": the camera swings round to the mascot's face
            // (settled after ~1 s) and the mascot sweeps up the coins, the special gem and sock 4 that sit
            // between it and the camera.
            var collect = Group(root, "Screen8_Collect");
            Coin(collect, coin, mats, new Vector3(l.LaneX(0), 1.05f, p.collectZ + 7.0f));
            Coin(collect, coin, mats, new Vector3(l.LaneX(2) - 0.15f, 1.25f, p.collectZ + 7.3f));
            Coin(collect, coin, mats, new Vector3(l.LaneX(2), 0.6f, p.collectZ + 8.1f));
            Coin(collect, coin, mats, new Vector3(l.LaneX(1), 0.65f, p.collectZ + 9.7f));
            var special = ScreenComposition.Collect(collect, "SpecialGem (Level 1 objective)", gem, mats.gem, new Vector3(l.LaneX(1) - 0.2f, 1.25f, p.collectZ + 7.5f), CollectibleKind.Gem, 0.35f);
            special.transform.localScale = Vector3.one * 1.5f;
            special.GetComponent<Collectible>().special = true;
            ScreenComposition.Sock(collect, sockMesh, mats, sphere, new Vector3(l.LaneX(2), 0.75f, p.collectZ + 7.7f), 4);

            // Screen 9 "Avoid Enemies!": grime-ball enemies drifting across the lanes just after the drum.
            var enemies = Group(root, "Screen9_Enemies (after the second drum)");
            Enemy(enemies, mats, new Vector3(l.LaneX(2) - 0.3f, 0.95f, p.enemiesZ + 4f), 0.0f);
            Enemy(enemies, mats, new Vector3(l.LaneX(0) + 0.3f, 0.95f, p.enemiesZ + 7.5f), 2.1f);
            Enemy(enemies, mats, new Vector3(0f, 0.95f, p.enemiesZ + 11f), 4.0f);
            Coin(enemies, coin, mats, new Vector3(l.LaneX(0), 0.75f, p.enemiesZ + 2.6f));
            Coin(enemies, coin, mats, new Vector3(l.LaneX(2), 0.75f, p.enemiesZ + 3.2f));
            Coin(enemies, coin, mats, new Vector3(l.LaneX(1), 0.65f, p.enemiesZ + 6f));
            Coin(enemies, coin, mats, new Vector3(l.LaneX(2), 0.65f, p.enemiesZ + 9.5f));

            for (int i = 0; i < 8; i++)
                ScreenComposition.HeroBubble(root, quad, mats.bubble, new Vector3(((i * 53) % 7 - 3f) * 0.45f, 1.6f + (i % 3) * 0.4f, p.drumBStart + 2f + i * 4f), 0.25f + (i % 3) * 0.12f);
        }

        static void BrushHazard(Transform parent, MaterialSet mats, Mesh mesh, int side, float z, float spin)
        {
            var go = new GameObject((PropFactory.Has(PropSlot.SpinningBrush) ? "SpinningBrush" : "PLACEHOLDER_SpinningBrush") + $"_Hazard_{(side < 0 ? "L" : "R")}");
            go.transform.SetParent(parent, false);
            go.transform.position = new Vector3(side * 1.75f, 0.85f, z);
            var col = go.AddComponent<SphereCollider>();
            col.isTrigger = true;
            col.radius = 0.65f;
            col.center = new Vector3(-side * 0.15f, -0.15f, 0f); // the bristles reach into the outer lane
            var hz = go.AddComponent<Hazard>();
            hz.kind = HazardKind.SpinningBrush;

            var wheel = new GameObject("Wheel");
            wheel.transform.SetParent(go.transform, false);
            wheel.transform.localScale = Vector3.one * 0.95f;
            if (PropFactory.Has(PropSlot.SpinningBrush)) PropFactory.Create(PropSlot.SpinningBrush, wheel.transform);
            else
            {
                wheel.AddComponent<MeshFilter>().sharedMesh = mesh;
                var r = wheel.AddComponent<MeshRenderer>(); r.sharedMaterial = mats.brushFur; r.shadowCastingMode = ShadowCastingMode.Off;
            }
            var s = wheel.AddComponent<Spinner>();
            s.localAxis = Vector3.forward;
            s.speed = spin;
        }

        static void Enemy(Transform parent, MaterialSet mats, Vector3 pos, float phase)
        {
            var go = new GameObject("PLACEHOLDER_GrimeBall_Enemy (replace with Meshy enemy)");
            go.transform.SetParent(parent, false);
            go.transform.SetPositionAndRotation(pos, Quaternion.Euler(0f, 180f, 0f)); // face (+Z) toward the player
            var col = go.AddComponent<SphereCollider>();
            col.isTrigger = true;
            col.radius = 0.45f;
            var hz = go.AddComponent<Hazard>();
            hz.kind = HazardKind.Enemy;
            hz.sweepWidth = 1.6f; hz.sweepSpeed = 0.32f; hz.bobAmplitude = 0.12f; hz.phase = phase;

            var fur = MeshAsset("PLACEHOLDER_EnemyFur", () => ProceduralMeshes.FluffBall(0.5f, 3, 0.14f, 21, new Color(0.12f, 0.1f, 0.3f), new Color(0.35f, 0.3f, 0.65f), "PLACEHOLDER_EnemyFur"));
            ScreenComposition.Child(go.transform, "Fur", fur, mats.enemyFur, Vector3.zero, Vector3.one * 0.9f);
            var sphere = Level1SceneBuilder.BuiltinSphere();
            var cube = BuiltinCube();
            foreach (float s in new[] { -1f, 1f })
            {
                ScreenComposition.Child(go.transform, "Eye", sphere, mats.cheek, new Vector3(0.15f * s, 0.05f, 0.37f), new Vector3(0.19f, 0.15f, 0.08f));
                ScreenComposition.Child(go.transform, "Pupil", sphere, mats.eye, new Vector3(0.13f * s, 0.03f, 0.41f), new Vector3(0.08f, 0.09f, 0.04f));
                var brow = ScreenComposition.Child(go.transform, "AngryBrow", cube, mats.eye, new Vector3(0.15f * s, 0.17f, 0.4f), new Vector3(0.22f, 0.045f, 0.04f));
                brow.localRotation = Quaternion.Euler(0f, 0f, s * 24f); // inner ends low: angry
            }
        }

        // ---------------- Screens 10-11

        static void BuildKingdom(LevelLayout l, Plan p, MaterialSet mats, Transform root, GameObject castle, Mesh coin, Mesh gem, Mesh sockMesh, Mesh quad, Mesh sphere)
        {
            float pathX = WaveField.Slide.x + 0.12f;
            Rails(root, mats, pathX, p.drumBEnd + 0.5f, p.stopZ + 6f);

            // The kingdom gate (Screen 11's archway with towers): the Meshy castle again, portal on the path.
            if (castle != null)
            {
                var gate = Object.Instantiate(castle, root);
                gate.name = "KingdomGate (Meshy BubbleWashCastle.glb reused - replace with the kingdom gate model)";
                gate.transform.SetPositionAndRotation(castle.transform.position + Vector3.forward * (p.gateZ - l.castleFrontZ), castle.transform.rotation);
                gate.transform.localScale = castle.transform.lossyScale;
                SetVisibleRange(gate, _showKingdomFromZ, float.PositiveInfinity);  // mobile budget: skip until near the kingdom
                EnvironmentDressing.CastleWaterfalls(gate.transform, mats, root, -0.6f);
            }

            // Floating islands with waterfalls and little castles (Screen 10).
            var islands = Group(root, "PLACEHOLDER_FloatingIslands (replace with Meshy kingdom islands)");
            float k0 = p.kingdomStart;
            Island(islands, mats, castle, new Vector3(-5.6f, 1.6f, k0 + 9f), 2.6f, 61, waterfall: true, castleScale: 0f);
            Island(islands, mats, castle, new Vector3(-8.8f, 3.6f, k0 + 17f), 4.4f, 62, waterfall: true, castleScale: 0f);
            Island(islands, mats, castle, new Vector3(9.2f, 5.0f, k0 + 23f), 5.4f, 63, waterfall: true, castleScale: 0.4f);
            Island(islands, mats, castle, new Vector3(12f, 2.4f, k0 + 11f), 3f, 64, waterfall: true, castleScale: 0f);
            Island(islands, mats, castle, new Vector3(-12f, 8f, k0 + 40f), 6f, 65, waterfall: true, castleScale: 0f);
            Island(islands, mats, castle, new Vector3(7f, 2.2f, k0 + 33f), 3.2f, 66, waterfall: false, castleScale: 0f);
            Island(islands, mats, castle, new Vector3(3f, 11f, k0 + 58f), 7f, 67, waterfall: true, castleScale: 0.55f);

            var coins = Group(root, "Coins");
            for (int i = 0; i < 5; i++) Coin(coins, coin, mats, new Vector3(l.LaneX(0), 0.65f + Mathf.Sin(i / 4f * Mathf.PI) * 0.7f, k0 + 4f + i * 1.4f));
            for (int i = 0; i < 5; i++) Coin(coins, coin, mats, new Vector3(l.LaneX(2), 0.65f, k0 + 13f + i * 1.4f));

            // Screen 11 "Rescue 5 lost socks 4/5": sock friends cheering on both banks, a gem overhead,
            // coins around the mascot, then the fifth sock just after.
            var cheer = Group(root, "Screen11_RescueProgress");
            float z11 = p.screen11Z;
            // Placed for the Screen 11 camera (ahead of the mascot looking back, so world +X is screen-left):
            // one sock each side just behind the mascot, one flying above it by the gate, two further back.
            Vector3 toward = new Vector3(0f, 1f, z11 + 4.4f);
            foreach (var (x, dz, y, s, pad) in new[] { (1.7f, -3.0f, 0.35f, 1.0f, true), (-1.9f, -3.5f, 0.35f, 1.0f, true), (0.2f, -5.5f, 1.7f, 1.2f, false),
                                                       (2.6f, -8f, 0.3f, 0.9f, true), (-2.7f, -7.5f, 0.3f, 0.9f, true) })
            {
                var at = new Vector3(x, y, z11 + dz);
                if (pad) EnvironmentDressing.FoamCloud(cheer, mats, at + Vector3.down * 0.55f, 1.1f, Color.white, 80 + (int)(-dz * 2));
                EnvironmentDressing.SockFriend(cheer, mats, at, s * 1.2f, toward);
            }
            ScreenComposition.Collect(cheer, "Gem", gem, mats.gem, new Vector3(0.25f, 2.3f, z11 - 2f), CollectibleKind.Gem, 0.3f);
            Coin(cheer, coin, mats, new Vector3(l.LaneX(0) - 0.2f, 1.0f, z11 + 0.8f));
            Coin(cheer, coin, mats, new Vector3(l.LaneX(2) + 0.2f, 1.1f, z11 + 1.4f));
            ScreenComposition.Sock(cheer, sockMesh, mats, sphere, new Vector3(l.LaneX(1), 0.6f, z11 + 12f), 5);

            for (int i = 0; i < 12; i++)
                ScreenComposition.HeroBubble(root, quad, mats.bubble, new Vector3(((i * 41) % 11 - 5f) * 1.3f, 1.5f + (i % 4) * 0.9f, k0 + 2f + i * 4.6f), 0.4f + (i % 3) * 0.25f);
        }

        static void Island(Transform parent, MaterialSet mats, GameObject castle, Vector3 top, float size, int seed, bool waterfall, float castleScale)
        {
            var go = new GameObject("PLACEHOLDER_FloatingIsland");
            go.transform.SetParent(parent, false);
            go.transform.position = top;
            var rock = MeshAsset($"PLACEHOLDER_IslandRock_{seed}", () => ProceduralMeshes.FluffBall(1f, 3, 0.22f, seed, new Color(0.95f, 0.75f, 0.9f), new Color(1f, 0.9f, 0.95f), $"PLACEHOLDER_IslandRock_{seed}"));
            var sphere = Level1SceneBuilder.BuiltinSphere();
            ScreenComposition.Child(go.transform, "Rock", rock, mats.island, new Vector3(0f, -size * 0.42f, 0f), new Vector3(size * 0.5f, size * 0.55f, size * 0.5f));
            ScreenComposition.Child(go.transform, "Grass", sphere, mats.grass, new Vector3(0f, -size * 0.04f, 0f), new Vector3(size * 1.04f, size * 0.16f, size * 1.04f));
            var cyl = BuiltinCylinder();
            for (int i = 0; i < 3; i++)
            {
                float a = seed * 1.7f + i * 2.1f;
                var at = new Vector3(Mathf.Cos(a) * size * 0.32f, size * 0.04f, Mathf.Sin(a) * size * 0.32f);
                ScreenComposition.Child(go.transform, "TreeTrunk", cyl, mats.chest, at + Vector3.up * size * 0.06f, new Vector3(size * 0.04f, size * 0.07f, size * 0.04f));
                ScreenComposition.Child(go.transform, "TreeCrown", sphere, mats.grass, at + Vector3.up * size * 0.18f, Vector3.one * size * 0.16f);
            }
            if (castleScale > 0f && castle != null)
            {
                var mini = Object.Instantiate(castle, go.transform);
                mini.name = "KingdomCastle (Meshy castle reused - replace with kingdom castle model)";
                mini.transform.rotation = Quaternion.Euler(0f, 180f, 0f);
                mini.transform.localScale = castle.transform.lossyScale * castleScale;
                mini.transform.position = top;
                var b = RendererBounds(mini);
                mini.transform.position += new Vector3(top.x - b.center.x, top.y - b.min.y - size * 0.05f, top.z - b.center.z);
                // ~150k triangles each: two only, drawn from late in the second drum on (mobile budget).
                SetVisibleRange(mini, _showKingdomFromZ, float.PositiveInfinity);
            }
            if (waterfall)
            {
                // Pour from the island's front edge toward the approaching camera, as on Screen 10.
                var edge = top + new Vector3(-Mathf.Sign(top.x) * size * 0.15f, -size * 0.05f, -size * 0.46f);
                EnvironmentDressing.Waterfall(go.transform, mats, edge, size * 0.28f, Mathf.Max(1f, edge.y + 0.6f), size * 0.12f);
            }
            var h = go.AddComponent<Hover>(); h.amplitude = 0.12f; h.frequency = 0.12f; h.phase = seed;
        }

        // ---------------- Screen 12

        static void BuildFinish(LevelLayout l, Plan p, MaterialSet mats, Transform root, Mesh coin)
        {
            // The Screen 12 camera faces the mascot from +Z, so the screen's left is world +X.
            float z = p.stopZ;
            Vector3 cam = new Vector3(0f, 1.1f, z + 4f);
            // Measured on the approved crop: sock friends at 16 % and 87 % across, just behind the mascot;
            // a small sock at 25 % low in front; the open chest at ~64 % low in front.
            var friends = Group(root, "SockFriends");
            EnvironmentDressing.SockFriend(friends, mats, new Vector3(0.85f, 0.45f, z - 0.7f), 1.2f, cam);
            EnvironmentDressing.SockFriend(friends, mats, new Vector3(-0.95f, 0.5f, z - 0.6f), 1.15f, cam);
            EnvironmentDressing.SockFriend(friends, mats, new Vector3(0.45f, -0.05f, z + 0.9f), 0.7f, cam);
            Chest(root, mats, coin, new Vector3(-0.55f, -0.15f, z + 0.9f), 0.6f, cam);

            var pile = Group(root, "CoinPiles");
            var rnd = new System.Random(12);
            for (int i = 0; i < 26; i++)
            {
                float x = (float)rnd.NextDouble() * 3.2f - 1.6f;
                float dz = (float)rnd.NextDouble() * 1.4f;
                if (Mathf.Abs(x) < 0.45f) x += Mathf.Sign(x + 0.01f) * 0.5f; // keep the mascot clear
                var c = ScreenComposition.Child(pile, "Coin", coin, mats.coin, new Vector3(x, -0.12f + (float)rnd.NextDouble() * 0.2f, z + 0.4f + dz), Vector3.one * 0.8f);
                c.rotation = Quaternion.Euler((float)rnd.NextDouble() * 80f - 40f, (float)rnd.NextDouble() * 360f, (float)rnd.NextDouble() * 50f);
            }
            var clouds = Group(root, "FoamClouds");
            EnvironmentDressing.FoamCloud(clouds, mats, new Vector3(1.9f, -0.35f, z + 1.6f), 1.6f, new Color(1f, 0.72f, 0.9f), 91);
            EnvironmentDressing.FoamCloud(clouds, mats, new Vector3(-2.0f, -0.35f, z + 1.7f), 1.7f, new Color(1f, 0.72f, 0.9f), 92);
            EnvironmentDressing.FoamCloud(clouds, mats, new Vector3(0.2f, -0.6f, z + 2.3f), 1.8f, Color.white, 93);
            EnvironmentDressing.FoamCloud(clouds, mats, new Vector3(2.6f, 0.3f, z - 1.5f), 2.2f, Color.white, 94);
            EnvironmentDressing.FoamCloud(clouds, mats, new Vector3(-2.7f, 0.4f, z - 1.6f), 2.4f, new Color(1f, 0.8f, 0.93f), 95);

            var glow = new GameObject("TreasureGlow");
            glow.transform.SetParent(root, false);
            glow.transform.position = new Vector3(-0.55f, 0.5f, z + 1.2f);
            var light = glow.AddComponent<Light>();
            light.type = LightType.Point; light.color = new Color(1f, 0.82f, 0.4f); light.intensity = 2.2f; light.range = 3.5f; light.shadows = LightShadows.None;
        }

        static void Chest(Transform parent, MaterialSet mats, Mesh coin, Vector3 pos, float size, Vector3 faceToward)
        {
            var go = new GameObject("PLACEHOLDER_TreasureChest (replace with Meshy chest)");
            go.transform.SetParent(parent, false);
            go.transform.position = pos;
            var f = faceToward - pos; f.y = 0f;
            go.transform.rotation = Quaternion.LookRotation(f.normalized);
            var cube = BuiltinCube();
            ScreenComposition.Child(go.transform, "Body", cube, mats.chest, new Vector3(0f, size * 0.3f, 0f), new Vector3(size, size * 0.6f, size * 0.65f));
            ScreenComposition.Child(go.transform, "Band", cube, mats.rail, new Vector3(0f, size * 0.42f, 0f), new Vector3(size * 1.03f, size * 0.08f, size * 0.68f));
            var hinge = new GameObject("LidHinge").transform;
            hinge.SetParent(go.transform, false);
            hinge.localPosition = new Vector3(0f, size * 0.6f, -size * 0.32f);
            hinge.localRotation = Quaternion.Euler(-65f, 0f, 0f); // open
            ScreenComposition.Child(hinge, "Lid", cube, mats.chest, new Vector3(0f, size * 0.06f, size * 0.32f), new Vector3(size * 1.02f, size * 0.14f, size * 0.66f));
            ScreenComposition.Child(hinge, "LidBand", cube, mats.rail, new Vector3(0f, size * 0.07f, size * 0.32f), new Vector3(size * 1.05f, size * 0.15f, size * 0.1f));
            for (int i = 0; i < 9; i++)
            {
                var c = ScreenComposition.Child(go.transform, "Coin", coin, mats.coin,
                    new Vector3((i % 3 - 1) * size * 0.28f, size * (0.62f + (i / 3) * 0.06f), ((i / 3) - 1) * size * 0.16f), Vector3.one * size * 0.9f);
                c.localRotation = Quaternion.Euler(70f + i * 7f, i * 40f, 0f);
            }
        }

        // ------------------------------------------------------------------ sections + director

        /// <summary>The approved screens in order along Level 1 (banner text, placement and camera per section).</summary>
        public static List<LevelSection> Sections(LevelLayout l)
        {
            var p = PlanFor(l);
            float outdoorMid = p.sideLStart + 12f;
            return new List<LevelSection>
            {
                new LevelSection { screen = 3, startZ = l.startZ - 60f, endZ = l.castleFrontZ, mission = MissionPlace.TopLeft },
                new LevelSection { screen = 4, startZ = l.castleFrontZ, endZ = p.drumAEnd, mission = MissionPlace.TopLeft },
                // Banner values: board px measured on each approved crop (x from centre, y from top/bottom),
                // crops 7-12 scaled by 537/467 to the shared 537 px reference.
                new LevelSection { screen = 5, startZ = p.drumAEnd, endZ = outdoorMid, line1 = "Jump to", line2 = "Side Paths!",
                    bannerAt = new Vector2(17f, 107f), bannerSize = new Vector2(115f, 63f), bannerTilt = 8f,
                    hintArrow = true, arrowAt = new Vector2(35f, 285f), arrowSize = new Vector2(35f, 40f), arrowTilt = 8f,
                    showPowerUps = false, camera = CameraMode.Outdoor,
                    captureZ = p.screen5Z, captureX = -2.1f, captureLift = 0.55f, captureJump = 0.45f },
                new LevelSection { screen = 6, startZ = outdoorMid, endZ = p.drumBStart, line1 = "Drop Down", line2 = "to Lower Paths!",
                    bannerPlace = BannerPlace.BottomRight, bannerAt = new Vector2(5f, 72f), bannerSize = new Vector2(145f, 65f), bannerTilt = 6f,
                    hintArrow = true, arrowAt = new Vector2(24f, 245f), arrowSize = new Vector2(48f, 50f),
                    showPowerUps = false, camera = CameraMode.Outdoor,
                    captureZ = p.screen6Z, captureX = -3.3f, captureLift = SidePathHeight, captureOnSidePath = true },
                new LevelSection { screen = 7, startZ = p.drumBStart, endZ = p.collectZ, line1 = "Watch out!", line2 = "Spinning brushes!", warning = true,
                    bannerAt = new Vector2(3f, 46f), bannerSize = new Vector2(204f, 63f), bannerTilt = -3f, pauseInTopRow = true,
                    captureZ = p.screen7Z },
                new LevelSection { screen = 8, startZ = p.collectZ, endZ = p.enemiesZ, line1 = "Collect Coins,", line2 = "Gems & Rescue Socks!",
                    bannerAt = new Vector2(0f, 49f), bannerSize = new Vector2(218f, 66f), pauseInTopRow = true,
                    camera = CameraMode.Front, cameraSeconds = 2.0f, cameraAfter = CameraMode.Default,
                    captureZ = p.screen8Z },
                new LevelSection { screen = 9, startZ = p.enemiesZ, endZ = p.kingdomStart, line1 = "Avoid Enemies!", warning = true,
                    bannerAt = new Vector2(-2f, 57f), bannerSize = new Vector2(184f, 57f), bannerTilt = -6f, pauseInTopRow = true,
                    captureZ = p.screen9Z },
                new LevelSection { screen = 10, startZ = p.kingdomStart, endZ = p.screen11Z - 3f, line1 = "Enter the", line2 = "Bubble Kingdom!",
                    bannerAt = new Vector2(0f, 48f), bannerSize = new Vector2(170f, 63f), pauseInTopRow = true, camera = CameraMode.Kingdom,
                    captureZ = p.screen10Z },
                new LevelSection { screen = 11, startZ = p.screen11Z - 3f, endZ = p.stopZ + 100f, mission = MissionPlace.TopCentre, pauseInTopRow = true,
                    camera = CameraMode.FrontWide, cameraSeconds = 3f, cameraAfter = CameraMode.Kingdom,
                    captureZ = p.screen11Z },
            };
        }

        public static SectionDirector AddDirector(GameObject host, LevelLayout l, BubbleRunner runner, RunnerCameraRig rig, GameHud hud)
        {
            var d = host.AddComponent<SectionDirector>();
            d.runner = runner; d.rig = rig; d.hud = hud;
            d.sections = Sections(l);
            return d;
        }

        // ------------------------------------------------------------------ helpers

        static float _showKingdomFromZ;

        /// <summary>Set (or replace a copied) camera z-range in which the object's renderers are drawn.</summary>
        static void SetVisibleRange(GameObject go, float minZ, float maxZ)
        {
            var v = go.GetComponent<ZRangeVisibility>();
            if (v == null) v = go.AddComponent<ZRangeVisibility>();
            v.minCameraZ = minZ;
            v.maxCameraZ = maxZ;
        }

        static Transform Group(Transform parent, string name)
        {
            var t = new GameObject(name).transform;
            t.SetParent(parent, false);
            return t;
        }

        static void Coin(Transform parent, Mesh coin, MaterialSet mats, Vector3 pos) =>
            ScreenComposition.Collect(parent, "Coin", coin, mats.coin, pos, CollectibleKind.Coin, 0.3f);

        static void Rails(Transform parent, MaterialSet mats, float x, float zA, float zB)
        {
            var cyl = BuiltinCylinder();
            var root = Group(parent, "PLACEHOLDER_WaterSlideRails (replace with Meshy water-slide pieces)");
            foreach (float side in new[] { -1f, 1f })
            {
                var rail = ScreenComposition.Child(root, side < 0 ? "Rail_L" : "Rail_R", cyl, mats.rail, new Vector3(x * side, 0.12f, (zA + zB) * 0.5f), new Vector3(0.14f, (zB - zA) * 0.5f, 0.14f));
                rail.rotation = Quaternion.Euler(90f, 0f, 0f);
                for (float z = zA; z <= zB; z += 3f)
                    ScreenComposition.Child(root, "Post", cyl, mats.rail, new Vector3(x * side, -0.2f, z), new Vector3(0.08f, 0.32f, 0.08f));
            }
        }

        static Mesh MeshAsset(string name, Func<Mesh> create)
        {
            var m = AssetDatabase.LoadAssetAtPath<Mesh>($"{Level1SceneBuilder.GeneratedDir}/Meshes/{name}.asset");
            return m != null ? m : Level1SceneBuilder.SaveMesh(create(), name);
        }

        static Bounds Grow(Bounds b) { b.Expand(new Vector3(0.5f, 4f, 0.5f)); return b; }

        static Mesh _cube, _cylinder;

        static Mesh BuiltinCube()
        {
            if (_cube != null) return _cube;
            var tmp = GameObject.CreatePrimitive(PrimitiveType.Cube);
            _cube = tmp.GetComponent<MeshFilter>().sharedMesh;
            Object.DestroyImmediate(tmp);
            return _cube;
        }

        static Mesh BuiltinCylinder()
        {
            if (_cylinder != null) return _cylinder;
            var tmp = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
            _cylinder = tmp.GetComponent<MeshFilter>().sharedMesh;
            Object.DestroyImmediate(tmp);
            return _cylinder;
        }

        static Bounds RendererBounds(GameObject go)
        {
            var rs = go.GetComponentsInChildren<Renderer>();
            if (rs.Length == 0) return new Bounds(go.transform.position, Vector3.zero);
            var b = rs[0].bounds;
            foreach (var r in rs) b.Encapsulate(r.bounds);
            return b;
        }
    }
}
