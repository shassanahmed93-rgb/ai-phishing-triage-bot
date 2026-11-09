import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {analyze} from "./analyze.mjs";
const sample = JSON.parse(readFileSync(new URL("./fixture.json", import.meta.url)));
assert.deepEqual(analyze(sample)["score"], 100);
console.log("Fixture passed");
const comparison = {
  "from": "accounts@vendor.example",
  "replyTo": "billing@vendor.example",
  "body": "Invoice is available in the usual portal."
};
assert.deepEqual(analyze(comparison)["score"], 0);
console.log("Comparison fixture passed");
