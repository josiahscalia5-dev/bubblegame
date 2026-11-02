using System.Collections.Generic;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// An elevated water slide beside the main path (approved Screen 5 "Jump to Side Paths!"). Swipe
    /// toward it to hop up; ride it; at its end (or with a swipe back / down) the mascot drops to the
    /// lower path (Screen 6 "Drop Down to Lower Paths!").
    /// </summary>
    public class SidePath : MonoBehaviour
    {
        public static readonly List<SidePath> All = new List<SidePath>();

        public float startZ = 44f;
        public float endZ = 60f;
        public float centreX = -3.3f;
        public float halfWidth = 0.75f;
        [Tooltip("Water surface height of the path above the main water level (m).")]
        public float height = 1.1f;

        void OnEnable() { if (!All.Contains(this)) All.Add(this); }
        void OnDisable() => All.Remove(this);

        public int Side => centreX < 0f ? -1 : 1;
        public bool ContainsZ(float z) => z >= startZ && z <= endZ;
        public bool Contains(float x, float z) => ContainsZ(z) && Mathf.Abs(x - centreX) <= halfWidth;
        public float SurfaceY(float x, float z, float t) => height + WaveField.WaveOnly(x, z, t);

        /// <summary>The side path on <paramref name="side"/> (-1 left, +1 right) that a hop at <paramref name="z"/> can still reach.</summary>
        public static SidePath Reachable(int side, float z, float lookAhead = 1.5f)
        {
            foreach (var p in All)
                if (p.Side == side && z + lookAhead >= p.startZ && z < p.endZ - 2f) return p;
            return null;
        }
    }
}
