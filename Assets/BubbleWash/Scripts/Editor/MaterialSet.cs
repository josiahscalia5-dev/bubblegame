using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.Rendering.Universal;

namespace BubbleWash.EditorTools
{
    /// <summary>Creates (or refreshes) every generated material and the post-processing profile.</summary>
    public class MaterialSet
    {
        public Material water, mascotFur, brushFur, sockFur, duck, eye, white, cheek;
        public Material glowRing, endGlow, bubble, droplet, sparkle, sky;
        public Material coin, gem, rail, placeholderDrum;
        public Material castle, drum;
        public VolumeProfile postProfile;

        const string Dir = Level1SceneBuilder.GeneratedDir + "/Materials/";

        public void Create()
        {
            // Values here are starting points; BubbleWashLook (on Level1_WasherEntry) tunes them live.
            water = Mat("Water_ElectricBlue", "BubbleWash/Water", null);
            castle = Mat("Meshy_CastlePortal", "BubbleWash/MeshyBaked", m =>
            {
                m.SetFloat("_Saturation", 1.2f); m.SetFloat("_Brightness", 1.05f); m.SetFloat("_LightInfluence", 0.4f);
                m.SetFloat("_GlowThreshold", 0.85f); m.SetFloat("_GlowStrength", 0.8f);
                m.SetFloat("_Cull", 0f); // Meshy exports are double-sided
            });
            drum = Mat("Meshy_WasherDrum", "BubbleWash/MeshyBaked", m =>
            {
                m.SetFloat("_Saturation", 1.35f); m.SetFloat("_Contrast", 1.08f); m.SetFloat("_Brightness", 1.05f);
                m.SetFloat("_LightInfluence", 0.3f); m.SetFloat("_GlowThreshold", 0.72f); m.SetFloat("_GlowStrength", 2.2f);
                m.SetColor("_GlowTint", new Color(1f, 0.95f, 0.85f));
                m.SetFloat("_Cull", 0f);
            });
            mascotFur = Mat("PLACEHOLDER_MascotFur", "BubbleWash/FluffyToon", m =>
            {
                m.SetColor("_BaseColor", Color.white);
                m.SetColor("_TipColor", new Color(1f, 0.8f, 0.95f));
                m.SetColor("_RimColor", new Color(1f, 0.75f, 0.95f));
                m.SetFloat("_FuzzScale", 42f);
            });
            brushFur = Mat("PLACEHOLDER_BrushFur", "BubbleWash/FluffyToon", m =>
            {
                m.SetColor("_RimColor", new Color(1f, 0.9f, 1f));
                m.SetFloat("_FuzzScale", 18f);
                m.SetFloat("_FuzzStrength", 0.7f);
            });
            sockFur = Mat("PLACEHOLDER_SockKnit", "BubbleWash/FluffyToon", m =>
            {
                m.SetFloat("_FuzzScale", 60f);
                m.SetFloat("_FuzzStrength", 0.25f);
                m.SetFloat("_RimStrength", 0.45f);
                m.SetFloat("_Emission", 0.2f);
            });
            duck = Mat("PLACEHOLDER_RubberDuck", "Universal Render Pipeline/Lit", m =>
            {
                m.SetColor("_BaseColor", new Color(1f, 0.82f, 0.15f));
                m.SetFloat("_Smoothness", 0.8f);
            });
            eye = Lit("MascotEye", new Color(0.06f, 0.04f, 0.08f), 0f, 0.92f);
            white = Mat("Shine", "BubbleWash/Glow", m => { m.SetColor("_Color", new Color(1.4f, 1.4f, 1.4f)); m.SetFloat("_CoreBoost", 0.2f); });
            cheek = Lit("MascotCheek", new Color(1f, 0.55f, 0.72f), 0f, 0.4f);

            glowRing = Mat("GlowRing", "BubbleWash/Glow", m => { m.SetColor("_Color", new Color(2.6f, 2.0f, 0.95f)); m.SetFloat("_CoreBoost", 1.6f); });
            endGlow = Particle("DrumEndGlow", new Color(1.3f, 1.6f, 2.0f, 1f), 2f, additive: true);
            bubble = Mat("IridescentBubble", "BubbleWash/IridescentBubble", m => m.renderQueue = 3000);
            droplet = Particle("SplashDroplet", new Color(1f, 1f, 1f, 0.95f), 0f, additive: false);
            sparkle = Particle("Sparkle", new Color(1.6f, 1.5f, 1.2f, 1f), 1f, additive: true);
            sky = Mat("MagicSky", "BubbleWash/GradientSky", null);

            coin = Mat("PawCoin", "Universal Render Pipeline/Lit", m =>
            {
                m.SetTexture("_BaseMap", AssetDatabase.LoadAssetAtPath<Texture2D>(Level1SceneBuilder.Root + "/Textures/coin_paw_face.png"));
                m.SetColor("_BaseColor", Color.white);
                m.SetFloat("_Metallic", 0.75f);
                m.SetFloat("_Smoothness", 0.78f);
                Emissive(m, new Color(0.35f, 0.22f, 0.02f));
            });
            gem = Mat("PurpleGem", "Universal Render Pipeline/Lit", m =>
            {
                m.SetColor("_BaseColor", new Color(0.72f, 0.3f, 1f));
                m.SetFloat("_Metallic", 0.2f);
                m.SetFloat("_Smoothness", 0.95f);
                Emissive(m, new Color(0.45f, 0.1f, 0.75f));
            });
            rail = Lit("PLACEHOLDER_GoldRail", new Color(1f, 0.75f, 0.28f), 0.9f, 0.82f);
            placeholderDrum = Lit("PLACEHOLDER_WasherDrum", new Color(0.3f, 0.55f, 1f), 0.2f, 0.7f);

            postProfile = Profile();
            AssetDatabase.SaveAssets();
        }

