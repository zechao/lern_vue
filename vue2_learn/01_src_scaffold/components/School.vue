<template>
    <div class="demo">
        <h2>{{ schoolName }}</h2>
        <h2>{{ address }}</h2>
        <button @click="showName">show school name</button>
    </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
    name: "School",
    data() {
        return {
            schoolName: "UIB",
            address: "Valldemossa",
        };
    },
    methods: {
        showName() {
            alert(this.schoolName);
        },
    },
});
</script>
<style  scoped>

.demo {
    background-color: green;
}
</style>
