using NUnit.Framework;
using UnityEditor;
using UnityEngine;
using BubbleWash.EditorTools;

namespace BubbleWash.Tests
{
    /// <summary>
    /// Builds the real Level 1 scene from the Meshy GLBs and runs the geometry validation:
    /// joint gaps, portal/drum alignment, mascot and camera clearance.
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
        }
    }
}
