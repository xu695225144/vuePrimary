<template>
    <li class="item">
        <!-- 插槽 -->
        <input type="checkbox" v-model="checked">
        <slot name="item" v-bind="{checked}"></slot>
        <!-- 通过v-bind checked传递出 -->
    </li>
</template>

<script>
export default {
    props:['item'],
    data() {
        return {
            checked: false
        }        
    }
}
</script>
<style scoped>
.item{
        color:blueviolet
    }
    
</style>