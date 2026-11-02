// Soft fur look for the mascot placeholder, sock buddies and spinning brushes: vertex-colour
// albedo, wrapped diffuse, fuzzy rim light and procedural strand noise. Cheap enough for mobile.
Shader "BubbleWash/FluffyToon"
{
    Properties
    {
        _BaseColor ("Base Colour", Color) = (1, 1, 1, 1)
        _TipColor ("Fur Tip Colour", Color) = (1, 0.8, 0.95, 1)
        _RimColor ("Rim Colour", Color) = (1, 0.85, 1, 1)
        _RimPower ("Rim Power", Range(0.5, 8)) = 2.2
        _RimStrength ("Rim Strength", Range(0, 2)) = 0.8
        _Wrap ("Diffuse Wrap", Range(0, 1)) = 0.5
        _FuzzScale ("Strand Scale", Float) = 38
        _FuzzStrength ("Strand Strength", Range(0, 1)) = 0.55
        _Gloss ("Gloss", Range(0, 1)) = 0.25
        _Emission ("Self Glow", Range(0, 1)) = 0.12
    }
    SubShader
    {
        Tags { "RenderType" = "Opaque" "Queue" = "Geometry" "RenderPipeline" = "UniversalPipeline" }

        HLSLINCLUDE
        #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
        CBUFFER_START(UnityPerMaterial)
            half4 _BaseColor;
            half4 _TipColor;
            half4 _RimColor;
            half _RimPower;
            half _RimStrength;
            half _Wrap;
            float _FuzzScale;
            half _FuzzStrength;
            half _Gloss;
            half _Emission;
        CBUFFER_END
        ENDHLSL

        Pass
        {
            Name "ForwardLit"
            Tags { "LightMode" = "UniversalForward" }

            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fog
            #pragma multi_compile_instancing
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"
            #include "BubbleWashCommon.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                float3 normalOS : NORMAL;
                float4 color : COLOR;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float3 positionWS : TEXCOORD0;
                float3 normalWS : TEXCOORD1;
                float3 positionOS : TEXCOORD2;
                half4 color : COLOR;
                half fogFactor : TEXCOORD3;
                UNITY_VERTEX_OUTPUT_STEREO
            };

            Varyings vert(Attributes v)
            {
                Varyings o = (Varyings)0;
                UNITY_SETUP_INSTANCE_ID(v);
                UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
                VertexPositionInputs p = GetVertexPositionInputs(v.positionOS.xyz);
                o.positionCS = p.positionCS;
                o.positionWS = p.positionWS;
                o.normalWS = TransformObjectToWorldNormal(v.normalOS);
                o.positionOS = v.positionOS.xyz;
                o.color = v.color;
                o.fogFactor = ComputeFogFactor(p.positionCS.z);
                return o;
            }

            half4 frag(Varyings i) : SV_Target
            {
                float3 N = normalize(i.normalWS);
                // Strand noise: perturb the normal with high-frequency noise in object space.
                float2 q = i.positionOS.xy * _FuzzScale + i.positionOS.z * _FuzzScale * 0.73;
                float s1 = BW_ValueNoise(q);
                float s2 = BW_ValueNoise(q.yx * 1.31 + 17.0);
                float3 jitter = float3(s1 - 0.5, s2 - 0.5, (s1 + s2) * 0.5 - 0.5);
                N = normalize(N + jitter * _FuzzStrength);

                float3 V = GetWorldSpaceNormalizeViewDir(i.positionWS);
                Light mainLight = GetMainLight();
                float NdotL = dot(N, mainLight.direction);
                float wrapped = saturate((NdotL + _Wrap) / (1.0 + _Wrap));
                float NdotV = saturate(dot(normalize(i.normalWS), V));
                float rim = pow(1.0 - NdotV, _RimPower) * _RimStrength;

                half3 albedo = i.color.rgb * _BaseColor.rgb;
                albedo = lerp(albedo, albedo * _TipColor.rgb * 1.25, saturate(i.color.a) * 0.45);
                albedo *= 0.85 + 0.3 * s1; // strand variation

                float3 H = normalize(mainLight.direction + V);
                float spec = pow(saturate(dot(N, H)), 24.0) * _Gloss;

                half3 c = albedo * (mainLight.color * wrapped + SampleSH(N) * 0.9);
                c += _RimColor.rgb * rim * (0.6 + 0.4 * wrapped);
                c += mainLight.color * spec;
                c += albedo * _Emission;
                c = MixFog(c, i.fogFactor);
                return half4(c, 1.0);
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
            #pragma multi_compile_instancing
            struct A { float4 positionOS : POSITION; UNITY_VERTEX_INPUT_INSTANCE_ID };
            struct VOut { float4 positionCS : SV_POSITION; };
            VOut vertDepth(A v) { VOut o; UNITY_SETUP_INSTANCE_ID(v); o.positionCS = TransformObjectToHClip(v.positionOS.xyz); return o; }
            half4 fragDepth(VOut i) : SV_Target { return 0; }
            ENDHLSL
        }
    }
    FallBack "Hidden/Universal Render Pipeline/FallbackError"
}
