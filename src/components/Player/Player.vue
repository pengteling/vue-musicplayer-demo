<template>
  <div class="player-page">
    <h1 class="caption">
      <!-- <a href="#/list" class="">我的私人音乐坊 &gt;</a> -->
      <router-link to="/list">我的私人音乐坊 &gt;</router-link>
    </h1>
    <div class="mt20 row">
      <div class="controll-wrapper">
        <h2 class="music-title">
          <!-- <a href="#/lrc" class="">天使中的魔鬼</a> -->
          <router-link to="/lrc">{{ currentItem.title }}</router-link>
        </h2>
        <h3 class="music-artist mt10">{{ currentItem.artist }}</h3>
        <div class="row mt20">
          <div class="left-time -col-auto">-{{leftTime}}</div>
          <div class="volume-container"><i class="icon-volume rt" style="top: 5px; left: -5px;"></i>
            <div class="volume-wrapper">
              <!-- <div class="components-progress">
                <div class="progress" style="width: 80%; background: rgb(47, 152, 66);"></div>
              </div> -->
              <Progress :progress="volume" barColor="#2f9842" @changeProgress="CHANGE_VOLUME"></Progress>
            </div>
          </div>
        </div>
        <div style="height: 10px; line-height: 10px;">
          <!-- <div class="components-progress">
            <div class="progress" style="width: 34.7861%; background: rgb(47, 152, 66);"></div>
          </div> -->
          <Progress :progress="currentPercentAbsolute" barColor="#2f9842" @changeProgress="CHANGE_PROGRESS"></Progress>
        </div>
        <div class="mt35 row">
          <div><i class="icon prev" @click="prevNextHandler('prev')"></i><i :class="`icon ml20 ${paused? 'play':'pause'}`" @click="PLAY_PAUSE"></i><i class="icon next ml20" @click="prevNextHandler('next')"></i></div>
          <div class="-col-auto"><i :class="`icon repeat-${repeatType}`" :title="repeatTypeStr" @click="CHANGE_REPEAT_TYPE"></i></div>
        </div>
      </div>
      <div class="-col-auto cover"><router-link to="/lrc"><img :src="currentItem.cover" :alt="currentItem.title" :class="paused?'pause':'play'"></router-link></div>
    </div>
  </div>
</template>

<script>
import './Player.scss'
// import { EventBus } from '@/EventBus'
import {mapState, mapGetters, mapMutations} from 'vuex'
import Progress from '@/components/Progress/Progress.jsx'
// import { formatTime } from '@/utils/formatTime.js'
// const formatTime = (num) => {
//   let mm = parseInt(num / 60)
//   let ss = parseInt(num - mm * 60)
//   ss = ss < 10 ? `0${ss}` : ss
//   return `${mm}:${ss}`
// }

export default {
  components: {Progress},
  data () {
    return {
      // currentItem: {},
      // repeatType: 'cycle',
      // paused: false,
      // currentTime: 0,
      // duration: 0,
      // volume: 80
    }
  },
  computed: {
    ...mapState('list', ['repeatType']),
    ...mapState('player', ['volume', 'paused']),
    repeatTypeStr () {
      switch (this.repeatType) {
        case 'cycle':
          return '顺序播放'
        case 'once':
          return '单曲循环'
        case 'random':
          return '随机播放'
      }
    },
    ...mapGetters('player', [
      'leftTime',
      'currentPercentAbsolute'
    ]),
    ...mapGetters('list', {
      currentItem: 'currentMusicItem'
    })
    // leftTime () {
    //   /* NaN的情况  */
    //   return isNaN(this.duration - this.currentTime) ? '-:--' : formatTime(this.duration - this.currentTime)
    // },
    // currentPercentAbsolute () {
    //   return isNaN(this.duration - this.currentTime) ? 0 : this.currentTime / this.duration * 100
    // }
  },
  mounted () {
    // EventBus.$on('timeupdate', (currentTime, duration) => {
    //   // console.log('EventBus:' + currentTime)
    //   this.duration = duration
    //   this.currentTime = currentTime
    // })
    // EventBus.$on('loadedmetadata', duration => {
    //   // console.log('EventBus:' + currentTime)
    //   console.log('player组件响应loadedmetadata')
    //   this.duration = duration
    // })
    // EventBus.$on('setMedia', currentItem => {
    //   this.currentItem = currentItem
    // })
  },
  methods: {
    ...mapMutations('player', [
      'CHANGE_PROGRESS',
      'CHANGE_VOLUME',
      'PLAY_PAUSE'
    ]),
    ...mapMutations('list', [
      'CHANGE_REPEAT_TYPE',
      'PREV_NEXT'
    ]),
    // changeVolume (progress) {
    //   this.CHANGE_VOLUME
    //   // console.log(progress)
    //   //this.volume = progress * 100
    //   // EventBus.$emit('changeVolume', progress * 100)
    // },
    // playPause () {
    //   this.paused = !this.paused
    //   // EventBus.$emit('playPause', this.paused)
    // },
    // changeProgress (progress) {
    //   this.CHANGE_PROGRESS(progress)
    //   // console.log(progress)
    //   // let currentTime = this.duration * progress
    //   // console.log(currentTime)
    //   // EventBus.$emit('changeProgress', currentTime)
    // },
    // changeRepeatType () {
    //   let newRepeatType
    //   switch (this.repeatType) {
    //     case 'cycle':
    //       newRepeatType = 'once'
    //       break
    //     case 'once':
    //       newRepeatType = 'random'
    //       break
    //     default:
    //       newRepeatType = 'cycle'
    //   }
    //   this.repeatType = newRepeatType
    //   // EventBus.$emit('changeRepeatType', newRepeatType)
    // },
    prevNextHandler (type) {
      // EventBus.$emit('prevNext', type)
      this.PREV_NEXT(type)
    }
  }
}
</script>
