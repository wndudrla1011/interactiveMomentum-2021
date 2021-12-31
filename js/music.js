(function () {
  const backgroundMusic = document.querySelector(".background-music");
  const randomMusic = document.querySelector(".random-music");
  const sticks = document.querySelector(".animation-gruop__stick");
  const playlist = [
    "music1.mp3",
    "music2.mp3",
    "music3.mp3",
    "music4.mp3",
    "music5.mp3",
    "music6.mp3",
    "music7.mp3",
    "music8.mp3",
    "music9.mp3",
    "music10.mp3",
  ];

  function playMusic() {
    backgroundMusic.volume = 0.5;
    backgroundMusic.loop = true;
  }

  window.addEventListener("load", playMusic);
  // window.addEventListener("beforeunload", playMusic);

  backgroundMusic.addEventListener("play", function () {
    sticks.classList.add("play");
  });

  randomMusic.addEventListener("click", function () {
    const random = Math.floor(Math.random() * playlist.length);
    const chosenMusic = playlist[random];
    backgroundMusic.src = `music/${chosenMusic}`;
  });
})();
