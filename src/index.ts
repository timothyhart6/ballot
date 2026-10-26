import { buildBallot, type Candidate, type Issue } from "./ballot.js";

const candidates: Candidate[] = [
  { name: "Joyce Beatty", office: "US House District 3" },
  { name: "Cleophus Dulaney", office: "US House District 3" },
  { name: "Joseph Healy", office: "Ohio Senate District 15" },
  { name: "Latyna M. Humphrey", office: "Ohio Senate District 15" },
  { name: "Joel A. Greff", office: "Ohio House District 1" },
  { name: "Dontavius Jarrells", office: "Ohio House District 1" },

  { name: "Amy Acton and David Pepper", office: "Governor and Lieutenant Governor" },
  { name: "Don Kissick and James L. Mills", office: "Governor and Lieutenant Governor" },
  { name: "Vivek Ramaswamy and Robert A. McColley", office: "Governor and Lieutenant Governor" },

  { name: "Keith Faber", office: "Attorney General" },
  { name: "John J. Kulewicz", office: "Attorney General" },

  { name: "Annette Blackwell", office: "Auditor of State" },
  { name: "Frank LaRose", office: "Auditor of State" },

  { name: "Tom Pruss", office: "Secretary of State" },
  { name: "Allison Russo", office: "Secretary of State" },
  { name: "Robert Sprague", office: "Secretary of State" },

  { name: "Jay Edwards", office: "Treasurer of State" },
  { name: "Seth Walsh", office: "Treasurer of State" },

  { name: "Sherrod Brown", office: "US Senator" },
  { name: "Jon Husted", office: "US Senator" },
  { name: "Greg Levy", office: "US Senator" },
  { name: "William B. Redpath", office: "US Senator" },

  { name: "Daniel R. Hawkins", office: "Ohio Supreme Court Justice (term commencing 1/1/2027)" },
  { name: "Marilyn Zayas", office: "Ohio Supreme Court Justice (term commencing 1/1/2027)" },
  { name: "Jennifer Brunner", office: "Ohio Supreme Court Justice (term commencing 1/2/2027)" },
  { name: "Colleen O'Donnell", office: "Ohio Supreme Court Justice (term commencing 1/2/2027)" },

  { name: "Michael C. Mentel", office: "Judge, 10th District Court of Appeals (term commencing 2/9/2027)" },
  { name: "Terri Jamison", office: "Judge, 10th District Court of Appeals (term commencing 7/1/2027)" },

  { name: "Carl Aveni", office: "Judge, Common Pleas Court - General Division (term commencing 1/1/2027)" },
  { name: "Andy Miller", office: "Judge, Common Pleas Court - General Division (term commencing 2/9/2027)" },
  { name: "David Young", office: "Judge, Common Pleas Court - General Division (term commencing 7/1/2027)" },
  { name: "Chris Brown", office: "Judge, Common Pleas Court - General Division (term commencing 7/2/2027)" },

  { name: "Kelley Gabrielle Boller", office: "Judge, Common Pleas Court - Domestic Relations Division (term commencing 1/2/2027)" },
  { name: "Lasheyl N. Stroud", office: "Judge, Common Pleas Court - Domestic Relations Division (term commencing 1/3/2027)" },

  { name: "Kelly Green", office: "Judge, Common Pleas Court - Probate (term commencing 2/9/2027)" },
  { name: "Chris Junga", office: "Judge, Common Pleas Court - Probate (term commencing 2/9/2027)" },

  { name: "Michael Stinziano", office: "County Auditor" },

  { name: "Erica C. Crawley", office: "County Commissioner" },
  { name: "Eric Terford", office: "County Commissioner" },
];

// Text from the Franklin County Board of Elections certified questions and issues list.
const issues: Issue[] = [
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

console.log(JSON.stringify(buildBallot(candidates, issues), null, 2));
