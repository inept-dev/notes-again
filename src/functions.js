import app from './App.vue'
// maps can be called uuid rather than rank & sets have no duplicates
// const notes = app.notes;
// const allTags = app.allTags;
// const trash = app.trash;
// organization
// const active = app.active;
// const archived = app.archived;
// const pinned = app.pinned;
//const favorite = new Set();
// single editable note
// const editable = app.editable;

/* offsetting the first 13 hex numbers by a hex portion of the timestamp, 
and once depleted offsets by a hex portion of the microseconds since pageload */
export const generateUUID = () => {
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
}

export const addNote = (title, body, tag) => {
    const uuid = generateUUID();

    const note = {
        uuid: uuid,
        title: title,
        body: body,
        tags: new Set()
    }
    // adds the uuid to the active Set
    active.add(note.uuid);
    // adds the tag[array] to the local Set
    tag.forEach(note.tags.add, note.tags);
    // adds the new tag[array] to the allTags Set
    tag.forEach(app.allTags.add, app.allTags);
    // adds the newly created note to the notes Map
    app.notes.set(note.uuid, note);
    
    console.log(note.uuid);
    console.log(active);
    return true
}

export const editNote = (note, title, body, tag) => {
    const editable = app.notes.get(note.uuid);
    editable.title = title;
    editable.body = body;
    editable.tags = new Set(...editable.tags, ...tag)
    return true;
}

// export const allNotes = () => {
//     return notes;
// }

// export const activeNotes = () => {
//     return Array.from(active);
// }

// export const archivedNotes = () => {
//     return Array.from(archived);
// }

// export const edit = () => {
//     return notes.get(editable);
// }