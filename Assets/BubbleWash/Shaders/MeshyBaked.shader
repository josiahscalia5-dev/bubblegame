// Renders the user's Meshy GLB models (castle portal, washer drum) from their baked colour
// textures without changing the artwork: Meshy bakes lighting into the texture, so full PBR
// lighting on top makes them flat and pale. This keeps the texture as the main colour, adds a
// controllable amount of scene light (sun, ambient, drum lights), restores saturation, and lets
// the bright white/gold ring stripes in the texture glow (picked up by Bloom).
Shader "BubbleWash/MeshyBaked"
{
    Properties
    {
        [MainTexture] _BaseMap ("Baked Colour (Meshy texture)", 2D) = "white" {}
        [MainColor] _BaseColor ("Tint", Color) = (1, 1, 1, 1)
        _Saturation ("Saturation", Range(0, 2)) = 1.25
        _Contrast ("Contrast", Range(0.5, 1.5)) = 1.06
        _Brightness ("Brightness", Range(0, 2)) = 1.0
        _LightInfluence ("Scene Light Influence", Range(0, 1)) = 0.35
        _GlowThreshold ("Glow Threshold (texture brightness)", Range(0, 1)) = 0.78
        _GlowStrength ("Glow Strength", Range(0, 6)) = 1.8
        [HDR] _GlowTint ("Glow Tint", Color) = (1, 0.95, 0.85, 1)
        _InteriorTint ("Interior Tint (back faces / inside)", Color) = (0.55, 0.8, 1, 1)
        _InteriorAmount ("Interior Tint Amount", Range(0, 1)) = 0
        [Enum(UnityEngine.Rendering.CullMode)] _Cull ("Cull", Float) = 0
    }
    SubShader
    {
        Tags { "RenderType" = "Opaque" "Queue" = "Geometry" "RenderPipeline" = "UniversalPipeline" }

        HLSLINCLUDE
        #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
        TEXTURE2D(_BaseMap); SAMPLER(sampler_BaseMap);
        CBUFFER_START(UnityPerMaterial)
            float4 _BaseMap_ST;
            half4 _BaseColor;
            half _Saturation;
            half _Contrast;
            half _Brightness;
            half _LightInfluence;
            half _GlowThreshold;
            half _GlowStrength;
            half4 _GlowTint;
            half4 _InteriorTint;
            half _InteriorAmount;
            half _Cull;
        CBUFFER_END
        ENDHLSL

        Pass
        {
            Name "ForwardLit"
            Tags { "LightMode" = "UniversalForward" }
            Cull [_Cull]

            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_fog
            #pragma multi_compile_instancing
            #pragma multi_compile _ _ADDITIONAL_LIGHTS_VERTEX _ADDITIONAL_LIGHTS
            #pragma multi_compile _ _CLUSTER_LIGHT_LOOP
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"
            #include "BubbleWashLighting.hlsl"

            struct Attributes
            {
                float4 positionOS : POSITION;
                float3 normalOS : NORMAL;
                float2 uv : TEXCOORD0;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                float3 positionWS : TEXCOORD0;
                float3 normalWS : TEXCOORD1;
                float2 uv : TEXCOORD2;
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
                o.uv = TRANSFORM_TEX(v.uv, _BaseMap);
                o.fogFactor = ComputeFogFactor(p.positionCS.z);
                return o;
            }

            half4 frag(Varyings i, FRONT_FACE_TYPE facing : FRONT_FACE_SEMANTIC) : SV_Target
            {
                half4 tex = SAMPLE_TEXTURE2D(_BaseMap, sampler_BaseMap, i.uv) * _BaseColor;
                half3 baked = BW_Saturate(tex.rgb, _Saturation, _Contrast) * _Brightness;

                half3 N = normalize(i.normalWS) * IS_FRONT_VFACE(facing, 1.0, -1.0);
                Light mainLight = GetMainLight();
                half3 light = mainLight.color * saturate(dot(N, mainLight.direction) * 0.6 + 0.4);
                light += SampleSH(N);
                light += BW_AdditionalLights(i.positionWS, N, i.positionCS);
                half3 c = baked * lerp(half3(1.0h, 1.0h, 1.0h), light, _LightInfluence);

                // Inner surfaces (the drum interior) take a cool electric-blue cast.
                half inside = IS_FRONT_VFACE(facing, 0.0, 1.0);
                c = lerp(c, c * _InteriorTint.rgb * 1.6h, _InteriorAmount * inside);

                // Bright parts of the baked texture (white / gold ring stripes, highlights) glow.
                half lum = dot(tex.rgb, half3(0.2126h, 0.7152h, 0.0722h));
                half g = smoothstep(_GlowThreshold, 1.0h, lum);
                c += baked * _GlowTint.rgb * (g * _GlowStrength);

                c = MixFog(c, i.fogFactor);
                return half4(c, 1.0h);
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
            VOut vertDepth(A v) { VOut o; UNITY_SETUP_INSTANCE_ID(v); o.positionCS = TransformObjectToHClip(v.positionOS.xyz); return o; }
            half4 fragDepth(VOut i) : SV_Target { return 0; }
            ENDHLSL
        }
    }
    FallBack "Hidden/Universal Render Pipeline/FallbackError"
}
