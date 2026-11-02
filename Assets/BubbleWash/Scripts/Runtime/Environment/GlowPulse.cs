using UnityEngine;

namespace BubbleWash
{
    /// <summary>Pulses an emissive colour through a MaterialPropertyBlock, so every ring shares one material.</summary>
    [RequireComponent(typeof(Renderer))]
    public class GlowPulse : MonoBehaviour
    {
        static readonly int ColorId = Shader.PropertyToID("_Color");
        [ColorUsage(false, true)] public Color color = new Color(1.6f, 1.3f, 0.6f);
        public float pulseSpeed = 1.2f;
        [Range(0f, 1f)] public float pulseDepth = 0.25f;
        public float phase;
        MaterialPropertyBlock _mpb;
        Renderer _renderer;

        void OnEnable()
        {
            _renderer = GetComponent<Renderer>();
            _mpb ??= new MaterialPropertyBlock();
            Apply(0f);
        }

        void Update() => Apply(Time.time);

        public void Apply(float time)
        {
            if (_renderer == null) _renderer = GetComponent<Renderer>();
            _mpb ??= new MaterialPropertyBlock();
            float k = 1f - pulseDepth * (0.5f + 0.5f * Mathf.Sin(time * pulseSpeed * 2f * Mathf.PI + phase));
            _renderer.GetPropertyBlock(_mpb);
            _mpb.SetColor(ColorId, color * k);
            _renderer.SetPropertyBlock(_mpb);
        }
    }
}
