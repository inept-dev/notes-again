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
	display: flex;
}
.sidebar {
	background: lightcoral;
	display: flex;
	width: 25vw;
	height: 95vh;
}
.manager {
	background: lightseagreen;
	display: flex;
	width: 75vw;
	height: 95vh;
}
footer {
	background: lightgreen;
	display: block;
	height: 5vh;
}
</style>
