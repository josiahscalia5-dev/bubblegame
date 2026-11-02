using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Procedural animation for the mascot: paddling arms, kicking feet, squash and stretch, leaning
    /// into turns, jump tumbles, turbo spins and blinking. Works on the temporary placeholder
    /// mascot and on the final Meshy mascot as long as the same transforms are assigned.
    /// </summary>
    public class MascotAnimator : MonoBehaviour
    {
        [Header("Rig (assigned by the builder)")]
        public Transform body;        // root of the visible character, rotated/squashed here
        public Transform armLeft, armRight;
        public Transform footLeft, footRight;
        public Transform eyes;        // parent of both eyes, scaled for blinks

        [Header("Swimming")]
        public float paddleRate = 2.4f;     // strokes per second at full speed
        public float paddleRadius = 0.075f;
        public float kickAngle = 28f;

        [Header("Expressiveness")]
        public float maxLean = 24f;
        public float maxYaw = 18f;
        public float squashRecover = 9f;

        // Driven by BubbleRunner each frame.
        [HideInInspector] public float speed01;
        [HideInInspector] public float lateralVelocity;
        [HideInInspector] public bool airborne;
        [HideInInspector] public bool diving;

        Vector3 _armL0, _armR0, _footL0, _footR0;
        Quaternion _footLR0, _footRR0;
        float _squash;            // >0 squashed, <0 stretched
        float _tumble;            // remaining degrees of jump flip
        float _spin;              // remaining degrees of turbo spin
        float _paddlePhase;
        float _nextBlink;
        float _blinkT = -1f;
        float _lean, _yaw;

        void Awake()
        {
            if (armLeft) _armL0 = armLeft.localPosition;
            if (armRight) _armR0 = armRight.localPosition;
            if (footLeft) { _footL0 = footLeft.localPosition; _footLR0 = footLeft.localRotation; }
            if (footRight) { _footR0 = footRight.localPosition; _footRR0 = footRight.localRotation; }
            _nextBlink = Random.Range(1.5f, 4f);
        }

        public void Squash(float amount) => _squash = Mathf.Clamp(_squash + amount, -0.35f, 0.35f);
        public void Tumble() => _tumble = 360f;
        public void Spin(float degrees) => _spin = Mathf.Max(_spin, degrees);

        void LateUpdate() => Tick(Time.deltaTime, Time.time);

        /// <summary>Advance the animation. Public so the preview capture can pose the mascot without play mode.</summary>
        public void Tick(float dt, float time)
        {
            if (body == null) return;

            // Swimming strokes: arms trace circles, feet flutter-kick. Faster when moving.
            float rate = Mathf.Lerp(0.8f, paddleRate, speed01) * (airborne ? 0.4f : 1f);
            _paddlePhase += dt * rate * 2f * Mathf.PI;
            float p = _paddlePhase;
            if (armLeft) armLeft.localPosition = _armL0 + new Vector3(0f, Mathf.Sin(p), Mathf.Cos(p)) * paddleRadius;
            if (armRight) armRight.localPosition = _armR0 + new Vector3(0f, Mathf.Sin(p + Mathf.PI), Mathf.Cos(p + Mathf.PI)) * paddleRadius;
            float kick = Mathf.Sin(p * 1.6f) * kickAngle;
            if (footLeft) { footLeft.localRotation = _footLR0 * Quaternion.Euler(kick, 0, 0); footLeft.localPosition = _footL0; }
            if (footRight) { footRight.localRotation = _footRR0 * Quaternion.Euler(-kick, 0, 0); footRight.localPosition = _footR0; }

            // Lean into lane changes and look where we are going.
            _lean = Mathf.Lerp(_lean, Mathf.Clamp(-lateralVelocity * 9f, -maxLean, maxLean), 1f - Mathf.Exp(-dt * 10f));
            _yaw = Mathf.Lerp(_yaw, Mathf.Clamp(lateralVelocity * 7f, -maxYaw, maxYaw), 1f - Mathf.Exp(-dt * 8f));

            // Tumble (jump flip) and spin (turbo) consume their remaining angle quickly.
            float tumbleStep = Mathf.Min(_tumble, dt * 720f);
            _tumble -= tumbleStep;
            float spinStep = Mathf.Min(_spin, dt * 1080f);
            _spin -= spinStep;

            float swimRoll = Mathf.Sin(p) * 4f * speed01;
            float flip = 360f - _tumble; if (_tumble <= 0f) flip = 0f;
            float spin = _spin > 0f ? -_spin : 0f;
            body.localRotation = Quaternion.Euler(flip + (diving ? 25f : 0f), _yaw + spin, _lean + swimRoll);

            // Squash and stretch, with a breathing wobble.
            _squash = Mathf.Lerp(_squash, 0f, 1f - Mathf.Exp(-dt * squashRecover));
            float wobble = Mathf.Sin(time * 3.3f) * 0.015f;
            float sq = _squash + wobble;
            body.localScale = new Vector3(1f + sq * 0.6f, 1f - sq, 1f + sq * 0.6f);

            // Blink.
            if (eyes)
            {
                _nextBlink -= dt;
                if (_nextBlink <= 0f) { _blinkT = 0f; _nextBlink = Random.Range(2f, 5f); }
                float open = 1f;
                if (_blinkT >= 0f)
                {
                    _blinkT += dt;
                    open = Mathf.Abs(1f - _blinkT / 0.07f);
                    if (_blinkT > 0.14f) { _blinkT = -1f; open = 1f; }
                }
                var s = eyes.localScale; s.y = Mathf.Max(0.08f, open); eyes.localScale = s;
            }
        }
    }
}
