<template>
  <div id="app">
    <router-view name="header"></router-view>
    <!-- <router-view name="loadplayer"></router-view> -->
    <LoadPlayer></LoadPlayer>
    <router-view/>
  </div>
</template>

<script>
import './comm.scss'
import LoadPlayer from '@/components/LoadPlayer/LoadPlayer'
export default {
  name: 'App',
  components: {
    LoadPlayer
  }
}
</script>
