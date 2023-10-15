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
							test: true,
						},
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
