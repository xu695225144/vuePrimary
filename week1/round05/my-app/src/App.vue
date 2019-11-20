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
                  <!-- itemProps子组件传递出来的状态 -->
                  <template v-slot:item="itemProps">
                    <span  :style="{fontSize:'20px',color:itemProps.checked ? 'red': 'blue'}">{{item}}</span>
                  </template>
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
