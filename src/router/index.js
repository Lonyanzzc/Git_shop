import Vue from 'vue'
import VueRouter from 'vue-router'

// import home from '../views/home/home.vue'
import shopCar from '../views/shopcar/shopCar.vue'
import profile from '../views/profile/profile.vue'
import categroy from '../views/categroy/Category.vue'
import detail from '../views/detail/detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home',
  },
  {
    path:'/home',
    component: (resolve) => {
      console.log("router");
      return require(["../views/home/home.vue"],resolve)
    },
  },
  {
    path:'/shopCar',
    component: shopCar,
  },
  {
    path:'/categroy',
    component: categroy,
  },
  {
    path:'/profile',
    component: profile,
  },
  {
    path:'/detail/:id',
    component: detail,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
