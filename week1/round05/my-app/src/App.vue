<template>
  <div id="app">
            {{msg}}
            <div>
                <input type="text" v-model="info">
                <button @click="handleClick">添加</button>
            </div>
            <ul>
                <!-- <todo-item v-for="item in list" :key="item" :item="item"></todo-item> -->
                <todo-item v-for="item in list" :key="item">
                  <!-- 插槽 -->
                  <span style="font-size:20px">{{item}}</span>
                </todo-item>
            </ul>
        </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
export default {
  name: 'app',
  components: {
    TodoItem,
  },
  data() {
    return {
        msg: 'hello,vue',
        info: '',
        list: [],
    }
    
  },
  methods: {
    handleClick(){
        this.list.push(this.info)
        this.info = ''
    } 
  }
}
</script>

<style>

</style>
