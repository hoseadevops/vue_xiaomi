<template>
    <div class="shopCar">
        <top-nav :title="'购物车'"></top-nav>
        <my-car></my-car>
        <bot-nav></bot-nav>
    </div>
</template>

<script type="text/ecmascript-6">
    import topNav from '../topNav.vue'
    import myCar from './myCar.vue'
    export default {
        name: 'shopCar',
        data() {
            return {}
        },
        components: {
            'topNav':topNav,
            'myCar':myCar
        }
    }
</script>

<style scoped lang="less">
</style>
