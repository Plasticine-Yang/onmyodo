import { isVirtualTextElement } from '../helpers/is-virtual-text-element'
import { createVirtualElement } from '../virtual-element'

describe('VirtualElement', () => {
  test('should set props', () => {
    const virtualElement = createVirtualElement('div', { foo: 'foo', bar: 'bar' })

    expect(virtualElement.type).toBe('div')
    expect(virtualElement.props.foo).toBe('foo')
    expect(virtualElement.props.bar).toBe('bar')
  })

  test('should resolve children to props', () => {
    const virtualElementChild = createVirtualElement('div', { isChild: true, childIndex: 0 }, [])
    const virtualElement = createVirtualElement('div', { foo: 'foo', bar: 'bar' }, [virtualElementChild, 'text child'])

    expect(virtualElement.type).toBe('div')
    expect(virtualElement.props.foo).toBe('foo')
    expect(virtualElement.props.bar).toBe('bar')
    expect(virtualElement.props.children.at(0)).toBe(virtualElementChild)
    expect(isVirtualTextElement(virtualElement.props.children.at(1))).toBe(true)
  })
})
