<template>
    <div class="demo">
        <h2>School name: {{ name }}</h2>
        <h2>School address: {{ address }}</h2>
        <button @click="showName">show school name</button>
    </div>
</template>
<script>
import mixin from '../mixin'
export default {
    name: "School",
    data() {
        return {
            name: "UIB",
            address: "Valldemossa",
        };
    },
    mixins:[mixin]
};
</script>
<style scoped>
.demo {
    background-color: green;
}
</style>
