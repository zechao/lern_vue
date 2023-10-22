<template>
	<div id="app">
		<div>Ancestor Component, Car name:{{ name }}, car price:{{ price }}</div>
		<SonComponent/>
	</div>
	<input type="text" v-model="price">
	<button @click="price = Math.round(Math.random()*10000)">Random price</button>
</template>
    
<script >

import { toRefs,provide, reactive } from 'vue';
import SonComponent from './components/SonComponent.vue';

export default {
	name: 'App',
	setup() {
		let car = reactive({
			name:'Kia',
			price:10000
		})


		provide('car',car)

		return {
			...toRefs(car)
		}
	},
	components: { SonComponent }
}
</script>
    
<style  scoped>
#app{
	background-color: gray;
	padding: 10px;
}
</style>
    