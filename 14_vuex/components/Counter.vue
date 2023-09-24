<template>
    <div>
        <h1>Current Value:{{ $store.state.sum }}</h1>
        <h3>Value 10x: {{ $store.getters.bigSum }}</h3>
        <h3>
            School: {{ $store.state.school }}, Studying:
            {{ $store.state.subject }}
        </h3>
        <select v-model.number="n">
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">odd +</button>
        <button @click="incrementWait">wait to +</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Counter",
    data() {
        return {
            n: 1,
        };
    },
    computed: {
        ...mapGetters(["sum", "school", "subject"]),
    },
    methods: {
        increment() {
            this.$store.dispatch("add", this.n);
        },
        decrement() {
            this.$store.dispatch("sub", this.n);
        },
        incrementOdd() {
            this.$store.dispatch("addOdd", this.n);
        },
        incrementWait() {
            this.$store.dispatch("addWait", this.n);
        },
    },
};
</script>
<style scoped>
button {
    margin: 2px;
}
</style>
