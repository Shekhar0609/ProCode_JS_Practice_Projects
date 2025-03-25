const posX = document.querySelector(".posX-value");
const posY = document.querySelector(".posY-value");

document.addEventListener("mousemove", (e) => {
  posX.textContent = e.clientX;
  posY.textContent = e.clientY;
});
