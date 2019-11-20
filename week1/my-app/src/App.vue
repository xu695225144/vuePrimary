<template>
  <div id="app">
    <ul>
      <!-- <router-link tag="li" to="/hello"><el-button type="primary">hello</el-button></router-link>
        <router-link tag="li" to="/learn"><el-button type="primary">learn</el-button></router-link>  -->
    </ul>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  prop:{
    name: 'name'
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li{
  list-style: none;
  display: inline-block;
  margin: 3px;
}
</style>
