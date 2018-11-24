// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue
import Vue from 'vue'
// 引入app.vue
import App from './App'
import router from './router'
// 全局组件声明
import headerView from './components/header'
import bodyView from './components/body'
import footerView from './components/footer'
// 引入mint-ui
import MintUi from 'mint-ui'
// 引入mint-ui的样式
import 'mint-ui/lib/style.css'
// 引入axios
import Axios from 'axios'

Vue.config.productionTip = false
// 创建全局过滤器
// Vue.filter('globeFilter', function (value) {
//   return '我是全局过滤器' + value
// })

// 安装minu-ui插件
Vue.use(MintUi)
// 设置Axios默认端口api
Axios.defaults.baseURL = 'http://localhost:8080'
// Vue原型挂载属性
Vue.prototype.$axios = Axios

// 拦截器
Axios.interceptors.request.use(function (config) {
  console.log(config)
  MintUi.Indicator.open()
  return config
})
Axios.interceptors.response.use(function (config) {
  console.log(config)
  MintUi.Indicator.close()
  return config
})

// 全剧组建声明
Vue.component('headerView', headerView)
Vue.component('bodyView', bodyView)
Vue.component('footerView', footerView)
/* eslint-disable no-new */
// 构建vue实例
new Vue({
  // 渲染内容的目的地
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
