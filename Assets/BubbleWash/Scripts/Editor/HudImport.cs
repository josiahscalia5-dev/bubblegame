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
            ("button_green", new Vector4(48, 47, 48, 47)), ("card_cream", new Vector4(58, 58, 58, 58)),
            ("panel_row", new Vector4(38, 38, 38, 38)), ("panel_white", new Vector4(46, 46, 46, 46)),
            ("panel_red", new Vector4(62, 62, 62, 62)), ("nav_bar", new Vector4(32, 32, 32, 32)),
            ("logo", Vector4.zero), ("crown", Vector4.zero), ("star_full", Vector4.zero), ("star_empty", Vector4.zero),
            ("check", Vector4.zero), ("lock", Vector4.zero), ("warning", Vector4.zero), ("play_triangle", Vector4.zero),
            ("arrow_down_pink", Vector4.zero), ("nav_levels", Vector4.zero), ("nav_characters", Vector4.zero), ("nav_shop", Vector4.zero),
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
                logo = S("logo"), crown = S("crown"), buttonGreen = S("button_green"), cardCream = S("card_cream"),
                panelRow = S("panel_row"), panelWhite = S("panel_white"), panelRed = S("panel_red"), navBar = S("nav_bar"),
                starFull = S("star_full"), starEmpty = S("star_empty"), check = S("check"), lockIcon = S("lock"),
                warning = S("warning"), playTriangle = S("play_triangle"), arrowDownPink = S("arrow_down_pink"),
                navLevels = S("nav_levels"), navCharacters = S("nav_characters"), navShop = S("nav_shop"),
            };
        }
    }
}
