<template>
    <div >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号" prop="phoneNumber">
                <el-input v-model="ruleForm.phoneNumber"></el-input>
            </el-form-item>
            <el-form-item label="邮编" prop="zipCode">
                <el-input v-model="ruleForm.zipCode"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button  @click="submitForm('ruleForm')">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'PersonallInfoDemo',
    model: {
        prop: "phoneInfo",
        event: "change"
    },
    props: {
        phoneInfo: Object,
        zipCode: String
    },
    methods: {
    },
    data(){
        return {
            ruleForm: {

                
                phoneNumber: '',
                zipCode: '',
            },
            rules: {
                phoneNumber: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { type: 'phone', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                zipCode: [
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ]
            }
        }
    }
    // methods: {
    // onSubmit() {
    //     this.$refs[formName].validate((valid) => {
    //         if (valid) {
    //         alert('submit!');
    //         } else {
    //         // console.log('error submit!!');
    //         return false;
    //         }
    //     });
    //     },
    //     resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //     }
        // console.log('submit!');
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
