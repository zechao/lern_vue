<template>
	<ul>
		<li>Message id:{{$route.query.id}}</li>
		<li>Message title:{{$route.query.title}}</li>
	</ul>
</template>

<script>
export default {
	name: "About",
};
</script>