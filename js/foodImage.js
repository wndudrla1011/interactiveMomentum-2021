const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
];
const title = [
  "육회비빔밥",
  "돈카츠 정식",
  "삼겹살 샐러드",
  "밀푀유 나베",
  "치킨 가라아케",
  "냉모밀",
  "모듬회",
  "양꼬치",
];
const foodImage = document.querySelector("#foodImage");
const buttonChangeImage = document.querySelector("#button-changeImage");
const clickedButton = document.querySelector("#clicked-button");
const random = Math.floor(Math.random() * images.length);
const chosenImage = images[random];

const bgImage = document.createElement("img");
const span = document.createElement("span");
const OPACITY = "opacity";

bgImage.src = `img/${chosenImage}`;
span.innerText = title[random];

bgImage.classList.add("hidden");
span.classList.add(OPACITY);
clickedButton.classList.add("hidden");
foodImage.appendChild(bgImage);
foodImage.appendChild(span);

function changeImageBox() {
  const random = Math.floor(Math.random() * images.length);
  const chosenImage = images[random];
  bgImage.src = `img/${chosenImage}`;
  span.innerText = title[random];
  bgImage.classList.remove("hidden");
  span.classList.remove(OPACITY);
  buttonChangeImage.classList.add(OPACITY);
  clickedButton.classList.remove(OPACITY);
}

function changeImageCircle() {
  const random = Math.floor(Math.random() * images.length);
  const chosenImage = images[random];
  bgImage.src = `img/${chosenImage}`;
  span.innerText = title[random];
}

buttonChangeImage.addEventListener("click", changeImageBox);
clickedButton.addEventListener("click", changeImageCircle);
