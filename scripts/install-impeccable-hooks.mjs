import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
execFileSync(process.execPath, [fileURLToPath(new URL('../.vendor/workflow-kit/scripts/install-impeccable-hooks.mjs', import.meta.url)), fileURLToPath(new URL('../', import.meta.url))], { stdio: 'inherit' });
