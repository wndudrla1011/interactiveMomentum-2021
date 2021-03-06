(function () {
  const toDoFormExp = document.getElementById("todo-form");
  const toDoExpired = toDoFormExp.querySelector(".expired");
  const toDoItems = toDoFormExp.querySelector(".items");
  const toDoSave = toDoFormExp.querySelector(".save");
  const toDoList = document.getElementById("todo-list");
  const resultExp = document.querySelector(".result-exp");
  const resultExpEmpty = document.querySelector(".result-exp__empty");
  const expiredText = document.querySelector(".expired-text");
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  const colors = ["red", "yellow", "green", "white", "blue"];
  let count = 0;

  const HIDDEN_CLASSNAME = "hidden";
  const TODOS_KEY = "toDos";

  let toDos = [];

  function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }

  function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
    resultExp.classList.add(HIDDEN_CLASSNAME);
    if (resultExp.childElementCount == 0) {
      resultExpEmpty.classList.remove(HIDDEN_CLASSNAME);
    }
    saveToDos();
  }

  function paintToDo(newTodo) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const item = document.createElement("span");
    item.innerText = newTodo.item;
    const button = document.createElement("button");
    button.innerText = "X";
    button.style.background = color;
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    li.appendChild(item);
    toDoList.appendChild(li);
  }

  function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoExpired.value;
    const newItems = toDoItems.value;
    toDoExpired.value = "";
    toDoItems.value = "";
    const newTodoObj = {
      item: newItems,
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    if (newTodo.length != 8) {
      alert("yyyy/mm/dd ?????? ????????? ???????????????.");
      return;
    }
    if (parseInt(newTodo.slice(0, 1)) != 2) {
      alert("????????? year?????????.");
      return;
    }
    if (
      parseInt(newTodo.slice(4, 6)) < 1 ||
      parseInt(newTodo.slice(4, 6)) > 12
    ) {
      alert("????????? month?????????.");
      return;
    }
    if (
      parseInt(newTodo.slice(6, 8)) < 1 ||
      parseInt(newTodo.slice(6, 8)) > 31
    ) {
      alert("????????? date?????????.");
      return;
    }
    paintToDo(newTodoObj);
    saveToDos();
  }

  toDoFormExp.addEventListener("submit", handleToDoSubmit);
  // window.addEventListener(
  //   "load",
  //   () => {
  //     alert(`${count}??? ????????? ??????????????????!`);
  //   },
  //   { once: true }
  // );

  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    parsedToDos.forEach(checkExp);
  }

  function checkExp(newTodo) {
    const content = newTodo.text;
    const item = newTodo.item;
    let year = content.slice(0, 4); //?????? ?????? year
    let month = content.slice(4, 6); //?????? ?????? month
    let date = content.slice(6, 8); //?????? ?????? date
    let yearNumber = parseInt(year);
    let monthNumber = parseInt(month);
    let dateNumber = parseInt(date);

    if (todayYear < yearNumber) {
      if (monthNumber + 12 - todayMonth == 1) {
        //???????????? 1??? ?????? -> ?????? 12??? - ????????? 1???
        if (date <= todayDate) {
          let d_day;
          date = dateNumber + 30;
          d_day = date - todayDate;
          changeColorExp(d_day, newTodo);
        } else {
          //???????????? 1??? ??????
        }
      }
    } else if (todayYear == yearNumber) {
      if (todayMonth == month) {
        //?????? ???
        if (date < todayDate) {
          //???????????? ??????
          count = count + 1;
          const span = document.createElement("span");
          expiredText.appendChild(span);
          span.innerText = `${item}??? ??????????????? ????????????!`;
        } else if (date == todayDate) {
          //???????????? ??????
          const span = document.createElement("span");
          expiredText.appendChild(span);
          span.innerText = `${item}??? ??????????????? ??????????????????!`;
        } else {
          //???????????? 1??? ??????
          let d_day;
          d_day = date - todayDate;
          changeColorExp(d_day, newTodo);
        }
      } else if (todayMonth > month) {
        //???????????? ??????
        count = count + 1;
        const span = document.createElement("span");
        expiredText.appendChild(span);
        span.innerText = `${item}??? ??????????????? ????????????!`;
      } else if (todayMonth < month) {
        if (monthNumber - todayMonth == 1) {
          //???????????? 1??? ??????
          let d_day;
          if (date <= todayDate) {
            date = dateNumber + 30;
            d_day = date - todayDate;
            changeColorExp(d_day, newTodo);
          } else {
            //???????????? 1??? ??????
          }
        } else {
          //???????????? 1??? ??????
        }
      }
    } else {
      count = count + 1;
      const span = document.createElement("span");
      expiredText.appendChild(span);
      span.innerText = `${item}??? ??????????????? ????????????!`;
    }
  }

  function changeColorExp(d_day, newTodo) {
    const span = document.createElement("span");
    if (d_day > 20 && d_day <= 30) {
      span.innerText = `${newTodo.item} ????????? ${d_day}??? ????????????!`;
      span.style.color = "green";
    } else if (d_day > 10 && d_day <= 20) {
      span.innerText = `${newTodo.item} ????????? ${d_day}??? ????????????!`;
      span.style.color = "blue";
    } else if (d_day > 5 && d_day <= 10) {
      span.innerText = `${newTodo.item} ????????? ${d_day}??? ????????????!`;
      span.style.color = "orange";
    } else {
      span.innerText = `${newTodo.item} ????????? ${d_day}??? ????????????!`;
      span.style.color = "red";
    }
    resultExp.appendChild(span);
  }
})();
