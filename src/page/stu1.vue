<template>
  <div>
    <pre>
      v-text  innerText，只能在双标签中使用
      v-html  innerHtml,不能有<!--{{}}-->表达式
      v-if    元素是否移除或者插入
      v-show  元素是否显示或隐藏
      v-model 双向数据绑定，v-blind单向数据绑定（js内存改变影响页面）
      v-bind  1)一般和class绑定使用
              2)v-bind:属性名="表达式"
              3)简化写法： :属性名="表达式"
      v-on    1)绑定事件的方法
              2)v-on:事件名="表达式||函数名"
              3)简化写法： @事件名="表达式||函数名"
              4)函数名如果没有参数可以省略"()"
      v-for   1)循环：操作数组(item,index) || 操作对象(value,key,index)
      补充：push可向数组对象添加数据，splice可从数组对象删除数据
    </pre>
    v-text
    <span v-text="blztext"></span>
    <hr>
    v-html
    <span v-html="blzhtml"></span>
    <hr>
    v-if/v-show
    <div v-if="isShow" style="height:30px; background-color: black;"></div>
    <hr>
    v-model
    <br>
    <input type="text" v-model="blzmodeltest">
    <p>{{blzmodeltest}}</p>
    <hr>
    v-bind
    <br>
    <div v-bind:class="isGreen?'green':'red'">单个class</div>
    <div v-bind:class="{'red':true,'big':true}">多个class</div>
    练习：根据学生的成绩分配不同的颜色
    <ul>
      <li v-for="(stu,index) in stus" v-bind:class="{'A':'green','B':'red'}[stu.score]" :key="index">{{stu.name}}</li>
    </ul>
    <hr>
    v-on
    <br>
    <button @click="change(1)">点击触发change函数</button>
    <hr>
    v-for
    <br>
    1) 处理数组
    <ul>
      <li v-for="(stu,index) in stus" :key="index">{{index}}---{{stu}}</li>
    </ul>
    2) 处理对象
    <ul>
      <li v-for="(value,key,index) in persion" :key="index">{{index}}---{{key}}---{{value}}</li>
    </ul>
    <hr>

    <h1>
      <router-link to="/stu2">下一部分教程</router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'stu1',
  data () {
    return {
      blztext: 'v-text-test',
      blzhtml: '<ul>' +
          '<li>1</li><li>2</li>' +
          '</ul>',
      isShow: false,
      blzmodeltest: '',
      isGreen: true,
      stus: [
        {name: 'zs', score: 'A'},
        {name: 'ls', score: 'B'},
        {name: 'ww', score: 'A'},
        {name: 'zl', score: 'B'},
        {name: 'hh', score: 'B'},
        {name: 'xx', score: 'A'},
        {name: 'qaq', score: 'A'}
      ],
      persion: {name: '张三', age: 19}
    }
  },
  // 当前组件的方法
  methods: {
    // 函数名为key，函数体为value
    change (value) {
      // 在script中使用变量或者函数需要加this，template中则不需要引入
      this.isShow = !this.isShow
      // alert(value)
    }
  }
}
</script>

<style scoped>
  .green {
    background-color: green;
  }

  .red {
    background-color: red;
  }

  .big {
    font-size: 50px;
  }
</style>
