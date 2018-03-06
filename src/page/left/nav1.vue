<template>
  <div id="nav1" class="content">

      <!-- <el-carousel trigger="click" height="520px" type='card' ref="carousel" >
        <el-carousel-item v-for="(item,index) in items" :key="item" name="index">
          <img :src="item.src" >
        </el-carousel-item>
      </el-carousel> -->

      <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
        <div class="slideshow">
          <transition-group tag="ul" name="image">
            <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
              <a href="#">
                <img :src='img.src'>
              </a>
            </li>
          </transition-group>
        </div>
        <div class="bullet">
          <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
          @click="change(index)" :key="index"></span>
        </div>
    </div>


    <div class="main">
        <!-- 左侧部分 -->
      <!-- <div class="main-left">
        <div class="titlelm">社会责任</div>
          <el-menu default-active="/shehui" class="el-menu-vertical-demo" :router="true">
            <el-menu-item index="/shehui" :class="{'isActive': active}"><span class="iocyb"></span>社会责任观</el-menu-item>
            <el-menu-item index="/dongshizhang" :class="{'isActive': !active}"><span class="iocyb"></span>董事长致辞</el-menu-item>
            <el-menu-item index="/gongyi" :class="{'isActive': !active}"><span class="iocyb"></span>公益活动</el-menu-item>
            <el-menu-item index="/gongxian" :class="{'isActive': !active}"><span class="iocyb"></span>社会贡献</el-menu-item>
            <el-menu-item index="/jixiao" :class="{'isActive': !active}"><span class="iocyb"></span>责任绩效</el-menu-item>
            <el-menu-item index="/baogao" :class="{'isActive': !active}"><span class="iocyb"></span>报告展望</el-menu-item>
          </el-menu>
      </div> -->
      <!-- 右侧部分 -->
      <!-- <div  class="main-right" >
            <router-view class="view"></router-view>
        </div> -->

        <div id="content1">
            <div class="index-b tyyj-gy yuanjiao">
                    <img src="./../../assets/img/index-01.jpg" width="378" height="210">
                    <div class="index-h1">
                        <span class="more"><a href="/touzi/">+更多</a></span>
                        <h2>投资者关系</h2>
                    </div>
                    <ul class="index_list">
                        <li><a href="http://www.moutaichina.com/xinwen/2018/3422.html">“茅台的站位和眼光值得我们学习” ——10家酒企主题演讲摘编 </a></li>
                        <li><a href="http://www.moutaichina.com/xinwen/2018/3421.html">李保芳：共同打造贵州白酒百花齐放的良好格局（摘要）</a></li>
                        <li><a href="http://www.moutaichina.com/xinwen/2018/3420.html">袁仁国：共商合作大计 共谋发展大局共 创贵州白酒产业发展新未来 </a></li>
                        <li><a href="http://www.moutaichina.com/xinwen/2018/3419.html">二次酒开烤第一天 书记在一线 </a></li>
                    </ul>
            </div>
            <div class="index-b tyyj-gy yuanjiao">
                <img src="./../../assets/img/index-02.jpg" width="378" height="210">
                <div class="index-h1">
                    <span class="more"><a href="/touzi/">+更多</a></span>
                    <h2>新闻资讯</h2>
                </div>
                <ul class="index_list">
                    <li><a href="http://www.moutaichina.com/touzi/2018/3347.html">贵州茅台2017年度业绩预增公告</a></li>
                    <li><a href="http://www.moutaichina.com/touzi/2018/3285.html">贵州茅台关于茅台酒市场价格说明的公告</a></li>
                    <li><a href="http://www.moutaichina.com/touzi/2017/3247.html">贵州茅台关于公司生产经营情况的公告</a></li>
                    <li><a href="http://www.moutaichina.com/touzi/2017/3178.html">贵州茅台关于向关联方支付“云商平台”服务费的公告</a></li>
                </ul>
            </div>
            <div class="index-b tyyj-gy yuanjiao" style="margin-right:0px;">
                <img src="./../../assets/img/index-03.jpg" width="378" height="210">
                <div class="index-h1">
                    <span class="more"><a href="/touzi/">+更多</a></span>
                    <h2>投资者关系</h2>
                </div>
                <ul class="index_tzz">
                    <li><a href="/fuwu/fwsy/">防伪溯源</a></li>
                    <li><a href="/fuwu/zscqbh">打假维权</a></li>
                    <li><a href="/fuwu/">服务承诺 </a></li>
                    <li><a href="http://202.98.222.66:8080/elearning/login-MOU.jsp" target="_blank">在线培训</a></li>
                    <li><a href="http://b2b.emaotai.cn/zp/" target="_blank">在线招聘</a></li>
                    <li><a href="http://gid.zx315.cn/maotai" target="_blank">物流查询</a></li>
                    <li><a href="/fuwu/yewufuwu/">业务服务</a></li>
                    <li><a href="/fuwu/guojijingxiaoshang/">国际经销商</a></li>
                    <li><a href="/fuwu/guoneijingxiaoshang/">国内经销商</a></li>
                    <li><a href="http://www.china-moutai.com/mtzy/" target="_blank">茅台置业</a></li>
                    <li><a href="http://www.china-moutai.com/whzl/" target="_blank">茅台醇香之旅</a></li>
                    <li><a href="http://jc.china-moutai.com:8010/ebvp/" target="_blank">茅台集采平台</a></li>
                    <li><a href="https://bk.moutai.com.cn/" target="_blank">国酒茅台报</a></li>
                </ul>
            </div>
        </div>
        <div id="content2">
            <el-tabs type="border-card">
                <el-tab-pane label="贵州茅台酒">
                    <ul>
                        <li><img src="./../../assets/img/1.jpg"></li>
                        <li><img src="./../../assets/img/2.jpg"></li>
                        <li><img src="./../../assets/img/3.jpg"></li>
                        <li><img src="./../../assets/img/4.jpg"></li>
                        <li><img src="./../../assets/img/5.jpg"></li>
                        <li><img src="./../../assets/img/6.jpg"></li>
                        <li><img src="./../../assets/img/7.jpg"></li>
                        <li><img src="./../../assets/img/8.jpg"></li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="其他酱香系列">
                    <ul>
                        <li><img src="./../../assets/img/1.jpg"></li>
                        <li><img src="./../../assets/img/2.jpg"></li>
                        <li><img src="./../../assets/img/3.jpg"></li>
                        <li><img src="./../../assets/img/4.jpg"></li>
                        <li><img src="./../../assets/img/5.jpg"></li>
                        <li><img src="./../../assets/img/6.jpg"></li>
                        <li><img src="./../../assets/img/7.jpg"></li>
                        <li><img src="./../../assets/img/8.jpg"></li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="网上商城">
                    <ul>
                        <li><img src="./../../assets/img/1.jpg"></li>
                        <li><img src="./../../assets/img/2.jpg"></li>
                        <li><img src="./../../assets/img/3.jpg"></li>
                        <li><img src="./../../assets/img/4.jpg"></li>
                        <li><img src="./../../assets/img/5.jpg"></li>
                        <li><img src="./../../assets/img/6.jpg"></li>
                        <li><img src="./../../assets/img/7.jpg"></li>
                        <li><img src="./../../assets/img/8.jpg"></li>
                    </ul>
                </el-tab-pane>
            </el-tabs>
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
              imgArray:[
                {src:require('../../assets/img/ban1.jpg')},
                {src:require('../../assets/img/ban2.jpg')},
                {src:require('../../assets/img/ban3.jpg')},
                {src:require('../../assets/img/ban4.jpg')},
                {src:require('../../assets/img/ban5.jpg')}
              ],
              time:null,  //定时器
              mark:0,  //比对图片索引的变量
          }
        },
        methods: {
          autoPlay () {
            this.mark++;
            if (this.mark === 4) {
              this.mark = 0
            }
          },
          play () {
            this.timer = setInterval(this.autoPlay, 3500)
          },
          change (i) {
            this.mark = i
          },
          stop () {
            clearInterval(this.timer)
          },
          move () {
            this.timer = setInterval(this.autoPlay, 3500)
          }
        },
        created () {
          this.play()
        }
    }
