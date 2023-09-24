<template>
    <div>
        <School />
        <Student />
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
            this.$refs.sch.$data.address = "Palma de";
        },
    },
    name: "App",
    components: { School, Student },
};
</script>
