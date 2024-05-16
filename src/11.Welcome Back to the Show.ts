import { or, curry } from "ramda";
import { car, cdr, cons, isEq, isNull } from "./1.Toys.js";

const isFirst = <T>(a: T, lat: Array<T>) => {
  if (isNull(lat)) return false;
  return isEq(car(lat), a);
};
// one atom occurs twice in a row, row 是紧挨着的
// 第一种实现
export const twoInARowA = (lat: Array<any>): boolean => {
  if (isNull(lat)) return false;
  return or(isFirst(car(lat), cdr(lat)), twoInARowA(cdr(lat)));
};

// 第二种实现
const twoInARowBHelp = <T>(preceding: T, lat: Array<T>) => {
  if (isNull(lat)) return false;
  return or(isEq(car(lat), preceding), twoInARowBHelp(car(lat), cdr(lat)));
};
export const twoInARowB = (lat: Array<any>): boolean => {
  if (isNull(lat)) return false;
  return twoInARowBHelp(car(lat), cdr(lat));
};

const sumOfPrefixesHelp = curry(
  (prev: number, tup: Array<number>): Array<number> => {
    if (isNull(tup)) return [];
    const acc = prev + car(tup);
    return cons(acc, sumOfPrefixesHelp(acc, cdr(tup)));
  }
);
// 前缀和
export const sumOfPrefixes: (tup: Array<number>) => Array<number> =
  sumOfPrefixesHelp(0);

export const scramble = () => {};
