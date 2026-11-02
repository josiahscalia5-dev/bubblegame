using UnityEditor;
using UnityEngine;

namespace BubbleWash.EditorTools
{
    /// <summary>
    /// Instantiates the final Meshy model for a slot, fitted to the size the approved screens need and
    /// centred on its parent, or returns null so the caller builds the labelled placeholder instead.
    /// </summary>
    public static class PropFactory
    {
        static MeshyAssetSlots _slots;

        public static void Begin() => _slots = MeshyAssetSlots.LoadOrCreate();

        public static bool Has(PropSlot slot) => (_slots ?? (_slots = MeshyAssetSlots.LoadOrCreate())).ModelFor(slot) != null;

        public static GameObject Create(PropSlot slot, Transform parent)
        {
            _slots ??= MeshyAssetSlots.LoadOrCreate();
            var model = _slots.ModelFor(slot);
            if (model == null) return null;
            var entry = _slots.Get(slot);

            var holder = new GameObject($"{slot} (Meshy: {model.name})");
            holder.transform.SetParent(parent, false);
            var inst = (GameObject)PrefabUtility.InstantiatePrefab(model);
            inst.transform.SetParent(holder.transform, false);
            inst.transform.localPosition = Vector3.zero;
            inst.transform.localRotation = Quaternion.Euler(entry.rotationOffset);
            inst.transform.localScale = Vector3.one;

            // Fit: measure in the holder's space.
            var b = LocalBounds(holder.transform);
            float measured = entry.sizeAxis switch
            {
                SizeAxis.Height => b.size.y,
                SizeAxis.Width => b.size.x,
                SizeAxis.Depth => b.size.z,
                _ => Mathf.Max(b.size.x, Mathf.Max(b.size.y, b.size.z)),
            };
            float scale = measured > 1e-5f ? entry.targetSize / measured : 1f;
            inst.transform.localScale = Vector3.one * scale;
            b = LocalBounds(holder.transform);
            inst.transform.localPosition -= b.center - entry.positionOffset;
            foreach (var r in holder.GetComponentsInChildren<Renderer>()) r.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            return holder;
        }

        /// <summary>Find a child by (case-insensitive) name anywhere below <paramref name="root"/>.</summary>
        public static Transform FindChild(Transform root, string name)
        {
            if (string.IsNullOrEmpty(name)) return null;
            foreach (var t in root.GetComponentsInChildren<Transform>(true))
                if (string.Equals(t.name, name, System.StringComparison.OrdinalIgnoreCase)) return t;
            return null;
        }

        static Bounds LocalBounds(Transform holder)
        {
            var rends = holder.GetComponentsInChildren<Renderer>();
            var inv = holder.worldToLocalMatrix;
            bool any = false;
            var b = new Bounds();
            foreach (var r in rends)
            {
                var wb = r.bounds;
                for (int i = 0; i < 8; i++)
                {
                    var corner = wb.center + Vector3.Scale(wb.extents, new Vector3((i & 1) == 0 ? -1 : 1, (i & 2) == 0 ? -1 : 1, (i & 4) == 0 ? -1 : 1));
                    var p = inv.MultiplyPoint3x4(corner);
                    if (!any) { b = new Bounds(p, Vector3.zero); any = true; } else b.Encapsulate(p);
                }
            }
            return b;
        }
    }
}
