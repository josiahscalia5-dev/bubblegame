// Glossy crystal for the Meshy pink gemstone collectible.
// - The Meshy colour texture keeps the gem's own pink and magenta; its normal map keeps the facet
//   detail. Saturation and brightness are tunable without repainting.
// - Glossy dielectric: a sharp highlight from the sun, pink/lavender sky reflections that brighten
//   toward the facet edges (fresnel), and a white horizon band, so it reads as crystal without a
//   reflection probe.
// - Facet sparkles: tight sun glints that flash as the gem turns, plus small twinkles that shimmer
//   over time.
// - Responds to gameplay: the glow and sparkle rise as the mascot gets close (_BW_PlayerPos, pushed
//   every frame by Level1Environment), so every gem can share one material and stay SRP-batched.
// All parameters are live-tunable from the BubbleWashLook component.
Shader "BubbleWash/Gem"
{
    Properties
    {
        [MainTexture] _BaseMap ("Colour (Meshy texture)", 2D) = "white" {}
        [Normal] _NormalMap ("Normal Map (Meshy)", 2D) = "bump" {}
        _NormalStrength ("Normal Strength", Range(0, 2)) = 1
        [MainColor] _BaseColor ("Tint", Color) = (1, 1, 1, 1)
        _Saturation ("Saturation", Range(0, 2)) = 1.15
        _Brightness ("Brightness", Range(0, 2)) = 1.1
        _LightInfluence ("Scene Light Influence", Range(0, 1)) = 0.35
        _Glow ("Glow", Range(0, 2)) = 0.35
        [HDR] _SkyColor ("Sky Reflection", Color) = (0.85, 0.78, 1.0, 1)
        [HDR] _PinkColor ("Pink Reflection", Color) = (1.0, 0.55, 0.9, 1)
        _Reflection ("Reflection", Range(0, 2)) = 0.9
        _Gloss ("Gloss", Range(8, 512)) = 160
        _Specular ("Highlight", Range(0, 4)) = 1.6
        _Sparkle ("Facet Sparkle", Range(0, 6)) = 2.5
        _NearRange ("Mascot Range (m)", Float) = 6
        _NearGlow ("Glow When Near", Range(0, 3)) = 0.8
        [Enum(UnityEngine.Rendering.CullMode)] _Cull ("Cull", Float) = 2
    }
    SubShader
    {
        Tags { "RenderType" = "Opaque" "Queue" = "Geometry" "RenderPipeline" = "UniversalPipeline" }
        LOD 200

        HLSLINCLUDE
        #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
        #include "BubbleWashCommon.hlsl"

        TEXTURE2D(_BaseMap); SAMPLER(sampler_BaseMap);
        TEXTURE2D(_NormalMap); SAMPLER(sampler_NormalMap);
        CBUFFER_START(UnityPerMaterial)
            float4 _BaseMap_ST;
            half4 _BaseColor;
            half4 _SkyColor;
            half4 _PinkColor;
            half _NormalStrength;
            half _Saturation;
            half _Brightness;
            half _LightInfluence;
            half _Glow;
            half _Reflection;
            half _Gloss;
            half _Specular;
            half _Sparkle;
            float _NearRange;
            half _NearGlow;
            half _Cull;
        CBUFFER_END
        ENDHLSL

        Pass
        {
            Name "ForwardLit"
            Tags { "LightMode" = "UniversalForward" }
            Cull [_Cull]
            ZWrite On

            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fog
            #pragma multi_compile_instancing
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                float3 normalOS : NORMAL;
                float4 tangentOS : TANGENT;
                float2 uv : TEXCOORD0;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float2 uv : TEXCOORD0;
                float3 positionWS : TEXCOORD1;
                float3 normalWS : TEXCOORD2;
                float4 tangentWS : TEXCOORD3;
                float near : TEXCOORD4;        // 0 far .. 1 when the mascot is at the gem
                half fogFactor : TEXCOORD5;
                UNITY_VERTEX_OUTPUT_STEREO
            };

            Varyings vert(Attributes v)
            {
                Varyings o = (Varyings)0;
                UNITY_SETUP_INSTANCE_ID(v);
                UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
                o.positionWS = TransformObjectToWorld(v.positionOS.xyz);
                o.positionCS = TransformWorldToHClip(o.positionWS);
                VertexNormalInputs n = GetVertexNormalInputs(v.normalOS, v.tangentOS);
                o.normalWS = n.normalWS;
                o.tangentWS = float4(n.tangentWS, v.tangentOS.w * GetOddNegativeScale());
                o.uv = TRANSFORM_TEX(v.uv, _BaseMap);
                float3 centre = TransformObjectToWorld(float3(0, 0, 0));
                o.near = 1.0 - smoothstep(0.0, max(0.1, _NearRange), distance(centre, _BW_PlayerPos.xyz));
                o.fogFactor = ComputeFogFactor(o.positionCS.z);
                return o;
            }

            half4 frag(Varyings i) : SV_Target
            {
                half4 tex = (half4)SAMPLE_TEXTURE2D(_BaseMap, sampler_BaseMap, i.uv) * _BaseColor;
                half lum = dot(tex.rgb, half3(0.299, 0.587, 0.114));
                half3 albedo = max(0, lerp(lum.xxx, tex.rgb, _Saturation)) * _Brightness;

                half3 nTS = UnpackNormalScale((half4)SAMPLE_TEXTURE2D(_NormalMap, sampler_NormalMap, i.uv), _NormalStrength);
                float3 bitangent = i.tangentWS.w * cross(i.normalWS, i.tangentWS.xyz);
                float3 N = normalize(TransformTangentToWorld(nTS, half3x3(i.tangentWS.xyz, bitangent, i.normalWS)));
                float3 V = GetWorldSpaceNormalizeViewDir(i.positionWS);
                Light mainLight = GetMainLight();
                float3 L = mainLight.direction;
                float NdotV = saturate(dot(N, V));
                float fresnel = pow(1.0 - NdotV, 3.0);
                float near = i.near;

                // Base: the Meshy colour, partly lit by the scene, with a gentle glow that rises near the mascot.
                half diffuse = (half)lerp(1.0, saturate(dot(N, L)) * 0.6 + 0.4, _LightInfluence);
                half3 col = albedo * diffuse * mainLight.color;
                col += albedo * (_Glow + _NearGlow * (half)near);

                // Crystal reflections: lavender sky above, pink around, a bright horizon band, strongest at the edges.
                float3 R = reflect(-V, N);
                half3 env = lerp(_PinkColor.rgb, _SkyColor.rgb, (half)saturate(R.y * 0.5 + 0.5));
                env += (half)(exp(-R.y * R.y * 18.0) * 0.6);
                col += env * (half)((0.18 + fresnel) * _Reflection);

                // Glossy highlight, tight sun glints on facets as the gem turns, and twinkles over time.
                float3 H = normalize(L + V);
                float spec = pow(saturate(dot(N, H)), _Gloss) * _Specular;
                float glint = pow(saturate(dot(R, L)), 600.0) * _Sparkle;
                float twinkle = step(0.986, BW_Hash21(floor(i.uv * 46.0) + floor(_BW_WaveTime * 7.0)))
                              * saturate(fresnel * 2.0 + 0.3) * _Sparkle * (0.25 + near);
                col += mainLight.color * (half)(spec + glint + twinkle);

                col = MixFog(col, i.fogFactor);
                return half4(col, 1.0);
            }
            ENDHLSL
        }

        Pass
        {
            Name "DepthOnly"
            Tags { "LightMode" = "DepthOnly" }
            ZWrite On
            ColorMask R
            Cull [_Cull]

            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vertDepth
            #pragma fragment fragDepth
            #pragma multi_compile_instancing

            struct A { float4 positionOS : POSITION; UNITY_VERTEX_INPUT_INSTANCE_ID };
            struct VOut { float4 positionCS : SV_POSITION; };

            VOut vertDepth(A v)
            {
                VOut o;
                UNITY_SETUP_INSTANCE_ID(v);
                o.positionCS = TransformObjectToHClip(v.positionOS.xyz);
                return o;
            }

            half4 fragDepth(VOut i) : SV_Target { return 0; }
            ENDHLSL
        }
    }
    FallBack "Hidden/Universal Render Pipeline/FallbackError"
}
