<template>
    <div class="banner">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item,index) in picUrl" :key= "index">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'banner',
        data() {
            return {
                picUrl:[
                    {
                        src:require('../../assets/img/banner/1.webp')
                    },
                    {
                        src:require('../../assets/img/banner/2.webp')
                    },
                    {
                        src:require('../../assets/img/banner/3.webp')
                    }
                ]
            }
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .banner{
        width: 100%;
        height: 372/@rem;
        margin-top: 146/@rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
