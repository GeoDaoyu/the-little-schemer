import {
  remberStar,
  insertRStar,
  occurStar,
  leftmost,
  isEqlist,
  isEqual,
} from "../dist/5.Oh My Gawd: It's Full of Stars.js";
import { assert } from "chai";

describe("rember*", function () {
  it(`remberStar(3, [
    [1, 2, 3],
    [3, 4, 5],
    [5, 6, 7],
  ]) is [
    [1, 2],
    [4, 5],
    [5, 6, 7],
  ]`, function () {
    assert.deepEqual(
      remberStar(3, [
        [1, 2, 3],
        [3, 4, 5],
        [5, 6, 7],
      ]),
      [
        [1, 2],
        [4, 5],
        [5, 6, 7],
      ]
    );
  });
});

describe("insertR*", function () {
  it(`insertRStar(0, 3, [
    [1, 2, 3],
    [3, 4, 5],
    [5, 6, 7],
  ]) is [
    [1, 2, 3, 0],
    [3, 0, 4, 5],
    [5, 6, 7],
  ]`, function () {
    assert.deepEqual(
      insertRStar(0, 3, [
        [1, 2, 3],
        [3, 4, 5],
        [5, 6, 7],
      ]),
      [
        [1, 2, 3, 0],
        [3, 0, 4, 5],
        [5, 6, 7],
      ]
    );
  });
});

describe("occur*", function () {
  it("occurStar(3, [[1, 2, 3],[3, 4, 5],[5, 6, 7],]) is 2", function () {
    assert.strictEqual(
      occurStar(3, [
        [1, 2, 3],
        [3, 4, 5],
        [5, 6, 7],
      ]),
      2
    );
  });
});

describe("leftmost", function () {
  it("leftmost(1, [[1, 2, 3],[3, 4, 5],[5, 6, 7],]) is 1", function () {
    assert.strictEqual(
      leftmost([
        [1, 2, 3],
        [3, 4, 5],
        [5, 6, 7],
      ]),
      1
    );
  });
});

describe("isEqlist", function () {
  it("isEqlist([[1, 2, 3]], [[1, 2, 3]]) is true", function () {
    assert.strictEqual(isEqlist([[1, 2, 3]], [[1, 2, 3]]), true);
  });
  it("isEqlist([[1, 2, 4]], [[1, 2, 3]]) is true", function () {
    assert.strictEqual(isEqlist([[1, 2, 4]], [[1, 2, 3]]), false);
  });
});

describe("isEqual", function () {
  it("isEqlist([[1, 2, 3]], [[1, 2, 3]]) is true", function () {
    assert.strictEqual(isEqual([[1, 2, 3]], [[1, 2, 3]]), true);
  });
  it("isEqual([[1, 2, 4]], [[1, 2, 3]]) is true", function () {
    assert.strictEqual(isEqual([[1, 2, 4]], [[1, 2, 3]]), false);
  });
  it("isEqual('atom', 'atom') is true", function () {
    assert.strictEqual(isEqual("atom", "atom"), true);
  });
  it("isEqual('atom', 'btom') is true", function () {
    assert.strictEqual(isEqual("atom", "btom"), false);
  });
});
