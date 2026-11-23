// The Vacuum's Alibi: One Line, 200 Characters
// Writes exactly one line (<= 200 chars) to entry.txt.
//
// Usage: node main.ts
// Output: <MAKEFUN_OUTPUT_DIR or /output>/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "LOG 03:12 — missed a crumb under the sofa. It looked at me. I looked at it. We agreed the dust bunny stays. Returning to dock.";

// Guard: the gate requires 1-200 characters, not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
