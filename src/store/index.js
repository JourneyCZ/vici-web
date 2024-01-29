import { createStore } from 'vuex'
import base from './modules/base.js'

const store = createStore({
  modules: {
    base,
  }
})

export default store