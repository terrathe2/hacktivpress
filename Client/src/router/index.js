import Vue from 'vue'
import Router from 'vue-router'
import Articles from '@/components/Articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:id',
      name: 'Hello',
      component: Articles,
      props: true
    }
  ]
})
