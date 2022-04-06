// const notesModel = require("./notesModel");

class NotesView {
  constructor(notesModel) {
    this.notesModel = notesModel;
    this.mainContainer = document.querySelector("#main-container");
    this.buttonEl = document.querySelector(".add-note");
    this.input = document.querySelector("#note");
    this.buttonEl.addEventListener('click', () => {
      this.notesModel.addNote(this.input.value);
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
