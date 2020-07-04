import LoginWay from '@/pages/login/LoginWay'
import Login from '@/pages/login/Login'

import Recruit from '@/pages/home/Recruit'
import Activity from '@/pages/home/Activity'
import Search from '@/pages/home/Search'
import PostDetail from '@/pages/home/PostDetail'

import Club from '@/pages/club'
import ClubClass from '@/pages/explore/ClubClass'

import Management from '@/pages/profile/Management'
import Setting from '@/pages/profile/Setting'
import Follow from '@/pages/profile/Follow'
import Post from '@/pages/profile/Post'
import MyClub from '@/pages/profile/MyClub'
import MyActivity from '@/pages/profile/MyActivity'

export default [
  { name: 'LoginWay', component: LoginWay },
  { name: 'Login', component: Login },

  { name: 'Search', component: Search },
  { name: 'Club', component: Club },
  { name: 'PostDetail', component: PostDetail },
  { name: 'ClubClass', component: ClubClass, title: '分类', headerShown: true },

  {
    name: 'Management',
    component: Management,
    title: '社团管理',
    headerShown: true,
  },
  { name: 'Setting', component: Setting, title: '应用设置', headerShown: true },
  { name: 'Recruit', component: Recruit, title: '社团招新', headerShown: true },

  {
    name: 'Activity',
    component: Activity,
    title: '社团活动',
    headerShown: true,
  },
  {
    name: 'Follow',
    component: Follow,
    title: '我的关注',
    headerShown: true,
  },
  { name: 'Post', component: Post },
  { name: 'MyClub', component: MyClub, title: '我的社团', headerShown: true },
  {
    name: 'MyActivity',
    component: MyActivity,
    title: '我的活动',
    headerShown: true,
  },
]
