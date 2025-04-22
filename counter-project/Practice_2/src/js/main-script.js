const decrementButton = document.querySelector("#decrement"); // Select the decrement button
const incrementButton = document.querySelector("#increment"); // Select the increment button
const counterDisplay = document.querySelector("#counter"); // Select the counter display element
const resetButton = document.querySelector("#reset"); // Select the reset button

let counter = 0; // Initialize the counter variable

decrementButton.addEventListener("click", () => {
  // Decrement the counter when the button is clicked
  counter--; // Update the counter variable
  counterDisplay.textContent = counter; //  Update the displayed counter value
});

incrementButton.addEventListener("click", () => {
  // Increment the counter when the button is clicked
  counter++; // Update the counter variable
  counterDisplay.textContent = counter; // Update the displayed counter value
});

resetButton.addEventListener("click", () => {
  // Reset the counter when the button is clicked
  counter = 0; // Reset the counter variable to 0
  counterDisplay.textContent = counter; // Update the displayed counter value
});
