using UnityEditor;
using UnityEngine;

namespace BubbleWash.EditorTools
{
    /// <summary>Import settings for the HUD sprites (9-slice borders) and loading them into a <see cref="HudSprites"/> set.</summary>
    public static class HudImport
    {
        const string Dir = Level1SceneBuilder.Root + "/UI/Sprites/";
        const string FontPath = Level1SceneBuilder.Root + "/UI/Fonts/Fredoka-Bold.ttf";

        // name -> 9-slice border (left, bottom, right, top) in pixels, zero for plain icons
        static readonly (string name, Vector4 border)[] Sprites =
        {
            ("panel_blue", new Vector4(64, 64, 64, 64)),
            ("button_square", new Vector4(52, 52, 52, 52)),
            ("pill_dark", new Vector4(32, 31, 32, 31)),
            ("progress_track", new Vector4(20, 19, 20, 19)),
            ("progress_fill", new Vector4(20, 19, 20, 19)),
            ("button_round", Vector4.zero), ("badge", Vector4.zero),
            ("heart", Vector4.zero), ("coin", Vector4.zero), ("gem", Vector4.zero), ("gear", Vector4.zero),
            ("pause", Vector4.zero), ("plus", Vector4.zero), ("arrow_left", Vector4.zero), ("arrow_right", Vector4.zero),
            ("hand", Vector4.zero), ("sock", Vector4.zero), ("bubble_blast", Vector4.zero), ("turbo_spin", Vector4.zero),
        };

        public static void ConfigureSprites()
        {
            foreach (var (name, border) in Sprites)
            {
                string path = Dir + name + ".png";
                var ti = AssetImporter.GetAtPath(path) as TextureImporter;
                if (ti == null) { Debug.LogWarning("[BubbleWash] Missing HUD sprite " + path + " (run Tools/generate_ui_sprites.py)"); continue; }
                bool changed = ti.textureType != TextureImporterType.Sprite || ti.spriteBorder != border || ti.mipmapEnabled;
                if (!changed) continue;
                ti.textureType = TextureImporterType.Sprite;
                ti.spriteImportMode = SpriteImportMode.Single;
                ti.spriteBorder = border;
                ti.alphaIsTransparency = true;
                ti.mipmapEnabled = false;
                ti.SaveAndReimport();
            }
        }

        public static HudSprites LoadSprites()
        {
            Sprite S(string n) => AssetDatabase.LoadAssetAtPath<Sprite>(Dir + n + ".png");
            return new HudSprites
            {
                font = AssetDatabase.LoadAssetAtPath<Font>(FontPath),
                pillDark = S("pill_dark"), panelBlue = S("panel_blue"), buttonRound = S("button_round"), buttonSquare = S("button_square"),
                heart = S("heart"), coin = S("coin"), gem = S("gem"), gear = S("gear"), pause = S("pause"), plus = S("plus"),
                arrowLeft = S("arrow_left"), arrowRight = S("arrow_right"), hand = S("hand"),
                sock = S("sock"), bubbleBlast = S("bubble_blast"), turboSpin = S("turbo_spin"),
                badge = S("badge"), progressTrack = S("progress_track"), progressFill = S("progress_fill"),
            };
        }
    }
}
