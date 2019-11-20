<template>
    <div class="props">
    name:{{ name }}
    <br/>
    <!-- type:{{ type }}
    <br/> -->
    list: {{ list }}
    <br/>
    isVisable: {{ isVisable }}
    <br/>
    <el-button @click="handleClick">change type</el-button>
    </div>
</template>

<script>
export default {
    name: "propsDemo",
    props: {
        name:String,
        type: {
            // 自定义校验枚举类型es6
            // validator: function(value) {
            //     return ["success","warning","danger"].includes(value);           }
        },
        // list 数组
        // list: {
        //     type: Array,
        //     // 工厂函数
        //     default: () =>[]
        // },
        isVisable: {
            type: Boolean,
            default: false
        },
        onChange: {
            type: Function,
            default: () =>{}
        }
    },
    methods: {
        handleClick(){
            this.onChange(this.type === "success" ? "warning" : "success");
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
