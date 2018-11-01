import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import LocalMusic from '@/components/LocalMusic'
import MoreList from '@/components/MoreList'
import MusicList from '@/components/MusicList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/Home/2',
    },
    {
      path: '/Home/:id',
      name: 'HomeIndex',
      component: Home
    },
    {
      path: '/LocalMusic/:id',
      name: 'localmusic',
      component: LocalMusic
    },
    {
      path:'/MoreList',
      name:'morelist',
      component: MoreList
    },
    {
      path: '/MusicList',
      name: 'musiclist',
      component: MusicList
    }
  ]
})
