using UnityEngine;

namespace BubbleWash
{
    public enum CollectibleKind { Coin, Gem, Sock }

    /// <summary>
    /// Paw coins, gemstones and lost socks. Spins/bobs while waiting, pops towards the mascot when
    /// collected and re-appears on the next lap (the same objects are reused, never re-created).
    /// Gems turn smoothly and rock gently so their facets catch the light.
    /// </summary>
    [RequireComponent(typeof(Collider))]
    public class Collectible : MonoBehaviour
    {
        public CollectibleKind kind = CollectibleKind.Coin;
        public int value = 1;
        public float spinSpeed = 180f;
        public float bobAmplitude = 0.08f;
        public float bobFrequency = 1.2f;

        /// <summary>Raised once each time anything is collected (gem sparkles and the HUD counter pop listen).</summary>
        public static event System.Action<Collectible> Collected;

        Vector3 _home;
        Vector3 _homeScale;
        float _phase;
        float _spin;
        float _collectedT = -1f;
        Transform _target;

        public bool IsCollected => _collectedT >= 0f;

        void Awake()
        {
            _home = transform.position;
            _homeScale = transform.localScale;
            _phase = (transform.position.x * 1.7f + transform.position.z * 0.37f) % (2f * Mathf.PI);
            _spin = transform.eulerAngles.y;
            GetComponent<Collider>().isTrigger = true;
        }

        void Update() => Tick(Time.deltaTime, Time.time);

        public void Tick(float dt, float time)
        {
            if (_collectedT >= 0f)
            {
                _collectedT += dt;
                float k = Mathf.Clamp01(_collectedT / 0.35f);
                Vector3 to = _target ? _target.position + Vector3.up * 0.6f : transform.position + Vector3.up;
                transform.position = Vector3.Lerp(transform.position, to, k);
                transform.localScale = _homeScale * (1f + 0.6f * Mathf.Sin(k * Mathf.PI)) * (1f - k);
                if (k >= 1f) gameObject.SetActive(false);
                return;
            }
            float y = Mathf.Sin(time * bobFrequency * 2f * Mathf.PI + _phase) * bobAmplitude;
            transform.position = _home + Vector3.up * y;
            if (kind == CollectibleKind.Gem)
            {
                _spin = (_spin + spinSpeed * dt) % 360f;
                transform.rotation = Quaternion.Euler(Mathf.Sin(time * 0.9f + _phase) * 9f, _spin, Mathf.Sin(time * 0.7f + _phase * 1.3f) * 7f);
            }
            else if (kind != CollectibleKind.Sock)
                transform.Rotate(Vector3.up, spinSpeed * dt, Space.World);
            else
                transform.localRotation = Quaternion.Euler(0f, 180f + Mathf.Sin(time * 2.2f + _phase) * 20f, Mathf.Sin(time * 3.1f + _phase) * 10f);
        }

        public void Collect(Transform collector)
        {
            if (IsCollected) return;
            _collectedT = 0f;
            _target = collector;
            var session = GameSession.Active;
            if (session != null)
            {
                switch (kind)
                {
                    case CollectibleKind.Coin: session.AddCoins(value); break;
                    case CollectibleKind.Gem: session.AddGems(value); break;
                    case CollectibleKind.Sock: session.RescueSock(); break;
                }
            }
            Collected?.Invoke(this);
        }

        public void ResetForLap()
        {
            _collectedT = -1f;
            transform.position = _home;
            transform.localScale = _homeScale;
            gameObject.SetActive(true);
        }
    }
}
