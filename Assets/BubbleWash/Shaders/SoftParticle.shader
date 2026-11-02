// Soft round droplets / foam puffs (alpha blended) and four-point sparkles (additive).
// _Shape: 0 = soft droplet, 1 = sparkle star, 2 = radial glow (end-of-drum light).
Shader "BubbleWash/SoftParticle"
{
    Properties
    {
        [HDR] _Color ("Colour", Color) = (1, 1, 1, 1)
        [Enum(Droplet,0,Sparkle,1,Glow,2)] _Shape ("Shape", Float) = 0
        _Softness ("Edge Softness", Range(0.01, 1)) = 0.35
        [Enum(UnityEngine.Rendering.BlendMode)] _SrcBlend ("Src Blend", Float) = 5
        [Enum(UnityEngine.Rendering.BlendMode)] _DstBlend ("Dst Blend", Float) = 10
    }
    SubShader
    {
        Tags { "RenderType" = "Transparent" "Queue" = "Transparent" "RenderPipeline" = "UniversalPipeline" "IgnoreProjector" = "True" "PreviewType" = "Plane" }
        Pass
        {
            Name "Particle"
            Tags { "LightMode" = "UniversalForward" }
            Blend [_SrcBlend] [_DstBlend]
            ZWrite Off
            Cull Off

            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fog
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            CBUFFER_START(UnityPerMaterial)
                half4 _Color;
                half _Shape;
                half _Softness;
                half _SrcBlend;
                half _DstBlend;
            CBUFFER_END

            struct Attributes { float4 positionOS : POSITION; half4 color : COLOR; float2 uv : TEXCOORD0; };
            struct Varyings { float4 positionCS : SV_POSITION; half4 color : COLOR; float2 uv : TEXCOORD0; half fogFactor : TEXCOORD1; };

            Varyings vert(Attributes v)
            {
                Varyings o;
                o.positionCS = TransformObjectToHClip(v.positionOS.xyz);
                o.color = v.color * _Color;
                o.uv = v.uv;
                o.fogFactor = ComputeFogFactor(o.positionCS.z);
                return o;
            }

            half4 frag(Varyings i) : SV_Target
            {
                float2 p = i.uv * 2.0 - 1.0;
                float r = length(p);
                float a;
                if (_Shape < 0.5)
                {
                    a = 1.0 - smoothstep(1.0 - _Softness, 1.0, r);
                    // a little highlight so droplets read as water
                    a *= 0.75 + 0.25 * smoothstep(0.6, 0.0, length(p - float2(-0.3, 0.35)));
                }
                else if (_Shape < 1.5)
                {
                    float cross_ = max(1.0 - smoothstep(0.0, 0.16, abs(p.x)) * 1.0, 0.0) * (1.0 - smoothstep(0.2, 1.0, abs(p.y)));
                    cross_ = max(cross_, (1.0 - smoothstep(0.0, 0.16, abs(p.y))) * (1.0 - smoothstep(0.2, 1.0, abs(p.x))));
                    a = saturate(cross_ + (1.0 - smoothstep(0.0, 0.35, r)));
                }
                else
                {
                    a = pow(saturate(1.0 - r), 2.2);
                }
                half3 col = i.color.rgb;
                half alpha = saturate(a * i.color.a);
                // Additive sparkles fade to black in fog; alpha-blended droplets take the scene fog colour.
                if (_DstBlend < 1.5) col = MixFogColor(col, half3(0, 0, 0), (half)i.fogFactor);
                else col = MixFog(col, (half)i.fogFactor);
                // Premultiply for additive (One One); harmless for alpha blending.
                return half4(col * (_DstBlend < 1.5 ? alpha : 1.0), alpha);
            }
            ENDHLSL
        }
    }
    FallBack Off
}
