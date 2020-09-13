<template>
	<div class="component-catch">
		<div class="top-bar">
			<button class="nav-btn">NAV</button>
			<input type="text" placeholder="Search" class="search-bar"/>
			<button class="add-btn">ADD</button>
		</div>
		<div class="list-view">
			<div class="preview">
				<div class="title-preview">
					Title
				</div>
				<div class="body-preview">
					Body, three entire lines
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Sidebar",
};
</script>

<style scoped>
.component-catch {

}
.top-bar {
	background: rgba(0, 0, 0, 0.25);
	height: 10vh;
	width: 30vw;
}
.list-view {
	background: rgba(255, 255, 255, 0.25);
	height: 90vh;
	width: 30vw;
}
.nav-btn {
	height: 10vh;
	width: 10vh;
}
.search-bar {
	height: 10vh;
	width: calc(30vw - 20vh);
}
.add-btn {
	height: 10vh;
	width: 10vh;
}
.preview {
	height: 10vh;
	background: rgba(255, 255, 255, 0.25);
	padding: 10px;
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	border-bottom: 2px solid rgba(255, 255, 255, 0.25);
}
.title-preview {
	font-size: 16px;
	font-weight: bold;
	padding-bottom: 10px;
}
.body-preview {
	font-size: 12px;
}
/* tablets and other mobile devices will use the same formatting for the sake of consistency */
@media only screen and (max-width: 1024px) {
	.top-bar, .list-view {
		width: 100vw;
	}
	.search-bar {
		width: calc(100vw - 20vh);
	}
}
</style>
