const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
console.log("Notes app is working!");

const notesModel = new NotesModel();
const notesView = new NotesView(notesModel);
notesModel.addNote("Go to sleep")
console.log(notesView.displayNotes());
