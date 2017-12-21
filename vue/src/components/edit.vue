<template>
    <div>
         <el-dialog title="信息修改" :visible.sync="dialogVisible">
              <el-form :model="massage">
                   <el-form-item label="id" :label-width="formLabelWidth" style="display:none">
                       <el-input v-model="massage.id" auto-complete="off" type="hidden"></el-input>
                   </el-form-item>
                   <el-form-item label="姓名" :label-width="formLabelWidth">
                        <el-input v-model="massage.name" auto-complete="off"></el-input>
                   </el-form-item>
                   <el-form-item label="性别" :label-width="formLabelWidth">
                        <el-select v-model="massage.sex" placeholder="请选择性别">
                             <el-option label="男" value="boy"></el-option>
                             <el-option label="女" value="girl"></el-option>
                        </el-select>
                   </el-form-item>
                   <el-form-item label="成绩" :label-width="formLabelWidth">
                         <el-input v-model="massage.score" auto-complete="off"></el-input>
                   </el-form-item>
                   <el-form-item label="生日" :label-width="formLabelWidth">
                         <el-input v-model="massage.birthday" auto-complete="off" type="date"></el-input>
                   </el-form-item>
                   <el-form-item label="地址" :label-width="formLabelWidth">
                         <el-input v-model="massage.address" auto-complete="off"></el-input>
                   </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                   <el-button @click="dialogVisible = false">取 消</el-button>
                   <el-button type="primary" @click="edit(massage)">确 定</el-button>
              </div>
         </el-dialog>
    </div>
</template>
<script>
    import bus from "./meijie.js"
    export default{
        data(){
            return{
                dialogVisible:false,
                formLabelWidth: '100px',
            }
        },
        props:["massage"],
        methods:{
            edit(n){
                this.dialogVisible=false;
                this.$emit("gengxin")
            }
        },
        mounted(){
            bus.$on("xiugai",(e)=>{
                this.dialogVisible=true;
            })
        }

    }
</script>
<style></style>
