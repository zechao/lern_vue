<template>
    <div>
        <h1>Student list</h1>
        <div v-for="s in students" :key="s.id">
            <Student :name="s.name" :gender="s.gender" :age="s.age" />
            <hr />
        </div>
        <div>
            
        <Student name="A" gender="b" age="20" />
        <Student :name="students[1].name" gender="b"  />
        </div>
    </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
    data() {
        return {
            students: [
                {
                    id: "01",
                    name: "zechao",
                    gender: "H",
                    age: 10,
                },
                {
                    id: "02",
                    name: "maria",
                    gender: "M",
                    age: 11,
                },
            ],
        };
    },
    methods: {
        showDOM() {
            console.log(this.$refs.sch.$data.address);
            this.$refs.sch.$data.address = "Palma de";
        },
    },
    name: "App",
    components: { Student },
};
</script>
