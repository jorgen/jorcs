add_executable(tests
        doctest-main.cpp
        basic_cube_state.cpp
        test_moves.cpp
)
target_link_libraries(tests PUBLIC doctest jorcs)
