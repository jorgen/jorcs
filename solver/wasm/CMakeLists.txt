# Emscripten build of the cube solver → a self-contained ES6 WASM module.
# Configure with emcmake so the Emscripten toolchain is active:
#   emcmake cmake -S solver/wasm -B build-wasm -DCMAKE_BUILD_TYPE=Release
#   cmake --build build-wasm            # -> build-wasm/jorcs.js
cmake_minimum_required(VERSION 3.16)
project(jorcs_wasm CXX)

if (NOT EMSCRIPTEN)
    message(FATAL_ERROR "solver/wasm must be configured with emcmake (Emscripten toolchain)")
endif ()

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

if (NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release)
endif ()

add_executable(jorcs bindings.cpp)
target_include_directories(jorcs PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/../src)
target_compile_options(jorcs PRIVATE -O3)
target_link_options(jorcs PRIVATE
        -O3
        -lembind
        -sMODULARIZE=1
        -sEXPORT_ES6=1
        -sEXPORT_NAME=createJorcsModule
        -sENVIRONMENT=web
        -sSINGLE_FILE=1
        -sFILESYSTEM=0
        -sALLOW_MEMORY_GROWTH=1
)
set_target_properties(jorcs PROPERTIES OUTPUT_NAME jorcs SUFFIX ".js")
