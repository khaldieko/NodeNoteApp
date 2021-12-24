const fs = require("fs");
const { title } = require("process");

var fetchnotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (err) {
    return [];
  }
};

var addingNote = (title, body) => {
  var notes = fetchnotes();

  var note = {
    title,
    body,
  };
  var double = notes.filter((note) => note.title === title);

  if (double.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    logNote(note);
  } else {
    console.log("STOP: Title already exists.");
  }
};

var removeNote = (title) => {
  var notes = fetchnotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
};
var readNote = (title) => {
  var notes = fetchnotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  logNote(filteredNotes[0]);
};
var getAll = () => {
  var notes = fetchnotes();
  notes.forEach((note) => {
    logNote(note);
  });
};
var logNote = (note) => {
  console.log("====================================");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  console.log("====================================");
};
module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll,
};
