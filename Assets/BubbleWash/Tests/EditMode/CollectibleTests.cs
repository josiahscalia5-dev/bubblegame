using NUnit.Framework;
using UnityEngine;

namespace BubbleWash.Tests
{
    /// <summary>Collecting a gem: counted once, announced once, disappears, and comes back on the next lap.</summary>
    public class CollectibleTests
    {
        GameObject _sessionGo, _gemGo;

        [TearDown]
        public void TearDown()
        {
            if (_gemGo) Object.DestroyImmediate(_gemGo);
            if (_sessionGo) Object.DestroyImmediate(_sessionGo);
        }

        Collectible MakeGem(out GameSession session)
        {
            _sessionGo = new GameObject("Session");
            session = _sessionGo.AddComponent<GameSession>();
            session.MakeActive();
            _gemGo = new GameObject("Gem");
            _gemGo.AddComponent<SphereCollider>().isTrigger = true;
            var gem = _gemGo.AddComponent<Collectible>();
            gem.kind = CollectibleKind.Gem;
            return gem;
        }

        [Test]
        public void Gem_IsCountedOnceAndAnnounced()
        {
            var gem = MakeGem(out var session);
            int before = session.gems, announced = 0, changed = 0;
            void OnCollected(Collectible c) { if (c == gem) announced++; }
            Collectible.Collected += OnCollected;
            session.Changed += () => changed++;
            try
            {
                gem.Collect(null);
                gem.Collect(null);   // touching it again while it pops must not count twice
            }
            finally { Collectible.Collected -= OnCollected; }
            Assert.AreEqual(before + 1, session.gems);
            Assert.AreEqual(1, announced);
            Assert.AreEqual(1, changed, "the HUD refreshes once");
            Assert.IsTrue(gem.IsCollected);
        }

        [Test]
        public void Gem_DisappearsAfterItsPopAndReturnsNextLap()
        {
            var gem = MakeGem(out _);
            gem.Collect(null);
            gem.Tick(0.2f, 0f);
            Assert.IsTrue(gem.gameObject.activeSelf, "still popping toward the mascot");
            gem.Tick(0.2f, 0.2f);
            Assert.IsFalse(gem.gameObject.activeSelf, "gone after the 0.35 s pop");
            gem.ResetForLap();
            Assert.IsTrue(gem.gameObject.activeSelf);
            Assert.IsFalse(gem.IsCollected);
        }

        [Test]
        public void GemChime_IsAShortAudibleClip()
        {
            var clip = GemSparkles.MakeChime();
            Assert.AreEqual(1, clip.channels);
            Assert.AreEqual(0.6f, clip.length, 0.01f);
            var data = new float[clip.samples];
            clip.GetData(data, 0);
            float peak = 0f;
            foreach (var x in data) peak = Mathf.Max(peak, Mathf.Abs(x));
            Assert.Greater(peak, 0.1f);
            Assert.LessOrEqual(peak, 1f, "must not clip");
            Object.DestroyImmediate(clip);
        }
    }
}
