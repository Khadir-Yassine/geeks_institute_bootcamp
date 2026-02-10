function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const keyDiv = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio || !keyDiv) return;

  audio.currentTime = 0;
  audio.play();

  keyDiv.classList.add("playing");
}

window.addEventListener("keydown", function (event) {
  playSound(event.keyCode);
});

const allKeys = document.querySelectorAll(".key");
allKeys.forEach(function (key) {
  key.addEventListener("click", function () {
    const code = this.getAttribute("data-key");
    playSound(code);
  });
});

allKeys.forEach(function (key) {
  key.addEventListener("transitionend", function () {
    this.classList.remove("playing");
  });
});