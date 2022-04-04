const NotesModel = require("./notesModel.js")

describe("notesModel", () => {
  let notesModel;
  beforeEach(() => {
    notesModel = new NotesModel();
  })

  it("should be an instance of described class", () => {
    expect(notesModel).toBeInstanceOf(NotesModel);
  });

  it("should return an empty array", () => {
    expect(notesModel.getNotes()).toEqual([]);
  });

  it('should add a note in the notes array', () => {
    notesModel.addNote('Buy Milk');
    expect(notesModel.notes).toEqual(['Buy Milk']);
  }); 

  it('should reset notes to an empty array', () => {
    notesModel.addNote('Buy Milk');
    notesModel.reset();
    expect(notesModel.notes).toEqual([]);
  });
});