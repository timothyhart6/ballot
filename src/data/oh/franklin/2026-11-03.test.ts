import { describe, expect, test } from "vitest";
import { buildBallot } from "../../../ballot.js";
import { candidates, issues } from "./2026-11-03.js";

// Guards against editing mistakes. Expected counts come from the Franklin County
// Board of Elections certified lists, filtered to this ballot.
describe("Franklin County, 2026-11-03 ballot data", () => {
  test("has 3 issues", () => {
    const ballot = buildBallot(candidates, issues);

    expect(ballot.issues).toHaveLength(3);
  });

  test("lists races in the sample ballot's order and wording", () => {
    const ballot = buildBallot(candidates, issues);

    expect(ballot.races.map((r) => r.office)).toEqual([
      "Governor and Lieutenant Governor",
      "Attorney General",
      "Auditor of State",
      "Secretary of State",
      "Treasurer of State",
      "Justice of the Supreme Court (Full term commencing 1-1-2027)",
      "Justice of the Supreme Court (Full term commencing 1-2-2027)",
      "U.S. Senator (Unexpired term ending 1-3-2029)",
      "Representative to Congress (3rd District)",
      "State Senator (15th District)",
      "State Representative (1st District)",
      "Judge of the Court of Appeals (10th District) (Full term commencing 2-9-2027)",
      "Judge of the Court of Appeals (10th District) (Full term commencing 7-1-2027)",
      "Judge of the Court of Common Pleas (Full term commencing 1-1-2027)",
      "Judge of the Court of Common Pleas (Full term commencing 2-9-2027)",
      "Judge of the Court of Common Pleas (Full term commencing 7-1-2027)",
      "Judge of the Court of Common Pleas (Full term commencing 7-2-2027)",
      "Judge of the Court of Common Pleas (Domestic Relations Division) (Full term commencing 1-2-2027)",
      "Judge of the Court of Common Pleas (Domestic Relations Division) (Full term commencing 1-3-2027)",
      "Judge of the Court of Common Pleas (Probate Division) (Full term commencing 2-9-2027)",
      "County Commissioner (Full term commencing 1-1-2027)",
      "County Auditor",
    ]);
  });

  test("lists no candidate twice", () => {
    const names = candidates.map((c) => c.name);

    expect(new Set(names).size).toBe(names.length);
  });

  test("lists no issue number twice", () => {
    const numbers = issues.map((i) => i.number);

    expect(new Set(numbers).size).toBe(numbers.length);
  });
});
