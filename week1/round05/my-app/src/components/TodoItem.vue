<template>
    <li class="item">
        <slot></slot>
    </li>
</template>

<script>
export default {
    props:['item'],
}
</script>
<style>
.item{
        color:blueviolet
    }
    
</style>