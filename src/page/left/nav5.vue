<template>
	<!-- 左侧部分 -->
	<div class="main-left">
	    <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
	        <el-menu-item index="/activePublic" :class="{'isActive': active}">活动发布</el-menu-item>
	    	<el-menu-item index="/activeManage" :class="{'isActive': !active}">活动管理</el-menu-item>
	    </el-menu>
	</div>
	<!-- 右侧部分 -->
	<div  class="main-right" >
        <router-view class="view"></router-view>
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
<style>
	.main-left{text-align: center;width: 200px;float: left;}
    .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; }
    .el-menu{background-color: transparent!important;}
</style>