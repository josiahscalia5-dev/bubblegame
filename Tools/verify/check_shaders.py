"""Compile the Bubble Wash .shader passes with Unity 6.3's bundled DXC (libdxcompiler.so) against URP 17.3.

For each pass: SubShader HLSLINCLUDE + the pass HLSLPROGRAM, every multi_compile keyword variant,
vertex and fragment stage, for the D3D11 header and the Vulkan header with SHADER_API_MOBILE.
Run Tools/verify/setup.sh once first.
Usage: python3 -I check_shaders.py [shader files...]   (default: every shader in Assets/BubbleWash/Shaders)
"""
import ctypes as C
import glob
import itertools
import os
import re
import sys
import uuid

_here = os.path.dirname(os.path.abspath(__file__))
_cache = os.environ.get("BW_VERIFY_CACHE", os.path.expanduser("~/.cache/bubblewash-verify"))
lib_path = os.path.join(_cache, "unity/Editor/Data/Tools/libdxcompiler.so")
inc_root = os.path.join(_cache, "incroot")
shader_dir = os.path.normpath(os.path.join(_here, "../../Assets/BubbleWash/Shaders"))
files = sys.argv[1:] or sorted(glob.glob(os.path.join(shader_dir, "*.shader")))
BASE = 3  # IUnknown vtable entries (QueryInterface, AddRef, Release)

class GUID(C.Structure):
    _fields_ = [("d1", C.c_uint32), ("d2", C.c_uint16), ("d3", C.c_uint16), ("d4", C.c_ubyte * 8)]

def guid(s):
    u = uuid.UUID(s)
    g = GUID(u.time_low, u.time_mid, u.time_hi_version)
    for i, b in enumerate(u.bytes[8:]):
        g.d4[i] = b
    return g

class DxcBuffer(C.Structure):
    _fields_ = [("ptr", C.c_void_p), ("size", C.c_size_t), ("encoding", C.c_uint32)]

CLSID_Compiler = guid("73e22d93-e6ce-47f3-b5bf-f0664f39c1b0")
CLSID_Utils = guid("6245d6af-66e0-48fd-80b4-4d271796748c")
IID_Compiler3 = guid("228b4687-5a6a-4730-900c-9702b2203f54")
IID_Utils = guid("4605c4cb-2019-492a-ada4-65f20bb7d67f")
IID_Result = guid("58346cda-dde7-4497-9461-6f87af5e0659")

lib = C.CDLL(lib_path)
lib.DxcCreateInstance.argtypes = [C.POINTER(GUID), C.POINTER(GUID), C.POINTER(C.c_void_p)]
lib.DxcCreateInstance.restype = C.c_int32

def method(obj, index, restype, *argtypes):
    vtbl = C.cast(obj, C.POINTER(C.POINTER(C.c_void_p)))[0]
    return C.CFUNCTYPE(restype, C.c_void_p, *argtypes)(vtbl[index])

def create(clsid, iid):
    p = C.c_void_p()
    hr = lib.DxcCreateInstance(C.byref(clsid), C.byref(iid), C.byref(p))
    if hr != 0:
        raise RuntimeError(f"DxcCreateInstance failed {hr:#x}")
    return p

compiler = create(CLSID_Compiler, IID_Compiler3)
utils = create(CLSID_Utils, IID_Utils)
include = C.c_void_p()
hr = method(utils, BASE + 6, C.c_int32, C.POINTER(C.c_void_p))(utils, C.byref(include))  # CreateDefaultIncludeHandler
assert hr == 0, hr

