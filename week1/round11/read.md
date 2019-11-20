组件更新
数据：父元素属性，组件状态，来自状态管理器
状态是组件自身的数据
属性是来自父组件的数据
状态改变未必会触发更新
属性改变未必会触发更新
vue响应式更新
Q：数组有哪些方法支持响应式更新？
    如果不支持如何处理，底层原理如何实现的？
A:支持： push();pop();shift();unshift();splice();sort();reverse();
    3不支持： filter();concat();slice();
    响应式更新的原理还是使用Object.defineProperty，对数组方法进行改写；相当于对数组做了一个代理层；
    不支持的解决方法：set//vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：
    
Vue.set(vm.items, indexOfItem, newValue)
vm.$set(vm.items, indexOfItem, newValue)