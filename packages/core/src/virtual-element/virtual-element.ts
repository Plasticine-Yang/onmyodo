import { VIRTUAL_ELEMENT_SYMBOL } from './constants'
import { isVirtualElement } from './helpers'
import { VirtualElement, VirtualElementProps, VirtualElementType } from './types'
import { createVirtualTextElement } from './virtual-text-element'

type CreateVirtualElementProps = Omit<VirtualElementProps, 'children'>
type CreateVirtualElementChild = VirtualElement | string

export function createVirtualElement(
  type: VirtualElementType,
  props: CreateVirtualElementProps = {},
  children: CreateVirtualElementChild[] = [],
): VirtualElement {
  const resolvedChildren = children.map((child) => {
    if (isVirtualElement(child)) {
      return child
    }

    return createVirtualTextElement(String(child))
  })

  const virtualElement: VirtualElement = {
    type,
    props: {
      ...props,
      children: resolvedChildren,
    },
  }

  // 设置唯一标识，用于识别是否是 VirtualElement
  Object.defineProperty(virtualElement, VIRTUAL_ELEMENT_SYMBOL, {
    value: true,
    configurable: false,
    enumerable: false,
    writable: false,
  })

  return virtualElement
}
