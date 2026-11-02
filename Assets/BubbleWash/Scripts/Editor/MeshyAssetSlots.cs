using System;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

namespace BubbleWash.EditorTools
{
    public enum PropSlot { Mascot, SpinningBrush, RescueSock, Coin, Gem, RubberDuck }
    public enum SizeAxis { Height, Width, Depth, Largest }

    /// <summary>One replaceable model in the level (the final Meshy asset for a placeholder).</summary>
    [Serializable]
    public class SlotEntry
    {
        public PropSlot slot;
        [Tooltip("Imported Meshy model. Leave empty to auto-use the first model found in the slot folder.")]
        public GameObject model;
        [Tooltip("Size the model is fitted to, in metres, matching the approved screens.")]
        public float targetSize = 1f;
        public SizeAxis sizeAxis = SizeAxis.Largest;
        [Tooltip("Rotation applied before fitting, so the model faces the right way (degrees).")]
        public Vector3 rotationOffset;
        [Tooltip("Shift after centring (metres).")]
        public Vector3 positionOffset;

        [Header("Mascot animation nodes (optional, child names in the model)")]
        public string armLeft = "";
        public string armRight = "";
        public string footLeft = "";
        public string footRight = "";
        public string eyes = "";
    }

    /// <summary>
    /// Where each upcoming Meshy model goes and how it is fitted. Asset: Assets/BubbleWash/Config/MeshyAssetSlots.asset.
    /// Workflow: drop the GLB into Assets/BubbleWash/Models/&lt;Slot&gt;/ (or drag it into the slot), adjust
    /// rotation/size if needed, then Bubble Wash > 1. Build Level 1 Scene.
    /// </summary>
    [CreateAssetMenu(menuName = "Bubble Wash/Meshy Asset Slots", fileName = "MeshyAssetSlots")]
    public class MeshyAssetSlots : ScriptableObject
    {
        public const string AssetPath = Level1SceneBuilder.Root + "/Config/MeshyAssetSlots.asset";
        public const string ModelsRoot = Level1SceneBuilder.Root + "/Models";

        public List<SlotEntry> slots = new List<SlotEntry>();

        public static string FolderFor(PropSlot slot) => $"{ModelsRoot}/{slot}";

        static readonly Dictionary<PropSlot, (float size, SizeAxis axis)> Defaults = new Dictionary<PropSlot, (float, SizeAxis)>
        {
            { PropSlot.Mascot, (1.04f, SizeAxis.Width) },          // arms-to-arms width that fits Screens 3/4
            { PropSlot.SpinningBrush, (2.0f, SizeAxis.Largest) },  // diameter at instance scale 1 (instances scale it)
            { PropSlot.RescueSock, (0.66f, SizeAxis.Height) },
            { PropSlot.Coin, (0.6f, SizeAxis.Largest) },
            { PropSlot.Gem, (0.42f, SizeAxis.Height) },
            { PropSlot.RubberDuck, (1.0f, SizeAxis.Largest) },     // instances scale it to the approved size
        };

        public static MeshyAssetSlots LoadOrCreate()
        {
            var slots = AssetDatabase.LoadAssetAtPath<MeshyAssetSlots>(AssetPath);
            if (slots == null)
            {
                Directory.CreateDirectory(Path.GetDirectoryName(AssetPath));
                slots = CreateInstance<MeshyAssetSlots>();
                AssetDatabase.CreateAsset(slots, AssetPath);
            }
            foreach (PropSlot s in Enum.GetValues(typeof(PropSlot)))
            {
                string folder = FolderFor(s);
                if (!AssetDatabase.IsValidFolder(folder)) AssetDatabase.CreateFolder(ModelsRoot, s.ToString());
                if (slots.slots.Exists(e => e.slot == s)) continue;
                var d = Defaults[s];
                slots.slots.Add(new SlotEntry { slot = s, targetSize = d.size, sizeAxis = d.axis });
            }
            EditorUtility.SetDirty(slots);
            return slots;
        }

        public SlotEntry Get(PropSlot slot) => slots.Find(e => e.slot == slot);

        /// <summary>The model for a slot: the assigned one, or the first model file in its folder.</summary>
        public GameObject ModelFor(PropSlot slot)
        {
            var e = Get(slot);
            if (e != null && e.model != null) return e.model;
            string folder = FolderFor(slot);
            if (!AssetDatabase.IsValidFolder(folder)) return null;
            foreach (var guid in AssetDatabase.FindAssets("t:GameObject", new[] { folder }))
            {
                var path = AssetDatabase.GUIDToAssetPath(guid);
                string ext = Path.GetExtension(path).ToLowerInvariant();
                if (ext == ".glb" || ext == ".gltf" || ext == ".fbx" || ext == ".prefab")
                    return AssetDatabase.LoadAssetAtPath<GameObject>(path);
            }
            return null;
        }
    }
}
