using System.Collections.Generic;
using Unity.Collections;
using UnityEngine;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// Collects the triangles of every mesh under a model root, expressed in that root's local space.
    /// Uses Mesh.AcquireReadOnlyMeshData so it also works when the importer did not enable Read/Write.
    /// </summary>
    public static class MeshSampler
    {
        public static void Collect(GameObject root, out Vector3[] vertices, out int[] triangles)
        {
            var verts = new List<Vector3>();
            var tris = new List<int>();
            Matrix4x4 toRoot = root.transform.worldToLocalMatrix;
            foreach (var mf in root.GetComponentsInChildren<MeshFilter>(true))
            {
                var mesh = mf.sharedMesh;
                if (mesh == null) continue;
                Matrix4x4 m = toRoot * mf.transform.localToWorldMatrix;
                int baseIndex = verts.Count;
                Mesh.MeshDataArray dataArray;
                try { dataArray = Mesh.AcquireReadOnlyMeshData(mesh); }
                catch (System.Exception e)
                {
                    Debug.LogWarning($"[BubbleWash] Cannot read mesh '{mesh.name}' ({e.Message}); stored measurements will be used.");
                    continue;
                }
                using (dataArray)
                {
                    var data = dataArray[0];
                    using (var v = new NativeArray<Vector3>(data.vertexCount, Allocator.Temp))
                    {
                        data.GetVertices(v);
                        for (int i = 0; i < v.Length; i++) verts.Add(m.MultiplyPoint3x4(v[i]));
                    }
                    for (int s = 0; s < data.subMeshCount; s++)
                    {
                        var sub = data.GetSubMesh(s);
                        if (sub.topology != MeshTopology.Triangles) continue;
                        using (var idx = new NativeArray<int>(sub.indexCount, Allocator.Temp))
                        {
                            data.GetIndices(idx, s);
                            for (int i = 0; i < idx.Length; i++) tris.Add(baseIndex + idx[i]);
                        }
                    }
                }
            }
            vertices = verts.ToArray();
            triangles = tris.ToArray();
        }

        /// <summary>Triangles whose three corners all lie within [min, max] along <paramref name="axis"/>.</summary>
        public static int[] TrianglesInSlab(Vector3[] vertices, int[] triangles, Vector3 axis, float min, float max)
        {
            var list = new List<int>();
            for (int t = 0; t + 2 < triangles.Length; t += 3)
            {
                float a = Vector3.Dot(vertices[triangles[t]], axis);
                float b = Vector3.Dot(vertices[triangles[t + 1]], axis);
                float c = Vector3.Dot(vertices[triangles[t + 2]], axis);
                if (a >= min && a <= max && b >= min && b <= max && c >= min && c <= max)
                {
                    list.Add(triangles[t]); list.Add(triangles[t + 1]); list.Add(triangles[t + 2]);
                }
            }
            return list.ToArray();
        }

        public static Bounds BoundsOf(Vector3[] vertices)
        {
            if (vertices.Length == 0) return new Bounds();
            var b = new Bounds(vertices[0], Vector3.zero);
            for (int i = 1; i < vertices.Length; i++) b.Encapsulate(vertices[i]);
            return b;
        }
    }
}
