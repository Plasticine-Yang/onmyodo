import { VIRTUAL_TEXT_ELEMENT_SYMBOL } from './constants'
import { VirtualTextElement } from './types'

export function createVirtualTextElement(text: string): VirtualTextElement {
  const virtualTextElement: VirtualTextElement = {
    type: VIRTUAL_TEXT_ELEMENT_SYMBOL,
    props: {
      nodeValue: text,
    },
  }

  // 设置唯一标识，用于识别是否是 VirtualTextElement
  Object.defineProperty(virtualTextElement, VIRTUAL_TEXT_ELEMENT_SYMBOL, {
    value: true,
    configurable: false,
    enumerable: false,
    writable: false,
  })

  return virtualTextElement
}
