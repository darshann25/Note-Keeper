console.log('Starting notes.js')

const fs = require('fs')

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(noteString)
        return notes    
    } catch (err) {
        return []
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
    var notes = fetchNotes()
    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter((note) => note.title === title)
    
    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    }  
}

var getAll = () => {
    console.log('Getting all notes')
}

var getNote = (title) => {
    var notes = fetchNotes().filter((note) => note.title === title)
    return notes[0]
}

var removeNote = (title) => {
    var notes = fetchNotes()
    var updatedNotes = notes.filter((note) => note.title !== title)
    saveNotes(updatedNotes)

    return notes.length !== updatedNotes.length
}

var logNote = (note) => {
    console.log('--')
    console.log(`Title : ${note.title}`)
    console.log(`Body : ${note.body}`)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
