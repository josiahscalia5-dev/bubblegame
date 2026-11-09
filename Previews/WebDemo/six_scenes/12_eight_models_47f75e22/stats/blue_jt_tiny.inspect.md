
 OVERVIEW
 ────────────────────────────────────────────
| key                | value                                          |
| ---                | ---                                            |
| version            | 2.0                                            |
| generator          | gltfpack 1.2                                   |
| extensionsUsed     | KHR_mesh_quantization, EXT_meshopt_compression |
| extensionsRequired | KHR_mesh_quantization, EXT_meshopt_compression |



 SCENES
 ────────────────────────────────────────────
| #   | name | rootName                                        | bboxMin                      | bboxMax                   | renderVertexCount¹ | uploadVertexCount | uploadNaiveVertexCount |
| --- | ---  | ---                                             | ---                          | ---                       | ---                | ---               | ---                    |
| 0   |      | tripo_node_83f0cb95-462c-4354-ad7a-c828c670988d | -0.22195, -0.49005, -0.48969 | 0.22137, 0.49014, 0.48969 | 5,869,734          | 1,016,244         | 1,016,244              |

¹ Expected number of vertices processed by the vertex shader for one render
  pass, without considering the vertex cache.

² Expected number of vertices uploaded to GPU, assuming each Accessor
  is uploaded only once. Actual number uploaded may be higher, 
  dependent on the implementation and vertex buffer layout.

³ Expected number of vertices uploaded to GPU, assuming each Primitive
  is uploaded once, duplicating vertex attributes shared among Primitives.



 MESHES
 ────────────────────────────────────────────
| #   | name | mode      | meshPrimitives | glPrimitives | vertices  | indices | attributes                                   | instances | size¹    |
| --- | ---  | ---       | ---            | ---          | ---       | ---     | ---                                          | ---       | ---      |
| 0   |      | TRIANGLES | 1              | 1,956,578    | 1,016,244 | u32     | NORMAL:i8_norm, POSITION:f32, TEXCOORD_0:f32 | 1         | 46.85 MB |

⁴ size estimates GPU memory required by a mesh, in isolation. If accessors are
  shared by other mesh primitives, but the meshes themselves are not reused, then
  the sum of all mesh sizes will overestimate the asset's total size. See "dedup".



 MATERIALS
 ────────────────────────────────────────────
| #   | name                                                | instances | textures                                                  | alphaMode | doubleSided |
| --- | ---                                                 | ---       | ---                                                       | ---       | ---         |
| 0   | tripo_material_83f0cb95-462c-4354-ad7a-c828c670988d | 1         | baseColorTexture, normalTexture, metallicRoughnessTexture | OPAQUE    |             |



 TEXTURES
 ────────────────────────────────────────────
| #   | name                                          | uri | slots                    | instances | mimeType   | compression | resolution | size      | gpuSize⁵ |
| --- | ---                                           | --- | ---                      | ---       | ---        | ---         | ---        | ---       | ---      |
| 0   | Color_83f0cb95-462c-4354-ad7a-c828c670988d    |     | baseColorTexture         | 1         | image/jpeg |             | 512x512    | 71.14 KB  | 1.4 MB   |
| 1   | ORM_83f0cb95-462c-4354-ad7a-c828c670988d      |     | metallicRoughnessTexture | 1         | image/jpeg |             | 512x512    | 33.43 KB  | 1.4 MB   |
| 2   | NormalGL_83f0cb95-462c-4354-ad7a-c828c670988d |     | normalTexture            | 1         | image/png  |             | 512x512    | 171.86 KB | 1.4 MB   |

⁵ gpuSize estimates minimum VRAM memory allocation. Older devices may require
  additional memory for GPU compression formats.



 ANIMATIONS
 ────────────────────────────────────────────
No animations found.

