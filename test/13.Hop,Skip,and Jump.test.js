import { multirember, remberUptoLast } from "../dist/13.Hop,Skip,and Jump.js";
import { assert } from "chai";

describe("multirember", function () {
  it("multirember(1, [1, 2, 3, 1]) is [2, 3]", function () {
    assert.deepEqual(multirember(1, [1, 2, 3, 1]), [2, 3]);
  });
});

describe("remberUptoLast", function () {
  it("(remberUptoLast 'a '(a b c a d e f)) ; ~~> '(d e f)", function () {
    assert.deepEqual(remberUptoLast("a", ["a", "b", "c", "a", "d", "e", "f"]), [
      "d",
      "e",
      "f",
    ]);
  });
  it("(remberUptoLast 'x '(a b c a d e f)) ; ~~> '(a b c a d e f)", function () {
    assert.deepEqual(remberUptoLast("x", ["a", "b", "c", "a", "d", "e", "f"]), [
      "a",
      "b",
      "c",
      "a",
      "d",
      "e",
      "f",
    ]);
  });

  it("(remberUptoLast 'f '(a b c a d e f)) ; ~~> '()", function () {
    assert.deepEqual(
      remberUptoLast("f", ["a", "b", "c", "a", "d", "e", "f"]),
      []
    );
  });

  it("(remberUptoLast 'a '(a b c x d e f)) ; ~~> '(b c x d e f)", function () {
    assert.deepEqual(remberUptoLast("a", ["a", "b", "c", "x", "d", "e", "f"]), [
      "b",
      "c",
      "x",
      "d",
      "e",
      "f",
    ]);
  });
});
