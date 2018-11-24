<template>
<div>
  <ul>
    <li v-for="(hero,index) in heros" :key="index">
      {{hero.name}}<router-link :to="{name:'stu42',params:{index:index}}">详情</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'stu41',
  data () {
    return {
      heros: [{name: '李白'}, {name: '王昭君'}]
    }
  }
}
</script>

<style scoped>

</style>
