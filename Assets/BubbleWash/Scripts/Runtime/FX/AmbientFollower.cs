using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Keeps world-space ambient particles (bubbles, sparkles) spawning ahead of the camera so the
    /// air is always full of bubbles without paying for bubbles along the whole level.
    /// </summary>
    public class AmbientFollower : MonoBehaviour
    {
        public Transform follow;
        public Vector3 offset = new Vector3(0f, 1.2f, 7f);
        [Tooltip("Keep spawn volume inside the drum when enclosed.")]
        public bool clampToPassage = true;

        void LateUpdate() => SnapNow();

        /// <summary>Move the spawn volume to its place in front of the followed transform (also used by preview captures).</summary>
        public void SnapNow()
        {
            if (follow == null) return;
            Vector3 p = follow.position + offset;
            p.x = offset.x; // stay centred on the channel
            var env = Level1Environment.Active;
            if (clampToPassage && env != null) p = env.layout.ClampInsidePassage(p, 0.8f);
            transform.position = p;
        }
    }
}
