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

  this.mainElem.style.left = info.xPos + "%";

  //이전 스크롤 위치
  this.lastScrollPos = 0;
  //캐릭터가 좌/우로 움직이는 거리
  this.speed = info.speed;
  this.direction;
  //x좌표
  this.xPos = info.xPos;
  //스크롤 상태 체크
  this.scrollState = false;
  //좌우 이동 상태 체크
  this.movingState = false;
  //requestAnimationFrame의 return value를 저장할 변수
  this.returnId;

  this.init();
}

Character.prototype = {
  constructor: Character,
  init: function () {
    const obj = this; //this -> character
    window.addEventListener("scroll", function () {
      //setTimeout을 멈춤
      clearTimeout(obj.scrollState);

      //setTimeout 값이 들어오므로 1번 수행
      if (!obj.scrollState) {
        obj.mainElem.classList.add("moving");
      }

      //scroll 멈춤 시, 0.5초 후 애니메이션 제거
      obj.scrollState = setTimeout(function () {
        obj.scrollState = false;
        obj.mainElem.classList.remove("moving");
      }, 500);

      //guide 제어
      const pageYOffsetPer =
        pageYOffset / (document.body.offsetHeight - window.innerHeight);
      if (obj.lastScrollPos < pageYOffset) {
        //캐릭터 뒷면 -> forward
        obj.mainElem.setAttribute("data-direction", "forward");
        obj.mainElem.children[4].style.visibility = "hidden";
      } else if (obj.lastScrollPos > pageYOffset) {
        //캐릭터 정면 -> backward
        obj.mainElem.setAttribute("data-direction", "backward");
        obj.mainElem.children[4].style.visibility = "visible";
      }
      if (pageYOffsetPer > 0.27 && pageYOffsetPer <= 0.67) {
        // pageYOffsetPer > 0.27 -> main
        obj.mainElem.children[2].innerText = "This is Main Page!";
        obj.mainElem.children[2].style.left = "-52px";
        obj.mainElem.children[3].style.left = "88px";
        obj.mainElem.children[3].style.top = "33px";
        obj.icon.setAttribute("class", "fas fa-home");
      }
      // pageYOffsetPer > 0.67 -> notepad
      else if (pageYOffsetPer > 0.67) {
        obj.mainElem.children[2].innerText = "This is My Notepad!";
        obj.mainElem.children[2].style.left = "-52px";
        obj.mainElem.children[3].style.left = "93px";
        obj.icon.setAttribute("class", "far fa-sticky-note");
      }
      // pageYOffsetPer <= 0.27 -> login
      else {
        obj.mainElem.children[2].innerText = "This is Login Page!";
        obj.mainElem.children[2].style.left = "-52px";
        obj.icon.setAttribute("class", "fas fa-sign-in-alt");
      }

      obj.lastScrollPos = pageYOffset;
    }); //scroll event end

    window.addEventListener("keydown", function (e) {
      if (obj.movingState) return;
      //ArrowLeft -> 37, ArrowRight -> 39
      if (e.key === "ArrowLeft") {
        obj.mainElem.children[4].style.visibility = "visible";
        obj.direction = "left";
        obj.mainElem.setAttribute("data-direction", "left");
        obj.mainElem.classList.add("moving");
        obj.move(obj);
        obj.movingState = true;
      } else if (e.key === "ArrowRight") {
        obj.mainElem.children[4].style.visibility = "visible";
        obj.direction = "right";
        obj.mainElem.setAttribute("data-direction", "right");
        obj.mainElem.classList.add("moving");
        obj.move(obj);
        obj.movingState = true;
      }
    }); //keydown end

    window.addEventListener("keyup", function (e) {
      obj.mainElem.classList.remove("moving");
      cancelAnimationFrame(obj.returnId);
      obj.movingState = false;
    }); //keyup end
  }, //init end

  move: function (obj) {
    if (obj.direction == "left") {
      obj.xPos -= obj.speed;
    } else if (obj.direction == "right") {
      obj.xPos += obj.speed;
    }

    //캐릭터 좌측 최대 이동거리
    if (obj.xPos < 3) {
      obj.xPos = 3;
    }

    //캐릭터 우측 최대 이동거리
    if (obj.xPos > 80) {
      obj.xPos = 80;
    }

    obj.mainElem.style.left = `${obj.xPos}%`;

    obj.returnId = requestAnimationFrame(function () {
      obj.move(obj);
    });
  },
};
