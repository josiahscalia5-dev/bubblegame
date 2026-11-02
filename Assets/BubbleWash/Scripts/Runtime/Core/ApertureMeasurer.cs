using System;
using System.Collections.Generic;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Measures the see-through opening of a model (castle portal, tunnel ring) by rasterising
    /// its triangles along a viewing axis and finding the largest circle that fits in the hole.
    /// Pure math so it runs in edit mode, at build time and in EditMode tests.
    /// </summary>
    public static class ApertureMeasurer
    {
        public struct Result
        {
            public bool found;
            /// <summary>Centre of the inscribed circle in the projection plane (x = right, y = up).</summary>
            public Vector2 centre;
            public float radius;
            /// <summary>Bounds of the whole silhouette in the projection plane.</summary>
            public Rect silhouette;
            /// <summary>Depth range (along the viewing axis) of the whole mesh.</summary>
            public Vector2 depthRange;
            public float cellSize;

            public override string ToString() =>
                found ? $"centre=({centre.x:F4},{centre.y:F4}) r={radius:F4} silhouette={silhouette} depth={depthRange}"
                      : "no aperture found";
        }

        /// <summary>
        /// Project <paramref name="vertices"/> onto the plane perpendicular to <paramref name="viewAxis"/>
        /// and find the largest hole circle. <paramref name="up"/> defines the plane's y direction.
        /// </summary>
        public static Result Measure(IList<Vector3> vertices, IList<int> triangles, Vector3 viewAxis, Vector3 up, int resolution = 384)
        {
            viewAxis = viewAxis.normalized;
            Vector3 right = Vector3.Cross(up, viewAxis).normalized;
            if (right.sqrMagnitude < 1e-6f) throw new ArgumentException("up must not be parallel to viewAxis");
            Vector3 trueUp = Vector3.Cross(viewAxis, right).normalized;

            int n = vertices.Count;
            var p = new Vector2[n];
            float minX = float.MaxValue, minY = float.MaxValue, maxX = float.MinValue, maxY = float.MinValue;
            float minD = float.MaxValue, maxD = float.MinValue;
            for (int i = 0; i < n; i++)
            {
                Vector3 v = vertices[i];
                float x = Vector3.Dot(v, right), y = Vector3.Dot(v, trueUp), d = Vector3.Dot(v, viewAxis);
                p[i] = new Vector2(x, y);
                if (x < minX) minX = x; if (x > maxX) maxX = x;
                if (y < minY) minY = y; if (y > maxY) maxY = y;
                if (d < minD) minD = d; if (d > maxD) maxD = d;
            }

            var result = new Result
            {
                silhouette = Rect.MinMaxRect(minX, minY, maxX, maxY),
                depthRange = new Vector2(minD, maxD),
            };
            if (n == 0) return result;

            float cell = Mathf.Max(maxX - minX, maxY - minY) / Mathf.Max(16, resolution);
            int w = Mathf.CeilToInt((maxX - minX) / cell) + 3;
            int h = Mathf.CeilToInt((maxY - minY) / cell) + 3;
            float ox = minX - cell, oy = minY - cell;
            result.cellSize = cell;

            var occ = Rasterise(p, triangles, w, h, ox, oy, cell);

            // A hole cell is free and has occupied cells to its left, right and above.
            var leftOcc = new bool[w * h];
            var rightOcc = new bool[w * h];
            var aboveOcc = new bool[w * h];
            for (int y = 0; y < h; y++)
            {
                bool seen = false;
                for (int x = 0; x < w; x++) { int i = y * w + x; leftOcc[i] = seen; seen |= occ[i]; }
                seen = false;
                for (int x = w - 1; x >= 0; x--) { int i = y * w + x; rightOcc[i] = seen; seen |= occ[i]; }
            }
            for (int x = 0; x < w; x++)
            {
                bool seen = false;
                for (int y = h - 1; y >= 0; y--) { int i = y * w + x; aboveOcc[i] = seen; seen |= occ[i]; }
            }

            float[] dist2 = SquaredDistanceToOccupied(occ, w, h);
            float best = -1f; int bestI = -1;
            for (int i = 0; i < w * h; i++)
            {
                if (occ[i] || !leftOcc[i] || !rightOcc[i] || !aboveOcc[i]) continue;
                if (dist2[i] > best) { best = dist2[i]; bestI = i; }
            }
            if (bestI < 0) return result;

            int bx = bestI % w, by = bestI / w;
            result.found = true;
            result.centre = new Vector2(ox + (bx + 0.5f) * cell, oy + (by + 0.5f) * cell);
            result.radius = Mathf.Max(0f, Mathf.Sqrt(best) * cell - 0.5f * cell);
            return result;
        }

        /// <summary>
        /// Depth range of the geometry that forms the rim of an aperture (vertices whose projected
        /// distance from the centre is within <paramref name="tolerance"/> × radius of the radius).
        /// </summary>
        public static Vector2 RimDepthRange(IList<Vector3> vertices, Vector3 viewAxis, Vector3 up, Result aperture, float tolerance = 0.04f)
        {
            viewAxis = viewAxis.normalized;
            Vector3 right = Vector3.Cross(up, viewAxis).normalized;
            Vector3 trueUp = Vector3.Cross(viewAxis, right).normalized;
            float lo = float.MaxValue, hi = float.MinValue;
            float tol = Mathf.Max(aperture.radius * tolerance, aperture.cellSize * 2f);
            for (int i = 0; i < vertices.Count; i++)
            {
                Vector3 v = vertices[i];
                var q = new Vector2(Vector3.Dot(v, right), Vector3.Dot(v, trueUp));
                if (Mathf.Abs((q - aperture.centre).magnitude - aperture.radius) > tol) continue;
                float d = Vector3.Dot(v, viewAxis);
                if (d < lo) lo = d; if (d > hi) hi = d;
            }
            return lo <= hi ? new Vector2(lo, hi) : aperture.depthRange;
        }

        static bool[] Rasterise(Vector2[] p, IList<int> tris, int w, int h, float ox, float oy, float cell)
        {
            var occ = new bool[w * h];
            float inv = 1f / cell;
            for (int t = 0; t + 2 < tris.Count; t += 3)
            {
                Vector2 a = p[tris[t]], b = p[tris[t + 1]], c = p[tris[t + 2]];
                float area = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
                if (Mathf.Abs(area) < 1e-12f) continue; // edge-on triangle
                int x0 = Mathf.Max(0, Mathf.FloorToInt((Mathf.Min(a.x, Mathf.Min(b.x, c.x)) - ox) * inv));
                int x1 = Mathf.Min(w - 1, Mathf.CeilToInt((Mathf.Max(a.x, Mathf.Max(b.x, c.x)) - ox) * inv));
                int y0 = Mathf.Max(0, Mathf.FloorToInt((Mathf.Min(a.y, Mathf.Min(b.y, c.y)) - oy) * inv));
                int y1 = Mathf.Min(h - 1, Mathf.CeilToInt((Mathf.Max(a.y, Mathf.Max(b.y, c.y)) - oy) * inv));
                float sign = area > 0 ? 1f : -1f;
                for (int y = y0; y <= y1; y++)
                {
                    float py = oy + (y + 0.5f) * cell;
                    for (int x = x0; x <= x1; x++)
                    {
                        float px = ox + (x + 0.5f) * cell;
                        float e0 = ((b.x - a.x) * (py - a.y) - (b.y - a.y) * (px - a.x)) * sign;
                        float e1 = ((c.x - b.x) * (py - b.y) - (c.y - b.y) * (px - b.x)) * sign;
                        float e2 = ((a.x - c.x) * (py - c.y) - (a.y - c.y) * (px - c.x)) * sign;
                        if (e0 >= 0 && e1 >= 0 && e2 >= 0) occ[y * w + x] = true;
                    }
                }
            }
            return occ;
        }

        /// <summary>Exact squared Euclidean distance transform (Felzenszwalb &amp; Huttenlocher), in cells.</summary>
        static float[] SquaredDistanceToOccupied(bool[] occ, int w, int h)
        {
            // Finite "infinity": larger than any real squared distance on the grid, small enough to stay exact in double.
            double inf = 2.0 * ((double)w * w + (double)h * h) + 1.0;
            var grid = new double[w * h];
            for (int i = 0; i < grid.Length; i++) grid[i] = occ[i] ? 0.0 : inf;

            int m = Mathf.Max(w, h);
            var f = new double[m]; var d = new double[m]; var v = new int[m]; var z = new double[m + 1];
            for (int x = 0; x < w; x++)
            {
                for (int y = 0; y < h; y++) f[y] = grid[y * w + x];
                Edt1D(f, h, d, v, z);
                for (int y = 0; y < h; y++) grid[y * w + x] = d[y];
            }
            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++) f[x] = grid[y * w + x];
                Edt1D(f, w, d, v, z);
                for (int x = 0; x < w; x++) grid[y * w + x] = d[x];
            }
            var result = new float[w * h];
            for (int i = 0; i < result.Length; i++) result[i] = (float)grid[i];
            return result;
        }

        /// <summary>1-D squared distance transform: lower envelope of parabolas rooted at (q, f[q]).</summary>
        static void Edt1D(double[] f, int n, double[] d, int[] v, double[] z)
        {
            int k = 0;
            v[0] = 0; z[0] = double.NegativeInfinity; z[1] = double.PositiveInfinity;
            for (int q = 1; q < n; q++)
            {
                double s = Intersect(f, q, v[k]);
                while (s <= z[k]) { k--; s = Intersect(f, q, v[k]); }
                k++;
                v[k] = q; z[k] = s; z[k + 1] = double.PositiveInfinity;
            }
            k = 0;
            for (int q = 0; q < n; q++)
            {
                while (z[k + 1] < q) k++;
                int r = v[k];
                d[q] = (double)(q - r) * (q - r) + f[r];
            }
        }

        static double Intersect(double[] f, int q, int r) =>
            ((f[q] + (double)q * q) - (f[r] + (double)r * r)) / (2.0 * q - 2.0 * r);
    }
}
