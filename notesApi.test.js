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

  it('creates a new note', (done) => {
    const api = new NotesApi();
    fetch.mockResponseOnce(async (request) => {
      try {
        expect(request.method).toEqual('POST');

        const sentRequestBody = await request.json();
        console.log(sentRequestBody);
        expect(sentRequestBody).toEqual({ content: 'This note is coming from the server' })
      } catch (error) {
        done(error);
      }

      return JSON.stringify({
        0: 'This note is coming from the server'
      })
    });

    api.createNote('This note is coming from the server', (response) => {
      expect(response[0]).toBe('This note is coming from the server')
  
      done();
    });
  });
})


