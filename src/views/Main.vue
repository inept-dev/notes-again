<template>
	<div class="home">
		<div class="sidebar-manager">
			<div class="sidebar">
				<sidebar />
			</div>
			<div class="manager">
				<manager />
			</div>
		</div>
		<footer>
			<h3>footer text</h3>
		</footer>
	</div>
</template>

<script>
import sidebar from "../components/Sidebar.vue";
import manager from "../components/Manager.vue";

export default {
	name: "Main",
	components: {
		sidebar,
		manager,
	},
};
</script>

<style scoped>
.sidebar-manager {
	display: block;
}
.sidebar {
	border: solid 1px red;
	display: inline-block;
	width: 25vw;
	height: 95vh;
}
.manager {
	border: solid 1px blue;
	display: inline-block;
	width: 70vw;
	height: 95vh;
}
footer {
	border: solid 1px green;
	display: block;
	width: 100vw;
	height: 5vh;
}
</style>
