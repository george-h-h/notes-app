/**
 * @jest-environment jsdom
 */

const NotesView = require("./notesView");
const fs = require("fs");
const NotesModel = require("./notesModel");

describe("Notes View", () => {
  it("can add dynamic notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    model.addNote("Learning DOM");
    model.addNote("Learning JS");
    const view = new NotesView(model);
    view.displayNotes();
    expect(document.querySelectorAll("div.note").length).toBe(2);
  });
});
