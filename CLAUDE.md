# Ballot

A personal voter guide for one specific ballot: Franklin County, Ohio, general election
of November 3, 2026. It exists so its author can walk into the booth informed, especially
about the down-ballot judicial races where almost no public information exists.

## Working with Tim

This matters more than the technical notes below.

Tim has five years of professional Java backend experience and is **new to TypeScript**.
He is learning the language through this project, deliberately. That shapes how to work:

- **Explain what the code does.** Not a summary after the fact — walk through the actual
  lines when introducing something new. He has said explicitly that he wants to understand
  every line, not accumulate code he can't reason about.
- **Small increments.** Add one concept at a time. Do not scaffold three files ahead
  because it seems efficient; it defeats the purpose of the exercise.
- **Ask before building something large.** Confirm the approach before generating a lot
  of code. He wants to be involved in decisions, not handed finished work.
- **Lean on the Java analogy, and flag where it breaks.** He knows types, generics, and
  data modeling. What's new is structural typing, runtime erasure, `null` vs `undefined`,
  and unions replacing inheritance.

Concepts already covered: basic type annotations, `tsconfig.json` options, the fact that
types are erased at compile time, and why ESM imports need a `.js` extension.

## Stack

- **TypeScript on Node**, ESM (`"type": "module"`), `strict: true`, `tsx` for the dev loop.
- **React + Vite** for the frontend, when we get there. Not yet added.
- **No backend server and no database.** See the architecture note below.
- Developed in IntelliJ IDEA Ultimate on Windows.

## Architecture

The data changes on the order of days and weeks, never per-request, and there are no user
accounts or writes. So this is a **build-time pipeline, not a running service**:

1. Node scripts fetch from public sources and write JSON.
2. The site is built from that JSON as static files.
3. A scheduled job re-runs the pipeline and redeploys.

Static hosting, no server to operate. Do not introduce Express, a database, or an API
layer without discussing it first — the absence of those is a deliberate decision, not
an oversight. A database and API may come later; see "Later" under Roadmap.

### Two tiers of data

Candidate data splits into two categories that must be stored separately and merged:

- **Automated** — campaign finance and voting records, fetched from public sources.
- **Hand-curated** — endorsements above all. No API publishes these anywhere; they come
  from press releases, union sites, and newspaper editorials, and are entered by hand.

A pipeline run must never overwrite hand-entered data. Design merges accordingly.

### Data availability, by field

Uneven, and the type model needs to reflect it:

- **Campaign finance** — federal races have an official API; Ohio state races publish
  bulk downloads.
- **Voting records** — available for federal incumbents. Ohio legislature votes require
  scraping. **Challengers who have never held office have no voting record at all**, which
  is different from "not yet fetched." Model that distinction explicitly rather than
  reaching for `null` to mean both.
- **Endorsements** — manual, always.

## The ballot itself

Determined by geocoding the author's registered voting address. That address is
deliberately not recorded in this file — see `CLAUDE.local.md`, which is gitignored.

- Franklin County — Columbus City Schools
- US House **District 3**
- Ohio Senate **District 15**
- Ohio House **District 1**

**These are not yet verified.** Two open questions: Ohio adopted a new congressional map
in October 2025 that the Census layer may not reflect, and the Ohio House 1 result is
suspect because reference material describes that district as covering Bexley, which is
across town. The authoritative answer is the official sample ballot from the Franklin
County Board of Elections. Treat the districts above as provisional until Tim confirms.

Roughly 20 races: statewide executive offices, a US Senate seat, two Ohio Supreme Court
seats, US House, both state legislative chambers, the 10th District Court of Appeals,
several Common Pleas judgeships, two county offices, and Issue 3 (a statewide
constitutional amendment on voter photo ID).

Primary source for candidates and issues: the Franklin County Board of Elections
certified lists at https://vote.franklincountyohio.gov/election-info/2026

## Editorial stance

The site presents candidates factually and evenhandedly. It records what candidates have
said, how they have voted, who has endorsed them, and who funds them. It does not rank,
score, or recommend. Every substantive claim about a candidate carries a source link, and
where sources conflict, the site says so rather than picking a winner.

## Roadmap

**MVP:** a hosted static site listing every candidate on this ballot, easy to read.
Candidate data is hardcoded for now. Which fields beyond name, party, and office make
the MVP is still undecided.

1. **Data model (TDD)** — a `Candidate` type and grouping candidates by race, tested,
   before any React. Model races as belonging to districts, and a ballot as the set of
   districts a voter is in — not as a flat list of "my candidates" — so the per-voter
   lookup below plugs in later without a rewrite.
