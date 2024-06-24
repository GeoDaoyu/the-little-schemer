import { car, cdr, cons, isEq, isNull } from "./1.Toys.js";

export const multirember = <T>(a: T, lat: Array<T>) => {
  const mr = (lat: Array<T>): Array<T> => {
    if (isNull(lat)) return [];
    return isEq(a, car(lat)) ? mr(cdr(lat)) : cons(car(lat), mr(cdr(lat)));
  };
  return mr(lat);
};

const letcc = (cc, f) => f((x) => cc(x), cc);
export const remberUptoLast = <T>(a: T, lat: Array<T>): Array<T> => {
  let result = [];
  const skip = (v: Array<T>) => {
    result = v;
  };
  letcc(skip, (cont: Function) => {
    const R = (lat: Array<T>, cont: Function) => {
      if (isNull(lat)) {
        cont([]);
        return;
      }
      if (isEq(a, car(lat))) {
        R(cdr(lat), (r: Array<T>) => skip(r));
        return;
      }
      R(cdr(lat), (r: Array<T>) => cont(cons(car(lat), r)));
    };
    R(lat, cont);
  });
  return result;
};
