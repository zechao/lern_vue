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
    <h2>toRaw Person {{ JSON.stringify(rawPerson) }}</h2>
</template>
    
<script >
import { reactive, toRaw, toRef, toRefs, isReactive,markRaw } from 'vue'
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

        let rawPerson = toRaw(person)
        const foo = markRaw({})
        console.log(isReactive(reactive(foo))) // false

        // also works when nested inside other reactive objects
        const bar = reactive({ foo })
        console.log(isReactive(bar.foo)) // false

        return {
            person,
            rawPerson,
            refName: toRef(person, 'name'),
            ...toRefs(person)
        }

    }
}
</script>

    