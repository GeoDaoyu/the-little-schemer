import {
  lookupInEntry,
  lookupInTable,
} from "../dist/10.What Is the Value of All of This.js";
import { always } from "ramda";
import { assert } from "chai";

describe("lookupInEntry", function () {
  it("lookupInEntry('b', [['a', 'b', 'c'], [1, 2, 3]], always(0)) is 2", function () {
    assert.strictEqual(
      lookupInEntry(
        "b",
        [
          ["a", "b", "c"],
          [1, 2, 3],
        ],
        always(0)
      ),
      2
    );
  });
  it("lookupInEntry('d', [['a', 'b', 'c'], [1, 2, 3]], always(0)) is 0", function () {
    assert.strictEqual(
      lookupInEntry(
        "d",
        [
          ["a", "b", "c"],
          [1, 2, 3],
        ],
        always(0)
      ),
      0
    );
  });
});

describe("lookupInTable", function () {
  it("lookupInTable('b', [['z', 'b'], [9, 8], [['a', 'b', 'c'], [1, 2, 3]]], always(0)) is 8", function () {
    assert.strictEqual(
      lookupInTable(
        "b",
        [
          [
            ["z", "b"],
            [9, 8],
          ],
          [
            ["a", "b", "c"],
            [1, 2, 3],
          ],
        ],
        always(0)
      ),
      8
    );
  });
});
