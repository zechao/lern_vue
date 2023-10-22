<template>
    <h1>DEMO</h1>
    <h2>Name :{{ name }}</h2>
    <h2>toRef Name :{{ name }}</h2>
    <h2>Age :{{ age }}</h2>
    <h2>Job type :{{ job.type }}, salary: {{ job.salary }}</h2>
    <input type="text" v-model="name">
    <hr>
    <button @click="age = Math.round(Math.random() * 100)">Random Age</button>
    <button @click="job.salary = Math.round(Math.random() * 100000)">Random salary</button>
    <h2>Update delay text:{{ text }}</h2>
    <h2>customRef with useDebouncedRef:<input v-model="text" /></h2>
</template>
    
<script >
import { reactive, toRef, toRefs } from 'vue'
import { useDebouncedRef } from '../hooks/hooks.js'
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


        const text = useDebouncedRef('hello',1000)
        return {
            text,
            refName: toRef(person, 'name'),
            ...toRefs(person)
        }

    }
}
</script>

    