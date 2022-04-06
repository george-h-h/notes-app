const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesApi = require('./notesApi')

const notesModel = new NotesModel();
const notesView = new NotesView(notesModel);

const api = new NotesApi();

api.loadNotes((notes) => {
  notesModel.addNote(notes);
  notesView.displayNotes();
});