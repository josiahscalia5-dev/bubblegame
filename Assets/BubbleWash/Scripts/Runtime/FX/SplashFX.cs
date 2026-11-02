using UnityEngine;

namespace BubbleWash
{
    /// <summary>Splash and bubble effects around the mascot.</summary>
    public class SplashFX : MonoBehaviour
    {
        public ParticleSystem wake;
        public ParticleSystem burst;
        public ParticleSystem bubbleBurst;
        [Tooltip("Wake particles per second at cruise speed.")]
        public float wakeRate = 45f;

        public void Wake(Vector3 mascot, float speed, bool suppressed)
        {
            if (wake == null) return;
            wake.transform.position = new Vector3(mascot.x, WaveField.Height(mascot.x, mascot.z) + 0.05f, mascot.z - 0.25f);
            var em = wake.emission;
            em.rateOverTime = suppressed ? 0f : wakeRate * Mathf.Clamp01(speed / 7f) + 6f;
        }

        public void Burst(Vector3 at, float strength)
        {
            if (burst == null) return;
            burst.transform.position = new Vector3(at.x, WaveField.Height(at.x, at.z) + 0.05f, at.z);
            burst.Emit(Mathf.RoundToInt(45 * strength));
        }

        public void LaneSplash(Vector3 at, int direction)
        {
            if (burst == null) return;
            var p = new ParticleSystem.EmitParams
            {
                position = new Vector3(at.x - direction * 0.35f, WaveField.Height(at.x, at.z) + 0.05f, at.z),
                applyShapeToPosition = true,
            };
            for (int i = 0; i < 24; i++)
            {
                p.velocity = new Vector3(-direction * Random.Range(1.5f, 3.5f), Random.Range(1.8f, 3.6f), Random.Range(-1f, 0.5f));
                burst.Emit(p, 1);
            }
        }

        public void BubbleBlast(Vector3 at)
        {
            var ps = bubbleBurst != null ? bubbleBurst : burst;
            if (ps == null) return;
            var p = new ParticleSystem.EmitParams { position = at + Vector3.up * 0.4f, applyShapeToPosition = true };
            for (int i = 0; i < 30; i++)
            {
                p.velocity = new Vector3(Random.Range(-1.2f, 1.2f), Random.Range(-0.3f, 1.2f), Random.Range(6f, 12f));
                p.startSize = Random.Range(0.15f, 0.5f);
                p.startLifetime = Random.Range(1f, 1.8f);
                ps.Emit(p, 1);
            }
        }
    }
}
