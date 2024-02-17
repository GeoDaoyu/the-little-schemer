import { isArray } from "lodash-es";
import {
  all,
  anyPass,
  equals,
  flatten,
  head,
  insert,
  isEmpty,
  not,
  tail,
} from "ramda";
import { isAtom } from "./0.Preface.js";

// 递归展开成一维数组，数组元素都是atom的，就是list
export const isList = (x: unknown): boolean => {
  if (not(isArray(x))) return false;
  const flatted = flatten(x as Array<unknown>);
  return all(isAtom, flatted);
};

// 所有的atom和list都是S-expression。
export const isSExpression = anyPass([isAtom, isList]);

// 限制car和cdr都只能接收非空数组
export const car = head;

// car + cdr = 完整的list
export const cdr = tail;

// cons 把一个S-expression添加到list最前面
// 定律：(car (cons a b)) = a; (cdr (cons a b)) = b;
export const cons = insert(0);

// null?只能判断list
export const isNull = isEmpty;

// eq?只能判断除number外的atom
export const isEq = equals;

export default {};
