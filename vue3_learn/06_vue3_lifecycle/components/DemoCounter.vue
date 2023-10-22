<template>
    <h1>Current value: {{ num }}</h1>
    <button @click="num++">+1</button>
</template>
    
<script >
import { onMounted, onUnmounted, ref } from 'vue'

export default {
    name: 'DemoCounter',
    setup() {
        let num = ref(0)


        onMounted(() => {
            console.log("onMounted");
        })


        onUnmounted(() => {
            console.log("onUnmounted");
        })



        return {
            num
        }
    }
}
</script>

    