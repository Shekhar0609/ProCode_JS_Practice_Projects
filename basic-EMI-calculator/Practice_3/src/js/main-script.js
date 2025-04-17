const loanAmountInput = document.querySelector("#loan-amount"); // Select the loan amount input field
const interestRateInput = document.querySelector("#interest-rate"); // Select the interest rate input field
const loanTenureInput = document.querySelector("#loan-tenure"); // Select the loan tenure input field
const calculateButton = document.querySelector("#calculate-btn"); // Select the calculate button
const emiResult = document.querySelector("#emi-result"); // Select the EMI result display area
const resetButton = document.querySelector("#clear-btn"); // Select the reset button

calculateButton.addEventListener("click", function () {
  // Calculate the EMI when the button is clicked
  const principal = parseFloat(loanAmountInput.value); // Get the principal loan amount from the input field
  const annualInterestRate = parseFloat(interestRateInput.value) / 1200; // Get the annual interest rate from the input field and convert it to a monthly rate
  // Convert the annual interest rate to a monthly rate by dividing by 1200 (12 months * 100 for percentage)
  const numberOfMonths = parseInt(loanTenureInput.value) * 12; // Get the number of months from the input field
  // Convert the loan tenure in years to months by multiplying by 12

  // Check if the inputs are valid numbers and greater than zero
  if (
    isNaN(principal) || // Check if principal is a number
    isNaN(annualInterestRate) || // Check if annual interest rate is a number
    isNaN(numberOfMonths) || // Check if number of months is a number
    principal <= 0 || // Check if principal is greater than zero
    annualInterestRate <= 0 || // Check if annual interest rate is greater than zero
    numberOfMonths <= 0 // Check if number of months is greater than zero
  ) {
    emiResult.textContent = "Please enter valid inputs."; // Display an error message if inputs are invalid
    emiResult.style.color = "red"; // Set the text color to red for error indication
    emiResult.style.fontSize = "1.2rem"; // Set the font size for the error message
    return; // Exit the function if inputs are invalid
  }

  // where P = principal loan amount, R = monthly interest rate, N = number of months
  //EMI = [P x R x (1+R)^N]/[(1+R)^N-1]   //  EMI formula

  const emi =
    (principal *
      annualInterestRate *
      Math.pow(1 + annualInterestRate, numberOfMonths)) /
    (Math.pow(1 + annualInterestRate, numberOfMonths) - 1);

  emiResult.textContent = `Your Mothly EMI is: ₹${emi.toFixed(2)}`; // Display the calculated EMI in the result area
  emiResult.style.color = "lightgreen"; // Set the text color to light green for success indication
});

resetButton.addEventListener("click", function () {
  // Reset the form when the reset button is clicked
  // Clear the input fields and result display area
  loanAmountInput.value = ""; // Clear the loan amount input field
  interestRateInput.value = ""; // Clear the interest rate input field
  loanTenureInput.value = ""; // Clear the loan tenure input field
  emiResult.textContent = ""; // Clear the EMI result display area
  emiResult.style.color = ""; // Reset the text color
  loanAmountInput.focus(); // Set focus back to the loan amount input field
  // Reset the focus to the loan amount input field
});
