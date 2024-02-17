import { isAtom } from "./0.Preface.js";
import { or } from "ramda";
import { isNull, cdr, car, isEq } from "./1.Toys.js";

// lat是每个元素都是atom的list
export const isLat = (l: Array<unknown>): boolean => {
  if (isNull(l)) return true;
  if (isAtom(car(l))) return isLat(cdr(l));
  return false;
};

export const isMember = <T>(a: T, lat: Array<T>): boolean => {
  if (isNull(lat)) return false;
  return or(isEq(car(lat), a), isMember(a, cdr(lat)));
};

export default {};
