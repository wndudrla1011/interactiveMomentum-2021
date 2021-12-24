function Character(info) {
  this.mainElem = document.createElement("div");
  this.mainElem.classList.add("character");
  this.mainElem.innerHTML =
    '<div class="head"></div>' +
    '<div class="body">' +
    '<div class="character-side face-side"></div>' +
    '<div class="character-side back-side"></div>' +
    "</div>" +
    '<div class="guide">?</div>' +
    '<div class="icon"></div>' +
    '<div class="eye face face-back"></div>' +
    "</div>";

  this.icon = document.createElement("i");
  this.mainElem.children[3].appendChild(this.icon);

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
      const pageYOffsetPer =
        pageYOffset / (document.body.offsetHeight - window.innerHeight);
      if (obj.lastScrollPos < pageYOffset) {
        //캐릭터 뒷면 -> forward
        obj.mainElem.children[1].setAttribute("data-direction", "forward");
      } else if (obj.lastScrollPos > pageYOffset) {
        //캐릭터 정면 -> backward
        obj.mainElem.children[1].setAttribute("data-direction", "backward");
      }
      if (pageYOffsetPer > 0.31 && pageYOffsetPer <= 0.7) {
        // pageYOffset > 2100 -> main
        obj.mainElem.children[2].innerText = "This is Main Page!";
        obj.mainElem.children[2].style.left = "-52px";
        obj.mainElem.children[3].style.left = "88px";
        obj.mainElem.children[3].style.top = "33px";
        obj.icon.setAttribute("class", "fas fa-home");
      }
      // pageYOffset > 4800 -> notepad
      else if (pageYOffsetPer > 0.7) {
        obj.mainElem.children[2].innerText = "This is My Notepad!";
        obj.mainElem.children[2].style.left = "-52px";
        obj.mainElem.children[3].style.left = "93px";
        obj.icon.setAttribute("class", "far fa-sticky-note");
      }
      // pageYOffset <= 2100 -> login
      else {
        obj.mainElem.children[2].innerText = "This is Login Page!";
        obj.mainElem.children[2].style.left = "-52px";
        obj.icon.setAttribute("class", "fas fa-sign-in-alt");
      }

      obj.lastScrollPos = pageYOffset;
      obj.resize(obj);
    }); //scroll event end
  }, //init end
};
