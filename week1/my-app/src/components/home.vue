<template>
    <div class="home">
    <div class="nav">
        <router-link to="/slot" ><el-button>slot</el-button></router-link>
        <router-link tag='a' :to="'/event'" ><el-button>event</el-button></router-link>
        <router-link tag='a' :to="'/props'" ><el-button>props</el-button></router-link>
    </div>
    <router-view class="content"></router-view>
    <div>123</div>
        
    </div>
</template>

<script>
export default {
    name: "home",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav{
        height: 50px;
        width:100%
    }
    .content{
        height:100%;
        width:100%;
    }
</style>
