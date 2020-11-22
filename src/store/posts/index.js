import * as getters from "./getters"
import * as mutations from "./mutations"
import * as actions from "./actions"
import state from "./state"

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
}