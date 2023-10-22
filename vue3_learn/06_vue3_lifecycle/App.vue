<template>
	<button @click="showDemo=!showDemo">show/hide demo</button>
	<DemoCounter v-if="showDemo" />
</template>

<script>
import { ref, } from "vue";
import DemoCounter from "./components/DemoCounter.vue";
export default {
	name: "App",
	setup() {
		let showDemo = ref(true)

		return {
			showDemo
		}

	},
	components: { DemoCounter }
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
