import Browse from "@/components/Browse"
import Login from "@/components/Login"
import Posts from "@/components/Posts"
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import store from "./store"

Vue.config["productionTip"] = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path: "/", component: Posts},
  {path: "/login", component: Login},
  {path: "/browse", component: Browse}
];
export default routes
let router;
router = new VueRouter({
  routes
});

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => {
    return h(App);
  },
}).$mount('#app')

