<template>
    <div class="recommend">
        <router-link class="recommend_left" :to="{name:'detail',params:{id:111}}">
            <img :src="require('../../assets/img/home/1.webp')" alt="">
        </router-link>
        <div class="recommend_right">
            <router-link class="top_goods" :to="{name:'detail',params:{id:222}}">
                <img :src="require('../../assets/img/home/2.webp')" alt="">
            </router-link>
            <router-link class="bottom_goods" :to="{name:'detail',params:{id:333}}">
                <img :src="require('../../assets/img/home/3.webp')" alt="">
            </router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'recommend',
        data() {
            return {}
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .recommend{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 530/@rem;
        margin: 15/@rem 0;
        .recommend_left{
            width: 50%;
            height: inherit;
            margin-right: 5/@rem;
            img{
                width: 100%;
            }
        }
        .recommend_right{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 50%;
            height: inherit;
            .top_goods,
            .bottom_goods{
                display: block;
                width: 100%;
                height: 49.5%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
