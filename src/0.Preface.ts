import {
  isBoolean,
  isNull,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
} from "lodash-es";
import { __, add, anyPass, subtract } from "ramda";

export const add1 = add(1);
export const sub1 = subtract(__, 1);

export const isAtom = anyPass([
  isBoolean,
  isNull,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
]);

export default {};
