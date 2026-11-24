// SPDX-License-Identifier: MIT
import { readFileSync, writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dir = dirname(fileURLToPath(import.meta.url));
const src = join(dir, "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
const text = readFileSync(src, "utf8");
if (text.trim().length === 0) {
  console.error("entry.txt is empty");
  process.exit(1);
}
const dest = join(outDir, "entry.txt");
writeFileSync(dest, text, "utf8");
chmodSync(dest, 0o644);
