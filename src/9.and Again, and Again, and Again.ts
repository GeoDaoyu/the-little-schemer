import { isNumber } from "lodash-es";
import { isAtom } from "./0.Preface.js";
import { isEq } from "./1.Toys.js";
import { add, multiply } from "./4.Numbers Games.js";
import {
  build,
  first,
  second,
  isAPair,
  revpair,
} from "./7.Friends and Relations.js";

export const pick = <T>(n: number, lat: Array<T>) => lat[n - 1];

export const keepLooking = (
  a: string,
  sorn: number | string,
  lat: Array<number | string>
): boolean => {
  if (isNumber(sorn)) return keepLooking(a, pick(sorn, lat), lat);
  return isEq(sorn, a);
};

export const looking = (a: string, lat: Array<string | number>) =>
  keepLooking(a, pick(1, lat), lat);

// 永恒
export const eternity = (x: any) => eternity(x);

export const shift = <T>(pair: Array<T> | Array<Array<T>>) =>
  build(
    first(first(pair as Array<Array<T>>)),
    build(
      second(first(pair as Array<Array<T>>)),
      second(pair as Array<Array<T>>)
    ) as T
  );

export const align = (pora) => {
  if (isAtom(pora)) return pora;
  if (isAPair(first(pora))) return align(shift(pora));
  return build(first(pora), align(second(pora)));
};

export const lengthStar = (pora) => {
  if (isAtom(pora)) return 1;
  return add(lengthStar(first(pora)), lengthStar(second(pora)));
};

export const weightStar = (pora) => {
  if (isAtom(pora)) return 1;
  return add(multiply(weightStar(first(pora)), 2), weightStar(second(pora)));
};

export const shuffle = (pora) => {
  if (isAtom(pora)) return pora;
  if (isAPair(first(pora))) return shuffle(revpair(pora));
  return build(first(pora), shuffle(second(pora)));
};

export const C = () => {};
export const A = () => {};

export const isWillStop = () => {};
export const lastTry = () => {};

export const Y = (le) => ((f) => f(f))((f) => le((x) => f(f)(x)));
