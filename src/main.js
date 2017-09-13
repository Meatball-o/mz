// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import { Carousel, CarouselItem } from 'vue-l-carousel'
// 通用header footer
import Layout from './components/layout.vue'
// 首页
import IndexPage from './pages/index'
// 魅族商城
import MallPage from './pages/mall'
// 服务
import ServePage from './pages/serve'
// 专卖店
import StorePage from './pages/store'
// 跳转的第一个Flyme
import FlymePage from './pages/flyme'
// 社区
import CommunityPage from './pages/community'
// 详情页
import DetailPage from './pages/detail'
// 登录
import LoginPage from './pages/login'
// 魅友福利
import BoonPage from './pages/boon'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

// /* eslint-disable no-new */
let router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      meta: {
        footerA: true, footerB: false,
        headerA: true, headerB: false
      },
      component: IndexPage
    },
    {
      path: '/mall',
      component: MallPage,
      meta: {
        footerA: false, footerB: true,
        headerA: false, headerB: true
      },
    },
    {
      path: '/serve',
      component: ServePage,
      meta: {
        footerA: true, footerB: false,footerC: false,
        headerA: true, headerB: false
      },
    },
    {
      path: '/store',
      component: StorePage,
      meta: {
        footerA: true, footerB: false,footerC: false,
        headerA: true, headerB: false
      },
    },
    {
      path: '/flyme',
      component: FlymePage,
      meta: {
        footerA: false, footerB: false,footerC: true,
        headerA: true, headerB: false
      },
    },
    {
      path: '/community',
      component: CommunityPage,
      meta: {
        footerA: false, footerB: false,footerC: false,
        headerA: true, headerB: false
      },
    },
    {
      path: '/detail',
      component: DetailPage,
      meta: {
        footerA: false, footerB: true,footerC: false,
        headerA: false, headerB: true,
      },
    },
    {
      path: '/login',
      component: LoginPage,
      meta: {
        footerA: false, footerB: false,footerC: true,
        headerA: false, headerB: false
      },
    },
    {
      path: '/boon',
      component: BoonPage,
      meta: {
        footerA:false, footerB: false,footerC: true,
        headerA: false, headerB: false
      },
    }
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {Layout},
  // render: h => h(App)
})
