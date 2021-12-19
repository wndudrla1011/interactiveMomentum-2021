(function () {
  const stageElem = document.querySelector(".stage");
  const houseElem = document.querySelector(".house");
  const colors = ["#57c9f2", "#e80000", "#3809b6", "#29c92b", "#f76801"];
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

  window.addEventListener("resize", reallocate);

  reallocate();
})();
