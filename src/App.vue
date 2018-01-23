<template>
    <div id="app">
        <!-- 头部导航 -->
        <header class="header">
            <div class="top">
                <a href="#">茅台股份官网</a>
                <label>|</label>
                <a href="#">国酒党建</a>
            </div>
            <div class="nav">
                <div class="logo">
                    <a href="#"><img src="/assets/img/logo.png" height="71" width="230"></a>
                </div>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
                    <el-menu-item index="/nav1">首页</el-menu-item>
                    <el-menu-item index="/nav2">走进茅台</el-menu-item>
                    <el-menu-item index="/nav3">新闻资讯</el-menu-item>
                    <el-menu-item index="/nav4">品牌战略</el-menu-item>
                    <el-menu-item index="/nav5">社会责任</el-menu-item>
                    <el-menu-item index="/nav6">文化茅台</el-menu-item>
                    <el-menu-item index="/nav7">酒之博览</el-menu-item>
                    <el-menu-item index="/nav8">茅台商城</el-menu-item>
                </el-menu>
            </div>
        </header>

        <main>
            <router-view class="view"></router-view>
        </main>
    </div>
</template>

    <script>
    import Vue from 'vue'
    import Element from 'element-ui'
    import 'element-ui/lib/theme-default/index.css'

    Vue.use(Element)

    export default {
        name: 'app',
        data: function (){
            return {
                activeIndex:'/nav5',
                // src:'/assets/img/logo.jpg'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
            console.log(key, keyPath);
            }
        },
        created:function(){
            this.$router.push('dongshizhang'); // 页面加载时跳转
        }
    }
    </script>

 <style lang="scss">
    *{
        margin:0;
    }
    body{
        background-color:#f3f3f3;
        a{
            text-decoration:none;
            color:#000;
        }
        img{
            display: block;
        }
        ul{
            list-style:none;
        }
    }
    header{
        width:1200px;
        margin:0 auto;
        .top{
            height:40px;
            line-height:40px;
            float:right;
            a{
                color:#000;
                font-size:12px;
                text-decoration:none;
                &:hover{
                    color:#f00;
                    text-decoration:none;
                }
            }
        }
        .nav{
            width:1200px;
            height: 70px;
            position:absolute;
            top:40px;
            .logo{
                float:left;
                width:200px;
            }
            .el-menu{
                width:980px;
                background-color:#fff;
                margin-left:200px;
                padding-left:20px;
                .el-menu-item{
                    width:117px;
                    height:70px;
                    line-height:70px;
                    font-size:16px;
                    font-weight:bold;
                    text-align:center;
                    &:hover{
                        background-color:rgb(178,0,0);
                        color:#fff;
                        border:none;
                        &.is-active{
                            color:#fff;
                        }
                    }
                    &.is-active{
                        color:#000;
                    }
                }

            }
        }
    }
    // .footer{
    //     background-color: #181C25;
    //     height: 50px;
    //     margin-top:550px;
    //     margin-right: auto;
    //     margin-left: auto;
    //     .foot{
    //         height: 34px;
    //         width: 1200px;
    //         margin-right: auto;
    //         margin-left: auto;
    //         padding-top: 5px;
    //         padding-bottom: 8px;
    //         font-size: 12px;
    //         line-height: 20px;
    //         color: #67999E;
    //         background-image: url(assets/img/footer.jpg);
    //         background-repeat: no-repeat;
    //         background-position: right center;
    //         a{
    //             height: 34px;
    //             font-size: 12px;
    //             color: #67999E;
    //             line-height: 20px;
    //         }
    //     }
    // }
  </style>

