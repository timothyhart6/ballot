import { buildBallot } from "./ballot.js";
import { candidates, issues } from "./data/oh/franklin/2026-11-03.js";

console.log(JSON.stringify(buildBallot(candidates, issues), null, 2));
