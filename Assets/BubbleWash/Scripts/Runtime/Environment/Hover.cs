using UnityEngine;

namespace BubbleWash
{
    /// <summary>Gentle hover/bob (collectibles, socks).</summary>
    public class Hover : MonoBehaviour
    {
        public float amplitude = 0.12f;
        public float frequency = 1.3f;
        public float phase;
        Vector3 _base;

        void OnEnable() => _base = transform.localPosition;

        void Update()
        {
            float t = Time.time * frequency * 2f * Mathf.PI + phase;
            transform.localPosition = _base + Vector3.up * (Mathf.Sin(t) * amplitude);
        }
    }
}
