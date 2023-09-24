<template>
    <div class="demo">
        <h2>Student name: {{ name }}</h2>
        <h2>Student gender:{{ gender }}</h2>
        <h2>Student age: {{ age }}</h2>
    </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
    name: "Student",
    // props:["name","gender","age"],
    // props:{
    //     name:String,
    //     gender:String,
    //     age:Number
    // },
    props: {
        name: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            default:999
        },
    },
    methods: {
        showName() {
            alert(this.name);
        },
    },
});
</script>
