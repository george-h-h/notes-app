class NotesApi {
  // Fetch option:
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => callback(data));
  }

  // Async await option:
  // async loadNotes() {
  //   const response = await fetch('http://localhost:3000/notes');
  //   const data = await response.json();
  //   return data;
  // }

 createNote(dataNote, callback) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'content': dataNote}), 
    })
    .then(response => response.json())
    .then(data => { callback(data)
    });
  }
}


module.exports = NotesApi;