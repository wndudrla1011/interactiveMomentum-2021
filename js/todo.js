const toDoForm = document.getElementById("todo-list__form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list__form-ul");

const TODOS_MAIN_KEY = "toDoMain";

let toDoMain = [];

function saveToDos() {
  localStorage.setItem(TODOS_MAIN_KEY, JSON.stringify(toDoMain));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoMain = toDoMain.filter((toDo) => toDo.id != parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = `◆ ${newTodo.text}`;
  span.style.color = "white";
  const button = document.createElement("button");
  button.innerText = "X";
  button.style.color = "green";
  button.style.background = "transparent";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoMain.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_MAIN_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDoMain = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
