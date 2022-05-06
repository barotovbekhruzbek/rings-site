import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'



const routes = [
  {
    path: '/',
  name : 'Home',
  component: Home
  },
  {
    path: '/blog',  
    name: 'Blog',
    component: () => import('../views/blog/Blog.vue')
  },
   {
    path: '/blogpost',  
    name: 'BlogPost',
    component: () => import('../views/blog/BlogPost.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
