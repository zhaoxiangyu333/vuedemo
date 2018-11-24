<template>
<div></div>
</template>

<script>
export default {
  name: 'stu43',
  data () {
    return {

    }
  },
  created () {
    this.$axios.post('/getAllInfo.action', {
      params: {
      },
      headers: {
      }

    })
      .then(res => {
      })
      .catch(er => {
      })
  }
}
</script>

<style scoped>

</style>
