const spanEls = document.querySelectorAll(".character");

spanEls.forEach((spanEl) => {
  spanEl.addEventListener("click", () => {
    spanEl.classList.add("active");

    setTimeout(() => {
      spanEl.classList.remove("active");
    }, 2000);
  });
});
