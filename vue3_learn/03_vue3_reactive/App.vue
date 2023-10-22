<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<h1>Hello {{ person.name }}</h1>
	<h1>Age: {{ person.age }}</h1>
	<h2>Job: {{ person.job.type }}, Salary: {{ person.job.salary }}</h2>
	Name:<input type="text" v-model="person.name" /><br>
	Job type:<input type="text" v-model="person.job.type" /><br>
	<button @click="randomAge">random age</button>
	<button @click="randomSalary">random salary</button>
</template>

<script>
import { reactive } from "vue";
export default {
	name: "App",
	setup() {

		let person = reactive({
			name:"Zechao",
			age :18,
			job :{
				type: "developer",
						salary: 100,
			}
		})

		function randomAge() {
			person.age = Math.round(Math.random()*100);
		}
		
		function randomSalary() {
			person.job.salary = Math.round(Math.random()*100000);;
		}
		return {
			person,
			randomAge,
			randomSalary
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
