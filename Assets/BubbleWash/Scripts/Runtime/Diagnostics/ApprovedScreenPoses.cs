using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Puts Level 1 into the exact moment shown on an approved screen (3-12): mascot position, camera
    /// framing, HUD layout and the counters printed on the approved image. Shared by the edit-mode and
    /// the play-mode screenshot comparison (Bubble Wash > 2).
    /// </summary>
    public static class ApprovedScreenPoses
    {
        /// <summary>The checklist and rewards printed on approved Screen 12.</summary>
        public static readonly RunResult ApprovedResult = new RunResult
        {
            socks = 5, socksGoal = 5, coinsCollected = 50, coinsGoal = 50, specialGems = 1, specialGemsGoal = 1,
            stars = 3, rewardCoins = 300, rewardGems = 10, rewardSocks = 5,
        };

        public static float Screen4Z(LevelLayout l) => l.tunnelStartZ + l.segmentLength * 1.45f;

        /// <summary>Socks shown on the mission panel of each approved screen (Screen 4: 0/5, Screen 11: 4/5).</summary>
        public static int SocksShown(int screen) => screen <= 4 ? 0 : screen == 11 ? 4 : screen == 12 ? 5 : 3;

        /// <summary>Pose the level for an approved screen. Returns false when the screen is not part of this level.</summary>
        public static bool Pose(int screen, Level1Environment env, BubbleRunner runner, RunnerCameraRig rig, GameHud hud,
                                SectionDirector director, GameSession session, float time)
        {
            var l = env.layout;
            int mid = l.laneCount / 2;
            var s = director != null ? director.ForScreen(screen) : null;
            var mode = CameraMode.Default;
            if (screen == 3) runner.PoseAt(l.startZ, mid, time);
            else if (screen == 4) runner.PoseAt(Screen4Z(l), mid, time);
            else if (screen == 12)
            {
                if (l.drum2EndZ <= l.drum2StartZ) return false;
                runner.PoseAt(l.finishZ + runner.finishStopDistance, mid, time);
                mode = CameraMode.Complete;
            }
            else if (s != null)
            {
                SidePath side = null;
                if (s.captureOnSidePath)
                    foreach (var p in SidePath.All) if (p.ContainsZ(s.captureZ) && Mathf.Abs(p.centreX - s.captureX) < 0.5f) side = p;
                if (s.captureOnSidePath && side == null)
                    foreach (var p in Object.FindObjectsByType<SidePath>(FindObjectsSortMode.None))
                        if (p.ContainsZ(s.captureZ) && Mathf.Abs(p.centreX - s.captureX) < 0.5f) side = p;
                runner.PoseCustom(s.captureZ, s.captureX, s.captureLift, s.captureJump, time, side);
                mode = s.camera;
            }
            else return false;

            env.PushWaveGlobals(runner.transform.position);
            var anim = runner.GetComponent<MascotAnimator>();
            if (anim != null) anim.Tick(0.016f, time);

            rig.mode = mode;
            var preset = screen == 3 ? rig.screen3 : screen == 4 ? rig.screen4 : rig.PresetFor(mode, runner.transform.position.z, env);
            rig.ApplyPreset(preset, runner.transform.position);

            if (session != null)
            {
                session.hearts = session.maxHearts;
                session.coins = 1280;
                session.gems = 36;
                session.bubbleBlasts = 3;
                session.turboSpins = 3;
                session.socksRescued = SocksShown(screen);
            }
            if (hud != null)
            {
                hud.Refresh();
                hud.ShowScreen(screen == 3 ? 3 : 4);
                if (screen == 12)
                {
                    hud.ShowComplete(ApprovedResult);
                    if (hud.complete != null) hud.complete.SkipAnimation();
                }
                else if (screen >= 4 && s != null) hud.ShowSection(s, 0f);
            }
            return true;
        }
    }
}
