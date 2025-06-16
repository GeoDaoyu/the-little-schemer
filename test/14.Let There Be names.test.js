import { leftmost } from "../dist/14.Let There Be names.js";
import { assert } from "chai";

describe("leftmost", function () {
  it("leftmost([[[], 'a'], []]) is []", function () {
    assert.deepEqual(leftmost([[[], "a"], []]), []);
  });
});
