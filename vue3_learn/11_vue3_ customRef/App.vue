<template>
	<button @click="showDemo = !showDemo">show/hide demo</button>
	<hr>
	<DemoComponent v-if="showDemo" />
	
</template>

<script>
import { ref } from "vue";
import DemoComponent from "./components/DemoComponent.vue";
export default {
	name: "App",
	setup() {
		let showDemo = ref(true)

		return {
			showDemo
		}

	},
	components: { DemoComponent }
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
