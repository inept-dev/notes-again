// maps can be called uuid rather than rank
const notes = new Map<noteUUID, note>();
// sets have no duplicates
const tags = new Set();


export type noteUUID = string;

export type note = {
    uuid: noteUUID;
    title: string;
    body: string;
    tags: Set<string>;
}

export const addNote = (note: note) => {
    notes.set(note.uuid, note);
    return true
}