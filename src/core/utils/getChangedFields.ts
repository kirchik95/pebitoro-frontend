import { isEqual } from 'lodash';

export const getChangedFields = <T extends object>(
  original: Partial<T>,
  updated: Partial<T>,
): Partial<T> => {
  const changes: Partial<T> = {};

  Object.keys(updated).forEach((key) => {
    if (!isEqual(original[key as keyof T], updated[key as keyof T])) {
      changes[key as keyof T] = updated[key as keyof T];
    }
  });

  return changes;
};
