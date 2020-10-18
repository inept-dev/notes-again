<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {
			// base Map of all notes
			notes: new Map(),
			// Tags / Custom Sets
			allTags: new Map(),
			// default uuid Sets for organizaiton
			active: new Set(),
			archived: new Set(),
			favortie: new Set(),
			pinned: new Set(),
			// uuid of note in Manager.vue
			manage: '',
		}
	},
	methods: {
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
			notes.set(note.uuid, note);
			// this active Set pulled from another Vue
			active.add(note.uuid);
			// this manage string pulled from another Vue
			manage = note.uuid;
			console.log(notes.size)
			console.log(notes.get(note.uuid));
			return true;
		}	
	}
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
