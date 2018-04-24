import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Header from '@/components/header/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        default: Main,
        header: Header
      }
    }
  ]
})
