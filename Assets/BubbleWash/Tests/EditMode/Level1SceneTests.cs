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
        }
    }
}
