#ifndef BUBBLEWASH_LIGHTING_INCLUDED
#define BUBBLEWASH_LIGHTING_INCLUDED

// Requires Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl and
//   #pragma multi_compile _ _ADDITIONAL_LIGHTS_VERTEX _ADDITIONAL_LIGHTS
//   #pragma multi_compile _ _CLUSTER_LIGHT_LOOP
// Works with both the Forward (Mobile) and Forward+ (PC / editor) renderers of the template.

// Soft wrapped diffuse from point lights (the drum lights), no shadows.
half3 BW_AdditionalLights(float3 positionWS, half3 normalWS, float4 positionCS)
{
    half3 sum = 0;
#if defined(_ADDITIONAL_LIGHTS)
    InputData inputData = (InputData)0;
    inputData.positionWS = positionWS;
    inputData.normalWS = normalWS;
    inputData.normalizedScreenSpaceUV = GetNormalizedScreenSpaceUV(positionCS);
    uint pixelLightCount = GetAdditionalLightsCount();
    #if USE_CLUSTER_LIGHT_LOOP
    [loop] for (uint lightIndex = 0; lightIndex < min(URP_FP_DIRECTIONAL_LIGHTS_COUNT, MAX_VISIBLE_LIGHTS); lightIndex++)
    {
        CLUSTER_LIGHT_LOOP_SUBTRACTIVE_LIGHT_CHECK
        Light l = GetAdditionalLight(lightIndex, positionWS);
        sum += l.color * (l.distanceAttenuation * saturate(dot(normalWS, l.direction) * 0.5 + 0.5));
    }
    #endif
    LIGHT_LOOP_BEGIN(pixelLightCount)
        Light l = GetAdditionalLight(lightIndex, positionWS);
        sum += l.color * (l.distanceAttenuation * saturate(dot(normalWS, l.direction) * 0.5 + 0.5));
    LIGHT_LOOP_END
#endif
    return sum;
}

half3 BW_Saturate(half3 c, half saturation, half contrast)
{
    half l = dot(c, half3(0.2126h, 0.7152h, 0.0722h));
    c = lerp(l.xxx, c, saturation);
    c = (c - 0.5h) * contrast + 0.5h;
    return max(c, 0.0h);
}

#endif
