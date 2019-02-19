<template>
   <div class="home">
       <top-search></top-search>
       <banner></banner>
       <shop-menu></shop-menu>
       <recommend></recommend>
       <good-list></good-list>
       <bot-nav></bot-nav>
   </div>
</template>

<script type="text/ecmascript-6">
    import topSearch from './home/topSearch.vue'
    import banner from './home/banner.vue'
    import shopMenu from './home/shopMenu.vue'
    import recommend from './home/recommend.vue'
    import goodList from './home/goodList.vue'
    export default {
       name: '',
       data() {
           return {}
       },
       components: {
           'topSearch':topSearch,
           'banner':banner,
           'shopMenu':shopMenu,
           'recommend':recommend,
           'goodList':goodList
       }
    }
</script>

<style scoped lang="less">
    .home{
        position: relative;
    }
</style>
