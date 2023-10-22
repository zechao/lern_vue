<template>
    <h1>Current value: {{ num }}</h1>
    <button @click="num++">+1</button>
    <hr>
    <h2>Cursor position x:{{ point.x }}, y:{{ point.y }}</h2>
</template>
    
<script >
import { ref } from 'vue'
import usePoint from '../hooks/usePoint'
export default {
    name: 'DemoCounter',
    setup() {
        let num = ref(0)
        let point = usePoint()



        return {
            point,
            num
        }
    }
}
</script>

    