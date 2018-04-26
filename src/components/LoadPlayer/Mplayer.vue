<template>
  <div class="mplayer">
    <audio
      ref="player"
      :src="url"
      @timeupdate="timeupdate"
      @loadedmetadata="loadedmetadata"
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
    autoplay: {
      type: Boolean
    },
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
    if (this.autoplay) {
      this.audio.oncanplay = () => {
        this.audio.play()
      }
      this.changeVolume(this.volume)
    }
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
      this.$emit('timeupdate', this.audio.currentTime)
    },
    changeVolume (volume) {
      this.audio.volume = volume / 100
    },
    loadedmetadata () {
      console.log(this.audio.duration)
      this.$emit('loadedmetadata', this.audio.duration)
    }
  }

}
</script>
