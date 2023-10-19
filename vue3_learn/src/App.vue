<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<h1>Hello {{ name }}</h1>
	<h1>Age: {{ age }}</h1>
	<h2>Job: {{job.type}}, Salary: {{job.salary}}</h2>
	<input type="text" v-model="name" />
	<button @click="resetAge">reset age</button>
	<button @click="resetSalary">reset age</button>

</template>

<script>
import { ref } from "vue";
export default {
	name: "App",
	setup() {
		let name = ref("Zechao");
		let age = ref(18);
		let job = ref({
			type: "developer",
			salary: 100,
		});

		function resetAge() {
			age.value = 0;
		}
		
		function resetSalary() {
			job.value.salary = 0;
		}
		return {
			name,
			age,
			job,
			resetAge,
			resetSalary
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
