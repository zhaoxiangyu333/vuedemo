<template>
  <!--拦截器操作loading图标例子-->
  <div>
    <button @click="sentMsg">点击查看loadding</button>
  </div>
</template>

<script>
export default {
  name: 'stu51',
  methods: {
    sentMsg () {
      this.$axios.post('getAllInfo.action', 'index=1', {
        headers: {
          'content-type': 'application/x-www-form-urlencodel'
        }
      })
        .then(res => {})
        .catch(er => {})
    }
  }
}
</script>

<style scoped>

</style>
