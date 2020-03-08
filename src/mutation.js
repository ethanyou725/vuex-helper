import { getMtnName } from "./shared"

const setFn = key => (state, newVal) => {
  state[key] = newVal
}

export default function createMutations(schema) {
  const res = {}
  Object.entries(schema.properties).forEach(function(arr) {
    var key = arr[0]
    res[getMtnName("set", key)] = setFn(key)
  })
  return res
}
