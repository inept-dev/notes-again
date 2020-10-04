<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	notes: {
		active: {
			view: [
				{
					title: "title",
					body: "body",
					tags: "tags",
					id: "id?",
					checkbox: "checkbox",
				},
			],
			edit: [],
		},
		archived: {
			view: [],
			edit: [],
		},
		pinned: [],
		favorite: [],
		trash: [],
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
