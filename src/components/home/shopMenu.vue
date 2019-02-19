<template>
    <div class="menu">
        <ul class="clearfix">
            <li class="menu_item" v-for="(item,index) in picList" :key = 'index'>
                <img class="menu_item_pic" :src = "item.src"  alt="">
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'shopMenu',
        data() {
            return {
                picList:[
                    {
                        name:"新品发布",
                        src:require("../../assets/img/menu/1.webp")
                    },
                    {
                        name:"小米闪购",
                        src:require("../../assets/img/menu/2.webp")
                    },
                    {
                        name:"以旧换新",
                        src:require("../../assets/img/menu/3.webp")
                    },
                    {
                        name:"小米众筹",
                        src:require("../../assets/img/menu/4.webp")
                    },
                    {
                        name:"超值特卖",
                        src:require("../../assets/img/menu/5.webp")
                    },
                    {
                        name:"活动频道",
                        src:require("../../assets/img/menu/6.webp")
                    },
                    {
                        name:"1分拼团",
                        src:require("../../assets/img/menu/7.webp")
                    },
                    {
                        name:"电视热卖",
                        src:require("../../assets/img/menu/8.webp")
                    },
                    {
                        name:"每日筛选",
                        src:require("../../assets/img/menu/9.webp")
                    },
                    {
                        name:"米粉卡",
                        src:require("../../assets/img/menu/10.webp")
                    }
                ]
            }
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .menu{
        width: 100%;
        height: 320/@rem;
        background-color: #fff;
        ul{
            width: 100%;
            height: 100%;
            .menu_item{
                float: left;
                width: 20%;
                height: 50%;
                .menu_item_pic{
                    display: block;
                    width: 100%;
                }
            }
        }
    }
</style>

