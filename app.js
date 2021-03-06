console.log("starting app.js");

const yargs = require("yargs");
const notes = require("./notes");
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log("Adding note");
  notes.addingNote(title, body);
} else if (command === "sub") {
  console.log("Removing notes");
  notes.removeNote(title);
} else if (command === "read") {
  console.log("Reading all notes");
  notes.readNote(title);
} else if (command === "list") {
  console.log("Listing all notes");
  notes.getAll();
} else {
  console.log("Unknown command was used");
}
