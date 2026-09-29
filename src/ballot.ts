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
