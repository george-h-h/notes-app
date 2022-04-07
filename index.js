const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesApi = require('./notesApi')

const notesModel = new NotesModel();
const api = new NotesApi();
const notesView = new NotesView(notesModel, api);


api.loadNotes((notes) => {
  notesModel.setNotes(notes);
  notesView.displayNotes();
});

// notesView.displayNotes();


//notesModel.addNote(notes);
