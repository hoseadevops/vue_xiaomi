<template>
    <div class="topNav">
        <div class="top_back" @click="clickBack">
            <span class="iconfont icon-fanhui"></span>
        </div>
        <div class="top_title">
            {{ title }}
        </div>
        <div class="top_search">
            <span class="iconfont icon-search-1-copy"></span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'topNav',
        props:['title'],
        data() {
            return {}
        },
        methods:{
            clickBack(){
                this.$router.push({name:'index'})
            }
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .topNav{
        position: relative;
        z-index: 6;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100/@rem;
        padding: 0 30/@rem;
        line-height: 100/@rem;
        background-color: #fff;
        box-shadow: 0 1px 2px 2px #F2F2F2;
        .top_back{
            width: 40/@rem;
            height: 100%;
            span.iconfont{
                font-size: 46/@rem;
                color: #919191;
            }
        }
        .top_title{
            width: 610/@rem;
            font-size: 34/@rem;
        }
        .top_search{
            width: 40/@rem;
            span.iconfont{
                font-size: 46/@rem;
            }
        }
    }
</style>