import { add1, sub1, isAtom } from "../dist/0.Preface.js";
import { assert } from "chai";

describe("add1", function () {
  it("0 add 1 is 1", function () {
    assert.strictEqual(add1(0), 1);
  });
});

describe("sub1", function () {
  it("0 sub 1 is -1", function () {
    assert.strictEqual(sub1(0), -1);
  });
});

describe("isAtom", function () {
  it("number is atom", function () {
    assert.strictEqual(isAtom(1), true);
  });
  it("string is atom", function () {
    assert.strictEqual(isAtom("atom"), true);
  });
  it("bool is atom", function () {
    assert.strictEqual(isAtom(true), true);
  });
  it("symbol is atom", function () {
    assert.strictEqual(isAtom(Symbol()), true);
  });
  it("null is atom", function () {
    assert.strictEqual(isAtom(null), true);
  });
  it("undefined is atom", function () {
    assert.strictEqual(isAtom(undefined), true);
  });
  it("list isn't atom", function () {
    assert.strictEqual(isAtom([]), false);
  });
});
