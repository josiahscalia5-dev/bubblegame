using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

namespace BubbleWash
{
    /// <summary>
    /// One place to tune the look of Screens 3 and 4 against the approved images: water colours and
    /// foam, the tower waterfalls, drum ring glow, Meshy model saturation/glow, bloom, colour grading,
    /// fog and ambient light.
    /// Changes apply immediately in the editor and in Play mode (they are written to the generated
    /// materials, so they persist). Select "Level1_WasherEntry" in the Hierarchy to find it.
    /// </summary>
    [ExecuteAlways]
    public class BubbleWashLook : MonoBehaviour
    {
        [Header("Materials (assigned by the builder)")]
        public Material water;
        public Material waterfall;
        public Material castle;
        public Material drum;
        public Material glowRing;
        public VolumeProfile post;
        public Light sun;

        [Header("Water - intense electric blue")]
        public Color deepWater = new Color(0.0f, 0.24f, 0.92f);
        public Color shallowWater = new Color(0.0f, 0.58f, 1.0f);
        public Color electricGlow = new Color(0.2f, 0.88f, 1.0f);
        [Range(0f, 2f)] public float waterEmission = 0.4f;
        [Range(0f, 2f)] public float foam = 1f;
        [Range(0f, 1.5f)] public float foamLace = 0.55f;
        [Range(0f, 2f)] public float caustics = 0.7f;
        [Range(0f, 2f)] public float reflections = 0.9f;
        [Range(0f, 4f)] public float ringReflections = 1.6f;

        [Header("Tower waterfalls (Screen 3)")]
        public Color waterfallDeep = new Color(0.0f, 0.32f, 1.0f);
        public Color waterfallBright = new Color(0.25f, 0.86f, 1.0f);
        [Range(0f, 1f)] public float waterfallOpacity = 0.82f;
        [Range(0f, 2f)] public float waterfallFoam = 1f;
        [Range(0f, 3f)] public float waterfallEmission = 0.8f;
        [Tooltip("Speed the water leaves the spouts (m/s); it speeds up under gravity as it falls.")]
        public float waterfallSpeed = 1.2f;

        [Header("Meshy castle (baked texture)")]
        [Range(0f, 2f)] public float castleSaturation = 1.2f;
        [Range(0f, 2f)] public float castleBrightness = 1.05f;
        [Range(0f, 1f)] public float castleSceneLight = 0.4f;
        [Range(0f, 6f)] public float castleGlow = 0.8f;

        [Header("Meshy drum (baked texture)")]
        [Range(0f, 2f)] public float drumSaturation = 1.35f;
        [Range(0f, 2f)] public float drumBrightness = 1.05f;
        [Range(0f, 1f)] public float drumSceneLight = 0.3f;
        [Range(0f, 1f)] public float drumGlowThreshold = 0.72f;
        [Range(0f, 6f)] public float drumGlow = 2.2f;

        [Header("Glowing drum rings")]
        [Range(0f, 6f)] public float ringIntensity = 1.6f;

        [Header("Post-processing")]
        [Range(0f, 3f)] public float bloomIntensity = 1.1f;
        [Range(0f, 2f)] public float bloomThreshold = 0.9f;
        [Range(-100f, 100f)] public float saturation = 25f;
        [Range(-100f, 100f)] public float contrast = 12f;
        [Range(-2f, 2f)] public float exposure = 0f;

        [Header("Atmosphere")]
        public Color fogColor = new Color(0.8f, 0.8f, 1.0f);
        public float fogStart = 40f;
        public float fogEnd = 160f;
        [Range(0f, 2f)] public float ambientIntensity = 0.9f;
        [Range(0f, 3f)] public float sunIntensity = 1.25f;

        void OnEnable() => Apply();
        void OnValidate() => Apply();

        public void Apply()
        {
            if (water != null)
            {
                water.SetColor("_DeepColor", deepWater);
                water.SetColor("_ShallowColor", shallowWater);
                water.SetColor("_GlowColor", electricGlow);
                water.SetFloat("_Emission", waterEmission);
                water.SetFloat("_FoamAmount", foam);
                water.SetFloat("_LaceAmount", foamLace);
                water.SetFloat("_Caustics", caustics);
                water.SetFloat("_Reflection", reflections);
                water.SetFloat("_RingReflection", ringReflections);
            }
            if (waterfall != null)
            {
                waterfall.SetColor("_DeepColor", waterfallDeep);
                waterfall.SetColor("_BrightColor", waterfallBright);
                waterfall.SetFloat("_Opacity", waterfallOpacity);
                waterfall.SetFloat("_FoamAmount", waterfallFoam);
                waterfall.SetFloat("_Emission", waterfallEmission);
                waterfall.SetFloat("_LipSpeed", waterfallSpeed);
            }
            Meshy(castle, castleSaturation, castleBrightness, castleSceneLight, 0.85f, castleGlow);
            Meshy(drum, drumSaturation, drumBrightness, drumSceneLight, drumGlowThreshold, drumGlow);
            if (glowRing != null) glowRing.SetFloat("_CoreBoost", ringIntensity);

            if (post != null)
            {
                if (post.TryGet(out Bloom bloom)) { bloom.intensity.value = bloomIntensity; bloom.threshold.value = bloomThreshold; }
                if (post.TryGet(out ColorAdjustments ca)) { ca.saturation.value = saturation; ca.contrast.value = contrast; ca.postExposure.value = exposure; }
            }
            RenderSettings.fogColor = fogColor;
            RenderSettings.fogStartDistance = fogStart;
            RenderSettings.fogEndDistance = fogEnd;
            RenderSettings.ambientIntensity = ambientIntensity;
            if (sun != null) sun.intensity = sunIntensity;
        }

        static void Meshy(Material m, float sat, float bright, float light, float threshold, float glow)
        {
            if (m == null) return;
            m.SetFloat("_Saturation", sat);
            m.SetFloat("_Brightness", bright);
            m.SetFloat("_LightInfluence", light);
            m.SetFloat("_GlowThreshold", threshold);
            m.SetFloat("_GlowStrength", glow);
        }
    }
}
