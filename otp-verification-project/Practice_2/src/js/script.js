const inputElements = document.querySelectorAll("input[type='number']"); // Select all input elements of type number
const submitBtn = document.querySelector("#submit-btn"); // Select the submit button

inputElements.forEach(function (element, index) {
  // Loop through each input element
  // Add an event listener for input events on each element
  element.addEventListener("input", (event) => {
    // When input is detected
    const currentInput = event.target; // Get the current input element
    // Get the value of the current input

    let value = currentInput.value; //  Replace non-digit characters with an empty string
    // Ensure only the first digit is kept

    value = value.replace(/\D/g, ""); // Remove any non-digit characters

    if (value.length > 1) {
      // If the value has more than one digit
      value = value.slice(0, 1); // Keep only the first digit
    }

    currentInput.value = value; // Update the current input's value

    if (index < inputElements.length - 1) {
      // If not the last input element
      // Move focus to the next input element
      const nextInput = inputElements[index + 1]; // Get the next input element
      if (value) {
        // If the current input has a value
        nextInput.focus(); // Focus on the next input element
      } else {
        // If the current input is empty
        currentInput.focus(); // Keep focus on the current input element
      }
    }

    // Add a keydown event listener to handle backspace
    // If backspace is pressed and the current input is empty, focus on the previous input
    element.addEventListener("keydown", (e) => {
      // Add keydown event listener
      // Check if the key pressed is Backspace

      if (e.key === "Backspace" && element.value === "" && index > 0) {
        // Check if backspace is pressed and current input is empty
        const previousInput = inputElements[index - 1]; // Get the previous input element
        previousInput.focus(); // Focus on the previous input element
      }
    });

    // Add a click event listener to the submit button
    // When the submit button is clicked, check if all inputs are filled
    submitBtn.addEventListener("click", (e) => {
      // Add click event listener to the submit button
      e.preventDefault(); // Prevent default form submission behavior
      // Collect values from all input elements
      const inputValues = Array.from(inputElements) // Convert NodeList to Array
        .map((input) => input.value) // Map each input to its value
        .join(""); // Join values into a single string

      if (inputValues.length === inputElements.length) {
        // Check if all inputs are filled
        // If all inputs are filled, alert the values and reset the inputs
        alert(`Submitted values: ${inputValues}`); // Alert the collected values
        // Reset all input values to empty strings
        inputElements.forEach((input) => (input.value = "")); // Reset each input to empty
        // Focus on the first input element and reload the page
        inputElements[0].focus(); // Focus on the first input element
        // Reload the page to reset the form
        location.reload(); //  Reload the page
      } else {
        // If not all inputs are filled
        alert("Please fill all the inputs before submitting."); // Alert if not all inputs are filled
      }
    });
  });
});
