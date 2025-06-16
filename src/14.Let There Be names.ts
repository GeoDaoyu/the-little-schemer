import { car, isNull } from "./1.Toys.js";
import { isAtom } from "./0.Preface.js";

export const leftmost = <T>(l: Array<T> | Array<Array<T>>): T | Array<T> => {
  if (isNull(l)) return [];
  if (isAtom(car(l as Array<T>))) return car(l as Array<T>);
  return leftmost(car(l as Array<T>) as Array<T>);
};
