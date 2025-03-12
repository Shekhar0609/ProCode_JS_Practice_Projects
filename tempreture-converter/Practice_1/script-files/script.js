const inputTempCelsius = document.querySelector("#input-temp-celsius");
const inputTempKelvin = document.querySelector("#input-temp-kelvin");
const inputTempFarenheit = document.querySelector("#input-temp-farenheit");

inputTempCelsius.addEventListener("input", () => {
  if (inputTempCelsius.value === "" || isNaN(inputTempCelsius.value)) {
    alert("Enter the Celcius value");
  } else {
    // celcius to kelvin => 1°C + 273.15 = 274.15K
    let kelvinFormula = parseFloat(inputTempCelsius.value) + 273.15;
    // celcius to farenheit => (1°C × 9/5) + 32 = 35.6°F
    let farenheitFormula = (parseFloat(inputTempCelsius.value) * 9) / 5 + 32;
    inputTempKelvin.value = kelvinFormula.toFixed(4);
    inputTempFarenheit.value = farenheitFormula.toFixed(4);
  }
});

inputTempKelvin.addEventListener("input", () => {
  if (inputTempKelvin.value === "" || isNaN(inputTempKelvin.value)) {
    alert("Enter the Kelvin value");
  } else {
    // kelvin to celcius => 1K − 273.15 = -272.1°C
    let celsiusFormula = parseFloat(inputTempKelvin.value) - 273.15;
    // kelvin to farenheit => (1K − 273.15) × 9/5 + 32 = -457.9°F
    let farenheitFormula =
      (parseFloat(inputTempKelvin.value - 273.15) * 9) / 5 + 32;
    inputTempCelsius.value = celsiusFormula.toFixed(4);
    inputTempFarenheit.value = farenheitFormula.toFixed(4);
  }
});

inputTempFarenheit.addEventListener("input", () => {
    if (inputTempFarenheit.value === "" || isNaN(inputTempFarenheit.value)) {
        alert("Enter the Farenheit value");
      } else {
  // farenheit to celcius => (1°F − 32) × 5/9 = -17.22°C
  let celsiusFormula = (parseFloat(inputTempFarenheit.value - 32) * 5) / 9;
  //  farenheit to kelvin => (1°F − 32) × 5/9 + 273.15 = 255.928K
  let kelvinFormula =
    (parseFloat(inputTempFarenheit.value - 32) * 5) / 9 + 273.15;
  inputTempCelsius.value = celsiusFormula.toFixed(4);
  inputTempKelvin.value = kelvinFormula.toFixed(4);
      }
});
