// The benchmarks exercise the real modules from src/, so they need them compiled
// first. tsc emits extensionless import specifiers (the app is bundled by Vite,
// which resolves those); node will not, so they are rewritten here.
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, '.build');
const srcDir = join(here, '..', 'src');

const MODULES = ['cubeAssignment', 'cubeColors', 'cubeDiagnosis', 'colorRecognition'];

export function build() {
  mkdirSync(outDir, { recursive: true });
  const tsc = join(here, '..', 'node_modules', 'typescript', 'bin', 'tsc');
  execFileSync(
    process.execPath,
    [
      tsc,
      '--target', 'es2020',
      '--module', 'es2020',
      '--moduleResolution', 'bundler',
      '--skipLibCheck',
      '--outDir', outDir,
      ...MODULES.map((m) => join(srcDir, `${m}.ts`)),
    ],
    { stdio: 'inherit' },
  );
  for (const file of readdirSync(outDir)) {
    if (!file.endsWith('.js')) continue;
    const path = join(outDir, file);
    writeFileSync(
      path,
      readFileSync(path, 'utf8').replace(/from '(\.\/[A-Za-z0-9_]+)'/g, "from '$1.js'"),
    );
  }
  // Dynamic import needs a file:// URL on Windows, not a bare absolute path.
  return pathToFileURL(outDir).href;
}

if (import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}`) build();
