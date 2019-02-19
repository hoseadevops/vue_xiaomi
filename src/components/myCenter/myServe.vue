<template>
    <div class="myServe">
        <div class="serve_modular">
            <div class="serve_modular_item">
                <div class="serve_modular_item_logo vip">
                    <span class="iconfont icon-tianchongxing-"></span>
                </div>
                <div class="serve_modular_item_con top">
                    <span>会员中心</span>
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            </div>
            <div class="serve_modular_item">
                <div class="serve_modular_item_logo coupon">
                    <span class="iconfont icon-qianbao"></span>
                </div>
                <div class="serve_modular_item_con bottom">
                    <span>我的优惠</span>
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            </div>
        </div>
        <div class="serve_modular">
            <div class="serve_modular_item">
                <div class="serve_modular_item_logo serve">
                    <span class="iconfont icon-xin-tianchong"></span>
                </div>
                <div class="serve_modular_item_con top">
                    <span>服务中心</span>
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            </div>
            <div class="serve_modular_item">
                <div class="serve_modular_item_logo family">
                    <span class="iconfont icon-02_dianpuguanli"></span>
                </div>
                <div class="serve_modular_item_con bottom">
                    <span>小米之家</span>
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            </div>
        </div>
        <div class="serve_modular">
            <div class="serve_modular_item">
                <div class="serve_modular_item_logo fma">
                    <span class="iconfont icon-F"></span>
                </div>
                <div class="serve_modular_item_con top">
                    <span>F码通道</span>
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            </div>
            <div class="serve_modular_item">
                <div class="serve_modular_item_logo setting">
                    <span class="iconfont icon-shezhi"></span>
                </div>
                <div class="serve_modular_item_con bottom">
                    <span>设置</span>
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'myServe',
        data() {
            return {

            }
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .myServe{
        width: 100%;
        .serve_modular{
            height: 222/@rem;
            margin-bottom: 20/@rem;
            .serve_modular_item{
                display: flex;
                height: 111/@rem;
                line-height: 111/@rem;
                background-color: #fff;
                .serve_modular_item_logo{
                    width: 120/@rem;
                    .iconfont{
                        font-size: 50/@rem;
                    }
                }
                .serve_modular_item_con{
                    display: flex;
                    justify-content: space-between;
                    width: 630/@rem;
                    padding-right: 25/@rem;
                    font-size: 32/@rem;
                }
                //中间那条线
                .serve_modular_item_con.top{
                    border-bottom: 1/@rem solid #D9D9D9;
                }
                //每个图标的颜色
                .vip{
                    color: #FDBF2D;
                }
                .coupon{
                    color: #51BBE0;
                }
                .serve{
                    color: #F96C5E;
                }
                .family{
                    color: #FF8B43;
                }
                .fma{
                    color: #FFB302;
                }
                .setting{
                    color: #818C99;
                }
            }
        }
    }
</style>
