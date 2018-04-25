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
    EventBus.$emit('setMedia', currentItem => {
      // console.log(currentItem)
      this.url = currentItem.file
    })
  }

}
</script>
