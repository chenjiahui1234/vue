<template>
    <div class="tab" @mouseover="pause" @mouseout="play">
        <ul>
            <li v-for="(item,index) in arr" :class="{show:xs[index]}"><a :href="item.href"><img :src="item.img" /></a></li>
        </ul>
        <ol>
            <li v-for="(item,index) in arr" :class="{act:xs[index]}" @click="tab(index)">{{index+1}}</li>
        </ol>
        <button class="left" @click="left">前一张</button>
        <button class="right" @click="right">后一张</button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                arr:[{href:"https://www.baidu.com/",img:"static/images/banner01.jpeg"},
                {href:"https://translate.google.cn/",img:"static/images/banner02.jpg"},
                {href:"http://www.sina.com.cn/",img:"static/images/banner03.jpg"},
                {href:"http://www.sohu.com/",img:"static/images/banner04.jpeg"},
                {href:"https://123.sogou.com/",img:"static/images/banner05.jpg"},],
                xs:[true],
                num:0,
                timer:null,
            }
        },
        methods:{
            tab(n){
                this.num=n;
                for(var i=0;i<this.arr.length;i++){
                    this.xs.splice(i,1,false);
                }
                this.xs.splice(this.num,1,true);
            },
            left(){
                var that=this;
                that.num--;
                if(that.num<0){
                    that.num=that.arr.length-1;
                }
                that.tab(that.num);
            },
            right(){
                var that=this;
                that.num++;
                if(that.num==that.arr.length){
                    that.num=0;
                }
                that.tab(that.num);
            },
            pause(){
                clearInterval(this.timer);
            },
            play(){
                let that = this;
                that.timer=setInterval(function(){
                    that.num++;
                    if(that.num==that.arr.length){
                        that.num=0;
                    }
                    that.tab(that.num);
                },2000)
            }
        },
        created:function(){
            let that = this;
            that.timer=setInterval(function(){
                that.num++;
                if(that.num==that.arr.length){
                    that.num=0;
                }
                that.tab(that.num);
            },2000)

        }
    }
</script>
<style>
    .tab{
        width:767px;
        height:300px;
        margin:20px auto;
        position:relative;
    }
    li{
        list-style:none;
        float:left;
    }
    ul{
        position:absolute;
        top:0;
        left:0;
        -webkit-padding-start: 0;
        -webkit-margin-before:0
    }
    img{
        width:767px;
        height:300px;
    }
    ul li{
        display:none;
    }
    .show{
        display:block;
    }
    ol{
        position:absolute;
        bottom:30px;
        left:300px;
        z-index:100;
        -webkit-padding-start:0;
    }
    ol li{
        width:25px;
        height:25px;
        line-height:25px;
        border-radius:50%;
        background:white;
        margin: 0 5px;
    }
    .act{
        background:purple;
        color:white;
    }
    button{
        width:25px;
        height:70px;
        border:none;
        position:absolute;
        z-index:500;
        background:#ccc;
        color:white;
        outline:none;
    }
    button:hover{
        background:white;
        color:red;
    }
    .left{
        left:0;
        top:100px;
    }
    .right{
         right:0;
         top:100px;
    }
</style>
