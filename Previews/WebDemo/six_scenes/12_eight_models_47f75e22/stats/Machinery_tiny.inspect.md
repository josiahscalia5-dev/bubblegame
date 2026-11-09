
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
| #   | name | rootName                                        | bboxMin                    | bboxMax                  | renderVertexCount¹ | uploadVertexCount | uploadNaiveVertexCount |
| --- | ---  | ---                                             | ---                        | ---                      | ---                | ---               | ---                    |
| 0   |      | tripo_node_4d689e2d-da9a-4e01-bdd9-48270b0edd62 | -0.28891, -0.439, -0.49017 | 0.28912, 0.4393, 0.49023 | 5,779,299          | 1,010,336         | 1,010,336              |

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
| 0   |      | TRIANGLES | 1              | 1,926,433    | 1,010,336 | u32     | NORMAL:i8_norm, POSITION:f32, TEXCOORD_0:f32 | 1         | 46.35 MB |

⁴ size estimates GPU memory required by a mesh, in isolation. If accessors are
  shared by other mesh primitives, but the meshes themselves are not reused, then
  the sum of all mesh sizes will overestimate the asset's total size. See "dedup".



 MATERIALS
 ────────────────────────────────────────────
| #   | name                                                | instances | textures                                                  | alphaMode | doubleSided |
| --- | ---                                                 | ---       | ---                                                       | ---       | ---         |
| 0   | tripo_material_4d689e2d-da9a-4e01-bdd9-48270b0edd62 | 1         | baseColorTexture, normalTexture, metallicRoughnessTexture | OPAQUE    |             |



 TEXTURES
 ────────────────────────────────────────────
| #   | name                                          | uri | slots                    | instances | mimeType   | compression | resolution | size      | gpuSize⁵ |
| --- | ---                                           | --- | ---                      | ---       | ---        | ---         | ---        | ---       | ---      |
| 0   | Color_4d689e2d-da9a-4e01-bdd9-48270b0edd62    |     | baseColorTexture         | 1         | image/jpeg |             | 512x512    | 101.89 KB | 1.4 MB   |
| 1   | ORM_4d689e2d-da9a-4e01-bdd9-48270b0edd62      |     | metallicRoughnessTexture | 1         | image/jpeg |             | 512x512    | 34.73 KB  | 1.4 MB   |
| 2   | NormalGL_4d689e2d-da9a-4e01-bdd9-48270b0edd62 |     | normalTexture            | 1         | image/png  |             | 512x512    | 178.55 KB | 1.4 MB   |

⁵ gpuSize estimates minimum VRAM memory allocation. Older devices may require
  additional memory for GPU compression formats.



 ANIMATIONS
 ────────────────────────────────────────────
No animations found.

