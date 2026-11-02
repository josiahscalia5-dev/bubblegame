// Falling water for the castle tower waterfalls on approved Screen 3:
// - streaks and white foam lace pouring down the column, accelerating under gravity from the speed
//   the water leaves the spout (so streaks stretch as they fall), driven by the same clock as the
//   river (_BW_WaveTime) so captures and Play mode stay in step
// - frothy white edges, a foamy lip where the water leaves the spout, and a white base that
//   dissolves into the splash where it lands
// - the electric blue of BubbleWash/Water, a lavender/pink sky sheen and sparkling glints
// - the column ripples gently as it falls, so it never reads as a static texture
// Mesh contract (ProceduralMeshes.Waterfall): UV.x = across the column (0..1), UV.y = metres
// along the fall from the lip, vertex colour.r = progress down the fall (0 lip .. 1 bottom).
// All parameters are live-tunable from the BubbleWashLook component.
Shader "BubbleWash/Waterfall"
{
    Properties
    {
        _DeepColor ("Deep Colour", Color) = (0.0, 0.32, 1.0, 1)
        _BrightColor ("Bright Colour", Color) = (0.25, 0.86, 1.0, 1)
        [HDR] _FoamColor ("Foam Colour", Color) = (1.15, 1.15, 1.2, 1)
        _SkyColor ("Sky Sheen", Color) = (0.85, 0.72, 1.0, 1)
        _PinkColor ("Pink Sheen", Color) = (1.0, 0.6, 0.9, 1)
        _LipSpeed ("Speed Leaving the Spout (m/s)", Float) = 1.2
        _StreakLength ("Streak Length at the Spout (m)", Float) = 0.35
        _StreakScale ("Streaks Across", Float) = 7
        _FoamAmount ("Foam Amount", Range(0, 2)) = 1
        _EdgeFoam ("Edge Foam", Range(0, 2)) = 0.9
        _Emission ("Emission", Range(0, 3)) = 0.8
        _Opacity ("Opacity", Range(0, 1)) = 0.82
        _Sheen ("Sky Sheen Strength", Range(0, 2)) = 0.8
        _Glints ("Glints", Range(0, 4)) = 1.5
        _Ripple ("Ripple (m)", Range(0, 0.2)) = 0.035
    }
    SubShader
    {
        Tags { "RenderType" = "Transparent" "Queue" = "Transparent" "RenderPipeline" = "UniversalPipeline" "IgnoreProjector" = "True" }
        LOD 200

        Pass
        {
            Name "Waterfall"
            Tags { "LightMode" = "UniversalForward" }
            Blend SrcAlpha OneMinusSrcAlpha
            ZWrite Off
            Cull Off   // the column is seen from below at the lip and from the front lower down

            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fog
            #pragma multi_compile_instancing
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"
            #include "BubbleWashCommon.hlsl"

            CBUFFER_START(UnityPerMaterial)
                half4 _DeepColor;
                half4 _BrightColor;
                half4 _FoamColor;
                half4 _SkyColor;
                half4 _PinkColor;
                float _LipSpeed;
                float _StreakLength;
                float _StreakScale;
                half _FoamAmount;
                half _EdgeFoam;
                half _Emission;
                half _Opacity;
                half _Sheen;
                half _Glints;
                half _Ripple;
            CBUFFER_END

            struct Attributes
            {
                float4 positionOS : POSITION;
                float3 normalOS : NORMAL;
                float2 uv : TEXCOORD0;
                half4 color : COLOR;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float3 positionWS : TEXCOORD0;
                float3 normalWS : TEXCOORD1;
                float3 fall : TEXCOORD2;   // x = across (0..1), y = metres from the lip, z = progress (0..1)
                half fogFactor : TEXCOORD3;
                UNITY_VERTEX_OUTPUT_STEREO
            };

            // Time the water has been falling when it is <along> metres from the lip
            // (s = v0 t + g t^2 / 2 solved for t).
            float FallTime(float along)
            {
                float v0 = max(0.05, _LipSpeed);
                return (sqrt(v0 * v0 + 2.0 * 9.81 * max(0.0, along)) - v0) / 9.81;
            }

            // Pattern coordinate along the fall: constant for a parcel of water as it falls.
            float FlowCoord(float along, float t)
            {
                return (FallTime(along) - t) * max(0.05, _LipSpeed) / max(0.02, _StreakLength);
            }

            Varyings vert(Attributes v)
            {
                Varyings o = (Varyings)0;
                UNITY_SETUP_INSTANCE_ID(v);
                UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
                float t = _BW_WaveTime;
                float progress = v.color.r;
                float3 ws = TransformObjectToWorld(v.positionOS.xyz);
                float3 nws = TransformObjectToWorldNormal(v.normalOS);
                // Ripples travel down the column with the water and grow toward the bottom.
                float flow = FlowCoord(v.uv.y, t);
                float ripple = sin(flow * 1.3 + v.uv.x * 2.0) * 0.6 + sin(flow * 2.9 + 1.3) * 0.4;
                ws += nws * (ripple * _Ripple * (0.3 + progress));
                o.positionWS = ws;
                o.normalWS = nws;
                o.positionCS = TransformWorldToHClip(ws);
                o.fall = float3(v.uv, progress);
                o.fogFactor = ComputeFogFactor(o.positionCS.z);
                return o;
            }

            half4 frag(Varyings i) : SV_Target
            {
                float t = _BW_WaveTime;
                float across = i.fall.x;
                float along = i.fall.y;
                float progress = i.fall.z;
                float flow = FlowCoord(along, t);   // moves down the fall, faster lower down

                // Streaks: noise stretched along the fall.
                float n = BW_Fbm(float2(across * _StreakScale, flow * 0.5));
                float fine = BW_ValueNoise(float2(across * _StreakScale * 2.7 + 5.1, flow * 1.5));
                float streak = smoothstep(0.5, 0.78, n * 0.7 + fine * 0.45);

                // Foam: lace breaking up the column (more as it falls), frothy edges, foamy lip and base.
                float2 lv = BW_Voronoi(float2(across * _StreakScale * 0.9, flow));
                float lace = 1.0 - smoothstep(0.03, 0.12, lv.y - lv.x);
                float middle = 1.0 - abs(across * 2.0 - 1.0);   // 0 at the sides, 1 in the middle
                float edgeFoam = (1.0 - smoothstep(0.0, 0.35, middle)) * _EdgeFoam;
                float lip = 1.0 - smoothstep(0.0, 0.25, along);
                float base_ = smoothstep(0.72, 1.0, progress);
                float foam = saturate(streak * 0.75 + lace * (0.25 + 0.55 * progress) + edgeFoam + lip * 0.5 + base_ * 1.2);
                foam = saturate(foam * _FoamAmount);

                // Two-sided: the fresnel term uses |N.V| so the back of the column shades like the front.
                float3 N = normalize(i.normalWS);
                float3 V = GetWorldSpaceNormalizeViewDir(i.positionWS);
                float NdotV = abs(dot(N, V));
                float fresnel = pow(1.0 - NdotV, 3.0);

                half3 col = lerp(_DeepColor.rgb, _BrightColor.rgb, saturate(0.25 + n * 0.8 + NdotV * 0.2));
                col += _BrightColor.rgb * _Emission * (0.3 + 0.7 * n);
                half3 sheen = lerp(_SkyColor.rgb, _PinkColor.rgb, saturate(N.x * 0.5 + 0.5));
                col += sheen * (fresnel * _Sheen);
                // Glints riding down the fall.
                float glint = step(0.975, BW_Hash21(floor(float2(across * 14.0, flow * 3.0)))) * _Glints;
                Light mainLight = GetMainLight();
                col += mainLight.color * glint;
                half3 lit = lerp(col, _FoamColor.rgb, foam);

                half alpha = saturate(_Opacity * (0.65 + 0.35 * n) + foam * 0.35);
                alpha *= smoothstep(0.0, 0.18, middle + foam * 0.1);    // soft sides
                alpha *= 1.0 - smoothstep(0.93, 1.0, progress) * 0.85;  // dissolves into the splash

                lit = MixFog(lit, i.fogFactor);
                return half4(lit, alpha);
            }
            ENDHLSL
        }
    }
    FallBack Off
}
