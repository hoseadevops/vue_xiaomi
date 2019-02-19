<template>
   <div class="top">
       <div class="top_search">
           <div class="logo">
               <img src="../../assets/img/logo/miLogo.png" alt="">
           </div>
           <div class="search_input">
               <i class="iconfont icon-search-1-copy"></i>
               <input type="text" placeholder="搜索商品名称" >
           </div>
           <router-link class="my_center" :to="{name:'myCenter'}">
               <span class="iconfont icon-wodekaobei"></span>
           </router-link>
       </div>
       <div class="slide_nav">
           <div class="type_nav">
               <div class="hide_scroll">
                    <ul>
                        <li class="type_nav_item active">推荐</li>
                        <li class="type_nav_item">小米年货节</li>
                        <li class="type_nav_item">手机</li>
                        <li class="type_nav_item">智能</li>
                        <li class="type_nav_item">电视</li>
                        <li class="type_nav_item">笔记本</li>
                        <li class="type_nav_item">生活周边</li>
                        <li class="type_nav_item">家电</li>
                        <li class="type_nav_item">新款笔记本</li>
                        <li class="type_nav_item">影音娱乐</li>
                    </ul>
               </div>
           </div>
           <div class="btn_nav">
               <!-- 显示隐藏切换按钮 -->
               <div class=
                    "iconfont icon-xiala btn_nav_mark" 
                    @click = "clickToShow"
                    :class = "{ reverse:isShow }"
                ></div>
               <div class="hide_type" v-show = "isShow" :class = "{ hide:!isShow }">
                   <p class="hide_type_title">全部</p>
                   <ul class="hide_type_con clearfix">
                        <li class="hide_type_con_item active">推荐</li>
                        <li class="hide_type_con_item">小米年货节</li>
                        <li class="hide_type_con_item">手机</li>
                        <li class="hide_type_con_item">智能</li>
                        <li class="hide_type_con_item">电视</li>
                        <li class="hide_type_con_item">笔记本</li>
                        <li class="hide_type_con_item">生活周边</li>
                        <li class="hide_type_con_item">家电</li>
                        <li class="hide_type_con_item">新款笔记本</li>
                        <li class="hide_type_con_item">影音娱乐</li>
                   </ul>
               </div>
           </div>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
    export default {
       name: 'topSearch',
       data() {
           return {
               isShow:false
           }
       },
       mounted(){
           
       },
       methods:{
           clickToShow(){
               this.isShow = !this.isShow;
           }
       },
       components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .top{
        position: fixed;
        z-index: 999;
        top: 0;
        width: 100%;
        height: 146/@rem;
        max-width: 750px;
        background-color: #F2F2F2;
        .top_search{
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 82/@rem;
            .logo{
                width: 53/@rem;
                height: 37/@rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .search_input{
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 540/@rem;
                height: 70/@rem;
                font-size: 32/@rem;
                color: #BDBDBD;
                background-color: #fff;
                border-radius: 5/@rem;
                input{
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: none;
                }
                .iconfont{
                    padding: 0 20/@rem;
                }
            }
            .my_center{
                font-size: 42/@rem;
                span.iconfont{
                    font-size: 42/@rem;
                }
            }
        }
        .slide_nav{
            display: flex;
            position: relative;
            height: 64/@rem;
            //滑动导航
            .type_nav{
                overflow: hidden;
                width: 670/@rem;
                height: 64/@rem;
                .hide_scroll{
                    overflow-x: scroll;
                    height: 80/@rem;
                    ul{
                        display: flex;
                        width: 200%;
                        height: 64/@rem;
                        white-space: nowrap;
                        .type_nav_item{
                            position: relative;
                            height: inherit;
                            margin: 0 20/@rem;
                            line-height: 64/@rem;
                            font-size: 27/@rem;
                            color: #8E8E8E;
                        }
                        li.active::after{
                            position: absolute;
                            content: "";
                            left: 0;
                            bottom: 3px;
                            width: 100%;
                            height: 2px;
                            background-color: #ED5B00;
                        }
                    }
                }
            }
            //显示下拉面板按钮
            .btn_nav{
                width: 80/@rem;
                // 下拉面板按钮
                .btn_nav_mark{
                    position: relative;
                    z-index: 5;
                    line-height: 64/@rem;
                    font-size: 12/@rem !important;
                    -webkit-transition: .5s;
                    transition: .5s;
                    -webkit-transform: scale(.7);
                    transform: scale(.7);
                    -webkit-transform-origin: center center;
                    transform-origin: center center;
                }
                .btn_nav_mark.reverse{
                    -webkit-transform: rotateZ(180deg) scale(.7);
                    transform: rotateZ(180deg) scale(.7);
                }
                // 隐藏下拉面板
                // .hide_type.hide{
                //     height: 0;
                // }
                .hide_type{
                    overflow: hidden;
                    position: absolute;
                    z-index: 4;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 344/@rem;
                    padding: 26/@rem;
                    text-align: left;
                    background-color: #F2F2F2;
                    transition: .3s;
                    //隐藏部分的标题
                    .hide_type_title{
                        margin-bottom: 15/@rem;
                        font-size: 32/@rem;
                        color: #909090;
                    }
                    //隐藏部分的导航内容
                    .hide_type_con{
                        white-space: normal;
                        padding: 0 12/@rem;
                        .hide_type_con_item{
                            float: left;
                            width: 148/@rem;
                            padding: 10/@rem 0;
                            margin: 12/@rem 10/@rem;
                            border: 1px solid #fff;
                            text-align: center;
                            background-color: #fff;
                            border-radius: 10/@rem;
                            
                        }
                        li.active{
                            color: #ED5B00;
                            border-color: #FF8637;
                            background-color: #FDE0D5;
                        }
                    }
                }
            }
        }
    }
</style>
