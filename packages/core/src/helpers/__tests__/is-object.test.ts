import { isObject } from '../is-object'

describe('isObject', () => {
  test('should be true', () => {
    const targets = [{}, { foo: 'foo' }, { 1: 2 }, { [Symbol('foo')]: 'foo' }, []]
    const results = targets.map((target) => isObject(target))
    const expected = targets.map(() => true)

    expect(results).toEqual(expected)
  })

  test('should be false', () => {
    const targets = [null, undefined, true, false, 0, 1, 'foo', Symbol('foo')]
    const results = targets.map((target) => isObject(target))
    const expected = targets.map(() => false)

    expect(results).toEqual(expected)
  })
})
