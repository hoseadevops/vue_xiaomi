<template>
    <div class="category">
        <div class="type">
            <ul class="type_cover">
                <li 
                    class="type_cover_item" 
                    v-for= "(item,index) in type" 
                    :key= "index" 
                    :class= "{ active:currentIndex == index }"
                    @click= "tabClick(index)"
                >{{ item.title }}</li>
            </ul>
        </div>
        <div class="con" @mousewheel="DOMMousescroll">
            <div class="con_catalog" v-for="(item,index) in type" :key="index">
                <router-link class="con_advice" :to="{name:'detail',params:{id:999}}">
                    <img :src="require('../../assets/img/chooseType/1.webp')" alt="">
                </router-link>
                <div class="con_title">手机</div>
                <div class="con_goodslist clearfix">
                    <router-link class="con_gdlt_product" :to="{ name:'detail',params:{id:999} }">
                        <img :src="require('../../assets/img/chooseType/2.png')" alt="">
                        <div class="pdt_name">红米Note7</div>
                    </router-link>
                    <router-link class="con_gdlt_product" :to="{ name:'detail',params:{id:999} }">
                        <img :src="require('../../assets/img/chooseType/2.png')" alt="">
                        <div class="pdt_name">小米MIX3</div>
                    </router-link>
                    <router-link class="con_gdlt_product" :to="{ name:'detail',params:{id:999} }">
                        <img :src="require('../../assets/img/chooseType/2.png')" alt="">
                        <div class="pdt_name">小米8 青春版</div>
                    </router-link>
                    <router-link class="con_gdlt_product" :to="{ name:'detail',params:{id:999} }">
                        <img :src="require('../../assets/img/chooseType/2.png')" alt="">
                        <div class="pdt_name">小米8 屏幕指纹版</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import type from '../../data/type.js'
    export default {
        name: 'chooseType',
        data() {
            return {
                type,
                currentIndex:0,
                lastScrollTop:0
            }
        },
        methods:{
            // 左侧点击函数
            tabClick:function(index){
                //左侧导航栏
                let oLi = document.getElementsByClassName('type_cover_item')[index]
                let oUl = document.querySelector('.type_cover')
                //右侧内容分类区
                let oCon = document.getElementsByClassName('con_catalog')[index]
                let oConBox = document.querySelector('.con')
                // 改变滚动高度
                oUl.scrollTop = oLi.offsetTop - oLi.clientHeight;
                oConBox.scrollTop = oCon.offsetTop
                // 改变当前序号来改变类名
                this.currentIndex =index
            },
            // 右侧滚动函数
            DOMMousescroll:function(){
                //右侧内容分类区
                let aCon = document.getElementsByClassName('con_catalog')
                let oConBox = document.querySelector('.con');
                let nowSTop = oConBox.scrollTop
                // 限制触发频率
                if(Math.abs(this.lastScrollTop-nowSTop)<=50 )return
                this.lastScrollTop = nowSTop
                for(let i = 0,len=aCon.length;i<len;i++){
                    if(aCon[i].offsetTop + aCon[i].clientHeight > nowSTop){
                        this.currentIndex =i
                        return
                    }
                }
            }
        },
        mounted(){
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .category{
        display: flex;
        height: 1125/@rem;
        background-color: #fff;
        .type{
            overflow: hidden;
            width: 158/@rem;
            border-right: 1px solid #EFEFEF;
            background-color: #FEFEFE;
            .type_cover{
                overflow-y: scroll;
                width: 175/@rem;
                height: 100%;
                text-align: center;
                text-indent: -.5em;
                .type_cover_item{
                    height: 120/@rem;
                    line-height: 120/@rem;
                    font-size: 30/@rem;
                    color: #7F7F7F;
                    -webkit-transition: .3s;
                    transition: .3s;
                }
                .type_cover_item.active{
                    font-size: 37/@rem;
                    color: #FB823B;
                }
            }
        }
        .con{
            overflow-y: scroll;
            position: relative;
            width:592/@rem;
            padding: 0 36/@rem;
            .con_catalog{
                width: 100%;
                .con_advice{
                    width: 100%;
                    height: 210/@rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .con_title{
                    position: relative;
                    width: 100%;
                    height: 160/@rem;
                    line-height: 160/@rem;
                    font-size: 34/@rem;
                }
                .con_title::before{
                    position: absolute;
                    top: 50%;
                    left: 30%;
                    content: "";
                    width: 40/@rem;
                    height: 2/@rem;
                    margin-top: -1/@rem;
                    background-color: #E3E3E3;
                }
                .con_title::after{
                    position: absolute;
                    top: 50%;
                    right: 30%;
                    content: "";
                    width: 40/@rem;
                    height: 2/@rem;
                    margin-top: -1/@rem;
                    background-color: #E3E3E3;
                }
                .con_goodslist{
                    .con_gdlt_product{
                        float: left;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        width: 33.3333333%;
                        height: 165/@rem;
                        margin: 0 0 20/@rem;
                        img{
                            width: 105/@rem;
                            height: 105/@rem;
                        }
                        .pdt_name{
                            overflow: hidden;
                            width: 100%;
                            height: 35/@rem;
                            line-height: 35/@rem;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 24/@rem;
                            color: #757575;
                        }
                    }
                }
            }
            .con_catalog:last-child{
                height: 1125/@rem;
            }
        }
    }
</style>
