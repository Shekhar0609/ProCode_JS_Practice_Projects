const inputWeigthEl = document.querySelector("#input-weigth");
const convertInKG = document.querySelector(".converted-in-kg");

inputWeigthEl.addEventListener("input", () => {
  let pounds = 2.20462262185;
  pounds = inputWeigthEl.value * pounds;
  convertInKG.textContent = pounds.toFixed(3);
});
