import type { Candidate, Issue } from "../../../ballot.js";

export const candidates: Candidate[] = [
  { name: "Don Kissick and James L. Mills", office: "Governor and Lieutenant Governor" },
  { name: "Vivek Ramaswamy and Robert A. McColley", office: "Governor and Lieutenant Governor" },
  { name: "Amy Acton and David Pepper", office: "Governor and Lieutenant Governor" },

  { name: "John J. Kulewicz", office: "Attorney General" },
  { name: "Keith Faber", office: "Attorney General" },

  { name: "Frank LaRose", office: "Auditor of State" },
  { name: "Annette Blackwell", office: "Auditor of State" },

  { name: "Allison Russo", office: "Secretary of State" },
  { name: "Robert Sprague", office: "Secretary of State" },
  { name: "Tom Pruss", office: "Secretary of State" },

  { name: "Seth Walsh", office: "Treasurer of State" },
  { name: "Jay Edwards", office: "Treasurer of State" },

  { name: "Marilyn Zayas", office: "Justice of the Supreme Court (Full term commencing 1-1-2027)" },
  { name: "Daniel R. Hawkins", office: "Justice of the Supreme Court (Full term commencing 1-1-2027)" },

  { name: "Colleen O'Donnell", office: "Justice of the Supreme Court (Full term commencing 1-2-2027)" },
  { name: "Jennifer Brunner", office: "Justice of the Supreme Court (Full term commencing 1-2-2027)" },

  { name: "William B. Redpath", office: "U.S. Senator (Unexpired term ending 1-3-2029)" },
  { name: "Sherrod Brown", office: "U.S. Senator (Unexpired term ending 1-3-2029)" },
  { name: "Jon Husted", office: "U.S. Senator (Unexpired term ending 1-3-2029)" },
  { name: "Greg Levy", office: "U.S. Senator (Unexpired term ending 1-3-2029)" },

  { name: "Joyce Beatty", office: "Representative to Congress (3rd District)" },
  { name: "Cleophus Dulaney", office: "Representative to Congress (3rd District)" },

  { name: "Joseph Healy", office: "State Senator (15th District)" },
  { name: "Latyna M. Humphrey", office: "State Senator (15th District)" },

  { name: "Dontavius Jarrells", office: "State Representative (1st District)" },
  { name: "Joel A. Greff", office: "State Representative (1st District)" },

  { name: "Michael C. Mentel", office: "Judge of the Court of Appeals (10th District) (Full term commencing 2-9-2027)" },

  { name: "Terri Jamison", office: "Judge of the Court of Appeals (10th District) (Full term commencing 7-1-2027)" },

  { name: "Carl Aveni", office: "Judge of the Court of Common Pleas (Full term commencing 1-1-2027)" },

  { name: "Andy Miller", office: "Judge of the Court of Common Pleas (Full term commencing 2-9-2027)" },

  { name: "David Young", office: "Judge of the Court of Common Pleas (Full term commencing 7-1-2027)" },

  { name: "Chris Brown", office: "Judge of the Court of Common Pleas (Full term commencing 7-2-2027)" },

  { name: "Kelley Gabrielle Boller", office: "Judge of the Court of Common Pleas (Domestic Relations Division) (Full term commencing 1-2-2027)" },

  { name: "Lasheyl N. Stroud", office: "Judge of the Court of Common Pleas (Domestic Relations Division) (Full term commencing 1-3-2027)" },

  { name: "Chris Junga", office: "Judge of the Court of Common Pleas (Probate Division) (Full term commencing 2-9-2027)" },
  { name: "Kelly Green", office: "Judge of the Court of Common Pleas (Probate Division) (Full term commencing 2-9-2027)" },

  { name: "Eric Terford", office: "County Commissioner (Full term commencing 1-1-2027)" },
  { name: "Erica C. Crawley", office: "County Commissioner (Full term commencing 1-1-2027)" },

  { name: "Michael Stinziano", office: "County Auditor" },
];

// Text from the Franklin County Board of Elections certified questions and issues list.
export const issues: Issue[] = [
  {
    number: "3",
    title: "General Assembly Initiated Constitutional Amendment",
    description: "To Require Voters to Present Photo Identification in Order to Vote",
  },
  {
    number: "8",
    title: "Columbus – Proposed Charter Amendment (by petition)",
    description:
      "This proposed amendment would limit the ability to vote for candidates for Columbus City Council " +
      "to only those electors living within the districts that those candidates seek to represent.",
  },
  {
    number: "9",
    title: "Columbus – Proposed Charter Amendment (by Council)",
    description:
      "This proposed amendment would limit the ability to vote for candidates for Columbus City Council " +
      "to only those electors living within the districts that those candidates seek to represent. " +
      "The amendment adds two (2) at-large council representatives to be elected in 2027, and an additional " +
      "two (2) at-large council representatives to be elected in 2029. All at-large council representatives " +
      "will be elected for four (4) year terms. The amendment includes provisions for transitioning from the " +
      "current nine (9) member Council to an eleven (11) member Council and then subsequently to a thirteen " +
      "(13) member Council, allowing for the ongoing staggering of terms.",
  },
];
