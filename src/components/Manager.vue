<template>
	<div class="component-catch">
		<div class="top-bar">
			<div class="back-btn" @click="test()">
				<button class="back">BACK</button>
			</div>
			<div class="work-btn">
				<button class="archive">ARCHIVE</button>
				<button class="pin">PIN</button>
				<button class="favorite">FAVORITE</button>
				<button class="trash">TRASH</button>
			</div>
		</div>
		<!--
		<div class="mkdn-editor"></div>
		-->
		<div v-if="this.manage !== 'stinky'">
			<div class="title-input">
				<textarea v-model="this.title"></textarea>
			</div>
			<div class="body-input">
				<textarea v-model="this.body"></textarea>
			</div>
		</div>
		<div v-else>
			<div class="title-input">
				temporary
			</div>
		</div>
	</div>
</template>

<script>
import app from "../App.vue";

export default {
	name: "Manager",
	data() {
		return {
			notes: app.data().notes,
			manage: app.data().manage,
			title: app.data().notes.get(app.data().manage),
			body: app.data().notes.get(app.data().manage),
			tag: [],
		};
	},
	methods: {
		test() {
			console.log(app.data().active)
		}
	}
};
</script>

<style scoped>
.component-catch {
	width: 70vw;
}
.component-catch textarea {
	width: 70vw;
	/*  textarea is an inline (or inline-block) element, and the gap is the space reserved for descenders in text */
	vertical-align: top;
	border: none;
	background-color: lightblue;
	resize: none;
}
.top-bar {
	display: flex;
	width: 70vw;
	background: rgba(0, 0, 0, 0.25);
	height: 10vh;
}
.title-input textarea {
	padding: calc((10vh - 25px) / 3);
	background: rgba(255, 255, 255, 0.125);
	height: 10vh;
	font-size: 25px;
	color: white;
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	font-weight: bold;
}
.title-input textarea::placeholder {
	color: rgba(255, 255, 255, 0.75);
}
.body-input textarea {
	padding: calc((10vh - 25px) / 3);
	background: rgba(255, 255, 255, 0.25);
	height: 80vh;
	font-size: 20px;
	color: white;
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.body-input textarea::placeholder {
	color: rgba(255, 255, 255, 0.75);
}
button {
	height: 10vh;
	width: 10vh;
}
.work-btn {
	/* align buttons to the right site
	text-align: right;
	*/
	padding-left: calc(70vw - 50vh);
}
.back-btn {
	/*
	text-align: left;
	*/
}
/* tablets and other mobile devices will use the same formatting for the sake of consistency */
@media only screen and (max-width: 1024px) {
	.component-catch,
	.component-catch textarea,
	.top-bar {
		width: 100vw;
	}
}
</style>
