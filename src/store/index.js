import Vue from 'vue'
import Vuex from 'vuex'
import list from './list/index'
import player from './player/index'

Vue.use(Vuex)

const dubug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  mode: dubug,
  modules: {
    list,
    player
  }
})
