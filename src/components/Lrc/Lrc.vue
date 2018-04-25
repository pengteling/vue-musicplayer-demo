<template>
  <div>Lrc</div>
</template>
<script>
import { EventBus } from '@/EventBus'
export default {
  mounted () {
    EventBus.$emit('setMedia', currentItem => {
      console.log(currentItem)
      // this.url = currentItem.file
    })
  }
}
</script>
