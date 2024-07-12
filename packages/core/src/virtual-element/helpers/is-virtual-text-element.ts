import { isObject } from '@/helpers'

import { VIRTUAL_TEXT_ELEMENT_SYMBOL } from '../constants'
import { VirtualTextElement } from '../types'

export function isVirtualTextElement(target: any): target is VirtualTextElement {
  return !!(isObject(target) && target[VIRTUAL_TEXT_ELEMENT_SYMBOL])
}
