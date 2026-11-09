
 OVERVIEW
 ────────────────────────────────────────────
| key                | value                             |
| ---                | ---                               |
| version            | 2.0                               |
| generator          | https://github.com/mikedh/trimesh |
| extensionsUsed     | none                              |
| extensionsRequired | none                              |



 SCENES
 ────────────────────────────────────────────
| #   | name | rootName | bboxMin               | bboxMax                   | renderVertexCount¹ | uploadVertexCount | uploadNaiveVertexCount |
| --- | ---  | ---      | ---                   | ---                       | ---                | ---               | ---                    |
| 0   |      | world    | -0.48969, 0, -0.22195 | 0.48969, 0.98019, 0.22137 | 5,869,734          | 978,288           | 978,288                |

¹ Expected number of vertices processed by the vertex shader for one render
  pass, without considering the vertex cache.

² Expected number of vertices uploaded to GPU, assuming each Accessor
  is uploaded only once. Actual number uploaded may be higher, 
  dependent on the implementation and vertex buffer layout.

³ Expected number of vertices uploaded to GPU, assuming each Primitive
  is uploaded once, duplicating vertex attributes shared among Primitives.



 MESHES
 ────────────────────────────────────────────
| #   | name                                            | mode      | meshPrimitives | glPrimitives | vertices | indices | attributes                   | instances | size¹    |
| --- | ---                                             | ---       | ---            | ---          | ---      | ---     | ---                          | ---       | ---      |
| 0   | tripo_mesh_b0a4af6c-4e65-46a2-a23a-486b94552616 | TRIANGLES | 1              | 1,956,578    | 978,288  | u32     | POSITION:f32, TEXCOORD_0:f32 | 1         | 43.04 MB |

⁴ size estimates GPU memory required by a mesh, in isolation. If accessors are
  shared by other mesh primitives, but the meshes themselves are not reused, then
  the sum of all mesh sizes will overestimate the asset's total size. See "dedup".



 MATERIALS
 ────────────────────────────────────────────
| #   | name                                           | instances | textures                                                  | alphaMode | doubleSided |
| --- | ---                                            | ---       | ---                                                       | ---       | ---         |
| 0   | tripo_mat_b0a4af6c-4e65-46a2-a23a-486b94552616 | 1         | baseColorTexture, normalTexture, metallicRoughnessTexture | OPAQUE    |             |



 TEXTURES
 ────────────────────────────────────────────
| #   | name | uri | slots                    | instances | mimeType   | compression | resolution | size      | gpuSize⁵ |
| --- | ---  | --- | ---                      | ---       | ---        | ---         | ---        | ---       | ---      |
| 0   |      |     | baseColorTexture         | 1         | image/jpeg |             | 2048x2048  | 386.12 KB | 22.37 MB |
| 1   |      |     | normalTexture            | 1         | image/jpeg |             | 2048x2048  | 152.18 KB | 22.37 MB |
| 2   |      |     | metallicRoughnessTexture | 1         | image/jpeg |             | 2048x2048  | 196.12 KB | 22.37 MB |

⁵ gpuSize estimates minimum VRAM memory allocation. Older devices may require
  additional memory for GPU compression formats.



 ANIMATIONS
 ────────────────────────────────────────────
No animations found.

