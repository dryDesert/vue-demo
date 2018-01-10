import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import activePublic from '@/page/activePublic/index.vue'
import step1 from '@/page/activePublic/step1.vue'
import step2 from '@/page/activePublic/step2.vue'
import step3 from '@/page/activePublic/step3.vue'
import step4 from '@/page/activePublic/step4.vue'

import activeManage from '@/page/activeManage/index.vue'
import detail from '@/page/activeManage/detail.vue'
import page1 from '@/page/activeManage/page1.vue'
import page2 from '@/page/activeManage/page2.vue'
import page3 from '@/page/activeManage/page3.vue'
import page4 from '@/page/activeManage/page4.vue'
import totalpages from '@/page/activeManage/totalpages.vue'

import nav1 from '@/page/left/nav1.vue'
import nav2 from '@/page/left/nav2.vue'
import nav3 from '@/page/left/nav3.vue'
import nav4 from '@/page/left/nav4.vue'
import nav5 from '@/page/left/nav5.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/nav1',
        name:'高级插件',
        component: nav1
    },
    {
        path: '/nav2',
        name:'在线商城',
        component: nav2
    },
    {
        path: '/nav3',
        name:'客户管理',
        component: nav3
    },
    {
        path: '/nav4',
        name:'系统设置',
        component: nav4
    },
    {
        path: '/nav5',
        name:'活动发布',
        component: nav5
    },
    {
        path: '/activePublic',
        name:'活动',
        component: activePublic,
        children:[
        	{
		        path: '',
		        name:'步骤一',
		        component: step1
		    },
		    {
		        path: 'step2',
		        name:'步骤二',
		        component: step2
		    },
		    {
		        path: 'step3',
		        name:'步骤三',
		        component: step3
		    },
		    {
		        path: 'step4',
		        name:'步骤四',
		        component: step4
		    }
        ]
    },
    {
        path: '/activeManage',
        name:'管理',
        component: activeManage,
        children:[
        	{
		        path: 'detail',
		        name:'细节',
		        component: detail
		    },
		    {
		        path: 'page1',
		        name:'页面一',
		        component: page1
		    },
		    {
		        path: 'page2',
		        name:'页面二',
		        component: page2
		    },
		    {
		        path: 'page3',
		        name:'页面三',
		        component: page3
		    },
		    {
		        path: 'step4',
		        name:'页面四',
		        component: step4
		    },
		    {
		        path: 'totalpages',
		        name:'总页面',
		        component: totalpages
		    }
        ]
    },
  ]
})
