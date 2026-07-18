import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const cli = fs.readFileSync(path.join(root, "scripts", "onepilot-agent.mjs"), "utf8");
const skill = fs.readFileSync(path.join(root, "SKILL.md"), "utf8");
const fewShots = fs.readFileSync(path.join(root, "references", "organizer-intelligence-few-shots.md"), "utf8");

test("recommend forwards optional organizer preferences without replacing primary results", () => {
  assert.match(cli, /organizerPreferences/);
  assert.match(cli, /allowSupplement/);
  assert.match(skill, /must not replace or weaken the main activity matches/);
});

test("organizer channel supports lookup style audience compare and enrichment", () => {
  assert.match(cli, /functions\/v1\/agent-organizer/);
  for (const action of ["lookup", "style", "audience", "compare", "request_enrichment"]) {
    assert.match(cli, new RegExp(action));
  }
});

test("organizer guidance treats comments as weak evidence and blocks photo age inference", () => {
  assert.match(skill, /Public comments are weak evidence/);
  assert.match(skill, /Never infer age or sensitive traits from photos/);
  assert.match(fewShots, /Estimating participant ages from event photos/);
});
