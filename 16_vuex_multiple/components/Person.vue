<template>
    <div>
        <h1>Person list</h1>
        <h2>Sum value: {{sum}}</h2>
        <input type="text" v-model="name" placeholder="input your name" />
        <button @click="addPerson">Add</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
import {mapState} from 'vuex'

export default {
    name: "Person",
    data() {
        return {
            name: "",
        };
    },
    methods: {
        addPerson() {
            this.$store.commit("ADD_PERSON", {
                id: nanoid(),
                name: this.name,
            });
        },
    },
    computed: {
        ...mapState(['personList','sum'])
    },
};
</script>

<style></style>
