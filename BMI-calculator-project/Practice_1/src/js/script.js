const heightInCm = document.querySelector("#height-in-cm");
const weightInKg = document.querySelector("#weight-in-kg");
const calculateBmiBtn = document.querySelector("#calculate-bmi-btn");
const resultBmi = document.querySelector("#bmi-result");

/*both formula same
meter=170 cm / 100 = 1.7 m
BMI = weight (kg) / (height (m))^2
BMI = weight (kg) / (height (m) * height (m))
*/

calculateBmiBtn.addEventListener("click", () => {
  let heightInput = heightInCm.value;
  let weigthInput = weightInKg.value;

  if (heightInCm.value === "" || weightInKg.value === "") {
    heightInCm.focus();
    resultBmi.innerText = "";
    return alert(`Please enter the input field`);
  }

  let kgToMeter = heightInput / 100;

  //   BMI = weight (kg) / (height (m) * height (m))
  let BMI = weigthInput / (kgToMeter * kgToMeter);
  console.log(BMI);

  resultBmi.innerText = `Your BMI is : ${BMI.toFixed(2)} and Your are Normal`;
});
