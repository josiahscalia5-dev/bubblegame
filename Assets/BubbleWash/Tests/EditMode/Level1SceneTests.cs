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

        [Test]
        public void Level1_ContainsScreens5To12()
        {
            if (AssetDatabase.LoadAssetAtPath<GameObject>(Level1SceneBuilder.CastlePath) == null)
                Assert.Ignore("Castle GLB not imported (glTFast missing?)");
            var env = Level1SceneBuilder.Build();
            var l = env.layout;
            Assert.Greater(l.drum2StartZ, l.tunnelEndZ, "second drum must come after the side paths");
            Assert.Greater(l.drum2EndZ, l.drum2StartZ);
            Assert.Greater(l.finishZ, l.drum2EndZ);

            var director = Object.FindFirstObjectByType<SectionDirector>();
            Assert.IsNotNull(director, "SectionDirector missing");
            for (int screen = 3; screen <= 11; screen++)
                Assert.IsNotNull(director.ForScreen(screen), $"no level section for approved Screen {screen}");

            Assert.AreEqual(2, Object.FindObjectsByType<SidePath>(FindObjectsSortMode.None).Length, "side paths (Screens 5-6)");
            int brushes = 0, enemies = 0;
            foreach (var h in Object.FindObjectsByType<Hazard>(FindObjectsSortMode.None))
                if (h.kind == HazardKind.SpinningBrush) brushes++; else enemies++;
            Assert.GreaterOrEqual(brushes, 3, "spinning brushes (Screen 7)");
            Assert.GreaterOrEqual(enemies, 3, "enemies (Screen 9)");

            int coins = 0, socks = 0, special = 0;
            foreach (var c in Object.FindObjectsByType<Collectible>(FindObjectsSortMode.None))
            {
                if (c.kind == CollectibleKind.Coin) coins++;
                if (c.kind == CollectibleKind.Sock) socks++;
                if (c.kind == CollectibleKind.Gem && c.special) special++;
            }
            Assert.AreEqual(5, socks, "Rescue 5 lost socks");
            Assert.GreaterOrEqual(coins, 50, "Collect 50 coins");
            Assert.AreEqual(1, special, "Find 1 special gem");

            var hud = Object.FindFirstObjectByType<GameHud>();
            Assert.IsNotNull(hud.banner, "section banner");
            Assert.IsNotNull(hud.complete, "Level Complete (Screen 12)");
        }

        [Test]
        public void LevelComplete_ApprovedRewardsForAllObjectives()
        {
            var go = new GameObject("session");
            try
            {
                var s = go.AddComponent<GameSession>();
                s.useSavedProgress = false;
                s.socksRescued = 5; s.coinsCollected = 50; s.specialGemsFound = 1;
                var r = s.Result();
                Assert.AreEqual(3, r.stars);
                Assert.AreEqual(300, r.rewardCoins);
                Assert.AreEqual(10, r.rewardGems);
                Assert.AreEqual(5, r.rewardSocks);
                s.coinsCollected = 10;
                Assert.AreEqual(2, s.Result().stars);
            }
            finally { Object.DestroyImmediate(go); }
        }
    }
}
