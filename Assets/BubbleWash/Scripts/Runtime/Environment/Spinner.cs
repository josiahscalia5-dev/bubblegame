using UnityEngine;

namespace BubbleWash
{
    /// <summary>Continuous spin around a local axis (brushes, coins, the drum pattern).</summary>
    public class Spinner : MonoBehaviour
    {
        public Vector3 localAxis = Vector3.forward;
        [Tooltip("Degrees per second.")]
        public float speed = 120f;

        void Update() => transform.Rotate(localAxis, speed * Time.deltaTime, Space.Self);
    }
}
