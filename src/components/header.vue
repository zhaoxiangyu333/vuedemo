<template>
  <div>我是头组件,父组件传值{{parentHeaderText}}</div>
</template>

<script>
export default {
  name: 'headerView',
  props: ['parentHeaderText']
}
</script>

<style scoped>

</style>
