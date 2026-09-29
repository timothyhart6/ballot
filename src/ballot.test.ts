import { describe, expect, test } from "vitest";
import { groupByRace, type Candidate } from "./ballot.js";

describe("groupByRace", () => {
  test("puts candidates running for the same office into one race", () => {
    const beatty: Candidate = { name: "Joyce Beatty", office: "US House District 3" };
    const brown: Candidate = { name: "Sherrod Brown", office: "US Senator" };
    const dulaney: Candidate = { name: "Cleophus Dulaney", office: "US House District 3" };

    const races = groupByRace([beatty, brown, dulaney]);

    expect(races).toEqual([
      { office: "US House District 3", candidates: [beatty, dulaney] },
      { office: "US Senator", candidates: [brown] },
    ]);
  });
});
