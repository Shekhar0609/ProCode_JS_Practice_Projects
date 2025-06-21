const numberElements = document.querySelectorAll('input[type="number"]'); // Select all input elements of type number
const submitButton = document.querySelector('button[type="submit"]'); // Select the submit button

numberElements.forEach((element, idx) => {
  // Iterate over each input element
  // Set the input mode to numeric and restrict input to a single digit
  element.addEventListener("input", (event) => {
    // Add an input event listener
    const currentInput = event.target; // Get the current input element
    let value = currentInput.value; // Get the value of the current input

    value = value.replace(/\D/g, ""); // Remove any non-digit characters
    // Limit the input to a single digit

    if (value.length > 1) {
      // If the value is longer than 1 character
      value = value.slice(0, 1); // Keep only the first character
    }

    currentInput.value = value; // Update the input value
    // If the input is filled and it's not the last element, focus on the next input

    if (value.length === 1) {
      /// If the input has a value
      if (idx + 1 < numberElements.length) {
        // If it's not the last input
        numberElements[idx + 1].focus(); // Focus on the next input
      }
    }
  });

  element.addEventListener("keydown", (event) => {
    // Add a keydown event listener
    // If the key pressed is Backspace and the input is empty, focus on the previous input
    if (event.key === "Backspace" && element.value === "" && idx > 0) {
      // Check if the key is Backspace and the input is empty
      numberElements[idx - 1].focus(); // Focus on the previous input
    }
  });
});

submitButton.addEventListener("click", (event) => {
  // Add a click event listener to the submit button
  // Prevent the default form submission behavior
  event.preventDefault(); // Prevent the form from submitting
  // Collect the values from all input elements and join them into a string
  const values = Array.from(numberElements) // Convert NodeList to an array
    .map((el) => el.value) // Map each input element to its value
    .join(""); // Join the values into a single string
  // Check if all input fields are filled

  if (values.length === numberElements.length) {
    // If all inputs have a value
    // Display the collected values in an alert
    alert(`Submitted values: ${values}`); // Show an alert with the collected values
  } else {
    // If not all inputs are filled
    alert("Please fill all fields."); // Show an alert asking to fill all fields
  }
});
