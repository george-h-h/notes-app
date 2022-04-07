const NotesApi = require("./notesApi");
const NotesModel = require("./notesModel");

class NotesView {
  constructor(notesModel = new NotesModel(), notesApi = new NotesApi()) {
    this.notesModel = notesModel;
    this.notesApi = notesApi;
    this.mainContainer = document.querySelector("#main-container");
    this.buttonEl = document.querySelector(".add-note");
    this.input = document.querySelector("#note");
    this.buttonEl.addEventListener('click', () => {
    this.notesModel.addNote(this.input.value);
      this.notesApi.createNote(this.input.value, (note) => {
        console.log(note);
      });
    this.input.value = "";
    this.displayNotes();

    });
  }

  displayNotes() {
    document.querySelectorAll('.new-note').forEach(el => el.remove());

    const notes = this.notesModel.getNotes();
    
    notes.forEach((note) => {
      let div = document.createElement("div");
      div.classList.add("new-note");
      div.innerText = note;
      this.mainContainer.append(div);
    });
  }
}

module.exports = NotesView;
