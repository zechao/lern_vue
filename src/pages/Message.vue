<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<a href="/message1">{{m.title}}</a>
			</li>
		</ul>
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
