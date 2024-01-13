const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes)  => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title, 
      body: body
    });
    console.log('Note added');
  } else {
    console.log('Title taken');
  }
  
  saveNotes(notes);
}

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter(note => note.title !== title);
  if (notes.length !== updatedNotes.length) {
    console.log(chalk.bgGreen('Note removed!'));
    saveNotes(updatedNotes);
  } else {
    console.log(chalk.bgRed('No note found!'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.yellow.inverse('Your notes'))
  notes.forEach(note => console.log(chalk.blue.inverse(note.title)));
}

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(chalk.green(title + ": " + note.body));
  } else {
    console.log(chalk.red('No note found'))
  }
}

module.exports = {
  addNote: addNote,
  listNotes: listNotes,
  readNote: readNote,
  removeNote: removeNote,
};