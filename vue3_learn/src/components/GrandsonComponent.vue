<template>
    <div class="grandson">Grandson Component
        ,Car name:{{ name }}, car price:{{ price }}
        <button @click="price = Math.round(Math.random()*10000)">Random price</button>
    </div>
    teleo
    <DialogComponent/>
</template>
    
<script >
import { inject, toRefs } from 'vue'
import DialogComponent from './DialogComponent.vue'

export default {
    name: 'GrandonComponent',
    setup() {
        let car = inject('car')
        return {
            ...toRefs(car)
        }
    },
    components:{DialogComponent}
}
</script>
    
<style  scoped>
.grandson {
    background-color: cyan;
    padding: 10px;
}
</style>
    