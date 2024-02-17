import {
  rember,
  firsts,
  insertR,
  insertL,
  subst,
  subst2,
  multirember,
  multiinsertR,
  multiinsertL,
  multisubst,
} from "../dist/3.Cons the Magnificent.js";
import { assert } from "chai";

describe("rember", function () {
  it("rember('b', ['a', 'b', 'c', 'b']) is ['a', 'c', 'b']", function () {
    assert.deepEqual(rember("b", ["a", "b", "c", "b"]), ["a", "c", "b"]);
  });
});

describe("firsts", function () {
  it("firsts([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']] is ['a', 'd', 'g']", function () {
    assert.deepEqual(
      firsts([
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
      ]),
      ["a", "d", "g"]
    );
  });
});

describe("insertR", function () {
  it("insertR('x', 'c', ['a', 'b', 'c', 'd']) is ['a', 'b', 'c', 'x', 'd']", function () {
    assert.deepEqual(insertR("x", "c", ["a", "b", "c", "d"]), [
      "a",
      "b",
      "c",
      "x",
      "d",
    ]);
  });
});

describe("insertL", function () {
  it("insertR('x', 'c', ['a', 'b', 'c', 'd']) is ['a', 'b', 'c', 'x', 'd']", function () {
    assert.deepEqual(insertL("x", "c", ["a", "b", "c", "d"]), [
      "a",
      "b",
      "x",
      "c",
      "d",
    ]);
  });
});

describe("subst", function () {
  it("subst('x', 'c', ['a', 'b', 'c', 'd']) is ['a', 'b', 'x', 'd']", function () {
    assert.deepEqual(subst("x", "c", ["a", "b", "c", "d"]), [
      "a",
      "b",
      "x",
      "d",
    ]);
  });
});

describe("subst2", function () {
  it("subst2('x', 'c', 'd', ['a', 'b', 'c', 'd']) is ['a', 'b', 'x', 'd']", function () {
    assert.deepEqual(subst2("x", "c", "d", ["a", "b", "c", "d"]), [
      "a",
      "b",
      "x",
      "d",
    ]);
  });
  it("subst2('x', 'd', 'c', ['a', 'b', 'c', 'd']) is ['a', 'b', 'x', 'd']", function () {
    assert.deepEqual(subst2("x", "d", "c", ["a", "b", "c", "d"]), [
      "a",
      "b",
      "x",
      "d",
    ]);
  });
});

describe("multirember", function () {
  it("multirember('b', ['a', 'b', 'c', 'b']) is ['a', 'c']", function () {
    assert.deepEqual(multirember("b", ["a", "b", "c", "b"]), ["a", "c"]);
  });
});

describe("multiinsertR", function () {
  it("multiinsertR('x', 'c', ['a', 'b', 'c', 'd', 'c']) is ['a', 'b', 'c', 'x', 'd', 'c', 'x']", function () {
    assert.deepEqual(multiinsertR("x", "c", ["a", "b", "c", "d", "c"]), [
      "a",
      "b",
      "c",
      "x",
      "d",
      "c",
      "x",
    ]);
  });
});

describe("multiinsertL", function () {
  it("multiinsertL('x', 'c', ['a', 'b', 'c', 'd', 'c']) is ['a', 'b', 'x', 'c', 'd', 'x', 'c']", function () {
    assert.deepEqual(multiinsertL("x", "c", ["a", "b", "c", "d", "c"]), [
      "a",
      "b",
      "x",
      "c",
      "d",
      "x",
      "c",
    ]);
  });
});

describe("multisubst", function () {
  it("multisubst('x', 'c', ['a', 'b', 'c', 'd', 'c']) is ['a', 'b', 'x', 'd', 'x']", function () {
    assert.deepEqual(multisubst("x", "c", ["a", "b", "c", "d", "c"]), [
      "a",
      "b",
      "x",
      "d",
      "x",
    ]);
  });
});
