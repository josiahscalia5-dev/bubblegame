using System.Text;
using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Mobile frame-rate setup plus an on-device FPS readout (average, 1 % low, frame time).
    /// Toggle with a three-finger tap or F1. Logs a summary every lap so device tests leave a record.
    /// </summary>
    [DefaultExecutionOrder(-300)]
    public class PerformanceProbe : MonoBehaviour
    {
        public int targetFrameRate = 60;
        public bool showOverlay;
        public float sampleSeconds = 5f;

        readonly float[] _frames = new float[600];
        int _count, _head, _lastFingers;
        float _windowStart;
        string _summary = "";
        GUIStyle _style;

        void Awake()
        {
            Application.targetFrameRate = targetFrameRate;
            QualitySettings.vSyncCount = 0;
            Screen.sleepTimeout = SleepTimeout.NeverSleep;
        }

        void Update()
        {
            float dt = Time.unscaledDeltaTime;
            _frames[_head] = dt; _head = (_head + 1) % _frames.Length; _count = Mathf.Min(_count + 1, _frames.Length);

            // Toggle: three fingers down, or F1. Uses whichever input backend the project has enabled
            // (calling the legacy Input class with only the Input System enabled throws).
            int fingers = 0;
            bool f1 = false, f12 = false;
#if BW_INPUT_SYSTEM && ENABLE_INPUT_SYSTEM
            var ts = UnityEngine.InputSystem.Touchscreen.current;
            if (ts != null) foreach (var t in ts.touches) if (t.press.isPressed) fingers++;
            var kb = UnityEngine.InputSystem.Keyboard.current;
            f1 = kb != null && kb.f1Key.wasPressedThisFrame;
            f12 = kb != null && kb.f12Key.wasPressedThisFrame;
#else
            fingers = Input.touchCount;
            f1 = Input.GetKeyDown(KeyCode.F1);
            f12 = Input.GetKeyDown(KeyCode.F12);
#endif
            if ((fingers >= 3 && _lastFingers < 3) || f1) showOverlay = !showOverlay;
            if (f12) SaveScreenshot();
            _lastFingers = fingers;
            if (Time.unscaledTime - _windowStart >= sampleSeconds)
            {
                _windowStart = Time.unscaledTime;
                _summary = Summarise();
                Debug.Log("[BubbleWash perf] " + _summary);
            }
        }

        /// <summary>F12: save the current Game view (editor: Previews/Captures, device: persistent data path).</summary>
        public static void SaveScreenshot()
        {
            string dir = Application.isEditor ? "Previews/Captures" : Application.persistentDataPath;
            System.IO.Directory.CreateDirectory(dir);
            string path = System.IO.Path.Combine(dir, $"manual_{System.DateTime.Now:yyyyMMdd_HHmmss}.png");
            ScreenCapture.CaptureScreenshot(path);
            Debug.Log("[BubbleWash] Screenshot saved: " + System.IO.Path.GetFullPath(path));
        }

        public string Summarise()
        {
            if (_count == 0) return "no frames";
            var sorted = new float[_count];
            System.Array.Copy(_frames, sorted, _count);
            System.Array.Sort(sorted);
            float sum = 0f; for (int i = 0; i < _count; i++) sum += sorted[i];
            float avg = sum / _count;
            float p99 = sorted[Mathf.Clamp(Mathf.FloorToInt(_count * 0.99f), 0, _count - 1)];
            var sb = new StringBuilder();
            sb.AppendFormat("avg {0:F1} fps ({1:F1} ms), 1% low {2:F1} fps, {3}x{4}, target {5}",
                1f / avg, avg * 1000f, 1f / p99, Screen.width, Screen.height, targetFrameRate);
            return sb.ToString();
        }

        void OnGUI()
        {
            if (!showOverlay) return;
            _style ??= new GUIStyle(GUI.skin.label) { fontSize = Mathf.Max(18, Screen.height / 60) };
            GUI.color = Color.black;
            GUI.Label(new Rect(12, Screen.height * 0.2f + 2, Screen.width, 60), _summary, _style);
            GUI.color = Color.white;
            GUI.Label(new Rect(10, Screen.height * 0.2f, Screen.width, 60), _summary, _style);
        }
    }
}
