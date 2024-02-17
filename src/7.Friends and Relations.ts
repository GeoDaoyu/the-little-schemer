import { isAtom } from "./0.Preface.js";
import { isNull, car, cdr, cons } from "./1.Toys.js";
import { isMember } from "./2.Do It,Do It Again,and Again,and Again.js";
import { firsts } from "./3.Cons the Magnificent.js";
import { compose } from "ramda";

export const isSet = <T>(lat: Array<T>): boolean => {
  if (isNull(lat)) return true;
  if (isMember(car(lat), cdr(lat))) return false;
  return isSet(cdr(lat));
};

export const makeset = <T>(lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isMember(car(lat), cdr(lat))) return makeset(cdr(lat));
  return cons(car(lat), makeset(cdr(lat)));
};

export const isSubset = () => {};
export const isEqset = () => {};
export const isIntersect = () => {};
export const intersect = () => {};
export const union = () => {};
export const intersectall = () => {};

export const isAPair = (x: any): boolean => {
  if (isAtom(x)) return false;
  if (isNull(x)) return false;
  if (isNull(cdr(x))) return false;
  if (isNull(cdr(cdr(x)))) return true;
  return false;
};

export const first = car;
export const second = compose(car, cdr);
export const build = <T>(s1: T, s2: T) => cons(s1, cons(s2, []));
export const third = compose(car, cdr, cdr);
// rel is a set of pairs
export const isFun = compose(isSet, firsts as any);

export const revpair = (pair) => build(second(pair), first(pair));
export const revrel = (rel) => {
  if (isNull(rel)) return [];
  return cons(revpair(car(rel)), revpair(cdr(rel)));
};
export const isFullfun = () => {};
export const isOneToOne = () => {};
