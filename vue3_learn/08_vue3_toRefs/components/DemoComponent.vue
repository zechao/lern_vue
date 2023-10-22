<template>
    <h1>Name :{{ name }}</h1>
    <h1>toRef Name :{{ name }}</h1>
    <h1>Age :{{ age }}</h1>
    <h1>Job type :{{ job.type }}, salary: {{ job.salary }}</h1>
    <input type="text" v-model="name">
    <hr>
    <button @click="age=Math.round(Math.random()*100)">Random Age</button>
    <button @click="job.salary=Math.round(Math.random()*100000)">Random salary</button>
</template>
    
<script >
import { reactive,toRef,toRefs } from 'vue'
export default {
    name: 'DemoComponent',
    setup() {
        let person = reactive({
            name: 'zechao',
            age: 18,
            job: {
                type: 'developer',
                salary: 20
            }
        })


        return {
            refName:toRef(person,'name'),
            ...toRefs(person)
        }

    }
}
</script>

    