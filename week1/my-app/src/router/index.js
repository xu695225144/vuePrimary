import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LearnVue from '@/components/LearnVue'
// import home from '@/components/home'
// import slot from '@/components/practice1/Slot'
// import event from '@/components/practice1/Event'
// import props from '@/components/practice1/Props'
// import big_props from '@/components/practice1/BigProps'
import personall_info from '@/components/practice2/PersonallInfo'
import practice1 from '@/components/practice1/index'
import practice2 from '@/components/practice2/index'

Vue.use(VueRouter)

// 创建路由
export default new VueRouter({
    routes: [
        {path:'/p1', component: practice1, name:"practice1",},
        {path:'/p2', component: practice2, name:"practice2",},
        {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
        },
        {
        path: '/learn',
        name: 'LearnVue',
        component: LearnVue
        },
        // {
        // path:'/slot',
        // name:"slot",
        // component: slot         
        // },
        // {path:'/event', component: event, name:"event",},
        // {path:'/props', component: props, name:"props",},
        // {path:'/big_props',component: big_props, name:"big_props",},
        {path:'/personall_info',component: personall_info, name:"personall_info",}
    ]
    })
// export default new VueRouter({
//     mode:'history',
//     router: [
//         {
//             path:'/home',
//             component: home,
//             redirect:'/slot',
//             childeren:[
//                 {path:'/slot', component: slot, name:"slot",},
//                 {path:'/event', component: event, name:"event",},
//                 {path:'/props', component: props, name:"props",},
//                 {path:'/big_props',component: big_props, name:"big_props",}
//             ]
//         },
//         {path:'/hello', component: HelloWorld, name:"HelloWorld",}
//     ]
// })
