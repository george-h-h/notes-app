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

    const buttonEl = document.querySelector(".add-note");
    const inputEl = document.querySelector("#note");

    inputEl.value = "Learning DOM";
    buttonEl.click();

    expect(document.querySelectorAll("div.new-note").length).toBe(1);
    expect(document.querySelectorAll("div.new-note")[0].innerText).toEqual("Learning DOM");
  });

  it('clears the previous notes', () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);

    const buttonEl = document.querySelector(".add-note");
    const inputEl = document.querySelector("#note");

    inputEl.value = "Learning DOM";
    buttonEl.click();
    buttonEl.click();

    expect(document.querySelectorAll("div.new-note").length).toEqual(2);
  });
});
