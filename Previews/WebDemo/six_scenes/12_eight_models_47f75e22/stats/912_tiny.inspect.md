
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
| 0   |      | tripo_node_f6fc3963-38ac-49de-8e56-ea8832f6fec2 | -0.34668, -0.48953, -0.34814 | 0.34732, 0.48947, 0.34793 | 5,680,872          | 987,433           | 987,433                |

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
| 0   |      | TRIANGLES | 1              | 1,893,624    | 987,433  | u32     | NORMAL:i8_norm, POSITION:f32, TEXCOORD_0:f32 | 1         | 45.43 MB |

⁴ size estimates GPU memory required by a mesh, in isolation. If accessors are
  shared by other mesh primitives, but the meshes themselves are not reused, then
  the sum of all mesh sizes will overestimate the asset's total size. See "dedup".



 MATERIALS
 ────────────────────────────────────────────
| #   | name                                                | instances | textures                                                  | alphaMode | doubleSided |
| --- | ---                                                 | ---       | ---                                                       | ---       | ---         |
| 0   | tripo_material_f6fc3963-38ac-49de-8e56-ea8832f6fec2 | 1         | baseColorTexture, normalTexture, metallicRoughnessTexture | OPAQUE    |             |



 TEXTURES
 ────────────────────────────────────────────
| #   | name                                          | uri | slots                    | instances | mimeType   | compression | resolution | size      | gpuSize⁵ |
| --- | ---                                           | --- | ---                      | ---       | ---        | ---         | ---        | ---       | ---      |
| 0   | Color_f6fc3963-38ac-49de-8e56-ea8832f6fec2    |     | baseColorTexture         | 1         | image/jpeg |             | 1024x1024  | 231.63 KB | 5.59 MB  |
| 1   | ORM_f6fc3963-38ac-49de-8e56-ea8832f6fec2      |     | metallicRoughnessTexture | 1         | image/jpeg |             | 1024x1024  | 64.03 KB  | 5.59 MB  |
| 2   | NormalGL_f6fc3963-38ac-49de-8e56-ea8832f6fec2 |     | normalTexture            | 1         | image/png  |             | 1024x1024  | 548.14 KB | 5.59 MB  |

⁵ gpuSize estimates minimum VRAM memory allocation. Older devices may require
  additional memory for GPU compression formats.



 ANIMATIONS
 ────────────────────────────────────────────
No animations found.

