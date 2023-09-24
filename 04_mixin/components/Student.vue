<template>
    <div class="demo">
        <h2>Student name: {{ name }}</h2>
        <h2>Student age: {{ age }}</h2>
        <button @click="showName">show student name</button>
    </div>
</template>
<script>
import mixin from '../mixin'
export default {
    name: "Student",
    data() {
        return {
            name: "Zechao",
            age: 29,
        };
    },
    mixins:[mixin]
};
</script>
