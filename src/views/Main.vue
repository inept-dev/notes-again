<template>
	<div class="home">
		<div class="sidebar">
			<sidebar />
		</div>
		<div class="manager">
			<manager />
		</div>
		<footer>
			just some footer text idk
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
.sidebar {
	border: solid 1px red;
	display: inline-flex;
	width: 25vw;
	height: 95vh;
}

.manager {
	border: solid 1px blue;
	display: inline-flex;
	width: 75vw;
	height: 95vh;
}

footer {
	border: solid 1px green;
	display: block;
	height: 5vh;
}
</style>
