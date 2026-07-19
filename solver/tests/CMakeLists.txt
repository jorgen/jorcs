add_executable(tests
        doctest-main.cpp
        basic_cube_state.cpp
        test_moves.cpp
        solve_tests.cpp
        ida_tests.cpp
)
target_compile_definitions(tests PRIVATE DOCTEST_CONFIG_NO_EXCEPTIONS_BUT_WITH_ALL_ASSERTS)
target_link_libraries(tests PUBLIC doctest jorcs)
