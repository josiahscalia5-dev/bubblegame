using UnityEngine;
using UnityEngine.UI;

namespace BubbleWash
{
    /// <summary>
    /// The approved Screen 3 / Screen 4 HUD built with uGUI. Layout values are measured from the
    /// approved crops in "board pixels" (each approved screen is ~537 px tall) and scaled by
    /// <see cref="U"/>, with the canvas scaling by screen height like the approved board.
    ///
    /// Intro (Screen 3): counters + settings gear, "Let's go! Into the washing machine!" banner,
    /// "Swipe Left or Right to Move / Tap to Start" panel.
    /// Running (Screen 4): counters, "Rescue 5 lost socks 0/5" mission panel, pause,
    /// Bubble Blast and Turbo Spin buttons with "3" badges.
    /// </summary>
    public class GameHud : MonoBehaviour
    {
        public const float U = 4f;                         // board px -> reference px
        public static readonly Vector2 ReferenceResolution = new Vector2(269 * U, 537 * U);

        public HudSprites sprites = new HudSprites();
        public BubbleRunner runner;

        [Header("Built hierarchy (filled by Build)")]
        public RectTransform root;
        public Text heartsText, coinsText, gemsText, socksText, blastBadgeText, turboBadgeText;
        public Image socksFill;
        public GameObject introGroup, runningGroup, gearButton, pauseButton;
        public Button pause, blast, turbo;
        public GameObject pausedOverlay;

        static readonly Color Ink = new Color(0.08f, 0.16f, 0.48f, 1f);      // dark blue text outline
        static readonly Color Gold = new Color(1f, 0.86f, 0.3f, 1f);

        GameSession _session;

        void Start()
        {
            if (root == null) Build();
            _session = GameSession.Active;
            if (_session != null)
            {
                _session.Changed += Refresh;
                _session.PhaseChanged += OnPhase;
            }
            if (pause) pause.onClick.AddListener(() => { if (GameSession.Active != null) GameSession.Active.TogglePause(); });
            if (blast) blast.onClick.AddListener(() => { if (runner) runner.UseBubbleBlast(); });
            if (turbo) turbo.onClick.AddListener(() => { if (runner) runner.UseTurboSpin(); });
            Refresh();
            OnPhase(_session != null ? _session.Phase : RunPhase.Intro);
        }

        void OnDestroy()
        {
            if (_session != null) { _session.Changed -= Refresh; _session.PhaseChanged -= OnPhase; }
        }

        public void OnPhase(RunPhase phase) => ShowScreen(phase == RunPhase.Intro ? 3 : 4, phase == RunPhase.Paused);

        /// <summary>Show the Screen 3 (intro) or Screen 4 (running) HUD.</summary>
        public void ShowScreen(int screen, bool paused = false)
        {
            if (introGroup) introGroup.SetActive(screen == 3);
            if (gearButton) gearButton.SetActive(screen == 3);
            if (runningGroup) runningGroup.SetActive(screen != 3);
            if (pausedOverlay) pausedOverlay.SetActive(paused);
        }

        public void Refresh()
        {
            var s = _session != null ? _session : GameSession.Active;
            if (s == null) return;
            if (heartsText) heartsText.text = s.hearts >= s.maxHearts ? $"{s.hearts} <size={(int)(11 * U)}>Full</size>" : s.hearts.ToString();
            if (coinsText) coinsText.text = s.coins.ToString("N0", System.Globalization.CultureInfo.InvariantCulture);
            if (gemsText) gemsText.text = s.gems.ToString();
            if (socksText) socksText.text = $"{s.socksRescued}/{s.socksGoal}";
            if (socksFill) socksFill.fillAmount = s.socksGoal > 0 ? (float)s.socksRescued / s.socksGoal : 0f;
            if (blastBadgeText) blastBadgeText.text = s.bubbleBlasts.ToString();
            if (turboBadgeText) turboBadgeText.text = s.turboSpins.ToString();
        }

        // ------------------------------------------------------------------ construction

