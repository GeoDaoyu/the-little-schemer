import { isAtom } from "../dist/0.Preface.js";
import { isList, isSExpression, car, cdr, cons } from "../dist/1.Toys.js";
import { assert } from "chai";

describe("isAtom", function () {
  it("'atom' is atom", function () {
    assert.strictEqual(isAtom("atom"), true);
  });
  it("'turkey' is atom", function () {
    assert.strictEqual(isAtom("atom"), true);
  });
  it("1492 is atom", function () {
    assert.strictEqual(isAtom(1492), true);
  });
  it("'*abc$' is atom", function () {
    assert.strictEqual(isAtom(1492), true);
  });
});

describe("isList", function () {
  it("['atom', 'turkey', 'or'] is list", function () {
    assert.strictEqual(isList(["atom", "turkey", "or"]), true);
  });
  it("['atom', ['turkey', 'or']] is list", function () {
    assert.strictEqual(isList(["atom", ["turkey", "or"]]), true);
  });
  it("[] is list", function () {
    assert.strictEqual(isList([]), true);
  });
  it("[[], []] is list", function () {
    assert.strictEqual(isList([[], []]), true);
  });
  it("atom isn't list", function () {
    assert.strictEqual(isList("atom"), false);
  });
});

describe("isSExpression", function () {
  it("'xyz' is S-expression", function () {
    assert.strictEqual(isSExpression("xyz"), true);
  });
  it("[x, y, z] is S-expression", function () {
    assert.strictEqual(isSExpression(["x", "y", "z"]), true);
  });
  it("[x, [y, z]] is S-expression", function () {
    assert.strictEqual(isSExpression(["x", ["y", "z"]]), true);
  });
});

describe("car", function () {
  it("car(['a,', 'b', 'c']) is 'a'", function () {
    assert.strictEqual(car(["a", "b", "c"]), "a");
  });
  it("car([['a'], 'b', 'c']) is ['a']", function () {
    assert.deepEqual(car([["a"], "b", "c"]), ["a"]);
  });
});

describe("cdr", function () {
  it("cdr(['a,', 'b', 'c']) is ['b', 'c']", function () {
    assert.deepEqual(cdr(["a", "b", "c"]), ["b", "c"]);
  });
  it("cdr([['a'], 'b', 'c']) is ['b', 'c']", function () {
    assert.deepEqual(cdr([["a"], "b", "c"]), ["b", "c"]);
  });
});

describe("cons", function () {
  it("cons('a', ['b', 'c']) is ['a', 'b', 'c']", function () {
    assert.deepEqual(cons("a", ["b", "c"]), ["a", "b", "c"]);
  });
  it("cons(['a'], ['b', 'c']) is [['a'], 'b', 'c']", function () {
    assert.deepEqual(cons(["a"], ["b", "c"]), [["a"], "b", "c"]);
  });
});
