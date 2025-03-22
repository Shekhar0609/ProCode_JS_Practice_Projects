const scoreEl = document.querySelector(".score");
const questionsEl = document.querySelector(".questions");
const inputSumEl = document.querySelector(".sum-value");
const submitBtn = document.querySelector(".submit-btn");

let count = 0;
let NumberInto = Math.trunc(Math.random() * 10);
let NumberInto2 = Math.trunc(Math.random() * 10);

function updateQuestion() {
  questionsEl.innerHTML = `<h2 class="questions">What is ${NumberInto} x ${NumberInto2}?</h2>`;
}

updateQuestion();

submitBtn.addEventListener("click", () => {
  let totalValue = NumberInto * NumberInto2;
  let value = inputSumEl.value.trim();
  if (value === "") {
    alert("please enter the value");
    return;
  }

  if (Number(value) === totalValue) {
    count++;
    scoreEl.innerHTML = `<div class="score">Score: ${count}</div>`;
    NumberInto = Math.trunc(Math.random() * 10);
    NumberInto2 = Math.trunc(Math.random() * 10);
    updateQuestion();
  }
  inputSumEl.value = "";
});