        /// <summary>Create the HUD hierarchy under this object's Canvas. Safe to call in edit mode.</summary>
        public void Build()
        {
            for (int i = transform.childCount - 1; i >= 0; i--)
            {
                var child = transform.GetChild(i).gameObject;
                if (Application.isPlaying) Destroy(child); else DestroyImmediate(child);
            }
            root = (RectTransform)transform;

            // ---- top bar (both screens): x positions measured from the left edge of the approved crops
            var heart = Pill("Hearts", 12, 13, 70, 23);
            Icon(heart, sprites.heart, -4, -2, 27, 26);
            heartsText = Label(heart, "5 Full", 15, TextAnchor.MiddleLeft, 28, 0, 34, 23);
            heartsText.supportRichText = true;
            var plus = Icon(heart, sprites.plus, 58, 5, 13, 13);
            plus.color = new Color(0.55f, 0.85f, 1f, 1f);

            var coin = Pill("Coins", 92, 14, 67, 22);
            Icon(coin, sprites.coin, -1, -2, 25, 25);
            coinsText = Label(coin, "1,280", 15, TextAnchor.MiddleLeft, 25, 0, 42, 22);

            var gem = Pill("Gems", 166, 14, 57, 22);
            Icon(gem, sprites.gem, 0, -2, 27, 25);
            gemsText = Label(gem, "36", 15, TextAnchor.MiddleLeft, 31, 0, 24, 22);

            // ---- Screen 3 only
            gearButton = RoundButton("SettingsGear", sprites.buttonRound, sprites.gear, 226, 12, 27, 27, anchorRight: false).gameObject;

            introGroup = Group("Screen3_Intro");
            var banner = Panel(introGroup.transform, "LetsGoBanner", sprites.panelBlue, Anchor.TopCentre, 0, 82, 205, 70);
            Label(banner, "Let's go!", 30, TextAnchor.MiddleCenter, 0, 5, 205, 36);
            Label(banner, "Into the washing machine!", 16, TextAnchor.MiddleCenter, 0, 39, 205, 24);

            var start = Panel(introGroup.transform, "SwipeTapPanel", sprites.panelBlue, Anchor.BottomCentre, 0, 28, 237, 100);
            Label(start, "Swipe Left or Right", 17, TextAnchor.MiddleCenter, 0, 9, 237, 22);
            Label(start, "to Move", 17, TextAnchor.MiddleCenter, 0, 27, 237, 22);
            Label(start, "Tap to Start", 19, TextAnchor.MiddleCenter, 0, 50, 237, 26);
            Icon(start, sprites.arrowLeft, 15, 36, 32, 36);
            Icon(start, sprites.arrowRight, 188, 36, 32, 36);
            var hand = Icon(start, sprites.hand, 103, 72, 32, 40);
            hand.gameObject.AddComponent<Hover>().amplitude = 3f * U; // UI units

            // ---- Screen 4 (running)
            runningGroup = Group("Screen4_Running");
            var mission = Panel(runningGroup.transform, "RescueSocksPanel", sprites.panelBlue, Anchor.TopLeft, 15, 42, 173, 58);
            Icon(mission, sprites.sock, 6, 5, 40, 48);
            Label(mission, "Rescue 5 lost socks", 14, TextAnchor.MiddleLeft, 48, 6, 125, 20);
            var track = Panel(mission, "Progress", sprites.progressTrack, Anchor.TopLeft, 48, 31, 115, 16);
            socksFill = Panel(track, "Fill", sprites.progressFill, Anchor.TopLeft, 1, 1, 113, 14).GetComponent<Image>();
            socksFill.type = Image.Type.Filled; socksFill.fillMethod = Image.FillMethod.Horizontal; socksFill.fillAmount = 0f;
            socksText = Label(track, "0/5", 13, TextAnchor.MiddleRight, 0, -2, 110, 20);

            pause = RoundButton("Pause", sprites.buttonSquare, sprites.pause, 5, 40, 36, 36, anchorRight: true);
            pause.transform.SetParent(runningGroup.transform, true);
            pauseButton = pause.gameObject;

            blast = PowerUp("BubbleBlast", sprites.bubbleBlast, "Bubble Blast", leftSide: true, out blastBadgeText);
            turbo = PowerUp("TurboSpin", sprites.turboSpin, "Turbo Spin", leftSide: false, out turboBadgeText);

            // ---- pause overlay
            pausedOverlay = Group("PausedOverlay");
            var dim = pausedOverlay.AddComponent<Image>(); dim.color = new Color(0.05f, 0.08f, 0.25f, 0.45f);
            Stretch((RectTransform)pausedOverlay.transform);
            var pp = Panel(pausedOverlay.transform, "PausedPanel", sprites.panelBlue, Anchor.Centre, 0, 0, 170, 60);
            Label(pp, "Paused", 26, TextAnchor.MiddleCenter, 0, 0, 170, 60);
            pausedOverlay.SetActive(false);

            ShowScreen(3);
        }

        enum Anchor { TopLeft, TopRight, TopCentre, BottomLeft, BottomRight, BottomCentre, Centre }

        static GameObject New(string name, Transform parent)
        {
            var go = new GameObject(name, typeof(RectTransform));
            go.layer = 5; // UI
            go.transform.SetParent(parent, false);
            return go;
        }

        GameObject Group(string name)
        {
            var go = New(name, root);
            Stretch((RectTransform)go.transform);
            return go;
        }

        static void Stretch(RectTransform rt)
        {
            rt.anchorMin = Vector2.zero; rt.anchorMax = Vector2.one;
            rt.offsetMin = Vector2.zero; rt.offsetMax = Vector2.zero;
        }