def compile_hlsl(source, entry, profile, defines):
    src = source.encode()
    buf = DxcBuffer(C.cast(C.c_char_p(src), C.c_void_p), len(src), 65001)
    args = ["-E", entry, "-T", profile, "-I", inc_root, "-I", shader_dir, "-HV", "2018", "-Wno-ignored-attributes", "-Wno-unknown-pragmas"]
    for d in defines:
        args += ["-D", d]
    argv = (C.c_wchar_p * len(args))(*args)
    result = C.c_void_p()
    hr = method(compiler, BASE + 0, C.c_int32, C.POINTER(DxcBuffer), C.POINTER(C.c_wchar_p), C.c_uint32, C.c_void_p, C.POINTER(GUID), C.POINTER(C.c_void_p))(
        compiler, C.byref(buf), argv, len(args), include, C.byref(IID_Result), C.byref(result))
    if hr != 0:
        return False, f"Compile() returned {hr:#x}"
    status = C.c_int32()
    method(result, BASE + 0, C.c_int32, C.POINTER(C.c_int32))(result, C.byref(status))           # GetStatus
    errors = C.c_void_p()
    method(result, BASE + 2, C.c_int32, C.POINTER(C.c_void_p))(result, C.byref(errors))         # GetErrorBuffer
    text = ""
    if errors:
        ptr = method(errors, BASE + 0, C.c_void_p)(errors)
        size = method(errors, BASE + 1, C.c_size_t)(errors)
        if ptr and size:
            text = C.string_at(ptr, size).decode(errors="replace")
        method(errors, 2, C.c_uint32)(errors)
    method(result, 2, C.c_uint32)(result)
    return status.value == 0, text

BUILTIN = {
    "multi_compile_fog": [["", "FOG_LINEAR", "FOG_EXP", "FOG_EXP2"]],
    "multi_compile_instancing": [["", "INSTANCING_ON"]],
}

def passes(path):
    text = open(path).read()
    text = re.sub(r"//[^\n]*", "", text)
    include = "\n".join(re.findall(r"HLSLINCLUDE(.*?)ENDHLSL", text, re.S))
    for i, prog in enumerate(re.findall(r"HLSLPROGRAM(.*?)ENDHLSL", text, re.S)):
        vs = re.search(r"#pragma\s+vertex\s+(\w+)", prog).group(1)
        ps = re.search(r"#pragma\s+fragment\s+(\w+)", prog).group(1)
        sets = []
        for m in re.finditer(r"#pragma[ \t]+(multi_compile\w*|shader_feature\w*)[ \t]*([^\n]*)", prog):
            kind, rest = m.group(1), m.group(2).split()
            if kind in BUILTIN:
                sets += BUILTIN[kind]
            elif rest:
                sets.append(["" if k == "_" else k for k in rest])
        body = re.sub(r"#pragma[^\n]*", "", prog)
        yield i, include + "\n" + body, vs, ps, sets

# GLES3.hlsl relies on Unity's own preprocessor (#error inside a macro), which DXC rejects, so the
# mobile code paths are checked through the Vulkan header with SHADER_API_MOBILE.
APIS = {
    "D3D11": ["SHADER_API_D3D11=1"],
    "VulkanMobile": ["SHADER_API_VULKAN=1", "SHADER_API_MOBILE=1"],
}
total = failed = 0
for f in files:
    name = f.rsplit("/", 1)[-1]
    for i, src, vs, ps, sets in passes(f):
        for combo in itertools.product(*sets) if sets else [()]:
            kws = [k for k in combo if k]
            for api, api_defs in APIS.items():
                for entry, prof, stage in ((vs, "vs_6_0", "SHADER_STAGE_VERTEX=1"), (ps, "ps_6_0", "SHADER_STAGE_FRAGMENT=1")):
                    defs = api_defs + [stage, "SHADER_TARGET=30", "UNITY_VERSION=60000327", "UNITY_COMPILER_DXC=1"] + [k + "=1" for k in kws]
                    ok, msg = compile_hlsl(src, entry, prof, defs)
                    total += 1
                    if not ok:
                        failed += 1
                        print(f"FAIL {name} pass {i} {api} {prof} [{' '.join(kws) or 'no keywords'}]\n{msg[:3000]}")
                    else:
                        # Warnings in this project's code (the extracted pass is "hlsl.hlsl"), not URP's library.
                        own = [l for l in msg.splitlines() if "warning" in l and re.match(r"(hlsl\.hlsl|BubbleWash\w*\.hlsl|.*/BubbleWash/Shaders/)", l)]
                        if own:
                            print(f"warn {name} pass {i} {api} {prof}: {sorted(set(own))}")
        print(f"{name} pass {i}: {len(list(itertools.product(*sets))) if sets else 1} keyword variants")
print(f"{total - failed}/{total} compiles succeeded")
sys.exit(1 if failed else 0)
