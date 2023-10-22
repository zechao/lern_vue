<template>
    <div class="grandson">Grandson Component
        ,Car name:{{ name }}, car price:{{ price }}
    </div>
</template>
    
<script >
import { inject, toRefs } from 'vue'


export default {
    name: 'GrandonComponent',
    setup() {
        let car = inject('car')
        return {
            ...toRefs(car)
        }
    }
}
</script>
    
<style  scoped>
.grandson {
    background-color: cyan;
    padding: 10px;
}
</style>
    