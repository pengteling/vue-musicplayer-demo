<template>
  <div>
    <mplayer
      ref="mplayer"
      :url="url"
      :paused="paused"
      :volume="volume"
      :changeCurrentTime="changeCurrentTime"
      @timeupdate="timeupdate"
      @loadedmetadata="loadedmetadata"
      @ended="ended"
    />
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
// import { EventBus } from '@/EventBus'
import Mplayer from './Mplayer'
export default {
  components: {
    Mplayer
  },
  /* data () {
    return {
      // autoplay: true,
      paused: false,
      volume: 80,
      url: '',
      changeCurrentTime: 0
    }
  }, */
  computed: {
    ...mapState('player', [
      'paused',
      'volume',
      'changeCurrentTime'
    ]),
    ...mapState('list', [
      'repeatType'
    ]),
    ...mapGetters('list', {
      url: 'currentFile'
    })
  },
  methods: {
    ...mapActions('list', ['loadData']),
    ...mapMutations('player', [
      'SET_CURRENT_TIME',
      'SET_DURATION',
      'CHANGE_PROGRESS'
    ]),
    ...mapMutations('list', ['PREV_NEXT']),
    timeupdate (currentTime, duration) {
      // EventBus.$emit('timeupdate', currentTime, duration)
      this.SET_CURRENT_TIME(currentTime)
    },
    loadedmetadata (duration) {
      this.SET_DURATION(duration)
      // EventBus.$emit('loadedmetadata', duration)
    },
    ended () {
      // EventBus.$emit('ended')
      if (this.repeatType === 'once') {
        // EventBus.$emit('changeProgress', 0)
        this.CHANGE_PROGRESS(0)
      } else {
        // this.prevNextHandler('next')
        this.PREV_NEXT('next')
      }
    }

  },
  mounted () {
    this.loadData()
    // 严重错误 $on 写成 $emit
    // EventBus.$emit('setMedia', currentItem => {
    // EventBus.$on('setMedia', currentItem => {
    //   // console.log(currentItem)
    //   this.url = currentItem.file
    // })
    // EventBus.$on('playPause', paused => {
    //   this.paused = paused
    // })
    // EventBus.$on('changeProgress', currentTime => {
    //   console.log('load:' + currentTime)
    //   this.changeCurrentTime = currentTime
    //   /* 通过调用子组件的方法 */
    //   // this.$refs.mplayer.changeProgress(currentTime)
    // })
    // EventBus.$on('changeVolume', volume => {
    //   this.volume = volume
    // })
  }

}
</script>
