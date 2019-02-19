<template>
    <div class="detail">
        <div class="detail_banner">
            <mt-swipe :show-indicators="false" :auto="5000">
                <mt-swipe-item v-for="(item,index) in pic" :key="index">
                    <img :src="item.src" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="detail_back" @click="clickBack">
            <span class="iconfont icon-fanhui"></span>
        </div>
        <div class="detail_share">
            <span class="iconfont icon-fenxiang1"></span>
        </div>
        <div class="detail_info">
            <p class="detail_title">小米MIX 3</p>
            <p class="detail_desc">
                <span>「小米MIX 3，新品热卖中」</span>
                磁动力滑盖全面屏  / 前后旗舰 AI 双摄 / 四曲面彩色陶瓷机身 / 高效 10W 无线充电
            </p>
            <p class="detail_price"><i>￥</i>3599</p>
        </div>
        <!-- 向上滑出选项框 -->
        <mt-popup
            class="detail_addcar"
            v-model="popupVisible"
            position="bottom"
        >
            <div class="addcar_btn" @click="submitToCar(choose)">加入购物车</div>
            <span class="iconfont icon-guanbi"    @click="closeChooseType"></span>
            <div class="addcar_info">
                <div class="addcar_pic">
                    <img :src="pic[0].src" alt="">
                </div>
                <div class="addcar_desc">
                    <p class="addcar_price">
                        <i>￥</i>3599
                    </p>
                    <p class="addcar_msg">
                        小米MIX 3 全网通版 8GB + 128GB 宝石蓝
                    </p>
                </div>
            </div>
            <!-- 选择型号，颜色等等 -->
            <div class="addcar_version">
                <ul class="version">
                   <div class="version_title">版本</div>
                   <li
                        class="version_item"
                        v-for="(item,index) in version"
                        :class="{ 'choice':defaultV === index }"
                        :key="index"
                        @click="chooseVersion(index)"
                    >{{ item }}</li>
                </ul>
                <div class="color">
                    <div class="color_title">颜色</div>
                    <span
                        class="color_item"
                        v-for="(item,index) in color"
                        :class="{ 'choice':defaultColor === index }"
                        :key="index"
                        @click="chooseColor(index)"
                    >{{ item }}</span>
                </div>
                <div class="num">
                    <p class="num_title">购买数量</p>
                    <p class="num_btn">
                        <button class="num_minus" @click="minusCount">-</button>
                        <span class="num_show">{{ choose.num }}</span>
                        <button class="num_add" @click="addCount">+</button>
                    </p>
                </div>
            </div>
        </mt-popup>
        <bot-nav :openChooseType="openChooseType"></bot-nav>
    </div>
</template>

