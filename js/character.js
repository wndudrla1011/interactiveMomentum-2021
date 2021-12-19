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

  this.lastScrollPos = 0;
  this.init();
}

Character.prototype = {
  constructor: Character,
  init: function () {
    const obj = this; //this -> character
    window.addEventListener("scroll", function () {
      if (obj.lastScrollPos < pageYOffset) {
        //캐릭터 뒷면
        obj.mainElem.setAttribute("data-direction", "forward");
      } else if (obj.lastScrollPos > pageYOffset) {
        //캐릭터 앞면
        obj.mainElem.setAttribute("data-direction", "backward");
      }

      obj.lastScrollPos = pageYOffset;
    }); //scroll event end
  }, //init end
};
