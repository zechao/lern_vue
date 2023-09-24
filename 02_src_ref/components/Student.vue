<template>
    <div class="demo">
        <h2>Student name: {{ studentName }}</h2>
        <h2>Student age: {{ age }}</h2>
        <button @click="showName">show student name</button>
    </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
    name: "Student",
    data() {
        return {
            studentName: "Zechao",
            age: 29,
        };
    },
    methods: {
        showName() {
            alert(this.studentName);
        },
    },
});
</script>
