<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="loadplayer" ref="loadplayer"></router-view>
    <!-- <LoadPlayer ref="loadplayer"></LoadPlayer> -->
    <router-view ref="main" />
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
      currentItem: MUSIC_LIST[0],
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
    EventBus.$on('deleteMusic', musicItem => {
      if (this.musicList.length > 2) {
        let currentIndex = this.musicList.indexOf(musicItem)
        this.musicList = this.musicList.filter(item => item !== musicItem)
        if (this.currentItem === musicItem) {
          /* 删除正在播放的歌曲 */
          currentIndex = currentIndex % this.musicList.length
          this.currentItem = this.musicList[currentIndex]
        }
        EventBus.$emit('getList', this.$data)
      }
    })
    EventBus.$on('changeRepeatType', newRepeatType => {
      this.repeatType = newRepeatType
    })
    EventBus.$on('prevNext', type => {
      this.prevNextHandler(type)
      EventBus.$emit('setMedia', this.currentItem)
    })
    // LRC页面 刷新时获取数据
    EventBus.$emit('sendLrc', this.currentItem)
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'Player') {
        console.log(this.currentItem)
        this.$nextTick(
          _ => {
            EventBus.$emit('setMedia', this.currentItem)
            console.log(this.$refs.main.$refs.mainview.paused)
            console.log(this.$refs.loadplayer.$data.paused)
            this.$refs.main.$refs.mainview.paused = this.$refs.loadplayer.$data.paused
          }

        )
        // setTimeout(() => EventBus.$emit('setMedia', this.currentItem), 0)
      }
      if (to.name === 'List') {
        console.log('getList')
        // setTimeout(() => EventBus.$emit('getList', this.$data), 0)
        this.$nextTick(
          _ => EventBus.$emit('getList', this.$data)
        )
      }
      if (to.name === 'Lrc') {
        this.$nextTick(
          _ => {
            EventBus.$emit('sendLrc', this.currentItem)
          }
        )
      }
    }
  },
  methods: {
    prevNextHandler (type) {
      let currentIndex = this.musicList.indexOf(this.currentItem)
      let num = this.musicList.length
      let repeatType = this.repeatType
      console.log(currentIndex, num, repeatType)
      if (repeatType === 'cycle' || repeatType === 'once') {
        if (type === 'prev') {
          currentIndex = (currentIndex - 1 + num) % num
        } else {
          currentIndex = (currentIndex + 1) % num
        }
      } else {
        let rd = (currentIndex) => {
          let newIndex = Math.floor(num * Math.random())
          if (newIndex === currentIndex) {
            return rd(currentIndex)
          } else {
            return newIndex
          }
        }
        currentIndex = rd(currentIndex)
      }
      this.currentItem = this.musicList[currentIndex]
    }
  }
}
</script>
