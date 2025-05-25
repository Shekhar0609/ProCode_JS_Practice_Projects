const buttonEls = document.querySelectorAll("button");
// console.log(buttonEls);

buttonEls.forEach((buttonEle) => {
  buttonEle.addEventListener("click", () => {
    const audioEl = document.createElement("audio");
    audioEl.setAttribute("src",`./audios/${buttonEle.innerText.toLowerCase()}.mp3`);
    buttonEle.append(audioEl.src);
    audioEl.play();

    audioEl.addEventListener("ended", () => {
      audioEl.remove();
    });
  });
});
