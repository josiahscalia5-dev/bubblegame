// Intense electric-blue rushing water for the Bubble Wash washer (approved Screens 3 and 4):
// - GPU waves mirrored on the CPU by WaveField.cs so the mascot floats on the same surface
// - Screen 3's raised water path (crowned channel above the moat, spilling at its edges)
// - detailed white foam lace + streaks flowing with the current, wall foam inside the drum,
//   spill foam on the path edges, a wake and ring around the mascot
// - electric caustic shimmer, sparkling glints
// - colourful reflections: pastel pink / lavender sky, gold glints, and the glowing drum rings
//   reflected as bright bands under each ring
// All parameters are live-tunable from the BubbleWashLook component.
Shader "BubbleWash/Water"
{
    Properties
    {
        _DeepColor ("Deep Colour", Color) = (0.0, 0.24, 0.92, 1)
        _ShallowColor ("Shallow Colour", Color) = (0.0, 0.58, 1.0, 1)
        _GlowColor ("Electric Glow", Color) = (0.2, 0.88, 1.0, 1)
        _FoamColor ("Foam Colour", Color) = (1, 1, 1, 1)
        _SkyColor ("Sky Reflection", Color) = (0.78, 0.7, 1.0, 1)
        _PinkColor ("Pink Reflection", Color) = (1.0, 0.55, 0.86, 1)
        _GoldColor ("Gold Reflection", Color) = (1.0, 0.8, 0.35, 1)
        _RingColorA ("Ring Reflection A", Color) = (1.0, 0.85, 0.45, 1)
        _RingColorB ("Ring Reflection B", Color) = (0.55, 0.9, 1.0, 1)
        _FoamAmount ("Foam Amount", Range(0, 2)) = 1
        _LaceAmount ("Foam Lace Amount", Range(0, 1.5)) = 0.55
        _FoamScale ("Foam Scale", Float) = 1.6
        _Caustics ("Electric Caustics", Range(0, 2)) = 0.7
        _Glints ("Glints", Range(0, 4)) = 1.8
        _Emission ("Emission", Range(0, 2)) = 0.4
        _Reflection ("Reflection Strength", Range(0, 2)) = 0.9
        _RingReflection ("Ring Reflection", Range(0, 4)) = 1.6
        _Smoothness ("Smoothness", Range(0, 1)) = 0.92
        [Toggle] _LevelShape ("Use level water shape (off = side path at fixed height)", Float) = 1
        _HeightOffset ("Side path height (m)", Float) = 0
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
            half4 _PinkColor;
            half4 _GoldColor;
            half4 _RingColorA;
            half4 _RingColorB;
            half _FoamAmount;
            half _LaceAmount;
            float _FoamScale;
            half _Caustics;
            half _Glints;
            half _Emission;
            half _Reflection;
            half _RingReflection;
            half _Smoothness;
            float _LevelShape;
            float _HeightOffset;
        CBUFFER_END

        float SurfaceHeight(float2 xz, float t)
        {
            // Main water follows the level shape (raised path, drum curl); elevated side paths ride
            // their own height with the same waves (Screens 5 and 6).
            return _LevelShape > 0.5 ? BW_WaveHeight(xz, t) : _HeightOffset + BW_WaveBase(xz, t);
        }

        float3 DisplaceWS(float3 positionWS)
        {
            positionWS.y = SurfaceHeight(positionWS.xz, _BW_WaveTime);
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
            #pragma multi_compile _ _ADDITIONAL_LIGHTS_VERTEX _ADDITIONAL_LIGHTS
            #pragma multi_compile _ _CLUSTER_LIGHT_LOOP
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"
            #include "BubbleWashLighting.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float3 positionWS : TEXCOORD0;
                half fogFactor : TEXCOORD1;
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
                return o;
            }

            half4 frag(Varyings i) : SV_Target
            {
                float t = _BW_WaveTime;
                float2 xz = i.positionWS.xz;
                float flowT = t * _BW_FlowSpeed;

                // Normal from the wave field plus fine ripples moving with the current.
                const float e = 0.06;
                float hx = SurfaceHeight(xz + float2(e, 0), t) - SurfaceHeight(xz - float2(e, 0), t);
                float hz = SurfaceHeight(xz + float2(0, e), t) - SurfaceHeight(xz - float2(0, e), t);
                float n1 = BW_ValueNoise(xz * float2(3.1, 1.4) - float2(0, flowT * 0.35));
                float n2 = BW_ValueNoise(xz * float2(5.7, 2.6) - float2(0, flowT * 0.6) + 3.3);
                float3 N = normalize(float3(-hx * 1.4 + (n1 - 0.5) * 0.22, 2.0 * e, -hz * 1.4 + (n2 - 0.5) * 0.22));

                float3 V = GetWorldSpaceNormalizeViewDir(i.positionWS);
                Light mainLight = GetMainLight();
                float3 L = mainLight.direction;
                float NdotV = saturate(dot(N, V));
                float fresnel = pow(1.0 - NdotV, 3.0);

                // Where are we? (drum interior, raised path, moat)
                float inDrum = BW_InDrum(xz.y);
                float onPathZ = (1.0 - inDrum) * step(0.001, _BW_Slide.x) * _LevelShape;
                float ax = abs(xz.x);
                float pathEdge = onPathZ * (1.0 - smoothstep(0.0, 0.45, abs(ax - _BW_Slide.x - 0.15)));
                float moat = onPathZ * smoothstep(_BW_Slide.x + 0.2, _BW_Slide.x + 0.7, ax);

                // Base colour: saturated electric blue, luminous along crests and the path centre.
                float waveH = BW_WaveBase(xz, t);
                float crest = saturate(waveH * 6.0 + 0.5);
                float centre = 1.0 - saturate(ax / max(1.0, _BW_Slide.x + 0.5));
                half3 col = lerp(_DeepColor.rgb, _ShallowColor.rgb, saturate(0.3 + crest * 0.55 + centre * 0.25 - moat * 0.3));
                col += _GlowColor.rgb * _Emission * (0.35 + 0.65 * crest);

                // Electric caustic shimmer (cell edges of a fast small-scale cellular pattern).
                float2 cv = BW_Voronoi(xz * float2(2.4, 1.3) - float2(0, flowT * 0.42));
                float caustic = pow(saturate(1.0 - (cv.y - cv.x) * 4.0), 3.0);
                col += _GlowColor.rgb * caustic * _Caustics * (0.5 + 0.5 * crest);

                // Foam: lace (cell edges at a larger scale), flowing streaks, and masks for walls,
                // path edges, crests and the mascot's wake.
                float2 fuv = xz * float2(1.0, 0.45) * _FoamScale - float2(0, flowT * 0.3 * _FoamScale);
                float2 lv = BW_Voronoi(fuv * 1.7);
                float lace = 1.0 - smoothstep(0.02, 0.11, lv.y - lv.x);
                float streak = BW_Fbm(fuv * float2(2.2, 1.0));
                float halfW = sqrt(max(0.01, _BW_Tunnel.z * _BW_Tunnel.z - _BW_Tunnel.w * _BW_Tunnel.w));
                float wall = inDrum * smoothstep(halfW - 0.85, halfW - 0.05, ax);
                float2 toPlayer = xz - _BW_PlayerPos.xz;
                float behind = saturate(-toPlayer.y / 6.0);
                float wake = (1.0 - smoothstep(0.0, 0.55, abs(abs(toPlayer.x) - 0.2 - behind * 1.2))) * step(toPlayer.y, 0.4) * (1.0 - behind);
                float ring = 1.0 - smoothstep(0.35, 0.8, length(toPlayer));
                float mask = saturate(wall * 1.2 + pathEdge * 1.3 + crest * crest * 0.45 + wake * 0.9 + ring);
                float foam = smoothstep(0.45, 0.72, streak + mask * 0.6 - 0.22);
                foam = saturate(foam + lace * (_LaceAmount * (0.35 + 0.65 * mask)) + smoothstep(0.64, 0.8, streak) * 0.2) * _FoamAmount;

                // Lighting.
                float NdotL = saturate(dot(N, L));
                float3 H = normalize(L + V);
                float spec = pow(saturate(dot(N, H)), lerp(32.0, 512.0, _Smoothness)) * 3.0;
                float glint = step(0.982, BW_Hash21(floor(xz * 9.0 + float2(0, -flowT * 0.45)))) * pow(saturate(dot(N, H)), 6.0) * _Glints;

                // Colourful reflections: sky gradient left-to-right lavender/pink, gold near the horizon.
                float3 R = reflect(-V, N);
                half3 env = lerp(_SkyColor.rgb, _PinkColor.rgb, saturate(R.x * 0.9 + 0.5));
                env = lerp(env, _GoldColor.rgb, saturate(1.0 - abs(R.y) * 6.0) * 0.6);
                // Drum rings reflected as bright bands across the water below each ring.
                float ringBand = 0.0; half3 ringCol = _RingColorA.rgb;
                if (_BW_Rings.y > 0.0)
                {
                    // Rings repeat at the same spacing from the start of each drum.
                    float first = xz.y < _BW_Tunnel2.x - 1.0 || _BW_Tunnel2.y <= 0.0 ? _BW_Rings.x : _BW_Tunnel2.x + 0.25;
                    float k = (xz.y - first) / _BW_Rings.y;
                    float idx = clamp(floor(k + 0.5), 0.0, max(0.0, _BW_Rings.z - 1.0));
                    float d = xz.y - (first + idx * _BW_Rings.y);
                    ringBand = exp(-d * d * 1.8) * inDrum;
                    ringCol = fmod(idx, 2.0) < 0.5 ? _RingColorA.rgb : _RingColorB.rgb;
                }

                half3 lit = col * (0.72 + 0.28 * NdotL);
                lit += env * (fresnel * _Reflection * (1.0 - inDrum * 0.6));
                lit += ringCol * (ringBand * _RingReflection * (0.35 + fresnel));
                lit += BW_AdditionalLights(i.positionWS, N, i.positionCS) * col * 0.6;
                lit += mainLight.color * (spec + glint * 4.0);
                lit = lerp(lit, _FoamColor.rgb * (0.95 + 0.2 * NdotL), foam);

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
