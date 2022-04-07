class NotesModel {
  constructor() {
    this.notes = [];
    // this.setNote = null;
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }

  setNotes(notes) {
    notes.forEach((note) => {
      this.notes.push(note);
    })
  }
}

module.exports = NotesModel