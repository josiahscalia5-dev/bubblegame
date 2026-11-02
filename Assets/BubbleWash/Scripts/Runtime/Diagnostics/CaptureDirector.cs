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

        [Header("Gem collection sequence (instead of the approved screens)")]
        public bool gemSequence;
        public int gemFrames = 16;
        public float gemFrameInterval = 0.1f;
        /// <summary>Called at the end of the frame for each gem-sequence frame (index, gem count shown on the HUD).</summary>
        public Action<int, int> captureGemFrame;

        IEnumerator Start()
        {
            if (gemSequence) { yield return GemSequence(); yield break; }
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

        /// <summary>
        /// The real game running into a gem: the mascot starts about a second before a gem on the water
        /// in its lane, and frames are captured while the gem turns, is collected (sparkle burst, chime)
        /// and the HUD gem counter goes up.
        /// </summary>
        IEnumerator GemSequence()
        {
            var env = Level1Environment.Active;
            var session = GameSession.Active;
            var runner = env != null ? env.runner : FindFirstObjectByType<BubbleRunner>();
            var rig = FindFirstObjectByType<RunnerCameraRig>();
            var hud = FindFirstObjectByType<GameHud>();
            Collectible gem = null;
            foreach (var c in FindObjectsByType<Collectible>(FindObjectsSortMode.None))
                if (c.kind == CollectibleKind.Gem && c.transform.position.y < 1f && (gem == null || c.transform.position.z < gem.transform.position.z)) gem = c;
            if (env == null || runner == null || rig == null || gem == null)
            {
                Debug.LogError("[BubbleWash] Gem capture: Level 1 scene or a gem on the water not found in Play mode.");
                finished?.Invoke();
                yield break;
            }
            var l = env.layout;
            int lane = 0;
            for (int i = 1; i < l.laneCount; i++)
                if (Mathf.Abs(l.LaneX(i) - gem.transform.position.x) < Mathf.Abs(l.LaneX(lane) - gem.transform.position.x)) lane = i;

            yield return null;
            if (session != null) session.SetPhase(RunPhase.Running);
            runner.holdPosition = false;
            runner.PoseAt(gem.transform.position.z - runner.cruiseSpeed * 1.0f, lane, Time.timeSinceLevelLoad);
            rig.Snap();
            if (hud != null) hud.ShowScreen(4);
            for (int f = 0; f < gemFrames; f++)
            {
                yield return new WaitForSeconds(gemFrameInterval);
                yield return new WaitForEndOfFrame();
                captureGemFrame?.Invoke(f, session != null ? session.gems : -1);
            }
            finished?.Invoke();
        }
    }
}
