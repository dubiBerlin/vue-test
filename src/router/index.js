import Vue from 'vue'
import Router from 'vue-router'
import MessageList from '@/components/MessageList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MessageList',
      component: MessageList
    }
  ]
})
