import { car, cdr, cons, isEq, isNull } from "./1.Toys.js";
import { or, curry } from "ramda";

// haskell 有let rec语法，声明递归函数
export const multirember = <T>(a: T, lat: Array<T>) => {
  const mr = (lat: Array<T>): Array<T> => {
    if (isNull(lat)) return [];
    return isEq(a, car(lat)) ? mr(cdr(lat)) : cons(car(lat), mr(cdr(lat)));
  };
  return mr(lat);
};

export const twoInARow = <T>(lat: Array<T>): boolean => {
  const W = <T>(a: T, lat: Array<T>): boolean => {
    if (isNull(lat)) return false;
    return or(isEq(car(lat), a), W(car(lat), cdr(lat)));
  };
  if (isNull(lat)) return false;
  return W(car(lat), cdr(lat));
};

export const sumOfPrefixes = (tup: Array<number>) => {
  const S = (sss: number, tup: Array<number>): Array<number> => {
    if (isNull(tup)) return [];
    return cons(sss + car(tup), cdr(tup));
  };
  return S(0, tup);
};

export const scramble = () => {};
