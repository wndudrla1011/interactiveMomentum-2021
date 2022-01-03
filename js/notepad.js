const notePage = document.querySelector(".page_front-notepad");
const noteList = document.querySelector(".note-list");
const createB = document.querySelector(".create");
const noteBox = document.getElementById("noteBox");

const NOTES_KEY = "notes";

let notes = [];

function saveNote() {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

function bind(e) {
  const updateB = e.target.parentElement;
  const li = updateB.parentElement;
  const textarea = li.firstChild;
  noteBox.value = textarea.value;
  li.remove();
  notes = notes.filter((note) => note.id != parseInt(li.id));
  saveNote();
}

function deleteNote(e) {
  const deleteB = e.target.parentElement;
  const li = deleteB.parentElement;
  li.remove();
  notes = notes.filter((note) => note.id != parseInt(li.id));
  saveNote();
}

function paintNote(newNoteObj) {
  const li = document.createElement("li");
  li.id = newNoteObj.id;
  const textarea = document.createElement("textarea");
  textarea.innerText = newNoteObj.text;
  textarea.style.background = "#fbb034";
  textarea.style.backgroundImage =
    "linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)";

  const deleteB = document.createElement("span");
  const deleteIcon = document.createElement("i");
  deleteB.classList.add("delete");
  deleteIcon.setAttribute("class", "far fa-trash-alt");
  deleteB.addEventListener("click", deleteNote);
  deleteB.appendChild(deleteIcon);

  const modifyB = document.createElement("span");
  const modifyIcon = document.createElement("i");
  modifyB.classList.add("modify");
  modifyIcon.setAttribute("class", "far fa-edit");
  modifyB.addEventListener("click", bind);
  modifyB.appendChild(modifyIcon);

  li.appendChild(textarea);
  li.appendChild(deleteB);
  li.appendChild(modifyB);
  noteList.appendChild(li);
}

function handleNoteSubmit() {
  const newText = noteBox.value;
  noteBox.value = "";
  const newNoteObj = {
    id: Date.now(),
    text: newText,
  };

  notes.push(newNoteObj);
  paintNote(newNoteObj);
  saveNote();
}

createB.addEventListener("click", handleNoteSubmit);

const savedNotes = localStorage.getItem(NOTES_KEY);

if (savedNotes !== null) {
  const parsedNotes = JSON.parse(savedNotes);
  notes = parsedNotes;
  parsedNotes.forEach(paintNote);
}
