const buttonEls = document.querySelectorAll("button");
// console.log(buttonEls);

buttonEls.forEach((buttonEle) => {
  buttonEle.addEventListener("click", () => {
    // debugger;
    if (
      buttonEle.children.length > 0 &&
      buttonEle.children[0].tagName === "AUDIO"
    ) {
      // If audio is already playing, stop it
      stopAudio();
      return;
    }

    const audioEl = document.createElement("audio");
    audioEl.setAttribute(
      "src",
      `./audios/${buttonEle.innerText.toLowerCase()}.mp3`
    );
    buttonEle.append(audioEl);
    audioEl.play();

    audioEl.addEventListener("ended", () => {
      stopAudio();
    });
  });
});

function stopAudio() {
  const audioEl = document.querySelector("audio");
  if (audioEl) {
    audioEl.remove();
  }
}
