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
    /// Screens 5-11: the section banners (blue, or red with a warning icon), the pink hint arrow,
    /// the centred mission panel of Screen 11, power-ups shown or hidden per screen
    /// (see <see cref="ShowSection"/>). Screen 12: <see cref="LevelCompleteUI"/>.
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

        [Header("Screens 5-12 (filled by Build)")]
        public RectTransform banner, hintArrow, missionPanel;
        public Image bannerImage, bannerIcon;
        public Text bannerLine1, bannerLine2;
        public GameObject powerUpGroup;
        public LevelCompleteUI complete;

        static readonly Color Ink = new Color(0.08f, 0.16f, 0.48f, 1f);      // dark blue text outline
        static readonly Color Gold = new Color(1f, 0.86f, 0.3f, 1f);

        GameSession _session;
        float _bannerShownAt = -1f, _bannerUntil = -1f, _arrowUntil = -1f;
        CanvasGroup _bannerFade;

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

        public void OnPhase(RunPhase phase)
        {
            if (phase == RunPhase.Finished) return; // Level Complete is shown by the SectionDirector
            ShowScreen(phase == RunPhase.Intro ? 3 : 4, phase == RunPhase.Paused);
        }

        /// <summary>Show the Screen 3 (intro) or Screen 4 (running) HUD.</summary>
        public void ShowScreen(int screen, bool paused = false)
        {
            if (introGroup) introGroup.SetActive(screen == 3);
            if (gearButton) gearButton.SetActive(screen == 3);
            if (runningGroup) runningGroup.SetActive(screen != 3);
            if (pausedOverlay) pausedOverlay.SetActive(paused);
            if (screen == 3)
            {
                HideBanner();
                if (hintArrow) hintArrow.gameObject.SetActive(false);
                if (complete) complete.Hide();
                SetMission(MissionPlace.TopLeft);
                SetPowerUpsVisible(true);
                SetPauseTopRow(false);
            }
        }

        void Update()
        {
            // Banner: pop in with a little overshoot, hold, then fade out.
            if (banner != null && banner.gameObject.activeSelf)
            {
                float age = Time.unscaledTime - _bannerShownAt;
                float k = Mathf.Clamp01(age / 0.28f);
                float pop = 1f + Mathf.Sin(k * Mathf.PI) * 0.12f * (1f - k);
                float scale = Mathf.Lerp(0.6f, 1f, 1f - (1f - k) * (1f - k)) * pop;
                banner.localScale = new Vector3(scale, scale, 1f);
                float alpha = 1f;
                if (_bannerUntil > 0f) alpha = Mathf.Clamp01((_bannerUntil - Time.unscaledTime) / 0.3f);
                if (_bannerFade != null) _bannerFade.alpha = alpha;
                if (_bannerUntil > 0f && Time.unscaledTime >= _bannerUntil) banner.gameObject.SetActive(false);
            }
            if (hintArrow != null && hintArrow.gameObject.activeSelf && _arrowUntil > 0f && Time.unscaledTime >= _arrowUntil)
                hintArrow.gameObject.SetActive(false);
        }

        // ------------------------------------------------------------------ Screens 5-12

        /// <summary>Apply a level section's HUD: banner, hint arrow, power-ups, mission panel and pause position.</summary>
        public void ShowSection(LevelSection s, float seconds)
        {
            if (s == null) return;
            if (complete) complete.Hide();
            if (!string.IsNullOrEmpty(s.line1))
                ShowBanner(s.line1, s.line2, s.warning, s.bannerPlace, s.bannerAt, s.bannerSize, s.bannerTilt, seconds);
            else HideBanner();
            ShowHintArrow(s.hintArrow, s.arrowAt, s.arrowSize, s.arrowTilt, seconds);
            SetPowerUpsVisible(s.showPowerUps);
            SetMission(s.mission);
            SetPauseTopRow(s.pauseInTopRow);
        }

        /// <summary>
        /// Section banner as drawn on the approved screens: blue ("Jump to Side Paths!", "Collect Coins,
        /// Gems &amp; Rescue Socks!", "Enter the Bubble Kingdom!") or red with a warning icon ("Watch out!
        /// Spinning brushes!", "Avoid Enemies!"). Position/size in board px; seconds &lt;= 0 keeps it up.
        /// </summary>
        public void ShowBanner(string line1, string line2, bool warning, BannerPlace place, Vector2 at, Vector2 size, float tilt, float seconds)
        {
            if (banner == null) return;
            bool two = !string.IsNullOrEmpty(line2);
            bannerImage.sprite = warning && sprites.panelRed != null ? sprites.panelRed : sprites.panelBlue;
            bannerIcon.gameObject.SetActive(warning);
            Place(banner, place == BannerPlace.Top ? Anchor.TopCentre : Anchor.BottomCentre, at.x, at.y, size.x, size.y);
            banner.pivot = new Vector2(0.5f, 0.5f);
            banner.anchoredPosition += new Vector2(0f, place == BannerPlace.Top ? -size.y * 0.5f : size.y * 0.5f) * U;
            banner.localRotation = Quaternion.Euler(0f, 0f, tilt);

            float w = size.x, h = size.y;
            float textLeft = warning ? h * 0.78f : 0f;          // leave room for the warning icon
            float textW = w - textLeft - (warning ? h * 0.12f : 0f);
            Place((RectTransform)bannerIcon.transform, Anchor.TopLeft, h * 0.16f, h * 0.14f, h * 0.68f, h * 0.68f);
            if (two)
            {
                float big = warning ? 0.36f : 0.29f, small = warning ? 0.26f : 0.29f;
                SetBannerLine(bannerLine1, line1, h * big, textLeft, h * 0.08f, textW, h * 0.46f);
                SetBannerLine(bannerLine2, line2, h * small, textLeft, h * 0.5f, textW, h * 0.4f);
            }
            else
            {
                SetBannerLine(bannerLine1, line1, h * 0.36f, textLeft, 0f, textW, h * 0.94f);
                bannerLine2.gameObject.SetActive(false);
            }
            banner.gameObject.SetActive(true);
            if (_bannerFade == null) _bannerFade = banner.GetComponent<CanvasGroup>();
            _bannerShownAt = Time.unscaledTime;
            _bannerUntil = seconds > 0f ? Time.unscaledTime + seconds : -1f;
            if (_bannerFade != null) _bannerFade.alpha = 1f;
        }

        void SetBannerLine(Text t, string text, float size, float x, float y, float w, float h)
        {
            t.gameObject.SetActive(true);
            t.text = text;
            t.fontSize = Mathf.RoundToInt(size * U);
            t.alignment = TextAnchor.MiddleCenter;
            Place((RectTransform)t.transform, Anchor.TopLeft, x, y, w, h);
        }

        public void HideBanner()
        {
            if (banner != null) banner.gameObject.SetActive(false);
        }

        /// <summary>The pink hint arrow of Screens 5 and 6 (centre in board px from the top centre).</summary>
        public void ShowHintArrow(bool show, Vector2 at, Vector2 size, float tilt, float seconds)
        {
            if (hintArrow == null) return;
            hintArrow.gameObject.SetActive(show);
            if (!show) return;
            hintArrow.anchorMin = hintArrow.anchorMax = new Vector2(0.5f, 1f);
            hintArrow.pivot = new Vector2(0.5f, 0.5f);
            hintArrow.anchoredPosition = new Vector2(at.x, -at.y) * U;
            hintArrow.sizeDelta = size * U;
            hintArrow.localRotation = Quaternion.Euler(0f, 0f, tilt);
            _arrowUntil = seconds > 0f ? Time.unscaledTime + seconds : -1f;
        }

        public void SetPowerUpsVisible(bool visible)
        {
            if (powerUpGroup) powerUpGroup.SetActive(visible);
        }

        /// <summary>"Rescue 5 lost socks" panel: top-left on Screen 4, centred and larger on Screen 11, hidden on 5-10.</summary>
        public void SetMission(MissionPlace place)
        {
            if (missionPanel == null) return;
            missionPanel.gameObject.SetActive(place != MissionPlace.Hidden);
            if (place == MissionPlace.TopLeft)
            {
                Place(missionPanel, Anchor.TopLeft, 15, 42, 173, 58);
                missionPanel.localScale = Vector3.one;
            }
            else if (place == MissionPlace.TopCentre)
            {
                // Screen 11: 198 x 61 board px (scaled from the 468 px crop), centred 3 px left, 48 px down.
                Place(missionPanel, Anchor.TopCentre, -3, 48, 173, 58);
                float k = 198f / 173f;
                missionPanel.localScale = new Vector3(k, k, 1f);
            }
        }

        /// <summary>Pause sits below the counters on Screens 4-6 and on the counters row on Screens 7-12.</summary>
        public void SetPauseTopRow(bool topRow)
        {
            if (pause == null) return;
            Place((RectTransform)pause.transform, Anchor.TopRight, topRow ? 6 : 5, topRow ? 9 : 40, 36, 36);
        }

        /// <summary>Screen 12: Level Complete over the finish scene.</summary>
        public void ShowComplete(RunResult result)
        {
            HideBanner();
            if (hintArrow) hintArrow.gameObject.SetActive(false);
            if (introGroup) introGroup.SetActive(false);
            if (gearButton) gearButton.SetActive(false);
            if (runningGroup) runningGroup.SetActive(true);
            SetPowerUpsVisible(false);
            SetMission(MissionPlace.Hidden);
            SetPauseTopRow(true);
            if (complete != null) complete.Show(result);
            Refresh();
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
            missionPanel = mission;
            Icon(mission, sprites.sock, 6, 5, 40, 48);
            Label(mission, "Rescue 5 lost socks", 14, TextAnchor.MiddleLeft, 48, 6, 125, 20);
            var track = Panel(mission, "Progress", sprites.progressTrack, Anchor.TopLeft, 48, 31, 115, 16);
            socksFill = Panel(track, "Fill", sprites.progressFill, Anchor.TopLeft, 1, 1, 113, 14).GetComponent<Image>();
            socksFill.type = Image.Type.Filled; socksFill.fillMethod = Image.FillMethod.Horizontal; socksFill.fillAmount = 0f;
            socksText = Label(track, "0/5", 13, TextAnchor.MiddleRight, 0, -2, 110, 20);

            pause = RoundButton("Pause", sprites.buttonSquare, sprites.pause, 5, 40, 36, 36, anchorRight: true);
            pause.transform.SetParent(runningGroup.transform, true);
            pauseButton = pause.gameObject;

            powerUpGroup = New("PowerUps", runningGroup.transform);
            Stretch((RectTransform)powerUpGroup.transform);
            blast = PowerUp("BubbleBlast", sprites.bubbleBlast, "Bubble Blast", leftSide: true, out blastBadgeText);
            turbo = PowerUp("TurboSpin", sprites.turboSpin, "Turbo Spin", leftSide: false, out turboBadgeText);

            // ---- pause overlay
            pausedOverlay = Group("PausedOverlay");
            var dim = pausedOverlay.AddComponent<Image>(); dim.color = new Color(0.05f, 0.08f, 0.25f, 0.45f);
            Stretch((RectTransform)pausedOverlay.transform);
            var pp = Panel(pausedOverlay.transform, "PausedPanel", sprites.panelBlue, Anchor.Centre, 0, 0, 170, 60);
            Label(pp, "Paused", 26, TextAnchor.MiddleCenter, 0, 0, 170, 60);
            pausedOverlay.SetActive(false);

            // ---- Screens 5-11: section banner + hint arrow (positioned per section by ShowSection)
            var bannerGo = New("SectionBanner", root);
            banner = (RectTransform)bannerGo.transform;
            bannerImage = bannerGo.AddComponent<Image>();
            bannerImage.sprite = sprites.panelBlue; bannerImage.type = Image.Type.Sliced; bannerImage.raycastTarget = false;
            _bannerFade = bannerGo.AddComponent<CanvasGroup>();
            _bannerFade.blocksRaycasts = false; _bannerFade.interactable = false;
            Place(banner, Anchor.TopCentre, 0, 48, 205, 64);
            bannerIcon = Icon(banner, sprites.warning, 8, 8, 44, 44);
            bannerLine1 = Label(banner, "Banner", 18, TextAnchor.MiddleCenter, 0, 6, 205, 28);
            bannerLine2 = Label(banner, "Banner", 18, TextAnchor.MiddleCenter, 0, 32, 205, 26);
            bannerGo.SetActive(false);

            hintArrow = (RectTransform)New("HintArrow", root).transform;
            var arrowImage = New("ArrowImage", hintArrow);
            Stretch((RectTransform)arrowImage.transform);
            var ai = arrowImage.AddComponent<Image>(); ai.sprite = sprites.arrowDownPink; ai.preserveAspect = true; ai.raycastTarget = false;
            var bob = arrowImage.AddComponent<Hover>(); bob.amplitude = -4f * U; bob.frequency = 1.4f;
            hintArrow.gameObject.SetActive(false);

            // ---- Screen 12
            var completeGo = New("Screen12_LevelComplete", root);
            Stretch((RectTransform)completeGo.transform);
            complete = completeGo.AddComponent<LevelCompleteUI>();
            complete.Build(sprites);

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
            var go = New(name, powerUpGroup.transform);
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
