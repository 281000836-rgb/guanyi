import test from "node:test";
import assert from "node:assert/strict";
import { createJournalStore, dailyRhythm, observeSpace } from "../src/index.js";

test("daily rhythm is deterministic for the same date", () => {
  assert.deepEqual(dailyRhythm("2026-08-02T00:00:00Z"), dailyRhythm("2026-08-02T23:59:59Z"));
});

test("space observation removes unknown and duplicate keys", () => {
  const result = observeSpace(["daylight", "daylight", "unknown"]);
  assert.deepEqual(result.completed, ["daylight"]);
  assert.equal(result.suggestions.length, 1);
});

test("journal stays local and respects its limit", () => {
  const memory = new Map();
  const storage = { getItem: (key) => memory.get(key), setItem: (key, value) => memory.set(key, value) };
  const journal = createJournalStore(storage, "test", 2);
  journal.add("一"); journal.add("二"); journal.add("三");
  assert.equal(journal.list().length, 2);
  journal.clear();
  assert.deepEqual(journal.list(), []);
});
