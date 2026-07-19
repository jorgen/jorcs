# cube (jorcs)

Jørgen's own Rubik's cube solver — a limilind.com app at **cube.limilind.com**.

The cube solver is written in C++ and cross-compiled to WebAssembly with Emscripten;
it runs entirely in the browser. A React/TypeScript SPA (Vite, Three.js viewer,
OpenCV.js camera recognition) drives it, and a small [prism](https://github.com/jorgen/prism)
server hands out the built assets. Same stack as the other limilind apps
(lineup, lists): a Vite SPA served by a prism static-file server, shipped as one
Docker image and deployed behind the limilind-edge gateway.

## Layout

```
solver/          the C++ cube solver (cube.h, move.h) + native tests
  wasm/          Emscripten (embind) bindings → the WASM module
frontend/        Vite + React + TS SPA (loads the WASM solver)
backend/         prism static-file server (serves the built SPA, no DB)
deploy/          multi-stage Dockerfile
.github/         CI: solver build, WASM+frontend build, image, deploy
```

## Develop

The frontend imports the Emscripten-built module from `frontend/src/wasm/jorcs.js`,
which is generated (git-ignored). Build it once, then run Vite:

```bash
# 1. Build the C++ solver → WASM (needs the emsdk toolchain on PATH).
emcmake cmake -S solver/wasm -B solver/wasm-build -DCMAKE_BUILD_TYPE=Release
cmake --build solver/wasm-build
mkdir -p frontend/src/wasm && cp solver/wasm-build/jorcs.js frontend/src/wasm/

# 2. Run the SPA (Vite dev server).
cd frontend && npm install && npm run dev

# 3. (optional) Serve a built SPA through the backend.
cd frontend && npm run build              # -> frontend/dist
cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release && cmake --build build --target cube_server
./build/backend/cube_server frontend/dist 8080
```

The native solver tests:

```bash
cmake -S solver -B solver/build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build solver/build && ./solver/build/tests/tests
```

> The cube model and the move engine are complete and tested — including the
> 105-cycle invariant (rotating one face then an adjacent face returns to solved
> after exactly 105 rounds, for every edge-sharing pair). The remaining work is the
> solve algorithm itself. The WASM binding, the app, and the deployment pipeline are
> complete.

## Configuration (backend)

| Env | Default | Meaning |
| --- | --- | --- |
| `CUBE_DIST` | `dist` | Directory of built SPA assets to serve |
| `CUBE_HOST` | *(dual-stack)* | Bind address |
| `CUBE_PORT` | `8080` | Bind port |

`cube_server [distDir] [port]` — positional args override `CUBE_DIST` / `CUBE_PORT`.

## Deploy

Push to `main` → CI builds `ghcr.io/jorgen/cube` (WASM + SPA + prism server in one
image) and redeploys the `cube` service on the droplet over SSH. The gateway route
`cube.limilind.com=cube:8080` and the service live in
[limilind-edge](https://github.com/jorgen/limilind-edge).

## License

AGPL-3.0-or-later. See [LICENSE](LICENSE).
