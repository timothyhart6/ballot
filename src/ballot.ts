export type Candidate = {
  name: string;
  office: string;
};

export type Race = {
  office: string;
  candidates: Candidate[];
};

export function groupByRace(candidates: Candidate[]): Race[] {
  const races: Race[] = [];
  for (const candidate of candidates) {
    const race = races.find((r) => r.office === candidate.office);
    if (race) {
      race.candidates.push(candidate);
    } else {
      races.push({ office: candidate.office, candidates: [candidate] });
    }
  }
  return races;
}

export type Issue = {
  // A string, not a number: local issues are numbered like "10A".
  number: string;
  title: string;
  description: string;
};

export type Ballot = {
  races: Race[];
  issues: Issue[];
};

export function buildBallot(candidates: Candidate[], issues: Issue[]): Ballot {
  return { races: groupByRace(candidates), issues };
}
