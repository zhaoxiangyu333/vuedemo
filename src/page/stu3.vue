<template>
<!--过滤器-->
  <div>
    翻转<br>
    <input type="text" v-model="blztext">
    {{blztext | myFilter1}}
    <hr>
    获取DOM元素
    <br>
    <div ref="domOrgin"></div>
    <footer-view></footer-view>
    <hr>
    mint-ui
    <br>
    <mt-header title="multiple button">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
        <mt-button @click="handleClose">close</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-switch v-model="value"></mt-switch>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <hr>
    <h1><router-link to="/stu41">下一部分教程</router-link></h1>
  </div>
</template>

<script>
import footerView from '../components/footer'
export default {
  name: 'stu3',
  data () {
    return {
      blztext: '',
      value: false
    }
  },
  filters: {
    myFilter1: function (value) {
      return value.split('').reverse().join('')
    }
  },
  components: {
    footerView: footerView
  },
  created () {
    console.log(this.$refs.domOrgin)
  },
  mounted () {
    console.log(this.$refs.domOrgin)
    this.$refs.domOrgin.innerHTML = '<a>百度</a>'
  },
  methods: {
    handleClose () {

    }
  }
}
</script>

<style scoped>

</style>
