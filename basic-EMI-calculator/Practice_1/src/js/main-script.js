const princpleAmt = document.querySelector("#principle-amount"); // Get the principle amount input element
const interestRate = document.querySelector("#interest-rate"); // Get the interest rate input element
const tenureEL = document.querySelector("#tenure"); // Get the tenure input element
const monnthlyEmi = document.querySelector("#mothly-emi"); // Get the monthly EMI output element
const calculateBtn = document.querySelector("#calculate-btn"); // Get the calculate button element

calculateBtn.addEventListener("click", () => {
  // Add click event listener to the calculate button
  if (
    princpleAmt.value === "" ||
    interestRate.value === "" ||
    tenureEL.value === ""
  ) {
    // Check if any of the input fields are empty
    monnthlyEmi.textContent = "Please fill all the fields"; // Show an alert if any field is empty
    monnthlyEmi.style.display = "block"; // Show the output element
    monnthlyEmi.style.color = "red"; // Change the color of the output element to red
    return; // Exit the function if any field is empty
  }

  const princple = Number(princpleAmt.value); // Get the value of the principle amount input
  const IR = Number((interestRate.value / 1200).toFixed(6)); // Calculate the interest rate per month
  const tenure = Number(tenureEL.value) * 12; // Get the tenure in months (assuming input is in years)
  const compoundFactor = Number(Math.pow(1 + IR, tenure).toFixed(3)); // Calculate the compound factor for the EMI formula
  //EMI = [P x R x (1+R)^N]/[(1+R)^N-1]   //  EMI formula
  // where P = principal loan amount, R = monthly interest rate, N = number of months

  const upperEMICalcution = Number((princple * IR).toFixed(1)) * compoundFactor; // Calculate the upper part of the EMI formula

  const lowerEMICalcution = compoundFactor - 1; // Calculate the lower part of the EMI formula
  const EMI = upperEMICalcution / lowerEMICalcution; // Calculate the EMI

  monnthlyEmi.textContent = `${EMI.toFixed(2)} per month`; // Display the EMI in the output element
  monnthlyEmi.style.display = "block"; // Show the output element
  monnthlyEmi.style.color = "black"; // Change the color of the output element to green
  princpleAmt.value = ""; // Clear the principle amount input field
  interestRate.value = ""; // Clear the interest rate input field
  tenureEL.value = ""; // Clear the tenure input field
  princpleAmt.focus(); // Set focus back to the principle amount input field
});
