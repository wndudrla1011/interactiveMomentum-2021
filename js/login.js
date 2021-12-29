(function () {
  const loginForm = document.querySelector("#login-form");
  const loginInput = document.querySelector("#login-form input");
  const greetings = document.querySelector("#greetings");
  const moveButton = document.querySelector("#move-button");
  const yolk = document.querySelector("#move-botton__sub");
  const h2 = document.querySelector("#todo-list__form h2");

  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "username";

  function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
  }

  function paintGreetings(username) {
    const span = document.createElement("span");
    const hello = document.createElement("span");
    const userName = document.createElement("span");
    yolk.appendChild(span);
    greetings.appendChild(hello);
    greetings.appendChild(userName);
    // hello.innerText = "Hello";
    // userName.innerText = username;
    hello.innerText = "Hello";
    userName.innerText = username;
    span.innerText = "Manage Yours Main 🔼";
    h2.innerText = `${username}'s To Do List!`;
    hello.classList.remove(HIDDEN_CLASSNAME);
    userName.classList.remove(HIDDEN_CLASSNAME);
    moveButton.classList.remove(HIDDEN_CLASSNAME);
    yolk.classList.remove(HIDDEN_CLASSNAME);
  }

  const savedUsername = localStorage.getItem(USERNAME_KEY);

  if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    paintGreetings(savedUsername);
  }
})();
