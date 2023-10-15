<template>
    <div>
        <h1>Person list</h1>
        <h2>Sum value: {{ sum }}</h2>
        <input type="text" v-model="name" placeholder="input your name" />
        <button @click="add">Add</button>
        <ul>
            <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
import { useCounterStore } from "../store/counter";
import { usePersonsStore } from "../store/person";
import { mapState, mapStores } from "pinia";

export default {
    name: "Person",
    data() {
        return {
            name: "",
        };
    },
    methods: {
        add: function () {
            this.personsStore.addPerson({
                id: nanoid(),
                name: this.name,
            });
        },
    },
    computed: {
        ...mapStores(usePersonsStore),
        ...mapState(usePersonsStore, ["persons"]),
        ...mapState(useCounterStore, ["sum"]),
    },
};
</script>

<style></style>
