using System;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

namespace BubbleWash
{
    public enum UiAnchor { TopLeft, TopRight, TopCentre, BottomLeft, BottomRight, BottomCentre, Centre, Stretch }

    /// <summary>
    /// Small helper for building the approved interface screens in uGUI. All sizes are in "board
    /// pixels" (each approved screen crop is ~537 px tall) multiplied by <see cref="U"/>, on a canvas
    /// that scales with screen height, the same convention as <see cref="GameHud"/>.
    /// </summary>
    public class UiKit
    {
        public const float U = GameHud.U;
        public static readonly Color Ink = new Color(0.08f, 0.16f, 0.48f, 1f);
        public static readonly Color DarkText = new Color(0.1f, 0.18f, 0.55f, 1f);
        public static readonly Color GreenText = new Color(0.12f, 0.6f, 0.2f, 1f);

        public readonly HudSprites s;
        public UiKit(HudSprites sprites) { s = sprites; }

        public static GameObject New(string name, Transform parent)
        {
            var go = new GameObject(name, typeof(RectTransform));
            go.layer = 5;
            go.transform.SetParent(parent, false);
            return go;
        }

        public static void Stretch(RectTransform rt)
        {
            rt.anchorMin = Vector2.zero; rt.anchorMax = Vector2.one;
            rt.offsetMin = Vector2.zero; rt.offsetMax = Vector2.zero;
        }

        /// <summary>Place a rect: x/y in board px from the anchor edge(s); y downward from the top or upward from the bottom.</summary>
        public static void Place(RectTransform rt, UiAnchor a, float x, float y, float w, float h)
        {
            if (a == UiAnchor.Stretch) { Stretch(rt); return; }
            Vector2 anchor, pivot, pos;
            switch (a)
            {
                case UiAnchor.TopRight: anchor = new Vector2(1, 1); pivot = new Vector2(1, 1); pos = new Vector2(-x, -y); break;
                case UiAnchor.TopCentre: anchor = new Vector2(0.5f, 1); pivot = new Vector2(0.5f, 1); pos = new Vector2(x, -y); break;
                case UiAnchor.BottomLeft: anchor = new Vector2(0, 0); pivot = new Vector2(0, 0); pos = new Vector2(x, y); break;
                case UiAnchor.BottomRight: anchor = new Vector2(1, 0); pivot = new Vector2(1, 0); pos = new Vector2(-x, y); break;
                case UiAnchor.BottomCentre: anchor = new Vector2(0.5f, 0); pivot = new Vector2(0.5f, 0); pos = new Vector2(x, y); break;
                case UiAnchor.Centre: anchor = new Vector2(0.5f, 0.5f); pivot = new Vector2(0.5f, 0.5f); pos = new Vector2(x, y); break;
                default: anchor = new Vector2(0, 1); pivot = new Vector2(0, 1); pos = new Vector2(x, -y); break;
            }
            rt.anchorMin = rt.anchorMax = anchor; rt.pivot = pivot;
            rt.anchoredPosition = pos * U; rt.sizeDelta = new Vector2(w, h) * U;
        }

        /// <summary>Place by fraction of the parent's width (x) with y from the bottom in board px (bottom nav items).</summary>
        public static void PlaceFraction(RectTransform rt, float xFraction, float yFromBottom, float w, float h)
        {
            rt.anchorMin = rt.anchorMax = new Vector2(xFraction, 0f);
            rt.pivot = new Vector2(0.5f, 0f);
            rt.anchoredPosition = new Vector2(0f, yFromBottom * U);
            rt.sizeDelta = new Vector2(w, h) * U;
        }

        public RectTransform Panel(Transform parent, string name, Sprite sprite, UiAnchor a, float x, float y, float w, float h, Color? tint = null)
        {
            var go = New(name, parent);
            var img = go.AddComponent<Image>();
            img.sprite = sprite; img.type = sprite != null && sprite.border != Vector4.zero ? Image.Type.Sliced : Image.Type.Simple;
            img.raycastTarget = false;
            if (tint.HasValue) img.color = tint.Value;
            var rt = (RectTransform)go.transform;
            Place(rt, a, x, y, w, h);
            return rt;
        }

