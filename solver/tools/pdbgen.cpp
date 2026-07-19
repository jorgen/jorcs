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

// Generates the three 4-bit-packed pattern databases and writes them to <out-dir>
// as corner.pdb / edge_a.pdb / edge_b.pdb. Run once at build time; the files are
// then gzip-compressed and shipped as static assets for the browser to fetch.

#include <cstdint>
#include <cstdio>
#include <string>
#include <vector>

#include <jorcs/ida.h>

namespace
{
bool writeFile(const std::string &path, const std::vector<uint8_t> &data)
{
  FILE *file = std::fopen(path.c_str(), "wb");
  if (file == nullptr)
  {
    return false;
  }
  const std::size_t written = std::fwrite(data.data(), 1, data.size(), file);
  std::fclose(file);
  return written == data.size();
}
} // namespace

int main(int argc, char **argv)
{
  const std::string out_dir = argc > 1 ? argv[1] : ".";

  std::printf("generating pattern databases...\n");
  std::fflush(stdout);
  const jorcs::ida_detail::PatternDatabases pdbs = jorcs::ida_detail::generatePatternDatabases();

  const bool ok = writeFile(out_dir + "/corner.pdb", pdbs.corner) && writeFile(out_dir + "/edge_a.pdb", pdbs.edge_a) &&
                  writeFile(out_dir + "/edge_b.pdb", pdbs.edge_b);
  if (!ok)
  {
    std::fprintf(stderr, "failed to write pattern databases to %s\n", out_dir.c_str());
    return 1;
  }

  std::printf("wrote corner.pdb (%zu bytes), edge_a.pdb (%zu), edge_b.pdb (%zu) to %s\n", pdbs.corner.size(), pdbs.edge_a.size(),
              pdbs.edge_b.size(), out_dir.c_str());
  return 0;
}
