using System;
using UnityEngine;
using UnityEngine.EventSystems;
#if BW_INPUT_SYSTEM && ENABLE_INPUT_SYSTEM
using UnityEngine.InputSystem;
#endif

namespace BubbleWash
{
    public enum SwipeDirection { None, Left, Right, Up, Down }

    /// <summary>
    /// Touch swipes and taps for the runner. Mouse drags and arrow keys / WASD / Space work in the
    /// editor. Works with the Input System package and with the legacy Input Manager.
    /// </summary>
    public class SwipeInput : MonoBehaviour
    {
        [Tooltip("Swipe distance as a fraction of screen height.")]
        public float minSwipeFraction = 0.045f;
        [Tooltip("A press shorter than this without movement counts as a tap (seconds).")]
        public float tapMaxDuration = 0.3f;

        public event Action<SwipeDirection> Swiped;
        public event Action Tapped;

        bool _down;
        bool _consumed;
        Vector2 _start;
        float _startTime;

        void Update()
        {
            ReadKeyboard();

            bool pressed = ReadPointer(out Vector2 pos);
            if (pressed && !_down)
            {
                _down = true; _start = pos; _startTime = Time.unscaledTime;
                // Presses that start on a HUD button (pause, power-ups) are not swipes or taps.
                _consumed = EventSystem.current != null && EventSystem.current.IsPointerOverGameObject();
            }
            else if (pressed && _down && !_consumed)
            {
                var dir = Classify(pos - _start);
                if (dir != SwipeDirection.None) { _consumed = true; Swiped?.Invoke(dir); }
            }
            else if (!pressed && _down)
            {
                _down = false;
                if (!_consumed && Time.unscaledTime - _startTime <= tapMaxDuration) Tapped?.Invoke();
            }
        }

        SwipeDirection Classify(Vector2 delta)
        {
            float min = minSwipeFraction * Mathf.Max(1, Screen.height);
            if (delta.magnitude < min) return SwipeDirection.None;
            if (Mathf.Abs(delta.x) > Mathf.Abs(delta.y)) return delta.x < 0 ? SwipeDirection.Left : SwipeDirection.Right;
            return delta.y > 0 ? SwipeDirection.Up : SwipeDirection.Down;
        }

#if BW_INPUT_SYSTEM && ENABLE_INPUT_SYSTEM
        static bool ReadPointer(out Vector2 pos)
        {
            var touch = Touchscreen.current;
            if (touch != null && touch.primaryTouch.press.isPressed)
            {
                pos = touch.primaryTouch.position.ReadValue();
                return true;
            }
            var mouse = Mouse.current;
            if (mouse != null && mouse.leftButton.isPressed)
            {
                pos = mouse.position.ReadValue();
                return true;
            }
            pos = default;
            return false;
        }

        void ReadKeyboard()
        {
            var k = Keyboard.current;
            if (k == null) return;
            if (k.leftArrowKey.wasPressedThisFrame || k.aKey.wasPressedThisFrame) Swiped?.Invoke(SwipeDirection.Left);
            if (k.rightArrowKey.wasPressedThisFrame || k.dKey.wasPressedThisFrame) Swiped?.Invoke(SwipeDirection.Right);
            if (k.upArrowKey.wasPressedThisFrame || k.wKey.wasPressedThisFrame) Swiped?.Invoke(SwipeDirection.Up);
            if (k.downArrowKey.wasPressedThisFrame || k.sKey.wasPressedThisFrame) Swiped?.Invoke(SwipeDirection.Down);
            if (k.spaceKey.wasPressedThisFrame || k.enterKey.wasPressedThisFrame) Tapped?.Invoke();
        }
#else
        static bool ReadPointer(out Vector2 pos)
        {
            if (Input.touchCount > 0)
            {
                pos = Input.GetTouch(0).position;
                return true;
            }
            if (Input.GetMouseButton(0))
            {
                pos = Input.mousePosition;
                return true;
            }
            pos = default;
            return false;
        }

        void ReadKeyboard()
        {
            if (Input.GetKeyDown(KeyCode.LeftArrow) || Input.GetKeyDown(KeyCode.A)) Swiped?.Invoke(SwipeDirection.Left);
            if (Input.GetKeyDown(KeyCode.RightArrow) || Input.GetKeyDown(KeyCode.D)) Swiped?.Invoke(SwipeDirection.Right);
            if (Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.W)) Swiped?.Invoke(SwipeDirection.Up);
            if (Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.S)) Swiped?.Invoke(SwipeDirection.Down);
            if (Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.Return)) Tapped?.Invoke();
        }
#endif
    }
}
