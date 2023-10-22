<template>
    <div class="son">
        <div>Son Component</div>
        <GrandsonComponent />
    </div>
</template>
    
<script >

import GrandsonComponent from "./GrandsonComponent.vue";

export default {
    name: 'SonComponent',
    setup() {
       
    },
    components: { GrandsonComponent }
}
</script>
    
<style  scoped>
.son {
    background-color: orange;
    padding: 10px;
}
</style>
    