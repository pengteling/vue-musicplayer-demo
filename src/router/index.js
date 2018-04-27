import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Header from '@/components/header/Header'
import Player from '@/components/Player/Player'
import List from '@/components/List/List'
import Lrc from '@/components/Lrc/Lrc.jsx'
import LoadPlayer from '@/components/LoadPlayer/LoadPlayer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Main',
      components: {
        default: Main,
        header: Header,
        loadplayer: LoadPlayer
      },
      children: [
        {
          path: '', component: Player, name: 'Player'
        },
        {
          path: 'list', component: List, name: 'List'
        },
        {
          path: 'lrc', component: Lrc, name: 'Lrc'
        }
      ]
    }
  ]
})
