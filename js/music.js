(function () {
  const backgroundMusic = document.querySelector(".background-music");
  const randomMusic = document.querySelector(".random-music");
  const musicTitle = document.querySelector(".music-title");
  const musicPlayer = document.querySelector(".music-player");
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
    "AcousticBreeze.mp3",
    "Adventure.mp3",
    "ANewBegining.mp3",
    "ClapAndYell.mp3",
    "CreativeMinds.mp3",
    "FunkyElement.mp3",
    "HappyRock.mp3",
    "Love.mp3",
    "Memories.mp3",
    "Ukulele.mp3",
  ];
  let i;
  let playCurrent = false;

  function playMusic() {
    backgroundMusic.volume = 0.5;
    backgroundMusic.loop = true;
  }

  window.addEventListener("load", playMusic);
  // window.addEventListener("beforeunload", playMusic);

  backgroundMusic.addEventListener("play", function () {
    playCurrent = true;
    musicTitle.classList.remove("opacity");
    for (i = 0; i < sticks.length; i++) {
      const stick = sticks[i];
      document.querySelector(`.${stick}`).classList.add("play");
    }
  });

  backgroundMusic.addEventListener("pause", function () {
    playCurrent = false;
    for (i = 0; i < sticks.length; i++) {
      const stick = sticks[i];
      document.querySelector(`.${stick}`).classList.remove("play");
    }
  });

  randomMusic.addEventListener("click", function () {
    if (playCurrent) {
      const random = Math.floor(Math.random() * playlist.length);
      const chosenMusic = playlist[random];
      backgroundMusic.src = `music/${chosenMusic}`;
      musicTitle.innerText = `${chosenMusic} ~ 🎵`;
    }
  });
})();
