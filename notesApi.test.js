const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('Notes api class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      0: ['This note is coming from the server']
    }));

    api.loadNotes((notes) => {
      expect(notes[0]).toStrictEqual(['This note is coming from the server']);
    });
  });
});


