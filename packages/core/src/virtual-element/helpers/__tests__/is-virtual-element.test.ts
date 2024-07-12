import { createVirtualElement } from '@/virtual-element/virtual-element'

import { isVirtualElement } from '../is-virtual-element'

describe('isVirtualElement', () => {
  test('should be true', () => {
    const target = createVirtualElement('div', {}, [])
    const result = isVirtualElement(target)

    expect(result).toBe(true)
  })

  test('should be false', () => {
    const target = {
      type: 'div',
      props: {},
    }
    const result = isVirtualElement(target)

    expect(result).toBe(false)
  })
})
