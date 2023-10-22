<template>
	<h2>{{ sum }}</h2>
	<button @click="sum++">Sum</button>
	<h2>{{ greeting }}</h2>
	<button @click="greeting += '!'">greeting</button>
	<h2>Name: {{ person.name }}</h2>
	<h2>Age: {{ person.age }}</h2>
	<button @click="person.name += '!'">change name</button>
	<button @click="person.age++">change age</button>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
	name: "App",
	setup() {
		let sum = ref(0)
		let greeting = ref('hello')

		let person = reactive(
			{
				name: 'zechao',
				age: '30'
			}
		)

		// watch(sum,
		// 	(newValue, oldValue) => {
		// 		console.log(`Sum has changed, oldValue:${oldValue},newValue:${newValue}`)
		// 	})


		// watch([sum, greeting],
		// 	(newValue, oldValue) => {
		// 		console.log(`Sum has changed, oldValue:${oldValue},newValue:${newValue}`)
		// 	}, { immediate: true })


		// newValue and oldValue are the same
		// watch(person, (newValue, oldValue) => {
		// 	console.log(`Person has changed, oldValue:${JSON.stringify(oldValue)},newValue:${JSON.stringify(newValue)}`)
		// })

		// deep won't work, always watch nested properties
		// watch(person, (newValue, oldValue) => {
		// 	console.log(`Person has changed, oldValue:${JSON.stringify(oldValue)},newValue:${JSON.stringify(newValue)}`)
		// },{deep:false})

		watch(()=>[person.name,person.age], (newValue, oldValue) => {
			console.log(`Person has changed, oldValue:${JSON.stringify(oldValue)},newValue:${JSON.stringify(newValue)}`)
		})


		return {
			sum,
			greeting,
			person
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
