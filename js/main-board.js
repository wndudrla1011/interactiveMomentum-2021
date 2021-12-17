(function () {
  const stageElem = document.querySelector(".stage");
  const houseElem = document.querySelector(".house");
  const colors = ["#57c9f2", "#e80000", "#3809b6", "#29c92b", "#f76801"];

  stageElem.addEventListener("click", function (e) {
    let index = Math.floor(Math.random() * 5);
    new Character({
      xPos: (e.clientX / window.innerWidth) * 100,
      speed: 0.3,
      color: colors[index],
    });
  });
})();
