// Signature stubs of the URP 17.3 types the Bubble Wash code uses (copied from the package source).
namespace UnityEngine.Rendering.Universal
{
    public enum TonemappingMode { None, Neutral, ACES, Custom }
    public sealed class TonemappingModeParameter : VolumeParameter<TonemappingMode> { public TonemappingModeParameter(TonemappingMode value, bool overrideState = false) : base(value, overrideState) { } }
    public sealed class Bloom : VolumeComponent
    {
        public MinFloatParameter threshold = new MinFloatParameter(0.9f, 0f);
        public MinFloatParameter intensity = new MinFloatParameter(0f, 0f);
        public ClampedFloatParameter scatter = new ClampedFloatParameter(0.7f, 0f, 1f);
        public ColorParameter tint = new ColorParameter(Color.white, false, false, true);
    }
    public sealed class Tonemapping : VolumeComponent { public TonemappingModeParameter mode = new TonemappingModeParameter(TonemappingMode.None); }
    public sealed class ColorAdjustments : VolumeComponent
    {
        public FloatParameter postExposure = new FloatParameter(0f);
        public ClampedFloatParameter contrast = new ClampedFloatParameter(0f, -100f, 100f);
        public ColorParameter colorFilter = new ColorParameter(Color.white, true, false, true);
        public ClampedFloatParameter saturation = new ClampedFloatParameter(0f, -100f, 100f);
    }
    public sealed class Vignette : VolumeComponent
    {
        public ColorParameter color = new ColorParameter(Color.black, false, false, true);
        public ClampedFloatParameter intensity = new ClampedFloatParameter(0f, 0f, 1f);
        public ClampedFloatParameter smoothness = new ClampedFloatParameter(0.2f, 0.01f, 1f);
    }
    public enum AntialiasingMode { None, FastApproximateAntialiasing, SubpixelMorphologicalAntiAliasing, TemporalAntiAliasing }
    public class UniversalAdditionalCameraData : MonoBehaviour
    {
        public bool renderPostProcessing { get; set; }
        public AntialiasingMode antialiasing { get; set; }
    }
    public static class CameraExtensions
    {
        public static UniversalAdditionalCameraData GetUniversalAdditionalCameraData(this Camera camera) => camera.GetComponent<UniversalAdditionalCameraData>();
    }
}
