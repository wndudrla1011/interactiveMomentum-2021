(function () {
  const page = document.querySelector(".page-left");
  const todoBox = document.querySelector(".todo-box");
  const expiredText = document.querySelector(".expired-text");
  const resultExp = document.querySelector(".result-exp");
  const foodImage = document.querySelector(".foodImage");
  const quote = document.querySelector(".quote");
  const musicPlayer = document.querySelector(".music-player");

  const regRoom = document.querySelector(".register-room");
  const expRoom = document.querySelector(".expired-room");
  const remainRoom = document.querySelector(".remaining-room");
  const photoRoom = document.querySelector(".photo-room");
  const quotesRoom = document.querySelector(".quotes-room");
  const musicRoom = document.querySelector(".music-room");

  regRoom.addEventListener("click", function () {
    page.innerHTML = "";
    page.style.overflow = "scroll";
    page.appendChild(todoBox);
  });

  expRoom.addEventListener("click", function () {
    page.innerHTML = "";
    page.style.overflow = "scroll";
    page.appendChild(expiredText);
  });

  remainRoom.addEventListener("click", function () {
    page.innerHTML = "";
    page.style.overflow = "scroll";
    page.appendChild(resultExp);
  });

  photoRoom.addEventListener("click", function () {
    page.innerHTML = "";
    page.appendChild(foodImage);
  });

  quotesRoom.addEventListener("click", function () {
    page.innerHTML = "";
    page.appendChild(quote);
  });

  musicRoom.addEventListener("click", function () {
    page.innerHTML = "";
    page.appendChild(musicPlayer);
  });
})();
