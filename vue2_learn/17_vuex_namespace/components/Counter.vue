<template>
    <div>
        <h1>Current Value:{{ sum }}</h1>
        <h3>Value 10x: {{ bigSum }}</h3>
        <h3>
            School: {{ school }}, Studying:
            {{ subject }}
        </h3>
        <h3 style="color: red">Student number:{{ personList.length }}</h3>
        <select v-model.number="n">
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">odd +</button>
        <button @click="incrementWait(n)">wait to +</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "Counter",
    data() {
        return {
            n: 1,
        };
    },
    computed: {
        ...mapState("countOptions", ["sum", "school", "subject"]),
        ...mapState("personOptions", ["personList"]),
        ...mapGetters("countOptions",["bigSum"]),
    },
    methods: {
        ...mapMutations("countOptions",{
            increment: "ADD",
            decrement: "SUB",
        }),

        ...mapActions("countOptions",{
            incrementOdd: "addOdd",
            incrementWait: "addWait",
        }),
    },
};
</script>
<style scoped>
button {
    margin: 2px;
}
</style>
