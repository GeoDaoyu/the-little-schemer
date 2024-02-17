import { isNull, car, cdr, cons } from "./1.Toys.js";

// curry
export const remberF =
  (test: Function) =>
  <T>(a: T, l: Array<T>): Array<T> => {
    if (isNull(l)) return [];
    if (test(car(l), a)) return cdr(l);
    return cons(car(l), remberF(test)(a, cdr(l)));
  };
