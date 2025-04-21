const decrementEl = document.querySelector("#decrement"); // Select the decrement button
const incrementEl = document.querySelector("#increment"); // Select the increment button
const counterEl = document.querySelector("#counter"); // Select the counter display element
const resetEl = document.querySelector("#reset"); // Select the reset button

let count = 0; // Initialize the counter variable

decrementEl.addEventListener("click", () => {
  // Decrement the counter
  count--; // Decrease the count by 1
  counterEl.textContent = count; // Update the displayed count
});

incrementEl.addEventListener("click", () => {
  // Increment the counter
  count++; // Increase the count by 1
  counterEl.textContent = count; // Update the displayed count
});

resetEl.addEventListener("click", () => {
  // Reset the counter
  count = 0; // Reset the count to 0
  counterEl.textContent = count; // Update the displayed count
});
