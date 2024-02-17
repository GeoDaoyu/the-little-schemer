import { isEqual } from "../dist/5.Oh My Gawd: It's Full of Stars.js";
import { remberF } from "../dist/8.Lambda the Ultimate.js";
import { assert } from "chai";

describe("remberF", function () {
  it("remberF(isEqual, 'a' ,['a', 'b', 'a']) is ['b', 'a']", function () {
    assert.deepEqual(remberF(isEqual)("a", ["a", "b", "a"]), ["b", "a"]);
  });
});