</script>
<style lang="scss">
    @import './left';

    .slide{
      position:absolute;
      top:120px;
      .slideshow{
        ul{
          padding:0px;
          img{
            width: 1200px;
            height: 220px;
          }
        }
      }
    }


    // .image-enter-active {
    //     transform: translateX(0);
    //     transition: all 1.5s ease;
    //   }
    //   .image-leave-active {
    //     transform: translateX(-100%);
    //     transition: all 0s ease;
    //   }
    //   .image-enter {
    //     transform: translateX(100%);
    //   }
    //   .image-leave {
    //     transform: translateX(0);
    //   }

    .index-b {
        float: left;
        width: 382px;
        height: 450px;
        margin-right: 24px;
        padding: 1px;
        background-color:#fff;
    }
    .yuanjiao {
        -moz-border-radius-topleft: 5px;
        -moz-border-radius-topright: 5px;
        -moz-border-radius-bottomleft: 0;
        -moz-border-radius-bottomright: 0;
        -webkit-border-top-left-radius: 5px;
        -webkit-border-top-right-radius: 5px;
        -webkit-border-bottom-left-radius: 0;
        -webkit-border-bottom-right-radius: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .index-h1 {
        margin-right: 20px;
        margin-left: 20px;
        line-height: 50px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #D8D8D8;
        padding-top: 10px;
    }
    .more {
        float: right;
    }
    .index_list {
        margin-right: 5px;
        margin-left: 5px;
        padding: 15px;
    }
    .index_list li {
        line-height: 33px;
        border-bottom-width: 1px;
        border-bottom-style: dotted;
        border-bottom-color: #D5D5D5;
        // background-image: url(index-ioc.gif);
        background-repeat: no-repeat;
        background-position: left center;
        padding-left: 12px;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .index_tzz {
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .index_tzz li {
        font-size:14px;
        line-height: 25px;
        // background-image: url(index-ioc.gif);
        background-repeat: no-repeat;
        background-position: left center;
        // padding-left: 10px;
        float: left;
        // margin-right: 15px;
        // margin-left: 15px;
        width: 114px;
    }


    .el-tabs--border-card {
        width: 1200px;
        margin-top: 20px;
        background: #f4f4f4!important;
        border: 1px solid #d3dce6;
        li{
            float:left;
            margin-right:20px;
            img{
                width:120px;
                height:120px;
            }
        }
    }
</style>