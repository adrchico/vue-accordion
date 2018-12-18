import Vue from 'vue'
import Router from 'vue-router'
import Accordion from '@/components/Accordion'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accordion',
      component: Accordion
    },
    {
      path: '/',
      name: 'Header',
      component: Header
    }
  ]
})
