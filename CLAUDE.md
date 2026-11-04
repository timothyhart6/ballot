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

Concepts already covered (build on these; don't re-explain from scratch):
- Basic type annotations, `tsconfig.json` options, types erased at compile time, and why
  ESM imports need a `.js` extension.
- String literal unions as enum-like types (`"Democratic" | "Republican"`), and
  `T | null` vs an optional `field?: T` — why a required `| null` forces an explicit answer.
- Structural typing, and the excess property check on object literals.
- `export` vs file-private, `import { x }`, and type-only imports (`import type`,
  `type X` inside an import) being erased.
- Top-level functions, return types after the parameter list, property shorthand
  (`{ issues }`), and returning a typed object without `new`.
- Arrow functions as lambdas; `array.map` (1:1 transform) vs the `Map` collection;
  `Set` for de-duplication and `.size` vs `.length`; nested arrays (`string[][]`);
  `array.join`; single vs double quotes (no `char` type).
- `===` for strings (compares contents, like Java's `.equals`).
- Vitest: `toEqual` (deep) vs `toBe` (`Object.is`), reading the expected/received diff,
  and why Vitest misses type errors that `tsc` catches.

## Stack

- **TypeScript on Node**, ESM (`"type": "module"`), `strict: true`, `tsx` for the dev loop.
- **React + Vite** for the frontend, when we get there. Not yet added.
- **No backend server and no database.** See the architecture note below.
- Developed in IntelliJ IDEA Ultimate, on more than one machine (macOS and Windows).

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

The author's voting address and precinct are deliberately not recorded in this file —
see `CLAUDE.local.md`, which is gitignored.

- Franklin County — Columbus City Schools
- US House **District 3**
- Ohio Senate **District 15**
- Ohio House **District 1**

**Confirmed** against the official sample ballot from the Franklin County Board of
Elections (October 2026). The sample ballot PDF is not committed: it prints the precinct
and ballot style, which count as personal information.

22 races and 3 issues: statewide executive offices, two Ohio Supreme Court seats, a US
Senate seat, US House, both state legislative chambers, two 10th District Court of Appeals
seats, seven Common Pleas judgeships (four General, two Domestic Relations, one Probate),
two county offices, Issue 3 (a statewide constitutional amendment on voter photo ID), and
Issues 8 and 9 (competing Columbus charter amendments on City Council elections).

The sample ballot is the source of truth for what's on this ballot: which races, their
order, and their wording. The Board's certified lists at
https://vote.franklincountyohio.gov/election-info/2026 are a secondary source covering the
whole county.

## Editorial stance

The site presents candidates factually and evenhandedly. It records what candidates have
said, how they have voted, who has endorsed them, and who funds them. It does not rank,
score, or recommend. Every substantive claim about a candidate carries a source link, and
where sources conflict, the site says so rather than picking a winner.

## Roadmap

### Current focus

- **The 2026 ballot is seed data.** The site won't be ready for November 3, 2026, and
  that's fine. Before the next election the data gets replaced; the logic stays.
- **Only Tim's own ballot** until there's a working prototype. Other districts, other
  voters, and the rest of the county come after that.
- **Done:** every race, candidate, and issue on the ballot, matching the sample ballot's
  order and wording (name and office only for candidates).
- **Next: one candidate in depth.** Pick one candidate and fill in every possible field
  (endorsements, campaign finance, social media, voting record), researching which public
  APIs exist for each. The point is to measure how much of the data must be sourced by
  hand before scaling to every candidate. Candidate not yet chosen; a judge (worst case
  for available data) was suggested over a federal incumbent (best case). Verify any API
  is actually live before relying on it; several civic-data APIs have shut down.

**MVP:** a hosted static site listing every candidate on this ballot, easy to read.
Candidate data is hardcoded for now. Which fields beyond name, party, and office make
the MVP is still undecided.

1. **Data model (TDD)** — a `Candidate` type and grouping candidates by race, tested,
   before any React. Model races as belonging to districts, and a ballot as the set of
   districts a voter is in — not as a flat list of "my candidates" — so the per-voter
   lookup below plugs in later without a rewrite.
   *Status:* `Candidate`, `Issue`, `groupByRace`, and `buildBallot` are done and tested.
   **Districts are deferred** to their own branch; races are still keyed by office string.
2. **React + Vite** — render races and candidates on a plain page.
3. **Layout and readability** — grouping, dropdowns, spacing.
4. **Deploy** to static hosting.
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

## To do

Smaller items deferred on purpose, kept here so they aren't forgotten:

- **Write-in lines.** The ballot prints a write-in line under Governor and US Senator.
  Not modeled yet; they aren't candidates.
- **Party labels.** Left out of the model for now. When they return, use the ballot's
  wording: Greg Levy is printed as "Other-party candidate," not "Independent" as in the
  party data saved in commit `e937818`.

## Setting up on a new machine

1. Clone this repo and run `npm install`.
2. Clone Tim's `claude-config` repo to `~/dev/projects/claude-config`. The TDD workflow
   below is imported from there; without it, the workflow rules don't load.
3. Copy `CLAUDE.local.md` over by hand. It's gitignored on purpose (personal info).
4. Run `npm run check` to confirm everything passes.

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

This project follows the shared TDD workflow, imported here:

@~/dev/projects/claude-config/tdd-workflow.md

In this project, "green" means both `npm test` and `npm run typecheck` pass;
`npm run check` runs both.

## Conventions

- Source in `src/`, compiled output in `dist/` (gitignored).
- ESM (`"type": "module"`) with `module`/`moduleResolution` set to `nodenext`.
- Relative imports need a `.js` extension even though the file is `.ts`. This is correct
  and expected under `nodenext`; do not "fix" it.
- Keep `strict` on. If something won't type-check, fix the model rather than reaching for
  `any` or a cast.
- `sourceMap` is on so breakpoints land in the `.ts` file rather than compiled output.