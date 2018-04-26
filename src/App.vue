<template>
  <div id="app">
    <router-view name="header"></router-view>
    <!-- <router-view name="loadplayer"></router-view> -->
    <LoadPlayer></LoadPlayer>
    <router-view/>
  </div>
</template>

<script>
import {MUSIC_LIST} from '@/data/MusicList.js'
import {EventBus} from '@/EventBus'
import './comm.scss'
import LoadPlayer from '@/components/LoadPlayer/LoadPlayer'
export default {
  name: 'App',
  components: {
    LoadPlayer
  },
  data () {
    return {
      musicList: MUSIC_LIST,
      currentItem: MUSIC_LIST[2],
      repeatType: 'cycle'
    }
  },
  mounted () {
    EventBus.$emit('setMedia', this.currentItem)
    EventBus.$emit('getList', this.$data)
    // setTimeout(() => {
    //   EventBus.$emit('setMedia', this.currentItem)
    // }, 3000)
    EventBus.$on('changeMusic', (currentItem) => {
      this.currentItem = currentItem
      EventBus.$emit('getList', this.$data)
    })
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'Player') {
        console.log(this.currentItem)
        setTimeout(() => EventBus.$emit('setMedia', this.currentItem), 0)
      }
      if (to.name === 'List') {
        console.log('getList')
        setTimeout(() => EventBus.$emit('getList', this.$data), 0)
      }
    }
  }
}
</script>
