import { describe, expect, test } from "vitest";
import { buildBallot } from "../../../ballot.js";
import { candidates, issues } from "./2026-11-03.js";

// Guards against editing mistakes. Expected values come from the official
// Franklin County sample ballot for this voter's precinct.
describe("Franklin County, 2026-11-03 ballot data", () => {
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

  test("lists each race's candidates in the sample ballot's order", () => {
    const ballot = buildBallot(candidates, issues);

    expect(ballot.races.map((r) => r.candidates.map((c) => c.name))).toEqual([
      ["Don Kissick and James L. Mills", "Vivek Ramaswamy and Robert A. McColley", "Amy Acton and David Pepper"],
      ["John J. Kulewicz", "Keith Faber"],
      ["Frank LaRose", "Annette Blackwell"],
      ["Allison Russo", "Robert Sprague", "Tom Pruss"],
      ["Seth Walsh", "Jay Edwards"],
      ["Marilyn Zayas", "Daniel R. Hawkins"],
      ["Colleen O'Donnell", "Jennifer Brunner"],
      ["William B. Redpath", "Sherrod Brown", "Jon Husted", "Greg Levy"],
      ["Joyce Beatty", "Cleophus Dulaney"],
      ["Joseph Healy", "Latyna M. Humphrey"],
      ["Dontavius Jarrells", "Joel A. Greff"],
      ["Michael C. Mentel"],
      ["Terri Jamison"],
      ["Carl Aveni"],
      ["Andy Miller"],
      ["David Young"],
      ["Chris Brown"],
      ["Kelley Gabrielle Boller"],
      ["Lasheyl N. Stroud"],
      ["Chris Junga", "Kelly Green"],
      ["Eric Terford", "Erica C. Crawley"],
      ["Michael Stinziano"],
    ]);
  });

  test("lists issues with the sample ballot's full text", () => {
    expect(issues).toEqual([
      {
        number: "3",
        title: [
          "Proposed Constitutional Amendment",
          "TO REQUIRE VOTERS TO PRESENT PHOTO IDENTIFICATION IN ORDER TO VOTE",
          "Proposed by Joint Resolution of the General Assembly",
          "To enact Section 5 of Article V of the Constitution of the State of Ohio",
          "A majority yes vote is required for the adoption of Section 5.",
        ].join("\n"),
        description: [
          "This proposed amendment would:",
          "• Require voters to present an approved form of government-issued photo identification in order to vote.",
          "• Allow state law to provide for an alternative method of verifying a voter’s identity for a voter who has a sincere religious objection to being photographed and, therefore, does not possess an approved form of government-issued photo identification.",
          "• Require that voters who do not vote in person provide an approved form of government-issued photo identification, unless the law authorizes those persons to vote by providing a signature and at least one other specified unique identifier.",
          "• Define approved forms of government-issued photo identification as an unexpired Ohio driver license or state identification card; a United States passport or passport card; or a United States military identification card, Ohio National Guard identification card, or United States Department of Veterans Affairs identification card.",
          "If approved, the amendment shall take effect immediately.",
          'A "YES" vote means approval of the amendment.',
          'A "NO" vote means disapproval of the amendment.',
          "SHALL THE AMENDMENT BE APPROVED?",
        ].join("\n\n"),
      },
      {
        number: "8",
        title: [
          "Proposed Charter Amendment, City Council District Elections (By Petition)",
          "City of Columbus",
          "Delaware, Fairfield and Franklin Counties",
          "A majority affirmative vote is necessary for passage",
        ].join("\n"),
        description: [
          "This proposed amendment would limit the ability to vote for candidates for Columbus City Council to only those electors living within the districts that those candidates seek to represent.",
          "The amendment specifies that ballots within council districts will include both citywide races as well as the district race.",
          "The amendment allows for the initiation of a recall election of a council district representative if a petition is submitted bearing the signatures of the electors of that district in an amount that is at least fifteen (15%) percent of the votes cast within the district in the preceding mayoral election.",
          "Shall the proposed amendment be approved?",
        ].join("\n\n"),
      },
      {
        number: "9",
        title: [
          "Proposed Charter Amendment, City Council District and At-Large Elections, Other Reforms Complement",
          "City of Columbus",
          "Delaware, Fairfield and Franklin Counties",
          "A majority affirmative vote is necessary for passage",
        ].join("\n"),
        description: [
          "This proposed amendment would limit the ability to vote for candidates for Columbus City Council to only those electors living within the districts that those candidates seek to represent.",
          "The amendment adds two (2) at-large council representatives to be elected in 2027 and seated in 2028, and an additional two (2) at-large council representatives to be elected in 2029 and seated in 2030. All at-large council representatives will be elected for four (4) year terms.",
          "The amendment includes provisions for transitioning from the current nine (9) member Council to an eleven (11) member Council and then subsequently to a thirteen (13) member Council, allowing for the ongoing staggering of terms.",
          "The amendment allows councilmembers representing districts whose boundaries are redrawn but who still have at least two years remaining in their term to serve the remainder of their term representing a newly-drawn district.",
          "The amendment specifies that candidates for council district seats must have resided within their district for at least one year prior to the primary election.",
          "The amendment calls for a redraw of the current council district map to occur in 2027, and increases the maximum population variance between districts from 1% to 7.5%.",
          'The amendment updates the vote requirements for expelling and/or removing councilmembers for misconduct, malfeasance, misfeasance, or nonfeasance. The amendment updates the expulsion vote threshold for conduct from "six" to "2/3rds," and the expulsion vote for absences from "three-fifths" to "2/3rds."',
          "The amendment updates the charter to reflect the minimum number of councilmembers necessary to achieve a quorum for the purposes of meeting for business.",
          "The amendment increases the number of affirmative votes that would be needed to adopt ordinances or resolutions in concert with expanding the size of the legislature.",
          "The amendment specifies that candidates for district councilmember must collect at least 150 signatures of electors from within their district, and that at-large candidates must collect at least 250 signatures of electors from within the city limits.",
          "The amendment specifies that ballots within council districts will include both citywide races as well as the district race.",
          "The amendment allows for the initiation of a recall election of a council district representative if a petition is submitted bearing the signatures of the electors of that district in an amount equal to or greater than fifteen (15%) percent of the votes cast within the district in the preceding mayoral election. The amendment allows for the initiation of a recall election of an at-large representative if a petition is submitted bearing the signatures of the electors citywide in an amount equal to or greater than fifteen (15%) percent of the votes cast within the district in the preceding mayoral election.",
          "Shall the proposed amendment be approved?",
        ].join("\n\n"),
      },
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
