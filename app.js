console.log('Starting app.')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
var command = argv._[0]
console.log('Command : ', command)
console.log('Yargs : ', argv)

switch (command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body)
        if(note) {
            console.log('Note created')
            console.log('--')
            console.log(`Title : ${note.title}`)
            console.log(`Body : ${note.body}`)
        } else {
            console.log(`Note ${argv.title} already exists. Please use a unqiue name for the note.`)
        }
        break

    case 'list':
        notes.getAll()
        break

    case 'read':
        notes.getNote(argv.title)
        break

    case 'remove':
        notes.removeNote(argv.title)
        break

    default:
        console.log('Command not recognized')
}