        /// <summary>Place a rect: x/y in board px from the anchor edge(s), y measured downward from the top or upward from the bottom.</summary>
        static void Place(RectTransform rt, Anchor a, float x, float y, float w, float h)
        {
            Vector2 anchor, pivot, pos;
            switch (a)
            {
                case Anchor.TopRight: anchor = new Vector2(1, 1); pivot = new Vector2(1, 1); pos = new Vector2(-x, -y); break;
                case Anchor.TopCentre: anchor = new Vector2(0.5f, 1); pivot = new Vector2(0.5f, 1); pos = new Vector2(x, -y); break;
                case Anchor.BottomLeft: anchor = new Vector2(0, 0); pivot = new Vector2(0, 0); pos = new Vector2(x, y); break;
                case Anchor.BottomRight: anchor = new Vector2(1, 0); pivot = new Vector2(1, 0); pos = new Vector2(-x, y); break;
                case Anchor.BottomCentre: anchor = new Vector2(0.5f, 0); pivot = new Vector2(0.5f, 0); pos = new Vector2(x, y); break;
                case Anchor.Centre: anchor = new Vector2(0.5f, 0.5f); pivot = new Vector2(0.5f, 0.5f); pos = new Vector2(x, y); break;
                default: anchor = new Vector2(0, 1); pivot = new Vector2(0, 1); pos = new Vector2(x, -y); break;
            }
            rt.anchorMin = rt.anchorMax = anchor; rt.pivot = pivot;
            rt.anchoredPosition = pos * U; rt.sizeDelta = new Vector2(w, h) * U;
        }

        RectTransform Pill(string name, float x, float y, float w, float h)
        {
            var go = New(name, root);
            var img = go.AddComponent<Image>();
            img.sprite = sprites.pillDark; img.type = Image.Type.Sliced; img.raycastTarget = false;
            var rt = (RectTransform)go.transform;
            Place(rt, Anchor.TopLeft, x, y, w, h);
            return rt;
        }

        RectTransform Panel(Transform parent, string name, Sprite sprite, Anchor a, float x, float y, float w, float h)
        {
            var go = New(name, parent);
            var img = go.AddComponent<Image>();
            img.sprite = sprite; img.type = Image.Type.Sliced; img.raycastTarget = false;
            var rt = (RectTransform)go.transform;
            Place(rt, a, x, y, w, h);
            return rt;
        }

        Image Icon(RectTransform parent, Sprite sprite, float x, float y, float w, float h)
        {
            var go = New(sprite != null ? sprite.name : "Icon", parent);
            var img = go.AddComponent<Image>();
            img.sprite = sprite; img.preserveAspect = true; img.raycastTarget = false;
            Place((RectTransform)go.transform, Anchor.TopLeft, x, y, w, h);
            return img;
        }

        Text Label(RectTransform parent, string text, float size, TextAnchor align, float x, float y, float w, float h)
        {
            var go = New("Text_" + text.Replace(' ', '_'), parent);
            var t = go.AddComponent<Text>();
            t.font = sprites.font; t.text = text; t.fontSize = Mathf.RoundToInt(size * U);
            t.alignment = align; t.color = Color.white; t.raycastTarget = false;
            t.horizontalOverflow = HorizontalWrapMode.Overflow; t.verticalOverflow = VerticalWrapMode.Overflow;
            var outline = go.AddComponent<Outline>(); outline.effectColor = Ink; outline.effectDistance = new Vector2(1.2f, -1.2f) * U;
            var shadow = go.AddComponent<Shadow>(); shadow.effectColor = new Color(Ink.r, Ink.g, Ink.b, 0.6f); shadow.effectDistance = new Vector2(0f, -1.6f) * U;
            var parentAnchor = Anchor.TopLeft;
            if (align == TextAnchor.MiddleCenter && Mathf.Approximately(x, 0f)) parentAnchor = Anchor.TopCentre;
            Place((RectTransform)go.transform, parentAnchor, x, y, w, h);
            return t;
        }

        Button RoundButton(string name, Sprite background, Sprite icon, float x, float y, float w, float h, bool anchorRight)
        {
            var go = New(name, root);
            var img = go.AddComponent<Image>(); img.sprite = background; img.type = Image.Type.Sliced;
            var rt = (RectTransform)go.transform;
            Place(rt, anchorRight ? Anchor.TopRight : Anchor.TopLeft, x, y, w, h);
            var ic = Icon(rt, icon, w * 0.18f, h * 0.18f, w * 0.64f, h * 0.64f);
            ic.color = Color.white;
            return go.AddComponent<Button>();
        }

        Button PowerUp(string name, Sprite icon, string caption, bool leftSide, out Text badgeText)
        {
            var go = New(name, runningGroup.transform);
            var img = go.AddComponent<Image>(); img.sprite = sprites.buttonSquare; img.type = Image.Type.Sliced;
            var rt = (RectTransform)go.transform;
            Place(rt, leftSide ? Anchor.BottomLeft : Anchor.BottomRight, 10, 7, 72, 78);
            Icon(rt, icon, 6, 6, 60, 52);
            Label(rt, caption, 11, TextAnchor.MiddleCenter, 0, 58, 72, 16);
            var badge = Panel(rt, "Badge", sprites.badge, Anchor.TopRight, -8, -6, 26, 26);
            badgeText = Label(badge, "3", 16, TextAnchor.MiddleCenter, 0, 0, 26, 26);
            return go.AddComponent<Button>();
        }
    }
}
