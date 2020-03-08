const { createState, createMutations } = require("..")

describe("with out default ", () => {
  const testSchema = {
    properties: {
      num: {
        type: Number
      },
      str: {
        type: String
      },
      bool: {
        type: Boolean
      },
      arr: {
        type: Array
      },
      obj: {
        type: Object
      }
    }
  }
  test("test createState with out default", () => {
    const state = createState(testSchema)
    expect(state).toEqual({
      num: 0,
      str: "",
      bool: false,
      arr: [],
      obj: {}
    })
  })

  test("test createMutations with out default", () => {
    const mutations = createMutations(testSchema)
    expect(mutations).toHaveProperty("setNum")
    expect(mutations).toHaveProperty("setStr")
    expect(mutations).toHaveProperty("setObj")
    expect(mutations).toHaveProperty("setBool")
    expect(mutations).toHaveProperty("setArr")
  })
})

describe("with default ", () => {
  const testSchema = {
    properties: {
      num: {
        type: Number,
        default: 1
      },
      str: {
        type: String,
        default: "hello world"
      },
      bool: {
        type: Boolean,
        default: true
      },
      arr: {
        type: Array,
        default: [1, 2, 3]
      },
      obj: {
        type: Object,
        default: { a: "apple" }
      }
    }
  }
  test("test createState with default with default", () => {
    const state = createState(testSchema)
    expect(state).toEqual({
      num: 1,
      str: "hello world",
      bool: true,
      arr: [1, 2, 3],
      obj: { a: "apple" }
    })
  })
  test("test createMutations with default", () => {
    const mutations = createMutations(testSchema)
    expect(mutations).toHaveProperty("setNum")
    expect(mutations).toHaveProperty("setStr")
    expect(mutations).toHaveProperty("setObj")
    expect(mutations).toHaveProperty("setBool")
    expect(mutations).toHaveProperty("setArr")
  })
})

describe("with nested state", () => {
  const nested = {
    properties: {
      obj: {
        type: Object,
        properties: {
          obj1: {
            type: Object,
            properties: {
              a: {
                default: 1,
              },
              b: {
                default: 666
              }
            }
          }
        }
      }
    }
  }
  test("test createState with nested object", () => {
    const state = createState(nested)
    expect(state).toEqual({
      obj: {
        obj1: { a: 1, b: 666 }
      }
    })
  })
  
  test("test createMutations with nested object", () => {
    const mutations = createMutations(nested)
    expect(mutations).toHaveProperty("setObj")
  })
})
