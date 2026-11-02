using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace BubbleWash
{
    /// <summary>
    /// Approved Screen 1 (Home) and Screen 2 (Select Level), laid out from measurements of the
    /// approved crops (board pixels, see <see cref="UiKit"/>).
    ///
    /// Screen 1: counters + settings, crowned "Bubble Wash Kingdom" logo over the live 3D castle,
    /// the mascot and friends, green "Play ▶", bottom bar Levels / Characters / Shop / Settings.
    /// Screen 2: back arrow, "Select Level", Level 1 card (live 3D thumbnail, 3 stars, green Play),
    /// locked Level 2 Soap Lagoon, Level 3 Suds City, Level 4 Rainbow Rapids.
    /// </summary>
    public class MenuUI : MonoBehaviour
    {
        public HudSprites sprites = new HudSprites();
        [Tooltip("Live 3D picture of the Level 1 castle for the Level 1 card (rendered by MainMenuDirector).")]
        public RenderTexture levelThumbnail;
        public string level1Scene = "Level1_WasherEntry";

        [Header("Built hierarchy (filled by Build)")]
        public GameObject home, select;
        public Text heartsText, coinsText, gemsText;
        public Image[] level1Stars = new Image[3];
        public Button homePlay, level1Play, back, settings, navLevels, navCharacters, navShop, navSettings;
        public Button[] lockedRows = new Button[3];
        public Image[] lockedIcons = new Image[3];
        public RectTransform toast;
        public Text toastText;

        // Tints for the locked level pictures until their own artwork exists.
        static readonly Color[] LevelTints =
        {
            new Color(0.55f, 0.85f, 1f, 0.9f),   // Soap Lagoon
            new Color(0.55f, 1f, 0.85f, 0.9f),   // Suds City
            new Color(1f, 0.7f, 0.95f, 0.9f),    // Rainbow Rapids
        };

        float _toastUntil;

        void Start()
        {
            if (home == null) Build();
            Wire();
            Refresh();
            if (PlayerProgress.OpenLevelSelect) { PlayerProgress.OpenLevelSelect = false; ShowSelect(); } else ShowHome();
        }

        void Update()
        {
            if (toast != null && toast.gameObject.activeSelf && Time.unscaledTime > _toastUntil) toast.gameObject.SetActive(false);
        }

        void Wire()
        {
            On(homePlay, ShowSelect);
            On(navLevels, ShowSelect);
            On(back, ShowHome);
            On(level1Play, () => StartCoroutine(LoadLevel()));
            On(settings, () => Toast("Settings are coming soon"));
            On(navSettings, () => Toast("Settings are coming soon"));
            On(navCharacters, () => Toast("Characters are coming soon"));
            On(navShop, () => Toast("The Shop is coming soon"));
            for (int i = 0; i < lockedRows.Length; i++)
            {
                int level = i + 2;
                On(lockedRows[i], () => Toast(PlayerProgress.IsUnlocked(level)
                    ? $"Level {level} is coming soon" : $"Finish Level {level - 1} to unlock Level {level}"));
            }
        }

        static void On(Button b, UnityEngine.Events.UnityAction a)
        {
            if (b != null) b.onClick.AddListener(a);
        }

        public void Refresh()
        {
            if (heartsText) heartsText.text = UiKit.HeartsText(PlayerProgress.Hearts);
            if (coinsText) coinsText.text = UiKit.Number(PlayerProgress.Coins);
            if (gemsText) gemsText.text = PlayerProgress.Gems.ToString();
            int stars = PlayerProgress.Stars(1);
            for (int i = 0; i < level1Stars.Length; i++)
                if (level1Stars[i]) level1Stars[i].sprite = i < stars ? sprites.starFull : sprites.starEmpty;
            for (int i = 0; i < lockedIcons.Length; i++)
                if (lockedIcons[i]) lockedIcons[i].enabled = !PlayerProgress.IsUnlocked(i + 2);
        }

        /// <summary>Show the values printed on the approved Screens 1-2 (5 Full, 1,280, 36, three grey stars, locked levels) for the screenshot comparison.</summary>
        public void ShowApprovedValues()
        {
            if (heartsText) heartsText.text = UiKit.HeartsText(PlayerProgress.MaxHearts);
            if (coinsText) coinsText.text = UiKit.Number(1280);
            if (gemsText) gemsText.text = "36";
            foreach (var st in level1Stars) if (st) st.sprite = sprites.starEmpty;
            foreach (var li in lockedIcons) if (li) li.enabled = true;
            if (toast) toast.gameObject.SetActive(false);
        }

        /// <summary>Screen 1.</summary>
        public void ShowHome() { if (home) home.SetActive(true); if (select) select.SetActive(false); }

        /// <summary>Screen 2.</summary>
        public void ShowSelect() { if (home) home.SetActive(false); if (select) select.SetActive(true); Refresh(); }

        public void Toast(string message)
        {
            if (toast == null) return;
            toastText.text = message;
            toast.gameObject.SetActive(true);
            _toastUntil = Time.unscaledTime + 1.8f;
        }

        IEnumerator LoadLevel()
        {
            yield return new WaitForSeconds(0.12f); // let the button bounce
            SceneManager.LoadScene(level1Scene);
        }

        // ------------------------------------------------------------------ construction

        /// <summary>Create the Screen 1 and Screen 2 hierarchy under this Canvas. Safe in edit mode.</summary>
        public void Build()
        {
            for (int i = transform.childCount - 1; i >= 0; i--)
            {
                var c = transform.GetChild(i).gameObject;
                if (Application.isPlaying) Destroy(c); else DestroyImmediate(c);
            }
            var ui = new UiKit(sprites);
            var root = transform;

            // ---------------- Screen 1: Home
            home = UiKit.New("Screen1_Home", root);
            UiKit.Stretch((RectTransform)home.transform);
            ui.Icon(home.transform, sprites.crown, UiAnchor.TopCentre, 0, 44, 48, 33);
            ui.Icon(home.transform, sprites.logo, UiAnchor.TopCentre, 0, 72, 178, 127);
            homePlay = ui.Button(home.transform, "PlayButton", sprites.buttonGreen, UiAnchor.BottomCentre, 0, 67, 195, 50);
            ui.Label(homePlay.transform, "Play", 30, TextAnchor.MiddleCenter, UiAnchor.Centre, -12, 2, 120, 50, null, true)
              .GetComponent<Outline>().effectColor = new Color(0.08f, 0.4f, 0.12f, 1f);
            ui.Icon(homePlay.transform, sprites.playTriangle, UiAnchor.Centre, 42, 0, 22, 24);
            ui.Panel(home.transform, "BottomBar", sprites.navBar, UiAnchor.BottomCentre, 0, 4, 262, 54);
            navLevels = NavItem(ui, home.transform, 0.163f, sprites.navLevels, "Levels");
            navCharacters = NavItem(ui, home.transform, 0.417f, sprites.navCharacters, "Characters");
            navShop = NavItem(ui, home.transform, 0.623f, sprites.navShop, "Shop");
            navSettings = NavItem(ui, home.transform, 0.859f, sprites.gear, "Settings");

            // ---------------- Screen 2: Select Level
            select = UiKit.New("Screen2_SelectLevel", root);
            UiKit.Stretch((RectTransform)select.transform);
            var veil = select.AddComponent<Image>();
            veil.color = new Color(0.33f, 0.42f, 0.9f, 0.93f);
            veil.raycastTarget = true; // blocks taps on the 3D scene behind
            back = ui.Button(select.transform, "Back", sprites.buttonRound, UiAnchor.TopLeft, 20, 45, 30, 30);
            ui.Icon(back.transform, sprites.arrowLeft, UiAnchor.Centre, -1, 0, 18, 20);
            ui.Label(select.transform, "Select Level", 22, TextAnchor.MiddleCenter, UiAnchor.TopCentre, 6, 45, 170, 30);

            var card = ui.Panel(select.transform, "Level1Card", sprites.cardCream, UiAnchor.TopCentre, 0, 80, 235, 230);
            var header = ui.Panel(card, "Header", sprites.panelBlue, UiAnchor.TopCentre, 0, 12, 204, 51);
            ui.Label(header, "Level 1", 24, TextAnchor.MiddleCenter, UiAnchor.TopCentre, 0, 2, 204, 28);
            ui.Label(header, PlayerProgress.LevelNames[0], 15, TextAnchor.MiddleCenter, UiAnchor.TopCentre, 0, 27, 204, 22);
            var pic = UiKit.New("Level1Picture", card);
            var raw = pic.AddComponent<RawImage>(); raw.texture = levelThumbnail; raw.raycastTarget = false;
            UiKit.Place((RectTransform)pic.transform, UiAnchor.TopCentre, 0, 63, 204, 122);
            for (int i = 0; i < 3; i++)
                level1Stars[i] = ui.Icon(card, sprites.starEmpty, UiAnchor.TopCentre, (i - 1) * 46, 148, 30, 30);
            level1Play = ui.Button(card, "PlayLevel1", sprites.buttonGreen, UiAnchor.TopCentre, 0, 188, 145, 35);
            ui.Label(level1Play.transform, "Play", 22, TextAnchor.MiddleCenter, UiAnchor.Centre, 0, 1, 145, 35)
              .GetComponent<Outline>().effectColor = new Color(0.08f, 0.4f, 0.12f, 1f);

            for (int i = 0; i < 3; i++)
            {
                lockedRows[i] = ui.Button(select.transform, $"Level{i + 2}Row", sprites.panelRow, UiAnchor.TopCentre, 0, 318 + i * 64, 230, 54);
                var rt = (RectTransform)lockedRows[i].transform;
                var thumb = UiKit.New("Picture", rt);
                var tr = thumb.AddComponent<RawImage>(); tr.texture = levelThumbnail; tr.color = LevelTints[i]; tr.raycastTarget = false;
                UiKit.Place((RectTransform)thumb.transform, UiAnchor.TopLeft, 3, 3, 88, 48);
                ui.Label(rt, $"Level {i + 2}", 15, TextAnchor.MiddleLeft, UiAnchor.TopLeft, 98, 7, 110, 22);
                ui.Label(rt, PlayerProgress.LevelNames[i + 1], 12, TextAnchor.MiddleLeft, UiAnchor.TopLeft, 98, 27, 120, 20);
                lockedIcons[i] = ui.Icon(rt, sprites.lockIcon, UiAnchor.TopRight, 12, 12, 24, 29);
            }

            // ---------------- shared: counters + settings gear (both screens), toast
            ui.TopBar(root, out heartsText, out coinsText, out gemsText);
            settings = ui.Button(root, "SettingsGear", sprites.buttonRound, UiAnchor.TopLeft, 226, 12, 27, 27);
            ui.Icon(settings.transform, sprites.gear, UiAnchor.Centre, 0, 0, 17, 17);
            toast = ui.Panel(root, "Toast", sprites.panelBlue, UiAnchor.BottomCentre, 0, 140, 210, 34);
            toastText = ui.Label(toast, "", 13, TextAnchor.MiddleCenter, UiAnchor.Centre, 0, 0, 200, 34);
            toast.gameObject.SetActive(false);

            ShowHome();
        }

        static Button NavItem(UiKit ui, Transform parent, float xFraction, Sprite icon, string label)
        {
            var go = UiKit.New("Nav_" + label, parent);
            var hit = go.AddComponent<Image>(); hit.color = new Color(1, 1, 1, 0); // invisible tap area
            UiKit.PlaceFraction((RectTransform)go.transform, xFraction, 4, 60, 52);
            var b = go.AddComponent<Button>();
            go.AddComponent<PressBounce>();
            ui.Icon(go.transform, icon, UiAnchor.TopCentre, 0, 3, 32, 32);
            ui.Label(go.transform, label, 11, TextAnchor.MiddleCenter, UiAnchor.BottomCentre, 0, 2, 64, 16);
            return b;
        }
    }
}
