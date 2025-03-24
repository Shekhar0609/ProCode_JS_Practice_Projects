const posX = document.querySelector(".pos-x");
const posY = document.querySelector(".pos-y");

// posX.innerText = 0;
// posY.innerText = 0;
document.addEventListener("mousemove", (event) => {
  console.log(event);
  posX.innerText = event.clientX;
  posY.innerText = event.clientY;
});
