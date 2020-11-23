<<<<<<< Updated upstream
import Vue from 'vue'
import Vuex from 'vuex'
import account from './account'
import posts from './posts'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      account,
      posts
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
  return Store
}
=======
>>>>>>> Stashed changes
