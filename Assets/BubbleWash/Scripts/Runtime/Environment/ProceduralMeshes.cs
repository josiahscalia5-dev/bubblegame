using System.Collections.Generic;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Mesh generators for the environment pieces that have no Meshy model yet, plus the water,
    /// glow rings and collectibles. Anything named PLACEHOLDER_ in the scene is built from here.
    /// </summary>
    public static class ProceduralMeshes
    {
        /// <summary>
        /// Open washer-drum tube along +Z from z=0 to z=length. Inner surface faces the axis.
        /// UV.x = angle (0..1), UV.y = metres along the tube. Vertex colour.r marks rib crests.
        /// </summary>
        public static Mesh WasherTube(float innerRadius, float wall, float length, int radial = 56, float ribSpacing = 1.5f, float ribDepth = 0.06f)
        {
            int rings = Mathf.Max(2, Mathf.CeilToInt(length / 0.25f) + 1);
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var c = new List<Color>();
            var t = new List<int>();
            float outer = innerRadius + wall;

            // Inner wall with gentle ribs.
            for (int r = 0; r < rings; r++)
            {
                float z = length * r / (rings - 1);
                float ribPhase = Mathf.Repeat(z / ribSpacing, 1f);
                float rib = Mathf.SmoothStep(0f, 1f, 1f - Mathf.Abs(ribPhase - 0.5f) * 2f);
                float rad = innerRadius - ribDepth * Mathf.Pow(rib, 6f);
                for (int s = 0; s <= radial; s++)
                {
                    float a = 2f * Mathf.PI * s / radial;
                    var dir = new Vector3(Mathf.Cos(a), Mathf.Sin(a), 0f);
                    v.Add(dir * rad + Vector3.forward * z);
                    n.Add(-dir);
                    uv.Add(new Vector2((float)s / radial, z));
                    c.Add(new Color(Mathf.Pow(rib, 6f), 0f, 0f, 1f));
                }
            }
            for (int r = 0; r < rings - 1; r++)
                for (int s = 0; s < radial; s++)
                {
                    int a = r * (radial + 1) + s, b = a + radial + 1;
                    t.Add(a); t.Add(b); t.Add(a + 1);
                    t.Add(b); t.Add(b + 1); t.Add(a + 1);
                }

            // Outer shell (two rings are enough, it is hidden behind the castle and in fog).
            int baseOuter = v.Count;
            for (int r = 0; r < 2; r++)
                for (int s = 0; s <= radial; s++)
                {
                    float a = 2f * Mathf.PI * s / radial;
                    var dir = new Vector3(Mathf.Cos(a), Mathf.Sin(a), 0f);
                    v.Add(dir * outer + Vector3.forward * (r * length));
                    n.Add(dir); uv.Add(new Vector2((float)s / radial, r * length)); c.Add(new Color(0f, 1f, 0f, 1f));
                }
            for (int s = 0; s < radial; s++)
            {
                int a = baseOuter + s, b = a + radial + 1;
                t.Add(a); t.Add(a + 1); t.Add(b);
                t.Add(b); t.Add(a + 1); t.Add(b + 1);
            }

            // End lips (annulus at each end) so the wall thickness reads at the joints.
            for (int end = 0; end < 2; end++)
            {
                float z = end * length;
                Vector3 normal = end == 0 ? Vector3.back : Vector3.forward;
                int b0 = v.Count;
                for (int s = 0; s <= radial; s++)
                {
                    float a = 2f * Mathf.PI * s / radial;
                    var dir = new Vector3(Mathf.Cos(a), Mathf.Sin(a), 0f);
                    v.Add(dir * innerRadius + Vector3.forward * z); n.Add(normal); uv.Add(new Vector2((float)s / radial, z)); c.Add(new Color(0f, 0f, 1f, 1f));
                    v.Add(dir * outer + Vector3.forward * z); n.Add(normal); uv.Add(new Vector2((float)s / radial, z)); c.Add(new Color(0f, 0f, 1f, 1f));
                }
                for (int s = 0; s < radial; s++)
                {
                    int i0 = b0 + s * 2, i1 = i0 + 1, i2 = i0 + 2, i3 = i0 + 3;
                    if (end == 0) { t.Add(i0); t.Add(i2); t.Add(i1); t.Add(i2); t.Add(i3); t.Add(i1); }
                    else { t.Add(i0); t.Add(i1); t.Add(i2); t.Add(i2); t.Add(i1); t.Add(i3); }
                }
            }
            return Build("PLACEHOLDER_WasherTube", v, n, uv, c, t);
        }

        /// <summary>Torus in the XY plane (axis = +Z). Used for the glowing rings and gold trims.</summary>
        public static Mesh Torus(float radius, float tube, int major = 64, int minor = 10, string name = "GlowRing")
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var c = new List<Color>(); var t = new List<int>();
            for (int i = 0; i <= major; i++)
            {
                float a = 2f * Mathf.PI * i / major;
                var dir = new Vector3(Mathf.Cos(a), Mathf.Sin(a), 0f);
                for (int j = 0; j <= minor; j++)
                {
                    float b = 2f * Mathf.PI * j / minor;
                    Vector3 nn = dir * Mathf.Cos(b) + Vector3.forward * Mathf.Sin(b);
                    v.Add(dir * radius + nn * tube); n.Add(nn);
                    uv.Add(new Vector2((float)i / major, (float)j / minor)); c.Add(Color.white);
                }
            }
            for (int i = 0; i < major; i++)
                for (int j = 0; j < minor; j++)
                {
                    int a = i * (minor + 1) + j, b = a + minor + 1;
                    t.Add(a); t.Add(b); t.Add(a + 1);
                    t.Add(b); t.Add(b + 1); t.Add(a + 1);
                }
            return Build(name, v, n, uv, c, t);
        }

        /// <summary>
        /// Water sheet. Width follows <paramref name="halfWidthAtZ"/> so it is a wide moat in front of
        /// the castle and a channel inside the drum. Columns are denser near the centre lane.
        /// </summary>
        public static Mesh WaterSheet(float zStart, float zEnd, float rowSpacing, int columns, System.Func<float, float> halfWidthAtZ)
        {
            return WaterSheet(zStart, zEnd, rowSpacing, columns, z =>
            {
                float hw = halfWidthAtZ(z);
                var xs = new float[columns + 1];
                for (int s = 0; s <= columns; s++)
                {
                    float u = (float)s / columns * 2f - 1f;
                    xs[s] = Mathf.Sign(u) * Mathf.Pow(Mathf.Abs(u), 1.8f) * hw; // dense in the middle
                }
                return xs;
            });
        }

        /// <summary>
        /// Water sheet with explicit column positions per row (<paramref name="columnsAtZ"/> must return
        /// <paramref name="columns"/>+1 sorted x values), so the raised path can be dense while the moat is sparse.
        /// </summary>
        public static Mesh WaterSheet(float zStart, float zEnd, float rowSpacing, int columns, System.Func<float, float[]> columnsAtZ)
        {
            int rows = Mathf.Max(2, Mathf.CeilToInt((zEnd - zStart) / rowSpacing) + 1);
            columns = Mathf.Max(4, columns);
            var v = new List<Vector3>(rows * (columns + 1)); var n = new List<Vector3>(); var uv = new List<Vector2>(); var c = new List<Color>(); var t = new List<int>();
            for (int r = 0; r < rows; r++)
            {
                float z = Mathf.Lerp(zStart, zEnd, (float)r / (rows - 1));
                var xs = columnsAtZ(z);
                for (int s = 0; s <= columns; s++)
                {
                    float x = xs[s];
                    v.Add(new Vector3(x, 0f, z)); n.Add(Vector3.up);
                    uv.Add(new Vector2(x, z)); c.Add(new Color((float)s / columns, 0f, 0f, 1f));
                }
            }
            for (int r = 0; r < rows - 1; r++)
                for (int s = 0; s < columns; s++)
                {
                    int a = r * (columns + 1) + s, b = a + columns + 1;
                    t.Add(a); t.Add(b); t.Add(a + 1);
                    t.Add(b); t.Add(b + 1); t.Add(a + 1);
                }
            var mesh = Build("WaterSheet", v, n, uv, c, t);
            // Waves move vertices up to ~0.5 m on the GPU; keep culling generous.
            var bounds = mesh.bounds; bounds.Expand(new Vector3(0f, 1.5f, 0f)); mesh.bounds = bounds;
            return mesh;
        }

        /// <summary>
        /// Fluffy ball: an icosphere with noisy tufts. Vertex colour carries a tip factor (alpha) the
        /// fluffy shader uses for lighter fur tips.
        /// </summary>
        public static Mesh FluffBall(float radius, int subdivisions, float tuft, int seed, Color baseColor, Color tipColor, string name)
        {
            Icosphere(subdivisions, out var verts, out var tris);
            var rnd = new System.Random(seed);
            var offs = new Vector3((float)rnd.NextDouble() * 100f, (float)rnd.NextDouble() * 100f, (float)rnd.NextDouble() * 100f);
            var v = new List<Vector3>(verts.Count); var n = new List<Vector3>(); var uv = new List<Vector2>(); var c = new List<Color>();
            foreach (var d in verts)
            {
                float big = Noise3(d * 3.1f + offs);
                float fine = Noise3(d * 9.7f + offs * 1.7f);
                float tip = Mathf.Clamp01(0.55f * big + 0.65f * fine);
                float r = radius * (1f + tuft * (tip - 0.45f));
                v.Add(d * r); n.Add(d);
                uv.Add(new Vector2(Mathf.Atan2(d.x, d.z) / (2f * Mathf.PI) + 0.5f, d.y * 0.5f + 0.5f));
                var col = Color.Lerp(baseColor, tipColor, tip * tip);
                col.a = tip;
                c.Add(col);
            }
            var mesh = Build(name, v, n, uv, c, new List<int>(tris));
            mesh.RecalculateNormals();
            // Blend recalculated normals with sphere normals so the fur keeps a soft round shading.
            var rn = mesh.normals;
            for (int i = 0; i < rn.Length; i++) rn[i] = Vector3.Slerp(verts[i], rn[i], 0.45f).normalized;
            mesh.normals = rn;
            return mesh;
        }

        /// <summary>
        /// Round spinning brush (car-wash style) whose bristle face points -Z: blue hub, layered fluffy rim in
        /// <paramref name="rimColor"/>. Spins around its local Z.
        /// </summary>
        public static Mesh BrushWheel(float radius, float depth, Color hubColor, Color rimColor, int seed)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var c = new List<Color>(); var t = new List<int>();
            const int seg = 48, rings = 7;
            var rnd = new System.Random(seed);
            float phase = (float)rnd.NextDouble() * 10f;
            for (int ring = 0; ring <= rings; ring++)
            {
                float rr = (float)ring / rings;                       // 0 centre .. 1 rim
                for (int s = 0; s <= seg; s++)
                {
                    float a = 2f * Mathf.PI * s / seg;
                    float tuft = 1f + 0.10f * Mathf.Sin(a * 14f + phase) * rr + 0.05f * Mathf.Sin(a * 37f) * rr;
                    float r = radius * rr * tuft;
                    float bulge = depth * (0.5f + 0.5f * Mathf.Cos(rr * Mathf.PI * 0.9f)); // dome profile
                    var dir = new Vector3(Mathf.Cos(a), Mathf.Sin(a), 0f);
                    v.Add(dir * r + Vector3.back * bulge);
                    var nn = (Vector3.back * (1.2f - rr) + dir * rr).normalized;
                    n.Add(nn);
                    uv.Add(new Vector2((float)s / seg, rr));
                    // concentric blue/pink bands like the approved brushes
                    float band = Mathf.Repeat(rr * 3.2f, 1f);
                    var col = rr < 0.32f ? hubColor : (band > 0.55f ? rimColor : Color.Lerp(rimColor, Color.white, 0.55f));
                    if (rr > 0.85f) col = Color.Lerp(rimColor, Color.white, 0.35f);
                    col.a = Mathf.Clamp01(rr * 1.2f);
                    c.Add(col);
                }
            }
            for (int ring = 0; ring < rings; ring++)
                for (int s = 0; s < seg; s++)
                {
                    int a = ring * (seg + 1) + s, b = a + seg + 1;
                    t.Add(a); t.Add(a + 1); t.Add(b);
                    t.Add(b); t.Add(a + 1); t.Add(b + 1);
                }
            // back cap so the brush is solid from behind
            int centreBack = v.Count;
            v.Add(Vector3.forward * depth * 0.3f); n.Add(Vector3.forward); uv.Add(Vector2.zero); c.Add(hubColor);
            int rimStart = rings * (seg + 1);
            for (int s = 0; s < seg; s++) { t.Add(centreBack); t.Add(rimStart + s); t.Add(rimStart + s + 1); }
            return Build("PLACEHOLDER_BrushWheel", v, n, uv, c, t);
        }

        /// <summary>Coin: flat cylinder around Z; both faces carry the paw texture (UV 0..1).</summary>
        public static Mesh Coin(float radius, float thickness, int seg = 40)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var c = new List<Color>(); var t = new List<int>();
            float h = thickness * 0.5f;
            for (int face = 0; face < 2; face++)
            {
                float z = face == 0 ? -h : h;
                Vector3 nn = face == 0 ? Vector3.back : Vector3.forward;
                int centre = v.Count;
                v.Add(new Vector3(0, 0, z)); n.Add(nn); uv.Add(new Vector2(0.5f, 0.5f)); c.Add(Color.white);
                for (int s = 0; s <= seg; s++)
                {
                    float a = 2f * Mathf.PI * s / seg;
                    float x = Mathf.Cos(a), y = Mathf.Sin(a);
                    v.Add(new Vector3(x * radius, y * radius, z)); n.Add(nn);
                    uv.Add(new Vector2(0.5f + (face == 0 ? x : -x) * 0.5f, 0.5f + y * 0.5f)); c.Add(Color.white);
                }
                for (int s = 0; s < seg; s++)
                {
                    if (face == 0) { t.Add(centre); t.Add(centre + s + 2); t.Add(centre + s + 1); }
                    else { t.Add(centre); t.Add(centre + s + 1); t.Add(centre + s + 2); }
                }
            }
            int rim = v.Count;
            for (int s = 0; s <= seg; s++)
            {
                float a = 2f * Mathf.PI * s / seg;
                var dir = new Vector3(Mathf.Cos(a), Mathf.Sin(a), 0);
                v.Add(dir * radius + Vector3.back * h); n.Add(dir); uv.Add(new Vector2(0.02f, 0.5f)); c.Add(new Color(1, 1, 1, 0));
                v.Add(dir * radius + Vector3.forward * h); n.Add(dir); uv.Add(new Vector2(0.02f, 0.5f)); c.Add(new Color(1, 1, 1, 0));
            }
            for (int s = 0; s < seg; s++)
            {
                int a = rim + s * 2;
                t.Add(a); t.Add(a + 2); t.Add(a + 1);
                t.Add(a + 2); t.Add(a + 3); t.Add(a + 1);
            }
            return Build("Coin", v, n, uv, c, t);
        }

        /// <summary>Brilliant-cut style gem, pointing down, flat table on top.</summary>
        public static Mesh Gem(float radius, float height)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var c = new List<Color>(); var t = new List<int>();
            const int sides = 8;
            float crown = height * 0.32f, table = radius * 0.55f;
            Vector3 tip = new Vector3(0, -height * 0.68f, 0);
            for (int s = 0; s < sides; s++)
            {
                float a0 = 2f * Mathf.PI * s / sides, a1 = 2f * Mathf.PI * (s + 1) / sides;
                Vector3 g0 = new Vector3(Mathf.Cos(a0) * radius, 0, Mathf.Sin(a0) * radius);
                Vector3 g1 = new Vector3(Mathf.Cos(a1) * radius, 0, Mathf.Sin(a1) * radius);
                Vector3 t0 = new Vector3(Mathf.Cos(a0) * table, crown, Mathf.Sin(a0) * table);
                Vector3 t1 = new Vector3(Mathf.Cos(a1) * table, crown, Mathf.Sin(a1) * table);
                AddTri(v, n, uv, c, t, g0, tip, g1, s % 2 == 0 ? 0.85f : 1f);
                AddTri(v, n, uv, c, t, g0, g1, t0, 1f);
                AddTri(v, n, uv, c, t, t0, g1, t1, 0.9f);
                AddTri(v, n, uv, c, t, t0, t1, new Vector3(0, crown, 0), 1.1f);
            }
            return Build("Gem", v, n, uv, c, t, recalcNormals: false);
        }

        /// <summary>Sock buddy placeholder: leg + foot capsule chain in vertex colours (white with purple stripes).</summary>
        public static Mesh SockBody(Color body, Color stripe, Color heel)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var c = new List<Color>(); var t = new List<int>();
            const int seg = 24, rows = 22;
            // Path: vertical leg then curving forward into the foot.
            for (int r = 0; r <= rows; r++)
            {
                float k = (float)r / rows;
                Vector3 centre; Vector3 forward;
                if (k < 0.62f)
                {
                    float y = Mathf.Lerp(0.55f, 0.08f, k / 0.62f);
                    centre = new Vector3(0, y, 0); forward = Vector3.down;
                }
                else
                {
                    float q = (k - 0.62f) / 0.38f;
                    float ang = q * Mathf.PI * 0.5f;
                    centre = new Vector3(0, 0.08f - Mathf.Sin(ang) * 0.02f, Mathf.Sin(ang) * 0.30f);
                    forward = new Vector3(0, -Mathf.Cos(ang), Mathf.Sin(ang)).normalized;
                }
                float radius = k < 0.05f ? Mathf.Lerp(0.15f, 0.17f, k / 0.05f) : (k > 0.94f ? Mathf.Lerp(0.16f, 0.02f, (k - 0.94f) / 0.06f) : 0.16f);
                Vector3 side = Vector3.right;
                Vector3 up = Vector3.Cross(forward, side).normalized;
                for (int s = 0; s <= seg; s++)
                {
                    float a = 2f * Mathf.PI * s / seg;
                    Vector3 dir = side * Mathf.Cos(a) + up * Mathf.Sin(a);
                    v.Add(centre + dir * radius); n.Add(dir); uv.Add(new Vector2((float)s / seg, k));
                    Color col = body;
                    if (k < 0.30f && Mathf.Repeat(k * 20f, 2f) > 1.15f) col = stripe; // stripes on the cuff
                    if (k > 0.88f) col = heel;                                          // coloured toe
                    c.Add(col);
                }
            }
            for (int r = 0; r < rows; r++)
                for (int s = 0; s < seg; s++)
                {
                    int a = r * (seg + 1) + s, b = a + seg + 1;
                    t.Add(a); t.Add(a + 1); t.Add(b);
                    t.Add(b); t.Add(a + 1); t.Add(b + 1);
                }
            return Build("PLACEHOLDER_SockBody", v, n, uv, c, t, recalcNormals: true);
        }

        /// <summary>
        /// Falling-water ribbon: starts at the origin and falls <paramref name="height"/> metres, curving
        /// <paramref name="outward"/> metres toward -Z (toward the viewer) as it falls. UV.x across, UV.y down.
        /// </summary>
        public static Mesh WaterfallRibbon(float width, float height, float outward, int rows = 14)
        {
            var v = new List<Vector3>(); var n = new List<Vector3>(); var uv = new List<Vector2>(); var c = new List<Color>(); var t = new List<int>();
            for (int r = 0; r <= rows; r++)
            {
                float k = (float)r / rows;
                float w = width * (0.8f + 0.4f * k);              // spreads as it falls
                float z = -outward * Mathf.Sqrt(k);
                float y = -height * k;
                for (int s = 0; s <= 1; s++)
                {
                    v.Add(new Vector3((s - 0.5f) * w, y, z)); n.Add(Vector3.back);
                    uv.Add(new Vector2(s, k)); c.Add(Color.white);
                }
            }
            for (int r = 0; r < rows; r++)
            {
                int a = r * 2;
                t.Add(a); t.Add(a + 2); t.Add(a + 1);
                t.Add(a + 1); t.Add(a + 2); t.Add(a + 3);
            }
            var mesh = Build("WaterfallRibbon", v, n, uv, c, t);
            return mesh;
        }

        /// <summary>Flat disc facing +Z, used for the bright light at the far end of the drum.</summary>
        public static Mesh Disc(float radius, int seg = 48)
        {
            var v = new List<Vector3> { Vector3.zero }; var n = new List<Vector3> { Vector3.back };
            var uv = new List<Vector2> { new Vector2(0.5f, 0.5f) }; var c = new List<Color> { Color.white }; var t = new List<int>();
            for (int s = 0; s <= seg; s++)
            {
                float a = 2f * Mathf.PI * s / seg;
                v.Add(new Vector3(Mathf.Cos(a), Mathf.Sin(a), 0) * radius); n.Add(Vector3.back);
                uv.Add(new Vector2(0.5f + Mathf.Cos(a) * 0.5f, 0.5f + Mathf.Sin(a) * 0.5f)); c.Add(new Color(1, 1, 1, 0));
            }
            for (int s = 0; s < seg; s++) { t.Add(0); t.Add(s + 2); t.Add(s + 1); }
            return Build("Disc", v, n, uv, c, t);
        }

        // ---------------------------------------------------------------- helpers

        static void AddTri(List<Vector3> v, List<Vector3> n, List<Vector2> uv, List<Color> c, List<int> t, Vector3 a, Vector3 b, Vector3 d, float shade)
        {
            // Callers list corners counter-clockwise seen from outside; Unity front faces are clockwise.
            Vector3 nn = Vector3.Cross(d - a, b - a).normalized;
            int i = v.Count;
            v.Add(a); v.Add(b); v.Add(d);
            n.Add(nn); n.Add(nn); n.Add(nn);
            uv.Add(new Vector2(0, 0)); uv.Add(new Vector2(1, 0)); uv.Add(new Vector2(0.5f, 1));
            var col = new Color(shade, shade, shade, 1f);
            c.Add(col); c.Add(col); c.Add(col);
            t.Add(i); t.Add(i + 2); t.Add(i + 1);
        }

        static Mesh Build(string name, List<Vector3> v, List<Vector3> n, List<Vector2> uv, List<Color> c, List<int> t, bool recalcNormals = false)
        {
            var mesh = new Mesh { name = name };
            if (v.Count > 65000) mesh.indexFormat = UnityEngine.Rendering.IndexFormat.UInt32;
            mesh.SetVertices(v);
            mesh.SetNormals(n);
            mesh.SetUVs(0, uv);
            mesh.SetColors(c);
            mesh.SetTriangles(t, 0);
            if (recalcNormals) mesh.RecalculateNormals();
            mesh.RecalculateBounds();
            mesh.RecalculateTangents();
            return mesh;
        }

        static void Icosphere(int subdivisions, out List<Vector3> verts, out List<int> tris)
        {
            float p = (1f + Mathf.Sqrt(5f)) * 0.5f;
            verts = new List<Vector3>
            {
                new Vector3(-1, p, 0), new Vector3(1, p, 0), new Vector3(-1, -p, 0), new Vector3(1, -p, 0),
                new Vector3(0, -1, p), new Vector3(0, 1, p), new Vector3(0, -1, -p), new Vector3(0, 1, -p),
                new Vector3(p, 0, -1), new Vector3(p, 0, 1), new Vector3(-p, 0, -1), new Vector3(-p, 0, 1),
            };
            for (int i = 0; i < verts.Count; i++) verts[i] = verts[i].normalized;
            tris = new List<int>
            {
                0,11,5, 0,5,1, 0,1,7, 0,7,10, 0,10,11, 1,5,9, 5,11,4, 11,10,2, 10,7,6, 7,1,8,
                3,9,4, 3,4,2, 3,2,6, 3,6,8, 3,8,9, 4,9,5, 2,4,11, 6,2,10, 8,6,7, 9,8,1,
            };
            for (int s = 0; s < subdivisions; s++)
            {
                var cache = new Dictionary<long, int>();
                var next = new List<int>(tris.Count * 4);
                for (int i = 0; i < tris.Count; i += 3)
                {
                    int a = tris[i], b = tris[i + 1], c = tris[i + 2];
                    int ab = Mid(a, b, verts, cache), bc = Mid(b, c, verts, cache), ca = Mid(c, a, verts, cache);
                    next.AddRange(new[] { a, ab, ca, b, bc, ab, c, ca, bc, ab, bc, ca });
                }
                tris = next;
            }
        }

        static int Mid(int a, int b, List<Vector3> verts, Dictionary<long, int> cache)
        {
            long key = a < b ? ((long)a << 32) | (uint)b : ((long)b << 32) | (uint)a;
            if (cache.TryGetValue(key, out int idx)) return idx;
            verts.Add(((verts[a] + verts[b]) * 0.5f).normalized);
            cache[key] = verts.Count - 1;
            return verts.Count - 1;
        }

        /// <summary>Smooth value noise in [0,1].</summary>
        public static float Noise3(Vector3 p)
        {
            Vector3 i = new Vector3(Mathf.Floor(p.x), Mathf.Floor(p.y), Mathf.Floor(p.z));
            Vector3 f = p - i;
            f = new Vector3(f.x * f.x * (3 - 2 * f.x), f.y * f.y * (3 - 2 * f.y), f.z * f.z * (3 - 2 * f.z));
            float n000 = Hash(i), n100 = Hash(i + Vector3.right), n010 = Hash(i + Vector3.up), n110 = Hash(i + new Vector3(1, 1, 0));
            float n001 = Hash(i + Vector3.forward), n101 = Hash(i + new Vector3(1, 0, 1)), n011 = Hash(i + new Vector3(0, 1, 1)), n111 = Hash(i + Vector3.one);
            float x00 = Mathf.Lerp(n000, n100, f.x), x10 = Mathf.Lerp(n010, n110, f.x);
            float x01 = Mathf.Lerp(n001, n101, f.x), x11 = Mathf.Lerp(n011, n111, f.x);
            return Mathf.Lerp(Mathf.Lerp(x00, x10, f.y), Mathf.Lerp(x01, x11, f.y), f.z);
        }

        static float Hash(Vector3 p)
        {
            float h = Mathf.Sin(p.x * 127.1f + p.y * 311.7f + p.z * 74.7f) * 43758.5453f;
            return h - Mathf.Floor(h);
        }
    }
}
