class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(string) {
    this.notes.push(string);
  }
}

module.exports = NotesModel