<template>
    <div>
        <h1>{{msg}}</h1>
        <span>选择排序方式：
            <a @click.prevent="handleCurrentChange(1)">学号升序</a>
            <a @click.prevent="scoredesc">成绩前十名</a>
            <a @click.prevent="score">成绩后十名</a>
            <a @click.prevent="bjg">查看不及格</a>
            <a @click.prevent="jige">查看60-69</a>
            <a @click.prevent="lianghao">查看70-79</a>
            <a @click.prevent="youxiu">查看80-89</a>
            <a @click.prevent="henbang">查看90以上</a>
            <a @click.prevent="manfen">查看满分</a>
            <a @click.prevent="boy">只看男生</a>
            <a @click.prevent="girl">只看女生</a>
            <a @click.prevent="birth">生日排序</a>
        </span>
        <tab :tableData="tableData" @xg="handleEdit" @sc="handleDelete"></tab>
        <div class="block" v-show="xs">
            <el-pagination
              @size-change="handleSizeChange()"
              @current-change="handleCurrentChange(page)"
              :current-page.sync="page"
              :page-size="5"
              layout="prev, pager, next, jumper"
              :total="num">
            </el-pagination>
        </div>
        <add :form="form" @zj="tj"></add>
        <edit :massage="massage" @gengxin="edit"></edit>
    </div>
</template>
<script>
import Qs from 'qs'
import add from './add.vue'
import tab from './detail.vue'
import edit from './edit.vue'
    export default{
        data(){
            return {
                msg:"学生信息登记表",
                xs:true,
                tableData:[],
                page:1,
                num:0,
                formLabelWidth: '100px',
                form: {
                    name: '',
                    sex: '',
                    score:'',
                    birthday:'',
                    address:'',
                },
                form: {
                     name: '',
                     sex: '',
                     score:'',
                     birthday:'',
                     address:'',
                },
                massage: {
                     id:"",
                     name: '',
                     sex: '',
                     score:'',
                     birthday:'',
                     address:'',
                },

            }
        },
        created:function(){
            var _this=this
            this.http.get('http://127.0.0.1:3000/content', {
            params: {
                page: 1
            }
            })
            .then(function (response) {
               _this.tableData=response.data.lists;
               for(var i=0;i<response.data.lists.length;i++){
                   var birth=new Date(response.data.lists[i].birthday);
                   _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";

               };
               _this.num=response.data.num;
            })
            .catch(function (error) {
                 console.log(error);
            });

        },
        methods: {
            score(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/score', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            scoredesc(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/scoredesc', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            bjg(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/bjg', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            lianghao(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/lianghao', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            youxiu(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/youxiu', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            henbang(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/henbang', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            manfen(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/manfen', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            boy(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/boy', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            girl(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/girl', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            birth(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/birth', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            jige(){
                var _this=this;
                _this.xs=false;
                this.http.get('http://127.0.0.1:3000/jige', {
                     params: {

                     }

                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            handleSizeChange() {
                //console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                var _this=this;
                _this.xs=true;
                this.http.get('http://127.0.0.1:3000/content', {
                     params: {
                         page: val
                     }
                })
                .then(function (response) {
                     _this.tableData=response.data.lists;
                     for(var i=0;i<response.data.lists.length;i++){
                         var birth=new Date(response.data.lists[i].birthday);
                         _this.tableData[i].birthday=birth.getMonth()+1+"月"+birth.getDate()+"日";
                     };

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            tj(){
                var _this=this;
                this.http.post('http://127.0.0.1:3000/add',Qs.stringify(_this.form),{
                     headers:{
                         'Content-Type': 'application/x-www-form-urlencoded'
                     }
                })
                .then(function (response) {
                     if(response.data.msg==1){
                         _this.num=response.data.num;
                         _this.form.name="";
                         _this.form.sex="";
                         _this.form.birthday="";
                         _this.form.score="";
                         _this.form.address="";
                         alert("添加成功");
                         location.reload();
                     }else{
                         alert("添加失败，请重新尝试！")
                     }

                })
            },
            handleEdit(row) {
                var _this=this;
                 _this.dialogVisible = true;
                var id=row.id;
                this.http.get('http://127.0.0.1:3000/edit', {
                    params: {
                        id: id
                    }
                })
                .then(function (response) {
                   // console.log(response);
                    _this.massage=response.data.lists;
                    var birth=new Date(response.data.lists.birthday);
                    var m=birth.getMonth()+1;
                    var d=birth.getDate();
                    if(m<10){
                        m="0"+m
                    }
                    if(d<10){
                        d="0"+d
                    }
                    _this.massage.birthday=birth.getFullYear()+"-"+m+"-"+d;
                })
                .catch(function (error) {
                     console.log(error);
                });
            },
            handleDelete(row) {//删除
                var _this=this;
                var id=row.id;
                this.http.get('http://127.0.0.1:3000/remove', {
                    params: {
                         id: id
                    }
                })
                .then(function (response) {
                     if(response.data.msg==1){
                          _this.num=response.data.num;
                          alert("删除成功");
                          location.reload();

                     }else{
                          alert("删除失败，请重新尝试！")
                     }
                })
                .catch(function (error) {
                     console.log(error);
                });

            },
            edit(){
                var _this=this;
                this.http.post('http://127.0.0.1:3000/update',Qs.stringify(_this.massage),{
                     headers:{
                         'Content-Type': 'application/x-www-form-urlencoded'
                     }
                })
                .then(function (response) {
                      if(response.data.msg==1){
                           alert("修改成功");
                           _this.dialogVisible = false;
                           location.reload();
                      }else{
                      alert("修改失败，请重新尝试！")
                      }

                })
            }
        },
        components:{
            add:add,
            tab:tab,
            edit:edit,
        }
    }
</script>
<style>
    .el-input__inner{
        width:300px;
    }
    .block .el-input__inner{
        width:100%;
    }
    a{
        display:inline-block;
        padding:5px 12px;
        margin:5px;
        background:purple;
        color:white;
        text-decoration:none;
        font-weight:bold;
    }
    a:hover{
        background:red;
    }

</style>
