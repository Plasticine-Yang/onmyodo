import { isObject } from '@/helpers'

import { VIRTUAL_ELEMENT_SYMBOL } from '../constants'
import { VirtualElement } from '../types'

export function isVirtualElement(target: any): target is VirtualElement {
  return !!(isObject(target) && target[VIRTUAL_ELEMENT_SYMBOL])
}
