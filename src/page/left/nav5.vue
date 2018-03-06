<template>
	<div id="nav5" class="content">
		<div class="top-img">
			<img src="../../assets/img/nav5.jpg">
		</div>
		<!-- 左侧部分 -->
		<div class="main">
			<div class="main-left">
				<div class="titlelm">新闻资讯</div>
			    <el-menu default-active="/dongshizhang" class="el-menu-vertical-demo" :router="true">
			        <el-menu-item index="/shehui" :class="{'isActive': active}"><span class="iocyb"></span>公告公示</el-menu-item>
			    	<el-menu-item index="/dongshizhang" :class="{'isActive': !active}"><span class="iocyb"></span>招聘计划</el-menu-item>
			    	<el-menu-item index="/gongyi" :class="{'isActive': !active}"><span class="iocyb"></span>公司新闻</el-menu-item>
			    	<el-menu-item index="/gongxian" :class="{'isActive': !active}"><span class="iocyb"></span>市场活动</el-menu-item>
			    	<el-menu-item index="/jixiao" :class="{'isActive': !active}"><span class="iocyb"></span>媒体聚焦</el-menu-item>
			    	<el-menu-item index="/baogao" :class="{'isActive': !active}"><span class="iocyb"></span>行业动态</el-menu-item>
			    </el-menu>
			</div>
			<!-- 右侧部分 -->
			<div  class="main-right" >
		        <router-view class="view"></router-view>
		    </div>
		</div>

		<!-- <Footers></Footers> -->
	</div>
</template>
<script>
    export default {
        name: 'nav5',
        data: function (){
        	return {
          		active:true
        	}
        }
    }
</script>
<style lang="scss">
    @import './left'
</style>
