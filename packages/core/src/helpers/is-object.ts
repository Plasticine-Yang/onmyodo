export function isObject(target: any): target is Record<PropertyKey, any> {
  return target !== null && typeof target === 'object'
}
