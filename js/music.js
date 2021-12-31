(function () {
  const backgroundMusic = document.querySelector(".background-music");
  const randomMusic = document.querySelector(".random-music");
  const sticks = [
    "stick-one",
    "stick-two",
    "stick-three",
    "stick-four",
    "stick-five",
    "stick-six",
    "stick-seven",
    "stick-eight",
  ];
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
  let i;

  function playMusic() {
    backgroundMusic.volume = 0.5;
    backgroundMusic.loop = true;
  }

  window.addEventListener("load", playMusic);
  // window.addEventListener("beforeunload", playMusic);

  backgroundMusic.addEventListener("play", function () {
    for (i = 0; i < sticks.length; i++) {
      const stick = sticks[i];
      document.querySelector(`.${stick}`).classList.add("play");
    }
  });

  backgroundMusic.addEventListener("pause", function () {
    for (i = 0; i < sticks.length; i++) {
      const stick = sticks[i];
      document.querySelector(`.${stick}`).classList.remove("play");
    }
  });

  randomMusic.addEventListener("click", function () {
    const random = Math.floor(Math.random() * playlist.length);
    const chosenMusic = playlist[random];
    backgroundMusic.src = `music/${chosenMusic}`;
  });
})();
