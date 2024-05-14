import { add1, sub1 } from "./0.Preface.js";
import { isNull, car, cdr, cons, isEq } from "./1.Toys.js";
import { equals, and, or, curry } from "ramda";
import { isNumber } from "lodash-es";

const isZero = equals(0);

export const add = (n: number, m: number): number => {
  if (isZero(m)) return n;
  return add1(add(n, sub1(m)));
};

export const sub = (n: number, m: number): number => {
  if (isZero(m)) return n;
  return sub1(sub(n, sub1(m)));
};

export const addtup = (tup: Array<number>): number => {
  if (isNull(tup)) return 0;
  return add(car(tup), addtup(cdr(tup)));
};

export const multiply = (n: number, m: number): number => {
  if (isZero(m)) return 0;
  return add(n, multiply(n, sub1(m)));
};

export const tupadd = (
  tup1: Array<number>,
  tup2: Array<number>
): Array<number> => {
  if (isNull(tup1)) return tup2;
  if (isNull(tup2)) return tup1;
  return cons(add(car(tup1), car(tup2)), tupadd(cdr(tup1), cdr(tup2)));
};

export const gt = (n: number, m: number): boolean => {
  if (isZero(n)) return false;
  if (isZero(m)) return true;
  return gt(sub1(n), sub1(m));
};

export const lt = (n: number, m: number): boolean => {
  if (isZero(m)) return false;
  if (isZero(n)) return true;
  return lt(sub1(n), sub1(m));
};

export const e = (n: number, m: number): boolean => {
  if (lt(n, m)) return false;
  if (gt(n, m)) return false;
  return true;
};

export const power = (n: number, m: number): number => {
  if (isZero(m)) return 1;
  return multiply(n, power(n, sub1(m)));
};

export const divide = (n: number, m: number): number => {
  if (lt(n, m)) return 0;
  return add1(divide(sub(n, m), m));
};

export const length = <T>(lat: Array<T>): number => {
  if (isNull(lat)) return 0;
  return add1(length(cdr(lat)));
};

export const pick = <T>(n: number, lat: Array<T>): T => {
  if (isZero(sub1(n))) return car(lat);
  return pick(sub1(n), cdr(lat));
};

export const noNums = <T>(lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isNumber(car(lat))) return noNums(cdr(lat));
  return cons(car(lat), noNums(cdr(lat)));
};

export const allNums = <T>(lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isNumber(car(lat))) return cons(car(lat), allNums(cdr(lat)));
  return allNums(cdr(lat));
};

export const isEqan = <T>(a1: T, a2: T): boolean => {
  if (and(isNumber(a1), isNumber(a2))) return e(a1 as number, a2 as number);
  if (or(isNumber(a1), isNumber(a2))) return false;
  return isEq(a1, a2);
};

export const occur = <T>(a: T, lat: Array<T>): number => {
  if (isNull(lat)) return 0;
  if (isEq(car(lat), a)) return add1(occur(a, cdr(lat)));
  return occur(a, cdr(lat));
};

export const isOne: (n: number) => boolean = curry(e)(1);

export const rempick = <T>(n: number, lat: Array<T>): Array<T> => {
  if (isOne(n)) return cdr(lat);
  return cons(car(lat), rempick(sub1(n), cdr(lat)));
};

export default {};
