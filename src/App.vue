<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	//base maps
	data() {
		return {
			notes: new Map(),
			allTags: new Map(),
			trash: new Map(),
			// set organization
			active: new Set(),
			archived: new Set(),
			pinned: new Set(),
			editable: 'string',
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
		addNote(title, body, tag) {
			const uuid = this.generateUUID();

			const note = {
				uuid: uuid,
				title: title,
				body: body,
				tags: new Set()
			}
			// adds the uuid to the active Set
			this.active.add(note.uuid);
			// adds the tag[array] to the local Set
			tag.forEach(note.tags.add, note.tags);
			// adds the new tag[array] to the allTags Set
			tag.forEach(allTags.add, allTags);
			// adds the newly created note to the notes Map
			this.notes.set(note.uuid, note);
			
			console.log(note.uuid);
			console.log(active);
			return true
		},
		editNote(note, title, body, tag) {
			const editable = this.notes.get(note.uuid);
			editable.title = title;
			editable.body = body;
			editable.tags = new Set(...editable.tags, ...tag)
			return true;
		},
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
