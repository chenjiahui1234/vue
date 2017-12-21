<template>
    <div class="banner">
        <ul>
            <li v-for="(item,index) in arr" @mouseover="zs(index)" @mouseout="yc(index)" :class="{act:xs[index]}">
                <a :href="item.href">{{item.name}}</a>
                <div :class="{show:xs[index]}">
                    <ul>
                        <li v-for="(val,num) in item.cont"><a :href="val.href">{{val.cont}}</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                arr:[
                    {href:"http://localhost:8080/#/nav",name:"首页",cont:[]},
                    {href:"http://localhost:8080/#/nav",name:"女装",cont:[{href:"#",cont:"冬装外套"},{href:"#",cont:"保暖系列"},{href:"#",cont:"冬装短裙"}]},
                    {href:"http://localhost:8080/#/nav",name:"男装",cont:[{href:"#",cont:"男士棉服"},{href:"#",cont:"男士保暖"}]},
                    {href:"http://localhost:8080/#/nav",name:"童装",cont:[{href:"#",cont:"冬季套装"}]},
                    {href:"http://localhost:8080/#/nav",name:"鞋区",cont:[{href:"#",cont:"女鞋专柜"},{href:"#",cont:"男鞋专柜"},{href:"#",cont:"童鞋专柜"}]},
                    {href:"http://localhost:8080/#/nav",name:"箱包",cont:[{href:"#",cont:"女士箱包"},{href:"#",cont:"钱包"},{href:"#",cont:"旅行箱"},{href:"#",cont:"其他箱包"}]},
                    {href:"http://localhost:8080/#/nav",name:"关于我们",cont:[{href:"#",cont:"公司介绍"},{href:"#",cont:"供应商介绍"},{href:"#",cont:"物流介绍"},{href:"#",cont:"公司动态"}]},
                    {href:"http://localhost:8080/#/nav",name:"联系我们",cont:[{href:"#",cont:"业务咨询"},{href:"#",cont:"合作洽谈"}]},
                ],
                xs:[false]
            }
        },
        methods:{
            zs(n){
                for(var i=0;i<this.arr.length;i++){
                    this.xs.splice(i,1,false);
                }
                this.xs.splice(n,1,true);
            },
            yc(n){
                this.xs.splice(n,1,false);
            }
        }
    }
</script>
<style>
    *{
        margin:0;
        padding:0;
    }
    li{
        list-style:none;
    }
    .banner{
        margin-top:30px;
        width:100%;
        height:35px;
        background:#fdcd94;
        line-height:35px;
    }
    .banner>ul{
        width:80%;
        margin:0 auto;
        height:35px;
    }
    .banner>ul>li{
        float:left;
        position:relative;
        padding:0 20px;
        margin-right:18px;
    }
    .banner>ul .act{
        background:blue;
    }
    .banner>ul .act>a{
        color:white;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    .banner>ul>li div{
        position:absolute;
        left:0;
        width:100%;
        background:white;
        z-index:500;
        display:none;
    }
    .banner>ul>li .show{
        display:block;
    }
    .banner>ul>li div ul li{
        text-align:center;
        margin:3px auto;
    }
    .banner>ul>li div ul li:hover{
        background:purple;
    }
    .banner>ul>li div ul li:hover a{
        color:white;
    }
</style>
