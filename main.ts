// Persuasion in one line: lower the barrier ("no coding needed"), lower
// the effort ("plain words"), raise the payoff ("a real app you can use
// today"). The sentence is written as three short beats — reassurance,
// invitation, result — so a non-coder hears only upside, no learning curve.

import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch, capped at 240 chars by the competition rules.
const PITCH =
  "You don't need to know how to code — just describe your app idea in plain words, and the AI on make.fun builds it into a real app you can use today.";

// Guard: the pitch must stay a single line within the 240-char limit.
function assertPitchValid(pitch: string): void {
  if (pitch.includes("\n") || pitch.length > 240) {
    throw new Error("Pitch must be a single line of at most 240 chars");
  }
}

assertPitchValid(PITCH);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
