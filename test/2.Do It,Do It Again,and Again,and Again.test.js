import {
  isLat,
  isMember,
} from "../dist/2.Do It,Do It Again,and Again,and Again.js";
import { assert } from "chai";

describe("isLat", function () {
  it("['a', 'b', 'c'] is lat", function () {
    assert.strictEqual(isLat(["a", "b", "c"]), true);
  });
  it("[['a'], 'b', 'c'] isn't lat", function () {
    assert.strictEqual(isLat([["a"], "b", "c"]), false);
  });
});

describe("isMember", function () {
  it("'a' is member of ['a']", function () {
    assert.strictEqual(isMember("a", ["a"]), true);
  });
  it("'a' isn't member of ['b']", function () {
    assert.strictEqual(isMember("a", ["b"]), false);
  });
});
