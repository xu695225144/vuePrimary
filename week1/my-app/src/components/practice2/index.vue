<template>
    <div>
        <PersonallInfo  v-model="phoneInfo" :zip-code.sync ="zipCode"/>
        <PersonallInfo 
        :phone-info="phoneInfo"
        :zip-code="zipCode"
        @change="val => (phoneInfo = val)"
        @update:zipCode="val => (zipCode = val)"
        />
        phoneInfo: {{ phoneInfo }}
        <br/>
        zipCode: {{ zipCode}}
    </div>
</template>
<script>
import PersonallInfo from '@/components/practice2/PersonallInfo'
export default {
    components: {
        PersonallInfo
    },
    data() {
        return {
            phoneInfo: {
                areaCode: '+86',
                phone: ""
            },
            zipCode:""
        }
    }
}
</script>
<style>

</style>