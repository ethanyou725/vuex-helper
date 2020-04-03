# vuex-helper

约定优于配置, 不需要再写

```javascript
export const UPDATE_USER_TOKEN = `UPDATE_USER_TOKEN`
export const UPDATE_USER_CITY = `UPDATE_USER_TOKEN`
...
```

之类的枯燥无聊的`mutation-types`

通过声明 JSON schema 对象(语法和 vue 组件 props 类似)的形式生成对应的 vuex state 和 mutations

比如生成的 state 如下

```javascript
const state = {
  key1: 1,
  key2: 2,
  className: ""
}
```

对应的 mutations 如下, 约定默认的 mutation 格式为 setAbc 格式(state 对应 key 首字母大写)

```JavaScript
const mutations = {
  setKey1: function(state, payload) {
    state["key1"] = payload
  },
  setKey2: function (state, payload) {
    state["key2"] = payload
  },
  setClassName: function (state, payload) {
    state['className'] = payload
  }
}
```

推荐使用 vuex modules 并且设置 namespace 为 true

## example

```javascript
import { createState, createMutations } from "@sh/vuex-helper"

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

支持嵌套的 state, 但是不支持嵌套的 mutation

```javascript
const nested = {
  properties: {
    obj: {
      type: Object,
      properties: {
        obj1: {
          type: Object
        }
      }
    }
  }
}
const state = createState(nested) // { obj: { obj1: {  } } }
const mutations = createMutations(nested) // { setObj: [Function] }
```

## License

[MIT](LICENSE).
