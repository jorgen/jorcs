include(GetPackageInstallDir)

macro(Build3rdParty)
  set(OLD_BUILD_SHARED_LIBS ${BUILD_SHARED_LIBS})
  set(BUILD_SHARED_LIBS OFF)
  add_subdirectory(${fmt_SOURCE_DIR})
  add_subdirectory(${doctest_SOURCE_DIR})
  set(BUILD_SHARED_LIBS ${OLD_BUILD_SHARED_LIBS})
endmacro()
