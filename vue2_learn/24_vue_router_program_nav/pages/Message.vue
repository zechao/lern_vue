<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- <router-link
					:to="{
						path: `/home/message/detail/${m.id}/${m.title}`,
					}"
					>{{ m.title }}</router-link
				> -->
				<router-link
					:to="{
						name: 'detail',
						params: {
							id: m.id,
							message: m.title,
						},
					}"
					>{{ m.title }}</router-link
				>
				<button @click="pushShow(m)">push view</button>
				<button @click="replaceShow(m)">replace view</button>
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
	methods: {
		pushShow(m) {
			this.$router.push({
				name: "detail",
				query: {
					id: m.id,
					message: m.title,
				},
			});
		},
		replaceShow(m) {
			this.$router.replace({
				name: "detail",
				query: {
					id: m.id,
					message: m.title,
				},
			});
		},
	},
};
</script>
