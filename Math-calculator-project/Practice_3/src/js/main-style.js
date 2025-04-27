const displayEL = document.querySelector("#display"); // Select the display element
const buttons = document.querySelectorAll("#button"); // Select all buttons

let displayValue = ""; // Initialize display value

buttons.forEach((button) => {
  // Loop through each button

  button.addEventListener("click", (e) => {
    // Add click event listener to each button
    const buttonValue = e.target.innerText; // Get the button value
    // debugger;  // Uncomment for debugging
    if (buttonValue === "AC") {
      // If button is AC (All Clear)
      displayValue = "0"; // Reset display value to 0
      displayEL.value = displayValue; // Reset display value to 0
    } else if (buttonValue === "DEL") {
      // If button is DEL (Delete)
      displayValue = displayValue.slice(0, -1); // Remove last character from display value
      displayEL.value = displayValue; // Update display value
    } else if (buttonValue === "%") {
      // If button is % (Percentage)
      displayValue = (parseFloat(displayValue) / 100).toString(); // Convert display value to percentage
      displayEL.value = displayValue; // Update display value
    } else if (buttonValue === "=") {
      // If button is = (Equals)
      try {
        // Try to evaluate the expression
        displayValue = eval(displayValue); // Evaluate the expression
        if (displayValue === undefined || displayValue === "") {
          // If display value is undefined or empty
          displayValue = "0"; // Set display value to 0
          displayEL.value = displayValue; // Update display value
          return; // Exit function
        }
        displayEL.value = displayValue; // Update display value
      } catch (error) {
        // Catch any errors in evaluation
        // If there is an error in evaluation
        displayValue = "Error"; // Set display value to Error
        displayEL.value = displayValue; // Update display value
        setTimeout(() => {
          // Clear the display after 1 second
          displayValue = ""; // Reset display value
          displayEL.value = displayValue; // Update display value
        }, 1000); // Clear the display after 1 second
      }
    } else {
      // If button is a number or operator
      displayValue += buttonValue; // Append button value to display value
      displayEL.value = displayValue; // Update display value
    }
  });
});
