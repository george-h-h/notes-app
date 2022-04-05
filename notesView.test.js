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
    const view = new NotesView(model);

    const buttonEl = document.querySelector("#add-note-button");
    const inputEl = document.querySelector("#user-note");

    inputEl.value = "Learning DOM";
    buttonEl.click();
    view.displayNotes();

    expect(document.querySelector("#note").innerText).toBe("Learning Dom");
  });
});
