#ifndef BUBBLEWASH_COMMON_INCLUDED
#define BUBBLEWASH_COMMON_INCLUDED

// Globals pushed every frame by Level1Environment / WaveField.cs.
float _BW_WaveTime;
float _BW_WaveScale;
float _BW_FlowSpeed;
float4 _BW_PlayerPos;
float4 _BW_Tunnel;   // x = tunnel start z, y = tunnel end z, z = opening radius, w = axis height above water
float4 _BW_Channel;  // x = water level, y = edge curl height, z = curl width

// Keep in sync with WaveField.Height (C#).
float BW_WaveBase(float2 xz, float t)
{
    float h = 0.0;
    h += 0.060 * sin(xz.y * 0.90 - t * 3.1 + xz.x * 0.35);
    h += 0.035 * sin(xz.y * 2.30 - t * 5.3 - xz.x * 1.10 + 1.7);
    h += 0.020 * sin(xz.y * 4.70 - t * 7.9 + xz.x * 2.30 + 0.4);
    h += 0.012 * sin(xz.x * 6.00 + t * 4.0 + xz.y * 0.50);
    return h * _BW_WaveScale;
}

float BW_EdgeCurl(float2 xz)
{
    float inside = saturate((xz.y - _BW_Tunnel.x) * 0.5) * saturate((_BW_Tunnel.y - xz.y) * 0.5);
    float half_ = sqrt(max(0.01, _BW_Tunnel.z * _BW_Tunnel.z - _BW_Tunnel.w * _BW_Tunnel.w));
    float u = saturate((abs(xz.x) - (half_ - _BW_Channel.z)) / max(0.01, _BW_Channel.z));
    return inside * _BW_Channel.y * u * u;
}

float BW_WaveHeight(float2 xz, float t)
{
    return _BW_Channel.x + BW_WaveBase(xz, t) + BW_EdgeCurl(xz);
}

float BW_Hash21(float2 p)
{
    p = frac(p * float2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return frac(p.x * p.y);
}

float BW_ValueNoise(float2 p)
{
    float2 i = floor(p);
    float2 f = frac(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = BW_Hash21(i);
    float b = BW_Hash21(i + float2(1, 0));
    float c = BW_Hash21(i + float2(0, 1));
    float d = BW_Hash21(i + float2(1, 1));
    return lerp(lerp(a, b, f.x), lerp(c, d, f.x), f.y);
}

float BW_Fbm(float2 p)
{
    float v = 0.0;
    v += 0.55 * BW_ValueNoise(p);
    v += 0.30 * BW_ValueNoise(p * 2.07 + 13.1);
    v += 0.15 * BW_ValueNoise(p * 4.13 + 7.7);
    return v;
}

// Thin-film interference colour used by the soap bubbles (0..1 thickness, view angle term).
float3 BW_ThinFilm(float t)
{
    return 0.5 + 0.5 * cos(6.28318 * (t + float3(0.0, 0.33, 0.67)));
}

#endif
