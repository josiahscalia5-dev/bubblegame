using UnityEngine;

namespace BubbleWash
{
    /// <summary>Keeps a quad facing the camera (large foreground soap bubbles).</summary>
    [ExecuteAlways]
    public class Billboard : MonoBehaviour
    {
        public Camera target;

        void LateUpdate() => Face(target != null ? target : Camera.main);

        public void Face(Camera cam)
        {
            if (cam == null) return;
            transform.rotation = Quaternion.LookRotation(transform.position - cam.transform.position, cam.transform.up);
        }
    }
}
