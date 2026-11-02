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
    /// Screen 4 framing as the mascot enters the washer. Level sections (<see cref="SectionDirector"/>)
    /// switch to the Screens 5-12 framings through <see cref="mode"/>, blended over <see cref="modeBlendTime"/>. Smooths lateral and vertical motion, never
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

        // Approved Screens 5-6 (220x538 / 214x537): higher, further view over the outdoor slides; the
        // mascot is ~24-30 % of the width at 66-73 % height, so the camera sits ~8.5 m back.
        public CameraPreset outdoor = new CameraPreset
        {
            name = "Screens 5-6 - Side paths / drop down",
            offset = new Vector3(0f, 3.0f, -8.0f),
            lookOffset = new Vector3(0f, 0.9f, 6f),
            fieldOfView = 58f,
        };
        // Approved Screen 10 (242x467): mascot 35 % of the width, left of centre (35 %), at 63 % height,
        // with the kingdom's castles and waterfalls filling the upper half.
        public CameraPreset kingdom = new CameraPreset
        {
            name = "Screen 10 - Enter the Bubble Kingdom",
            offset = new Vector3(0.45f, 1.0f, -4.9f),
            lookOffset = new Vector3(0.45f, 0.27f, 9f),
            fieldOfView = 60f,
        };
        // Approved Screen 8 (235x465): the camera swings ahead and looks back at the mascot's face;
        // mascot 55 % of the width, centred at 37 % across and 60 % down.
        public CameraPreset front = new CameraPreset
        {
            name = "Screen 8 - Collect (mascot facing the player)",
            offset = new Vector3(-0.25f, 0.7f, 3.2f),
            lookOffset = new Vector3(-0.25f, 0.38f, 0f),
            fieldOfView = 60f,
        };
        // Approved Screen 11 (243x468): facing the mascot from further away (40 % of the width, 45 %
        // across, 64 % down) with the kingdom gate behind it.
        public CameraPreset frontWide = new CameraPreset
        {
            name = "Screen 11 - Rescue progress (mascot facing the player)",
            offset = new Vector3(-0.13f, 1.0f, 4.4f),
            lookOffset = new Vector3(-0.13f, 0.72f, 0f),
            fieldOfView = 60f,
        };
        // Approved Screen 12 (244x468): the mascot (49 % of the width) centred between the checklist and
        // the rewards panel, with its friends and the treasure chest.
        public CameraPreset complete = new CameraPreset
        {
            name = "Screen 12 - Level Complete",
            offset = new Vector3(0f, 0.8f, 3.8f),
            lookOffset = new Vector3(0f, 0.1f, 0f),
            fieldOfView = 55f,
        };

        [Header("Framing chosen by the current level section")]
        public CameraMode mode = CameraMode.Default;
        [Tooltip("Seconds to blend between framings.")]
        public float modeBlendTime = 0.8f;

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
        CameraPreset _current;
        bool _haveCurrent;

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
            _haveCurrent = false;
            Apply(_smoothed, env);
        }

        /// <summary>The framing for a camera mode (Default = the Screen 3 to Screen 4 blend by position).</summary>
        public CameraPreset PresetFor(CameraMode m, float z, Level1Environment env)
        {
            switch (m)
            {
                case CameraMode.Outdoor: return outdoor;
                case CameraMode.Kingdom: return kingdom;
                case CameraMode.Front: return front;
                case CameraMode.FrontWide: return frontWide;
                case CameraMode.Complete: return complete;
                default: return PresetAt(z, env);
            }
        }

        /// <summary>The followed point: mascot z, a fraction of its lane offset, and a damped share of its bobbing.</summary>
        Vector3 Anchor(Vector3 mascot, Level1Environment env)
        {
            if (_runner == null && target != null) _runner = target.GetComponent<BubbleRunner>();
            float floatHeight = _runner != null ? _runner.floatHeight : 0.34f;
            // Follow the water path's elevation (Screen 3's raised path) but not the wave bobbing.
            float lift = _runner != null ? _runner.SurfaceLift : 0f; // riding an elevated side path
            float rest = env != null ? env.layout.waterLevel + WaveField.SlideOffset(0f, mascot.z) + lift + floatHeight : mascot.y;
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
            var target = PresetFor(mode, anchor.z, env);
            if (!_haveCurrent || !Application.isPlaying) { _current = target; _haveCurrent = true; }
            else _current = CameraPreset.Lerp(_current, target, 1f - Mathf.Exp(-Time.deltaTime * 3f / Mathf.Max(0.05f, modeBlendTime)));
            var preset = _current;
            Vector3 offset = preset.offset;
            // Swinging between behind and in front of the mascot (Screens 8, 11, 12): every framing is at
            // least 3 m ahead or behind, so being this close means the camera is mid-swing. Arc round
            // the mascot's side and over it instead of flying through it.
            float near = 1f - Mathf.Clamp01(Mathf.Abs(offset.z) / 1.8f);
            if (near > 0f)
            {
                float swing = near * near * (3f - 2f * near);
                offset.x += swing * 1.3f;
                offset.y += swing * 0.6f;
            }
            Vector3 pos = anchor + offset;
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
            _current = preset; _haveCurrent = true;
        }

        /// <summary>Switch framing immediately (no blend), e.g. for the approved-screen capture.</summary>
        public void SetModeImmediate(CameraMode m)
        {
            mode = m;
            _haveCurrent = false;
            Snap();
        }
    }
}
