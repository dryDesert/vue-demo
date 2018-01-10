<template>
	<div class="main-left">
	    <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
	        <el-menu-item index="/activePublic" :class="{'isActive': active}">活动发布4</el-menu-item>
	    	<el-menu-item index="/activeManage" :class="{'isActive': !active}">活动管理4</el-menu-item>
	    </el-menu>
	</div>
</template>
<script>
    export default {
      name: 'nav4',
      data: function (){
        return {
          active:true
        }
      }
    }
</script>