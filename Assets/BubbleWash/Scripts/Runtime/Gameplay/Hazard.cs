using UnityEngine;

namespace BubbleWash
{
    public enum HazardKind { SpinningBrush, Enemy }

    /// <summary>
    /// Something the mascot must avoid: a spinning brush (Screen 7) or a dust-bunny enemy (Screen 9).
    /// Touching it costs a heart and knocks the mascot back with a tumble. Bubble Blast pops enemies.
    /// Enemies drift across the lanes; brushes stay put and spin.
    /// </summary>
    [RequireComponent(typeof(Collider))]
    public class Hazard : MonoBehaviour
    {
        public HazardKind kind = HazardKind.SpinningBrush;
        [Header("Enemy movement")]
        public float sweepWidth = 1.7f;
        public float sweepSpeed = 0.7f;
        public float bobAmplitude = 0.15f;
        public float phase;

        public bool Defeated { get; private set; }
        Vector3 _home;
        float _popT = -1f;
        Vector3 _homeScale;

        void Awake()
        {
            _home = transform.position;
            _homeScale = transform.localScale;
            GetComponent<Collider>().isTrigger = true;
        }

        void Update()
        {
            if (_popT >= 0f)
            {
                _popT += Time.deltaTime;
                float k = Mathf.Clamp01(_popT / 0.3f);
                transform.localScale = _homeScale * (1f + 0.5f * k) * (1f - k);
                if (k >= 1f) gameObject.SetActive(false);
                return;
            }
            if (kind == HazardKind.Enemy)
            {
                float t = Time.time * sweepSpeed * 2f * Mathf.PI + phase;
                transform.position = _home + new Vector3(Mathf.Sin(t) * sweepWidth * 0.5f, Mathf.Sin(t * 2.3f) * bobAmplitude, 0f);
                transform.rotation = Quaternion.Euler(0f, 180f + Mathf.Sin(t) * 20f, Mathf.Sin(t * 1.7f) * 12f);
            }
        }

        /// <summary>Pop the enemy (Bubble Blast).</summary>
        public void Pop()
        {
            if (Defeated) return;
            Defeated = true;
            _popT = 0f;
        }

        public void ResetForLap()
        {
            Defeated = false; _popT = -1f;
            transform.position = _home; transform.localScale = _homeScale;
            gameObject.SetActive(true);
        }
    }
}
