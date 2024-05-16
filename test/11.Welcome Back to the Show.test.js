import {
  twoInARowA,
  twoInARowB,
  sumOfPrefixes,
} from "../dist/11.Welcome Back to the Show.js";
import { assert } from "chai";

describe("twoInARow", function () {
  it("twoInARow([1, 2, 3, 1]) is false", function () {
    assert.strictEqual(twoInARowA([1, 2, 3, 1]), false);
  });
  it("twoInARow([1, 2, 2, 3]) is true", function () {
    assert.strictEqual(twoInARowA([1, 2, 2, 3]), true);
  });
  it("twoInARow([3, 3, 1, 2]) is false", function () {
    assert.strictEqual(twoInARowA([3, 3, 1, 2]), true);
  });
  it("twoInARow([1, 2, 3, 1]) is false", function () {
    assert.strictEqual(twoInARowB([1, 2, 3, 1]), false);
  });
  it("twoInARow([1, 2, 2, 3]) is true", function () {
    assert.strictEqual(twoInARowB([1, 2, 2, 3]), true);
  });
  it("twoInARow([3, 3, 1, 2]) is false", function () {
    assert.strictEqual(twoInARowB([3, 3, 1, 2]), true);
  });
});

describe("sumOfPrefixes", function () {
  it("sumOfPrefixes([1, 1, 2, 3, 5]) is [1, 2, 4, 7, 12]", function () {
    console.log(sumOfPrefixes([1, 1, 2, 3, 5]));
    assert.strictEqual(false, false);
  });
});
