<template>
	<ul>
		<li :style="{ opacity }">Welcome to Vue News</li>
		<li>news001 <input type="text" /></li>
		<li>news002 <input type="text" /></li>
		<li>news003 <input type="text" /></li>
	</ul>
</template>

<script>
export default {
	name: "News",
	beforeDestroy() {
		console.log("component New will be destroyed");
		clearInterval(this.timer);
	},

	data() {
		return {
			opacity: 1,
		};
	},
	activated() {
		console.log("News activated");
		this.timer = setInterval(() => {
			console.log('@');
			this.opacity -= 0.01;
			if (this.opacity <= 0) this.opacity = 1;
		}, 16);
	},
	deactivated(){
		console.log("News deactivated");
		clearInterval(this.timer)
	}
};
</script>
