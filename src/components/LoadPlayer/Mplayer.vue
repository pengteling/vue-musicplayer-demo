<template>
  <div class="mplayer">
    <audio
      ref="player"
      :src="url"
      @timeupdate="timeupdate"
      @loadedmetadata="loadedmetadata"
      @ended="ended"
    />
  </div>
</template>
<script>

export default {
  name: 'Mplayer',
  props: {
    url: {
      type: String,
      required: true
    },
    // autoplay: {
    //   type: Boolean
    // },
    paused: {
      type: Boolean
    },
    volume: {
      required: true
    },
    changeCurrentTime: {
      type: Number
    }
  },
  data () {
    return {

    }
  },
  computed: {
    audio () {
      return this.$refs.player
    }
  },
  mounted () {
    this.audio.oncanplay = () => {
      if (!this.paused) {
        this.audio.play()
      }
    }
    this.changeVolume(this.volume)
  },
  updated () {
    console.log('mplayer updated')
  },
  watch: {
    'paused' () {
      console.log('paused updated ')
      this.playPause()
    },
    'volume' () {
      this.changeVolume(this.volume)
    },
    'changeCurrentTime' () {
      this.audio.currentTime = this.changeCurrentTime
    }

  },
  methods: {
    playPause () {
      if (this.audio.paused) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
    },
    timeupdate () {
      // console.log(this.audio.currentTime)
      /* 解决路由切换时 总播放时长丢失 */
      this.$emit('timeupdate', this.audio.currentTime, this.audio.duration)
    },
    changeVolume (volume) {
      this.audio.volume = volume / 100
    },
    loadedmetadata () {
      console.log(this.audio.duration)
      this.$emit('loadedmetadata', this.audio.duration)
    },
    ended () {
      this.$emit('ended')
    }
  }

}
</script>
