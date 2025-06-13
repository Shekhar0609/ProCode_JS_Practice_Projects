const btnElement = document.querySelector("#btn");

btnElement.addEventListener("click", (event) => {
  let spanElement = document.createElement("span");
  spanElement.id = "ripple";
  spanElement.classList = "absolute w-12 h-12 bg-gray-300 rounded-full";
  btnElement.appendChild(spanElement);
  let rectangle = btnElement.getBoundingClientRect();
  let xPosittion = event.clientX - rectangle.left - spanElement.offsetWidth / 2;
  let yPosittion = event.clientY - rectangle.top - spanElement.offsetWidth / 2;
  spanElement.style.left = `${xPosittion}px`;
  spanElement.style.top = `${yPosittion}px`;
  spanElement.style.transform = "scale(0)";

  btnElement.addEventListener("animationend", () => {
    spanElement.remove();
  });
});
