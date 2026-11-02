using System.Collections;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// The live 3D scene behind Screens 1 and 2: the Meshy castle with waterfalls, the mascot facing
    /// the player with its friends, bubbling water, a gently swaying camera, and the live picture of
    /// the castle used on the Level 1 card.
    /// </summary>
    [ExecuteAlways]
    public class MainMenuDirector : MonoBehaviour
    {
        public MascotAnimator mascot;
        public Transform cameraRig;
        [Tooltip("Renders the Level 1 card picture (Screen 2).")]
        public Camera thumbnailCamera;
        public float swayDegrees = 1.2f;
        public float swaySpeed = 0.25f;

        Quaternion _baseRotation;
        Vector3 _basePosition;

        void OnEnable()
        {
            if (cameraRig) { _baseRotation = cameraRig.rotation; _basePosition = cameraRig.position; }
            PushWater(0f);
        }

        IEnumerator Start()
        {
            if (!Application.isPlaying) yield break;
            // Let bubbles and waterfalls fill in, then refresh the card picture now and then.
            while (true)
            {
                yield return new WaitForSeconds(0.4f);
                if (thumbnailCamera) thumbnailCamera.Render();
                yield return new WaitForSeconds(2.6f);
            }
        }

        void Update()
        {
            float t = Application.isPlaying ? Time.timeSinceLevelLoad : 2.4f;
            PushWater(t);
            if (!Application.isPlaying) return;
            if (mascot)
            {
                // Happy idle: gentle paddling, a little sway, as on the approved home screen.
                mascot.speed01 = 0.35f;
                mascot.lateralVelocity = Mathf.Sin(t * 1.3f) * 0.6f;
            }
            if (cameraRig)
            {
                float a = Mathf.Sin(t * swaySpeed * 2f * Mathf.PI) * swayDegrees;
                cameraRig.SetPositionAndRotation(_basePosition + new Vector3(Mathf.Sin(t * 0.4f) * 0.08f, Mathf.Sin(t * 0.55f) * 0.05f, 0f),
                    _baseRotation * Quaternion.Euler(a * 0.3f, a, 0f));
            }
        }

        /// <summary>Flat bubbling water for the menu (no raised path, no drums).</summary>
        public void PushWater(float time)
        {
            WaveField.Time = time;
            WaveField.Scale = 1f;
            WaveField.Slide = Vector4.zero;
            WaveField.Tunnel = new Vector4(-1000f, -999f, 2.5f, 1.5f);
            WaveField.Tunnel2 = Vector4.zero;
            WaveField.Rings = Vector4.zero;
            WaveField.PushGlobals(mascot != null ? mascot.transform.position : Vector3.zero, 3f);
        }
    }
}
