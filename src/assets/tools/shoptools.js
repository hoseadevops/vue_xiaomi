let shopTools = {}
let shop = JSON.parse(window.localStorage.getItem('shopInfo')) || {}

//shop的结构
/*
    shop:{
        201545:[
            {
                id:201545
                color:"blue",
                version:'8GB + 128GB',
                num:1
            }
        ]
    }
*/

//goods的结构
/*
    goods:{
        id:201545,
        color:"blue",
        version:'8GB + 128GB',
        num:1
    }
*/

//添加到购物车
shopTools.addUpdate = function(cargo){
    let goods = {}
    Object.assign(goods,cargo)
    if(shop[goods.id]){
        //如果该种商品存在，就遍历该种商品的数组
        let isExist = shop[goods.id].some((ele,index,arr)=>{
            let bool = (ele.color === goods.color && ele.version === goods.version)
            if(bool){
                ele.num += goods.num
            }
            return bool
        })
        !isExist && shop[goods.id].push(goods)
    }else{
        shop[goods.id] = []
        // delete goods.id,
        shop[goods.id].push(goods)
    }
    this.save(shop)
}

//减少
shopTools.minusUpdate = function(cargo){
    let goods = {}
    Object.assign(goods,cargo)
    if(shop[goods.id]){
        //如果该种商品存在，就遍历该种商品的数组
        shop[goods.id].some((ele,index,arr)=>{
            if(ele.color === goods.color && ele.version === goods.version){
                ele.num != 0 && (ele.num += -1)
                if(ele.num === 0)arr.splice(index,1)
                return true
            }
        })
    }
    this.save(shop)
}

//删除
shopTools.delete = function(cargo){
    let goods = {}
    Object.assign(goods,cargo)
    if(shop[goods.id]){
        //如果该种商品存在，就遍历该种商品的数组
        let isExist = shop[goods.id].some((ele,index,arr)=>{
            let bool = ele.color === goods.color && ele.version === goods.version
            if(bool){
                arr.splice(index,1)
                return bool
            }
        })
        isExist && this.save(shop)
    }
}



//获取
shopTools.getItem = function(){
    let arr = JSON.parse(window.localStorage.getItem('shopInfo'))||{}
    let shopArr = []
    Object.values(arr).forEach((item)=>{
        item.forEach((value)=>{
            shopArr.push(value)
        })
    })
    return shopArr
    //return (JSON.parse(window.localStorage.getItem('shopInfo')))
}

//获取总数
shopTools.getTotal = function(){
    let sum = 0
    for(let value of Object.values(shop)){
        value.forEach(ele => {
            sum += ele.num
        });
    }
    return sum
}

//存储
shopTools.save = function(){
    window.localStorage.setItem('shopInfo',JSON.stringify(shop))
}

export default  shopTools