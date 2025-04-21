const inputBill = document.querySelector("#input-bill"); // Input field for bill amount
const inputPercentage = document.querySelector("#input-tip-percentage"); // Input field for tip percentage
const calculateBtn = document.querySelector("#calculate-btn"); // Button to calculate the tip
const resetBtn = document.querySelector("#clear-btn");
const resultContainer = document.querySelector("#result-container");
const billAmt = document.querySelector("#bill-amt");
const tipAmt = document.querySelector("#tip-amt");
const totalamt = document.querySelector("#total-amt");

calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(inputBill.value);
  const percentage = parseFloat(inputPercentage.value);

  if (isNaN(bill) || isNaN(percentage)) {
    resultContainer.innerHTML =
      "Please enter valid numbers for bill and tip percentage.";
    return;
  }
  if (bill <= 0 || percentage < 0) {
    resultContainer.innerHTML =
      "Bill amount must be greater than 0 and tip percentage must be non-negative.";
    return;
  }

  const tip = bill + bill * (percentage / 100);

  billAmt.textContent = `₹${tip.toFixed(2)}`;
  tipAmt.textContent = `₹${(bill * (percentage / 100)).toFixed(2)}`;
  totalamt.textContent = `₹${tip.toFixed(2)}`;
  resultContainer.style.display = "block";
});

resetBtn.addEventListener("click", () => {
  inputBill.value = "";
  inputPercentage.value = "";
  resultContainer.style.display = "none";
  billAmt.textContent = "₹0.00";
  tipAmt.textContent = "₹0.00";
  totalamt.textContent = "₹0.00";
  resultContainer.innerHTML = "Result will be displayed here.";
  resultContainer.style.display = "none";
  inputBill.focus();
});
