using UnityEngine;

namespace BubbleWash
{
    public enum PassageAxis { Auto = -1, X = 0, Y = 1, Z = 2 }

    /// <summary>
    /// Orientation helpers for imported Meshy models. Meshy exports the washer tunnel with its
    /// length along X, while the game travels along Unity +Z, so tunnel pieces are rotated
    /// before they are chained.
    /// </summary>
    public static class ModelAxis
    {
        public static Vector3 AxisVector(PassageAxis axis)
        {
            switch (axis)
            {
                case PassageAxis.X: return Vector3.right;
                case PassageAxis.Y: return Vector3.up;
                default: return Vector3.forward;
            }
        }

        /// <summary>Rotation that maps the model's local <paramref name="axis"/> onto world +Z, keeping +Y up where possible.</summary>
        public static Quaternion RotationToForward(PassageAxis axis)
        {
            switch (axis)
            {
                case PassageAxis.X: return Quaternion.Euler(0f, -90f, 0f); // +X -> +Z
                case PassageAxis.Y: return Quaternion.Euler(90f, 0f, 0f);  // +Y -> +Z
                default: return Quaternion.identity;
            }
        }

        /// <summary>Longest bounds axis. Only a fallback: <see cref="ApertureMeasurer"/> is the reliable test.</summary>
        public static PassageAxis LongestAxis(Bounds b)
        {
            Vector3 s = b.size;
            if (s.x >= s.y && s.x >= s.z) return PassageAxis.X;
            if (s.y >= s.x && s.y >= s.z) return PassageAxis.Y;
            return PassageAxis.Z;
        }

        /// <summary>A stable "up" vector to use when looking down <paramref name="axis"/>.</summary>
        public static Vector3 UpFor(PassageAxis axis) => axis == PassageAxis.Y ? Vector3.forward : Vector3.up;

        /// <summary>
        /// Finds the axis you can see straight through (the tunnel's length axis) by measuring the
        /// aperture along each local axis and keeping the largest opening. <paramref name="preferred"/>
        /// wins ties within 5 %.
        /// </summary>
        public static PassageAxis DetectPassageAxis(Vector3[] vertices, int[] triangles, PassageAxis preferred, out ApertureMeasurer.Result best)
        {
            best = default;
            PassageAxis bestAxis = preferred == PassageAxis.Auto ? PassageAxis.Z : preferred;
            float bestR = -1f;
            for (int a = 0; a < 3; a++)
            {
                var axis = (PassageAxis)a;
                var r = ApertureMeasurer.Measure(vertices, triangles, AxisVector(axis), UpFor(axis), 256);
                if (!r.found) continue;
                float score = r.radius * (axis == preferred ? 1.05f : 1f);
                if (score > bestR) { bestR = score; bestAxis = axis; best = r; }
            }
            return bestAxis;
        }
    }
}
