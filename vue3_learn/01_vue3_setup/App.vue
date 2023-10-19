<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<h1>Hello {{ name }}</h1>
	<input v-model="name" />
	<button @click="sayHello">sayHello</button>
</template>

<script>
export default {
	name: "App",
	setup() {
		let name = "Zechao";

		function sayHello() {
			alert(`Hello ${name}!`);
		}

		return {
			name,
			sayHello,
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
