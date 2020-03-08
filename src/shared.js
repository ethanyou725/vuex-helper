export function handleDefault(property) {
  if (property.hasOwnProperty("default")) {
    return property
  } else {
    switch (property.type) {
      case Number:
        property.default = 0
        break
      case Boolean:
        property.default = false
        break
      case Array:
        property.default = []
        break
      case Object:
        property.default = {}
        break
      case String:
        property.default = ""
        break
      default:
        break
    }
    return property
  }
}

export const firstUpperCase = str => str[0].toUpperCase() + str.slice(1)
export const getMtnName = (str, key) => str + firstUpperCase(key)
