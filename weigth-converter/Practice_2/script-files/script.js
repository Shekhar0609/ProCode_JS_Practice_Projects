const inputWeightEl = document.querySelector("#input-weigth");
const convertInKG = document.querySelector(".converted-in-kg");
convertInKG.textContent = "0.000";

inputWeightEl.addEventListener("input", () => {
  // debugger
  const inputWeightValue = inputWeightEl.value;
  if (inputWeightValue === "" || isNaN(parseFloat(inputWeightValue))) {
    convertInKG.textContent = "0.000";
    return;
  }
  let pounds = 2.20462262185;
  pounds = inputWeightValue * pounds;
  convertInKG.textContent = parseFloat(pounds.toFixed(3));
});
