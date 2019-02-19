<template>
    <div class="myCar">
        <div class="login" v-if="!isLogin">
            <div class="login_please">登录后享受更多优惠</div>
            <div class="login_go">
                去登录 <span class="iconfont icon-youjiantou"></span>
            </div>
        </div>
        <!-- 购物车为空，去逛逛 -->
        <router-link v-if="goodsList.length === 0"  class="emptycar" :to="{name:'index'}">
            <img :src="require('../../assets/img/shopCar/1.jpg')" alt="">
        </router-link>
        <!-- 购物车不为空的时候 -->
        <div class="myWant">
            <div class="want_good" v-for="(item,index) in goodsList" :key="index" >
                <div class="want_good_if" v-if="item.num">
                    <input type="checkbox" class="want_good_checked" @click="chooseTo(index)" ref="check"/>
                    <img :src="require('../../assets/img/detail/1.webp')" alt="">
                    <div class="want_good_info">
                        <p class="good_title">小米MIX 3 全网通 {{ item.version }} {{ item.color }} 256G</p>
                        <p class="good_price">售价:  3999元</p>
                        <div class="good_operation">
                            <p class="num_btn">
                                <button class="num_minus" @click="minusClick(index)">-</button>
                                <span class="num_show">{{ item.num }}</span>
                                <button class="num_add" @click="addClick(index)">+</button>
                            </p>
                            <p class="good_del" @click="deleteGood(index)"><span class="iconfont icon-shanchu"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="guessLike">
            <div class="gesLike_title">
                <img class="gesLike_pic" :src="require('../../assets/img/guessLike/1.jpg')" alt="">
            </div>
            <div class="gesLike_wrap clearfix">
                <router-link class="gesLike_goods" :to="{ name:'detail',params:{id:444} }">
                    <img :src="require('../../assets/img/guessLike/2.jpg')" alt="">
                    <p class="gesLike_goods_title">黑鲨游戏手机 Helo 双滑轨保护壳</p>
                    <p class="gesLike_goods_price"><i>￥</i>{{  69  }}</p>
                </router-link>
                <router-link class="gesLike_goods" :to="{ name:'detail',params:{id:555} }">
                    <img :src="require('../../assets/img/guessLike/3.jpg')" alt="">
                    <p class="gesLike_goods_title">小米高清数据线 -1.5米</p>
                    <p class="gesLike_goods_price"><i>￥</i>{{  29  }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue'
    import shopTools from '../../assets/tools/shoptools'
    import connect from '../../connect/connect'
    export default {
        name: 'myCar',
        data() {
            return {
                isLogin:false,
                goodsList:shopTools.getItem(),
            }
        },
        filters:{
            myfilter:function(value){
                return '￥' + value
            }
        },
        created(){
            // this.Axios.get('sadsa').then((msg)=>{
                
            // })
        },
        methods:{
            // 数量加
            addClick(index){
                if(this.goodsList[index].num < 5){
                    this.goodsList[index].num ++
                    //用户更改的是哪一组的数量，并且调用函数更改永久存储shopTools
                    shopTools.addUpdate({
                        id:this.goodsList[index].id,
                        color:this.goodsList[index].color,
                        version:this.goodsList[index].version,
                        num:1
                    })
                    // 通知导航栏的购物车数字改变
                    connect.$emit('countChange',1)
                    // 确认是否选中，选中就要变动结算栏
                    let isChoosed = this.$refs.check[index].checked
                    if(isChoosed)this.changePayBar(index,1)
                }
            },
            // 数量减
            minusClick(index){
                if(this.goodsList[index].num > 0){
                    this.goodsList[index].num --
                    //用户更改的是哪一组的数量，并且调用函数更改永久存储shopTools
                    shopTools.minusUpdate({
                        id:this.goodsList[index].id,
                        color:this.goodsList[index].color,
                        version:this.goodsList[index].version,
                        num:-1
                    })
                    // 通知导航栏的购物车数字改变
                    connect.$emit('countChange',-1)
                    // 确认是否选中，选中就要变动结算栏
                    let isChoosed = this.$refs.check[index].checked
                    if(isChoosed)this.changePayBar(index,-1)
                    
                }
            },
            // 删除
            deleteGood(index){
                let num = this.goodsList[index].num
                // 先通知导航栏减去其数量
                connect.$emit('countChange', -num)
                // 确认是否选中，选中就要变动结算栏
                let isChoosed = this.$refs.check[index].checked
                if(isChoosed)this.changePayBar(index,-num)
                // 更改永久存储的
                shopTools.delete({
                    id:this.goodsList[index].id,
                    color:this.goodsList[index].color,
                    version:this.goodsList[index].version,
                })
                Vue.delete(this.goodsList,index)
            },
            // 点击选中按钮会计算价格
            chooseTo(index){
                let isChoosed = this.$refs.check[index].checked
                // 确认是选中还是取消选中
                let num = isChoosed?this.goodsList[index].num:-this.goodsList[index].num
                this.changePayBar(index,num)
            },
            // 变动结算栏
            changePayBar(index,num){
                let { id,color,version } = this.goodsList[index]
                connect.$emit('priceChange',{
                    id,
                    color,
                    version,
                    priceChange:3999*num,
                    numChange:num,
                })
            }
        },
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .myCar{
        background-color: #fff;
        .login{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 104/@rem;
            padding: 0 32/@rem;
            .login_please{
                font-size: 34/@rem;
            }
            .login_go{
                font-size: 25/@rem;
            }
        }
        .emptycar{
            position: relative;
            height: 125/@rem;
            img{
                width: 100%;
            }
        }
        .myWant{
            padding: 35/@rem 20/@rem;
            border-top: 1/@rem solid #F2F2F2;
            border-bottom: 1/@rem solid #F2F2F2;
            .want_good{
                .want_good_if{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 15/@rem 0 15/@rem;
                    border-bottom: 1/@rem solid #F2F2F2;
                    .want_good_checked{
                        width: 42/@rem;
                        height: 42/@rem;
                        border-radius: 21/@rem;
                    }
                    img{
                        width: 185/@rem;
                        height: 185/@rem;
                        margin: 0 20/@rem;
                        border: 1/@rem solid #F8F8F8;
                    }
                    .want_good_info{
                        width: 450/@rem;
                        text-align: left;
                        .good_title{
                            margin-bottom: 15/@rem;
                            font-size: 28/@rem;
                            
                        }
                        .good_price{
                            margin-bottom: 10/@rem;
                            font-size: 22/@rem;
                            color: #A9A9A9;
                        }
                        .good_operation{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            .num_btn{
                                display: flex;
                                width: 192/@rem;
                                height: 64/@rem;
                                line-height: 64/@rem;
                                text-align: center;
                                border: 1/@rem solid #F2F2F2;
                                .num_add,.num_minus,.num_show{
                                    width: 64/@rem;
                                    height: inherit;
                                    font-size: 30/@rem;
                                }
                                .num_add,.num_minus{
                                    border: none;
                                    outline: none;
                                    color: #CECECE;
                                    background-color: #FAFAFA;
                                }
                            }
                            .good_del{
                                font-size: 41/@rem;
                                color: #B7B7B7;
                            }
                        }
                    }
                }
            }
        }
        .guessLike{
            .gesLike_title{
                width: 100%;
                height: 125/@rem;
                margin-bottom: 5/@rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .gesLike_wrap{
                .gesLike_goods{
                    float: left;
                    width: 365/@rem;
                    margin: 5/@rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .gesLike_goods_title{
                        overflow: hidden;
                        width: 305/@rem;
                        margin: 0 auto;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-size: 30/@rem;
                    }
                    .gesLike_goods_price{
                        width: 305/@rem;
                        margin: 0 auto;
                        text-align: left;
                        font-size: 33/@rem;
                        color: #FF6D0A;
                        i{
                            font-style: normal;
                            font-size: 22/@rem;
                        }
                    }
                }
            }
        }
    }
</style>
