(function () {
  const stageElem = document.querySelector(".stage");
  const houseElem = document.querySelector(".house");
  const colors = ["#57c9f2", "#e80000", "#3809b6", "#29c92b", "#f76801"];
  const mouseXY = { x: 0, y: 0 };
  let maxScrollValue;

  function reallocate() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("scroll", function () {
    const scrollValue = pageYOffset / maxScrollValue;
    const zRange = scrollValue * 430 - 200;
    houseElem.style.transform = "translateZ(" + zRange + "vw)";
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
      "rotateX(" + mouseXY.y * 5 + "deg) rotateY(" + mouseXY.x * 5 + "deg)";
  });

  window.addEventListener("resize", reallocate);

  reallocate();
})();
