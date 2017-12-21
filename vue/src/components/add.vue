<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = true">新增学生信息</el-button>
        <el-dialog title="新增信息" :visible.sync="dialogFormVisible">
             <el-form :model="form">
                 <el-form-item label="姓名" :label-width="formLabelWidth">
                      <el-input v-model="form.name" auto-complete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-select v-model="form.sex" placeholder="请选择性别">
                        <el-option label="男" value="boy"></el-option>
                        <el-option label="女" value="girl"></el-option>
                    </el-select>
                 </el-form-item>
                 <el-form-item label="成绩" :label-width="formLabelWidth">
                     <el-input v-model="form.score" auto-complete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="生日" :label-width="formLabelWidth">
                     <el-input v-model="form.birthday" auto-complete="off" type="date"></el-input>
                 </el-form-item>
                 <el-form-item label="地址" :label-width="formLabelWidth">
                     <el-input v-model="form.address" auto-complete="off"></el-input>
                 </el-form-item>
             </el-form>
             <div slot="footer" class="dialog-footer">
                 <el-button @click="dialogFormVisible = false">取 消</el-button>
                 <el-button type="primary" @click="add">确 定</el-button>
             </div>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                dialogFormVisible: false,
                formLabelWidth: '100px',
            }
        },
        props:["form"],
        methods:{
            add(){
                this.dialogFormVisible=true;
                this.$emit("zj")
            }
        }

    }
</script>
<style>

</style>
