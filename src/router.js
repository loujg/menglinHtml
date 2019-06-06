import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HelpCourse from './views/HelpCourse.vue'
import Question from './views/Question.vue'
import Attention from './views/Attention.vue'
import Contact from './views/Contact.vue'
import Xinren from './views/Xinren.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',  // 去掉网址链接中的#号
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/HelpCourse',
      name: 'HelpCourse',
      component: HelpCourse
    },
    {
      path: '/Question',
      name: 'Question',
      component: Question
    },
    {
      path: '/Attention',
      name: 'Attention',
      component: Attention
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Xinren',
      name: 'Xinren',
      component: Xinren
    }
  ]
})
