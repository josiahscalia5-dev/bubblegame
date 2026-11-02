// Signature stubs of the Core RP 17.3 types the Bubble Wash code uses (copied from the package source).
using System.Collections.Generic;
namespace UnityEngine.Rendering
{
    public abstract class VolumeParameter { public bool overrideState; }
    public class VolumeParameter<T> : VolumeParameter
    {
        protected T m_Value;
        public virtual T value { get => m_Value; set => m_Value = value; }
        public VolumeParameter() { }
        protected VolumeParameter(T value, bool overrideState) { m_Value = value; this.overrideState = overrideState; }
    }
    public class FloatParameter : VolumeParameter<float> { public FloatParameter(float value, bool overrideState = false) : base(value, overrideState) { } }
    public class MinFloatParameter : FloatParameter { public float min; public MinFloatParameter(float value, float min, bool overrideState = false) : base(value, overrideState) { this.min = min; } }
    public class ClampedFloatParameter : FloatParameter { public float min, max; public ClampedFloatParameter(float value, float min, float max, bool overrideState = false) : base(value, overrideState) { this.min = min; this.max = max; } }
    public class ColorParameter : VolumeParameter<Color> { public ColorParameter(Color value, bool hdr, bool showAlpha, bool showEyeDropper, bool overrideState = false) : base(value, overrideState) { } }
    public class VolumeComponent : ScriptableObject { public bool active = true; }
    public sealed class VolumeProfile : ScriptableObject
    {
        public List<VolumeComponent> components = new List<VolumeComponent>();
        public T Add<T>(bool overrides = false) where T : VolumeComponent { var c = CreateInstance<T>(); components.Add(c); return c; }
        public bool TryGet<T>(out T component) where T : VolumeComponent { foreach (var c in components) if (c is T t) { component = t; return true; } component = null; return false; }
    }
    public class Volume : MonoBehaviour
    {
        public bool isGlobal { get; set; }
        public float priority;
        public float weight = 1f;
        public VolumeProfile sharedProfile = null;
    }
}
