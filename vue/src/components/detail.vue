<template>
    <div>
        <el-table
            :data="tableData"
            stripe
            border
            style="width: 100%">
            <el-table-column
                 prop="id"
                 label="学号">
            </el-table-column>
            <el-table-column
                 prop="name"
                 label="姓名">
            </el-table-column>
            <el-table-column
                 prop="sex"
                 label="性别">
            </el-table-column>
            <el-table-column
                 prop="score"
                 label="成绩">
            </el-table-column>
            <el-table-column
                 prop="birthday"
                 label="生日">
            </el-table-column>
                 <el-table-column
                 prop="address"
                 label="地址">
            </el-table-column>
            <el-table-column label="操作">
                 <template slot-scope="scope">
                      <el-button
                           size="mini"
                           @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                      <el-button
                           size="mini"
                           type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                 </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import bus from "./meijie.js"
    export default{
        data(){
            return {

            }
        },
        props:["tableData"],
        methods:{
             handleEdit:function(index,row){
                 bus.$emit("xiugai",row);
                 this.$emit("xg",row)
             },
             handleDelete:function(index,row){
                 this.$emit("sc",row)
             }
        }
    }
</script>
<style>

</style>
