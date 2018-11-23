import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import stu1 from '../page/stu1'
import stu2 from '../page/stu2'

Vue.use(Router)

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
    }
  ]
})
