using NUnit.Framework;
using UnityEngine;

namespace BubbleWash.Tests
{
    public class GeometryTests
    {
        static void Data(Mesh m, out Vector3[] v, out int[] t)
        {
            v = m.vertices;
            t = m.triangles;
        }

        [Test]
        public void ApertureMeasurer_FindsTubeOpening()
        {
            var tube = ProceduralMeshes.WasherTube(1f, 0.3f, 2f, 48, 1.5f, 0f);
            Data(tube, out var v, out var t);
            var r = ApertureMeasurer.Measure(v, t, Vector3.forward, Vector3.up, 256);
            Assert.IsTrue(r.found, "no aperture");
            Assert.AreEqual(1f, r.radius, 0.04f);
            Assert.AreEqual(0f, r.centre.x, 0.02f);
            Assert.AreEqual(0f, r.centre.y, 0.02f);
            Object.DestroyImmediate(tube);
        }

        [Test]
        public void ApertureMeasurer_FindsRingOpening()
        {
            var ring = ProceduralMeshes.Torus(1f, 0.2f, 64, 12);
            Data(ring, out var v, out var t);
            var r = ApertureMeasurer.Measure(v, t, Vector3.forward, Vector3.up, 256);
            Assert.IsTrue(r.found);
            Assert.AreEqual(0.8f, r.radius, 0.04f);
            Object.DestroyImmediate(ring);
        }

        [Test]
        public void ModelAxis_DetectsMeshyStyleXLengthTunnel()
        {
            var tube = ProceduralMeshes.WasherTube(0.43f, 0.12f, 1.9f, 48, 1.5f, 0f);
            Data(tube, out var v, out var t);
            // Re-orient so the length runs along X like the Meshy export.
            var toX = Quaternion.Euler(0f, 90f, 0f);
            for (int i = 0; i < v.Length; i++) v[i] = toX * v[i];
            var axis = ModelAxis.DetectPassageAxis(v, t, PassageAxis.Auto, out var ap);
            Assert.AreEqual(PassageAxis.X, axis);
            Assert.AreEqual(0.43f, ap.radius, 0.03f);
            var mapped = ModelAxis.RotationToForward(axis) * Vector3.right;
            Assert.Less(Vector3.Distance(mapped, Vector3.forward), 1e-4f);
            Object.DestroyImmediate(tube);
        }

        [Test]
        public void TunnelChain_HasNoGaps()
        {
            var chain = TunnelChain.Layout(4.55f, 11.12f, 3, 0.06f);
            Assert.AreEqual(3, chain.Count);
            Assert.LessOrEqual(TunnelChain.MaxGap(chain), 0f);
            Assert.AreEqual(11.12f * 3 - 0.12f, TunnelChain.CoveredLength(chain), 1e-3f);
        }

        [Test]
        public void Lanes_FitInsideTheDrum()
        {
            var l = new LevelLayout();
            const float floatHeight = 0.34f, body = 0.4f;
            float half = l.PassageHalfWidth(floatHeight);
            for (int i = 0; i < l.laneCount; i++)
                Assert.Less(Mathf.Abs(l.LaneX(i)) + body, half + 0.01f, $"lane {i} exceeds the drum clearance");
        }

        [Test]
        public void Camera_IsClampedInsideThePassage()
        {
            var l = new LevelLayout();
            var p = l.ClampInsidePassage(new Vector3(0f, 10f, 10f), 0.4f);
            float r = new Vector2(p.x, p.y - l.axisHeight).magnitude;
            Assert.LessOrEqual(r, l.clearRadius - 0.4f + 1e-4f);
        }

        [Test]
        public void WaveField_RaisedPathStandsAboveTheMoat()
        {
            WaveField.Slide = new Vector4(2.0f, -0.6f, 0.12f, 3.9f);
            for (float z = -40f; z < 0f; z += 0.37f)
            {
                // On the raised path (lanes): gentle waves around the crowned surface.
                for (float x = -1.2f; x <= 1.2f; x += 0.4f)
                    Assert.Less(Mathf.Abs(WaveField.Height(x, z, 1.7f) - WaveField.SlideOffset(x, z)), 0.2f);
                // The moat beside the path sits about 0.6 m lower.
                Assert.Less(WaveField.Height(4f, z, 1.7f), WaveField.Height(0f, z, 1.7f) - 0.4f);
            }
            // Inside the drum the path offset is gone.
            Assert.AreEqual(0f, WaveField.SlideOffset(0f, 10f), 1e-5f);
        }

        [Test]
        public void Waterfall_FollowsItsBallisticCurveFromLipToLanding()
        {
            const float throwDistance = 0.7f, drop = 3.5f, top = 0.55f, bottom = 0.9f;
            const int across = 12, along = 30;
            var m = ProceduralMeshes.Waterfall(throwDistance, drop, top, bottom, 0.35f, across, along);
            var v = m.vertices; var uv = m.uv; var c = m.colors; var n = m.normals;
            Assert.AreEqual((across + 1) * (along + 1), v.Length);
            Assert.AreEqual(across * along * 6, m.triangles.Length);

            int mid = across / 2;
            // The middle of the first row sits on top of the lip (bulging up); the last row lands at (0, -drop, throw).
            Assert.Less(Vector3.Distance(v[mid], new Vector3(0f, top * 0.35f, 0f)), 1e-3f);
            int last = along * (across + 1);
            Vector3 Centre(int row) => (v[row * (across + 1)] + v[row * (across + 1) + across]) * 0.5f;
            Assert.Less(Vector3.Distance(Centre(along), new Vector3(0f, -drop, throwDistance)), 1e-3f);
            Assert.Greater(v[last + mid].z, throwDistance + 0.2f);   // the bulge faces outward at the bottom

            // The edges of each row are its width apart; UV.y runs along the fall; colour.r is the progress.
            Assert.AreEqual(top, Vector3.Distance(v[0], v[across]), 1e-3f);
            Assert.AreEqual(bottom, Vector3.Distance(v[last], v[last + across]), 1e-3f);
            for (int r = 1; r <= along; r++)
            {
                Assert.Greater(uv[r * (across + 1)].y, uv[(r - 1) * (across + 1)].y, "UV.y must increase down the fall");
                Assert.AreEqual((float)r / along, c[r * (across + 1)].r, 1e-4f);
            }
            // Rows are evenly spaced along the curve: each chord is at most the arc spacing, and only a few
            // per cent shorter where the fall bends sharply just past the lip.
            float rowGap = uv[last].y / along;
            for (int r = 1; r <= along; r++)
            {
                float chord = Vector3.Distance(Centre(r), Centre(r - 1));
                Assert.LessOrEqual(chord, rowGap * 1.002f, $"row {r}");
                Assert.GreaterOrEqual(chord, rowGap * 0.94f, $"row {r}");
            }
            foreach (var nn in n) Assert.AreEqual(1f, nn.magnitude, 1e-3f);
            Object.DestroyImmediate(m);
        }
    }
}
