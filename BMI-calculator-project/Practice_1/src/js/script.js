const heightInCm = document.querySelector("#height-in-cm");
const weightInKg = document.querySelector("#weight-in-kg");
const calculateBmiBtn = document.querySelector("#calculate-bmi-btn");
const resultBmi = document.querySelector("#bmi-result");
const rangeEl = document.querySelector("#range");

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

  if (BMI >= 40) {
    rangeEl.innerText = "Severe Obesity";
    resultBmi.innerText = `Your BMI is : ${BMI.toFixed(2)} and Your are ${
      rangeEl.innerText
    }`;
  } else if (BMI >= 30 && BMI <= 39.9) {
    rangeEl.innerText = "Obesity";
    resultBmi.innerText = `Your BMI is : ${BMI.toFixed(2)} and Your are ${
      rangeEl.innerText
    }`;
  } else if (BMI >= 25 && BMI <= 29.9) {
    rangeEl.innerText = "Overweigth";
    resultBmi.innerText = `Your BMI is : ${BMI.toFixed(2)} and Your are ${
      rangeEl.innerText
    }`;
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    rangeEl.innerText = "Healthy Range";
    resultBmi.innerText = `Your BMI is : ${BMI.toFixed(2)} and Your are ${
      rangeEl.innerText
    }`;
  } else {
    resultBmi.innerText = `Your BMI is : ${BMI.toFixed(2)} and Your are ${
      rangeEl.innerText
    }`;
  }
});
