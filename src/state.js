import { handleDefault } from "./shared"

export default function createState(schema) {
  const res = {}
  Object.entries(schema.properties).forEach(function(arr) {
    var key = arr[0]
    var val = arr[1]

    if (typeof val.properties === "object") {
      const childValues = createState(val)
      res[key] = childValues
    } else {
      var value = handleDefault(arr[1])
      res[key] = value.default
    }
  })
  return res
}
