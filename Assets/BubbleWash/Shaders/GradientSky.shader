// Pastel magical sky (pink / lavender / blue) with soft cloud bands, used as the skybox
// outside the castle. Background composition beyond the castle still needs the approved
// Screen 3 scenery models (towers with waterfalls) - see Design/VISUAL_DIFFERENCES.md.
Shader "BubbleWash/GradientSky"
{
    Properties
    {
        _TopColor ("Top", Color) = (0.62, 0.72, 1.0, 1)
        _HorizonColor ("Horizon", Color) = (1.0, 0.82, 0.95, 1)
        _BottomColor ("Bottom", Color) = (0.55, 0.78, 1.0, 1)
        _CloudColor ("Clouds", Color) = (1, 1, 1, 1)
        _CloudAmount ("Cloud Amount", Range(0, 1)) = 0.55
        _Exposure ("Exposure", Range(0, 3)) = 1.15
    }
    SubShader
    {
        Tags { "Queue" = "Background" "RenderType" = "Background" "PreviewType" = "Skybox" "RenderPipeline" = "UniversalPipeline" }
        Cull Off ZWrite Off
        Pass
        {
            HLSLPROGRAM
            #pragma target 3.0
            #pragma vertex vert
            #pragma fragment frag
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"
            #include "BubbleWashCommon.hlsl"
            CBUFFER_START(UnityPerMaterial)
                half4 _TopColor;
                half4 _HorizonColor;
                half4 _BottomColor;
                half4 _CloudColor;
                half _CloudAmount;
                half _Exposure;
            CBUFFER_END
            struct Attributes { float4 positionOS : POSITION; };
            struct Varyings { float4 positionCS : SV_POSITION; float3 dir : TEXCOORD0; };
            Varyings vert(Attributes v)
            {
                Varyings o;
                o.positionCS = TransformObjectToHClip(v.positionOS.xyz);
                o.dir = v.positionOS.xyz;
                return o;
            }
            half4 frag(Varyings i) : SV_Target
            {
                float3 d = normalize(i.dir);
                float y = d.y;
                half3 c = y > 0 ? lerp(_HorizonColor.rgb, _TopColor.rgb, pow(saturate(y), 0.6))
                                : lerp(_HorizonColor.rgb, _BottomColor.rgb, pow(saturate(-y), 0.5));
                float2 uv = d.xz / max(0.08, d.y + 0.25) * 1.2 + float2(_Time.x * 0.3, 0);
                float clouds = smoothstep(0.55, 0.85, BW_Fbm(uv * 0.8)) * saturate(1.0 - abs(y - 0.12) * 3.0);
                c = lerp(c, _CloudColor.rgb, clouds * _CloudAmount);
                return half4(c * _Exposure, 1);
            }
            ENDHLSL
        }
    }
    FallBack Off
}
