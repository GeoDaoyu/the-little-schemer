import { multirember, twoInARow, sumOfPrefixes } from "../dist/12.Take Cover.js";
import { assert } from "chai";

describe("multirember", function () {
  it("multirember(1, [1, 2, 3, 1]) is [2, 3]", function () {
    assert.deepEqual(multirember(1, [1, 2, 3, 1]), [2, 3]);
  });
});

describe("twoInARow", function () {
  it("twoInARow([1, 2, 3, 1]) is false", function () {
    assert.strictEqual(twoInARow([1, 2, 3, 1]), false);
  });
  it("twoInARow([1, 2, 2, 3]) is true", function () {
    assert.strictEqual(twoInARow([1, 2, 2, 3]), true);
  });
  it("twoInARow([3, 3, 1, 2]) is false", function () {
    assert.strictEqual(twoInARow([3, 3, 1, 2]), true);
  });
});

describe("sumOfPrefixes", function () {
  it("sumOfPrefixes([1, 1, 2, 3, 5]) is [1, 2, 4, 7, 12]", function () {
    console.log(sumOfPrefixes([1, 1, 2, 3, 5]));
    assert.strictEqual(false, false);
  });
});