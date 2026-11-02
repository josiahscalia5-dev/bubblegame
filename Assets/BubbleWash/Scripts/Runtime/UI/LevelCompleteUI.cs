using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace BubbleWash
{
    /// <summary>
    /// Approved Screen 12 "Level Complete!": three stars, the title plate, the checklist (Rescue 5 lost
    /// socks 5/5, Collect 50 coins 50/50, Find 1 special gem 1/1, each with a green tick), the Rewards
    /// panel (+300 coins, +10 gems, +5 socks) and the green "Next Level ▶" button.
    ///
    /// Layout measured on the approved 244x468 crop and converted to the 537 px reference
    /// (x 537/468) so it lines up with the rest of the HUD.
    /// </summary>
    public class LevelCompleteUI : MonoBehaviour
    {
        const float K = 537f / 468f;     // Screen 12 crop px -> reference board px

        public string menuScene = "MainMenu";

        [Header("Built hierarchy (filled by Build)")]
        public Image[] stars = new Image[3];
        public Text[] rowValues = new Text[3];
        public Image[] rowTicks = new Image[3];
        public Text[] rowLabels = new Text[3];
        public Text rewardCoins, rewardGems, rewardSocks;
        public Button nextLevel;
        public CanvasGroup fade;

        float _shownAt = -1f;

        /// <summary>Create the Screen 12 hierarchy under this object (stretched over the HUD canvas).</summary>
        public void Build(HudSprites sprites)
        {
            for (int i = transform.childCount - 1; i >= 0; i--)
            {
                var c = transform.GetChild(i).gameObject;
                if (Application.isPlaying) Destroy(c); else DestroyImmediate(c);
            }
            var ui = new UiKit(sprites);
            var root = transform;
            fade = gameObject.GetComponent<CanvasGroup>();
            if (fade == null) fade = gameObject.AddComponent<CanvasGroup>();

            // Stars: side stars 32 px wide at +-44 px, the middle one 42 px and higher (crop px).
            stars[0] = ui.Icon(root, sprites.starFull, UiAnchor.TopCentre, -46 * K, 47 * K, 32 * K, 32 * K);
            stars[1] = ui.Icon(root, sprites.starFull, UiAnchor.TopCentre, 0, 39 * K, 42 * K, 42 * K);
            stars[2] = ui.Icon(root, sprites.starFull, UiAnchor.TopCentre, 46 * K, 47 * K, 32 * K, 32 * K);

            // Title plate.
            var title = ui.Panel(root, "TitlePlate", sprites.panelBlue, UiAnchor.TopCentre, 0, 80 * K, 195 * K, 37 * K);
            ui.Label(title, "Level Complete!", 21 * K, TextAnchor.MiddleCenter, UiAnchor.Centre, 0, 1, 195 * K, 37 * K);

            // Checklist.
            var list = ui.Panel(root, "Checklist", sprites.panelWhite, UiAnchor.TopCentre, 0, 113 * K, 205 * K, 80 * K);
            string[] labels = { "Rescue 5 lost socks", "Collect 50 coins", "Find 1 special gem" };
            Sprite[] icons = { sprites.check, sprites.coin, sprites.gem };
            for (int i = 0; i < 3; i++)
            {
                float y = (10f + i * 19f) * K;  // row tops (crop px 123, 141, 160)
                ui.Icon(list, icons[i], UiAnchor.TopLeft, 13 * K, y, 17 * K, 17 * K);
                rowLabels[i] = ui.Label(list, labels[i], 11.5f * K, TextAnchor.MiddleLeft, UiAnchor.TopLeft, 36 * K, y - 1, 120 * K, 18 * K, UiKit.DarkText, false);
                rowValues[i] = ui.Label(list, "0/0", 11.5f * K, TextAnchor.MiddleRight, UiAnchor.TopLeft, 125 * K, y - 1, 46 * K, 18 * K, UiKit.GreenText, false);
                rowTicks[i] = ui.Icon(list, sprites.check, UiAnchor.TopLeft, 177 * K, y, 17 * K, 17 * K);
            }

            // Rewards.
            var rewards = ui.Panel(root, "Rewards", sprites.panelBlue, UiAnchor.TopCentre, 0, 302 * K, 201 * K, 93 * K);
            ui.Label(rewards, "Rewards", 17 * K, TextAnchor.MiddleCenter, UiAnchor.TopCentre, 0, 3 * K, 201 * K, 22 * K);
            ui.Panel(rewards, "RewardsInner", sprites.panelWhite, UiAnchor.TopCentre, 0, 25 * K, 182 * K, 61 * K);
            rewardCoins = Reward(ui, rewards, sprites.coin, -61 * K);
            rewardGems = Reward(ui, rewards, sprites.gem, 0);
            rewardSocks = Reward(ui, rewards, sprites.sock, 61 * K);

            // Next Level.
            nextLevel = ui.Button(root, "NextLevel", sprites.buttonGreen, UiAnchor.TopCentre, 0, 397 * K, 203 * K, 48 * K);
            ui.Label(nextLevel.transform, "Next Level", 22 * K, TextAnchor.MiddleCenter, UiAnchor.Centre, -10 * K, 1, 150 * K, 48 * K)
              .GetComponent<Outline>().effectColor = new Color(0.08f, 0.4f, 0.12f, 1f);
            ui.Icon(nextLevel.transform, sprites.playTriangle, UiAnchor.Centre, 72 * K, 0, 16 * K, 20 * K);

            gameObject.SetActive(false);
        }

        // Listeners added in the editor are not saved with the scene, so wire the button when it first shows.
        void Awake()
        {
            if (nextLevel != null) nextLevel.onClick.AddListener(OnNextLevel);
        }

        Text Reward(UiKit ui, RectTransform panel, Sprite icon, float x)
        {
            ui.Icon(panel, icon, UiAnchor.TopCentre, x, 31 * K, 28 * K, 28 * K);
            return ui.Label(panel, "+0", 14 * K, TextAnchor.MiddleCenter, UiAnchor.TopCentre, x, 62 * K, 50 * K, 20 * K, UiKit.DarkText, false);
        }

        public void Show(RunResult r)
        {
            gameObject.SetActive(true);
            SetRow(0, r.socks, r.socksGoal);
            SetRow(1, Mathf.Min(r.coinsCollected, r.coinsGoal), r.coinsGoal);
            SetRow(2, Mathf.Min(r.specialGems, r.specialGemsGoal), r.specialGemsGoal);
            if (rewardCoins) rewardCoins.text = "+" + r.rewardCoins;
            if (rewardGems) rewardGems.text = "+" + r.rewardGems;
            if (rewardSocks) rewardSocks.text = "+" + r.rewardSocks;
            for (int i = 0; i < stars.Length; i++)
            {
                if (stars[i] == null) continue;
                stars[i].color = i < r.stars ? Color.white : new Color(0.55f, 0.6f, 0.85f, 0.55f);
                stars[i].transform.localScale = Vector3.zero;
            }
            _shownAt = Time.unscaledTime;
            if (fade) fade.alpha = 0f;
        }

        public void Hide()
        {
            gameObject.SetActive(false);
            _shownAt = -1f;
        }

        void SetRow(int i, int have, int goal)
        {
            if (rowValues[i]) rowValues[i].text = $"{have}/{goal}";
            bool done = have >= goal;
            if (rowTicks[i]) rowTicks[i].color = done ? Color.white : new Color(1f, 1f, 1f, 0.25f);
            if (rowValues[i]) rowValues[i].color = done ? UiKit.GreenText : new Color(0.85f, 0.35f, 0.3f, 1f);
        }

        void Update()
        {
            if (_shownAt < 0f) return;
            float t = Time.unscaledTime - _shownAt;
            if (fade) fade.alpha = Mathf.Clamp01(t / 0.35f);
            // Stars pop in one after another (middle one last and biggest, like the approved screen).
            int[] order = { 0, 2, 1 };
            for (int n = 0; n < 3; n++)
            {
                var s = stars[order[n]];
                if (s == null) continue;
                float k = Mathf.Clamp01((t - 0.35f - n * 0.25f) / 0.3f);
                float scale = k <= 0f ? 0f : 1f + Mathf.Sin(k * Mathf.PI) * 0.35f * (1f - k * 0.5f);
                if (k >= 1f) scale = 1f;
                s.transform.localScale = new Vector3(scale, scale, 1f);
            }
        }

        /// <summary>Pose the finished screen immediately (screenshot capture).</summary>
        public void SkipAnimation()
        {
            _shownAt = Time.unscaledTime - 10f;
            Update();
        }

        void OnNextLevel()
        {
            StartCoroutine(GoToLevelSelect());
        }

        IEnumerator GoToLevelSelect()
        {
            yield return new WaitForSecondsRealtime(0.12f);
            Time.timeScale = 1f;
            PlayerProgress.OpenLevelSelect = true; // land on Select Level (Screen 2) with Level 2 unlocked
            SceneManager.LoadScene(menuScene);
        }
    }
}
