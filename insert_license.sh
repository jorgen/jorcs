#!/bin/bash

# File extensions to process
EXTENSIONS=("rs" "ts")

# Read the license text from the LICENSE_HEADER file
LICENSE_TEXT=$(cat LICENSE_HEADER)

# Wrap the license text with block comment delimiters
LICENSE_HEADER="/*\n$LICENSE_TEXT\n*/\n"
LICENSE_MARKER="/*\njorcs (jorgens own rubiks cube solver)"
# Loop over each file extension
for ext in "${EXTENSIONS[@]}"; do
  # Find all files with the given extension, excluding certain directories
 
  find . -type d \( -name "node_modules" -o -name "target" -o -name "pkg" \) -prune -o -type f -name "*.$ext" -print0 | while IFS= read -r -d '' file; do
    echo "Processing file $file"
    echo "Looking for $LICENSE_TEXT"

    if grep -qF "$LICENSE_MARKER" "$file"; then
      echo "License already present in $file"
    else
      echo "Inserting license into $file"
      # Insert the license header at the top of the file
      (echo -e "$LICENSE_HEADER"; cat "$file") > "${file}.new"
      mv "${file}.new" "$file"
    fi
  done
done

