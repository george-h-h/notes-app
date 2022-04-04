const NotesModel = require('./notesModel.js');

console.log("Notes app is working!");

const notes = new NotesModel();
// notes.addNote("Go to sleep")
console.log(notes.getNotes());