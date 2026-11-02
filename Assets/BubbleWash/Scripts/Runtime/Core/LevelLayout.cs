using System;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// World-space layout of the Level 1 opening (castle portal + washer tunnel).
    /// Metres. +Z is the travel direction. The water surface rests at <see cref="waterLevel"/>.
    /// The castle aperture and the tunnel share one circular cross-section of radius
    /// <see cref="tunnelRadius"/> centred on the travel axis at <see cref="axisHeight"/> above the water.
    /// </summary>
    [Serializable]
    public class LevelLayout
    {
        [Header("Shared cross-section")]
        public float waterLevel = 0f;
        [Tooltip("Inner radius of the castle aperture and the washer tunnel.")]
        public float tunnelRadius = 2.5f;
        [Tooltip("Height of the tunnel axis above the water surface.")]
        public float axisHeight = 1.5f;
        [Tooltip("Clear radius inside the drum (the Meshy tunnel's paddle fins reach in to 80.6 % of the opening).")]
        public float clearRadius = 2.015f;

        [Header("Castle portal (filled by the level builder)")]
        public float castleFrontZ = 0f;
        public float castleBackZ = 5.71f;
        public float castleScale = 1f;

        [Header("Washer tunnel (filled by the level builder)")]
        public float tunnelStartZ = 3.90f;
        public float tunnelEndZ = 37.20f;
        public float segmentLength = 11.14f;
        public int segmentCount = 3;
        public bool usingPlaceholderTunnel = false;

        [Header("Second washer drum (Screens 7-9) and the finish (filled by the builder)")]
        public float drum2StartZ = 0f;
        public float drum2EndZ = 0f;
        [Tooltip("Where the run ends and Level Complete (Screen 12) appears.")]
        public float finishZ = 175f;

        [Header("Runner lanes")]
        public int laneCount = 3;
        public float laneSpacing = 0.85f;

        [Header("Start / loop")]
        [Tooltip("Where the mascot waits on the Screen 3 'Tap to Start' view.")]
        public float startZ = -16.7f;
        public float loopZ = 40.7f;

        public Vector3 AxisPoint(float z) => new Vector3(0f, waterLevel + axisHeight, z);

        /// <summary>True inside the castle portal or either washer drum (where the circular passage limits movement).</summary>
        public bool IsEnclosed(float z) =>
            (z >= castleFrontZ - 0.25f && z <= tunnelEndZ) ||
            (drum2EndZ > drum2StartZ && z >= drum2StartZ - 0.25f && z <= drum2EndZ);

        /// <summary>True inside either washer drum.</summary>
        public bool InDrum(float z) =>
            (z >= tunnelStartZ && z <= tunnelEndZ) || (drum2EndZ > drum2StartZ && z >= drum2StartZ && z <= drum2EndZ);

        /// <summary>Half-width of the clear circular passage at a height above the water (0 when outside the circle).</summary>
        public float PassageHalfWidth(float heightAboveWater)
        {
            float dy = heightAboveWater - axisHeight;
            float s = clearRadius * clearRadius - dy * dy;
            return s > 0f ? Mathf.Sqrt(s) : 0f;
        }

        public float LaneX(int lane)
        {
            float centre = (laneCount - 1) * 0.5f;
            return (lane - centre) * laneSpacing;
        }

        /// <summary>
        /// Clamp a world position so it stays inside the circular passage with the given clearance.
        /// Positions outside the enclosed z-range are returned unchanged.
        /// </summary>
        public Vector3 ClampInsidePassage(Vector3 p, float clearance)
        {
            if (!IsEnclosed(p.z)) return p;
            Vector2 fromAxis = new Vector2(p.x, p.y - (waterLevel + axisHeight));
            float max = Mathf.Max(0.05f, clearRadius - clearance);
            if (fromAxis.sqrMagnitude > max * max)
            {
                fromAxis = fromAxis.normalized * max;
                p.x = fromAxis.x;
                p.y = fromAxis.y + waterLevel + axisHeight;
            }
            return p;
        }
    }
}
