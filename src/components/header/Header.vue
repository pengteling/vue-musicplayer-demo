<template>
  <div class="components-header">
    <router-link to="/">
      <img src="./logo.png" alt="logo" class="logo">
    </router-link>
    <h1 class="caption">Vue Music Player</h1>
    <!-- <div class="right">
      <router-link to="/list">列表页</router-link>
      <router-link to="/lrc">歌词页</router-link>
    </div> -->
  </div>
</template>
<script>

export default {
  // name: 'header',
  // data () {
  //   return {
  //     logoUrl: require('./logo.png')
  //   }
  // }
}
</script>

<style lang="scss">
@import "header.scss";
</style>
