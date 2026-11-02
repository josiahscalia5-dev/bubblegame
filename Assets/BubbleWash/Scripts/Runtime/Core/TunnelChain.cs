using System.Collections.Generic;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Places modular tunnel segments end to end along +Z. Adjacent segments overlap by a small
    /// amount so the joints never show a crack, even when the Meshy end faces are not perfectly flat.
    /// </summary>
    public static class TunnelChain
    {
        public struct Placement
        {
            public float startZ;   // front face of the segment
            public float endZ;     // back face of the segment
            public float CentreZ => 0.5f * (startZ + endZ);
        }

        public static List<Placement> Layout(float firstStartZ, float segmentLength, int count, float overlap)
        {
            overlap = Mathf.Clamp(overlap, 0f, segmentLength * 0.25f);
            var list = new List<Placement>(count);
            float z = firstStartZ;
            for (int i = 0; i < count; i++)
            {
                list.Add(new Placement { startZ = z, endZ = z + segmentLength });
                z += segmentLength - overlap;
            }
            return list;
        }

        /// <summary>Largest gap between consecutive segments (negative = overlap). Used by validation.</summary>
        public static float MaxGap(IList<Placement> chain)
        {
            float worst = float.NegativeInfinity;
            for (int i = 1; i < chain.Count; i++)
                worst = Mathf.Max(worst, chain[i].startZ - chain[i - 1].endZ);
            return chain.Count > 1 ? worst : 0f;
        }

        /// <summary>Total covered length from the first front face to the last back face.</summary>
        public static float CoveredLength(IList<Placement> chain) =>
            chain.Count == 0 ? 0f : chain[chain.Count - 1].endZ - chain[0].startZ;
    }
}
