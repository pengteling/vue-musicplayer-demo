<template>
  <div>
    <!-- <mplayer
      ref="mplayer"
      :url="url"
      :autoplay="autoplay"
      :paused="paused"
      :volume="volume"
      @timeupdate="timeupdate"
      @loadedmetadata="loadedmetadata"
    /> -->
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
      autoplay: true,
      paused: false,
      volume: 80,
      url: ''

    }
  },
  methods: {
    timeupdate (currentTime) {
      EventBus.$emit('timeupdate', currentTime)
    },
    loadedmetadata (duration) {

    }

  },
  mounted () {
    // 严重错误 $on 写成 $emit
    // EventBus.$emit('setMedia', currentItem => {
    EventBus.$on('setMedia', currentItem => {
      // console.log(currentItem)
      this.url = currentItem.file
    })
  }

}
</script>