        static Material Mat(string name, string shaderName, System.Action<Material> setup)
        {
            var shader = Shader.Find(shaderName);
            if (shader == null)
            {
                Debug.LogError($"[BubbleWash] Shader '{shaderName}' not found (is URP installed and the project using it?).");
                shader = Shader.Find("Universal Render Pipeline/Unlit") ?? Shader.Find("Hidden/InternalErrorShader");
            }
            string path = Dir + name + ".mat";
            var mat = AssetDatabase.LoadAssetAtPath<Material>(path);
            if (mat == null)
            {
                mat = new Material(shader) { name = name };
                AssetDatabase.CreateAsset(mat, path);
            }
            else mat.shader = shader;
            setup?.Invoke(mat);
            EditorUtility.SetDirty(mat);
            return mat;
        }

        static Material Lit(string name, Color c, float metallic, float smoothness) =>
            Mat(name, "Universal Render Pipeline/Lit", m =>
            {
                m.SetColor("_BaseColor", c);
                m.SetFloat("_Metallic", metallic);
                m.SetFloat("_Smoothness", smoothness);
            });

        static void Emissive(Material m, Color c)
        {
            m.EnableKeyword("_EMISSION");
            m.SetColor("_EmissionColor", c);
            m.globalIlluminationFlags = MaterialGlobalIlluminationFlags.RealtimeEmissive;
        }

        static Material Particle(string name, Color c, float shape, bool additive) =>
            Mat(name, "BubbleWash/SoftParticle", m =>
            {
                m.SetColor("_Color", c);
                m.SetFloat("_Shape", shape);
                m.SetFloat("_SrcBlend", additive ? (float)BlendMode.One : (float)BlendMode.SrcAlpha);
                m.SetFloat("_DstBlend", additive ? (float)BlendMode.One : (float)BlendMode.OneMinusSrcAlpha);
                m.renderQueue = 3000;
            });

        static VolumeProfile Profile()
        {
            string path = Level1SceneBuilder.GeneratedDir + "/Level1_PostFX.asset";
            var p = AssetDatabase.LoadAssetAtPath<VolumeProfile>(path);
            if (p == null)
            {
                p = ScriptableObject.CreateInstance<VolumeProfile>();
                AssetDatabase.CreateAsset(p, path);
            }
            for (int i = p.components.Count - 1; i >= 0; i--)
            {
                Object.DestroyImmediate(p.components[i], true);
            }
            p.components.Clear();

            var bloom = p.Add<Bloom>(true);
            bloom.threshold.value = 0.9f;
            bloom.intensity.value = 1.1f;
            bloom.scatter.value = 0.7f;
            bloom.tint.value = Color.white;
            var tone = p.Add<Tonemapping>(true);
            tone.mode.value = TonemappingMode.Neutral;
            var color = p.Add<ColorAdjustments>(true);
            color.postExposure.value = 0f;
            color.saturation.value = 25f;
            color.contrast.value = 12f;
            color.colorFilter.value = Color.white;
            var vig = p.Add<Vignette>(true);
            vig.intensity.value = 0.18f;
            vig.smoothness.value = 0.45f;
            vig.color.value = new Color(0.12f, 0.1f, 0.35f);
            foreach (var c in p.components)
            {
                if (!AssetDatabase.Contains(c)) AssetDatabase.AddObjectToAsset(c, p);
            }
            EditorUtility.SetDirty(p);
            return p;
        }
    }
}
