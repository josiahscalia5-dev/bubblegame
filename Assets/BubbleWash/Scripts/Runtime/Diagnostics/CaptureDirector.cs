using System;
using System.Collections;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Drives the Play-mode screenshot comparison: poses the running game for each approved screen,
    /// lets waves, particles, animation and the follow camera settle for real, then hands control to
    /// the editor capture callback. Created by the editor tool; not used in builds.
    /// </summary>
    public class CaptureDirector : MonoBehaviour
    {
        public int[] screens = { 3, 4 };
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
            if (env == null || runner == null || rig == null)
            {
                Debug.LogError("[BubbleWash] Capture: Level 1 scene not found in Play mode.");
                finished?.Invoke();
                yield break;
            }

            yield return null;
            foreach (int screen in screens)
            {
                var l = env.layout;
                float z = screen == 3 ? l.startZ : l.tunnelStartZ + l.segmentLength * 1.45f;
                if (session != null) session.SetPhase(screen == 3 ? RunPhase.Intro : RunPhase.Running);
                runner.holdPosition = true;
                runner.PoseAt(z, l.laneCount / 2, Time.timeSinceLevelLoad);
                rig.Snap();
                if (hud != null) hud.ShowScreen(screen);
                // Let the real game run in place: waves, foam, paddling, splashes, bubbles, camera smoothing.
                yield return new WaitForSeconds(settleSeconds);
                yield return new WaitForEndOfFrame();
                capture?.Invoke(screen);
            }
            runner.holdPosition = false;
            finished?.Invoke();
        }
    }
}
