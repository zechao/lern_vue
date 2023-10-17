<template>
	<div class="col-xs-offset-2 col-xs-8">
		<div class="page-header">
			<h2>Vue Router Demo</h2>
			<button @click="back">back</button>
			<button @click="forward">forward</button>
			<button v-if="!isLogin" @click="login">Simulate login</button>
			<button v-if="isLogin" @click="logout">logout</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Banner",
	data() {
		return {
			isLogin: false,
		};
	},
	methods: {
		back() {
			this.$router.back();
		},

		forward() {
			this.$router.forward();
		},
		login() {
			this.isLogin = true;
			localStorage.setItem("login", true);
		},
		logout() {
			localStorage.setItem("login", false);
			this.isLogin = false;
		},
	},
};
</script>

<style></style>
