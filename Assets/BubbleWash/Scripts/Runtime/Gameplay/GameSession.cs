using System;
using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace BubbleWash
{
    public enum RunPhase { Intro, Running, Paused, Finished }

    /// <summary>What Level Complete (Screen 12) reports for one run.</summary>
    [Serializable]
    public struct RunResult
    {
        public int socks, socksGoal;
        public int coinsCollected, coinsGoal;
        public int specialGems, specialGemsGoal;
        public int stars;
        public int rewardCoins, rewardGems, rewardSocks;
    }

    /// <summary>
    /// Counters shown on the approved HUD (hearts "5 Full", coins 1,280, gems 36, socks 0/5,
    /// Bubble Blast x3, Turbo Spin x3), the run phase, and this run's Level 1 objectives
    /// (5 socks, 50 coins, 1 special gem). Totals are loaded from and saved to <see cref="PlayerProgress"/>
    /// so the menu (Screens 1-2) and the level show the same numbers.
    /// </summary>
    [DefaultExecutionOrder(-150)]
    public class GameSession : MonoBehaviour
    {
        public static GameSession Active { get; private set; }

        [Header("Starting values from the approved screens")]
        public int hearts = 5;
        public int maxHearts = 5;
        public int coins = 1280;
        public int gems = 36;
        public int socksRescued;
        public int socksGoal = 5;
        public int bubbleBlasts = 3;
        public int turboSpins = 3;

        [Header("Level 1 objectives (approved Screen 12)")]
        public int coinsGoal = 50;
        public int specialGemsGoal = 1;
        public int levelNumber = 1;
        [Tooltip("Load coins/gems from the saved progress on start (off for the screenshot capture).")]
        public bool useSavedProgress = true;

        [Header("This run")]
        public int coinsCollected;
        public int gemsCollected;
        public int specialGemsFound;

        public RunPhase Phase { get; private set; } = RunPhase.Intro;

        public event Action Changed;
        public event Action<RunPhase> PhaseChanged;
        public event Action OutOfHearts;

        bool _saved;

        void OnEnable() => Active = this;
        void OnDisable() { if (Active == this) Active = null; }

        void Start()
        {
            if (useSavedProgress && Application.isPlaying)
            {
                coins = PlayerProgress.Coins;
                gems = PlayerProgress.Gems;
                hearts = maxHearts;
                Changed?.Invoke();
            }
        }

        public void MakeActive() => Active = this;

        public void SetPhase(RunPhase phase)
        {
            if (Phase == phase) return;
            Phase = phase;
            Time.timeScale = phase == RunPhase.Paused ? 0f : 1f;
            if (phase == RunPhase.Finished) SaveResult();
            PhaseChanged?.Invoke(phase);
            Changed?.Invoke();
        }

        public void TogglePause()
        {
            if (Phase == RunPhase.Running) SetPhase(RunPhase.Paused);
            else if (Phase == RunPhase.Paused) SetPhase(RunPhase.Running);
        }

        public void AddCoins(int n) { coins += n; coinsCollected += n; Changed?.Invoke(); }
        public void AddGems(int n, bool special = false) { gems += n; gemsCollected += n; if (special) specialGemsFound++; Changed?.Invoke(); }
        public void RescueSock() { socksRescued = Mathf.Min(socksGoal, socksRescued + 1); Changed?.Invoke(); }

        public void LoseHeart()
        {
            if (hearts <= 0) return;
            hearts = Mathf.Max(0, hearts - 1);
            Changed?.Invoke();
            if (hearts == 0)
            {
                OutOfHearts?.Invoke();
                if (Application.isPlaying) StartCoroutine(RestartSoon());
            }
        }

        IEnumerator RestartSoon()
        {
            yield return new WaitForSecondsRealtime(2.2f);
            Time.timeScale = 1f;
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }

        public bool TryUseBubbleBlast()
        {
            if (bubbleBlasts <= 0 || Phase != RunPhase.Running) return false;
            bubbleBlasts--; Changed?.Invoke(); return true;
        }

        public bool TryUseTurboSpin()
        {
            if (turboSpins <= 0 || Phase != RunPhase.Running) return false;
            turboSpins--; Changed?.Invoke(); return true;
        }

        /// <summary>Restart for another lap (used when only the opening is built; keeps the earned totals).</summary>
        public void ResetLap()
        {
            socksRescued = 0;
            coinsCollected = gemsCollected = specialGemsFound = 0;
            Changed?.Invoke();
        }

        /// <summary>Objectives, stars and rewards for Level Complete. One star per objective met (at least one for finishing).</summary>
        public RunResult Result()
        {
            int met = (socksRescued >= socksGoal ? 1 : 0) + (coinsCollected >= coinsGoal ? 1 : 0) + (specialGemsFound >= specialGemsGoal ? 1 : 0);
            int stars = Mathf.Max(1, met);
            return new RunResult
            {
                socks = socksRescued, socksGoal = socksGoal,
                coinsCollected = coinsCollected, coinsGoal = coinsGoal,
                specialGems = specialGemsFound, specialGemsGoal = specialGemsGoal,
                stars = stars,
                // All three objectives: +300 coins, +10 gems, +5 socks, as on the approved screen.
                rewardCoins = 100 * stars,
                rewardGems = stars >= 3 ? 10 : 3 * stars,
                rewardSocks = socksRescued,
            };
        }

        void SaveResult()
        {
            if (_saved || !Application.isPlaying || !useSavedProgress) return;
            _saved = true;
            var r = Result();
            PlayerProgress.Coins = coins + r.rewardCoins;
            PlayerProgress.Gems = gems + r.rewardGems;
            PlayerProgress.SocksRescued = PlayerProgress.SocksRescued + r.rewardSocks;
            PlayerProgress.RecordStars(levelNumber, r.stars);
        }
    }
}
