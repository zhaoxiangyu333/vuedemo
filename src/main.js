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

Vue.config.productionTip = false

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
