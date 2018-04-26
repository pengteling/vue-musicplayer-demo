<template>
  <div>
    <ul>
      <MusicItem
        v-for="item in musicList"
        :key="item.id"
        :musicItem="item"
        :focus="item===currentItem"

      />
    </ul>
  </div>
</template>
<script>
import './List.scss'
import { EventBus } from '@/EventBus'
import MusicItem from './MusicItem.jsx'
export default {
  data () {
    return {
      musicList: [],
      currentItem: {}
    }
  },
  components: {
    MusicItem
  },
  mounted () {
    EventBus.$on('getList', data => {
      this.musicList = data.musicList
      this.currentItem = data.currentItem
    })
  }
}
</script>
