<template>
	<div>
		<div class="row">
			<Banner />
		</div>
		<div class="row">
			<div class="col-xs-2 col-xs-offset-2">
				<div class="list-group">
					<!-- replace will replace current hisotry in browser -->
					<router-link
						to="/home"
						active-class="active"
						class="list-group-item"
						>Home</router-link
					>
					<router-link
						to="/about"
						active-class="active"
						class="list-group-item"
						>About</router-link
					>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Banner from "./components/Banner.vue";
export default {
	name: "App",
	components: { Banner },
};
</script>
