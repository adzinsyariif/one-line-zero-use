import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Zero Use — the useless superpower sprint entry.
// Revision 2 (final): tighten the contractions for rhythm and let the three
// exceptions land as a drumbeat into the last-word payoff.
const line =
  "I can recite every license plate I've ever seen, in order, with dates — but no faces, no names, and never where I parked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
