// Zweck: Richtet die gepinnten Skills ein; gemeinsamer Einstieg fuer Menschen und Workspace-Bootstrap.
// Nutzen: Uebergibt immer dieses Projekt als Ziel, auch bei anderem Arbeitsverzeichnis.
// Die Logik liegt nur im Workflow Kit. Bewusst aufrufen; keine automatische Hook-Freigabe.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
execFileSync(process.execPath, [fileURLToPath(new URL('../.vendor/workflow-kit/scripts/setup-skills.mjs', import.meta.url)), fileURLToPath(new URL('../', import.meta.url))], { stdio: 'inherit' });
