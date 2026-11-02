using UnityEngine;

namespace BubbleWash
{
    /// <summary>Squash-and-pop feedback on tap, like the glossy buttons in the approved screens.</summary>
    public class PressBounce : MonoBehaviour, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler
    {
        float _target = 1f;
        public void OnPointerDown(UnityEngine.EventSystems.PointerEventData e) => _target = 0.92f;
        public void OnPointerUp(UnityEngine.EventSystems.PointerEventData e) => _target = 1f;
        void Update()
        {
            float s = Mathf.Lerp(transform.localScale.x, _target, 1f - Mathf.Exp(-Time.unscaledDeltaTime * 18f));
            transform.localScale = new Vector3(s, s, 1f);
        }
    }
}
