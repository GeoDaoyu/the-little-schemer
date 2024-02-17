import { isAtom } from "./0.Preface.js";
import { isNull, car, cdr, cons, isEq } from "./1.Toys.js";
import { add1 } from "./0.Preface.js";
import { add, isEqan } from "./4.Numbers Games.js";
import { and, or } from "ramda";

export const remberStar = <T>(a: T, l: Array<T>) => {
  if (isNull(l)) return [];
  if (isAtom(car(l))) {
    if (isEq(car(l), a)) return remberStar(a, cdr(l));
    return cons(car(l), remberStar(a, cdr(l)));
  }
  return cons(remberStar(a, car(l) as Array<T>), remberStar(a, cdr(l)));
};

export const insertRStar = <T>(a: T, target: T, l: Array<T>) => {
  if (isNull(l)) return [];
  if (isAtom(car(l))) {
    if (isEq(car(l), target))
      return cons(target, cons(a, insertRStar(a, target, cdr(l))));
    return cons(car(l), insertRStar(a, target, cdr(l)));
  }
  return cons(
    insertRStar(a, target, car(l) as Array<T>),
    insertRStar(a, target, cdr(l))
  );
};

export const occurStar = <T>(a: T, l: Array<T>): number => {
  if (isNull(l)) return 0;
  if (isAtom(car(l))) {
    if (isEq(car(l), a)) return add1(occurStar(a, cdr(l)));
    return occurStar(a, cdr(l));
  }
  return add(occurStar(a, car(l) as Array<T>), occurStar(a, cdr(l)));
};

// todo: 空了补充
export const substStar = () => {};
export const insertLStar = () => {};
export const memberStar = () => {};

export const leftmost = <T>(l: Array<T> | Array<Array<T>>): T => {
  if (isAtom(car(l as Array<T>))) return car(l as Array<T>);
  return leftmost(car(l as Array<T>) as Array<T>);
};

export const isEqlist = <T>(l1: Array<T>, l2: Array<T>): boolean => {
  if (and(isNull(l1), isNull(l2))) return true;
  if (or(isNull(l1), isNull(l2))) return false;
  return and(isEqual(car(l1), car(l2)), isEqlist(cdr(l1), cdr(l2)));
};

export const isEqual = <T>(s1: T, s2: T): boolean => {
  if (and(isAtom(s1), isAtom(s2))) return isEqan(s1, s2);
  if (or(isAtom(s1), isAtom(s2))) return false;
  return isEqlist(s1 as Array<T>, s2 as Array<T>);
};
