# syntax=docker/dockerfile:1
#
# Multi-stage build for cube (cube.limilind.com): one image serving the built SPA,
# which bundles the C++ solver cross-compiled to WebAssembly. The app is entirely
# client-side; the server just serves static files. Context is the repo root:
#   docker build -f deploy/Dockerfile .

# ---------- WASM (C++ solver -> WebAssembly via Emscripten) ----------
FROM emscripten/emsdk:6.0.3 AS wasm
WORKDIR /solver
COPY solver/ ./
RUN emcmake cmake -S wasm -B /wasm-build -DCMAKE_BUILD_TYPE=Release \
 && cmake --build /wasm-build \
 && test -f /wasm-build/jorcs.js

# ---------- SPA ----------
FROM node:20-slim AS web
WORKDIR /web
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY frontend/ ./
COPY --from=wasm /wasm-build/jorcs.js ./src/wasm/jorcs.js
RUN npm run build   # tsc -b && vite build -> /web/dist

# ---------- backend (prism static-file server) ----------
FROM ubuntu:24.04 AS build
ENV DEBIAN_FRONTEND=noninteractive CC=gcc-14 CXX=g++-14
# golang-go: vio builds BoringSSL, whose build runs Go.
RUN apt-get update && apt-get install -y --no-install-recommends \
      g++-14 ninja-build git ca-certificates python3-pip golang-go \
 && pip3 install --break-system-packages cmake \
 && rm -rf /var/lib/apt/lists/*

COPY . /src/cube
# Dependencies (vio, structify, prism) are pinned in cmdep-packages.cmake and fetched by
# cmake-dep; CMDEP_LOCKED fails the build if cmdep.lock is out of date.
RUN --mount=type=cache,target=/root/.cache/cmake-dep \
    cmake -S /src/cube -B /build -G Ninja \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMDEP_LOCKED=ON \
      -DCMAKE_EXE_LINKER_FLAGS="-static-libstdc++ -static-libgcc" \
 && cmake --build /build --target cube_server \
 && (ldd /build/backend/cube_server || true)

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
