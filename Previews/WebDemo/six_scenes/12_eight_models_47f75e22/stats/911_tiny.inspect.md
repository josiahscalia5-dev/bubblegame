
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
| 0   |      | tripo_node_3d6d5659-2d78-4e3c-afb6-1c7f3f50065a | -0.31763, -0.48947, -0.39365 | 0.31766, 0.48886, 0.39484 | 5,765,652          | 1,007,385         | 1,007,385              |

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
| 0   |      | TRIANGLES | 1              | 1,921,884    | 1,007,385 | u32     | NORMAL:i8_norm, POSITION:f32, TEXCOORD_0:f32 | 1         | 46.23 MB |

⁴ size estimates GPU memory required by a mesh, in isolation. If accessors are
  shared by other mesh primitives, but the meshes themselves are not reused, then
  the sum of all mesh sizes will overestimate the asset's total size. See "dedup".



 MATERIALS
 ────────────────────────────────────────────
| #   | name                                                | instances | textures                                                  | alphaMode | doubleSided |
| --- | ---                                                 | ---       | ---                                                       | ---       | ---         |
| 0   | tripo_material_3d6d5659-2d78-4e3c-afb6-1c7f3f50065a | 1         | baseColorTexture, normalTexture, metallicRoughnessTexture | OPAQUE    |             |



 TEXTURES
 ────────────────────────────────────────────
| #   | name                                          | uri | slots                    | instances | mimeType   | compression | resolution | size     | gpuSize⁵ |
| --- | ---                                           | --- | ---                      | ---       | ---        | ---         | ---        | ---      | ---      |
| 0   | Color_3d6d5659-2d78-4e3c-afb6-1c7f3f50065a    |     | baseColorTexture         | 1         | image/jpeg |             | 512x512    | 75.29 KB | 1.4 MB   |
| 1   | ORM_3d6d5659-2d78-4e3c-afb6-1c7f3f50065a      |     | metallicRoughnessTexture | 1         | image/jpeg |             | 512x512    | 15.21 KB | 1.4 MB   |
| 2   | NormalGL_3d6d5659-2d78-4e3c-afb6-1c7f3f50065a |     | normalTexture            | 1         | image/jpeg |             | 512x512    | 18.13 KB | 1.4 MB   |

⁵ gpuSize estimates minimum VRAM memory allocation. Older devices may require
  additional memory for GPU compression formats.



 ANIMATIONS
 ────────────────────────────────────────────
No animations found.

