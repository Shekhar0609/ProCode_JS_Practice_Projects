const loanAmountInput = document.querySelector("#loan-amount");
const interestRateInput = document.querySelector("#interest-rate");
const loanTenureInput = document.querySelector("#loan-tenure");
const calculateButton = document.querySelector("#calculate-btn");
const emiResult = document.querySelector("#emi-result");

calculateButton.addEventListener("click", function () {
  const principal = parseFloat(loanAmountInput.value);
  const annualInterestRate = parseFloat(interestRateInput.value) / 1200;
  const numberOfMonths = parseInt(loanTenureInput.value) * 12;

  if (
    isNaN(principal) ||
    isNaN(annualInterestRate) ||
    isNaN(numberOfMonths) ||
    principal <= 0 ||
    annualInterestRate <= 0 ||
    numberOfMonths <= 0
  ) {
    emiResult.textContent = "Please enter valid inputs.";
    emiResult.style.color = "red";
    return;
  }

  // where P = principal loan amount, R = monthly interest rate, N = number of months
  //EMI = [P x R x (1+R)^N]/[(1+R)^N-1]   //  EMI formula

  const emi =
    (principal *
      annualInterestRate *
      Math.pow(1 + annualInterestRate, numberOfMonths)) /
    (Math.pow(1 + annualInterestRate, numberOfMonths) - 1);

  emiResult.textContent = `Your Mothly EMI is: ₹${emi.toFixed(2)}`;
  emiResult.style.color = "lightgreen";
});
