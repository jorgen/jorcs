cmake_minimum_required(VERSION 3.30)

find_program(CCACHE_PROGRAM ccache)
if (CCACHE_PROGRAM)
    set_property(GLOBAL PROPERTY RULE_LAUNCH_COMPILE "${CCACHE_PROGRAM}")
endif ()

project(cube VERSION 0.1.0 DESCRIPTION "Rubik's cube solver — limilind app" LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_SCAN_FOR_MODULES OFF)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

if (MSVC)
    string(REGEX REPLACE "/GR" "/GR-" CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS}")
    string(REGEX REPLACE "/EHsc" "/EHs-c-" CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS}")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -D_HAS_EXCEPTIONS=0")
else ()
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fno-rtti -fno-exceptions")
endif ()

# This is only the backend (a prism static-file server). The C++ cube solver
# lives in solver/ and is cross-compiled to WebAssembly separately (solver/wasm).
# We own vio / prism / structify; consume local checkouts by default so changes in
# a dependency are picked up without a re-pin (overridden in CI / Docker).
set(CUBE_VIO_DIR       "/home/jlind/dev/vio"       CACHE PATH "Local vio checkout")
set(CUBE_STRUCTIFY_DIR "/home/jlind/dev/structify" CACHE PATH "Local structify checkout")
set(CUBE_PRISM_DIR     "/home/jlind/dev/prism"     CACHE PATH "Local prism checkout")

set(VIO_BUILD_TESTS OFF CACHE BOOL "" FORCE)
set(VIO_BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
set(VIO_BUILD_SHARED OFF CACHE BOOL "" FORCE)
set(VIO_INSTALL OFF CACHE BOOL "" FORCE)
set(STRUCTIFY_OPT_BUILD_TESTS OFF CACHE BOOL "" FORCE)
set(STRUCTIFY_OPT_BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
set(STRUCTIFY_OPT_BUILD_BENCHMARKS OFF CACHE BOOL "" FORCE)
set(STRUCTIFY_OPT_INSTALL OFF CACHE BOOL "" FORCE)
set(PRISM_BUILD_TESTS OFF CACHE BOOL "" FORCE)
set(PRISM_BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)

add_subdirectory(${CUBE_VIO_DIR}       ${CMAKE_BINARY_DIR}/_ext/vio)
add_subdirectory(${CUBE_STRUCTIFY_DIR} ${CMAKE_BINARY_DIR}/_ext/structify)
add_subdirectory(${CUBE_PRISM_DIR}     ${CMAKE_BINARY_DIR}/_ext/prism)

foreach (dep_target vio structify prism)
    set_property(TARGET ${dep_target} PROPERTY
            INTERFACE_SYSTEM_INCLUDE_DIRECTORIES
            $<TARGET_PROPERTY:${dep_target},INTERFACE_INCLUDE_DIRECTORIES>)
endforeach ()

add_subdirectory(backend)
