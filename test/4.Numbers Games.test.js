import {
  add,
  sub,
  addtup,
  multiply,
  tupadd,
  gt,
  lt,
  e,
  power,
  divide,
  length,
  pick,
  noNums,
  allNums,
  isEqan,
  occur,
  isOne,
  rempick,
} from "../dist/4.Numbers Games.js";
import { assert } from "chai";

describe("add", function () {
  it("add(1, 2) is 3", function () {
    assert.strictEqual(add(1, 2), 3);
  });
});

describe("sub", function () {
  it("sub(2, 1) is 1", function () {
    assert.strictEqual(sub(2, 1), 1);
  });
});

describe("addtup", function () {
  it("addtup(1, 2, 3) is 6", function () {
    assert.strictEqual(addtup([1, 2, 3]), 6);
  });
});

describe("multiply", function () {
  it("multiply(2, 3) is 6", function () {
    assert.strictEqual(multiply(2, 3), 6);
  });
});

describe("tupadd", function () {
  it("tupadd([1, 2, 3], [4, 5]) is [5, 7, 3]", function () {
    assert.deepEqual(tupadd([1, 2, 3], [4, 5]), [5, 7, 3]);
  });
});

describe("gt", function () {
  it("2 gt 3 is false", function () {
    assert.strictEqual(gt(2, 3), false);
  });
  it("3 gt 2 is true", function () {
    assert.strictEqual(gt(3, 2), true);
  });
});

describe("lt", function () {
  it("2 lt 3 is true", function () {
    assert.strictEqual(lt(2, 3), true);
  });
  it("3 lt 2 is false", function () {
    assert.strictEqual(lt(3, 2), false);
  });
});

describe("e", function () {
  it("2 is e 2", function () {
    assert.strictEqual(e(2, 2), true);
  });
  it("3 isn't e 2", function () {
    assert.strictEqual(e(3, 2), false);
  });
});

describe("power", function () {
  it("5 power 3 is 125", function () {
    assert.strictEqual(power(5, 3), 125);
  });
});

describe("divide", function () {
  it("15 / 4 is 3", function () {
    assert.strictEqual(divide(15, 4), 3);
  });
});

describe("length", function () {
  it("['a', 'b', 'c'].length is 3", function () {
    assert.strictEqual(length(["a", "b", "c"]), 3);
  });
});

describe("pick", function () {
  it("['a', 'b', 'c'] pick 2 is b", function () {
    assert.strictEqual(pick(2, ["a", "b", "c"]), "b");
  });
});

describe("noNums", function () {
  it("['a', 1, 'b'] noNums is ['a', 'b']", function () {
    assert.deepEqual(noNums(["a", 1, "b"]), ["a", "b"]);
  });
});

describe("allNums", function () {
  it("['a', 1, 'b'] noNums is [1]", function () {
    assert.deepEqual(allNums(["a", 1, "b"]), [1]);
  });
});

describe("isEqan", function () {
  it("1 is isEqan 1", function () {
    assert.strictEqual(isEqan(1, 1), true);
  });
  it("'a' is isEqan 'a'", function () {
    assert.strictEqual(isEqan("a", "a"), true);
  });
  it("1 is isEqan 2", function () {
    assert.strictEqual(isEqan(1, 2), false);
  });
});

describe("occur", function () {
  it("1 in [1, 2, 3, 1] occur 2", function () {
    assert.strictEqual(occur(1, [1, 2, 3, 1]), 2);
  });
});

describe("isOne", function () {
  it("1 isOne", function () {
    assert.strictEqual(isOne(1), true);
  });
  it("2 isn't isOne", function () {
    assert.strictEqual(isOne(2), false);
  });
});

describe("rempick", function () {
  it("['a', 'b', 'c', 'd'] rempick 2 is ['a', 'c', 'd']", function () {
    assert.deepEqual(rempick(2, ["a", "b", "c", "d"]), ["a", "c", "d"]);
  });
});
