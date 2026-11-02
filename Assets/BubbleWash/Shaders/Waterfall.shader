// Falling water ribbon (castle tower waterfalls in Screens 1, 3 and 10, island falls in Screen 10):
// bright streaks racing down, translucent edges, white foam where it lands.
// Ribbon mesh UVs: x across the fall (0..1), y down the fall (0 = top, 1 = bottom).
Shader "BubbleWash/Waterfall"
{
    Properties
    {
        _DeepColor ("Water Colour", Color) = (0.12, 0.55, 1.0, 1)
        _StreakColor ("Streak Colour", Color) = (0.75, 0.95, 1.0, 1)
        _FoamColor ("Foam Colour", Color) = (1, 1, 1, 1)
        _Speed ("Fall Speed", Float) = 1.6
        _StreakScale ("Streak Scale", Float) = 7
        _Opacity ("Opacity", Range(0, 1)) = 0.9
        _Glow ("Glow", Range(0, 2)) = 0.45
    }
    SubShader
    {
        Tags { "RenderType" = "Transparent" "Queue" = "Transparent" "RenderPipeline" = "UniversalPipeline" "IgnoreProjector" = "True" }
        Pass
        {
            Name "Waterfall"
            Tags { "LightMode" = "UniversalForward" }
            Blend SrcAlpha OneMinusSrcAlpha
            ZWrite Off
            Cull Off

            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fog
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            #include "BubbleWashCommon.hlsl"

            CBUFFER_START(UnityPerMaterial)
                half4 _DeepColor;
                half4 _StreakColor;
                half4 _FoamColor;
                float _Speed;
                float _StreakScale;
                half _Opacity;
                half _Glow;
            CBUFFER_END

            struct Attributes { float4 positionOS : POSITION; float2 uv : TEXCOORD0; };
            struct Varyings { float4 positionCS : SV_POSITION; float2 uv : TEXCOORD0; half fogFactor : TEXCOORD1; };

            Varyings vert(Attributes v)
            {
                Varyings o;
                o.positionCS = TransformObjectToHClip(v.positionOS.xyz);
                o.uv = v.uv;
                o.fogFactor = ComputeFogFactor(o.positionCS.z);
                return o;
            }

            half4 frag(Varyings i) : SV_Target
            {
                float t = _Time.y * _Speed;
                float2 p = float2(i.uv.x * _StreakScale, i.uv.y * 1.6 - t);
                float streak = BW_Fbm(p * float2(1.0, 2.2));
                float fine = BW_ValueNoise(float2(i.uv.x * _StreakScale * 3.0, i.uv.y * 6.0 - t * 2.3));
                float s = saturate(streak * 1.25 - 0.25 + fine * 0.35);
                half3 col = lerp(_DeepColor.rgb, _StreakColor.rgb, s * s);
                // Foam where it lands and a soft lip at the top.
                float foam = smoothstep(0.78, 1.0, i.uv.y) * (0.6 + 0.4 * fine) + smoothstep(0.08, 0.0, i.uv.y) * 0.5;
                col = lerp(col, _FoamColor.rgb, saturate(foam));
                col *= 1.0 + _Glow * s;
                float edge = smoothstep(0.0, 0.18, i.uv.x) * smoothstep(1.0, 0.82, i.uv.x);
                float alpha = saturate((0.55 + 0.45 * s) * edge * _Opacity + foam * 0.3 * edge);
                col = MixFog(col, i.fogFactor);
                return half4(col, alpha);
            }
            ENDHLSL
        }
    }
    FallBack Off
}
