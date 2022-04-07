/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");

let model;
let view;

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
  model = new NotesModel();
  const fakeApi = { createNote: (note, callback) => callback('My note')}
  view = new NotesView(model, fakeApi);
})

describe("Notes View", () => {
  it("can add dynamic notes", () => {
    const buttonEl = document.querySelector(".add-note");
    const inputEl = document.querySelector("#note");

    inputEl.value = "Learning DOM";
    buttonEl.click();

    expect(document.querySelectorAll("div.new-note").length).toBe(1);
    expect(document.querySelectorAll("div.new-note")[0].innerText).toEqual("Learning DOM");
  });

  it('clears the previous notes', () => {
    const buttonEl = document.querySelector(".add-note");
    const inputEl = document.querySelector("#note");

    inputEl.value = "Learning DOM";
    buttonEl.click();
    buttonEl.click();

    expect(document.querySelectorAll("div.new-note").length).toEqual(2);
  });

  it('can display all notes', () => {
    const input = document.querySelector("#note");
    const button = document.querySelector(".add-note");

    input.value = "Makers Academy is killing us";
    button.click();

    const note = document.querySelector(".new-note");

    expect(note.innerText).toBe("Makers Academy is killing us");
  });
});
