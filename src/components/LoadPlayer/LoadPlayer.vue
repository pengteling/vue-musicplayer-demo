<template>
  <div>
    <mplayer
      ref="mplayer"
      url="http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3"
      :autoplay="autoplay"
      :paused="paused"
      :volume="volume"
      @timeupdate="timeupdate"
      @loadedmetadata="loadedmetadata"
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
      autoplay: true,
      paused: false,
      volume: 80

    }
  },
  methods: {
    timeupdate (currentTime) {
      EventBus.$emit('timeupdate', currentTime)
    },
    loadedmetadata (duration) {

    }

  }

}
</script>
