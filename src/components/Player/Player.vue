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
          <div class="left-time -col-auto">-2:35</div>
          <div class="volume-container"><i class="icon-volume rt" style="top: 5px; left: -5px;"></i>
            <div class="volume-wrapper">
              <!-- <div class="components-progress">
                <div class="progress" style="width: 80%; background: rgb(47, 152, 66);"></div>
              </div> -->
              <Progress :progress="80" barColor="#2f9842" @click="changeVolume"></Progress>
            </div>
          </div>
        </div>
        <div style="height: 10px; line-height: 10px;">
          <div class="components-progress">
            <div class="progress" style="width: 34.7861%; background: rgb(47, 152, 66);"></div>
          </div>
        </div>
        <div class="mt35 row">
          <div><i class="icon prev"></i><i class="icon ml20 play"></i><i class="icon next ml20"></i></div>
          <div class="-col-auto"><i :class="`icon repeat-${repeatType}`" :title="repeatTypeStr"></i></div>
        </div>
      </div>
      <div class="-col-auto cover"><a href="#/lrc" class=""><img :src="currentItem.cover" :alt="currentItem.title" :class="paused?'pause':'play'"></a></div>
    </div>
  </div>
</template>

<script>
import './Player.scss'
import { EventBus } from '@/EventBus'
import Progress from '@/components/Progress/Progress.jsx'
export default {
  components: {Progress},
  data () {
    return {
      currentItem: {},
      repeatType: 'cycle',
      paused: true
    }
  },
  computed: {
    repeatTypeStr () {
      switch (this.repeatType) {
        case 'cycle':
          return '顺序播放'
        case 'once':
          return '单曲循环'
        case 'random':
          return '随机播放'
      }
    }
  },
  mounted () {
    EventBus.$on('timeupdate', currentTime => {
      console.log('EventBus:' + currentTime)
    })
    EventBus.$on('setMedia', currentItem => {
      this.currentItem = currentItem
    })
  },
  methods: {
    changeVolume (progress) {
      console.log(progress)
    }
  }
}
</script>
