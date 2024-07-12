import { VIRTUAL_TEXT_ELEMENT_SYMBOL } from '@/virtual-element/constants'
import { createVirtualTextElement } from '@/virtual-element/virtual-text-element'

import { isVirtualTextElement } from '../is-virtual-text-element'

describe('isVirtualTextElement', () => {
  test('should be true', () => {
    const target = createVirtualTextElement('foo')
    const result = isVirtualTextElement(target)

    expect(result).toBe(true)
  })

  test('should be false', () => {
    const target = {
      type: VIRTUAL_TEXT_ELEMENT_SYMBOL,
      props: { nodeValue: 'foo' },
    }
    const result = isVirtualTextElement(target)

    expect(result).toBe(false)
  })
})
