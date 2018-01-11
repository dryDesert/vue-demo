import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import activePublic from '@/page/activePublic/index.vue'
// import step1 from '@/page/activePublic/step1.vue'
// import step2 from '@/page/activePublic/step2.vue'
// import step3 from '@/page/activePublic/step3.vue'
// import step4 from '@/page/activePublic/step4.vue'

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

import shehui from '@/page/right/zeren/shehui'
import dongshizhang from '@/page/right/zeren/dongshizhang'
import gongyi from '@/page/right/zeren/gongyi'
import gongxian from '@/page/right/zeren/gongxian'
import jixiao from '@/page/right/zeren/jixiao'
import baogao from '@/page/right/zeren/baogao'

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
	        component: nav5,
	        children:[
	        	{
			        path: '/shehui',
			        name:'社会责任观',
			        component: shehui
			    },
			    {
			        path: '/dongshizhang',
			        name:'董事长致辞',
			        component: dongshizhang
			    },
			    {
			        path: '/gongyi',
			        name:'公益活动',
			        component: gongyi
			    },
			    {
			        path: '/gongxian',
			        name:'社会贡献',
			        component: gongxian
			    },
			    {
			        path: '/jixiao',
			        name:'责任绩效',
			        component: jixiao
			    },
			    {
			        path: '/baogao',
			        name:'报告展望',
			        component: baogao
			    },
	        ]
	    },
	 ]
})
