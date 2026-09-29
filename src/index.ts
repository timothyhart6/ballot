type Party = "Democratic" | "Republican" | "Libertarian";

interface Candidate {
  name: string;
  party: Party;
  office: string;
}

const candidates: Candidate[] = [
  { name: "Joyce Beatty", party: "Democratic", office: "US House District 3" },
  { name: "Cleophus Dulaney", party: "Republican", office: "US House District 3" },
  { name: "Joseph Healy", party: "Republican", office: "Ohio Senate District 15" },
  { name: "Latyna M. Humphrey", party: "Democratic", office: "Ohio Senate District 15" },
  { name: "Joel A. Greff", party: "Republican", office: "Ohio House District 1" },
  { name: "Dontavius Jarrells", party: "Democratic", office: "Ohio House District 1" },

  { name: "Amy Acton and David Pepper", party: "Democratic", office: "Governor and Lieutenant Governor" },
  { name: "Don Kissick and James L. Mills", party: "Libertarian", office: "Governor and Lieutenant Governor" },
  { name: "Vivek Ramaswamy and Robert A. McColley", party: "Republican", office: "Governor and Lieutenant Governor" },

  { name: "Keith Faber", party: "Republican", office: "Attorney General" },
  { name: "John J. Kulewicz", party: "Democratic", office: "Attorney General" },

  { name: "Annette Blackwell", party: "Democratic", office: "Auditor of State" },
  { name: "Frank LaRose", party: "Republican", office: "Auditor of State" },

  { name: "Tom Pruss", party: "Libertarian", office: "Secretary of State" },
  { name: "Allison Russo", party: "Democratic", office: "Secretary of State" },
  { name: "Robert Sprague", party: "Republican", office: "Secretary of State" },

  { name: "Jay Edwards", party: "Republican", office: "Treasurer of State" },
  { name: "Seth Walsh", party: "Democratic", office: "Treasurer of State" },

  { name: "Sherrod Brown", party: "Democratic", office: "US Senator" },
  { name: "Jon Husted", party: "Republican", office: "US Senator" },
  { name: "William B. Redpath", party: "Libertarian", office: "US Senator" },

  { name: "Daniel R. Hawkins", party: "Republican", office: "Ohio Supreme Court Justice (term commencing 1/1/2027)" },
  { name: "Marilyn Zayas", party: "Democratic", office: "Ohio Supreme Court Justice (term commencing 1/1/2027)" },
  { name: "Jennifer Brunner", party: "Democratic", office: "Ohio Supreme Court Justice (term commencing 1/2/2027)" },
  { name: "Colleen O'Donnell", party: "Republican", office: "Ohio Supreme Court Justice (term commencing 1/2/2027)" },

  { name: "Michael C. Mentel", party: "Democratic", office: "Judge, 10th District Court of Appeals (term commencing 2/9/2027)" },
  { name: "Terri Jamison", party: "Democratic", office: "Judge, 10th District Court of Appeals (term commencing 7/1/2027)" },

  { name: "Carl Aveni", party: "Democratic", office: "Judge, Common Pleas Court - General Division (term commencing 1/1/2027)" },
  { name: "Andy Miller", party: "Democratic", office: "Judge, Common Pleas Court - General Division (term commencing 2/9/2027)" },
  { name: "David Young", party: "Democratic", office: "Judge, Common Pleas Court - General Division (term commencing 7/1/2027)" },
  { name: "Chris Brown", party: "Democratic", office: "Judge, Common Pleas Court - General Division (term commencing 7/2/2027)" },

  { name: "Kelley Gabrielle Boller", party: "Democratic", office: "Judge, Common Pleas Court - Domestic Relations Division (term commencing 1/2/2027)" },
  { name: "Lasheyl N. Stroud", party: "Democratic", office: "Judge, Common Pleas Court - Domestic Relations Division (term commencing 1/3/2027)" },

  { name: "Kelly Green", party: "Democratic", office: "Judge, Common Pleas Court - Probate" },
  { name: "Chris Junga", party: "Republican", office: "Judge, Common Pleas Court - Probate" },

  { name: "Michael Stinziano", party: "Democratic", office: "County Auditor" },

  { name: "Erica C. Crawley", party: "Democratic", office: "County Commissioner" },
  { name: "Eric Terford", party: "Libertarian", office: "County Commissioner" },
];

console.log(candidates);
