using UnityEngine;

namespace BubbleWash
{
    /// <summary>
    /// Mobile budget helper: draws this object's renderers only while the camera is inside a stretch of
    /// the level (e.g. the opening castle and first drum are skipped once the run is in the Bubble
    /// Kingdom, and the kingdom's castles are skipped until the second drum). Play mode only, so the
    /// whole level stays visible while editing and for the edit-mode screenshot capture.
    /// </summary>
    public class ZRangeVisibility : MonoBehaviour
    {
        public float minCameraZ = float.NegativeInfinity;
        public float maxCameraZ = float.PositiveInfinity;

        Renderer[] _renderers;
        bool _visible = true;
        Camera _cam;

        void Start() => _renderers = GetComponentsInChildren<Renderer>(true);

        void LateUpdate()
        {
            if (_cam == null) _cam = Camera.main;
            if (_cam == null || _renderers == null) return;
            float z = _cam.transform.position.z;
            bool visible = z >= minCameraZ && z <= maxCameraZ;
            if (visible == _visible) return;
            _visible = visible;
            foreach (var r in _renderers) if (r != null) r.enabled = visible;
        }
    }
}
