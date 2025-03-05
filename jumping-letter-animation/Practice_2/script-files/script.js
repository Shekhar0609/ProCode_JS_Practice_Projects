const characterEls = document.querySelectorAll(".character");

characterEls.forEach((characterEl) => {
  characterEl.addEventListener("mouseover", () => {
    characterEl.classList.add("active");
    setTimeout(() => {
      characterEl.classList.remove("active");
    }, 1996);
  });
});
