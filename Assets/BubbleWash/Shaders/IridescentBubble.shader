// Soap bubble for particles and pickups: transparent centre, thin-film rainbow rim, two
// specular highlights. Premultiplied alpha so overlapping bubbles stay clean. Billboard quads.
Shader "BubbleWash/IridescentBubble"
{
    Properties
    {
        _Tint ("Tint", Color) = (1, 1, 1, 1)
        _RimPower ("Rim Power", Range(0.5, 6)) = 2.4
        _FilmShift ("Film Shift", Range(0, 1)) = 0.15
        _FilmSpeed ("Film Swirl Speed", Range(0, 2)) = 0.35
        _Highlight ("Highlight", Range(0, 4)) = 2.2
        _Opacity ("Opacity", Range(0, 1)) = 0.85
    }
    SubShader
    {
        Tags { "RenderType" = "Transparent" "Queue" = "Transparent" "RenderPipeline" = "UniversalPipeline" "IgnoreProjector" = "True" "PreviewType" = "Plane" }
        Pass
        {
            Name "Bubble"
            Tags { "LightMode" = "UniversalForward" }
            Blend One OneMinusSrcAlpha
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
                half4 _Tint;
                half _RimPower;
                half _FilmShift;
                half _FilmSpeed;
                half _Highlight;
                half _Opacity;
            CBUFFER_END

            struct Attributes
            {
                float4 positionOS : POSITION;
                half4 color : COLOR;
                float2 uv : TEXCOORD0;
            };

            struct Varyings
            {
                float4 positionCS : SV_POSITION;
                half4 color : COLOR;
                float2 uv : TEXCOORD0;
                half fogFactor : TEXCOORD1;
                float seed : TEXCOORD2;
            };

            Varyings vert(Attributes v)
            {
                Varyings o;
                float3 ws = TransformObjectToWorld(v.positionOS.xyz);
                o.positionCS = TransformWorldToHClip(ws);
                o.color = v.color;
                o.uv = v.uv;
                o.fogFactor = ComputeFogFactor(o.positionCS.z);
                o.seed = frac(dot(ws, float3(0.13, 0.71, 0.37)));
                return o;
            }

            half4 frag(Varyings i) : SV_Target
            {
                float2 p = i.uv * 2.0 - 1.0;
                float r2 = dot(p, p);
                clip(1.0 - r2);
                float z = sqrt(saturate(1.0 - r2));
                float edge = pow(1.0 - z, _RimPower);
                float t = _Time.y * _FilmSpeed + i.seed * 7.0;
                float swirl = BW_ValueNoise(p * 2.5 + float2(t, -t * 0.7));
                float3 film = BW_ThinFilm(edge * 1.3 + swirl * 0.45 + _FilmShift + p.y * 0.25);
                float alpha = saturate(edge * 0.95 + 0.06) * _Opacity * i.color.a;
                float3 col = film * _Tint.rgb * (0.55 + edge * 0.9);
                // Window highlights.
                float h1 = smoothstep(0.24, 0.0, length(p - float2(-0.38, 0.42)));
                float h2 = smoothstep(0.10, 0.0, length(p - float2(0.42, -0.36)));
                float hl = (h1 + h2 * 0.6) * _Highlight;
                col = col * alpha + hl * i.color.a;
                col *= i.color.rgb;
                col = MixFogColor(col, float3(0, 0, 0), (float)i.fogFactor);
                return half4(col, saturate(alpha + hl * 0.5));
            }
            ENDHLSL
        }
    }
    FallBack Off
}
