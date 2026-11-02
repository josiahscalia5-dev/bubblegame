using System;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>A camera framing relative to the mascot, matched to one approved screen.</summary>
    [Serializable]
    public struct CameraPreset
    {
        public string name;
        [Tooltip("Camera position relative to the mascot (world axes; +Z is forward).")]
        public Vector3 offset;
        [Tooltip("Point the camera looks at, relative to the mascot.")]
        public Vector3 lookOffset;
        [Tooltip("Vertical field of view (portrait).")]
        public float fieldOfView;

        public static CameraPreset Lerp(CameraPreset a, CameraPreset b, float t) => new CameraPreset
        {
            name = t < 0.5f ? a.name : b.name,
            offset = Vector3.Lerp(a.offset, b.offset, t),
            lookOffset = Vector3.Lerp(a.lookOffset, b.lookOffset, t),
            fieldOfView = Mathf.Lerp(a.fieldOfView, b.fieldOfView, t),
        };
    }

    /// <summary>
    /// Third-person follow camera. Uses the Screen 3 framing outside the castle and blends to the
    /// Screen 4 framing as the mascot enters the washer. Smooths lateral and vertical motion, never
    /// lags in the travel direction, and is clamped inside the circular passage so it can follow
    /// the mascot through the portal and the drum without clipping the walls.
    /// </summary>
    [DefaultExecutionOrder(100)]
    public class RunnerCameraRig : MonoBehaviour
    {
        public Transform target;
        public Camera cam;

        [Header("Approved framings")]
        // Fitted to the approved Screen 3 (269x538 crop): portal centre at 44.6 % height, portal gold ring
        // 62 % of the width, mascot centre at 67.8 % height and 47 % of the width.
        public CameraPreset screen3 = new CameraPreset
        {
            name = "Screen 3 - Let's go! Into the washing machine",
            offset = new Vector3(0f, 1.11f, -4.01f),      // camera 1.45 m above the water
            lookOffset = new Vector3(0f, 0.45f, 5.97f),   // 3.8 degrees down
            fieldOfView = 55f,
        };
        // Fitted to the approved Screen 4 (231x537 crop): drum vanishing point at 48.8 % height, mascot
        // centre at 71.7 % height and 56 % of the width.
        public CameraPreset screen4 = new CameraPreset
        {
            name = "Screen 4 - Rescue 5 lost socks (inside the drum)",
            offset = new Vector3(0f, 1.03f, -3.58f),      // camera 1.37 m above the water
            lookOffset = new Vector3(0f, 0.89f, 6.42f),   // 0.8 degrees down
            fieldOfView = 60f,
        };

        [Header("Blend (relative to the castle / tunnel)")]
        [Tooltip("Start blending this far in front of the castle face.")]
        public float blendStartBeforeCastle = 4f;
        [Tooltip("Finish blending this far inside the tunnel.")]
        public float blendEndInsideTunnel = 3f;

        [Header("Smoothing")]
        [Range(0f, 1f)] public float lateralFollow = 0.55f;
        [Range(0f, 1f)] public float verticalFollow = 0.35f;
        public float smoothTime = 0.14f;
        public float wallClearance = 0.4f;

        Vector3 _vel;
        Vector3 _smoothed;
        bool _initialised;
        float _shake;
        BubbleRunner _runner;

        void OnEnable()
        {
            if (cam == null) cam = GetComponent<Camera>();
            _runner = target != null ? target.GetComponent<BubbleRunner>() : null;
            if (_runner != null) _runner.Bumped += OnBumped;
        }

        void OnDisable()
        {
            if (_runner != null) _runner.Bumped -= OnBumped;
        }

        void OnBumped(string what) => _shake = 0.25f;

        void LateUpdate()
        {
            if (target == null) return;
            var env = Level1Environment.Active;
            Vector3 anchor = Anchor(target.position, env);
            if (!_initialised) { _smoothed = anchor; _initialised = true; }
            _smoothed.x = Mathf.SmoothDamp(_smoothed.x, anchor.x, ref _vel.x, smoothTime);
            _smoothed.y = Mathf.SmoothDamp(_smoothed.y, anchor.y, ref _vel.y, smoothTime * 1.6f);
            _smoothed.z = anchor.z;
            Apply(_smoothed, env);
            if (_shake > 0f)
            {
                _shake = Mathf.Max(0f, _shake - Time.deltaTime);
                transform.position += UnityEngine.Random.insideUnitSphere * (_shake * 0.12f);
            }
        }

        /// <summary>Jump straight to the current framing (after a teleport or for captures).</summary>
        public void Snap()
        {
            if (target == null) return;
            var env = Level1Environment.Active;
            _smoothed = Anchor(target.position, env);
            _vel = Vector3.zero;
            _initialised = true;
            Apply(_smoothed, env);
        }

        /// <summary>The followed point: mascot z, a fraction of its lane offset, and a damped share of its bobbing.</summary>
        Vector3 Anchor(Vector3 mascot, Level1Environment env)
        {
            if (_runner == null && target != null) _runner = target.GetComponent<BubbleRunner>();
            float floatHeight = _runner != null ? _runner.floatHeight : 0.34f;
            // Follow the water path's elevation (Screen 3's raised path) but not the wave bobbing.
            float rest = env != null ? env.layout.waterLevel + WaveField.SlideOffset(0f, mascot.z) + floatHeight : mascot.y;
            return new Vector3(mascot.x * lateralFollow, Mathf.Lerp(rest, mascot.y, verticalFollow), mascot.z);
        }

        public CameraPreset PresetAt(float z, Level1Environment env)
        {
            if (env == null) return screen3;
            var l = env.layout;
            float t = Mathf.InverseLerp(l.castleFrontZ - blendStartBeforeCastle, l.tunnelStartZ + blendEndInsideTunnel, z);
            t = t * t * (3f - 2f * t);
            return CameraPreset.Lerp(screen3, screen4, t);
        }

        void Apply(Vector3 anchor, Level1Environment env)
        {
            var preset = PresetAt(anchor.z, env);
            Vector3 pos = anchor + preset.offset;
            Vector3 look = anchor + preset.lookOffset;
            if (env != null)
            {
                pos = env.layout.ClampInsidePassage(pos, wallClearance);
                pos.y = Mathf.Max(pos.y, env.layout.waterLevel + 0.35f);
            }
            transform.SetPositionAndRotation(pos, Quaternion.LookRotation(look - pos, Vector3.up));
            if (cam) cam.fieldOfView = preset.fieldOfView;
        }

        /// <summary>Pose the camera for a specific approved framing (preview capture, no smoothing).</summary>
        public void ApplyPreset(CameraPreset preset, Vector3 mascotPosition)
        {
            var env = Level1Environment.Active;
            Vector3 anchor = mascotPosition;
            if (env != null && target != null) anchor = Anchor(mascotPosition, env);
            Vector3 pos = anchor + preset.offset;
            if (env != null) pos = env.layout.ClampInsidePassage(pos, wallClearance);
            transform.SetPositionAndRotation(pos, Quaternion.LookRotation(anchor + preset.lookOffset - pos, Vector3.up));
            if (cam) cam.fieldOfView = preset.fieldOfView;
        }
    }
}
