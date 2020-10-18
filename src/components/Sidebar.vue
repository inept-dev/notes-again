<template>
	<div class="component-catch">
		<div class="top-bar">
			<button class="nav-btn">NAV</button>
			<input type="text" placeholder="Search" class="search-bar" />
			<button class="add-btn" @click="this.createNote()">ADD</button>
		</div>
		<div class="list-view">
			<div
				v-for="(uuid) in this.active"
				:key="uuid.id"
			>
				<div class="preview" @click="manageNote(uuid)">
					<div class="title-preview">
						{{ this.notes.get(uuid).title }}
					</div>
					<div class="body-preview">
						{{ this.notes.get(uuid).body }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import app from "../App.vue";

export default {
	name: "Sidebar",
	data() {
		return {
			// Map of all notes
			notes: app.data().notes,
			// Standard Sets
			active: app.data().active,
			archived: app.data().archived,
			favortie: app.data().favortie,
			pinned: app.data().pinned,
			// Tags / Custom Sets
			allTags: app.data().allTags,
			// uuid of note in Manager.vue
			manage: app.data().manage,
		};
	},
	methods: {
		createNote() {
			// input notes & active map to add
			app.methods.createNote(this.notes, this.active, this.manage);
			// const uuid = this.generateUUID();
			// const note = {
			// 	uuid: uuid,
			// 	title: '',
			// 	body: '',
			// 	tags: new Set()
			// }

			// app.data().notes.set(note.uuid, note);
			// app.data().active.add(note.uuid);
			// console.log(app.data().notes);
		},
		manageNote(uuid) {
			app.methods.manageNote(uuid, this.manage);
		}
		/*
		generateUUID() {
			var d = new Date().getTime();//Timestamp
			var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = Math.random() * 16;//random number between 0 and 16
				if(d > 0){//Use timestamp until depleted
					r = (d + r)%16 | 0;
					d = Math.floor(d/16);
				} else {//Use microseconds since page-load if supported
					r = (d2 + r)%16 | 0;
					d2 = Math.floor(d2/16);
				}
				return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
			});
		},
		createNote(notes, active, manage) {
			const uuid = this.generateUUID();
			const note = {
				uuid: uuid,
				title: '',
				body: '',
				tags: new Set(),
				checkbox: false,
			}

			// this notes Map pulled from another Vue
			this.notes.set(note.uuid, note);
			// this active Set pulled from another Vue
			this.active.add(note.uuid);
			// this manage string pulled from another Vue
			this.manage = note.uuid;
			console.log(this.manage)
			console.log(this.notes.get(note.uuid));
			return true;
		},
		*/
	}
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
	cursor: pointer;
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
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
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
	.top-bar,
	.list-view {
		width: 100vw;
	}
	.search-bar {
		width: calc(100vw - 20vh);
	}
}
</style>
