using System;
using UnityEngine;

namespace BubbleWash
{
    public enum RunPhase { Intro, Running, Paused, Finished }

    /// <summary>
    /// Counters shown on the approved HUD (hearts "5 Full", coins 1,280, gems 36, socks 0/5,
    /// Bubble Blast ×3, Turbo Spin ×3) and the current run phase.
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

        public RunPhase Phase { get; private set; } = RunPhase.Intro;

        public event Action Changed;
        public event Action<RunPhase> PhaseChanged;

        void OnEnable() => Active = this;
        void OnDisable() { if (Active == this) Active = null; }

        public void MakeActive() => Active = this;

        public void SetPhase(RunPhase phase)
        {
            if (Phase == phase) return;
            Phase = phase;
            Time.timeScale = phase == RunPhase.Paused ? 0f : 1f;
            PhaseChanged?.Invoke(phase);
            Changed?.Invoke();
        }

        public void TogglePause()
        {
            if (Phase == RunPhase.Running) SetPhase(RunPhase.Paused);
            else if (Phase == RunPhase.Paused) SetPhase(RunPhase.Running);
        }

        public void AddCoins(int n) { coins += n; Changed?.Invoke(); }
        public void AddGems(int n) { gems += n; Changed?.Invoke(); }
        public void RescueSock() { socksRescued = Mathf.Min(socksGoal, socksRescued + 1); Changed?.Invoke(); }

        public void LoseHeart()
        {
            hearts = Mathf.Max(0, hearts - 1);
            Changed?.Invoke();
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

        /// <summary>Restart the Level 1 opening for another lap (keeps the earned totals).</summary>
        public void ResetLap()
        {
            socksRescued = 0;
            Changed?.Invoke();
        }
    }
}
