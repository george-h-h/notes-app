// const notesModel = require("./notesModel");

class NotesView {
  constructor(notesModel) {
    this.notesModel = notesModel;
    this.mainContainer = document.querySelector("#main-container");
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
}

module.exports = NotesView;
