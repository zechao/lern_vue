<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<h1>Computed name with VUE2:{{ fullNamev2 }}</h1>
	<h1>Computed name with VUE3:{{ fullNamev3 }}</h1>
</template>

<script>
import { computed, ref } from "vue";
export default {
	name: "App",
	computed: {
		fullNamev2() {
			return `${this.fname}-${this.lname}`;
		},
	},
	setup() {
		let fname = ref("Zechao");
		let lname = ref("jin");
		let fullNamev3 = computed(() => {
			return `${fname.value}-${lname.value}`;
		});
		return {
			fname,
			lname,
			fullNamev3,
		};
	},
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
