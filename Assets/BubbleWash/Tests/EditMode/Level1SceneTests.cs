using NUnit.Framework;
using UnityEditor;
using UnityEngine;
using BubbleWash.EditorTools;

namespace BubbleWash.Tests
{
    /// <summary>
    /// Builds the real Level 1 scene from the Meshy GLBs and runs the geometry validation:
    /// joint gaps, portal/drum alignment, mascot and camera clearance, and the tower waterfalls.
    /// </summary>
    public class Level1SceneTests
    {
        [Test]
        public void Level1_BuildsAndPassesValidation()
        {
            if (AssetDatabase.LoadAssetAtPath<GameObject>(Level1SceneBuilder.CastlePath) == null)
                Assert.Ignore("Castle GLB not imported (glTFast missing?)");
            var env = Level1SceneBuilder.Build();
            Assert.IsNotNull(env);
            Assert.IsFalse(env.layout.usingPlaceholderTunnel, "The Meshy tunnel GLB was not used");
            Assert.Greater(env.layout.clearRadius, 1.6f);
            var r = EnvironmentValidator.Validate();
            Assert.IsTrue(r.Passed, string.Join("\n", r.failures));

            // Screen 3's tower waterfalls pour from the Meshy towers at the approved screen positions.
            Assert.AreEqual(TowerWaterfalls.Approved.Length, TowerWaterfalls.LastBuild.Count);
            foreach (var p in TowerWaterfalls.LastBuild)
            {
                Assert.IsTrue(p.onTower, $"Waterfall {p.side}: the approved screen position does not reach the Meshy tower");
                Assert.AreEqual(p.spec.x, p.screenLip.x, 0.02f, $"Waterfall {p.side} spout x");
                Assert.AreEqual(p.spec.lipY, p.screenLip.y, 0.02f, $"Waterfall {p.side} spout y");
                Assert.AreEqual(p.spec.basinY, p.screenBasin.y, 0.02f, $"Waterfall {p.side} basin y");
                Assert.Greater(p.upperDrop, 0.3f);
                Assert.Greater(p.lowerDrop, 1f);
                Assert.Less(p.landing.z, env.layout.castleFrontZ, $"Waterfall {p.side} must land in the moat in front of the castle");
            }

            // Gems: every one is a trigger the mascot can touch (checked by the validation above); with the
            // Meshy gem in its slot they all share one mesh and one material, so extra gems cost no memory.
            var gems = System.Array.FindAll(Object.FindObjectsByType<Collectible>(FindObjectsSortMode.None), c => c.kind == CollectibleKind.Gem);
            Assert.GreaterOrEqual(gems.Length, 5, "expected the Screen 4 gem plus the gems along the water path");
            Assert.AreEqual(0, r.unreachableGems);
            var fx = Object.FindFirstObjectByType<GemSparkles>();
            Assert.IsNotNull(fx, "shared gem sparkle effect missing");
            Assert.IsNotNull(fx.twinkles); Assert.IsNotNull(fx.burst); Assert.IsNotNull(fx.glow);
            if (PropFactory.Has(PropSlot.Gem))
            {
                var meshes = new System.Collections.Generic.HashSet<Mesh>();
                var materials = new System.Collections.Generic.HashSet<Material>();
                foreach (var g in gems)
                {
                    Assert.IsTrue(g.GetComponent<Collider>().isTrigger);
                    foreach (var mf in g.GetComponentsInChildren<MeshFilter>()) meshes.Add(mf.sharedMesh);
                    foreach (var mr in g.GetComponentsInChildren<MeshRenderer>()) foreach (var m in mr.sharedMaterials) materials.Add(m);
                }
                Assert.AreEqual(1, meshes.Count, "every gem should reuse the one Meshy gem mesh");
                Assert.AreEqual(1, materials.Count, "every gem should share one material");
                foreach (var m in materials) Assert.AreEqual("BubbleWash/Gem", m.shader.name);
            }

            // With the Meshy washing roller in its slot, every brush is the roller, spins about its long
            // axis and is a solid capsule; the validation above already proved it clears every lane.
            if (PropFactory.Has(PropSlot.SpinningBrush))
            {
                foreach (var name in new[] { "SpinningBrush_Entrance_L", "SpinningBrush_Drum_L", "SpinningBrush_Drum_R" })
                {
                    var brush = GameObject.Find(name);
                    Assert.IsNotNull(brush, name + " missing");
                    var cap = brush.GetComponent<CapsuleCollider>();
                    Assert.IsNotNull(cap, name + " has no capsule collider");
                    Assert.AreEqual(2, cap.direction, name + ": the capsule must run along the spin axis");
                    var spin = brush.GetComponent<Spinner>();
                    Assert.IsNotNull(spin);
                    Assert.Less(Vector3.Distance(spin.localAxis, Vector3.forward), 1e-4f);
                    // The roller's long axis lies along the spin axis.
                    var b = PropFactory.LocalBounds(brush.transform);
                    Assert.Greater(b.size.z, b.size.x * 1.3f, name + ": the roller's long axis is not the spin axis");
                }
            }
        }
    }
}
