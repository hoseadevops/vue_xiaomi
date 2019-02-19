<template>
    <header class="user">
        <div class="user_login_link">
            <div class="user_avatar">
                <img :src="require( '../../assets/img/myCenter/avatar.png' )" alt="">
            </div>
            <div class="user_login">
                登录/注册
            </div>
        </div>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'user',
        data() {
            return {}
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .user{
        width: 100%;
        height: 168/@rem;
        padding: 34/@rem 0;
        // background: url('../../assets/img/myCenter/bg.png') no-repeat center/cover;
        background-color: #F37D0F;
        .user_login_link{
            display: flex;
            align-items: center;
            .user_avatar{
                display: block;
                width: 100/@rem;
                height: 100/@rem;
                margin: 0 35/@rem; 
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 100/@rem;
                }
            }
            .user_login{
                font-size: 25/@rem;
                color: #ffffff;
            }
        }
    }
</style>
