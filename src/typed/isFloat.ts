import { isNumber } from 'radashi'

export function isFloat(value: any): value is number {
  return isNumber(value) && value % 1 !== 0
}
