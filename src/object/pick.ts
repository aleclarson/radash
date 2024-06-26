import { KeyFilter, reduceKeys } from 'radashi'

/**
 * Pick a list of properties from an object into a new object
 */
export const pick = <T extends object, TKeys extends keyof T>(
  obj: T,
  keys: KeyFilter<T, TKeys>
): Pick<T, TKeys> => {
  if (!obj) return {} as Pick<T, TKeys>
  return reduceKeys(
    obj,
    keys,
    (acc, value, key) => {
      acc[key] = value
      return acc
    },
    {} as any
  )
}