2. **React + Vite** — render races and candidates on a plain page.
3. **Layout and readability** — grouping, dropdowns, spacing.
4. **Deploy** to static hosting, after the districts are confirmed against the official
   sample ballot.
5. **Pipeline** — replace hardcoded data with government CSVs converted to JSON at build
   time, starting with Franklin County. The aim is to scale to other counties.

**Later:** Tim wants other counties, and possibly other projects, to be able to use
this data. Static JSON files at predictable URLs (e.g. `/data/oh/franklin/2026-11-03.json`)
serve that as a read-only API. A real database and API server are on the table only if
static files stop being enough (e.g. cross-county search, data that changes faster than
rebuilds). Revisit after step 5; do not build ahead of it.

**Later: per-voter ballots.** The MVP covers only Tim's ballot. Serving anyone else means
determining their exact ballot, and sharing a federal district is not enough — state and
local races differ within it. The key is the **precinct**, or more precisely the
**ballot style** (the exact set of contests; a precinct split by a district line has more
than one). The polling location is *not* a key: one location often serves several
precincts with different ballots. The lookup is address → precinct / ballot style →
races → candidates. Federal and state districts are the easy part (the Census geocoder
covers them); local boundaries come from each county's Board of Elections, with no single
national source. Which public APIs cover this is unresearched — verify, don't assume.
Do the address lookup in the visitor's browser so no address is ever sent to or stored by
this project.

Frontend principle, since Tim expects to redesign the page as he learns front end: keep
data, components, and styling separate. Components take typed data as input and never
know where it came from; layout and sizing live in CSS, not component logic.

## Commands

```
npm run dev        # tsx src/index.ts — runs directly, NO type checking
npm run typecheck  # tsc --noEmit — the actual type check
npm run build      # tsc -p tsconfig.build.json — emits to dist/, excluding tests
npm start          # node dist/index.js
npm test           # vitest run — runs the test suite once
npm run test:watch # vitest — re-runs tests on file save
npm run check      # typecheck, then tests only if types pass
```

Vitest, like tsx, strips types without checking them. A passing test run says nothing
about type errors; run `npm run typecheck` too.

**`npm run dev` does not type-check.** tsx strips types and runs the JavaScript; code with
real type errors will execute happily. Run `npm run typecheck` before believing anything
works. Do not report a change as verified on the basis of `npm run dev` alone.

## Test-driven development

This project is developed test-first. Follow red → green → refactor:

1. **Red** — write one small failing test for the next behavior. Run it and see it fail.
2. **Green** — write the simplest code that makes it pass.
3. **Refactor** — clean up with all tests passing.

Do not write production code without a failing test that calls for it. Keep each cycle
small; one cycle is a good unit for explaining new TypeScript to Tim. "Green" means both
`npm test` and `npm run typecheck` pass.

### How we work through a cycle

All coding goes through TDD, at Tim's pace. These rules are firm:

- **One section of work per branch.** Tim and Claude agree on the section first, then
  create a branch for it. Work outside that section waits for its own branch.
- **One test at a time.** Write a single test, run it, and show Tim the test and the
  failure output.
- **Stop after the test.** Do not write any production code in the same turn as the
  test. Wait for Tim to review the test and say to continue.
- **Then make it pass and explain it.** Write the code, run `npm run check`, and walk
  through the new lines. One cycle per turn; do not chain cycles.
- **A test that passes immediately** (no production code needed) still gets shown and
  still stops. Say that it passed and why, since a test that never failed hasn't proven
  it can catch anything.
- **Finish a branch only when its section is thoroughly tested.** Before merging, review
  the section's coverage with Tim: the main case, edge cases (empty input, duplicates,
  ordering), and anything the data could get wrong. Add tests for gaps, one at a time,
  under the same rules.
- **Commit each completed cycle.** Once a test is green and any refactor is done, commit
  it on the branch: one commit per test. Merge and push only when Tim asks.

## Conventions

- Source in `src/`, compiled output in `dist/` (gitignored).
- ESM (`"type": "module"`) with `module`/`moduleResolution` set to `nodenext`.
- Relative imports need a `.js` extension even though the file is `.ts`. This is correct
  and expected under `nodenext`; do not "fix" it.
- Keep `strict` on. If something won't type-check, fix the model rather than reaching for
  `any` or a cast.
- `sourceMap` is on so breakpoints land in the `.ts` file rather than compiled output.