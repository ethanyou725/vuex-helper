# vuex-helper

通过声明JSON schema 对象(语法和vue组件props类似)的形式生成对应的 vuex state 和 mutations

## example

```javascript
import  { createState, createMutations } from '@sh/vuex-helper'

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

const state = createState(testSchema)
console.log(state)
/*
  {
    num: 0,
    str: "",
    bool: false,
    arr: [],
    obj: {}
  }
*/

const mutations = createMutations(testSchema)
console.log(mutations)
/*
  {
    setNum: (state, newVal) => {
      state.num = newVal
    },
    setStr: (state, newVal) => {
      state.str = newVal
    },
    setBool: (state, newVal) => {
      state.bool = newVal
    },
    setArr: (state, newVal) => {
      state["arr"] = newVal
    },
    setObj: (state, newVal) => {
      state["obj"] = newVal
    }
  }
*/

/**
 * new Vuex.Store ({
 *  state,
 *  mutations
 * })
 */
```

## License

[MIT](LICENSE).
