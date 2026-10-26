import { describe, expect, test } from "vitest";
import { buildBallot, groupByRace, type Candidate, type Issue } from "./ballot.js";

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

describe("buildBallot", () => {
  test("groups candidates into races and keeps issues alongside them", () => {
    const beatty: Candidate = { name: "Joyce Beatty", office: "US House District 3" };
    const photoId: Issue = {
      number: "3",
      title: "Proposed Constitutional Amendment",
      description: "To require voters to present photo identification in order to vote",
    };

    const ballot = buildBallot([beatty], [photoId]);

    expect(ballot).toEqual({
      races: [{ office: "US House District 3", candidates: [beatty] }],
      issues: [photoId],
    });
  });
});
