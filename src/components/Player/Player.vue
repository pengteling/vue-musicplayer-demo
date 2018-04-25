<template>
  <div>player</div>
</template>
<script>
import { EventBus } from '@/EventBus'
export default {
  mounted () {
    EventBus.$on('timeupdate', (currentTime) => {
      console.log('EventBus:' + currentTime)
    })
  }
}
</script>
