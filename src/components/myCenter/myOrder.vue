<template>
    <div class="order">
        <div class="order_my">
            <div class="order_my_link">
                <div class="order_my_link_my">
                    我的订单
                </div>
                <div class="order_my_link_all">
                    <span>全部订单</span><span class="iconfont icon-youjiantou"></span>
                </div>
            </div>
        </div>
        <div class="order_type">
            <ul>
                <li class="order_type_item">
                    <div class="iconfont icon-daifukuan"></div>
                    <p class="order_type_item_title">待付款</p>
                </li>
                <li class="order_type_item">
                    <div class="iconfont icon-icon3"></div>
                    <p class="order_type_item_title">待收货</p>
                </li>
                <li class="order_type_item">
                    <div class="iconfont icon-weixiuoff"></div>
                    <p class="order_type_item_title">退换修</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'myOrder',
        data() {
            return {}
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .order{
        width: 100%;
        height: 258/@rem;
        margin-bottom: 20/@rem;
        .order_my{
            height: 80/@rem;
            margin-bottom: 3/@rem;
            background-color: #fff;
            .order_my_link{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: inherit;
                padding: 0 36/@rem;
                .order_my_link_my{
                    font-size: 31/@rem;
                }
                .order_my_link_all{
                    font-size: 27/@rem;
                    span.iconfont{
                        font-size: 30/@rem;
                        color: #484848;
                    }
                }
            }
        }
        .order_type{
            height: 175/@rem;
            background-color: #fff;
            ul{
                display: flex;
                height: inherit;
                .order_type_item{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 33.33333333333%;
                    height: inherit;
                    .iconfont{
                        margin-bottom: 20/@rem;
                        font-size: 42/@rem;
                        color: #999999;
                    }
                    .order_type_item_title{
                        font-size: 23/@rem;
                    }
                }
            }
        }
    }
</style>
