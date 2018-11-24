<template>
  <!--计算属性-->
<div>
  watch单变量监视<br>
  <button @click="changeValue">改变值</button>
  <hr>
  computed多变量监视<br>
  单价：<input type="text" v-model="price">
  数量：<input type="text" v-model="num">
  折扣：<input type="text" v-model="discount">
  总价：{{sum.name}}{{sum.sum}}
  <hr>
</div>
</template>

<script>
export default {
  name: 'stu52',
  data () {
    return {
      text: '',
      persion: [
        {name: 'js'},
        {name: 'html'}
      ],
      price: 0,
      num: 0,
      discount: 0
    }
  },
  methods: {
    changeValue () {
      this.text = 'abc'
      this.persion[0].name = 'hah'
    }
  },
  // 单个变量的监视
  watch: {
    text: function (val, oldVal) {
      console.log('值改变了', val + '----' + oldVal)
    },
    // 深度watcher
    persion: {
      handler: function (val, oldVal) {
        console.log('旧值' + oldVal + '--新值' + val)
      },
      deep: true
    }
  },
  computed: {
    sum () {
      return {
        name: '测试商品',
        sum: ((this.price * this.num) * this.discount) / 100.0
      }
    }
  }
}
</script>

<style scoped>

</style>
