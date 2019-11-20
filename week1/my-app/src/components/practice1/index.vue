<template>
    <div id="practice1">
        <!-- <ul>
        <router-link tag="li" to="/slot"><el-button type="primary">slot</el-button></router-link> 
        <router-link tag="li" to="/event"><el-button type="primary">event</el-button></router-link>
        <router-link tag="li" to="/props"><el-button type="primary">props</el-button></router-link> 
        <router-link tag="li" to="/big_props"><el-button type="primary">big_props</el-button></router-link> 
        <router-link tag="li" to="/personall_info"><el-button type="danger">personallInfo</el-button></router-link> 
    </ul>  -->
    {{msg}}
    <el-row>
        <el-col :span="8">
            <el-button type="primary">slot</el-button>
            <slot-demo ></slot-demo>
        </el-col>
        <el-col :span="8">
            <el-button type="primary">props</el-button>
            <props-demo
                name="Helloword"
                :type="type"
                :is-visable="false"
                :on-change="handlePropChange"
                title="属性Demo"
            />
        </el-col>
        <el-col :span="8">
            <el-button type="primary">event</el-button>
            <event-demo></event-demo>
        </el-col>
    </el-row>
    </div>
</template>
<script>
import SlotDemo from '@/components/practice1/Slot'
import EventDemo from '@/components/practice1/Event'
import PropsDemo from '@/components/practice1/Props'
export default {
    name:'p1',
    components: {
    SlotDemo,
    PropsDemo,
    EventDemo
    },
}
</script>
<style>

</style>