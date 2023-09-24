<template>
    <div>
        <img src="./assets/logo.png" alt="logo" />
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM">click to show DOM</button>
        <School ref="sch" />
        <Student name="Zechao" gender="H" age="20" />
    </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
    data() {
        return {
            msg: "Vue tutorial",
        };
    },
    methods: {
        showDOM() {
            console.log(this.$refs.sch.$data.address);
            this.$refs.sch.$data.address="Palma de"
        },
    },
    name: "App",
    components: { School, Student },
};
</script>
