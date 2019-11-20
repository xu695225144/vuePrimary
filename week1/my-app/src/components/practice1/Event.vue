<template>
    <div class="event">
    name: {{ name || "--"}}
    <br/>
    <el-input value="name" type="input" @change="handleChange"/>
    <div @click="handleDivClick">
        <el-button @click="handleClick">重置成功</el-button>
        <el-button @click.stop="handleClick">重置失败</el-button>
    </div>
    
    </div>
</template>

<script>
export default {
    name: "EventDemo",
    props: {
        name: String
    },
    methods: {
        handleChange(e){
            this.emit("Change",e.target.value);
        },
        handleDivclick(){
            this.emit("Change","");
        },
        handleClick(e){
            this.emit("Change",e.target.value);
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
