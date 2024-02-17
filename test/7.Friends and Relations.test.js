import {
  isSet,
  makeset,
  isAPair,
  first,
  second,
  build,
  third,
  isFun,
} from "../dist/7.Friends and Relations.js";
import { assert } from "chai";

describe("isSet", function () {
  it("['a', 'b', 'c'] is set", function () {
    assert.strictEqual(isSet(["a", "b", "c"]), true);
  });
  it("['a', 'b', 'a'] isn't set", function () {
    assert.strictEqual(isSet(["a", "b", "a"]), false);
  });
});

describe("makeset", function () {
  it("makeset(['a', 'b', 'a']) is ['a', 'b']", function () {
    assert.sameMembers(makeset(["a", "b", "a"]), ["a", "b"]);
  });
});

describe("isAPair", function () {
  it("['a', ['b']] is a pair", function () {
    assert.strictEqual(isAPair(["a", ["b"]]), true);
  });
  it("['a'] isn't a pair", function () {
    assert.strictEqual(isAPair(["a"]), false);
  });
});

describe("first", function () {
  it("['a', 'b', 'c'] first is 'a'", function () {
    assert.strictEqual(first(["a", "b", "c"]), "a");
  });
});

describe("second", function () {
  it("['a', 'b', 'c'] second is 'a'", function () {
    assert.strictEqual(second(["a", "b", "c"]), "b");
  });
});

describe("build", function () {
  it("build 'a' and ['b'] is ['a', ['b']]", function () {
    assert.deepEqual(build("a", ["b"]), ["a", ["b"]]);
  });
});

describe("third", function () {
  it("['a', 'b', 'c'] third is 'c'", function () {
    assert.strictEqual(third(["a", "b", "c"]), "c");
  });
});

describe("isFun", function () {
  it("[[8, 3],[4, 2],[7, 6]] is fun,", function () {
    assert.strictEqual(
      isFun([
        [8, 3],
        [4, 2],
        [7, 6],
      ]),
      true
    );
  });
});
