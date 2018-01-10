<template>
	<div>
    <main>
      <div class="main-left">
        <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/activePublic" :class="{'isActive': active}">活动发布</el-menu-item>
          <el-menu-item index="/activeManage" :class="{'isActive': !active}">活动管理</el-menu-item>
        </el-menu>
      </div>
      <router-view class="view"></router-view>
    </main>
  </div>
</template>
<script>
    export default {
      name: 'nav1',
      data: function (){
        return {
          active:true
        }
      }
    }
</script>
<style>
 .main-left{
   float: left;
   width: 150px;
   background: #4285f4;
 }
 .view {
   margin-left: 150px;
 }
</style>
