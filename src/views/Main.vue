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
	</div>
</template>

<script>
import menu from "../components/Menu.vue";
import sidebar from "../components/Sidebar.vue";
import manager from "../components/Manager.vue";

export default {
	name: "Main",
	components: {
		menu,
		sidebar,
		manager,
	},
};
</script>

<style scoped>
.sidebar-manager {
	display: flex;
	height: 100vh;
}
.sidebar {
	background: lightcoral;
	display: flex;
	width: 30vw;
}
.manager {
	background: lightseagreen;
	display: flex;
	width: 70vw;
}
/*
footer {
	background: lightgreen;
	display: block;
	height: 5vh;
}
*/
/* tablets and other mobile devices will use the same formatting for the sake of consistency */
@media only screen and (max-width: 1024px) {
	.sidebar {
		width: 100vw;
	}
	.manager {
		width: 100vw;
		display: none;
	}
}
</style>
