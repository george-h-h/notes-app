class NotesApi {
  // Fetch option:
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => callback(data));
  }

  // Async await option:
  // async loadNotes(callback) {
  //   const response = await fetch('http://localhost:3000/notes');
  //   const data = await response.json();
  //   callback(data);
  // }
}


module.exports = NotesApi;