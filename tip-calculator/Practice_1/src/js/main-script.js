const inputBill = document.querySelector("#input-bill"); // Input field for the bill amount
const inputTipPercentage = document.querySelector("#input-tip-percentage"); // Input field for the tip percentage
const calculateBtn = document.querySelector("#calculate-btn"); // Button to calculate the total bill with tip
const clearBtn = document.querySelector("#clear-btn"); // Button to clear the input fields and result
const totalAmt = document.querySelector("#total-amt"); // Element to display the total amount including tip

calculateBtn.addEventListener("click", function () {
  // Calculate the total bill with tip when the button is clicked
  inputBill.value = inputBill.value.trim(); // Trim whitespace from the input value
  inputTipPercentage.value = inputTipPercentage.value.trim(); // Trim whitespace from the input value

  if (isNaN(inputBill.value) || isNaN(inputTipPercentage.value)) {
    // Check if the input values are not numbers
    totalAmt.textContent = "Please enter valid numbers."; // Display error message
    inputBill.style.borderColor = "red"; // Change border color to red
    inputTipPercentage.style.borderColor = "red"; // Change border color to red
    return; // Exit the function if inputs are invalid
  }

  if (inputBill.value === "" || inputTipPercentage.value === "") {
    // Check if the input fields are empty
    totalAmt.textContent = "Please fill in all fields."; // Display error message
    inputBill.style.borderColor = "red"; // Change border color to red
    inputTipPercentage.style.borderColor = "red"; // Change border color to red
    return; // Exit the function if inputs are empty
  }

  const bill = parseFloat(inputBill.value); // Parse the bill amount as a float
  const tipPercentage = parseFloat(inputTipPercentage.value) / 100; // Parse the tip percentage as a float and convert it to a decimal

  if (bill < 0) {
    // Check if the bill amount is negative
    totalAmt.textContent = "Bill amount cannot be negative."; // Display error message
    inputBill.style.borderColor = "red"; // Change border color to red
    return; // Exit the function if bill amount is negative
  }

  const totalBillWithTip = bill + bill * tipPercentage; // Calculate the total bill with tip
  totalAmt.textContent = `Bill: $${bill}, Tip Percentage: ${
    tipPercentage * 100
  }%, Total Bill: $${totalBillWithTip.toFixed(2)}`; // Display the result with two decimal places
  totalAmt.style.display = "block"; // Show the result element
  inputBill.style.borderColor = "green"; // Change border color to green
  inputTipPercentage.style.borderColor = "green"; // Change border color to green
});

clearBtn.addEventListener("click", function () {
  // Clear the input fields and result when the button is clicked
  inputBill.value = ""; // Clear the bill input field
  inputTipPercentage.value = ""; // Clear the tip percentage input field
  totalAmt.textContent = ""; // Clear the result text
  totalAmt.style.display = "none"; // Hide the result element
  inputBill.style.borderColor = "#ccc"; // Reset border color to default
  inputTipPercentage.style.borderColor = "#ccc"; // Reset border color to default
  inputBill.focus(); // Set focus back to the bill input field
});
