# syntax=docker/dockerfile:1
#
# Multi-stage build for cube (cube.limilind.com): one image serving the built SPA,
# which bundles the C++ solver cross-compiled to WebAssembly. The app is entirely
# client-side; the server just serves static files. Context is the repo root:
#   docker build -f deploy/Dockerfile .

# ---------- WASM (C++ solver -> WebAssembly via Emscripten) ----------
FROM emscripten/emsdk:3.1.74 AS wasm
WORKDIR /solver
COPY solver/ ./
RUN emcmake cmake -S wasm -B /wasm-build -DCMAKE_BUILD_TYPE=Release \
 && cmake --build /wasm-build \
 && test -f /wasm-build/jorcs.js

# ---------- pattern databases (generate + gzip; shipped as static assets) ----------
FROM ubuntu:24.04 AS pdb
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends g++-14 gzip \
 && rm -rf /var/lib/apt/lists/*
COPY solver /solver
RUN g++-14 -O3 -std=c++23 -fno-rtti -fno-exceptions -I /solver/src /solver/tools/pdbgen.cpp -o /pdbgen \
 && mkdir -p /pdb && /pdbgen /pdb \
 && gzip -9 /pdb/corner.pdb /pdb/edge_a.pdb /pdb/edge_b.pdb

# ---------- SPA ----------
FROM node:20-slim AS web
WORKDIR /web
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY frontend/ ./
COPY --from=wasm /wasm-build/jorcs.js ./src/wasm/jorcs.js
COPY --from=pdb /pdb/ ./public/pdb/
RUN npm run build   # tsc -b && vite build -> /web/dist (public/pdb/*.gz -> dist/pdb/)

# ---------- backend (prism static-file server) ----------
FROM ubuntu:24.04 AS build
ENV DEBIAN_FRONTEND=noninteractive CC=gcc-14 CXX=g++-14
RUN apt-get update && apt-get install -y --no-install-recommends \
      g++-14 ninja-build git ca-certificates python3-pip \
 && pip3 install --break-system-packages cmake \
 && rm -rf /var/lib/apt/lists/*

# Pinned dependency commits — keep in sync with .github/workflows/ci.yml.
ARG VIO_REF=f2d0267242e1d22f120926320258f0463ce7d860
ARG STRUCTIFY_REF=7ff77ebeb8da5c28d24d88a55abde350e0f0e0e4
ARG PRISM_REF=6fc71eb5c854b35abaab86e51631e4b008b9878d
RUN git clone --filter=blob:none https://github.com/jorgen/vio.git       /deps/vio       && git -C /deps/vio       checkout -q "$VIO_REF" \
 && git clone --filter=blob:none https://github.com/jorgen/structify.git /deps/structify && git -C /deps/structify checkout -q "$STRUCTIFY_REF" \
 && git clone --filter=blob:none https://github.com/jorgen/prism.git     /deps/prism     && git -C /deps/prism     checkout -q "$PRISM_REF"

COPY . /src/cube
RUN cmake -S /src/cube -B /build -G Ninja \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_EXE_LINKER_FLAGS="-static-libstdc++ -static-libgcc" \
      -DCUBE_VIO_DIR=/deps/vio \
      -DCUBE_STRUCTIFY_DIR=/deps/structify \
      -DCUBE_PRISM_DIR=/deps/prism \
 && cmake --build /build --target cube_server \
 && ldd /build/backend/cube_server || true

# ---------- runtime ----------
FROM ubuntu:24.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates tzdata \
 && rm -rf /var/lib/apt/lists/*
ENV SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt \
    CUBE_DIST=/app/dist \
    CUBE_HOST=0.0.0.0 \
    CUBE_PORT=8080
COPY --from=build /build/backend/cube_server /usr/local/bin/cube_server
COPY --from=web   /web/dist                  /app/dist
RUN useradd --system --uid 10001 --user-group app
USER app
EXPOSE 8080
ENTRYPOINT ["/usr/local/bin/cube_server"]
