import {
  pick,
  keepLooking,
  looking,
  shift,
  Y,
} from "../dist/9.and Again, and Again, and Again.js";
import { assert } from "chai";

describe("pick", function () {
  it("pick(6, [6,2,4,'caviar',5,7,3]) is 7", function () {
    assert.strictEqual(pick(6, [6, 2, 4, "caviar", 5, 7, 3]), 7);
  });
});

describe("keepLooking", function () {
  it("keepLooking('caviar', 6, [6, 2, 4, 'caviar', 5, 7, 3]) is true", function () {
    assert.strictEqual(
      keepLooking("caviar", 6, [6, 2, 4, "caviar", 5, 7, 3]),
      true
    );
  });
});

describe("looking", function () {
  it("looking('caviar', [6, 2, 4, 'caviar', 5, 7, 3]) is true", function () {
    assert.strictEqual(looking("caviar", [6, 2, 4, "caviar", 5, 7, 3]), true);
  });
  it("looking('caviar', [6, 2, 'grits', 'caviar', 5, 7, 3]) is false", function () {
    assert.strictEqual(
      looking("caviar", [6, 2, "grits", "caviar", 5, 7, 3]),
      false
    );
  });
});

describe("shift", function () {
  it("shift([['a', 'b'], 'c']) is ['a', ['b', 'c']]", function () {
    assert.deepEqual(shift([["a", "b"], "c"]), ["a", ["b", "c"]]);
  });
  it("shift([['a', 'b'], ['c', 'd']]) is ['a', ['b', ['c', 'd']]]", function () {
    assert.deepEqual(
      shift([
        ["a", "b"],
        ["c", "d"],
      ]),
      ["a", ["b", ["c", "d"]]]
    );
  });
});

describe("Y", function () {
  it("Y Combinator make factorial function", function () {
    const factorial = Y((fac) => (n) => n <= 2 ? n : n * fac(n - 1));
    assert.strictEqual(factorial(5), 120);
  });
});
