import { describe, expect, test } from "vitest";
import { buildBallot } from "../../../ballot.js";
import { candidates, issues } from "./2026-11-03.js";

// Guards against editing mistakes. Expected counts come from the Franklin County
// Board of Elections certified lists, filtered to this ballot.
describe("Franklin County, 2026-11-03 ballot data", () => {
  test("has 22 races and 3 issues", () => {
    const ballot = buildBallot(candidates, issues);

    expect(ballot.races).toHaveLength(22);
    expect(ballot.issues).toHaveLength(3);
  });

  test("lists no candidate twice", () => {
    const names = candidates.map((c) => c.name);

    expect(new Set(names).size).toBe(names.length);
  });
});
