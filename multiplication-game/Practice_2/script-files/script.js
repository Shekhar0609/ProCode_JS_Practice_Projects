const scoreCountEL = document.querySelector(".score-count");
const questionsEl = document.querySelector(".questions");
const inputSumValue = document.querySelector(".sum-value");
const submitBtn = document.querySelector(".submit-btn");

let score = 0;

let randomNum1 = Math.trunc(Math.random() * 10);
let randomNum2 = Math.trunc(Math.random() * 10);

function randomMult() {
  questionsEl.innerText = `What is ${randomNum1} x ${randomNum2}?`;
}

randomMult();

submitBtn.addEventListener("click", () => {
  let totalValue = randomNum1 * randomNum2;
  let inputValue = inputSumValue.value.trim();
  if (inputValue === "") {
    alert("Please enter the value");
    return;
  }

  if (Number(inputValue) === totalValue) {
    score++;
    scoreCountEL.innerText = score;
    randomNum1 = Math.trunc(Math.random() * 10);
    randomNum2 = Math.trunc(Math.random() * 10);
    randomMult();
  }
  inputSumValue.value = "";
});
