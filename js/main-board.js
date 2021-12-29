(function () {
  const stageElem = document.querySelector(".stage");
  const houseElem = document.querySelector(".house");
  const door1 = document.querySelector(".page_front-login");
  const door2 = document.querySelector(".page_front-main");
  const colors = ["#57c9f2", "#e80000", "#3809b6", "#29c92b", "#f76801"];
  const mouseXY = { x: 0, y: 0 };
  let maxScrollValue;
  const USERNAME_KEY = "username";

  function reallocate() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  function open(object) {
    object.classList.add("opened");
  }

  function close(object) {
    object.classList.remove("opened");
  }

  window.addEventListener("scroll", function (e) {
    const scrollValue = pageYOffset / maxScrollValue;
    const zRange = scrollValue * 430 - 200;
    houseElem.style.transform = "translateZ(" + zRange + "vw)";
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if (savedUsername != null) {
      if (scrollValue > 0.31) {
        open(door1);
      } else {
        close(door1);
      }
      if (scrollValue > 0.7) {
        open(door2);
      } else {
        close(door2);
      }
    }
  });

  stageElem.addEventListener("click", function (e) {
    let index = Math.floor(Math.random() * 5);
    new Character({
      xPos: (e.clientX / window.innerWidth) * 100,
      speed: 0.3,
      color: colors[index],
    });
  });

  window.addEventListener("mousemove", function (e) {
    mouseXY.x = -1 + (e.clientX / window.innerWidth) * 2;
    mouseXY.y = 1 - (e.clientY / window.innerHeight) * 2;
    stageElem.style.transform =
      "rotateX(" + mouseXY.y * 10 + "deg) rotateY(" + mouseXY.x * 5 + "deg)";
  });

  window.addEventListener("resize", reallocate);

  reallocate();
})();
