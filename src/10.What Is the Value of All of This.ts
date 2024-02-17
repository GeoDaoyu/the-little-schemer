import { isNull, isEq, car, cdr } from "./1.Toys.js";
import { first, second } from "./7.Friends and Relations.js";

const lookupInEntryHelp = <T>(
  name: string,
  names: Array<string>,
  values: Array<T>,
  enterF: Function
) => {
  if (isNull(names)) return enterF(name);
  if (isEq(car(names), name)) return car(values);
  return lookupInEntryHelp(name, cdr(names), cdr(values), enterF);
};

export const lookupInEntry = <T>(
  name: string,
  entry: Array<string | T>,
  entryF: Function
) =>
  lookupInEntryHelp(
    name,
    first(entry) as Array<string>,
    second(entry) as Array<T>,
    entryF
  );

export const lookupInTable = <T>(
  name: string,
  table: Array<Array<string | T>>,
  tableF: Function
) => {
  if (isNull(table)) return tableF(name);
  return lookupInEntry(name, car(table), (name: string) =>
    lookupInTable(name, cdr(table), tableF)
  );
};
