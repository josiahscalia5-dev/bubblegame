using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Floating decoration (the rubber duck at the drum entrance in Screen 3) that bobs on the waves
    /// and paddles ahead of the mascot when it gets close, then resets for the next lap.
    /// </summary>
    public class DriftAhead : MonoBehaviour
    {
        public Transform mascot;
        public float triggerDistance = 9f;
        public float speed = 9.5f;
        public float floatOffset = 0.18f;
        public float maxTravel = 40f;

        Vector3 _home;
        bool _drifting;

        void Awake() => _home = transform.position;

        void Update()
        {
            Vector3 p = transform.position;
            if (mascot != null && !_drifting && p.z - mascot.position.z < triggerDistance && p.z > mascot.position.z) _drifting = true;
            if (mascot != null && mascot.position.z < _home.z - triggerDistance * 1.5f) { _drifting = false; p = _home; }
            if (_drifting) p.z += speed * Time.deltaTime;
            if (p.z > _home.z + maxTravel) p.z = _home.z + maxTravel;
            p.y = WaveField.Height(p.x, p.z) + floatOffset;
            transform.position = p;
            transform.rotation = Quaternion.Euler(Mathf.Sin(Time.time * 2.3f) * 6f, Mathf.Sin(Time.time * 0.7f) * 12f, Mathf.Sin(Time.time * 1.9f) * 5f);
        }
    }
}
