// Electric-blue rushing water for the Bubble Wash washer: GPU waves (mirrored on the CPU by
// WaveField.cs so the mascot floats on the same surface), flowing foam streaks, wall foam inside
// the drum, a wake around the mascot, sparkling glints and a luminous core, mobile friendly.
Shader "BubbleWash/Water"
{
    Properties
    {
        _DeepColor ("Deep Colour", Color) = (0.03, 0.33, 0.95, 1)
        _ShallowColor ("Shallow Colour", Color) = (0.12, 0.72, 1.0, 1)
        _GlowColor ("Electric Glow", Color) = (0.45, 0.95, 1.0, 1)
        _FoamColor ("Foam Colour", Color) = (1, 1, 1, 1)
        _SkyColor ("Reflection Tint", Color) = (0.86, 0.78, 1.0, 1)
        _FoamAmount ("Foam Amount", Range(0, 2)) = 1
        _FoamScale ("Foam Scale", Float) = 1.6
        _Glints ("Glints", Range(0, 4)) = 1.6
        _Emission ("Emission", Range(0, 2)) = 0.55
        _Smoothness ("Smoothness", Range(0, 1)) = 0.92
    }
    SubShader
    {
        Tags { "RenderType" = "Opaque" "Queue" = "Geometry" "RenderPipeline" = "UniversalPipeline" }
        LOD 200

        HLSLINCLUDE
        #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
        #include "BubbleWashCommon.hlsl"

        CBUFFER_START(UnityPerMaterial)
            half4 _DeepColor;
            half4 _ShallowColor;
            half4 _GlowColor;
            half4 _FoamColor;
            half4 _SkyColor;
            half _FoamAmount;
            float _FoamScale;
            half _Glints;
            half _Emission;
            half _Smoothness;
        CBUFFER_END

        float3 DisplaceWS(float3 positionWS)
        {
            positionWS.y = BW_WaveHeight(positionWS.xz, _BW_WaveTime);
            return positionWS;
        }
        ENDHLSL

        Pass
        {
            Name "ForwardLit"
            Tags { "LightMode" = "UniversalForward" }
            Cull Back
            ZWrite On

            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fog
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                float4 color : COLOR;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float3 positionWS : TEXCOORD0;
                half fogFactor : TEXCOORD1;
                half edge : TEXCOORD2;
                UNITY_VERTEX_OUTPUT_STEREO
            };

            Varyings vert(Attributes v)
            {
                Varyings o = (Varyings)0;
                UNITY_SETUP_INSTANCE_ID(v);
                UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
                float3 ws = DisplaceWS(TransformObjectToWorld(v.positionOS.xyz));
                o.positionWS = ws;
                o.positionCS = TransformWorldToHClip(ws);
                o.fogFactor = ComputeFogFactor(o.positionCS.z);
                o.edge = v.color.r;
                return o;
            }

            half4 frag(Varyings i) : SV_Target
            {
                float t = _BW_WaveTime;
                float2 xz = i.positionWS.xz;

                // Analytic-ish normal from the wave field (central differences on the same function).
                const float e = 0.06;
                float hx = BW_WaveHeight(xz + float2(e, 0), t) - BW_WaveHeight(xz - float2(e, 0), t);
                float hz = BW_WaveHeight(xz + float2(0, e), t) - BW_WaveHeight(xz - float2(0, e), t);
                // Fine ripples scrolling with the current.
                float2 flow = float2(0, t * _BW_FlowSpeed * 0.35);
                float n1 = BW_ValueNoise(xz * float2(3.1, 1.4) - flow);
                float n2 = BW_ValueNoise(xz * float2(5.7, 2.6) - flow * 1.7 + 3.3);
                float3 N = normalize(float3(-hx * 1.4 + (n1 - 0.5) * 0.18, 2.0 * e, -hz * 1.4 + (n2 - 0.5) * 0.18));

                float3 V = GetWorldSpaceNormalizeViewDir(i.positionWS);
                Light mainLight = GetMainLight();
                float3 L = mainLight.direction;
                float NdotV = saturate(dot(N, V));
                float fresnel = pow(1.0 - NdotV, 4.0);

                // Base colour: luminous electric-blue core, deeper toward the walls and in troughs.
                float waveH = BW_WaveBase(xz, t);
                float crest = saturate(waveH * 6.0 + 0.5);
                half3 col = lerp(_DeepColor.rgb, _ShallowColor.rgb, saturate(0.35 + crest * 0.65 - i.edge * 0.25));
                col += _GlowColor.rgb * _Emission * (0.55 + 0.45 * crest);

                // Foam: streaks stretched along the flow, wall foam inside the drum, crest foam and the wake.
                float2 fuv = xz * float2(1.0, 0.35) * _FoamScale - float2(0, t * _BW_FlowSpeed * 0.32 * _FoamScale);
                float streak = BW_Fbm(fuv * float2(2.2, 1.0));
                float inDrum = saturate((xz.y - _BW_Tunnel.x) * 0.5) * saturate((_BW_Tunnel.y - xz.y) * 0.5);
                float halfW = sqrt(max(0.01, _BW_Tunnel.z * _BW_Tunnel.z - _BW_Tunnel.w * _BW_Tunnel.w));
                float wall = inDrum * smoothstep(halfW - 0.75, halfW - 0.05, abs(xz.x));
                float2 toPlayer = xz - _BW_PlayerPos.xz;
                float behind = saturate(-toPlayer.y / 6.0);
                float wakeWidth = 0.45 + 0.35 * behind * 6.0 * 0.25;
                float wake = (1.0 - smoothstep(0.0, wakeWidth, abs(abs(toPlayer.x) - 0.2 - behind * 1.2))) * step(toPlayer.y, 0.4) * (1.0 - behind);
                float ring = 1.0 - smoothstep(0.45, 0.85, length(toPlayer));
                float foamMask = saturate(wall * 1.1 + crest * crest * 0.35 + wake * 0.9 + ring * 0.8);
                float foam = smoothstep(0.45, 0.75, streak + foamMask * 0.55 - 0.25) * _FoamAmount;
                foam = saturate(foam + smoothstep(0.62, 0.8, streak) * 0.25);

                // Lighting: soft diffuse + sharp specular glints + sky reflection.
                float NdotL = saturate(dot(N, L));
                float3 H = normalize(L + V);
                float spec = pow(saturate(dot(N, H)), lerp(32.0, 512.0, _Smoothness)) * 3.0;
                float glintNoise = BW_Hash21(floor(xz * 9.0 + float2(0, -t * 4.0)));
                float glint = step(0.985, glintNoise) * pow(saturate(dot(N, H)), 8.0) * _Glints;
                half3 lit = col * (0.65 + 0.35 * NdotL) + _SkyColor.rgb * fresnel * 0.55;
                lit += mainLight.color * (spec + glint * 4.0);
                lit = lerp(lit, _FoamColor.rgb * (0.9 + 0.25 * NdotL), foam);
                lit += SampleSH(N) * 0.15;

                lit = MixFog(lit, i.fogFactor);
                return half4(lit, 1.0);
            }
            ENDHLSL
        }

        Pass
        {
            Name "DepthOnly"
            Tags { "LightMode" = "DepthOnly" }
            ZWrite On
            ColorMask R

            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vertDepth
            #pragma fragment fragDepth

            struct A { float4 positionOS : POSITION; };
            struct VOut { float4 positionCS : SV_POSITION; };

            VOut vertDepth(A v)
            {
                VOut o;
                o.positionCS = TransformWorldToHClip(DisplaceWS(TransformObjectToWorld(v.positionOS.xyz)));
                return o;
            }

            half4 fragDepth(VOut i) : SV_Target { return 0; }
            ENDHLSL
        }
    }
    FallBack "Hidden/Universal Render Pipeline/FallbackError"
}
