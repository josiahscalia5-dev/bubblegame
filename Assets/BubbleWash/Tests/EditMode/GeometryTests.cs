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
        public void WaveField_StaysGentleOutsideTheDrum()
        {
            for (float z = -40f; z < 0f; z += 0.37f)
                for (float x = -3f; x <= 3f; x += 0.5f)
                    Assert.Less(Mathf.Abs(WaveField.Height(x, z, 1.7f)), 0.2f);
        }
    }
}
