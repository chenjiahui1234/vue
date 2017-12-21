import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/table'
import Banner from '@/components/tab'
import Nav from '@/components/nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    }
  ]
})