<script type="text/ecmascript-6">
    import shopTools from '../assets/tools/shoptools.js'
    import connect from '../connect/connect.js'
    import { MessageBox  } from 'mint-ui';
    export default {
        name: 'detail',
        data() {
            return {
                pic:[
                    {
                        src:require('../assets/img/detail/1.webp')
                    },
                    {
                        src:require('../assets/img/detail/2.webp')
                    },
                    {
                        src:require('../assets/img/detail/3.webp')
                    },
                    {
                        src:require('../assets/img/detail/4.webp')
                    },
                ],
                popupVisible:false,
                version:[
                    "6GB + 128GB",
                    "8GB + 128GB",
                    "故宫特别版 10GB + 256GB",
                    "8GB + 256GB"
                ],
                color:[
                    "黑色",
                    "宝蓝色"
                ],
                defaultV:0,
                defaultColor:0,
                choose:{
                    id:20182555,
                    num:1,
                }
            }
        },
        methods:{
            // 返回
            clickBack(){
                this.$router.go(-1)
            },
            // 打开选项框
            openChooseType(){
                this.popupVisible = true;
            },
            // 关闭选项框
            closeChooseType(){
                this.popupVisible = false;
            },
            // 选择颜色
            chooseColor(index){
                this.defaultColor = index
                this.choose.color = this.color[index]
            },
            //选择版本
            chooseVersion(index){
                this.defaultV = index
                this.choose.version = this.version[index]
            },
            //增加数量
            addCount(){
                if(this.choose.num >= 5)return
                this.choose.num += 1
            },
            minusCount(){
                if(this.choose.num <= 1)return
                this.choose.num += -1
            },
            //提交到购物车
            submitToCar(goods){
                shopTools.addUpdate(goods)
                // 提交到vuex数据仓库
                this.$store.commit('addCount',goods.num)
                // 传值给导航栏
                connect.$emit('countChange',goods.num)
                this.popupVisible = false;
                MessageBox.alert('加入成功','')
            }

        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .detail{
        position: relative;
        background-color: #fff;
        .detail_banner{
            height: 825/@rem;
            img{
                width: 100%;
            }
        }
        .detail_back,
        .detail_share{
            position: absolute;
            top: 20/@rem;
            width: 68/@rem;
            height: 68/@rem;
            line-height: 68/@rem;
            background-color: #626262;
            font-size: 32/@rem;
            color: #ffffff;
            border-radius: 34/@rem;
        }
        .detail_back{
            left: 20/@rem;
        }
        .detail_share{
            right: 20/@rem;
        }
        .detail_info{
            height: 270/@rem;
            padding: 40/@rem 30/@rem;
            text-align: left;
            .detail_title{
                margin-bottom: 20/@rem;
                font-size: 44/@rem;
            }
            .detail_desc{
                margin-bottom: 30/@rem;
                font-size: 25/@rem;
                color: #757575;
                span{
                    padding: 0 5/@rem;
                    color: #FF7137;
                }
            }
            .detail_price{
                font-weight: 500;
                font-size: 40/@rem;
                color: #FF7137;
                i{
                    font-style: normal;
                    font-size: 28/@rem;
                }
            }
        }
        // 加入购物车页面
        .detail_addcar{
            width: 100%;
            height: 1034/@rem;
            padding: 65/@rem 32/@rem 0;
            border-radius: 25/@rem 25/@rem 0 0;
            // 加入购物车按钮
            .addcar_btn{
                position: absolute;
                bottom: 20/@rem;
                left: 0;
                right: 0;
                margin: auto;
                width: 688/@rem;
                height: 68/@rem;
                text-align: center;
                line-height: 68/@rem;
                font-size: 33/@rem;
                color: #fff;
                background-color: #FF6700;
                border-radius: 34/@rem;
            }
            // 关闭按钮
            .iconfont{
                position: absolute;
                top: 40/@rem;
                right: 40/@rem;
                font-size: 34/@rem;
                color: #949494;
            }
            // 选择版本型号颜色数量
            .addcar_info{
                display: flex;
                width: 100%;
                margin-bottom: 30/@rem;
                .addcar_pic{
                    width: 210/@rem;
                    height: 210/@rem;
                    border:1/@rem solid #ccc;
                    text-align: center;
                    line-height: 210/@rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .addcar_desc{
                    width: 476/@rem;
                    padding: 30/@rem 20/@rem;
                    text-align: left;
                    .addcar_price{
                        margin-bottom: 25/@rem;
                        font-size: 42/@rem;
                        color: #FF6700;
                        i{
                            font-style: normal;
                            font-weight: 300;
                            font-size: 30/@rem;
                        }
                    }
                    .addcar_msg{
                        font-size: 30/@rem;
                    }
                }
            }
            .addcar_version{
                overflow-y: scroll;
                height: 625/@rem;
                
                border-top: 1/@rem solid #F7F7F7;
                text-align: left;
                .version{
                    .version_title{
                        height: 90/@rem;
                        line-height: 90/@rem;
                        font-size: 30/@rem;
                        color: #525252;
                    }
                    .version_item{
                        width: 680/@rem;
                        margin: 0 auto 20/@rem;
                        padding: 25/@rem 30/@rem;
                        border: 1/@rem solid #F0F0F0;
                        font-size: 24/@rem;
                        color: #090909;
                    }
                    .version_item.choice{
                        border-color: #FF6700;
                        color: #FF6700;
                    }
                }
                .color{
                    margin-bottom: 40/@rem;
                    text-align: left;
                    .color_title{
                        height: 90/@rem;
                        line-height: 90/@rem;
                        font-size: 30/@rem;
                        color: #525252;
                    }
                    .color_item{
                        width: 146/@rem;
                        padding: 25/@rem 50/@rem;
                        margin-right: 15/@rem;
                        border: 1/@rem solid #F0F0F0;
                        font-size: 27/@rem;
                        color: #090909;
                    }
                    .color_item.choice{
                        border-color: #FF6700;
                        color: #FF6700;
                    }
                }
                .num{
                    display: flex;
                    justify-content: space-between;
                    padding: 35/@rem 0;
                    border-top: 1/@rem solid #F7F7F7;
                    font-size: 27/@rem;

                }
                .num_btn{
                    display: flex;
                    width: 195/@rem;
                    height: 70/@rem;
                    line-height: 70/@rem;
                    text-align: center;
                    border: 1/@rem solid #F2F2F2;
                    .num_add,.num_minus,.num_show{
                        width: 65/@rem;
                        height: inherit;
                        font-size: 33/@rem;
                    }
                    .num_add,.num_minus{
                        border: none;
                        outline: none;
                        color: #CECECE;
                        background-color: #FAFAFA;
                    }
                }
            }
        }
    }
</style>
