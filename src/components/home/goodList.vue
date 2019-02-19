<template>
    <div class="goodlist">
        <ul class="goodlist_type">
            <li class="type_item" v-for="(item,index) in homeType" :key="index">
                <router-link class="type_recommend" :to="{name:'detail',params:{id:item.head[0].id}}">
                    <img :src="item.head[0].src" alt="">
                </router-link>
                <router-link class="type_title" :to="{name:'detail',params:{id:item.head[1].id}}">
                    <img :src="item.head[1].src" alt="">
                </router-link>
                <ul class="goods_box">
                    <li class="goods_item" v-for="(value,i) in item.item" :key="i">
                        <router-link :to="{name:'detail',params:{id:value.id}}">
                            <img :src="value.src" alt="">
                            <p class="goods_title">{{ value.title }}</p>
                            <p class="goods_desc">{{ value.desc }}</p>
                            <p class="goods_price">
                                ￥<span class="now_price">{{ value.nowPrice }}</span> 起 
                                <span class="origin_price" v-if="value.origPrice">{{ value.origPrice }}</span>
                            </p>
                        </router-link>
                    </li>
                </ul>
                <div class="more_goods">
                    更多{{ item.title }}产品 >
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import homeType from '../../data/hometype.js'
    export default {
        name: 'goodlist',
        data() {
            return {
                homeType
            }
        },
        components: {}
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .goodlist{
        width: 100%;
        .goodlist_type{
            .type_item{
                margin: 20/@rem 0;
                .type_recommend{
                    width: 100%;
                    height: 292/@rem;
                    img{
                        width: 100%;
                        height: inherit;
                    }
                }
                .type_title{
                    width: 100%;
                    height: 460/@rem;
                    img{
                        width: 100%;
                        height: inherit;
                    }
                }
                .goods_box{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding-top: 5/@rem;
                    margin: 5/@rem 0;
                    background-color: #fff;
                    .goods_item{
                        width: 49.5%;
                        a{
                            text-align: left;
                            img{
                                width: 100%;
                                margin-bottom: 15/@rem;
                            }
                            p{
                                padding: 0 40/@rem;
                                margin-bottom: 15/@rem;
                            }
                            .goods_title{
                                font-size: 30/@rem;
                                color: #434343;
                            }
                            .goods_desc{
                                overflow: hidden;
                                width: 100%;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                font-size: 24/@rem;
                                color: #979797;
                            }
                            .goods_price{
                                font-size: 22/@rem;
                                color: #EC7268;
                                .now_price{
                                    font-size: 28/@rem;
                                }
                                .origin_price{
                                    text-decoration: line-through;
                                    color: #6D6D6D;
                                }
                            }
                        }
                    }
                }
                .more_goods{
                    height: 105/@rem;
                    text-align: center;
                    line-height: 105/@rem;
                    font-size: 30/@rem;
                    color: #707070;
                    background-color: #fff;
                }
            }
        }
    }
</style>