        public Image Icon(Transform parent, Sprite sprite, UiAnchor a, float x, float y, float w, float h)
        {
            var go = New(sprite != null ? sprite.name : "Icon", parent);
            var img = go.AddComponent<Image>();
            img.sprite = sprite; img.preserveAspect = true; img.raycastTarget = false;
            Place((RectTransform)go.transform, a, x, y, w, h);
            return img;
        }

        public Text Label(Transform parent, string text, float size, TextAnchor align, UiAnchor a, float x, float y, float w, float h,
                          Color? color = null, bool outline = true)
        {
            var go = New("Text_" + (text.Length > 18 ? text.Substring(0, 18) : text).Replace(' ', '_'), parent);
            var t = go.AddComponent<Text>();
            t.font = s.font; t.text = text; t.fontSize = Mathf.RoundToInt(size * U);
            t.alignment = align; t.color = color ?? Color.white; t.raycastTarget = false; t.supportRichText = true;
            t.horizontalOverflow = HorizontalWrapMode.Overflow; t.verticalOverflow = VerticalWrapMode.Overflow;
            if (outline)
            {
                var o = go.AddComponent<Outline>(); o.effectColor = Ink; o.effectDistance = new Vector2(1.2f, -1.2f) * U;
                var sh = go.AddComponent<Shadow>(); sh.effectColor = new Color(Ink.r, Ink.g, Ink.b, 0.6f); sh.effectDistance = new Vector2(0f, -1.6f) * U;
            }
            Place((RectTransform)go.transform, a, x, y, w, h);
            return t;
        }

        public Button Button(Transform parent, string name, Sprite background, UiAnchor a, float x, float y, float w, float h, UnityAction onClick = null)
        {
            var go = New(name, parent);
            var img = go.AddComponent<Image>();
            img.sprite = background; img.type = background != null && background.border != Vector4.zero ? Image.Type.Sliced : Image.Type.Simple;
            Place((RectTransform)go.transform, a, x, y, w, h);
            var b = go.AddComponent<Button>();
            var colors = b.colors; colors.pressedColor = new Color(0.85f, 0.85f, 0.9f, 1f); b.colors = colors;
            if (onClick != null) b.onClick.AddListener(onClick);
            go.AddComponent<PressBounce>();
            return b;
        }

        /// <summary>The counters bar shown at the top of every approved screen (hearts, coins, gems).</summary>
        public void TopBar(Transform parent, out Text hearts, out Text coins, out Text gems)
        {
            var heart = Panel(parent, "Hearts", s.pillDark, UiAnchor.TopLeft, 12, 13, 70, 23);
            Icon(heart, s.heart, UiAnchor.TopLeft, -4, -2, 27, 26);
            hearts = Label(heart, "5 Full", 15, TextAnchor.MiddleLeft, UiAnchor.TopLeft, 28, 0, 34, 23);
            var plus = Icon(heart, s.plus, UiAnchor.TopLeft, 58, 5, 13, 13); plus.color = new Color(0.55f, 0.85f, 1f, 1f);
            var coin = Panel(parent, "Coins", s.pillDark, UiAnchor.TopLeft, 92, 14, 67, 22);
            Icon(coin, s.coin, UiAnchor.TopLeft, -1, -2, 25, 25);
            coins = Label(coin, "1,280", 15, TextAnchor.MiddleLeft, UiAnchor.TopLeft, 25, 0, 42, 22);
            var gem = Panel(parent, "Gems", s.pillDark, UiAnchor.TopLeft, 166, 14, 57, 22);
            Icon(gem, s.gem, UiAnchor.TopLeft, 0, -2, 27, 25);
            gems = Label(gem, "36", 15, TextAnchor.MiddleLeft, UiAnchor.TopLeft, 31, 0, 24, 22);
        }

        public static string HeartsText(int hearts) => hearts >= PlayerProgress.MaxHearts ? $"{hearts} <size={(int)(11 * U)}>Full</size>" : hearts.ToString();
        public static string Number(int n) => n.ToString("N0", System.Globalization.CultureInfo.InvariantCulture);
    }
}
