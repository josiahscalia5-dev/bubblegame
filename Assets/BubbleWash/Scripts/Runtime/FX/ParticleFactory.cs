using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Configures the particle systems used for splashes, foam spray, iridescent bubbles and
    /// sparkles. Called by the level builder (so settings are saved in the scene) and usable at runtime.
    /// Particle budgets are kept small for mobile.
    /// </summary>
    public static class ParticleFactory
    {
        static void Reset(ParticleSystem ps)
        {
            ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
        }

        static ParticleSystem.MinMaxCurve Range(float a, float b) => new ParticleSystem.MinMaxCurve(a, b);

        static Gradient Fade(Color c, float peakAlpha = 1f)
        {
            var g = new Gradient();
            g.SetKeys(
                new[] { new GradientColorKey(c, 0f), new GradientColorKey(c, 1f) },
                new[] { new GradientAlphaKey(0f, 0f), new GradientAlphaKey(peakAlpha, 0.12f), new GradientAlphaKey(peakAlpha * 0.8f, 0.7f), new GradientAlphaKey(0f, 1f) });
            return g;
        }

        static void Renderer(ParticleSystem ps, Material mat, float maxScreenSize = 0.6f)
        {
            var r = ps.GetComponent<ParticleSystemRenderer>();
            r.sharedMaterial = mat;
            r.renderMode = ParticleSystemRenderMode.Billboard;
            r.sortMode = ParticleSystemSortMode.Distance;
            r.maxParticleSize = maxScreenSize;
            r.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            r.receiveShadows = false;
        }

        /// <summary>Droplet spray trailing the mascot (rate is driven by speed at runtime).</summary>
        public static void Wake(ParticleSystem ps, Material droplet)
        {
            Reset(ps);
            var main = ps.main;
            main.duration = 1f; main.loop = true; main.playOnAwake = true;
            main.startLifetime = Range(0.35f, 0.75f);
            main.startSpeed = Range(1.2f, 3.2f);
            main.startSize = Range(0.05f, 0.16f);
            main.startColor = new ParticleSystem.MinMaxGradient(new Color(1f, 1f, 1f, 0.95f), new Color(0.75f, 0.92f, 1f, 0.9f));
            main.gravityModifier = 1.6f;
            main.simulationSpace = ParticleSystemSimulationSpace.World;
            main.maxParticles = 160;
            var em = ps.emission; em.rateOverTime = 40f;
            var sh = ps.shape; sh.enabled = true; sh.shapeType = ParticleSystemShapeType.Cone; sh.angle = 38f; sh.radius = 0.35f;
            sh.rotation = new Vector3(-70f, 0f, 0f); // up and slightly back
            var col = ps.colorOverLifetime; col.enabled = true; col.color = new ParticleSystem.MinMaxGradient(Fade(Color.white));
            var size = ps.sizeOverLifetime; size.enabled = true; size.size = new ParticleSystem.MinMaxCurve(1f, AnimationCurve.EaseInOut(0f, 0.6f, 1f, 1.2f));
            Renderer(ps, droplet);
        }

        /// <summary>One-shot splash bursts (landings, lane changes); emitted from code with Emit().</summary>
        public static void Burst(ParticleSystem ps, Material droplet)
        {
            Reset(ps);
            var main = ps.main;
            main.duration = 1f; main.loop = false; main.playOnAwake = false;
            main.startLifetime = Range(0.45f, 0.9f);
            main.startSpeed = Range(2.2f, 5.0f);
            main.startSize = Range(0.06f, 0.22f);
            main.startColor = new ParticleSystem.MinMaxGradient(Color.white, new Color(0.7f, 0.9f, 1f, 1f));
            main.gravityModifier = 1.8f;
            main.simulationSpace = ParticleSystemSimulationSpace.World;
            main.maxParticles = 220;
            var em = ps.emission; em.enabled = false;
            var sh = ps.shape; sh.enabled = true; sh.shapeType = ParticleSystemShapeType.Hemisphere; sh.radius = 0.45f;
            sh.rotation = new Vector3(-90f, 0f, 0f);
            var col = ps.colorOverLifetime; col.enabled = true; col.color = new ParticleSystem.MinMaxGradient(Fade(Color.white));
            Renderer(ps, droplet);
        }

        /// <summary>Floating iridescent soap bubbles in a box around the given centre.</summary>
        public static void Bubbles(ParticleSystem ps, Material bubble, Vector3 box, float rate, float minSize, float maxSize, int max)
        {
            Reset(ps);
            var main = ps.main;
            main.duration = 5f; main.loop = true; main.playOnAwake = true; main.prewarm = true;
            main.startLifetime = Range(4f, 7f);
            main.startSpeed = Range(0.05f, 0.35f);
            main.startSize = Range(minSize, maxSize);
            main.startRotation = Range(0f, Mathf.PI * 2f);
            main.startColor = new ParticleSystem.MinMaxGradient(new Color(1f, 1f, 1f, 1f), new Color(0.9f, 0.95f, 1f, 0.85f));
            main.gravityModifier = -0.02f;
            main.simulationSpace = ParticleSystemSimulationSpace.World;
            main.maxParticles = max;
            var em = ps.emission; em.rateOverTime = rate;
            var sh = ps.shape; sh.enabled = true; sh.shapeType = ParticleSystemShapeType.Box; sh.scale = box;
            var noise = ps.noise; noise.enabled = true; noise.strength = 0.25f; noise.frequency = 0.35f; noise.scrollSpeed = 0.2f; noise.quality = ParticleSystemNoiseQuality.Low;
            var col = ps.colorOverLifetime; col.enabled = true; col.color = new ParticleSystem.MinMaxGradient(Fade(Color.white));
            var size = ps.sizeOverLifetime; size.enabled = true; size.size = new ParticleSystem.MinMaxCurve(1f, AnimationCurve.EaseInOut(0f, 0.7f, 1f, 1f));
            Renderer(ps, bubble, 0.9f);
        }

        /// <summary>
        /// Looping spray and mist where a waterfall lands: droplets thrown up and out, and puffs that
        /// grow and fade. <paramref name="strength"/> scales the rate, speed and particle budget
        /// (1 = landing in the moat, about 0.6 = landing in a catch basin).
        /// </summary>
        public static void WaterfallSplash(ParticleSystem ps, Material droplet, float radius, float strength)
        {
            Reset(ps);
            strength = Mathf.Max(0.1f, strength);
            var main = ps.main;
            main.duration = 2f; main.loop = true; main.playOnAwake = true; main.prewarm = true;
            main.startLifetime = Range(0.5f, 1.1f);
            main.startSpeed = Range(0.8f * strength, 2.4f * strength);
            main.startSize = Range(0.1f, 0.34f);
            main.startColor = new ParticleSystem.MinMaxGradient(new Color(1f, 1f, 1f, 0.9f), new Color(0.8f, 0.93f, 1f, 0.75f));
            main.gravityModifier = 0.9f;
            main.simulationSpace = ParticleSystemSimulationSpace.World;
            main.maxParticles = Mathf.Clamp(Mathf.RoundToInt(36f * strength), 8, 48);
            var em = ps.emission; em.rateOverTime = 30f * strength;
            var sh = ps.shape; sh.enabled = true; sh.shapeType = ParticleSystemShapeType.Cone; sh.angle = 40f; sh.radius = Mathf.Max(0.05f, radius);
            sh.rotation = new Vector3(-90f, 0f, 0f); // straight up
            var col = ps.colorOverLifetime; col.enabled = true; col.color = new ParticleSystem.MinMaxGradient(Fade(Color.white, 0.9f));
            var size = ps.sizeOverLifetime; size.enabled = true; size.size = new ParticleSystem.MinMaxCurve(1f, AnimationCurve.EaseInOut(0f, 0.6f, 1f, 1.6f));
            Renderer(ps, droplet, 0.5f);
        }

        /// <summary>
        /// Droplets peeling off the edges of a falling column: emitted across the lip with the water's
        /// throw speed, then falling under gravity. The emitter's +Z is the throw direction.
        /// </summary>
        public static void WaterfallDroplets(ParticleSystem ps, Material droplet, float width, float throwSpeed)
        {
            Reset(ps);
            var main = ps.main;
            main.duration = 2f; main.loop = true; main.playOnAwake = true; main.prewarm = true;
            main.startLifetime = Range(0.6f, 1.0f);
            main.startSpeed = Range(throwSpeed * 0.8f, throwSpeed * 1.4f);
            main.startSize = Range(0.04f, 0.1f);
            main.startColor = new ParticleSystem.MinMaxGradient(new Color(1f, 1f, 1f, 0.95f), new Color(0.75f, 0.92f, 1f, 0.9f));
            main.gravityModifier = 1f;
            main.simulationSpace = ParticleSystemSimulationSpace.World;
            main.maxParticles = 16;
            var em = ps.emission; em.rateOverTime = 14f;
            var sh = ps.shape; sh.enabled = true; sh.shapeType = ParticleSystemShapeType.Box;
            sh.scale = new Vector3(Mathf.Max(0.05f, width), 0.05f, 0.05f);
            var col = ps.colorOverLifetime; col.enabled = true; col.color = new ParticleSystem.MinMaxGradient(Fade(Color.white));
            Renderer(ps, droplet, 0.2f);
        }

        /// <summary>Tiny twinkling star sparkles (additive).</summary>
        public static void Sparkles(ParticleSystem ps, Material sparkle, Vector3 box, float rate, int max)
        {
            Reset(ps);
            var main = ps.main;
            main.duration = 3f; main.loop = true; main.playOnAwake = true; main.prewarm = true;
            main.startLifetime = Range(0.6f, 1.6f);
            main.startSpeed = Range(0f, 0.2f);
            main.startSize = Range(0.05f, 0.18f);
            main.startRotation = Range(0f, Mathf.PI);
            main.startColor = new ParticleSystem.MinMaxGradient(new Color(1f, 0.95f, 0.8f, 1f), new Color(0.8f, 0.9f, 1f, 1f));
            main.simulationSpace = ParticleSystemSimulationSpace.World;
            main.maxParticles = max;
            var em = ps.emission; em.rateOverTime = rate;
            var sh = ps.shape; sh.enabled = true; sh.shapeType = ParticleSystemShapeType.Box; sh.scale = box;
            var col = ps.colorOverLifetime; col.enabled = true; col.color = new ParticleSystem.MinMaxGradient(Fade(Color.white));
            var size = ps.sizeOverLifetime; size.enabled = true; size.size = new ParticleSystem.MinMaxCurve(1f, new AnimationCurve(new Keyframe(0f, 0f), new Keyframe(0.3f, 1f), new Keyframe(1f, 0f)));
            Renderer(ps, sparkle, 0.2f);
        }
    }
}
