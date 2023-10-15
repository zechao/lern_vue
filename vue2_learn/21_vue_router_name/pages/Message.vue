<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- <router-link
					v-bind:to="`/home/message/detail?id=${m.id}&title=${m.title}`"
					>{{ m.title }}</router-link
				> -->

				<router-link
					:to="{
						name: 'detail',
						query: { ...m },
					}"
					>{{ m.title }}</router-link
				>
			</li>
		</ul>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "Message",
	data() {
		return {
			messageList: [
				{ id: "01", title: "message 1" },
				{ id: "02", title: "message 2" },
				{ id: "03", title: "message 3" },
			],
		};
	},
};
</script>
