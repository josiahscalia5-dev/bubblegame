using System;
using System.Collections;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Drives the Play-mode screenshot comparison: poses the running game for each approved screen
    /// (3-12), lets waves, particles, animation, enemies and the follow camera settle for real, then
    /// hands control to the editor capture callback. Created by the editor tool; not used in builds.
    /// </summary>
    public class CaptureDirector : MonoBehaviour
    {
        public int[] screens = { 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };
        public float settleSeconds = 2.5f;
        /// <summary>Called at the end of the frame for each screen (screen number).</summary>
        public Action<int> capture;
        /// <summary>Called when every screen has been captured.</summary>
        public Action finished;

        IEnumerator Start()
        {
            var env = Level1Environment.Active;
            var session = GameSession.Active;
            var runner = env != null ? env.runner : FindFirstObjectByType<BubbleRunner>();
            var rig = FindFirstObjectByType<RunnerCameraRig>();
            var hud = FindFirstObjectByType<GameHud>();
            var director = FindFirstObjectByType<SectionDirector>();
            if (env == null || runner == null || rig == null)
            {
                Debug.LogError("[BubbleWash] Capture: Level 1 scene not found in Play mode.");
                finished?.Invoke();
                yield break;
            }
            if (session != null) session.useSavedProgress = false; // never touch the player's saved progress
            if (director != null) director.enabled = false;        // the capture chooses each section itself

            yield return null;
            foreach (int screen in screens)
            {
                if (session != null) session.SetPhase(screen == 3 ? RunPhase.Intro : RunPhase.Running);
                runner.holdPosition = true;
                if (!ApprovedScreenPoses.Pose(screen, env, runner, rig, hud, director, session, Time.timeSinceLevelLoad))
                {
                    Debug.LogWarning($"[BubbleWash] Capture: Screen {screen} is not part of this Level 1 scene (rebuild it with Bubble Wash > 1).");
                    continue;
                }
                rig.Snap();
                if (session != null && hud != null) hud.Refresh();
                var section = director != null ? director.ForScreen(screen) : null;
                if (screen == 5 && section != null)
                {
                    // Screen 5 is mid-hop: ride the main path, then hop toward the side path just before the shot.
                    runner.PoseAt(section.captureZ, 0, Time.timeSinceLevelLoad);
                    yield return new WaitForSeconds(settleSeconds - 0.22f);
                    runner.HopTo(SidePath.Reachable(-1, section.captureZ, 3f));
                    yield return new WaitForSeconds(0.22f);
                }
                else
                {
                    // Let the real game run in place: waves, foam, paddling, splashes, bubbles, camera smoothing.
                    yield return new WaitForSeconds(settleSeconds);
                }
                yield return new WaitForEndOfFrame();
                capture?.Invoke(screen);
            }
            runner.holdPosition = false;
            if (director != null) director.enabled = true;
            finished?.Invoke();
        }
    }
}
