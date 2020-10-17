// maps can be called uuid rather than rank
const notes = new Map<noteUUID, note>();
// sets have no duplicates
const tags = new Set();


export type noteUUID = string;

export type note = {
    uuid: noteUUID,
    title: string,
    body: string,
    tags: Set<string>
}

export const addNote = (note: note) => {
    notes.set(note.uuid, note);
    return true
}

export const editNote = (note: note, title: string, body: string, tags: Set<string> ) => {
    const editable = notes.get(note.uuid);
    editable.title = title;
    editable.body = body;
    editable.tags = tags;
    return true;
}

export const allNotes = () => {
    return notes;
}