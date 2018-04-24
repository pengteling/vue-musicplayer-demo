<template>
  <div class="components-header">
    <router-link to="/">
      <img :src="logoUrl" alt="logo" class="logo">
    </router-link>
    <h1 class="caption">Vue Music Player</h1>
  </div>
</template>
<script>

export default {
  // name: 'header',
  data () {
    return {
      logoUrl: require('./logo.png')
    }
  }
}
</script>

<style lang="scss">
@import "header.scss";
</style>
