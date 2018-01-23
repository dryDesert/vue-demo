<template>
  <div id="nav4" class="content">
    <div class="top-img">
      <img src="../../assets/img/nav4.jpg">
    </div>
    <!-- 左侧部分 -->
    <div class="main">
      <div class="main-left">
        <div class="titlelm">品牌战略</div>
          <el-menu default-active="/zlgs" class="el-menu-vertical-demo" :router="true">
              <el-menu-item index="/zlgs" :class="{'isActive': active}"><span class="iocyb"></span>战略概述</el-menu-item>
            <el-menu-item index="/ppzl" :class="{'isActive': !active}"><span class="iocyb"></span>品牌战略</el-menu-item>
            <el-menu-item index="/jtcy" :class="{'isActive': !active}"><span class="iocyb"></span>集团成员</el-menu-item>
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
        name: 'nav4',
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