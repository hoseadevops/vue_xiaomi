<template>
    <div class="myCenter">
        <user></user>
        <my-order></my-order>
        <my-serve></my-serve>
        <bot-nav></bot-nav>
    </div>
</template>

<script type="text/ecmascript-6">
    import user from './myCenter/user.vue'
    import myOrder from './myCenter/myOrder.vue'
    import myServe from './myCenter/myServe.vue'
    export default {
        name: 'myCenter',
        data() {
            return {}
        },
        components: {
            'user':user,
            'myOrder':myOrder,
            'myServe':myServe
        }
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .myCenter{
        height: 100vh;
    }
</style>
