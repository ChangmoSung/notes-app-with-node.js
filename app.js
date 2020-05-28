const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

const chalk = require('chalk');

console.log(chalk.green('Success'))