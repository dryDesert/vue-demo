<template>
  <div id="nav3" class="content">
    <div class="top-img">
      <img src="../../assets/img/nav3.jpg">
    </div>
    <div class="main">
      <!-- 左侧部分 -->
      <div class="main-left">
        <div class="titlelm">新闻资讯</div>
          <el-menu default-active="/xwzx" class="el-menu-vertical-demo" :router="true">
            <el-menu-item index="/gonggao" :class="{'isActive': active}"><span class="iocyb"></span>公告公示</el-menu-item>
            <el-menu-item index="/jtxw" :class="{'isActive': !active}"><span class="iocyb"></span>集体新闻</el-menu-item>
            <el-menu-item index="/hangye" :class="{'isActive': !active}"><span class="iocyb"></span>行业动态</el-menu-item>
            <el-menu-item index="/meiti" :class="{'isActive': !active}"><span class="iocyb"></span>媒体聚焦</el-menu-item>
            <el-menu-item index="/zhaopin" :class="{'isActive': !active}"><span class="iocyb"></span>招聘公告</el-menu-item>
          </el-menu>
      </div>
      <!-- 右侧部分 -->
      <div  class="main-right" >
            <router-view class="view"></router-view>
        </div>
    </div>

    <!-- <new-footer></new-footer> -->
  </div>
</template>
<script>
    // import NewFooter from './footers.vue'
    export default {
        name: 'nav3',
        data: function (){
          return {
              active:true
          }
        },
        // components:{
        //     NewFooter,
        // },
        created:function(){
          this.$router.push('xwzx'); // 页面加载时跳转
        }
    }
</script>
<style lang="scss">
    @import './left'
</style>