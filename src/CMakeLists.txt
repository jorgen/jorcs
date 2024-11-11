set (public_headers
        jorcs/cube.h
)
add_library(jorcs cube.cpp)
target_link_libraries(jorcs PUBLIC fmt::fmt)
set_target_properties(jorcs
        PROPERTIES
        PUBLIC_HEADER "${public_headers}"
)
target_include_directories(jorcs
        PUBLIC
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}>
        $<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}>
        $<INSTALL_INTERFACE:include>
)
target_compile_definitions(jorcs PRIVATE JORCS_EXPORTS)