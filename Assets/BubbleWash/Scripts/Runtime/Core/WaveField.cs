using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// CPU mirror of the water wave function in BubbleWashWater.hlsl. Keep the two in sync:
    /// the mascot floats on <see cref="Height"/> while the GPU displaces the water mesh with the same sum.
    /// </summary>
    public static class WaveField
    {
        public static readonly int WaveTimeId = Shader.PropertyToID("_BW_WaveTime");
        public static readonly int WaveScaleId = Shader.PropertyToID("_BW_WaveScale");
        public static readonly int FlowSpeedId = Shader.PropertyToID("_BW_FlowSpeed");
        public static readonly int PlayerPosId = Shader.PropertyToID("_BW_PlayerPos");
        public static readonly int TunnelId = Shader.PropertyToID("_BW_Tunnel");      // x=startZ, y=endZ, z=radius, w=axisHeight
        public static readonly int ChannelId = Shader.PropertyToID("_BW_Channel");    // x=waterLevel, y=edge curl height, z=curl width

        public static float Time;
        public static float Scale = 1f;
        public static Vector4 Tunnel = new Vector4(3.90f, 37.20f, 2.5f, 1.5f);
        public static Vector4 Channel = new Vector4(0f, 0.35f, 0.45f, 0f);

        /// <summary>Water surface height at world (x, z). Must match BW_WaveHeight in the shader.</summary>
        public static float Height(float x, float z, float t)
        {
            float h = 0f;
            h += 0.060f * Mathf.Sin(z * 0.90f - t * 3.1f + x * 0.35f);
            h += 0.035f * Mathf.Sin(z * 2.30f - t * 5.3f - x * 1.10f + 1.7f);
            h += 0.020f * Mathf.Sin(z * 4.70f - t * 7.9f + x * 2.30f + 0.4f);
            h += 0.012f * Mathf.Sin(x * 6.00f + t * 4.0f + z * 0.50f);
            h *= Scale;
            h += EdgeCurl(x, z);
            return Channel.x + h;
        }

        public static float Height(float x, float z) => Height(x, z, Time);

        /// <summary>Inside the drum the water climbs the walls a little, like a washing machine mid-cycle.</summary>
        public static float EdgeCurl(float x, float z)
        {
            float inside = Mathf.Clamp01((z - Tunnel.x) * 0.5f) * Mathf.Clamp01((Tunnel.y - z) * 0.5f);
            if (inside <= 0f) return 0f;
            float radius = Tunnel.z, axis = Tunnel.w;
            float half = Mathf.Sqrt(Mathf.Max(0.01f, radius * radius - axis * axis));
            float u = Mathf.Clamp01((Mathf.Abs(x) - (half - Channel.z)) / Mathf.Max(0.01f, Channel.z));
            return inside * Channel.y * u * u;
        }

        /// <summary>Approximate surface normal from central differences.</summary>
        public static Vector3 Normal(float x, float z)
        {
            const float e = 0.05f;
            float hx = Height(x + e, z) - Height(x - e, z);
            float hz = Height(x, z + e) - Height(x, z - e);
            return new Vector3(-hx, 2f * e, -hz).normalized;
        }

        public static void PushGlobals(Vector3 playerPos, float flowSpeed)
        {
            Shader.SetGlobalFloat(WaveTimeId, Time);
            Shader.SetGlobalFloat(WaveScaleId, Scale);
            Shader.SetGlobalFloat(FlowSpeedId, flowSpeed);
            Shader.SetGlobalVector(PlayerPosId, playerPos);
            Shader.SetGlobalVector(TunnelId, Tunnel);
            Shader.SetGlobalVector(ChannelId, Channel);
        }
    }
}
