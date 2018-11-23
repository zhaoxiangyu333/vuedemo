<template>
  <div>
    我是体组件
    <button @click="sendMsg">向父组件传值</button>
  </div>
</template>

<script>
import connect from '../connector'
export default {
  name: 'bodyView',
  methods: {
    sendMsg () {
      connect.$emit('line1', '子组件响应了')
    }
  }
}
</script>

<style scoped>

</style>
