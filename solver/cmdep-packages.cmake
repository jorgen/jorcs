# Dependencies of the native solver build, fetched by cmake-dep (CmDepFetch() in
# CMakeLists.txt). The WASM build (wasm/) has none. After changing a pin run
# `cmdep lock -DBUILD_TESTS=ON` and commit cmdep.lock.

CmDepFetchPackage(fmt 11.0.2
    https://github.com/fmtlib/fmt/archive/11.0.2.tar.gz
    SHA256=6cb1e6d37bdcb756dbbe59be438790db409cdb4868c66e888d5df9f13f7c027f)

if (BUILD_TESTS)
    CmDepFetchPackage(doctest 2.4.12
        https://github.com/doctest/doctest/archive/refs/tags/v2.4.12.tar.gz
        SHA256=73381c7aa4dee704bd935609668cf41880ea7f19fa0504a200e13b74999c2d70)
endif ()
