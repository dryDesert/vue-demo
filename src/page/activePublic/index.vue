<!-- <template>
    <div class="activePublic ">
      步骤组件
      <el-steps :space="200" :active="step" class="step" style="margin-bottom:50px;">
        <el-step title="活动信息" description=""></el-step>
        <el-step title="报名签到" description=""></el-step>
        <el-step title="分享设置" description=""></el-step>
        <el-step title="个性设置" description=""></el-step>
      </el-steps>

        视图
      <router-view class="view"></router-view>

      <div class="but-group" style="margin-top:50px;">
        <el-button >预览</el-button>
        <el-button >上一步</el-button>
        <el-button  type="primary">下一步</el-button>
        <el-button  type="primary">发布活动</el-button>
      </div>
    </div>
</template> -->

//   export default {
//     data() {
//       return {
//         step: 0
//       };
//     },

//     methods: {
//       next() {
//         if (this.active++ > 3) this.active = 0;
//       }
//     }
//   }



<template>
  <div id="nav5">
    <!-- 左侧部分 -->
    <div class="main-left">
        <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
            <el-menu-item index="/activePublic" :class="{'isActive': active}">活动发布</el-menu-item>
          <el-menu-item index="/activeManage" :class="{'isActive': !active}">活动管理</el-menu-item>
        </el-menu>
    </div>
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

