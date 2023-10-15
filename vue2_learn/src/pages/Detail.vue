<template>
	<ul>
		<li>Message id:{{$route.params.id}}</li>
		<li>Message title:{{$route.params.message}}</li>
	</ul>
</template>

<script>
export default {
	name: "About",
	mounted(){
		console.log(this.$route)
	}
};
</script>