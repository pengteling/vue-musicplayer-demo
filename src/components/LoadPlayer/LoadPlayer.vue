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
import { EventBus } from '@/EventBus'
import Mplayer from './Mplayer'
export default {
  components: {
    Mplayer
  },
  data () {
    return {
      // autoplay: true,
      paused: false,
      volume: 80,
      url: '',
      changeCurrentTime: 0
    }
  },
  methods: {
    timeupdate (currentTime, duration) {
      EventBus.$emit('timeupdate', currentTime, duration)
    },
    loadedmetadata (duration) {
      EventBus.$emit('loadedmetadata', duration)
    },
    ended () {
      EventBus.$emit('ended')
    }

  },
  mounted () {
    // 严重错误 $on 写成 $emit
    // EventBus.$emit('setMedia', currentItem => {
    EventBus.$on('setMedia', currentItem => {
      // console.log(currentItem)
      this.url = currentItem.file
    })
    EventBus.$on('playPause', paused => {
      this.paused = paused
    })
    EventBus.$on('changeProgress', currentTime => {
      console.log('load:' + currentTime)
      this.changeCurrentTime = currentTime
      /* 通过调用子组件的方法 */
      // this.$refs.mplayer.changeProgress(currentTime)
    })
    EventBus.$on('changeVolume', volume => {
      this.volume = volume
    })
  }

}
</script>
