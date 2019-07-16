import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
// import Vue from 'vue'

// Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: defaultState,
    mutations,
    getters,
    actions
  })
}
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     updateCount (state, num) {
//       state.count = num
//     }
//   }
// })

// export default store
