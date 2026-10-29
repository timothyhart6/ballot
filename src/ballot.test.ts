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

  test("returns no races when there are no candidates", () => {
    expect(groupByRace([])).toEqual([]);
  });

  test("orders races by where their office first appears, not alphabetically", () => {
    const husted: Candidate = { name: "Jon Husted", office: "US Senator" };
    const faber: Candidate = { name: "Keith Faber", office: "Attorney General" };
    const brown: Candidate = { name: "Sherrod Brown", office: "US Senator" };

    const races = groupByRace([husted, faber, brown]);

    expect(races.map((r) => r.office)).toEqual(["US Senator", "Attorney General"]);
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
