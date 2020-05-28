const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customeize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('Listing out all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function() {
        console.log('Reading a note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function() {
        console.log('Removing a note');
    }
})

// add, remove, read, list

console.log(yargs.argv);