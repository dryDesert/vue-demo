<template>
  <div id="nav2" class="content">
    <div class="top-img">
      <img src="../../assets/img/nav2.jpg">
    </div>
    <!-- 左侧部分 -->
    <div class="main">
      <div class="main-left">
        <div class="titlelm">走进茅台</div>
          <el-menu default-active="/maotai" class="el-menu-vertical-demo" :router="true">
              <el-menu-item index="/jituan" :class="{'isActive': active}"><span class="iocyb"></span>集团介绍</el-menu-item>
            <el-menu-item index="/lingdao" :class="{'isActive': !active}"><span class="iocyb"></span>领导简介</el-menu-item>
            <el-menu-item index="/zuzhi" :class="{'isActive': !active}"><span class="iocyb"></span>组织结构</el-menu-item>
            <el-menu-item index="/wenhua" :class="{'isActive': !active}"><span class="iocyb"></span>文化理念</el-menu-item>
            <el-menu-item index="/licheng" :class="{'isActive': !active}"><span class="iocyb"></span>发展历程</el-menu-item>
            <el-menu-item index="/yeji" :class="{'isActive': !active}"><span class="iocyb"></span>经营业绩</el-menu-item>
            <el-menu-item index="/guihua" :class="{'isActive': !active}"><span class="iocyb"></span>发展规划</el-menu-item>
            <el-menu-item index="/maotai" :class="{'isActive': !active}"><span class="iocyb"></span>美丽茅台</el-menu-item>
            <el-menu-item index="/chengyuan" :class="{'isActive': !active}"><span class="iocyb"></span>集体成员</el-menu-item>
            <el-menu-item index="/lianxi" :class="{'isActive': !active}"><span class="iocyb"></span>联系我们</el-menu-item>
            <el-menu-item index="/kaipiao" :class="{'isActive': !active}"><span class="iocyb"></span>开票信息</el-menu-item>
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
        name: 'nav2',
        data: function (){
          return {
              active:true
          }
        },
        created:function(){
          this.$router.push('maotai'); // 页面加载时跳转
        }
    }
</script>
<style lang="scss">
    @import './left'
</style>