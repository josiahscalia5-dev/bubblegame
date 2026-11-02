using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Shrinks an object away as the camera approaches it (the luminous disc at the end of the first
    /// drum: it reads as the bright vortex centre on Screen 4, then gets out of the way so the mascot
    /// can ride out to the side paths of Screens 5-6 without the camera flying through it).
    /// </summary>
    public class ShrinkNearCamera : MonoBehaviour
    {
        [Tooltip("Fully shrunk at or closer than this distance (m).")]
        public float hiddenDistance = 4f;
        [Tooltip("Full size at or beyond this distance (m).")]
        public float fullDistance = 14f;

        Vector3 _scale;
        Camera _cam;

        void OnEnable() => _scale = transform.localScale;

        void LateUpdate()
        {
            if (_cam == null) _cam = Camera.main;
            if (_cam == null) return;
            float d = Vector3.Distance(_cam.transform.position, transform.position);
            float behind = _cam.transform.position.z > transform.position.z ? 0f : 1f; // already passed: stay hidden
            float k = Mathf.InverseLerp(hiddenDistance, fullDistance, d) * behind;
            k = k * k * (3f - 2f * k);
            transform.localScale = _scale * Mathf.Max(0.0001f, k);
        }
    }
}
