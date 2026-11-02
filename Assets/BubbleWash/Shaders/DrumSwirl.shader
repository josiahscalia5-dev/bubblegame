// Light overlay just inside the washer drum walls: slowly turning spiral bands, concentric light
// rings and sparkles, the "swirling washing machine" look of approved Screens 4, 7, 8 and 9.
// Additive, so the Meshy drum stays fully visible underneath. Cylinder mesh UVs: x = angle (0..1),
// y = metres along the drum. Nothing is drawn below the water line.
Shader "BubbleWash/DrumSwirl"
{
    Properties
    {
        [HDR] _Color ("Swirl Colour", Color) = (0.35, 0.75, 1.4, 1)
        [HDR] _RingColor ("Ring Light Colour", Color) = (1.2, 1.4, 1.8, 1)
        _Arms ("Spiral Arms", Float) = 3
        _Twist ("Twist per metre", Float) = 0.35
        _Speed ("Spin Speed", Float) = 0.25
        _Intensity ("Intensity", Range(0, 2)) = 0.35
        _Sparkles ("Sparkles", Range(0, 2)) = 0.8
        _WaterLevel ("Water Level (world y)", Float) = 0.05
    }
    SubShader
    {
        Tags { "RenderType" = "Transparent" "Queue" = "Transparent-10" "RenderPipeline" = "UniversalPipeline" "IgnoreProjector" = "True" }
        Pass
        {
            Name "Swirl"
            Tags { "LightMode" = "UniversalForward" }
            Blend One One
            ZWrite Off
            Cull Off

            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vert
            #pragma fragment frag
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            #include "BubbleWashCommon.hlsl"

            CBUFFER_START(UnityPerMaterial)
                half4 _Color;
                half4 _RingColor;
                float _Arms;
                float _Twist;
                float _Speed;
                half _Intensity;
                half _Sparkles;
                float _WaterLevel;
            CBUFFER_END

            struct Attributes { float4 positionOS : POSITION; float2 uv : TEXCOORD0; };
            struct Varyings { float4 positionCS : SV_POSITION; float2 uv : TEXCOORD0; float worldY : TEXCOORD1; float fade : TEXCOORD2; };

            Varyings vert(Attributes v)
            {
                Varyings o;
                float3 ws = TransformObjectToWorld(v.positionOS.xyz);
                o.positionCS = TransformWorldToHClip(ws);
                o.uv = v.uv;
                o.worldY = ws.y;
                // Fade out close to the camera so the overlay never smears across the view.
                o.fade = saturate((length(ws - _WorldSpaceCameraPos) - 1.5) / 4.0);
                return o;
            }

            half4 frag(Varyings i) : SV_Target
            {
                float t = _Time.y * _Speed;
                float angle = i.uv.x * 6.28318;
                float spiral = 0.5 + 0.5 * sin(angle * _Arms + i.uv.y * _Twist * 6.28318 - t * 6.28318);
                spiral = pow(spiral, 6.0);
                float rings = pow(0.5 + 0.5 * cos(i.uv.y * 6.28318 / 2.2 - t * 3.0), 12.0);
                float2 cell = floor(float2(i.uv.x * 90.0, i.uv.y * 6.0 - t * 2.0));
                float sparkle = step(0.965, BW_Hash21(cell)) * (0.5 + 0.5 * sin(_Time.y * 6.0 + BW_Hash21(cell + 3.1) * 20.0));
                half3 c = _Color.rgb * spiral + _RingColor.rgb * rings * 0.6 + _RingColor.rgb * sparkle * _Sparkles;
                float aboveWater = smoothstep(_WaterLevel, _WaterLevel + 0.35, i.worldY);
                return half4(c * (_Intensity * aboveWater * i.fade), 0);
            }
            ENDHLSL
        }
    }
    FallBack Off
}
