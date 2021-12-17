function Character(info) {
  this.mainElem = document.createElement("div");
  this.mainElem.classList.add("character");
  this.mainElem.innerHTML =
    '<div class="head"></div>' +
    '<div class="body"></div>' +
    '<div class="direction"></div>' +
    '<div class="eye"></div>' +
    "</div>";

  this.mainElem.firstChild.style.borderBottom = `6rem solid ${info.color}`;
  document.querySelector(".stage").appendChild(this.mainElem);
}

Character.prototype = {
  constructor: Character,
  // init:
};
