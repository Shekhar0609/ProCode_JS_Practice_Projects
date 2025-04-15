const loanAmountInput = document.querySelector("#principle-amount"); // Principal loan amount
const interestRateInput = document.querySelector("#interest-rate"); // Monthly interest rate
const loanTenureInput = document.querySelector("#loan-tenure"); // Total number of months
const calculateBtn = document.querySelector("#calculate-btn"); // Calculate button
const monthlyEmi = document.querySelector("#mothly-emi"); // Monthly EMI output

calculateBtn.addEventListener("click", function () {
  // Event listener for calculate button
  const principal = parseFloat(loanAmountInput.value); // Principal loan amount

  const interestRate = parseFloat(interestRateInput.value) / 1200; // Monthly interest rate
  const tenureMonths = parseInt(loanTenureInput.value) * 12; // Total number of months

  if (isNaN(principal) || isNaN(interestRate) || isNaN(tenureMonths)) {
    // Check if inputs are valid numbers
    monthlyEmi.textContent = "Please enter valid numbers."; // Error message for invalid inputs
    monthlyEmi.style.color = "red"; // Change text color to red for error message
    return; // Exit the function if inputs are invalid
  }

  // where P = principal loan amount, R = monthly interest rate, N = number of months
  //EMI = [P x R x (1+R)^N]/[(1+R)^N-1]   //  EMI formula

  const emi = // EMI calculation using the formula
    (principal * interestRate * Math.pow(1 + interestRate, tenureMonths)) / // EMI formula
    (Math.pow(1 + interestRate, tenureMonths) - 1); // EMI formula
  // Display the calculated EMI in the output element

  monthlyEmi.textContent = `Monthly EMI: ₹${emi.toFixed(2)}`; // Format the EMI to 2 decimal places
  monthlyEmi.style.color = "#A7D477"; // Change text color to green for success message
});
