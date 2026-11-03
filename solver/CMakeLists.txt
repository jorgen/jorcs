cmake_minimum_required(VERSION 3.18)
find_program(CCACHE_PROGRAM ccache)
if (CCACHE_PROGRAM)
    set_property(GLOBAL PROPERTY RULE_LAUNCH_COMPILE "${CCACHE_PROGRAM}")
endif ()

project(jorcs VERSION 0.0.1)

list(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/CMake")


include(GNUInstallDirs)
include(GenerateExportHeader)

get_property(LIB64 GLOBAL PROPERTY FIND_LIBRARY_USE_LIB64_PATHS)
if ("${LIB64}" STREQUAL "TRUE" AND NOT FORCE_NO_LIBDIR_SUFFIX)
    set(LIBSUFFIX 64)
else ()
    set(LIBSUFFIX "")
endif ()

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_VISIBILITY_PRESET hidden)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

if(MSVC)
	string(REGEX REPLACE "/GR" "/GR-" CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS}")
	string(REGEX REPLACE "/EHsc" "/EHs-c-" CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS}")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -D_HAS_EXCEPTIONS=0 -DNOMINMAX=1 -DVC_EXTRALEAN=1 -DWIN32_LEAN_AND_MEAN=1")
else()
	set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fno-rtti -fno-exceptions")
endif()

if(WIN32)
  if(CMAKE_VS_PLATFORM_TOOLSET)
    string(REGEX REPLACE "^v" "" MSVC_TOOLSET_VERSION_LOCAL "${CMAKE_VS_PLATFORM_TOOLSET}")
  else()
    set(MSVC_TOOLSET_VERSION_LOCAL ${MSVC_TOOLSET_VERSION})
  endif()
endif()

option(BUILD_TESTS "Build tests" ON)
option(BUILD_EXAMPLES "Build examples" ON)
option(BUILD_SHARED_LIBS "Build shared libs" ON)

set_property(GLOBAL PROPERTY USE_FOLDERS ON)
find_package(Threads)

include(CMake/SetWarnings.cmake)

include(FetchContent)
FetchContent_Declare(cmake-dep
        GIT_REPOSITORY https://github.com/jorgen/cmake-dep.git
        GIT_TAG 756bee3072d1bf67e179b62a9635cdcdef5931e7)
FetchContent_MakeAvailable(cmake-dep)
list(APPEND CMAKE_MODULE_PATH "${cmake-dep_SOURCE_DIR}/cmake")
include(CmDepMain)
CmDepFetch()
include(CMake/Build3rdParty.cmake)
Build3rdParty()

add_subdirectory(src)

add_executable(pdbgen tools/pdbgen.cpp)
target_link_libraries(pdbgen PRIVATE jorcs)

if (BUILD_TESTS)
    enable_testing()
    add_subdirectory(tests)
endif ()

