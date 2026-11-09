
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
| #   | name | rootName                                        | bboxMin                      | bboxMax                  | renderVertexCount¹ | uploadVertexCount | uploadNaiveVertexCount |
| --- | ---  | ---                                             | ---                          | ---                      | ---                | ---               | ---                    |
| 0   |      | tripo_node_b9b6455e-a1b4-4d94-b8c5-352d0f65baa9 | -0.28131, -0.46173, -0.48941 | 0.2814, 0.46216, 0.49069 | 5,741,286          | 979,056           | 979,056                |

¹ Expected number of vertices processed by the vertex shader for one render
  pass, without considering the vertex cache.

² Expected number of vertices uploaded to GPU, assuming each Accessor
  is uploaded only once. Actual number uploaded may be higher, 
  dependent on the implementation and vertex buffer layout.

³ Expected number of vertices uploaded to GPU, assuming each Primitive
  is uploaded once, duplicating vertex attributes shared among Primitives.



 MESHES
 ────────────────────────────────────────────
| #   | name | mode      | meshPrimitives | glPrimitives | vertices | indices | attributes                                   | instances | size¹    |
| --- | ---  | ---       | ---            | ---          | ---      | ---     | ---                                          | ---       | ---      |
| 0   |      | TRIANGLES | 1              | 1,913,762    | 979,056  | u32     | NORMAL:i8_norm, POSITION:f32, TEXCOORD_0:f32 | 1         | 45.48 MB |

⁴ size estimates GPU memory required by a mesh, in isolation. If accessors are
  shared by other mesh primitives, but the meshes themselves are not reused, then
  the sum of all mesh sizes will overestimate the asset's total size. See "dedup".



 MATERIALS
 ────────────────────────────────────────────
| #   | name                                                | instances | textures                                                  | alphaMode | doubleSided |
| --- | ---                                                 | ---       | ---                                                       | ---       | ---         |
| 0   | tripo_material_b9b6455e-a1b4-4d94-b8c5-352d0f65baa9 | 1         | baseColorTexture, normalTexture, metallicRoughnessTexture | OPAQUE    |             |



 TEXTURES
 ────────────────────────────────────────────
| #   | name                                          | uri | slots                    | instances | mimeType   | compression | resolution | size      | gpuSize⁵ |
| --- | ---                                           | --- | ---                      | ---       | ---        | ---         | ---        | ---       | ---      |
| 0   | Color_b9b6455e-a1b4-4d94-b8c5-352d0f65baa9    |     | baseColorTexture         | 1         | image/jpeg |             | 512x512    | 57.22 KB  | 1.4 MB   |
| 1   | ORM_b9b6455e-a1b4-4d94-b8c5-352d0f65baa9      |     | metallicRoughnessTexture | 1         | image/jpeg |             | 512x512    | 21.07 KB  | 1.4 MB   |
| 2   | NormalGL_b9b6455e-a1b4-4d94-b8c5-352d0f65baa9 |     | normalTexture            | 1         | image/png  |             | 512x512    | 105.84 KB | 1.4 MB   |

⁵ gpuSize estimates minimum VRAM memory allocation. Older devices may require
  additional memory for GPU compression formats.



 ANIMATIONS
 ────────────────────────────────────────────
No animations found.

