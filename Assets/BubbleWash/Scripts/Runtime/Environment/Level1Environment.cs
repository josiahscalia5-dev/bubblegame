using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Scene-level description of the Level 1 opening. The level builder writes the measured
    /// layout here; gameplay, camera and FX read it through <see cref="Active"/>.
    /// </summary>
    [DefaultExecutionOrder(-200)]
    public class Level1Environment : MonoBehaviour
    {
        public static Level1Environment Active { get; private set; }

        public LevelLayout layout = new LevelLayout();

        [Header("Water")]
        [Tooltip("Speed the current carries foam and wave detail forward (m/s).")]
        public float flowSpeed = 9f;
        public float waveScale = 1f;
        [Tooltip("How far the water climbs the drum walls (m).")]
        public float edgeCurlHeight = 0.35f;

        [Header("References (filled by the builder)")]
        public Transform castle;
        public Transform tunnelRoot;
        public Transform water;
        public BubbleRunner runner;

        void OnEnable()
        {
            Active = this;
            PushWaveGlobals(Vector3.zero);
        }

        void OnDisable()
        {
            if (Active == this) Active = null;
        }

        void Update()
        {
            WaveField.Time = Time.timeSinceLevelLoad;
            PushWaveGlobals(runner != null ? runner.transform.position : Vector3.zero);
        }

        /// <summary>Copy layout into the shared wave parameters and shader globals (also used by the preview capture).</summary>
        public void PushWaveGlobals(Vector3 playerPos)
        {
            WaveField.Scale = waveScale;
            WaveField.Tunnel = new Vector4(layout.tunnelStartZ, layout.tunnelEndZ, layout.tunnelRadius, layout.axisHeight);
            WaveField.Channel = new Vector4(layout.waterLevel, edgeCurlHeight, 0.45f, 0f);
            WaveField.PushGlobals(playerPos, flowSpeed);
        }

        /// <summary>Editor/capture hook: register this environment without entering play mode.</summary>
        public void MakeActive() => Active = this;

        void OnDrawGizmosSelected()
        {
            var l = layout;
            Gizmos.color = new Color(0.3f, 0.8f, 1f, 0.8f);
            for (float z = l.castleFrontZ; z <= l.tunnelEndZ + 0.01f; z += 2f)
                DrawCircle(l.AxisPoint(z), l.tunnelRadius);
            Gizmos.color = Color.yellow;
            for (int i = 0; i < l.laneCount; i++)
            {
                float x = l.LaneX(i);
                Gizmos.DrawLine(new Vector3(x, l.waterLevel + 0.05f, l.startZ), new Vector3(x, l.waterLevel + 0.05f, l.tunnelEndZ));
            }
        }

        static void DrawCircle(Vector3 c, float r)
        {
            const int seg = 40;
            Vector3 prev = c + new Vector3(r, 0, 0);
            for (int i = 1; i <= seg; i++)
            {
                float a = 2f * Mathf.PI * i / seg;
                Vector3 p = c + new Vector3(Mathf.Cos(a) * r, Mathf.Sin(a) * r, 0);
                Gizmos.DrawLine(prev, p);
                prev = p;
            }
        }
    }
}
