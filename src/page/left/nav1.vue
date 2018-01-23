<template>
  <div id="nav1" class="content">
    <div class="top-img">
      <img src="../../assets/img/ban1.jpg">
    </div>

    <!-- <div class="top">
      <el-carousel trigger="click" height="520px">
        <el-carousel-item v-for="item in items" :key="item">
          <img :src="item.src">
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <!-- 左侧部分 -->
    <div class="main">
      <div class="main-left">
        <div class="titlelm">社会责任</div>
          <!-- <el-menu default-active="/shehui" class="el-menu-vertical-demo" :router="true">
            <el-menu-item index="/shehui" :class="{'isActive': active}"><span class="iocyb"></span>社会责任观</el-menu-item>
            <el-menu-item index="/dongshizhang" :class="{'isActive': !active}"><span class="iocyb"></span>董事长致辞</el-menu-item>
            <el-menu-item index="/gongyi" :class="{'isActive': !active}"><span class="iocyb"></span>公益活动</el-menu-item>
            <el-menu-item index="/gongxian" :class="{'isActive': !active}"><span class="iocyb"></span>社会贡献</el-menu-item>
            <el-menu-item index="/jixiao" :class="{'isActive': !active}"><span class="iocyb"></span>责任绩效</el-menu-item>
            <el-menu-item index="/baogao" :class="{'isActive': !active}"><span class="iocyb"></span>报告展望</el-menu-item>
          </el-menu> -->
      </div>
      <!-- 右侧部分 -->
      <div  class="main-right" >
            <router-view class="view"></router-view>
        </div>
    </div>

  </div>
</template>
<script>
    export default {
        name: 'nav1',
        data: function (){
          return {
              active:true,
              // items:[
              //   {src:'../../assets/img/ban1.jpg'},
              //   {src:'../../assets/img/ban2.jpg'},
              //   {src:'../../assets/img/ban3.jpg'},
              //   {src:'../../assets/img/ban4.jpg'},
              //   {src:'../../assets/img/ban5.jpg'}
              // ]
          }
        }
    }
</script>
<style lang="scss">
    @import './left'
</style>