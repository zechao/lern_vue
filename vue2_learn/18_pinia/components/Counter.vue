<template>
    <div>
        <h1>Current Value:{{ sum }}</h1>
        <h3>Value 10x: {{ bigSum }}</h3>
        <h3>
            School: {{ school }}, Studying:
            {{ subject }}
        </h3>
        <h3 style="color: red">Student number:{{ persons.length }}</h3>
        <select v-model.number="n">
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add(n)">+</button>
        <button @click="sub(n)">-</button>
        <button @click="addOdd(n)">odd +</button>
        <button @click="addWait(n)">wait to +</button>
    </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../store/counter";
import { usePersonsStore } from "../store/person";

export default {
    name: "Counter",
    data() {
        return {
            n: 1,
        };
    },
    computed: {
        ...mapState(useCounterStore, ["sum", "school", "subject", "bigSum"]),
        ...mapState(usePersonsStore, ["persons"]),
    },
    methods: {
        ...mapActions(useCounterStore, ["add", "sub", "addOdd", "addWait"]),
    },
};
</script>
<style scoped>
button {
    margin: 2px;
}
</style>
