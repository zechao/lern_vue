<template>
	<ul>
		<li>Message id:{{id}}</li>
		<li>Message title:{{message}}</li>
	</ul>
</template>

<script>
export default {
	name: "About",
	props:['id','message'],
	mounted(){
		console.log(this.$route)
	}
};
</script>