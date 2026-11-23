// u-ronigrv-a-day-of-one-line-pitches-12cd9bb3 — variant vA
// Writes exactly one one-line pitch that would convince a friend who has
// never coded to let an AI agent build their first app idea on make.fun
// to /output/entry.txt. Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "You don't need to know how to code — just describe your app idea in plain words, and the AI on make.fun builds it into a real app you can use today.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
