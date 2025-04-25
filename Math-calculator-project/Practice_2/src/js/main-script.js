const inputElement = document.querySelector("#input"); // Input field for the calculator
const buttonElements = document.querySelectorAll("#button"); // All buttons in the calculator

let inputValue = "";  // Variable to store the current input value
buttonElements.forEach((button) => { // Loop through each button and add an event listener
  button.addEventListener("click", () => { // When a button is clicked
    const buttonValue = button.textContent; // Get the text content of the button
    if (buttonValue === "AC") { // If the button is "AC" (All Clear)
      inputValue = ""; // Clear the input value
      inputElement.value = inputValue; // Update the input field
    } else if (button.textContent === "DEL") { // If the button is "DEL" (Delete)
      inputValue = inputValue.slice(0, -1); // Remove the last character from the input value
      inputElement.value = inputValue;  // Update the input field
    } else if (buttonValue === "%") {   // If the button is "%" (Percentage)
      inputValue = (parseFloat(inputValue) / 100).toString(); // Convert the input value to a percentage
      inputElement.value = inputValue;  // Update the input field
    } else if (buttonValue === "=") { // If the button is "=" (Equals)
      try { // Try to evaluate the input value as a mathematical expression
        inputValue = eval(inputValue);  // Evaluate the expression
        inputElement.value = inputValue; // Update the input field with the result
      } catch (error) { // If there is an error in the evaluation
        inputElement.value = "Error"; // Display "Error" in the input field
        setTimeout(() => { // After 1 second
          inputElement.value = inputValue; // Reset the input field to the previous value
        }, 1000); // Set a timeout to reset the input field
      }
    } else { // For all other buttons (numbers and operators)
      inputValue += buttonValue; // Append the button value to the input value
      inputElement.value = inputValue;  // Update the input field with the new value
    }
  });
});
