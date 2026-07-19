#This file depends on being in points/CMake directory
set(Fetch3rdPartyDirInternal "${CMAKE_CURRENT_LIST_DIR}")
macro(Fetch3rdParty_Package name version url url_hash)
    if (POINTS_3RD_PARTY_DIR)
        set(Fetch3rdPartyDir "${POINTS_3RD_PARTY_DIR}")
    else ()
        set(Fetch3rdPartyDir "${Fetch3rdPartyDirInternal}/../3rdparty")
    endif ()
    get_filename_component(thirdParty "${Fetch3rdPartyDir}" ABSOLUTE)
    set(SRC_DIR ${thirdParty}/${name}-${version})
    set(${name}_SOURCE_DIR ${SRC_DIR} PARENT_SCOPE)
    set(${name}_VERSION ${version} PARENT_SCOPE)
    if (NOT (EXISTS ${SRC_DIR}))
        FetchContent_Populate(${name}
                URL ${url}
                URL_HASH ${url_hash}
                SOURCE_DIR ${SRC_DIR}
                SUBBUILD_DIR ${thirdParty}/CMakeArtifacts/${name}-sub-${version}
                BINARY_DIR ${thirdParty}/CMakeArtifacts/${name}-${version})
    endif ()
endmacro()

macro(Fetch3rdParty_File name version url destination_name url_hash)
    if (POINTS_3RD_PARTY_DIR)
        set(Fetch3rdPartyDir "${POINTS_3RD_PARTY_DIR}")
    else ()
        set(Fetch3rdPartyDir "${Fetch3rdPartyDirInternal}/../3rdparty")
    endif ()
    get_filename_component(thirdParty "${Fetch3rdPartyDir}" ABSOLUTE)
    file(MAKE_DIRECTORY ${thirdParty})
    set(SRC_DIR ${thirdParty}/${name}-${version})
    set(${name}_SOURCE_DIR ${SRC_DIR} PARENT_SCOPE)
    set(${name}_VERSION ${version} PARENT_SCOPE)
    set(DESTINATION_FILE "${SRC_DIR}/${destination_name}")
    if (NOT (EXISTS ${DESTINATION_FILE}))
        file(DOWNLOAD ${url} ${DESTINATION_FILE}
                SHOW_PROGRESS
                EXPECTED_HASH ${url_hash}
        )
    endif ()
endmacro()

function(Fetch3rdParty)
    include(FetchContent)
    set(FETCHCONTENT_QUIET OFF)
    Fetch3rdParty_Package(fmt 11.0.2 https://github.com/fmtlib/fmt/archive/11.0.2.tar.gz SHA256=6cb1e6d37bdcb756dbbe59be438790db409cdb4868c66e888d5df9f13f7c027f)
    Fetch3rdParty_Package(doctest 2.4.12 https://github.com/doctest/doctest/archive/refs/tags/v2.4.12.tar.gz SHA256=73381c7aa4dee704bd935609668cf41880ea7f19fa0504a200e13b74999c2d70)
endfunction()

