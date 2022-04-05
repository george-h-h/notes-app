// const notesModel = require("./notesModel");

class NotesView {
  constructor(notesModel) {
    this.notesModel = notesModel;
    this.mainContainer = document.querySelector("#main-container");
    this.buttonEl = document.querySelector("#add-note-button");
    this.input = document.querySelector("#user-note");
    this.buttonEl.addEventListener("click", () => {
      let note = this.input.value;
      this.addNewNote(note);
    });
  }

  displayNotes() {
    const notes = this.notesModel.getNotes();

    notes.forEach((note) => {
      let div = document.createElement("div");
      div.classList.add("note");
      div.innerText = note;
      this.mainContainer.append(div);
    });
  }

  addNewNote(note) {
    this.notesModel.addNote(note);
    this.displayNotes();
  }
}

module.exports = NotesView;
