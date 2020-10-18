## App.vue
- needs to contain any functions that will be used in other Vue files
- [ ] generateUUID()
- [ ] createNote()
- [ ] editNote(uuid)
- [ ] saveNote(uuid) // if editNote is closed without this
- [ ] toggleCheck(uuid)
- [ ] changeCategory(uuid, category)
- also needs to contain any data that will be used across files
- [ ] notes = new Map()
- [ ] active = new Set()
- [ ] archived = new Set()
- [ ] favorite = new Set()
- [ ] allTags = new Set()
- [ ] manage = string

## Sidebar.vue
- [ ] app.methods.createNote()
- [ ] app.methods.editNote(uuid)
- [ ] openNav()
- [ ] 

## managerBar.vue
- [ ] archiveNote(uuid)
- [ ] pinNote(uuid)
- [ ] favoriteNote(uuid)
- [ ] trashNote(uuid)
- [ ] addTag(uuid) // instead of typing, you recieve a text box prompt
- [ ] clearManager() // sets app.data().manager = ''
## Manager.vue
- [ ] checkTags(uuid) // checks for any tags in the note

### how we are dealing with tags
- put them in a set
- customTags = new Set()
	- add tab object? can they all have the same name? maybe use map?
	- maybe use map with id
- customTags = new Map()
	- customTags.add(tag, {uuid1, uuid2, uuid3, ...})