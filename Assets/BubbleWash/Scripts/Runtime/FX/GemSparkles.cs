using System.Collections.Generic;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Sparkle effects for every gemstone in the level, from one set of particle systems, so extra gems
    /// cost almost nothing:
    /// - twinkles flicker over each waiting gem: a few at a time far away, many as the mascot approaches,
    ///   none while the game is paused;
    /// - when a gem is collected: a burst of pink and white star sparkles, a soft glow flash and a short
    ///   rising chime, where it was.
    /// The chime is generated in code, so it adds no audio file to the build.
    /// </summary>
    public class GemSparkles : MonoBehaviour
    {
        public ParticleSystem twinkles;
        public ParticleSystem burst;
        public ParticleSystem glow;
        public Transform mascot;

        [Header("Twinkles on waiting gems")]
        [Tooltip("Twinkles per second on a gem far from the mascot.")]
        public float farRate = 1.2f;
        [Tooltip("Twinkles per second on a gem right beside the mascot.")]
        public float nearRate = 14f;
        [Tooltip("Distance at which gems start to sparkle more (m).")]
        public float nearRange = 6f;
        [Tooltip("Half-size of a gem, to scatter twinkles over it (m).")]
        public float gemRadius = 0.28f;
        public Color sparkleA = new Color(1f, 0.55f, 0.95f, 1f);
        public Color sparkleB = Color.white;

        [Header("Collection")]
        public int burstCount = 28;
        [Range(0f, 1f)] public float chimeVolume = 0.35f;

        readonly List<Collectible> _gems = new List<Collectible>();
        readonly List<float> _carry = new List<float>();
        AudioSource _audio;
        AudioClip _chime;

        /// <summary>Number of gems this effect serves (for tests and the build report).</summary>
        public int GemCount => _gems.Count;

        void OnEnable()
        {
            Collectible.Collected += OnCollected;
            Refresh();
            if (_audio == null)
            {
                _audio = GetComponent<AudioSource>();
                if (_audio == null) _audio = gameObject.AddComponent<AudioSource>();
                _audio.playOnAwake = false;
                _audio.spatialBlend = 0f;
            }
            if (_chime == null) _chime = MakeChime();
        }

        void OnDisable() => Collectible.Collected -= OnCollected;

        /// <summary>Find every gem in the scene (call after adding gems at runtime).</summary>
        public void Refresh()
        {
            _gems.Clear();
            _carry.Clear();
            foreach (var c in FindObjectsByType<Collectible>(FindObjectsInactive.Include, FindObjectsSortMode.None))
                if (c.kind == CollectibleKind.Gem) { _gems.Add(c); _carry.Add(Random.value); }
        }

        void Update()
        {
            float dt = Time.deltaTime;
            if (twinkles == null || dt <= 0f) return;   // paused (time scale 0)
            Vector3 m = mascot != null ? mascot.position : Vector3.zero;
            for (int i = 0; i < _gems.Count; i++)
            {
                var g = _gems[i];
                if (g == null || !g.isActiveAndEnabled || g.IsCollected) continue;
                Vector3 p = g.transform.position;
                float near = mascot != null ? 1f - Mathf.Clamp01(Vector3.Distance(p, m) / Mathf.Max(0.1f, nearRange)) : 0f;
                _carry[i] += Mathf.Lerp(farRate, nearRate, near * near) * dt;
                for (; _carry[i] >= 1f; _carry[i] -= 1f)
                {
                    var e = new ParticleSystem.EmitParams
                    {
                        position = p + Random.insideUnitSphere * gemRadius,
                        startColor = Color.Lerp(sparkleA, sparkleB, Random.value),
                        startSize = Random.Range(0.08f, 0.2f) * (0.8f + 0.6f * near),
                        applyShapeToPosition = false,
                    };
                    twinkles.Emit(e, 1);
                }
            }
        }

        void OnCollected(Collectible c)
        {
            if (c == null || c.kind != CollectibleKind.Gem) return;
            Vector3 p = c.transform.position;
            if (burst != null) { burst.transform.position = p; burst.Emit(burstCount); }
            if (glow != null) { glow.transform.position = p; glow.Emit(1); }
            if (_audio != null && _chime != null && chimeVolume > 0f)
            {
                _audio.pitch = Random.Range(0.96f, 1.08f);
                _audio.PlayOneShot(_chime, chimeVolume);
            }
        }

        /// <summary>A bright rising four-note sparkle (G6 C7 E7 G7), 0.6 s.</summary>
        public static AudioClip MakeChime()
        {
            const int rate = 44100;
            int n = Mathf.RoundToInt(rate * 0.6f);
            var data = new float[n];
            float[] notes = { 1567.98f, 2093.00f, 2637.02f, 3135.96f };
            for (int k = 0; k < notes.Length; k++)
            {
                int start = Mathf.RoundToInt(rate * 0.045f * k);
                for (int i = start; i < n; i++)
                {
                    float t = (i - start) / (float)rate;
                    float env = Mathf.Exp(-t * 9f) * Mathf.Clamp01(t * 400f);
                    float w = 2f * Mathf.PI * notes[k] * t;
                    data[i] += (Mathf.Sin(w) * 0.2f + Mathf.Sin(w * 2.01f) * 0.04f) * env;
                }
            }
            var clip = AudioClip.Create("GemChime", n, 1, rate, false);
            clip.SetData(data, 0);
            return clip;
        }
    }
}
