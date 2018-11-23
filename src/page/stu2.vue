<template>
  <!--父子组件-->
  <div>
    <h1>父子件传值</h1>
    <header-view :parentHeaderText="parentHeaderText"></header-view>
    <h1>父子组件通信</h1>
    <body-view></body-view>
    <button @click="listen">父组件响应通信</button>
    <footer-view></footer-view>
  </div>
</template>

<script>
import connect from '../connector'
export default {
  name: 'stu2',
  data () {
    return {
      parentHeaderText: '父组件stu2.vue'
    }
  },
  methods: {
    listen () {
      connect.$on('line1', function (str) {
        console.log(str)
      })
    }
  }
}
</script>

<style scoped>

</style>
