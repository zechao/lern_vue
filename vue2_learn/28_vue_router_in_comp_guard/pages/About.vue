<template>
	<h2>我是About的内容</h2>
</template>

<script>
export default {
	name: "About",
	mounted() {
		console.log("router:", this.$route);
	},
	beforeRouteEnter(to, from, next) {
		console.log("beforeRouteEnter");
		if (localStorage.getItem("login") === "true") {
			next();
		} else {
			alert(` path [${to.path}] require login, you are not logged`);
		}
	},
	beforeRouteLeave(to, from, next) {
		const answer = window.confirm(
			"Do you really want to leave? you have unsaved changes!"
		);
		if (answer) next();
	},
};
</script>wa