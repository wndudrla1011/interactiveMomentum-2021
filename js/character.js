function Character(info) {
  this.mainElem = document.createElement("div");
  this.mainElem.classList.add("character");
  this.mainElem.innerHTML =
    '<div class="head"></div>' +
    '<div class="body"></div>' +
    '<div class="guide">?</div>' +
    '<div class="icon"></div>' +
    '<div class="eye"></div>' +
    "</div>";

  this.icon = document.createElement("i");
  this.mainElem.children[3].appendChild(this.icon);

  this.mainElem.firstChild.style.borderBottom = `6rem solid ${info.color}`;
  document.querySelector(".stage").appendChild(this.mainElem);

  //이전 스크롤 위치
  this.lastScrollPos = 0;

  //스크롤 상태 체크
  this.scrollState = false;
  this.init();
}

Character.prototype = {
  constructor: Character,
  init: function () {
    const obj = this; //this -> character
    window.addEventListener("scroll", function () {
      //setTimeout을 멈춤
      clearTimeout(obj.scrollState);

      //마지막 setTimeout 값이 들어오면서 1번 수행
      if (!obj.scrollState) {
        obj.mainElem.classList.add("moving");
      }

      //scroll 멈춤 시, 1초 후 애니메이션 제거
      obj.scrollState = setTimeout(function () {
        obj.scrollState = false;
        obj.mainElem.classList.remove("moving");
      }, 1000);

      //guide 제어
      const pageYOffsetPer =
        pageYOffset / (document.body.offsetHeight - window.innerHeight);
      if (obj.lastScrollPos < pageYOffset) {
        //캐릭터 뒷면 -> forward
        obj.mainElem.children[4].setAttribute("data-direction", "forward");
      } else if (obj.lastScrollPos > pageYOffset) {
        //캐릭터 정면 -> backward
        obj.mainElem.children[4].setAttribute("data-direction", "backward");
      }
      if (pageYOffsetPer > 0.31 && pageYOffsetPer <= 0.7) {
        // pageYOffsetPer > 0.31 -> main
        obj.mainElem.children[2].innerText = "This is Main Page!";
        obj.mainElem.children[2].style.left = "-52px";
        obj.mainElem.children[3].style.left = "88px";
        obj.mainElem.children[3].style.top = "33px";
        obj.icon.setAttribute("class", "fas fa-home");
      }
      // pageYOffsetPer > 0.7 -> notepad
      else if (pageYOffsetPer > 0.7) {
        obj.mainElem.children[2].innerText = "This is My Notepad!";
        obj.mainElem.children[2].style.left = "-52px";
        obj.mainElem.children[3].style.left = "93px";
        obj.icon.setAttribute("class", "far fa-sticky-note");
      }
      // pageYOffsetPer <= 0.31 -> login
      else {
        obj.mainElem.children[2].innerText = "This is Login Page!";
        obj.mainElem.children[2].style.left = "-52px";
        obj.icon.setAttribute("class", "fas fa-sign-in-alt");
      }

      obj.lastScrollPos = pageYOffset;
    }); //scroll event end
  }, //init end
};
