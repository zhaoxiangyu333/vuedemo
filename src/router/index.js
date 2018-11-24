import Vue from 'vue'
import Router from 'vue-router'
// 页面主体
import stu1 from '../page/stu1'
import stu2 from '../page/stu2'
import stu3 from '../page/stu3'
import stu41 from '../page/stu4/stu41'
import stu42 from '../page/stu4/stu42'
import stu43 from '../page/stu4/stu43'
import stu51 from '../page/stu5/stu51'
import stu52 from '../page/stu5/stu52'
import notFoundView from '../components/notFoundView'

// 安装vue-router插件，并挂在其属性
Vue.use(Router)

// 创建路由对象并配置路由规则
export default new Router({
  routes: [
    {
      path: '/',
      name: 'stu1',
      component: stu1
    },
    {
      path: '/stu2',
      name: 'stu2',
      component: stu2
    },
    {
      path: '/stu3',
      name: 'stu3',
      component: stu3
    },
    {
      path: '/stu41',
      name: 'stu41',
      component: stu41
    },
    {
      path: '/stu42/:index',
      name: 'stu42',
      component: stu42
    },
    {
      path: '/stu43',
      name: 'stu43',
      component: stu43
    },
    {
      path: '/stu51',
      name: 'stu51',
      component: stu51
    },
    {
      path: '/stu52',
      name: 'stu52',
      component: stu52
    },
    {
      path: '*',
      component: notFoundView
    }
  ]
})
