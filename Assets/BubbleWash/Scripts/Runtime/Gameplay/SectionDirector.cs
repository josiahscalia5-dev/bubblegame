using System;
using System.Collections.Generic;
using UnityEngine;

namespace BubbleWash
{
    public enum CameraMode { Default, Outdoor, Kingdom, Front, Complete, FrontWide }
    public enum BannerPlace { Top, BottomRight }
    public enum MissionPlace { Hidden, TopLeft, TopCentre }

    /// <summary>One stretch of Level 1 that matches an approved screen (its banner, camera and HUD).</summary>
    [Serializable]
    public class LevelSection
    {
        public int screen;
        public string line1;
        public string line2;
        [Tooltip("Red warning banner with a warning icon (Screens 7 and 9).")]
        public bool warning;
        public BannerPlace bannerPlace = BannerPlace.Top;
        [Tooltip("Banner position in board px (approved screens are 537 px tall): x from the screen centre, y from the top (Top) or the bottom (BottomRight).")]
        public Vector2 bannerAt = new Vector2(0f, 48f);
        public Vector2 bannerSize = new Vector2(205f, 64f);
        [Tooltip("Banner tilt in degrees (positive = counter-clockwise), as drawn on the approved screen.")]
        public float bannerTilt;
        [Tooltip("Pink hint arrow (Screens 5 and 6).")]
        public bool hintArrow;
        [Tooltip("Arrow centre in board px: x from the screen centre, y from the top.")]
        public Vector2 arrowAt = new Vector2(30f, 260f);
        public Vector2 arrowSize = new Vector2(40f, 46f);
        public float arrowTilt;
        public bool showPowerUps = true;
        public MissionPlace mission = MissionPlace.Hidden;
        [Tooltip("Pause button on the counters row (Screens 7-12) instead of below it (Screens 4-6).")]
        public bool pauseInTopRow;
        public float startZ, endZ;
        public CameraMode camera = CameraMode.Default;
        [Tooltip("When > 0: use 'camera' for this many seconds, then 'cameraAfter' (Screens 8 and 11 swing round to the mascot's face briefly).")]
        public float cameraSeconds;
        public CameraMode cameraAfter = CameraMode.Default;

        [Header("Approved-screen capture pose (Bubble Wash > 2)")]
        public float captureZ;
        public float captureX;
        [Tooltip("Height above the main path (hopping onto / riding a side path).")]
        public float captureLift;
        public float captureJump;
        public bool captureOnSidePath;
    }

    /// <summary>
    /// Walks the mascot through the approved screens in order: shows each section's banner when it is
    /// entered, switches the camera framing and the HUD layout, and shows Level Complete (Screen 12)
    /// when the run finishes.
    /// </summary>
    [DefaultExecutionOrder(50)]
    public class SectionDirector : MonoBehaviour
    {
        public List<LevelSection> sections = new List<LevelSection>();
        public BubbleRunner runner;
        public RunnerCameraRig rig;
        public GameHud hud;
        public float bannerSeconds = 2.6f;

        public LevelSection Current { get; private set; }
        public event Action<LevelSection> Entered;

        float _cameraUntil;
        bool _cameraTimed;
        bool _finishShown;
        GameSession _session;

        void Start()
        {
            _session = GameSession.Active;
            if (_session != null) _session.PhaseChanged += OnPhase;
        }

        void OnDestroy()
        {
            if (_session != null) _session.PhaseChanged -= OnPhase;
        }

        void OnPhase(RunPhase phase)
        {
            if (phase == RunPhase.Finished) ShowFinish();
            // Back on the Screen 3 intro after a restart: forget the section so it is entered again.
            if (phase == RunPhase.Intro) { Current = null; _finishShown = false; if (rig != null) rig.mode = CameraMode.Default; }
        }

        void Update()
        {
            if (runner == null || _finishShown) return;
            var s = SectionAt(runner.transform.position.z);
            if (s != Current)
            {
                Current = s;
                if (s != null) Enter(s, bannerSeconds);
            }
            if (_cameraTimed && Time.time > _cameraUntil && rig != null && Current != null)
            {
                _cameraTimed = false;
                rig.mode = Current.cameraAfter;
            }
        }

        public LevelSection SectionAt(float z)
        {
            foreach (var s in sections) if (z >= s.startZ && z < s.endZ) return s;
            return null;
        }

        public LevelSection ForScreen(int screen) => sections.Find(s => s.screen == screen);

        /// <summary>Apply a section's banner, HUD and camera. <paramref name="seconds"/> &lt;= 0 keeps the banner up (captures).</summary>
        public void Enter(LevelSection s, float seconds)
        {
            if (hud != null) hud.ShowSection(s, seconds);
            if (rig != null)
            {
                rig.mode = s.camera;
                _cameraTimed = s.cameraSeconds > 0f;
                _cameraUntil = Time.time + s.cameraSeconds;
            }
            Entered?.Invoke(s);
        }

        void ShowFinish()
        {
            if (_finishShown) return;
            _finishShown = true;
            _cameraTimed = false;
            if (rig != null) rig.mode = CameraMode.Complete;
            if (hud != null && _session != null) hud.ShowComplete(_session.Result());
        }
    }
}
