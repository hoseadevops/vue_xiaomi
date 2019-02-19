<template>
    <div class="botnav">
        <div class="botnav_style" v-if="styletoggle === 'home'">
            <router-link class="botnav_link" :to="{name:'index'}">
                <div class="botnav_link_svg iconfont icon-home-full"></div>
                <p class="botnav_link_title">首页</p>
            </router-link>
            <router-link class="botnav_link" :to="{name:'classify'}">
                <div class="botnav_link_svg iconfont icon-fenlei"></div>
                <p class="botnav_link_title">分类</p>
            </router-link>
            <router-link class="botnav_link" :to="{name:'shopCar'}">
                <div class="botnav_link_svg iconfont icon-daohanggouwuche"><span v-show="count">{{ count }}</span></div>
                <p class="botnav_link_title">购物车</p>
            </router-link>
            <router-link class="botnav_link" :to="{name:'myCenter'}">
                <!-- <i class="showNum" v-if= "pickNum">{{ pickNum }}</i> -->
                <div class="botnav_link_svg iconfont icon-wodekaobei"></div>
                <p class="botnav_link_title">我的</p>
            </router-link>
        </div>
        <!-- 在商品详情页的时候显示另一种 -->
        <div class="botnav_style1" v-if="styletoggle === 'detail'">
            <router-link class="botnav_link" :to="{name:'index'}">
                <div class="botnav_link_svg iconfont icon-home-full"></div>
                <p class="botnav_link_title">首页</p>
            </router-link>
            <router-link class="botnav_link" :to="{name:'shopCar'}">
                <div class="botnav_link_svg iconfont icon-daohanggouwuche"><span v-show="count">{{ count }}</span></div>
                <p class="botnav_link_title">购物车</p>
            </router-link>
            <div class="botnav_add" @click="openChooseType">
                加入购物车
            </div>
        </div>
        <!-- 在显示购物车页面的时候，购物车里有商品的情况 -->
        <div class="botnav_style2" v-if="styletoggle === 'carNoEmpty'">
            <div class="total">
                <div class="total_num">
                    <span>共{{ chooseCount }}件</span> <span>金额:</span>
                </div>
                <div class="total_price">
                    <span class="total_price_num">{{ totalPrice }}</span>元
                </div>
            </div>
            <router-link class="continuShop" :to="{name:'index'}">
                继续购物
            </router-link>
            <router-link class="goPay" :to="{name:'index'}">
                去结算
            </router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import shopTools from '../assets/tools/shoptools';
    import connect from '../connect/connect.js'
    export default {
        name: 'botNav',
        props:['openChooseType'],
        data() {
            return {
                styletoggle:'home',
                count:shopTools.getTotal(),
                priceList:[],
                totalPrice:0,
                chooseCount:0
            }
        },
        mounted(){
            // 如果路由是详情页，显示的内容不同
            if(/^\/goods\/detail\/\d+/.test(this.$route.path)){
                
                this.styletoggle = 'detail'
                
            }
            // 主页导航条的数字变化
            connect.$on('countChange',(num)=>{
                this.count += num
            })
            // 监听priceChange，即点击选要结算的商品的事件
            connect.$on('priceChange',(price)=>{
                this.totalPrice += price.priceChange
                this.chooseCount += price.numChange
                this.styletoggle = this.chooseCount?'carNoEmpty':'home';
            })
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .botnav{
        position: fixed;
        z-index: 3;
        width: 100%;
        height: 102/@rem;
        bottom: 10/@rem;
        .botnav_style{
            display: flex;
            width: 100%;
            height: inherit;
            background-color: #ffffff;
            box-shadow: 0 -2px 5px 5px #E9E9E9;
            .botnav_link{
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 25%;
                text-align: center;
                color: #838383;
                .botnav_link_svg{
                    position: relative;
                    margin-bottom: 10/@rem;
                    font-size: 40/@rem;
                    span{
                        position: absolute;
                        right: 40/@rem;
                        top: 0/@rem;
                        width: 24/@rem;
                        height: 24/@rem;
                        line-height: 24/@rem;
                        font-size: 18/@rem;
                        color: #fff;
                        border-radius: 12/@rem;
                        background-color: red;
                    }
                }
                .botnav_link_title{
                    font-size: 24/@rem;
                }
            }
            .botnav_link.rlactive{
                color: #F56D02;
            }
        }
        // 商品详情页的导航栏
        .botnav_style1{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 95%;
            height: inherit;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 15/@rem;
            box-shadow: 0 3px 4px 4px #E9E9E9;
            .botnav_link{
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 25%;
                text-align: center;
                color: #838383;
                .botnav_link_svg{
                    position: relative;
                    margin-bottom: 10/@rem;
                    font-size: 40/@rem;
                    span{
                        position: absolute;
                        right: 40/@rem;
                        top: 0/@rem;
                        width: 24/@rem;
                        height: 24/@rem;
                        line-height: 24/@rem;
                        font-size: 18/@rem;
                        color: #fff;
                        border-radius: 12/@rem;
                        background-color: red;
                    }
                }
                .botnav_link_title{
                    font-size: 24/@rem;
                }
            }
            .botnav_add{
                width: 250/@rem;
                height: 68/@rem;
                margin: 0 30/@rem 0 200/@rem;
                line-height: 68/@rem;
                font-size: 30/@rem;
                color: #ffffff;
                background-color: #F56D02;
                border-radius: 34/@rem;
            }
        }
        .botnav_style2{
            display: flex;
            overflow: hidden;
            justify-content: space-around;
            align-items: center;
            width: 95%;
            height: inherit;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 15/@rem;
            box-shadow: 0 3px 4px 4px #E9E9E9;
            >*{
                width: 33.33333333%;
                height: inherit;
            }
            .total{
                font-size:28/@rem;
                color:'#A7A7A7';
                .total_price{
                    .total_price_num{
                        font-weight: 600;
                        font-size: 36/@rem;
                        color: #FF5722;
                    }
                }    
            }
            .continuShop{
                line-height: 102/@rem;
                font-size: 30/@rem;
                color: #656565;
                background-color: #F4F4F4;
            }
            .goPay{
                line-height: 102/@rem;
                font-size: 30/@rem;
                color: #FFF;
                background-color: #FF6700;
            }
        }
    }
</style>

