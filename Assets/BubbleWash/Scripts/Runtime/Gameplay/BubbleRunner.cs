using System;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// The mascot's movement through the washer: forward travel on the current, lane changes from
    /// left/right swipes, jumps (swipe up), dives (swipe down), floating on the animated waves,
    /// splashes, collisions and the power-ups shown on the approved HUD.
    /// Collision volumes: a sphere for the body, checked against the Environment layer every frame.
    /// </summary>
    [DefaultExecutionOrder(-50)]
    public class BubbleRunner : MonoBehaviour
    {
        [Header("References")]
        public SwipeInput input;
        public MascotAnimator animator;
        public SplashFX splash;

        [Header("Travel")]
        public float cruiseSpeed = 7f;
        public float accelerate = 6f;
        [Tooltip("Seconds to settle into a new lane.")]
        public float laneChangeTime = 0.18f;

        [Header("Floating")]
        [Tooltip("Body centre above the local water surface.")]
        public float floatHeight = 0.34f;
        public float bodyRadius = 0.4f;
        public float bobAmplitude = 0.05f;
        public float bobFrequency = 1.7f;

        [Header("Jump / dive")]
        public float jumpVelocity = 6.2f;
        public float gravity = 17f;
        public float diveDepth = 0.55f;
        public float diveDuration = 0.6f;

        [Header("Power-ups")]
        public float turboMultiplier = 1.6f;
        public float turboDuration = 3f;
        public float bubbleBlastRange = 14f;

        [Header("Collision")]
        public LayerMask environmentMask = 1 << 8;
        public float wallClearance = 0.12f;

        [Header("Capture / testing")]
        [Tooltip("Keep the mascot at its current z while still swimming, bobbing and splashing (used by the screenshot comparison).")]
        public bool holdPosition;

        public event Action<string> Bumped;

        public int Lane { get; private set; }
        public float Speed { get; private set; }
        public bool Airborne => _jumpY > 0f || _jumpV > 0f;

        Level1Environment _env;
        GameSession _session;
        float _x, _xVel;
        float _z;
        float _jumpY, _jumpV;
        float _diveT = -1f;
        float _turboT;
        float _bumpCooldown;
        bool _wasAirborne;
        readonly Collider[] _hits = new Collider[8];

        void Start()
        {
            _env = Level1Environment.Active;
            _session = GameSession.Active;
            if (input != null) { input.Swiped += OnSwipe; input.Tapped += OnTap; }
            ResetToStart();
        }

        void OnDestroy()
        {
            if (input != null) { input.Swiped -= OnSwipe; input.Tapped -= OnTap; }
        }

        public void ResetToStart()
        {
            if (_env == null) _env = Level1Environment.Active;
            var l = _env != null ? _env.layout : new LevelLayout();
            Lane = l.laneCount / 2;
            _x = l.LaneX(Lane); _xVel = 0f;
            _z = l.startZ;
            _jumpY = _jumpV = 0f; _diveT = -1f; _turboT = 0f;
            Speed = 0f;
            Place(0f, Time.timeSinceLevelLoad);
        }

        /// <summary>Put the mascot at a z position (used by the approved-screen preview capture).</summary>
        public void PoseAt(float z, int lane, float time)
        {
            if (_env == null) _env = Level1Environment.Active;
            Lane = lane; _z = z; _x = _env.layout.LaneX(lane);
            Speed = cruiseSpeed;
            if (animator) { animator.speed01 = 1f; animator.lateralVelocity = 0f; }
            Place(0f, time);
        }

        void OnTap()
        {
            if (_session != null && _session.Phase == RunPhase.Intro) { _session.SetPhase(RunPhase.Running); return; }
            if (_session == null || _session.Phase == RunPhase.Running) Spin();
        }

        /// <summary>Quick playful 360-degree spin on the water (tap while running).</summary>
        public void Spin()
        {
            if (animator) { animator.Spin(360f); animator.Squash(-0.06f); }
            if (splash && !Airborne) splash.Burst(transform.position, 0.45f);
        }

        void OnSwipe(SwipeDirection dir)
        {
            if (_session != null && _session.Phase == RunPhase.Intro)
            {
                _session.SetPhase(RunPhase.Running); // a swipe also starts the run
            }
            if (_session != null && _session.Phase != RunPhase.Running) return;
            switch (dir)
            {
                case SwipeDirection.Left: ChangeLane(-1); break;
                case SwipeDirection.Right: ChangeLane(+1); break;
                case SwipeDirection.Up: Jump(); break;
                case SwipeDirection.Down: Dive(); break;
            }
        }

        public void ChangeLane(int delta)
        {
            int target = Mathf.Clamp(Lane + delta, 0, _env.layout.laneCount - 1);
            if (target == Lane) { Bump("edge"); return; }
            if (!LaneIsClear(target)) { Bump("blocked"); return; }
            Lane = target;
            if (animator) animator.Squash(-0.08f);
            if (splash && !Airborne) splash.LaneSplash(transform.position, delta);
        }

        public void Jump()
        {
            if (Airborne || _diveT >= 0f) return;
            _jumpV = jumpVelocity;
            if (animator) { animator.Squash(0.18f); animator.Tumble(); }
            if (splash) splash.Burst(transform.position, 0.8f);
        }

        public void Dive()
        {
            if (Airborne || _diveT >= 0f) return;
            _diveT = 0f;
            if (animator) animator.Squash(0.12f);
            if (splash) splash.Burst(transform.position, 0.6f);
        }

        public void UseTurboSpin()
        {
            if (_session != null && !_session.TryUseTurboSpin()) return;
            _turboT = turboDuration;
            if (animator) animator.Spin(720f);
            if (splash) splash.Burst(transform.position, 1f);
        }

        public void UseBubbleBlast()
        {
            if (_session != null && !_session.TryUseBubbleBlast()) return;
            // Pull every collectible ahead within range into the mascot.
            var all = FindObjectsByType<Collectible>(FindObjectsSortMode.None);
            foreach (var c in all)
            {
                float dz = c.transform.position.z - transform.position.z;
                if (dz > 0f && dz < bubbleBlastRange && !c.IsCollected) c.Collect(transform);
            }
            if (splash) splash.BubbleBlast(transform.position);
        }

        void Update()
        {
            float dt = Time.deltaTime;
            if (_env == null) { _env = Level1Environment.Active; if (_env == null) return; }
            var l = _env.layout;
            bool running = _session == null || _session.Phase == RunPhase.Running;

            float target = running ? cruiseSpeed * (_turboT > 0f ? turboMultiplier : 1f) : 0f;
            Speed = Mathf.MoveTowards(Speed, target, accelerate * dt * (target > Speed ? 1f : 2f));
            _turboT = Mathf.Max(0f, _turboT - dt);
            if (holdPosition) Speed = cruiseSpeed; else _z += Speed * dt;

            // Smooth lane change, limited by the passage width at body height.
            float laneX = l.LaneX(Lane);
            float maxX = Mathf.Max(0f, MaxLateral(l, _z) - wallClearance);
            laneX = Mathf.Clamp(laneX, -maxX, maxX);
            float prevX = _x;
            _x = Mathf.SmoothDamp(_x, laneX, ref _xVel, laneChangeTime, Mathf.Infinity, dt);

            // Jump arc.
            if (_jumpV != 0f || _jumpY > 0f)
            {
                _jumpV -= gravity * dt;
                _jumpY += _jumpV * dt;
                if (_jumpY <= 0f) { _jumpY = 0f; _jumpV = 0f; }
            }
            bool airborne = Airborne;
            if (_wasAirborne && !airborne) Land();
            _wasAirborne = airborne;

            if (_diveT >= 0f)
            {
                _diveT += dt;
                if (_diveT >= diveDuration) { _diveT = -1f; if (splash) splash.Burst(transform.position, 0.7f); }
            }

            if (animator)
            {
                animator.speed01 = Mathf.Clamp01(Speed / cruiseSpeed);
                animator.lateralVelocity = dt > 0f ? (_x - prevX) / dt : 0f;
                animator.airborne = airborne;
                animator.diving = _diveT >= 0f;
            }

            Place(dt, Time.timeSinceLevelLoad);
            CheckEnvironmentContacts();
            if (splash) splash.Wake(transform.position, Speed, airborne || _diveT >= 0f);

            if (_z > l.loopZ) Loop();
        }

        void Place(float dt, float time)
        {
            var l = _env != null ? _env.layout : new LevelLayout();
            float water = WaveField.Height(_x, _z, time);
            float bob = Mathf.Sin(time * bobFrequency * 2f * Mathf.PI) * bobAmplitude;
            float dive = 0f;
            if (_diveT >= 0f) dive = Mathf.Sin(Mathf.Clamp01(_diveT / diveDuration) * Mathf.PI) * diveDepth;
            float y = water + floatHeight + bob + _jumpY - dive;
            // Keep the top of the head under the drum ceiling during jumps.
            float ceiling = l.waterLevel + l.axisHeight + l.tunnelRadius - bodyRadius - wallClearance;
            if (l.IsEnclosed(_z)) y = Mathf.Min(y, ceiling);
            transform.position = new Vector3(_x, y, _z);

            // Pitch with the wave slope so the mascot rides the water.
            Vector3 n = WaveField.Normal(_x, _z);
            Quaternion ride = Quaternion.FromToRotation(Vector3.up, Vector3.Lerp(Vector3.up, n, 0.6f));
            transform.rotation = ride;
        }

        void Land()
        {
            if (animator) animator.Squash(0.3f);
            if (splash) splash.Burst(transform.position, 1.2f);
        }

        float MaxLateral(LevelLayout l, float z)
        {
            if (!l.IsEnclosed(z)) return 50f;
            // Narrowest point of the circle the body sphere occupies.
            float centre = floatHeight; // body centre height above the water
            float half = Mathf.Min(l.PassageHalfWidth(centre), l.PassageHalfWidth(Mathf.Max(0f, centre - bodyRadius * 0.6f)));
            return half - bodyRadius;
        }

        bool LaneIsClear(int lane)
        {
            Vector3 p = transform.position; p.x = _env.layout.LaneX(lane);
            return Physics.OverlapSphereNonAlloc(p, bodyRadius * 0.9f, _hits, environmentMask, QueryTriggerInteraction.Ignore) == 0;
        }

        void CheckEnvironmentContacts()
        {
            _bumpCooldown -= Time.deltaTime;
            Vector3 p = transform.position;
            int n = Physics.OverlapSphereNonAlloc(p, bodyRadius, _hits, ~0, QueryTriggerInteraction.Collide);
            for (int i = 0; i < n; i++)
            {
                var c = _hits[i];
                if (c.attachedRigidbody != null && c.attachedRigidbody.gameObject == gameObject) continue;
                if (c.isTrigger)
                {
                    var col = c.GetComponent<Collectible>();
                    if (col != null) col.Collect(transform);
                    continue;
                }
                if (((1 << c.gameObject.layer) & environmentMask) != 0 && _bumpCooldown <= 0f)
                {
                    _bumpCooldown = 0.6f;
                    // Push back toward the centre lane and react.
                    Lane = Mathf.Clamp(Lane + (p.x > 0f ? -1 : 1), 0, _env.layout.laneCount - 1);
                    Bump(c.name);
                }
            }
        }

        void Bump(string what)
        {
            if (animator) animator.Squash(0.22f);
            if (splash) splash.Burst(transform.position, 0.5f);
            Bumped?.Invoke(what);
        }

        void Loop()
        {
            // Screens 5-12 are not built yet: loop the opening so it can be played and profiled.
            foreach (var c in FindObjectsByType<Collectible>(FindObjectsInactive.Include, FindObjectsSortMode.None)) c.ResetForLap();
            if (_session != null) { _session.ResetLap(); _session.SetPhase(RunPhase.Intro); }
            ResetToStart();
            var rig = FindFirstObjectByType<RunnerCameraRig>();
            if (rig) rig.Snap();
        }
    }
}
