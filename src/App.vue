<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view/>
  </div>
</template>

<script>
import './comm.scss'
export default {
  name: 'App'
}
</script>
