/*
jorcs (jorgens own rubiks cube solver)
Copyright (C) 2024 Jørgen Lind

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

#include <charconv>
#include <cstdint>
#include <cstdlib>
#include <print>
#include <string>

#include <prism/prism.h>

#include <vio/event_loop.h>
#include <vio/run.h>
#include <vio/task.h>

namespace
{
std::string env_or(const char *name, std::string fallback)
{
  const char *value = std::getenv(name);
  return value != nullptr ? std::string(value) : std::move(fallback);
}

std::uint16_t parse_port(const std::string &text, std::uint16_t fallback)
{
  std::uint16_t port = 0;
  const char *begin = text.data();
  const char *end = begin + text.size();
  if (std::from_chars(begin, end, port).ec == std::errc{} && port != 0)
  {
    return port;
  }
  return fallback;
}
} // namespace

// The cube app is entirely client-side (the C++ solver runs in the browser as
// WebAssembly), so the server just hands out the built SPA with an SPA fallback.
VIO_MAIN(loop, argc, argv)
{
  std::string dist = env_or("CUBE_DIST", "dist");
  std::string host = env_or("CUBE_HOST", "");
  std::uint16_t port = parse_port(env_or("CUBE_PORT", "8080"), 8080);

  if (argc > 1)
  {
    dist = argv[1];
  }
  if (argc > 2)
  {
    port = parse_port(argv[2], port);
  }

  std::println("cube server on http://localhost:{} (dist: {})", port, dist);
  co_return co_await prism::run(loop, host, port,
                                [dist](prism::app_t &app)
                                {
                                  app.get("/api/health", [](prism::request_t) -> vio::task_t<prism::response_t>
                                          { co_return prism::response_t::text(prism::status_t::ok, "ok\n"); });
                                  app.static_files("/", dist, /*spa_fallback=*/true);
                                });
}
