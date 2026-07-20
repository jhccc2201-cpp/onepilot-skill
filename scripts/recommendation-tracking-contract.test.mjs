import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const cli = fs.readFileSync(path.join(root, "scripts", "onepilot-agent.mjs"), "utf8");
const skill = fs.readFileSync(path.join(root, "SKILL.md"), "utf8");

test("skill sends the structured taxonomy protocol", () => {
  assert.match(cli, /activity-match-request-v1\.1/);
  assert.match(cli, /preferTags: splitList\(args\["prefer-tags"\]\)/);
  assert.match(cli, /mustTags: splitList\(args\["must-tags"\]\)/);
  assert.match(cli, /excludeTags: splitList\(args\["exclude-tags"\]\)/);
  assert.match(cli, /regionCodes: splitList\(args\["region-codes"\]\)/);
});

test("skill preserves tracked URLs instead of rebuilding event links", () => {
  assert.match(skill, /Always give the returned tracked URL to the user/);
  assert.match(skill, /do not reconstruct or replace it with an untracked event URL/);
  assert.match(skill, /reasonCodes/);
  assert.match(skill, /reasonEvidence/);
});
