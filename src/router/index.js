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

// import footers from '@/page/left/footers.vue'

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

import jituan from '@/page/right/about/jituan'
import lingdao from '@/page/right/about/lingdao'
import zuzhi from '@/page/right/about/zuzhi'
import wenhua from '@/page/right/about/wenhua'
import licheng from '@/page/right/about/licheng'
import yeji from '@/page/right/about/yeji'
import guihua from '@/page/right/about/guihua'
import maotai from '@/page/right/about/maotai'
import chengyuan from '@/page/right/about/chengyuan'
import lianxi from '@/page/right/about/lianxi'
import kaipiao from '@/page/right/about/kaipiao'

import xwzx from '@/page/right/news/xwzx'
import gonggao from '@/page/right/news/gonggao'
import jtxw from '@/page/right/news/jtxw'
import hangye from '@/page/right/news/hangye'
import meiti from '@/page/right/news/meiti'
import zhaopin from '@/page/right/news/zhaopin'

import zlgs from '@/page/right/pinpai/zlgs'
import ppzl from '@/page/right/pinpai/ppzl'
import jtcy from '@/page/right/pinpai/jtcy'

Vue.use(Router)

export default new Router({
	routes: [
	    {
	        path: '/nav1',
	        name:'首页',
	        component: nav1
	    },
	    {
	        path: '/nav2',
	        name:'走进茅台',
	        component: nav2,
	        children:[
	        	{
			        path: '/jituan',
			        name:'集团介绍',
			        component: jituan
			    },
			    {
			        path: '/lingdao',
			        name:'领导介绍',
			        component: lingdao
			    },
			    {
			        path: '/zuzhi',
			        name:'组织结构',
			        component: zuzhi
			    },
			    {
			        path: '/wenhua',
			        name:'文化理念',
			        component: wenhua
			    },
			    {
			        path: '/licheng',
			        name:'发展历程',
			        component: licheng
			    },
			    {
			        path: '/yeji',
			        name:'经营业绩',
			        component: yeji
			    },
			    {
			        path: '/guihua',
			        name:'发展规划',
			        component: guihua
			    },
			    {
			        path: '/maotai',
			        name:'美丽茅台',
			        component: maotai
			    },
			    {
			        path: '/chengyaun',
			        name:'集体成员',
			        component: chengyuan
			    },
			    {
			        path: '/lianxi',
			        name:'联系我们',
			        component: lianxi
			    },
			    {
			        path: '/kaipiao',
			        name:'开票信息',
			        component: kaipiao
			    }
	        ]
	    },
	    {
	        path: '/nav3',
	        name:'新闻资讯',
	        component: nav3,
	        children:[
	        	{
			        path: '/xwzx',
			        name:'新闻资讯总',
			        component: xwzx
			    },
	        	{
			        path: '/gonggao',
			        name:'公告告示',
			        component: gonggao
			    },
			    {
			        path: '/jtxw',
			        name:'集团新闻',
			        component: jtxw
			    },
			    {
			        path: '/hangye',
			        name:'行业动态',
			        component: hangye
			    },
			    {
			        path: '/meiti',
			        name:'媒体聚焦',
			        component: meiti
			    },
			    {
			        path: '/zhaopin',
			        name:'招聘公告',
			        component: zhaopin
			    }
		    ]
	    },
	    {
	        path: '/nav4',
	        name:'品牌战略',
	        component: nav4,
	        children:[
	        	{
			        path: '/zlgs',
			        name:'战略概述',
			        component: zlgs
			    },
			    {
			        path: '/ppzl',
			        name:'品牌战略',
			        component: ppzl
			    },
			    {
			        path: '/jtcy',
			        name:'集团成员',
			        component: jtcy
			    }
		    ]
	    },
	    {
	        path: '/nav5',
	        name:'社会责任',
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
