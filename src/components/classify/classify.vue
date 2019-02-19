<template>
    <div class="classify">
        <top-nav :title="'分类'"></top-nav>
        <choose-type></choose-type>
        <bot-nav></bot-nav>
    </div>
</template>

<script type="text/ecmascript-6">
    import topNav from '../topNav.vue'
    import chooseType from './chooseType.vue'
    export default {
        name: 'classify',
        data() {
            return {}
        },
        components: {
            'topNav':topNav,
            'chooseType':chooseType
            
        }
    }
</script>

<style scoped lang="less">
</style>
