import { or } from "ramda";
import { isNull, isEq, car, cdr, cons } from "./1.Toys.js";

// remove a member
export const rember = <T>(a: T, lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isEq(car(lat), a)) return cdr(lat);
  return cons(car(lat), rember(a, cdr(lat)));
};

// 二维数组的第一行
export const firsts = <T>(l: Array<Array<T>>): Array<T> => {
  if (isNull(l)) return [];
  return cons(car(car(l)), firsts(cdr(l)));
};

// 在list中往target的右侧插入a
export const insertR = <T>(a: T, target: T, lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isEq(car(lat), target)) return cons(target, cons(a, cdr(lat)));
  return cons(car(lat), insertR(a, target, cdr(lat)));
};

// 在list中往target的左侧插入a
export const insertL = <T>(a: T, target: T, lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isEq(car(lat), target)) return cons(a, cons(target, cdr(lat)));
  return cons(car(lat), insertL(a, target, cdr(lat)));
};

// 在list中用a替换target
export const subst = <T>(a: T, target: T, lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isEq(car(lat), target)) return cons(a, cdr(lat));
  return cons(car(lat), subst(a, target, cdr(lat)));
};

// 在list中用a替换o1或者o2
export const subst2 = <T>(a: T, o1: T, o2: T, lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (or(isEq(car(lat), o1), isEq(car(lat), o2))) return cons(a, cdr(lat));
  return cons(car(lat), subst2(a, o1, o2, cdr(lat)));
};

// remove mul member
export const multirember = <T>(a: T, lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isEq(car(lat), a)) return multirember(a, cdr(lat));
  return cons(car(lat), multirember(a, cdr(lat)));
};

export const multiinsertR = <T>(a: T, target: T, lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isEq(car(lat), target))
    return cons(target, cons(a, multiinsertR(a, target, cdr(lat))));
  return cons(car(lat), multiinsertR(a, target, cdr(lat)));
};
export const multiinsertL = <T>(a: T, target: T, lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isEq(car(lat), target))
    return cons(a, cons(target, multiinsertL(a, target, cdr(lat))));
  return cons(car(lat), multiinsertL(a, target, cdr(lat)));
};
export const multisubst = <T>(a: T, target: T, lat: Array<T>): Array<T> => {
  if (isNull(lat)) return [];
  if (isEq(car(lat), target)) return cons(a, multisubst(a, target, cdr(lat)));
  return cons(car(lat), multisubst(a, target, cdr(lat)));
};

export default {};
