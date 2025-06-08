const btnEl = document.querySelector("#btn");

btnEl.addEventListener("click", (event) => {
  let spanEl = document.createElement("span");
  spanEl.className = "ripple absolute w-12 h-12 bg-gray-300 rounded-full";
  btnEl.appendChild(spanEl);
  let rect = btnEl.getBoundingClientRect();
  let x = event.clientX - rect.left - spanEl.offsetWidth / 2; //
  let y = event.clientY - rect.top - spanEl.offsetHeight / 2;
  spanEl.style.left = `${x}px`;
  spanEl.style.top = `${y}px`;
  spanEl.addEventListener("animationend", () => {
    spanEl.remove();
  });
});
